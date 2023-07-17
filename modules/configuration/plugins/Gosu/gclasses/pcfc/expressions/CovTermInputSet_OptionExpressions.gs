package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_OptionExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>).OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at CovTermInputSet.Option.pcf: line 51, column 86
    function disablePostOnEnter_4 () : java.lang.Boolean {
      return not gw.web.rules.APDRulesHelper.hasDependents(coverable, term.Pattern)
    }
    
    // 'editable' attribute on InputSet (id=CovTermInputSet) at CovTermInputSet.Option.pcf: line 9, column 25
    function editable_20 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'editable' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function editable_6 () : java.lang.Boolean {
      return openForEdit and editable
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Option.pcf: line 23, column 23
    function initialValue_0 () : boolean {
      return gw.web.productmodel.ChoiceCovTermUtil.isEditable(term)
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Option.pcf: line 27, column 25
    function initialValue_1 () : Coverable {
      return term.Clause.OwningCoverable
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Option.pcf: line 32, column 23
    function initialValue_2 () : boolean {
      return gw.web.rules.APDRulesHelper.isVisible(coverable, term.Pattern)
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Option.pcf: line 37, column 23
    function initialValue_3 () : boolean {
      return gw.web.rules.APDRulesHelper.isEditable(coverable, term.Pattern)
    }
    
    // 'label' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function label_8 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CovTermInputSet.Option.pcf: line 51, column 86
    function onChange_5 () : void {
      gw.web.rules.APDRulesHelper.onChange(coverable, jobWizardHelper)
    }
    
    // 'required' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function required_9 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'validationExpression' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function validationExpression_7 () : java.lang.Object {
      return gw.pcf.coverage.CovTermOptionInputSetHelper.validate(term as gw.api.domain.covterm.OptionCovTerm)
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function valueRange_13 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(term as gw.api.domain.covterm.OptionCovTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function valueRoot_12 () : java.lang.Object {
      return (term as gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function value_10 () : gw.api.productmodel.CovTermOpt<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>> {
      return (term as gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>).OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.productmodel.CovTermOpt<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 47, column 136
    function verifyValueRange_15 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(term as gw.api.domain.covterm.OptionCovTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet (id=CovTermInputSet) at CovTermInputSet.Option.pcf: line 9, column 25
    function visible_21 () : java.lang.Boolean {
      return isVisible
    }
    
    property get coverable () : Coverable {
      return getVariableValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get editable () : boolean {
      return getVariableValue("editable", 0) as java.lang.Boolean
    }
    
    property set editable ($arg :  boolean) {
      setVariableValue("editable", 0, $arg)
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