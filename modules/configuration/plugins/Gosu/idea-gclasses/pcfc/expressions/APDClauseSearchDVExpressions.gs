package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at APDClauseSearchDV.pcf: line 42, column 41
    function def_onEnter_20 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at APDClauseSearchDV.pcf: line 42, column 41
    function def_refreshVariables_21 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchType = (__VALUE_TO_SET as typekey.CoveragePatternSearchType)
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at APDClauseSearchDV.pcf: line 29, column 41
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Keyword = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function valueRange_15 () : java.lang.Object {
      return { CoveragePatternSearchType.TC_EXCLCOND, CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION }
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function valueRange_3 () : java.lang.Object {
      return filterCategories()
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function value_0 () : APDClauseCategory {
      return searchCriteria.ClauseCategory
    }
    
    // 'value' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function value_12 () : typekey.CoveragePatternSearchType {
      return searchCriteria.SearchType
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at APDClauseSearchDV.pcf: line 29, column 41
    function value_7 () : java.lang.String {
      return searchCriteria.Keyword
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function verifyValueRangeIsAllowedType_16 ($$arg :  typekey.CoveragePatternSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function verifyValueRange_17 () : void {
      var __valueRangeArg = { CoveragePatternSearchType.TC_EXCLCOND, CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION }
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageCategory_Input) at APDClauseSearchDV.pcf: line 24, column 40
    function verifyValueRange_5 () : void {
      var __valueRangeArg = filterCategories()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeRadioInput (id=SearchType_Input) at APDClauseSearchDV.pcf: line 38, column 87
    function visible_11 () : java.lang.Boolean {
      return searchCriteria.SearchType != CoveragePatternSearchType.TC_COVERAGE
    }
    
    property get categories () : APDClauseCategory[] {
      return getRequireValue("categories", 0) as APDClauseCategory[]
    }
    
    property set categories ($arg :  APDClauseCategory[]) {
      setRequireValue("categories", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get searchCriteria () : gw.apd.model.APDClauseSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.apd.model.APDClauseSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.apd.model.APDClauseSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    function filterCategories() : java.util.List<APDClauseCategory> {
        return coverable.ClauseCategories.where( \ c -> categories.hasMatch(\cc -> cc == c)).toList()
      }
    
    
  }
  
  
}