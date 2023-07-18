package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewAdditionalInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAdditionalInsuredPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewAdditionalInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAdditionalInsuredPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (line :  PolicyLine, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewAdditionalInsuredPopup.pcf: line 57, column 62
    function action_11 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAdditionalInsuredPopup.pcf: line 49, column 62
    function action_6 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policyAddlInsuredDetail))
    }
    
    // 'beforeCommit' attribute on Popup (id=NewAdditionalInsuredPopup) at NewAdditionalInsuredPopup.pcf: line 12, column 116
    function beforeCommit_18 (pickedValue :  PolicyAddlInsuredDetail) : void {
      policyAddlInsured.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewAdditionalInsuredPopup.pcf: line 72, column 72
    function def_onEnter_16 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyAddlInsured, false)
    }
    
    // 'def' attribute on PanelRef at NewAdditionalInsuredPopup.pcf: line 72, column 72
    function def_refreshVariables_17 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyAddlInsured, false)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewAdditionalInsuredPopup.pcf: line 68, column 56
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyAddlInsuredDetail.AdditionalInsuredType = (__VALUE_TO_SET as typekey.AdditionalInsuredType)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInsuredPopup.pcf: line 24, column 46
    function initialValue_0 () : entity.PolicyAddlInsuredDetail {
      return line.addNewAdditionalInsuredDetailOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInsuredPopup.pcf: line 28, column 40
    function initialValue_1 () : entity.PolicyAddlInsured {
      return policyAddlInsuredDetail.PolicyAddlInsured
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInsuredPopup.pcf: line 32, column 30
    function initialValue_2 () : entity.Contact {
      return policyAddlInsured.AccountContactRole.AccountContact.Contact
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInsuredPopup.pcf: line 36, column 25
    function initialValue_3 () : Contact[] {
      return line.AdditionalInsureds.map(\pd -> pd.AccountContactRole.AccountContact.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInsuredPopup.pcf: line 40, column 69
    function initialValue_4 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(contact, existingContacts)
    }
    
    // EditButtons at NewAdditionalInsuredPopup.pcf: line 52, column 72
    function label_9 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewAdditionalInsuredPopup.pcf: line 52, column 72
    function pickValue_7 () : PolicyAddlInsuredDetail {
      return policyAddlInsuredDetail
    }
    
    // 'title' attribute on Popup (id=NewAdditionalInsuredPopup) at NewAdditionalInsuredPopup.pcf: line 12, column 116
    static function title_19 (contactType :  typekey.ContactType, line :  PolicyLine) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicyAddlInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewAdditionalInsuredPopup.pcf: line 68, column 56
    function valueRoot_14 () : java.lang.Object {
      return policyAddlInsuredDetail
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewAdditionalInsuredPopup.pcf: line 68, column 56
    function value_12 () : typekey.AdditionalInsuredType {
      return policyAddlInsuredDetail.AdditionalInsuredType
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAdditionalInsuredPopup.pcf: line 49, column 62
    function visible_5 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewAdditionalInsuredPopup.pcf: line 52, column 72
    function visible_8 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewAdditionalInsuredPopup {
      return super.CurrentLocation as pcf.NewAdditionalInsuredPopup
    }
    
    property get contact () : entity.Contact {
      return getVariableValue("contact", 0) as entity.Contact
    }
    
    property set contact ($arg :  entity.Contact) {
      setVariableValue("contact", 0, $arg)
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
    
    property get existingContacts () : Contact[] {
      return getVariableValue("existingContacts", 0) as Contact[]
    }
    
    property set existingContacts ($arg :  Contact[]) {
      setVariableValue("existingContacts", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getVariableValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyAddlInsured () : entity.PolicyAddlInsured {
      return getVariableValue("policyAddlInsured", 0) as entity.PolicyAddlInsured
    }
    
    property set policyAddlInsured ($arg :  entity.PolicyAddlInsured) {
      setVariableValue("policyAddlInsured", 0, $arg)
    }
    
    property get policyAddlInsuredDetail () : entity.PolicyAddlInsuredDetail {
      return getVariableValue("policyAddlInsuredDetail", 0) as entity.PolicyAddlInsuredDetail
    }
    
    property set policyAddlInsuredDetail ($arg :  entity.PolicyAddlInsuredDetail) {
      setVariableValue("policyAddlInsuredDetail", 0, $arg)
    }
    
    
  }
  
  
}