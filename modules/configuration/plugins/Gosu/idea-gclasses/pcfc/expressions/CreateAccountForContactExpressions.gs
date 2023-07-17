package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccountForContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountForContactExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccountForContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountForContactExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact, forNewSubmission :  boolean) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=CreateAccountForContact) at CreateAccountForContact.pcf: line 14, column 59
    function afterCancel_5 () : void {
      NewAccount.go()
    }
    
    // 'afterCancel' attribute on Page (id=CreateAccountForContact) at CreateAccountForContact.pcf: line 14, column 59
    function afterCancel_dest_6 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=CreateAccountForContact) at CreateAccountForContact.pcf: line 14, column 59
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      afterCommitNewAccount()
    }
    
    // 'beforeCommit' attribute on Page (id=CreateAccountForContact) at CreateAccountForContact.pcf: line 14, column 59
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      beforeCommitNewAccount()
    }
    
    // 'canVisit' attribute on Page (id=CreateAccountForContact) at CreateAccountForContact.pcf: line 14, column 59
    static function canVisit_9 (contact :  Contact, forNewSubmission :  boolean) : java.lang.Boolean {
      return perm.Account.create
    }
    
    // 'def' attribute on ScreenRef at CreateAccountForContact.pcf: line 36, column 92
    function def_onEnter_3 (def :  pcf.CreateAccountScreen) : void {
      def.onEnter(account, producerSelection, duplicateContactsPopupHelper)
    }
    
    // 'def' attribute on ScreenRef at CreateAccountForContact.pcf: line 36, column 92
    function def_refreshVariables_4 (def :  pcf.CreateAccountScreen) : void {
      def.refreshVariables(account, producerSelection, duplicateContactsPopupHelper)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountForContact.pcf: line 20, column 23
    function initialValue_0 () : Account {
      return entity.Account.createAccountForContact(contact)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountForContact.pcf: line 24, column 33
    function initialValue_1 () : ProducerSelection {
      return gw.web.job.submission.NewSubmissionUtil.getOrCreateProducerSelection(account)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountForContact.pcf: line 34, column 69
    function initialValue_2 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(account.AccountHolderContact)
    }
    
    // 'parent' attribute on Page (id=CreateAccountForContact) at CreateAccountForContact.pcf: line 14, column 59
    static function parent_10 (contact :  Contact, forNewSubmission :  boolean) : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    override property get CurrentLocation () : pcf.CreateAccountForContact {
      return super.CurrentLocation as pcf.CreateAccountForContact
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
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
    
    property get producerSelection () : ProducerSelection {
      return getVariableValue("producerSelection", 0) as ProducerSelection
    }
    
    property set producerSelection ($arg :  ProducerSelection) {
      setVariableValue("producerSelection", 0, $arg)
    }
    
    /**
     * Prepares to actually save the new Account to the database
     */
    function beforeCommitNewAccount() {
      account.modifyPrimaryLocationFromMainContact()
      account.addProducerCode(producerSelection.ProducerCode)
    
      if (duplicateContactsPopupHelper.existingPCContactWithABContactMatch != null) {
        duplicateContactsPopupHelper.changeAndRemoveAccountHolder(account, account.AccountHolder.AccountContact)
      }
    }
    
    /**
     * Wraps up after saving new Account to database
     */
    function afterCommitNewAccount() {
      gw.api.web.job.submission.SubmissionUtil.setLastProducerSelection(producerSelection)
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