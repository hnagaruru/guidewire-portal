package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.web.job.submission.SubmissionUtil
uses gw.api.database.PCBeanFinder
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (insuredContactType :  typekey.ContactType, populator :  gw.account.AccountPopulator, forNewSubmission :  boolean) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=CreateAccount) at CreateAccount.pcf: line 13, column 59
    function afterCancel_5 () : void {
      NewAccount.go()
    }
    
    // 'afterCancel' attribute on Page (id=CreateAccount) at CreateAccount.pcf: line 13, column 59
    function afterCancel_dest_6 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=CreateAccount) at CreateAccount.pcf: line 13, column 59
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      afterCommitNewAccount()
    }
    
    // 'beforeCommit' attribute on Page (id=CreateAccount) at CreateAccount.pcf: line 13, column 59
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      beforeCommitNewAccount()
    }
    
    // 'def' attribute on ScreenRef at CreateAccount.pcf: line 38, column 92
    function def_onEnter_3 (def :  pcf.CreateAccountScreen) : void {
      def.onEnter(account, producerSelection, duplicateContactsPopupHelper)
    }
    
    // 'def' attribute on ScreenRef at CreateAccount.pcf: line 38, column 92
    function def_refreshVariables_4 (def :  pcf.CreateAccountScreen) : void {
      def.refreshVariables(account, producerSelection, duplicateContactsPopupHelper)
    }
    
    // 'initialValue' attribute on Variable at CreateAccount.pcf: line 28, column 23
    function initialValue_0 () : Account {
      return populator.createNewAccount(gw.transaction.Transaction.getCurrent(), insuredContactType)
    }
    
    // 'initialValue' attribute on Variable at CreateAccount.pcf: line 32, column 33
    function initialValue_1 () : ProducerSelection {
      return gw.web.account.AccountCreateUtil.getOrCreateProducerSelectionForCreateAccount()
    }
    
    // 'initialValue' attribute on Variable at CreateAccount.pcf: line 36, column 69
    function initialValue_2 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(account.AccountHolderContact)
    }
    
    // 'parent' attribute on Page (id=CreateAccount) at CreateAccount.pcf: line 13, column 59
    static function parent_9 (forNewSubmission :  boolean, insuredContactType :  typekey.ContactType, populator :  gw.account.AccountPopulator) : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    override property get CurrentLocation () : pcf.CreateAccount {
      return super.CurrentLocation as pcf.CreateAccount
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get forNewSubmission () : boolean {
      return getVariableValue("forNewSubmission", 0) as java.lang.Boolean
    }
    
    property set forNewSubmission ($arg :  boolean) {
      setVariableValue("forNewSubmission", 0, $arg)
    }
    
    property get insuredContactType () : typekey.ContactType {
      return getVariableValue("insuredContactType", 0) as typekey.ContactType
    }
    
    property set insuredContactType ($arg :  typekey.ContactType) {
      setVariableValue("insuredContactType", 0, $arg)
    }
    
    property get populator () : gw.account.AccountPopulator {
      return getVariableValue("populator", 0) as gw.account.AccountPopulator
    }
    
    property set populator ($arg :  gw.account.AccountPopulator) {
      setVariableValue("populator", 0, $arg)
    }
    
    property get producerSelection () : ProducerSelection {
      return getVariableValue("producerSelection", 0) as ProducerSelection
    }
    
    property set producerSelection ($arg :  ProducerSelection) {
      setVariableValue("producerSelection", 0, $arg)
    }
    
    
    /**
     * Prepares to actually save the new Account to the database
     */
    
    public function beforeCommitNewAccount() {
      account.createPrimaryLocationFromMainContact()
      account.addProducerCode(producerSelection.ProducerCode)
      var existingPCContactWithABContactMatch = duplicateContactsPopupHelper.existingPCContactWithABContactMatch
      if (existingPCContactWithABContactMatch != null) {
        // existing ab contact that matches the current new contact
        var newAccountContact = account.AccountHolder.AccountContact
        existingPCContactWithABContactMatch = account.Bundle.add(PCBeanFinder.loadBeanByPublicID<Contact>(existingPCContactWithABContactMatch.PublicID, Contact))
        existingPCContactWithABContactMatch.copyUIFieldsFromContact(newAccountContact.Contact)
        account.changeAccountHolderTo(existingPCContactWithABContactMatch)
        newAccountContact.Contact.OfficialIDs.each(\o -> o.remove())
        newAccountContact.Contact.remove()
        newAccountContact.remove()
      }
    }
    
    public function afterCommitNewAccount() {
      SubmissionUtil.setLastProducerSelection(producerSelection)
      gw.api.web.util.SessionUtil.addAccountToHistory(account)
      if (forNewSubmission) {
        SubmissionManager.go(account)
        NewSubmission.push(account)
      } else {
        AccountFile_Summary.go(account)
      }
    }
    
    
  }
  
  
}