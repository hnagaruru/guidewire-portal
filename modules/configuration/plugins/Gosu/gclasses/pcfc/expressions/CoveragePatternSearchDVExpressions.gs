package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePatternSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePatternSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CoveragePatternSearchDV.pcf: line 45, column 41
    function def_onEnter_20 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at CoveragePatternSearchDV.pcf: line 45, column 41
    function def_refreshVariables_21 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CoverageCategory = (__VALUE_TO_SET as gw.api.productmodel.CoverageCategory)
    }
    
    // 'value' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchType = (__VALUE_TO_SET as typekey.CoveragePatternSearchType)
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at CoveragePatternSearchDV.pcf: line 32, column 41
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Keyword = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function valueRange_15 () : java.lang.Object {
      return { CoveragePatternSearchType.TC_EXCLCOND, CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION }
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function valueRange_3 () : java.lang.Object {
      return filterCategories()
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function value_0 () : gw.api.productmodel.CoverageCategory {
      return searchCriteria.CoverageCategory
    }
    
    // 'value' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function value_12 () : typekey.CoveragePatternSearchType {
      return searchCriteria.SearchType
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at CoveragePatternSearchDV.pcf: line 32, column 41
    function value_7 () : java.lang.String {
      return searchCriteria.Keyword
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function verifyValueRangeIsAllowedType_16 ($$arg :  typekey.CoveragePatternSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function verifyValueRangeIsAllowedType_4 ($$arg :  gw.api.productmodel.CoverageCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function verifyValueRange_17 () : void {
      var __valueRangeArg = { CoveragePatternSearchType.TC_EXCLCOND, CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION }
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at CoveragePatternSearchDV.pcf: line 27, column 59
    function verifyValueRange_5 () : void {
      var __valueRangeArg = filterCategories()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeRadioInput (id=SearchType_Input) at CoveragePatternSearchDV.pcf: line 41, column 87
    function visible_11 () : java.lang.Boolean {
      return searchCriteria.SearchType != CoveragePatternSearchType.TC_COVERAGE
    }
    
    property get categories () : String[] {
      return getRequireValue("categories", 0) as String[]
    }
    
    property set categories ($arg :  String[]) {
      setRequireValue("categories", 0, $arg)
    }
    
    property get includeElseExclude () : boolean {
      return getRequireValue("includeElseExclude", 0) as java.lang.Boolean
    }
    
    property set includeElseExclude ($arg :  boolean) {
      setRequireValue("includeElseExclude", 0, $arg)
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
    
    function filterCategories() : java.util.List<gw.api.productmodel.CoverageCategory> {
      if (includeElseExclude) {
        return policyLinePattern.CoverageCategories.where( \ c -> categories.contains( c.PublicID ) ).toList()
      }
      else {
        return policyLinePattern.CoverageCategories.where( \ c -> !categories.contains( c.PublicID ) ).toList()
      }
    }
    
    
  }
  
  
}