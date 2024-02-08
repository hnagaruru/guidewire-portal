package exavalu.pc.account.v1


uses gw.account.AccountPopulator
uses gw.account.AccountSearchCriteria
uses gw.api.json.JsonConfigAccess
uses gw.api.json.JsonObject
uses gw.api.json.mapping.TransformResult
uses gw.api.system.PCLoggerCategory
uses gw.api.system.PLLoggerCategory
uses gw.transaction.Transaction
uses org.slf4j.LoggerFactory

class AgentPortalAccountApiHandler {
  var searchCritera = new AccountSearchCriteria()
  var _logger = LoggerFactory.getLogger(PLLoggerCategory.INTEGRATION,"AgentPortalAccountAPIHandler")
  // Constant for Location number
  public static final var LOCATIONNUMBER : Integer = 1

  // Method to input API data, preprocess it and create a new Account
  function createNewAccount(body : JsonObject) : TransformResult {
    var account : Account
    try {
      // Extracts the data from the payload
      searchCritera.FirstName = body.get("firstName") as String
      searchCritera.LastName = body.get("lastName") as String
      searchCritera.CompanyName = body.get("name") as String
      searchCritera.City = body.get("city") as String
      searchCritera.PostalCode = body.get("zipCode") as String
      searchCritera.Country = body.get("country") as Country
      searchCritera.State = body.get("state") as State
      searchCritera.AddressLine1 = body.get("address1") as String
      searchCritera.AccountOrgType = body.get("orgType") as AccountOrgType
      Transaction.runWithNewBundle(\bundle -> {
        //Populates the Account details
        var acc = new AccountPopulator(searchCritera)
        // Creates the new Account
        account = acc.createNewAccount(bundle, body.get("contactSubtype") as ContactType)
        _logger.info("Account successfully created: ${account.AccountNumber}")
        account.AccountHolder.AccountContact.Contact.PrimaryAddress.AddressType = body.get("addressType") as AddressType
        account.AccountOrgType = searchCritera.AccountOrgType
        // Set Account Primary Location
        setAccountPrimaryLocation(account)
      })
      // response object
      var mapper = JsonConfigAccess.getMapper("exavalu.pc.response.account-1.0", "Account")
      var transformObj = mapper.transformObject(account)
      return transformObj
    } catch (error) {
      // Log the error
      _logger.error("Error creating a new account:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  // Sets the Primary Account Location from the Account Primary Address
  function setAccountPrimaryLocation(account:Account){
    var accountLocation = new AccountLocation()
    accountLocation.LocationNum = LOCATIONNUMBER
    accountLocation.AddressLine1 = account.AccountHolderContact.PrimaryAddress.AddressLine1
    accountLocation.City = account.AccountHolderContact.PrimaryAddress.City
    accountLocation.State = account.AccountHolderContact.PrimaryAddress.State
    accountLocation.PostalCode = account.AccountHolderContact.PrimaryAddress.PostalCode
    accountLocation.Country = account.AccountHolderContact.PrimaryAddress.Country
    account.addToAccountLocations(accountLocation)
    account.PrimaryLocation = accountLocation
  }
//test for gw comparison tool
}


