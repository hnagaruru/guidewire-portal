package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermDirectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermDirectInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermDirectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermDirectInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at CovTermDirectInputSet.pcf: line 42, column 86
    function disablePostOnEnter_3 () : java.lang.Boolean {
      return not gw.web.rules.APDRulesHelper.hasDependents(coverable, term.Pattern)
    }
    
    // 'editable' attribute on InputSet (id=CovTermDirectInputSet) at CovTermDirectInputSet.pcf: line 8, column 25
    function editable_16 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'initialValue' attribute on Variable at CovTermDirectInputSet.pcf: line 18, column 25
    function initialValue_0 () : Coverable {
      return term.Clause.OwningCoverable
    }
    
    // 'initialValue' attribute on Variable at CovTermDirectInputSet.pcf: line 23, column 23
    function initialValue_1 () : boolean {
      return gw.web.rules.APDRulesHelper.isVisible(coverable, term.Pattern)
    }
    
    // 'initialValue' attribute on Variable at CovTermDirectInputSet.pcf: line 28, column 23
    function initialValue_2 () : boolean {
      return gw.web.rules.APDRulesHelper.isEditable(coverable, term.Pattern)
    }
    
    // 'inputConversion' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function inputConversion_7 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function label_6 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CovTermDirectInputSet.pcf: line 42, column 86
    function onChange_4 () : void {
      gw.web.rules.APDRulesHelper.onChange(coverable, jobWizardHelper)
    }
    
    // 'outputConversion' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function outputConversion_8 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function required_9 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'validationExpression' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function validationExpression_5 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(term)
    }
    
    // 'value' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function valueRoot_12 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 38, column 40
    function value_10 () : java.math.BigDecimal {
      return term.Value
    }
    
    // 'visible' attribute on InputSet (id=CovTermDirectInputSet) at CovTermDirectInputSet.pcf: line 8, column 25
    function visible_17 () : java.lang.Boolean {
      return isVisible
    }
    
    property get coverable () : Coverable {
      return getVariableValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getVariableValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setVariableValue("isEditable", 0, $arg)
    }
    
    property get isVisible () : boolean {
      return getVariableValue("isVisible", 0) as java.lang.Boolean
    }
    
    property set isVisible ($arg :  boolean) {
      setVariableValue("isVisible", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get term () : gw.api.domain.covterm.DirectCovTerm {
      return getRequireValue("term", 0) as gw.api.domain.covterm.DirectCovTerm
    }
    
    property set term ($arg :  gw.api.domain.covterm.DirectCovTerm) {
      setRequireValue("term", 0, $arg)
    }
    
    
  }
  
  
}