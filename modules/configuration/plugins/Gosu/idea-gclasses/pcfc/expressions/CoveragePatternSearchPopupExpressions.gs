package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePatternSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePatternSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (coverable :  Coverable, searchType :  CoveragePatternSearchType, coverageCategories :  String[], includeElseExclude :  boolean) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at CoveragePatternSearchPopup.pcf: line 18, column 53
    function initialValue_0 () : gw.api.productmodel.PolicyLinePattern {
      return coverable.PolicyLine.Pattern
    }
    
    // 'title' attribute on Popup (id=CoveragePatternSearchPopup) at CoveragePatternSearchPopup.pcf: line 9, column 240
    static function title_9 (coverable :  Coverable, coverageCategories :  String[], includeElseExclude :  boolean, searchType :  CoveragePatternSearchType) : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.Title", coverable.DisplayName) : DisplayKey.get("Web.Search.ExclusionAndCondition.Title", coverable.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.CoveragePatternSearchPopup {
      return super.CurrentLocation as pcf.CoveragePatternSearchPopup
    }
    
    property get coverable () : Coverable {
      return getVariableValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get coverageCategories () : String[] {
      return getVariableValue("coverageCategories", 0) as String[]
    }
    
    property set coverageCategories ($arg :  String[]) {
      setVariableValue("coverageCategories", 0, $arg)
    }
    
    property get includeElseExclude () : boolean {
      return getVariableValue("includeElseExclude", 0) as java.lang.Boolean
    }
    
    property set includeElseExclude ($arg :  boolean) {
      setVariableValue("includeElseExclude", 0, $arg)
    }
    
    property get policyLinePattern () : gw.api.productmodel.PolicyLinePattern {
      return getVariableValue("policyLinePattern", 0) as gw.api.productmodel.PolicyLinePattern
    }
    
    property set policyLinePattern ($arg :  gw.api.productmodel.PolicyLinePattern) {
      setVariableValue("policyLinePattern", 0, $arg)
    }
    
    property get searchType () : CoveragePatternSearchType {
      return getVariableValue("searchType", 0) as CoveragePatternSearchType
    }
    
    property set searchType ($arg :  CoveragePatternSearchType) {
      setVariableValue("searchType", 0, $arg)
    }
    
    function filteredSearchResults(searchCriteria : gw.productmodel.ClausePatternSearchCriteria) : gw.api.productmodel.ClausePattern[] {
      var results = searchCriteria.performSearch()
      results = results.where(\ c -> coverable.isCoverageConditionOrExclusionAvailable(c) and coverable.getCoverageConditionOrExclusion(c) == null)
      
      if (includeElseExclude) {
        return results.where(\ c -> coverageCategories.contains(c.CoverageCategory.PublicID))
      }
      else {
        return results.where(\ c -> not coverageCategories.contains(c.CoverageCategory.PublicID))
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CoveragePatternSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at CoveragePatternSearchPopup.pcf: line 48, column 240
    function allCheckedRowsAction_4 (CheckedValues :  gw.api.productmodel.ClausePattern[], CheckedValuesErrors :  java.util.Map) : void {
      CurrentLocation.pickValueAndCommit( CheckedValues )
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchPopup.pcf: line 40, column 117
    function def_onEnter_1 (def :  pcf.CoveragePatternSearchDV) : void {
      def.onEnter(searchCriteria, policyLinePattern, coverageCategories, includeElseExclude)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchPopup.pcf: line 42, column 66
    function def_onEnter_5 (def :  pcf.CoveragePatternSearchResultsLV) : void {
      def.onEnter(coveragePatterns)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchPopup.pcf: line 40, column 117
    function def_refreshVariables_2 (def :  pcf.CoveragePatternSearchDV) : void {
      def.refreshVariables(searchCriteria, policyLinePattern, coverageCategories, includeElseExclude)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchPopup.pcf: line 42, column 66
    function def_refreshVariables_6 (def :  pcf.CoveragePatternSearchResultsLV) : void {
      def.refreshVariables(coveragePatterns)
    }
    
    // 'label' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at CoveragePatternSearchPopup.pcf: line 48, column 240
    function label_3 () : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.AddSelectedCoverages") : DisplayKey.get("Web.Coverage.SearchPage.AddSelectedExclusionsAndConditions")
    }
    
    // 'searchCriteria' attribute on SearchPanel at CoveragePatternSearchPopup.pcf: line 38, column 65
    function searchCriteria_8 () : gw.productmodel.ClausePatternSearchCriteria {
      return new gw.productmodel.ClausePatternSearchCriteria() { :SearchType = searchType, :PolicyLinePatternCode = coverable.PolicyLine.Pattern.PublicID }
    }
    
    // 'search' attribute on SearchPanel at CoveragePatternSearchPopup.pcf: line 38, column 65
    function search_7 () : java.lang.Object {
      return filteredSearchResults(searchCriteria)
    }
    
    property get coveragePatterns () : gw.api.productmodel.ClausePattern[] {
      return getResultsValue(1) as gw.api.productmodel.ClausePattern[]
    }
    
    property get searchCriteria () : gw.productmodel.ClausePatternSearchCriteria {
      return getCriteriaValue(1) as gw.productmodel.ClausePatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.productmodel.ClausePatternSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}