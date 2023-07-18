package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCDeductiblesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCDeductiblesInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCDeductiblesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCDeductiblesInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      deductibleTerms[i].PackageValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermPack<productmodel.PackageWCDeductibleType>)
    }
    
    // 'label' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function label_5 () : java.lang.Object {
      return gw.web.line.wc.policy.WCDeductiblesInputSetUIHelper.getLabel(jurisdiction, deductibleTermPattern, i)
    }
    
    // 'valueRange' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function valueRange_8 () : java.lang.Object {
      return deductibleTerms[i].AvailablePackageCovTermValues
    }
    
    // 'value' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function value_6 () : gw.api.productmodel.CovTermPack<productmodel.PackageWCDeductibleType> {
      return deductibleTerms[i].PackageValue
    }
    
    // 'valueRange' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.api.productmodel.CovTermPack<productmodel.PackageWCDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StateSpecificDeductible_Input) at WCDeductiblesInputSet.pcf: line 40, column 98
    function verifyValueRange_10 () : void {
      var __valueRangeArg = deductibleTerms[i].AvailablePackageCovTermValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    property get i () : java.lang.Integer {
      return getIteratedValue(1) as java.lang.Integer
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCDeductiblesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCDeductiblesInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WCDeductiblesInputSet.pcf: line 13, column 51
    function initialValue_0 () : gw.api.productmodel.CoveragePattern {
      return gw.api.productmodel.ClausePatternLookup.getCoveragePatternByPublicID("WCWorkCompDeductCov")
    }
    
    // 'initialValue' attribute on Variable at WCDeductiblesInputSet.pcf: line 17, column 50
    function initialValue_1 () : gw.api.productmodel.CovTermPattern {
      return gw.api.productmodel.CovTermPatternLookup.getByPublicID("WCDeductible")
    }
    
    // 'initialValue' attribute on Variable at WCDeductiblesInputSet.pcf: line 22, column 35
    function initialValue_2 () : java.lang.Integer[] {
      return gw.web.line.wc.policy.WCDeductiblesInputSetUIHelper.getIndexes(jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at WCDeductiblesInputSet.pcf: line 27, column 54
    function initialValue_3 () : productmodel.PackageWCDeductibleType[] {
      return gw.web.line.wc.policy.WCDeductiblesInputSetUIHelper.getDeductibleTerms(jurisdiction)
    }
    
    // 'label' attribute on Label at WCDeductiblesInputSet.pcf: line 29, column 54
    function label_4 () : java.lang.String {
      return deductibleCoveragePattern.DisplayName
    }
    
    // 'value' attribute on InputIterator at WCDeductiblesInputSet.pcf: line 33, column 39
    function value_13 () : java.lang.Integer[] {
      return indexes
    }
    
    property get deductibleCoveragePattern () : gw.api.productmodel.CoveragePattern {
      return getVariableValue("deductibleCoveragePattern", 0) as gw.api.productmodel.CoveragePattern
    }
    
    property set deductibleCoveragePattern ($arg :  gw.api.productmodel.CoveragePattern) {
      setVariableValue("deductibleCoveragePattern", 0, $arg)
    }
    
    property get deductibleTermPattern () : gw.api.productmodel.CovTermPattern {
      return getVariableValue("deductibleTermPattern", 0) as gw.api.productmodel.CovTermPattern
    }
    
    property set deductibleTermPattern ($arg :  gw.api.productmodel.CovTermPattern) {
      setVariableValue("deductibleTermPattern", 0, $arg)
    }
    
    property get deductibleTerms () : productmodel.PackageWCDeductibleType[] {
      return getVariableValue("deductibleTerms", 0) as productmodel.PackageWCDeductibleType[]
    }
    
    property set deductibleTerms ($arg :  productmodel.PackageWCDeductibleType[]) {
      setVariableValue("deductibleTerms", 0, $arg)
    }
    
    property get indexes () : java.lang.Integer[] {
      return getVariableValue("indexes", 0) as java.lang.Integer[]
    }
    
    property set indexes ($arg :  java.lang.Integer[]) {
      setVariableValue("indexes", 0, $arg)
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    
  }
  
  
}