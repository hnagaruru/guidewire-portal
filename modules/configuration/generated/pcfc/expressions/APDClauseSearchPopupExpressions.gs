package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.apd.model.APDClauseSearchCriteria
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable, searchType :  CoveragePatternSearchType, coverageCategories :  APDClauseCategory[], userPreferences :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=APDClauseSearchPopup) at APDClauseSearchPopup.pcf: line 10, column 248
    function canEdit_15 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'initialValue' attribute on Variable at APDClauseSearchPopup.pcf: line 19, column 28
    function initialValue_0 () : APDCoverable {
      return riskCoverable.Coverable
    }
    
    // 'title' attribute on Popup (id=APDClauseSearchPopup) at APDClauseSearchPopup.pcf: line 10, column 248
    static function title_16 (coverageCategories :  APDClauseCategory[], riskCoverable :  APDRiskCoverable, searchType :  CoveragePatternSearchType, userPreferences :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.Title", riskCoverable.DisplayName) : DisplayKey.get("Web.Search.ExclusionAndCondition.Title", riskCoverable.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.APDClauseSearchPopup {
      return super.CurrentLocation as pcf.APDClauseSearchPopup
    }
    
    property get coverable () : APDCoverable {
      return getVariableValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get coverageCategories () : APDClauseCategory[] {
      return getVariableValue("coverageCategories", 0) as APDClauseCategory[]
    }
    
    property set coverageCategories ($arg :  APDClauseCategory[]) {
      setVariableValue("coverageCategories", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    property get searchType () : CoveragePatternSearchType {
      return getVariableValue("searchType", 0) as CoveragePatternSearchType
    }
    
    property set searchType ($arg :  CoveragePatternSearchType) {
      setVariableValue("searchType", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
        function filteredSearchResults(searchCriteria : APDClauseSearchCriteria) : ArrayList<APDClause> {
    
          var results = searchCriteria.doSearch()
    
      /* We should NOT allow duplicate clauses to be added, so we need to filter out those clauses that have already been
         added to the coverable as library clauses. This may render the later removals redundant.*/
          var allExistingRiskClauses = riskCoverable.RiskClauses*.Clause
          var matchingClauses = results.where(\c -> allExistingRiskClauses.hasMatch(\ec -> ec == c)).toList()
          results.removeAll(matchingClauses)
          results.removeAll(results.where(\c -> not coverageCategories.hasMatch(\cc -> cc == c.ClauseCategory)))
          results.removeAll(results.where(\c -> riskCoverable.availability(c) == APDDataExistenceType.TC_UNAVAILABLE))
    
          return results
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends APDClauseSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at APDClauseSearchPopup.pcf: line 49, column 240
    function allCheckedRowsAction_4 (CheckedValues :  APDClause[], CheckedValuesErrors :  java.util.Map) : void {
      CurrentLocation.pickValueAndCommit(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 41, column 83
    function def_onEnter_1 (def :  pcf.APDClauseSearchDV) : void {
      def.onEnter(searchCriteria, coverable, coverageCategories)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 43, column 87
    function def_onEnter_11 (def :  pcf.APDClauseSearchResultsLV) : void {
      def.onEnter(coveragePatterns, coverable, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 43, column 87
    function def_refreshVariables_12 (def :  pcf.APDClauseSearchResultsLV) : void {
      def.refreshVariables(coveragePatterns, coverable, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 41, column 83
    function def_refreshVariables_2 (def :  pcf.APDClauseSearchDV) : void {
      def.refreshVariables(searchCriteria, coverable, coverageCategories)
    }
    
    // 'label' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at APDClauseSearchPopup.pcf: line 49, column 240
    function label_3 () : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.AddSelectedCoverages") : DisplayKey.get("Web.Coverage.SearchPage.AddSelectedExclusionsAndConditions")
    }
    
    // 'searchCriteria' attribute on SearchPanel at APDClauseSearchPopup.pcf: line 39, column 56
    function searchCriteria_14 () : gw.apd.model.APDClauseSearchCriteria {
      return new gw.apd.model.APDClauseSearchCriteria() { :SearchType = searchType, :Coverable = coverable }
    }
    
    // 'search' attribute on SearchPanel at APDClauseSearchPopup.pcf: line 39, column 56
    function search_13 () : java.lang.Object {
      return filteredSearchResults(searchCriteria)
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddExclusionDefinition) at APDClauseSearchPopup.pcf: line 60, column 110
    function toCreateAndAdd_7 (CheckedValues :  Object[]) : java.lang.Object {
      return coverable.addCondition(null)
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddConditionDefinition) at APDClauseSearchPopup.pcf: line 66, column 110
    function toCreateAndAdd_9 (CheckedValues :  Object[]) : java.lang.Object {
      return coverable.addExclusion(null)
    }
    
    // 'visible' attribute on RemoveButton (id=RemoveClauseButton) at APDClauseSearchPopup.pcf: line 71, column 54
    function visible_10 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'visible' attribute on AddButton (id=AddCoverageDefinition) at APDClauseSearchPopup.pcf: line 54, column 110
    function visible_5 () : java.lang.Boolean {
      return userPreferences.canDesign() and searchType == CoveragePatternSearchType.TC_COVERAGE
    }
    
    // 'visible' attribute on AddButton (id=AddExclusionDefinition) at APDClauseSearchPopup.pcf: line 60, column 110
    function visible_6 () : java.lang.Boolean {
      return userPreferences.canDesign() and searchType != CoveragePatternSearchType.TC_COVERAGE
    }
    
    property get coveragePatterns () : ArrayList<APDClause> {
      return getResultsValue(1) as ArrayList<APDClause>
    }
    
    property get searchCriteria () : gw.apd.model.APDClauseSearchCriteria {
      return getCriteriaValue(1) as gw.apd.model.APDClauseSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.apd.model.APDClauseSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}