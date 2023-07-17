package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/LineLocationDetailInputSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineLocationDetailInputSet_WorkersCompExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/LineLocationDetailInputSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LineLocationDetailInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ExistingPolicyNamedInsured) at LineLocationDetailInputSet.WorkersComp.pcf: line 52, column 36
    function action_9 () : void {
      polLocation.SingleLocationNamedInsured = polNamedInsured
    }
    
    // 'label' attribute on MenuItem (id=ExistingPolicyNamedInsured) at LineLocationDetailInputSet.WorkersComp.pcf: line 52, column 36
    function label_10 () : java.lang.Object {
      return polNamedInsured
    }
    
    property get polNamedInsured () : entity.PolicyNamedInsured {
      return getIteratedValue(1) as entity.PolicyNamedInsured
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/LineLocationDetailInputSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineLocationDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Remove) at LineLocationDetailInputSet.WorkersComp.pcf: line 58, column 67
    function action_13 () : void {
      polLocation.SingleLocationNamedInsured = null
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_24 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_25 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'value' attribute on TextInput (id=EmployeeCount_Input) at LineLocationDetailInputSet.WorkersComp.pcf: line 66, column 37
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.EmployeeCount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'initialValue' attribute on Variable at LineLocationDetailInputSet.WorkersComp.pcf: line 18, column 43
    function initialValue_0 () : entity.PolicyNamedInsured[] {
      return polLocation.LocationNamedInsuredCandidates
    }
    
    // 'initialValue' attribute on Variable at LineLocationDetailInputSet.WorkersComp.pcf: line 22, column 28
    function initialValue_1 () : IndustryCode {
      return polLocation.Branch.Job.NewTerm ? null : polLocation.BasedOn.IndustryCode
    }
    
    // 'initialValue' attribute on Variable at LineLocationDetailInputSet.WorkersComp.pcf: line 26, column 30
    function initialValue_2 () : java.util.Date {
      return  polLocation.State == null ? polLocation.Branch.EditEffectiveDate : polLocation.Branch.getReferenceDateForCurrentJob(gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_26 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'onChange' attribute on PostOnChange at LineLocationDetailInputSet.WorkersComp.pcf: line 68, column 49
    function onChange_19 () : void {
      polLocation.syncQuestions()
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_27 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_28 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, previousIndustryCode.Code, referenceDate)
    }
    
    // 'sortBy' attribute on IteratorSort at LineLocationDetailInputSet.WorkersComp.pcf: line 48, column 26
    function sortBy_8 (polNamedInsured :  entity.PolicyNamedInsured) : java.lang.Object {
      return polNamedInsured.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ChangeLocationNamedInsuredLabel_Input) at LineLocationDetailInputSet.WorkersComp.pcf: line 34, column 31
    function valueRoot_5 () : java.lang.Object {
      return polLocation
    }
    
    // 'value' attribute on MenuItemIterator at LineLocationDetailInputSet.WorkersComp.pcf: line 45, column 49
    function value_11 () : entity.PolicyNamedInsured[] {
      return candidates
    }
    
    // 'value' attribute on TextInput (id=EmployeeCount_Input) at LineLocationDetailInputSet.WorkersComp.pcf: line 66, column 37
    function value_20 () : java.lang.Integer {
      return polLocation.EmployeeCount
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_29 () : entity.IndustryCode {
      return polLocation.IndustryCode
    }
    
    // 'value' attribute on TextInput (id=ChangeLocationNamedInsuredLabel_Input) at LineLocationDetailInputSet.WorkersComp.pcf: line 34, column 31
    function value_4 () : entity.PolicyNamedInsured {
      return polLocation.SingleLocationNamedInsured
    }
    
    // 'visible' attribute on MenuItem (id=Remove) at LineLocationDetailInputSet.WorkersComp.pcf: line 58, column 67
    function visible_12 () : java.lang.Boolean {
      return polLocation.SingleLocationNamedInsured != null
    }
    
    // 'visible' attribute on TextInput (id=ChangeLocationNamedInsuredButton_Input) at LineLocationDetailInputSet.WorkersComp.pcf: line 41, column 29
    function visible_14 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on TextInput (id=ChangeLocationNamedInsuredLabel_Input) at LineLocationDetailInputSet.WorkersComp.pcf: line 34, column 31
    function visible_3 () : java.lang.Boolean {
      return !openForEdit
    }
    
    property get candidates () : entity.PolicyNamedInsured[] {
      return getVariableValue("candidates", 0) as entity.PolicyNamedInsured[]
    }
    
    property set candidates ($arg :  entity.PolicyNamedInsured[]) {
      setVariableValue("candidates", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
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
    
    
  }
  
  
}