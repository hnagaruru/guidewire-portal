package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewOwnerOfficerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOwnerOfficerPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewOwnerOfficerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOwnerOfficerPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (line :  WorkersCompLine, contactType :  ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewOwnerOfficerPopup.pcf: line 42, column 62
    function action_4 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policyOwnerOfficer))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewOwnerOfficerPopup.pcf: line 50, column 62
    function action_9 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'beforeCommit' attribute on Popup (id=NewOwnerOfficerPopup) at NewOwnerOfficerPopup.pcf: line 12, column 117
    function beforeCommit_40 (pickedValue :  PolicyOwnerOfficer) : void {
      policyOwnerOfficer.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewOwnerOfficerPopup.pcf: line 98, column 73
    function def_onEnter_38 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyOwnerOfficer, false)
    }
    
    // 'def' attribute on PanelRef at NewOwnerOfficerPopup.pcf: line 98, column 73
    function def_refreshVariables_39 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyOwnerOfficer, false)
    }
    
    // 'value' attribute on TypeKeyInput (id=Include_Input) at NewOwnerOfficerPopup.pcf: line 61, column 43
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.Included = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at NewOwnerOfficerPopup.pcf: line 72, column 46
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TextInput (id=Ownership_Input) at NewOwnerOfficerPopup.pcf: line 88, column 44
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.OwnershipPct = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at NewOwnerOfficerPopup.pcf: line 94, column 47
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.RelationshipTitle = (__VALUE_TO_SET as typekey.Relationship)
    }
    
    // 'editable' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function editable_21 () : java.lang.Boolean {
      return (policyOwnerOfficer.Included == Inclusion.TC_INCL) and (policyOwnerOfficer.State != null) and policyOwnerOfficer.Branch.WorkersCompLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State)).Count > 0
    }
    
    // 'initialValue' attribute on Variable at NewOwnerOfficerPopup.pcf: line 25, column 41
    function initialValue_0 () : entity.PolicyOwnerOfficer {
      return line.addNewOwnerOfficerOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewOwnerOfficerPopup.pcf: line 29, column 25
    function initialValue_1 () : Contact[] {
      return line.PolicyOwnerOfficers.map(\ p -> p.AccountContactRole.AccountContact.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewOwnerOfficerPopup.pcf: line 33, column 69
    function initialValue_2 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyOwnerOfficer.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // EditButtons at NewOwnerOfficerPopup.pcf: line 45, column 72
    function label_7 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewOwnerOfficerPopup.pcf: line 45, column 72
    function pickValue_5 () : PolicyOwnerOfficer {
      return policyOwnerOfficer
    }
    
    // 'title' attribute on Popup (id=NewOwnerOfficerPopup) at NewOwnerOfficerPopup.pcf: line 12, column 117
    static function title_41 (contactType :  ContactType, line :  WorkersCompLine) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicyOwnerOfficer.Type.TypeInfo.DisplayName)
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at NewOwnerOfficerPopup.pcf: line 72, column 46
    function valueRange_17 () : java.lang.Object {
      return policyOwnerOfficer.Branch.WorkersCompLine.Jurisdictions.map(\j -> j.State)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function valueRange_25 () : java.lang.Object {
      return policyOwnerOfficer.Branch.WorkersCompLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State))
    }
    
    // 'value' attribute on TypeKeyInput (id=Include_Input) at NewOwnerOfficerPopup.pcf: line 61, column 43
    function valueRoot_12 () : java.lang.Object {
      return policyOwnerOfficer
    }
    
    // 'value' attribute on TypeKeyInput (id=Include_Input) at NewOwnerOfficerPopup.pcf: line 61, column 43
    function value_10 () : typekey.Inclusion {
      return policyOwnerOfficer.Included
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at NewOwnerOfficerPopup.pcf: line 72, column 46
    function value_14 () : typekey.Jurisdiction {
      return policyOwnerOfficer.State
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function value_22 () : entity.WCClassCode {
      return policyOwnerOfficer.ClassCode
    }
    
    // 'value' attribute on TextInput (id=Ownership_Input) at NewOwnerOfficerPopup.pcf: line 88, column 44
    function value_30 () : java.lang.Integer {
      return policyOwnerOfficer.OwnershipPct
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at NewOwnerOfficerPopup.pcf: line 94, column 47
    function value_34 () : typekey.Relationship {
      return policyOwnerOfficer.RelationshipTitle
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at NewOwnerOfficerPopup.pcf: line 72, column 46
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at NewOwnerOfficerPopup.pcf: line 72, column 46
    function verifyValueRangeIsAllowedType_18 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function verifyValueRangeIsAllowedType_26 ($$arg :  entity.WCClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.database.IQueryBeanResult<entity.WCClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at NewOwnerOfficerPopup.pcf: line 72, column 46
    function verifyValueRange_19 () : void {
      var __valueRangeArg = policyOwnerOfficer.Branch.WorkersCompLine.Jurisdictions.map(\j -> j.State)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at NewOwnerOfficerPopup.pcf: line 82, column 45
    function verifyValueRange_27 () : void {
      var __valueRangeArg = policyOwnerOfficer.Branch.WorkersCompLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewOwnerOfficerPopup.pcf: line 42, column 62
    function visible_3 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewOwnerOfficerPopup.pcf: line 45, column 72
    function visible_6 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewOwnerOfficerPopup {
      return super.CurrentLocation as pcf.NewOwnerOfficerPopup
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
    
    property get line () : WorkersCompLine {
      return getVariableValue("line", 0) as WorkersCompLine
    }
    
    property set line ($arg :  WorkersCompLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyOwnerOfficer () : entity.PolicyOwnerOfficer {
      return getVariableValue("policyOwnerOfficer", 0) as entity.PolicyOwnerOfficer
    }
    
    property set policyOwnerOfficer ($arg :  entity.PolicyOwnerOfficer) {
      setVariableValue("policyOwnerOfficer", 0, $arg)
    }
    
    
  }
  
  
}