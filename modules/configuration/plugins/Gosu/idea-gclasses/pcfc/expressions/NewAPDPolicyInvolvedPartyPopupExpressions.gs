package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewAPDPolicyInvolvedPartyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAPDPolicyInvolvedPartyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewAPDPolicyInvolvedPartyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAPDPolicyInvolvedPartyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (line :  PolicyLine, contactType :  ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewAPDPolicyInvolvedPartyPopup.pcf: line 54, column 62
    function action_10 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAPDPolicyInvolvedPartyPopup.pcf: line 46, column 62
    function action_5 () : void {
      CurrentLocation.pickValueAndCommit(policyInvolvedParty)
    }
    
    // 'beforeCommit' attribute on Popup (id=NewAPDPolicyInvolvedPartyPopup) at NewAPDPolicyInvolvedPartyPopup.pcf: line 12, column 126
    function beforeCommit_13 (pickedValue :  APDPolicyInvolvedParty) : void {
      policyInvolvedParty.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch);
    }
    
    // 'def' attribute on PanelRef at NewAPDPolicyInvolvedPartyPopup.pcf: line 57, column 74
    function def_onEnter_11 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyInvolvedParty, false)
    }
    
    // 'def' attribute on PanelRef at NewAPDPolicyInvolvedPartyPopup.pcf: line 57, column 74
    function def_refreshVariables_12 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyInvolvedParty, false)
    }
    
    // 'initialValue' attribute on Variable at NewAPDPolicyInvolvedPartyPopup.pcf: line 25, column 38
    function initialValue_0 () : APDPolicyInvolvedParty {
      return line.addNewAPDPolicyInvolvedPartyOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewAPDPolicyInvolvedPartyPopup.pcf: line 29, column 39
    function initialValue_1 () : entity.APDInvolvedParty {
      return policyInvolvedParty.AccountContactRole.AccountContact.getRole(TC_APDINVOLVEDPARTY) as APDInvolvedParty
    }
    
    // 'initialValue' attribute on Variable at NewAPDPolicyInvolvedPartyPopup.pcf: line 33, column 25
    function initialValue_2 () : Contact[] {
      return line.Branch.PolicyContactRoles.where(\elt -> elt.Subtype == typekey.PolicyContactRole.TC_APDPOLICYINVOLVEDPARTY).map(\pd -> pd.AccountContactRole.AccountContact.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewAPDPolicyInvolvedPartyPopup.pcf: line 37, column 69
    function initialValue_3 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyInvolvedParty.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // EditButtons at NewAPDPolicyInvolvedPartyPopup.pcf: line 49, column 72
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewAPDPolicyInvolvedPartyPopup.pcf: line 49, column 72
    function pickValue_6 () : APDPolicyInvolvedParty {
      return policyInvolvedParty
    }
    
    // 'title' attribute on Popup (id=NewAPDPolicyInvolvedPartyPopup) at NewAPDPolicyInvolvedPartyPopup.pcf: line 12, column 126
    static function title_14 (contactType :  ContactType, line :  PolicyLine) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", APDInvolvedParty.Type.TypeInfo.DisplayName)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAPDPolicyInvolvedPartyPopup.pcf: line 46, column 62
    function visible_4 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewAPDPolicyInvolvedPartyPopup.pcf: line 49, column 72
    function visible_7 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewAPDPolicyInvolvedPartyPopup {
      return super.CurrentLocation as pcf.NewAPDPolicyInvolvedPartyPopup
    }
    
    property get contactType () : ContactType {
      return getVariableValue("contactType", 0) as ContactType
    }
    
    property set contactType ($arg :  ContactType) {
      setVariableValue("contactType", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get existingContacts () : Contact[] {
      return getVariableValue("existingContacts", 0) as Contact[]
    }
    
    property set existingContacts ($arg :  Contact[]) {
      setVariableValue("existingContacts", 0, $arg)
    }
    
    property get involvedParty () : entity.APDInvolvedParty {
      return getVariableValue("involvedParty", 0) as entity.APDInvolvedParty
    }
    
    property set involvedParty ($arg :  entity.APDInvolvedParty) {
      setVariableValue("involvedParty", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getVariableValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyInvolvedParty () : APDPolicyInvolvedParty {
      return getVariableValue("policyInvolvedParty", 0) as APDPolicyInvolvedParty
    }
    
    property set policyInvolvedParty ($arg :  APDPolicyInvolvedParty) {
      setVariableValue("policyInvolvedParty", 0, $arg)
    }
    
    
  }
  
  
}