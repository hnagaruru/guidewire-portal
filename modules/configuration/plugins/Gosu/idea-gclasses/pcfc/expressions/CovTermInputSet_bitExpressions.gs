package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.bit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_bitExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.bit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BooleanTermInput_Input) at CovTermInputSet.bit.pcf: line 38, column 83
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.GenericCovTerm<Boolean>).Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at CovTermInputSet.bit.pcf: line 42, column 86
    function disablePostOnEnter_3 () : java.lang.Boolean {
      return not gw.web.rules.APDRulesHelper.hasDependents(coverable, term.Pattern)
    }
    
    // 'editable' attribute on InputSet (id=CovTermInputSet) at CovTermInputSet.bit.pcf: line 9, column 25
    function editable_12 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.bit.pcf: line 22, column 25
    function initialValue_0 () : Coverable {
      return term.Clause.OwningCoverable
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.bit.pcf: line 27, column 23
    function initialValue_1 () : boolean {
      return gw.web.rules.APDRulesHelper.isVisible(coverable, term.Pattern)
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.bit.pcf: line 32, column 23
    function initialValue_2 () : boolean {
      return gw.web.rules.APDRulesHelper.isEditable(coverable, term.Pattern)
    }
    
    // 'label' attribute on BooleanRadioInput (id=BooleanTermInput_Input) at CovTermInputSet.bit.pcf: line 38, column 83
    function label_5 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CovTermInputSet.bit.pcf: line 42, column 86
    function onChange_4 () : void {
      gw.web.rules.APDRulesHelper.onChange(coverable, jobWizardHelper)
    }
    
    // 'required' attribute on BooleanRadioInput (id=BooleanTermInput_Input) at CovTermInputSet.bit.pcf: line 38, column 83
    function required_6 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'value' attribute on BooleanRadioInput (id=BooleanTermInput_Input) at CovTermInputSet.bit.pcf: line 38, column 83
    function valueRoot_9 () : java.lang.Object {
      return (term as gw.api.domain.covterm.GenericCovTerm<Boolean>)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BooleanTermInput_Input) at CovTermInputSet.bit.pcf: line 38, column 83
    function value_7 () : java.lang.Boolean {
      return (term as gw.api.domain.covterm.GenericCovTerm<Boolean>).Value
    }
    
    // 'visible' attribute on InputSet (id=CovTermInputSet) at CovTermInputSet.bit.pcf: line 9, column 25
    function visible_13 () : java.lang.Boolean {
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
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get term () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("term", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set term ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("term", 0, $arg)
    }
    
    
  }
  
  
}