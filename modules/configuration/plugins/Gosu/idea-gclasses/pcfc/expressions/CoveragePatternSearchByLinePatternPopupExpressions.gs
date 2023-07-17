package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchByLinePatternPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePatternSearchByLinePatternPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchByLinePatternPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePatternSearchByLinePatternPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyLinePattern :  gw.api.productmodel.PolicyLinePattern, searchType :  CoveragePatternSearchType) : int {
      return 0
    }
    
    // 'title' attribute on Popup (id=CoveragePatternSearchByLinePatternPopup) at CoveragePatternSearchByLinePatternPopup.pcf: line 9, column 256
    static function title_6 (policyLinePattern :  gw.api.productmodel.PolicyLinePattern, searchType :  CoveragePatternSearchType) : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.Title", policyLinePattern.DisplayName) : DisplayKey.get("Web.Search.ExclusionAndCondition.Title", policyLinePattern.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.CoveragePatternSearchByLinePatternPopup {
      return super.CurrentLocation as pcf.CoveragePatternSearchByLinePatternPopup
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchByLinePatternPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CoveragePatternSearchByLinePatternPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchByLinePatternPopup.pcf: line 30, column 90
    function def_onEnter_0 (def :  pcf.CoveragePatternSearchByLinePatternDV) : void {
      def.onEnter(searchCriteria, policyLinePattern)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchByLinePatternPopup.pcf: line 32, column 72
    function def_onEnter_2 (def :  pcf.CoveragePatternSearchResultsSelectLV) : void {
      def.onEnter(coveragePatterns)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchByLinePatternPopup.pcf: line 30, column 90
    function def_refreshVariables_1 (def :  pcf.CoveragePatternSearchByLinePatternDV) : void {
      def.refreshVariables(searchCriteria, policyLinePattern)
    }
    
    // 'def' attribute on PanelRef at CoveragePatternSearchByLinePatternPopup.pcf: line 32, column 72
    function def_refreshVariables_3 (def :  pcf.CoveragePatternSearchResultsSelectLV) : void {
      def.refreshVariables(coveragePatterns)
    }
    
    // 'searchCriteria' attribute on SearchPanel at CoveragePatternSearchByLinePatternPopup.pcf: line 28, column 65
    function searchCriteria_5 () : gw.productmodel.ClausePatternSearchCriteria {
      return new gw.productmodel.ClausePatternSearchCriteria(){ :SearchType = searchType, :PolicyLinePatternCode = policyLinePattern.PublicID }
    }
    
    // 'search' attribute on SearchPanel at CoveragePatternSearchByLinePatternPopup.pcf: line 28, column 65
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch()
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