package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Collections
@javax.annotation.Generated("config/web/pcf/line/pa/policy/CoverageInputSet.PALiabilityCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_PALiabilityCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/CoverageInputSet.PALiabilityCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.PALiabilityCov.pcf: line 38, column 90
    function available_29 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.PALiabilityCov.PAFullLimitedTortTerm.Value = (__VALUE_TO_SET as typekey.FullLimitedTort)
    }
    
    // 'value' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.PALiabilityCov.PALiabilityTerm.PackageValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermPack<productmodel.PackagePALiabilityType>)
    }
    
    // 'editable' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function editable_4 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(line.PALiabilityCov.PALiabilityTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.PALiabilityCov.pcf: line 27, column 45
    function initialValue_0 () : productmodel.PersonalAutoLine {
      return coverable as PersonalAutoLine
    }
    
    // 'label' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function label_17 () : java.lang.Object {
      return line.PALiabilityCov.PAFullLimitedTortTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.PALiabilityCov.pcf: line 38, column 90
    function label_30 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function label_5 () : java.lang.Object {
      return line.PALiabilityCov.PALiabilityTerm.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function required_18 () : java.lang.Boolean {
      return line.PALiabilityCov.PAFullLimitedTortTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function required_6 () : java.lang.Boolean {
      return line.PALiabilityCov.PALiabilityTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.PALiabilityCov.pcf: line 38, column 90
    function setter_31 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function valueRange_10 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(line.PALiabilityCov.PALiabilityTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function valueRange_22 () : java.lang.Object {
      return line.PALiabilityCov.PAFullLimitedTortTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.PALiabilityCov.pcf: line 31, column 37
    function valueRoot_2 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function valueRoot_21 () : java.lang.Object {
      return line.PALiabilityCov.PAFullLimitedTortTerm
    }
    
    // 'value' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function valueRoot_9 () : java.lang.Object {
      return line.PALiabilityCov.PALiabilityTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.PALiabilityCov.pcf: line 31, column 37
    function value_1 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function value_19 () : typekey.FullLimitedTort {
      return line.PALiabilityCov.PAFullLimitedTortTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function value_7 () : gw.api.productmodel.CovTermPack<productmodel.PackagePALiabilityType> {
      return line.PALiabilityCov.PALiabilityTerm.PackageValue
    }
    
    // 'valueRange' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.productmodel.CovTermPack<productmodel.PackagePALiabilityType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.FullLimitedTort[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LiabilityTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 47, column 96
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(line.PALiabilityCov.PALiabilityTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function verifyValueRange_24 () : void {
      var __valueRangeArg = line.PALiabilityCov.PAFullLimitedTortTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=TortTermInput_Input) at CoverageInputSet.PALiabilityCov.pcf: line 58, column 82
    function visible_16 () : java.lang.Boolean {
      return line.PALiabilityCov.hasCovTerm("PAFullLimitedTort")
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.PALiabilityCov.pcf: line 38, column 90
    function visible_28 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.PALiabilityCov.pcf: line 61, column 100
    function visible_34 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getRequireValue("coveragePattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set coveragePattern ($arg :  gw.api.productmodel.ClausePattern) {
      setRequireValue("coveragePattern", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : productmodel.PersonalAutoLine {
      return getVariableValue("line", 0) as productmodel.PersonalAutoLine
    }
    
    property set line ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
    function getTermValues() : java.util.List<gw.entity.TypeKey> {
      var term = line.PALiabilityCov.PAFullLimitedTortTerm
      if(term == null) {
        return Collections.emptyList()
      }
      return term.getPattern().getOrderedAvailableValues()
    }
    
    
  }
  
  
}