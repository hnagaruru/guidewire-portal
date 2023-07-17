package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewBillingContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewBillingContactPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewBillingContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewBillingContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewBillingContactPopup.pcf: line 38, column 62
    function action_3 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(newPolicyBillingContact))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewBillingContactPopup.pcf: line 46, column 62
    function action_8 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'beforeCommit' attribute on Popup (id=NewBillingContactPopup) at NewBillingContactPopup.pcf: line 12, column 112
    function beforeCommit_11 (pickedValue :  PolicyBillingContact) : void {
      newPolicyBillingContact.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch); policyPeriod.changeBillingContactTo(newPolicyBillingContact.AccountContactRole.AccountContact.Contact)
    }
    
    // 'def' attribute on PanelRef at NewBillingContactPopup.pcf: line 49, column 76
    function def_onEnter_9 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(newPolicyBillingContact,true)
    }
    
    // 'def' attribute on PanelRef at NewBillingContactPopup.pcf: line 49, column 76
    function def_refreshVariables_10 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(newPolicyBillingContact,true)
    }
    
    // 'initialValue' attribute on Variable at NewBillingContactPopup.pcf: line 24, column 43
    function initialValue_0 () : entity.PolicyBillingContact {
      return policyPeriod.addNewPolicyBillingContactOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewBillingContactPopup.pcf: line 28, column 69
    function initialValue_1 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(newPolicyBillingContact.AccountContactRole.AccountContact.Contact)
    }
    
    // EditButtons at NewBillingContactPopup.pcf: line 41, column 72
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewBillingContactPopup.pcf: line 41, column 72
    function pickValue_4 () : PolicyBillingContact {
      return newPolicyBillingContact
    }
    
    // 'title' attribute on Popup (id=NewBillingContactPopup) at NewBillingContactPopup.pcf: line 12, column 112
    static function title_12 (contactType :  typekey.ContactType, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", PolicyBillingContact.Type.TypeInfo.DisplayName)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewBillingContactPopup.pcf: line 38, column 62
    function visible_2 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewBillingContactPopup.pcf: line 41, column 72
    function visible_5 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewBillingContactPopup {
      return super.CurrentLocation as pcf.NewBillingContactPopup
    }
    
    property get contactType () : typekey.ContactType {
      return getVariableValue("contactType", 0) as typekey.ContactType
    }
    
    property set contactType ($arg :  typekey.ContactType) {
      setVariableValue("contactType", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get newPolicyBillingContact () : entity.PolicyBillingContact {
      return getVariableValue("newPolicyBillingContact", 0) as entity.PolicyBillingContact
    }
    
    property set newPolicyBillingContact ($arg :  entity.PolicyBillingContact) {
      setVariableValue("newPolicyBillingContact", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}