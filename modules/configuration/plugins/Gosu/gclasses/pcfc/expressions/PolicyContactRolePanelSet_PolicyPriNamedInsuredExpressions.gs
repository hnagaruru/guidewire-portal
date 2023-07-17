package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyPriNamedInsuredExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_6 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_7 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      (policyNamedInsured.AccountContactRole as NamedInsured).IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf: line 14, column 44
    function initialValue_0 () : entity.PolicyPriNamedInsured {
      return policyContactRole as PolicyPriNamedInsured
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf: line 18, column 35
    function initialValue_1 () : entity.PolicyPeriod {
      return policyContactRole.Branch
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf: line 22, column 28
    function initialValue_2 () : Jurisdiction {
      return gw.api.util.JurisdictionMappingUtil.getJurisdiction(policyContactRole.AccountContactRole.AccountContact.Contact.PrimaryAddress)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf: line 26, column 30
    function initialValue_3 () : java.util.Date {
      return referenceState != null ? period.getReferenceDateForCurrentJob(referenceState) : period.EditEffectiveDate
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf: line 30, column 28
    function initialValue_4 () : IndustryCode {
      return period.Job.NewTerm ? null : policyNamedInsured.BasedOn.IndustryCode
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_9 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_10 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_11 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, previousIndustryCode.Code, referenceDate)
    }
    
    // 'title' attribute on TitleBar (id=NamedInsuredTitle) at PolicyContactRolePanelSet.PolicyPriNamedInsured.pcf: line 34, column 67
    function title_5 () : java.lang.String {
      return (typeof policyNamedInsured).TypeInfo.DisplayName
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function valueRoot_14 () : java.lang.Object {
      return (policyNamedInsured.AccountContactRole as NamedInsured)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_12 () : entity.IndustryCode {
      return (policyNamedInsured.AccountContactRole as NamedInsured).IndustryCode
    }
    
    // 'visible' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function visible_8 () : java.lang.Boolean {
      return policyNamedInsured.AccountContactRole.AccountContact.Company and period.Policy.Product.isContactTypeSuitableForProductAccountType(Company)
    }
    
    property get period () : entity.PolicyPeriod {
      return getVariableValue("period", 0) as entity.PolicyPeriod
    }
    
    property set period ($arg :  entity.PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyNamedInsured () : entity.PolicyPriNamedInsured {
      return getVariableValue("policyNamedInsured", 0) as entity.PolicyPriNamedInsured
    }
    
    property set policyNamedInsured ($arg :  entity.PolicyPriNamedInsured) {
      setVariableValue("policyNamedInsured", 0, $arg)
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 0) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 0, $arg)
    }
    
    property get referenceDate () : java.util.Date {
      return getVariableValue("referenceDate", 0) as java.util.Date
    }
    
    property set referenceDate ($arg :  java.util.Date) {
      setVariableValue("referenceDate", 0, $arg)
    }
    
    property get referenceState () : Jurisdiction {
      return getVariableValue("referenceState", 0) as Jurisdiction
    }
    
    property set referenceState ($arg :  Jurisdiction) {
      setVariableValue("referenceState", 0, $arg)
    }
    
    
  }
  
  
}