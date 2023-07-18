package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewPrimaryNamedInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPrimaryNamedInsuredPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewPrimaryNamedInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPrimaryNamedInsuredPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_10 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, ReferenceDate, previousIndustryCode)
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewPrimaryNamedInsuredPopup.pcf: line 41, column 62
    function action_4 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policyPriNamedInsured))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewPrimaryNamedInsuredPopup.pcf: line 49, column 62
    function action_9 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_11 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, ReferenceDate, previousIndustryCode)
    }
    
    // 'beforeCommit' attribute on Popup (id=NewPrimaryNamedInsuredPopup) at NewPrimaryNamedInsuredPopup.pcf: line 12, column 120
    function beforeCommit_26 (pickedValue :  PolicyPriNamedInsured) : void {
      policyPriNamedInsured.resetPrimaryNamedInsured(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewPrimaryNamedInsuredPopup.pcf: line 67, column 76
    function def_onEnter_24 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyPriNamedInsured, false)
    }
    
    // 'def' attribute on PanelRef at NewPrimaryNamedInsuredPopup.pcf: line 67, column 76
    function def_refreshVariables_25 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyPriNamedInsured, false)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      (policyPriNamedInsured.AccountContactRole as NamedInsured).IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'initialValue' attribute on Variable at NewPrimaryNamedInsuredPopup.pcf: line 24, column 44
    function initialValue_0 () : entity.PolicyPriNamedInsured {
      return initializePrimaryNamedInsured()
    }
    
    // 'initialValue' attribute on Variable at NewPrimaryNamedInsuredPopup.pcf: line 28, column 28
    function initialValue_1 () : IndustryCode {
      return period.Job.NewTerm ? null : policyPriNamedInsured.BasedOn.IndustryCode
    }
    
    // 'initialValue' attribute on Variable at NewPrimaryNamedInsuredPopup.pcf: line 32, column 69
    function initialValue_2 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyPriNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_13 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // EditButtons at NewPrimaryNamedInsuredPopup.pcf: line 44, column 72
    function label_7 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_14 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'pickValue' attribute on EditButtons at NewPrimaryNamedInsuredPopup.pcf: line 44, column 72
    function pickValue_5 () : PolicyPriNamedInsured {
      return policyPriNamedInsured
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_15 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, previousIndustryCode.Code, ReferenceDate)
    }
    
    // 'title' attribute on Popup (id=NewPrimaryNamedInsuredPopup) at NewPrimaryNamedInsuredPopup.pcf: line 12, column 120
    static function title_27 (contactType :  typekey.ContactType, period :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicyPriNamedInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function valueRoot_18 () : java.lang.Object {
      return (policyPriNamedInsured.AccountContactRole as NamedInsured)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_16 () : entity.IndustryCode {
      return (policyPriNamedInsured.AccountContactRole as NamedInsured).IndustryCode
    }
    
    // 'visible' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function visible_12 () : java.lang.Boolean {
      return not period.Policy.Product.Personal and policyPriNamedInsured.AccountContactRole.AccountContact.Company
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewPrimaryNamedInsuredPopup.pcf: line 41, column 62
    function visible_3 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewPrimaryNamedInsuredPopup.pcf: line 44, column 72
    function visible_6 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewPrimaryNamedInsuredPopup {
      return super.CurrentLocation as pcf.NewPrimaryNamedInsuredPopup
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
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get policyPriNamedInsured () : entity.PolicyPriNamedInsured {
      return getVariableValue("policyPriNamedInsured", 0) as entity.PolicyPriNamedInsured
    }
    
    property set policyPriNamedInsured ($arg :  entity.PolicyPriNamedInsured) {
      setVariableValue("policyPriNamedInsured", 0, $arg)
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 0) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 0, $arg)
    }
    
    function initializePrimaryNamedInsured() : PolicyPriNamedInsured {
      period.changePrimaryNamedInsuredTo(period.Policy.Account.addNewAccountContactOfType(contactType).Contact)
      return period.PrimaryNamedInsured
    }
    
    property get ReferenceState() : Jurisdiction {
     return gw.api.util.JurisdictionMappingUtil.getJurisdiction(policyPriNamedInsured.AccountContactRole.AccountContact.Contact.PrimaryAddress) 
    }
    
    property get ReferenceDate() : java.util.Date {
      return ReferenceState == null ? period.EditEffectiveDate : period.getReferenceDateForCurrentJob(ReferenceState)  
    }
    
    
  }
  
  
}