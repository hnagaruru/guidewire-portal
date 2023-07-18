package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/overview/ContactDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/ContactDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=Email_Input) at ContactDetailsDetailViewTile.pcf: line 46, column 45
    function action_11 () : void {
      Mailto.push(contactDetailsHelper.Email)
    }
    
    // 'action' attribute on TextInput (id=FirstAccount_Input) at ContactDetailsDetailViewTile.pcf: line 62, column 57
    function action_22 () : void {
      AccountFileDoRetrievalForward.go(accountsHelper.Accounts[0].AccountNumber)
    }
    
    // 'action' attribute on TextInput (id=SecondAccount_Input) at ContactDetailsDetailViewTile.pcf: line 69, column 57
    function action_30 () : void {
      AccountFileDoRetrievalForward.go(accountsHelper.Accounts[1].AccountNumber)
    }
    
    // 'action' attribute on TextInput (id=ThirdAccount_Input) at ContactDetailsDetailViewTile.pcf: line 76, column 57
    function action_38 () : void {
      AccountFileDoRetrievalForward.go(accountsHelper.Accounts[2].AccountNumber)
    }
    
    // 'action' attribute on TileAction (id=EditContact) at ContactDetailsDetailViewTile.pcf: line 32, column 48
    function action_4 () : void {
      contactDetailsHelper.editContact()
    }
    
    // 'viewMoreAction' attribute on DetailViewTile (id=ContactDetailsDetailViewTile) at ContactDetailsDetailViewTile.pcf: line 10, column 54
    function action_46 () : void {
      contactDetailsHelper.viewMore()
    }
    
    // 'action' attribute on TextInput (id=Email_Input) at ContactDetailsDetailViewTile.pcf: line 46, column 45
    function action_dest_12 () : pcf.api.Destination {
      return pcf.Mailto.createDestination(contactDetailsHelper.Email)
    }
    
    // 'action' attribute on TextInput (id=FirstAccount_Input) at ContactDetailsDetailViewTile.pcf: line 62, column 57
    function action_dest_23 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountsHelper.Accounts[0].AccountNumber)
    }
    
    // 'action' attribute on TextInput (id=SecondAccount_Input) at ContactDetailsDetailViewTile.pcf: line 69, column 57
    function action_dest_31 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountsHelper.Accounts[1].AccountNumber)
    }
    
    // 'action' attribute on TextInput (id=ThirdAccount_Input) at ContactDetailsDetailViewTile.pcf: line 76, column 57
    function action_dest_39 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountsHelper.Accounts[2].AccountNumber)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsDetailViewTile.pcf: line 17, column 67
    function initialValue_0 () : gw.api.web.dashboard.ui.contact.ContactDetailHelper {
      return new gw.api.web.dashboard.ui.contact.ContactDetailHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsDetailViewTile.pcf: line 22, column 72
    function initialValue_1 () : gw.api.web.dashboard.ui.account.ContactAccountListHelper {
      return new gw.api.web.dashboard.ui.account.ContactAccountListHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsDetailViewTile.pcf: line 26, column 91
    function initialValue_2 () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions.Instance
    }
    
    // 'label' attribute on TextInput (id=PrimaryPhone_Input) at ContactDetailsDetailViewTile.pcf: line 50, column 52
    function label_16 () : java.lang.Object {
      return contactDetailsHelper.PrimaryPhoneLabel
    }
    
    // 'label' attribute on TextInput (id=FirstAccount_Input) at ContactDetailsDetailViewTile.pcf: line 62, column 57
    function label_24 () : java.lang.Object {
      return accountsHelper.Accounts[0].AccountHolderContactNameAndNick
    }
    
    // 'label' attribute on TextInput (id=SecondAccount_Input) at ContactDetailsDetailViewTile.pcf: line 69, column 57
    function label_32 () : java.lang.Object {
      return accountsHelper.Accounts[1].AccountHolderContactNameAndNick
    }
    
    // 'label' attribute on TextInput (id=ThirdAccount_Input) at ContactDetailsDetailViewTile.pcf: line 76, column 57
    function label_40 () : java.lang.Object {
      return accountsHelper.Accounts[2].AccountHolderContactNameAndNick
    }
    
    // 'label' attribute on Label (id=ContactDetailsColumnTitle) at ContactDetailsDetailViewTile.pcf: line 37, column 51
    function label_5 () : java.lang.String {
      return contactDetailsHelper.DisplayName
    }
    
    // 'label' attribute on TextInput (id=Address_Input) at ContactDetailsDetailViewTile.pcf: line 41, column 47
    function label_6 () : java.lang.Object {
      return contactDetailsHelper.AddressLabel
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at ContactDetailsDetailViewTile.pcf: line 41, column 47
    function valueRoot_8 () : java.lang.Object {
      return contactDetailsHelper
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at ContactDetailsDetailViewTile.pcf: line 46, column 45
    function value_13 () : java.lang.String {
      return contactDetailsHelper.Email
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ContactDetailsDetailViewTile.pcf: line 50, column 52
    function value_17 () : java.lang.String {
      return contactDetailsHelper.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=FirstAccount_Input) at ContactDetailsDetailViewTile.pcf: line 62, column 57
    function value_25 () : java.lang.String {
      return '#${accountsHelper.Accounts[0].AccountNumber}'
    }
    
    // 'value' attribute on TextInput (id=SecondAccount_Input) at ContactDetailsDetailViewTile.pcf: line 69, column 57
    function value_33 () : java.lang.String {
      return '#${accountsHelper.Accounts[1].AccountNumber}'
    }
    
    // 'value' attribute on TextInput (id=ThirdAccount_Input) at ContactDetailsDetailViewTile.pcf: line 76, column 57
    function value_41 () : java.lang.String {
      return '#${accountsHelper.Accounts[2].AccountNumber}'
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at ContactDetailsDetailViewTile.pcf: line 41, column 47
    function value_7 () : java.lang.String {
      return contactDetailsHelper.Address
    }
    
    // 'visible' attribute on TextInput (id=FirstAccount_Input) at ContactDetailsDetailViewTile.pcf: line 62, column 57
    function visible_21 () : java.lang.Boolean {
      return accountsHelper.isAccountAvailable(0)
    }
    
    // 'visible' attribute on TextInput (id=SecondAccount_Input) at ContactDetailsDetailViewTile.pcf: line 69, column 57
    function visible_29 () : java.lang.Boolean {
      return accountsHelper.isAccountAvailable(1)
    }
    
    // 'visible' attribute on TileAction (id=EditContact) at ContactDetailsDetailViewTile.pcf: line 32, column 48
    function visible_3 () : java.lang.Boolean {
      return permissions.EditContact
    }
    
    // 'visible' attribute on TextInput (id=ThirdAccount_Input) at ContactDetailsDetailViewTile.pcf: line 76, column 57
    function visible_37 () : java.lang.Boolean {
      return accountsHelper.isAccountAvailable(2)
    }
    
    // 'viewMoreVisible' attribute on DetailViewTile (id=ContactDetailsDetailViewTile) at ContactDetailsDetailViewTile.pcf: line 10, column 54
    function visible_45 () : java.lang.Boolean {
      return accountsHelper.ViewMoreVisible
    }
    
    property get accountsHelper () : gw.api.web.dashboard.ui.account.ContactAccountListHelper {
      return getVariableValue("accountsHelper", 0) as gw.api.web.dashboard.ui.account.ContactAccountListHelper
    }
    
    property set accountsHelper ($arg :  gw.api.web.dashboard.ui.account.ContactAccountListHelper) {
      setVariableValue("accountsHelper", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsHelper () : gw.api.web.dashboard.ui.contact.ContactDetailHelper {
      return getVariableValue("contactDetailsHelper", 0) as gw.api.web.dashboard.ui.contact.ContactDetailHelper
    }
    
    property set contactDetailsHelper ($arg :  gw.api.web.dashboard.ui.contact.ContactDetailHelper) {
      setVariableValue("contactDetailsHelper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    
  }
  
  
}