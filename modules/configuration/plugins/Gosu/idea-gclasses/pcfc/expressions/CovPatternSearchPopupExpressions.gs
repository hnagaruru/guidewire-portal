package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/CovPatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovPatternSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/CovPatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovPatternSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyLine :  typekey.PolicyLine, linePattern :  gw.api.productmodel.PolicyLinePattern) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at CovPatternSearchPopup.pcf: line 20, column 34
    function initialValue_0 () : java.lang.String[] {
      return linePattern.CoverageCategories*.PublicID
    }
    
    override property get CurrentLocation () : pcf.CovPatternSearchPopup {
      return super.CurrentLocation as pcf.CovPatternSearchPopup
    }
    
    property get categories () : java.lang.String[] {
      return getVariableValue("categories", 0) as java.lang.String[]
    }
    
    property set categories ($arg :  java.lang.String[]) {
      setVariableValue("categories", 0, $arg)
    }
    
    property get linePattern () : gw.api.productmodel.PolicyLinePattern {
      return getVariableValue("linePattern", 0) as gw.api.productmodel.PolicyLinePattern
    }
    
    property set linePattern ($arg :  gw.api.productmodel.PolicyLinePattern) {
      setVariableValue("linePattern", 0, $arg)
    }
    
    property get policyLine () : typekey.PolicyLine {
      return getVariableValue("policyLine", 0) as typekey.PolicyLine
    }
    
    property set policyLine ($arg :  typekey.PolicyLine) {
      setVariableValue("policyLine", 0, $arg)
    }
    
    function createSearchCriteria() : gw.productmodel.ClausePatternSearchCriteria {
          var criteria = new gw.productmodel.ClausePatternSearchCriteria()
          criteria.SearchType = TC_COVERAGE
          criteria.PolicyLinePatternCode = linePattern.PublicID
          return criteria
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/CovPatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at CovPatternSearchPopup.pcf: line 43, column 65
    function pickValue_15 () : gw.api.productmodel.CoveragePattern {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CovPatternSearchPopup.pcf: line 52, column 65
    function valueRoot_10 () : java.lang.Object {
      return pattern.CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CovPatternSearchPopup.pcf: line 48, column 48
    function valueRoot_7 () : java.lang.Object {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at CovPatternSearchPopup.pcf: line 56, column 47
    function value_12 () : java.lang.String {
      return pattern.ClauseName
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CovPatternSearchPopup.pcf: line 48, column 48
    function value_6 () : java.lang.String {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CovPatternSearchPopup.pcf: line 52, column 65
    function value_9 () : java.lang.String {
      return pattern.CoverageCategory.DisplayName
    }
    
    property get pattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/CovPatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CovPatternSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CovPatternSearchPopup.pcf: line 33, column 89
    function def_onEnter_1 (def :  pcf.CoveragePatternSearchDV) : void {
      def.onEnter(searchCriteria, linePattern, categories, true)
    }
    
    // 'def' attribute on PanelRef at CovPatternSearchPopup.pcf: line 33, column 89
    function def_refreshVariables_2 (def :  pcf.CoveragePatternSearchDV) : void {
      def.refreshVariables(searchCriteria, linePattern, categories, true)
    }
    
    // 'searchCriteria' attribute on SearchPanel at CovPatternSearchPopup.pcf: line 31, column 67
    function searchCriteria_18 () : gw.productmodel.ClausePatternSearchCriteria {
      return createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at CovPatternSearchPopup.pcf: line 31, column 67
    function search_17 () : java.lang.Object {
      return searchCriteria.performSearch().cast( gw.api.productmodel.CoveragePattern )
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CovPatternSearchPopup.pcf: line 48, column 48
    function sortValue_3 (pattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CovPatternSearchPopup.pcf: line 52, column 65
    function sortValue_4 (pattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at CovPatternSearchPopup.pcf: line 56, column 47
    function sortValue_5 (pattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return pattern.ClauseName
    }
    
    // 'value' attribute on RowIterator at CovPatternSearchPopup.pcf: line 43, column 65
    function value_16 () : gw.api.productmodel.CoveragePattern[] {
      return coveragePatterns
    }
    
    property get coveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getResultsValue(1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property get searchCriteria () : gw.productmodel.ClausePatternSearchCriteria {
      return getCriteriaValue(1) as gw.productmodel.ClausePatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.productmodel.ClausePatternSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}