package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchByLinePatternDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePatternSearchByLinePatternDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchByLinePatternDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePatternSearchByLinePatternDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CoveragePatternSearchByLinePatternDV.pcf: line 43, column 41
    function def_onEnter_21 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at CoveragePatternSearchByLinePatternDV.pcf: line 43, column 41
    function def_refreshVariables_22 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchType = (__VALUE_TO_SET as typekey.CoveragePatternSearchType)
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CoverageCategory = (__VALUE_TO_SET as gw.api.productmodel.CoverageCategory)
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 30, column 41
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Keyword = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at CoveragePatternSearchByLinePatternDV.pcf: line 16, column 74
    function initialValue_0 () : java.util.List<gw.api.productmodel.CoverageCategory> {
      return policyLinePattern.CoverageCategories.toList()
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function valueRange_16 () : java.lang.Object {
      return getAvailableSearchTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function valueRange_4 () : java.lang.Object {
      return categories
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function value_1 () : gw.api.productmodel.CoverageCategory {
      return searchCriteria.CoverageCategory
    }
    
    // 'value' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function value_13 () : typekey.CoveragePatternSearchType {
      return searchCriteria.SearchType
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 30, column 41
    function value_8 () : java.lang.String {
      return searchCriteria.Keyword
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function verifyValueRangeIsAllowedType_17 ($$arg :  typekey.CoveragePatternSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.api.productmodel.CoverageCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function verifyValueRange_18 () : void {
      var __valueRangeArg = getAvailableSearchTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 25, column 59
    function verifyValueRange_6 () : void {
      var __valueRangeArg = categories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchByLinePatternDV.pcf: line 39, column 87
    function visible_12 () : java.lang.Boolean {
      return searchCriteria.SearchType != CoveragePatternSearchType.TC_COVERAGE
    }
    
    property get categories () : java.util.List<gw.api.productmodel.CoverageCategory> {
      return getVariableValue("categories", 0) as java.util.List<gw.api.productmodel.CoverageCategory>
    }
    
    property set categories ($arg :  java.util.List<gw.api.productmodel.CoverageCategory>) {
      setVariableValue("categories", 0, $arg)
    }
    
    property get policyLinePattern () : gw.api.productmodel.PolicyLinePattern {
      return getRequireValue("policyLinePattern", 0) as gw.api.productmodel.PolicyLinePattern
    }
    
    property set policyLinePattern ($arg :  gw.api.productmodel.PolicyLinePattern) {
      setRequireValue("policyLinePattern", 0, $arg)
    }
    
    property get searchCriteria () : gw.productmodel.ClausePatternSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.productmodel.ClausePatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.productmodel.ClausePatternSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    function getAvailableSearchTypes() : CoveragePatternSearchType[]{
      return new CoveragePatternSearchType[]{CoveragePatternSearchType.TC_EXCLCOND, 
        CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION}
    }
    
    
  }
  
  
}