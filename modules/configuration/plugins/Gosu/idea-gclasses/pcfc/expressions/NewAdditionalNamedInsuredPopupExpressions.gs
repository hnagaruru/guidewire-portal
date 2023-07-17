package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewAdditionalNamedInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAdditionalNamedInsuredPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewAdditionalNamedInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAdditionalNamedInsuredPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewAdditionalNamedInsuredPopup.pcf: line 53, column 62
    function action_10 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_15 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, ReferenceDate, previousIndustryCode)
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAdditionalNamedInsuredPopup.pcf: line 45, column 62
    function action_5 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policyAddlNamedInsured))
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_16 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, ReferenceDate, previousIndustryCode)
    }
    
    // 'beforeCommit' attribute on Popup (id=NewAdditionalNamedInsuredPopup) at NewAdditionalNamedInsuredPopup.pcf: line 12, column 121
    function beforeCommit_31 (pickedValue :  PolicyAddlNamedInsured) : void {
      policyAddlNamedInsured.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewAdditionalNamedInsuredPopup.pcf: line 76, column 77
    function def_onEnter_29 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyAddlNamedInsured, false)
    }
    
    // 'def' attribute on PanelRef at NewAdditionalNamedInsuredPopup.pcf: line 76, column 77
    function def_refreshVariables_30 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyAddlNamedInsured, false)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at NewAdditionalNamedInsuredPopup.pcf: line 62, column 58
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyAddlNamedInsured.Relationship = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      (policyAddlNamedInsured.AccountContactRole as NamedInsured).IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalNamedInsuredPopup.pcf: line 24, column 45
    function initialValue_0 () : entity.PolicyAddlNamedInsured {
      return period.addNewPolicyAddlNamedInsuredOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalNamedInsuredPopup.pcf: line 28, column 28
    function initialValue_1 () : IndustryCode {
      return period.Job.NewTerm ? null : policyAddlNamedInsured.BasedOn.IndustryCode
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalNamedInsuredPopup.pcf: line 32, column 25
    function initialValue_2 () : Contact[] {
      return period.PolicyContactRoles.whereTypeIs(entity.PolicyAddlNamedInsured).map(\ p -> p.AccountContactRole.AccountContact.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalNamedInsuredPopup.pcf: line 36, column 69
    function initialValue_3 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyAddlNamedInsured.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_18 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // EditButtons at NewAdditionalNamedInsuredPopup.pcf: line 48, column 72
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_19 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'pickValue' attribute on EditButtons at NewAdditionalNamedInsuredPopup.pcf: line 48, column 72
    function pickValue_6 () : PolicyAddlNamedInsured {
      return policyAddlNamedInsured
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_20 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, previousIndustryCode.Code, ReferenceDate)
    }
    
    // 'title' attribute on Popup (id=NewAdditionalNamedInsuredPopup) at NewAdditionalNamedInsuredPopup.pcf: line 12, column 121
    static function title_32 (contactType :  typekey.ContactType, period :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicyAddlNamedInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at NewAdditionalNamedInsuredPopup.pcf: line 62, column 58
    function valueRoot_13 () : java.lang.Object {
      return policyAddlNamedInsured
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function valueRoot_23 () : java.lang.Object {
      return (policyAddlNamedInsured.AccountContactRole as NamedInsured)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at NewAdditionalNamedInsuredPopup.pcf: line 62, column 58
    function value_11 () : java.lang.String {
      return policyAddlNamedInsured.Relationship
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_21 () : entity.IndustryCode {
      return (policyAddlNamedInsured.AccountContactRole as NamedInsured).IndustryCode
    }
    
    // 'visible' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function visible_17 () : java.lang.Boolean {
      return policyAddlNamedInsured.AccountContactRole.AccountContact.Company
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAdditionalNamedInsuredPopup.pcf: line 45, column 62
    function visible_4 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewAdditionalNamedInsuredPopup.pcf: line 48, column 72
    function visible_7 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewAdditionalNamedInsuredPopup {
      return super.CurrentLocation as pcf.NewAdditionalNamedInsuredPopup
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
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get policyAddlNamedInsured () : entity.PolicyAddlNamedInsured {
      return getVariableValue("policyAddlNamedInsured", 0) as entity.PolicyAddlNamedInsured
    }
    
    property set policyAddlNamedInsured ($arg :  entity.PolicyAddlNamedInsured) {
      setVariableValue("policyAddlNamedInsured", 0, $arg)
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 0) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 0, $arg)
    }
    
    property get ReferenceState() : Jurisdiction {
      return gw.api.util.JurisdictionMappingUtil.getJurisdiction(policyAddlNamedInsured.AccountContactRole.AccountContact.Contact.PrimaryAddress)
    }
    
    property get ReferenceDate() : java.util.Date {
      return ReferenceState == null ? period.EditEffectiveDate : period.getReferenceDateForCurrentJob(ReferenceState)
    }
    
    
  }
  
  
}