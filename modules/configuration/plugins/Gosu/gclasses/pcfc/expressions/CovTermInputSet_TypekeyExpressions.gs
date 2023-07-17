package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_TypekeyExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      typekeyTerm.Value = (__VALUE_TO_SET as gw.entity.TypeKey)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at CovTermInputSet.Typekey.pcf: line 49, column 86
    function disablePostOnEnter_4 () : java.lang.Boolean {
      return not gw.web.rules.APDRulesHelper.hasDependents(coverable, term.Pattern)
    }
    
    // 'editable' attribute on InputSet (id=CovTermInputSet) at CovTermInputSet.Typekey.pcf: line 9, column 25
    function editable_17 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'filter' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function filter_11 (VALUE :  gw.entity.TypeKey, VALUES :  gw.entity.TypeKey[]) : java.util.List<gw.entity.TypeKey> {
      return gw.web.rules.APDRulesHelper.filterTypeKeys(coverable, typekeyTerm.Pattern, VALUES)
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Typekey.pcf: line 22, column 52
    function initialValue_0 () : gw.api.domain.covterm.TypekeyCovTerm {
      return term as gw.api.domain.covterm.TypekeyCovTerm
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Typekey.pcf: line 26, column 25
    function initialValue_1 () : Coverable {
      return term.Clause.OwningCoverable
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Typekey.pcf: line 31, column 23
    function initialValue_2 () : boolean {
      return gw.web.rules.APDRulesHelper.isVisible(coverable, term.Pattern)
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Typekey.pcf: line 36, column 23
    function initialValue_3 () : boolean {
      return gw.web.rules.APDRulesHelper.isEditable(coverable, term.Pattern)
    }
    
    // 'label' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function label_6 () : java.lang.Object {
      return typekeyTerm.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CovTermInputSet.Typekey.pcf: line 49, column 86
    function onChange_5 () : void {
      gw.web.rules.APDRulesHelper.onChange(coverable, jobWizardHelper)
    }
    
    // 'required' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function required_7 () : java.lang.Boolean {
      return typekeyTerm.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function valueRange_12 () : java.lang.Object {
      return typekeyTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function valueRoot_10 () : java.lang.Object {
      return typekeyTerm
    }
    
    // 'value' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function value_8 () : gw.entity.TypeKey {
      return typekeyTerm.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.entity.TypeKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 45, column 37
    function verifyValueRange_14 () : void {
      var __valueRangeArg = typekeyTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet (id=CovTermInputSet) at CovTermInputSet.Typekey.pcf: line 9, column 25
    function visible_18 () : java.lang.Boolean {
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
    
    property get typekeyTerm () : gw.api.domain.covterm.TypekeyCovTerm {
      return getVariableValue("typekeyTerm", 0) as gw.api.domain.covterm.TypekeyCovTerm
    }
    
    property set typekeyTerm ($arg :  gw.api.domain.covterm.TypekeyCovTerm) {
      setVariableValue("typekeyTerm", 0, $arg)
    }
    
    
  }
  
  
}