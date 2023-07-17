package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.pcf.rating.impact.ImpactTestingSearchUIHelper
uses gw.rating.impact.ImpactTestingSearchCriteriaImportExport
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingChoosePoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingChoosePoliciesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingChoosePoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingChoosePoliciesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ContinueTestCaseButton) at ImpactTestingChoosePoliciesScreen.pcf: line 60, column 103
    function action_10 () : void {
      (CurrentLocation as pcf.api.Wizard).next()
    }
    
    // 'action' attribute on ToolbarButton (id=ContinueSearchResultsButton) at ImpactTestingChoosePoliciesScreen.pcf: line 55, column 144
    function action_6 () : void {
      postClickNextWithSearchResults()
    }
    
    // 'available' attribute on ToolbarButton (id=ContinueSearchResultsButton) at ImpactTestingChoosePoliciesScreen.pcf: line 55, column 144
    function available_5 () : java.lang.Boolean {
      return !resultContainer.first().Empty and gw.rating.impact.ImpactBatchUtil.jobBeingProcessed() == null and !searchCriteria.ChangedSinceLastQuery
    }
    
    // 'available' attribute on ToolbarButton (id=ContinueTestCaseButton) at ImpactTestingChoosePoliciesScreen.pcf: line 60, column 103
    function available_9 () : java.lang.Boolean {
      return testCase.Periods != null and testCase.Periods.HasElements
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=ContinueSearchResultsButton) at ImpactTestingChoosePoliciesScreen.pcf: line 55, column 144
    function confirmMessage_7 () : java.lang.String {
      return testCase.Periods.HasElements ? DisplayKey.get("Web.Rating.ImpactTesting.Search.WarningToOverrideTestCase") : ""
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingChoosePoliciesScreen.pcf: line 17, column 30
    function initialValue_0 () : Jurisdiction[] {
      return {}
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingChoosePoliciesScreen.pcf: line 25, column 30
    function initialValue_1 () : ProducerCode[] {
      return {}
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingChoosePoliciesScreen.pcf: line 36, column 45
    function initialValue_2 () : gw.api.productmodel.Product[] {
      return {}
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingChoosePoliciesScreen.pcf: line 43, column 90
    function initialValue_3 () : java.util.List<gw.api.database.IQueryBeanResult<PolicyPeriod>> {
      return {new gw.api.database.EmptyQuery<PolicyPeriod>(PolicyPeriod).select()}
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingChoosePoliciesScreen.pcf: line 47, column 60
    function initialValue_4 () : gw.rating.impact.ImpactTestingSearchCriteria {
      return new gw.rating.impact.ImpactTestingSearchCriteria(resultContainer)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=ContinueSearchResultsButton) at ImpactTestingChoosePoliciesScreen.pcf: line 55, column 144
    function tooltip_8 () : java.lang.String {
      return searchCriteria.ChangedSinceLastQuery ? DisplayKey.get("Web.Rating.ImpactTesting.Search.CriteriaOutOfDate") : null
    }
    
    // 'visible' attribute on AlertBar (id=ExportJobRunningMessage) at ImpactTestingChoosePoliciesScreen.pcf: line 67, column 149
    function visible_11 () : java.lang.Boolean {
      return !resultContainer.first().Empty and gw.rating.impact.ImpactBatchUtil.jobBeingProcessed() == BatchProcessType.TC_IMPACTTESTINGEXPORT
    }
    
    property get jurisdictionToAdd () : Jurisdiction {
      return getVariableValue("jurisdictionToAdd", 0) as Jurisdiction
    }
    
    property set jurisdictionToAdd ($arg :  Jurisdiction) {
      setVariableValue("jurisdictionToAdd", 0, $arg)
    }
    
    property get jurisdictions () : Jurisdiction[] {
      return getVariableValue("jurisdictions", 0) as Jurisdiction[]
    }
    
    property set jurisdictions ($arg :  Jurisdiction[]) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get policyPeriodsResult () : gw.api.database.IQueryBeanResult<PolicyPeriod> {
      return getVariableValue("policyPeriodsResult", 0) as gw.api.database.IQueryBeanResult<PolicyPeriod>
    }
    
    property set policyPeriodsResult ($arg :  gw.api.database.IQueryBeanResult<PolicyPeriod>) {
      setVariableValue("policyPeriodsResult", 0, $arg)
    }
    
    property get postalCodes () : String {
      return getVariableValue("postalCodes", 0) as String
    }
    
    property set postalCodes ($arg :  String) {
      setVariableValue("postalCodes", 0, $arg)
    }
    
    property get producerCodeToAdd () : ProducerCode {
      return getVariableValue("producerCodeToAdd", 0) as ProducerCode
    }
    
    property set producerCodeToAdd ($arg :  ProducerCode) {
      setVariableValue("producerCodeToAdd", 0, $arg)
    }
    
    property get producerCodes () : ProducerCode[] {
      return getVariableValue("producerCodes", 0) as ProducerCode[]
    }
    
    property set producerCodes ($arg :  ProducerCode[]) {
      setVariableValue("producerCodes", 0, $arg)
    }
    
    property get productToAdd () : gw.api.productmodel.Product {
      return getVariableValue("productToAdd", 0) as gw.api.productmodel.Product
    }
    
    property set productToAdd ($arg :  gw.api.productmodel.Product) {
      setVariableValue("productToAdd", 0, $arg)
    }
    
    property get products () : gw.api.productmodel.Product[] {
      return getVariableValue("products", 0) as gw.api.productmodel.Product[]
    }
    
    property set products ($arg :  gw.api.productmodel.Product[]) {
      setVariableValue("products", 0, $arg)
    }
    
    property get resultContainer () : java.util.List<gw.api.database.IQueryBeanResult<PolicyPeriod>> {
      return getVariableValue("resultContainer", 0) as java.util.List<gw.api.database.IQueryBeanResult<PolicyPeriod>>
    }
    
    property set resultContainer ($arg :  java.util.List<gw.api.database.IQueryBeanResult<PolicyPeriod>>) {
      setVariableValue("resultContainer", 0, $arg)
    }
    
    property get searchCriteria () : gw.rating.impact.ImpactTestingSearchCriteria {
      return getVariableValue("searchCriteria", 0) as gw.rating.impact.ImpactTestingSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.impact.ImpactTestingSearchCriteria) {
      setVariableValue("searchCriteria", 0, $arg)
    }
    
    property get testCase () : ImpactTestingTestCase {
      return getRequireValue("testCase", 0) as ImpactTestingTestCase
    }
    
    property set testCase ($arg :  ImpactTestingTestCase) {
      setRequireValue("testCase", 0, $arg)
    }
    
    
    function postClickNextWithSearchResults() {
      ImpactTestingSearchUIHelper.populateTestCasePeriods(testCase, resultContainer[0])
      testCase.SearchCriteria = new ImpactTestingSearchCriteriaImportExport(searchCriteria).toXML()
      var prepareHelper = new gw.pcf.rating.impact.ImpactTestingPrepareUIHelper(testCase)
      prepareHelper.unselectRateBooks(testCase.Ratebooks)
      (CurrentLocation as pcf.api.Wizard).next()
    }
    
    function resetSearchCriteria() : gw.rating.impact.ImpactTestingSearchCriteria {
      searchCriteria = new gw.rating.impact.ImpactTestingSearchCriteria(resultContainer)
      return searchCriteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingChoosePoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ImpactTestingChoosePoliciesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingChoosePoliciesScreen.pcf: line 77, column 108
    function def_onEnter_12 (def :  pcf.ImpactTestingSearchPoliciesDV) : void {
      def.onEnter(criteria, productToAdd, jurisdictionToAdd, producerCodeToAdd)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingChoosePoliciesScreen.pcf: line 79, column 67
    function def_onEnter_14 (def :  pcf.ImpactTestingSearchPoliciesPanelSet) : void {
      def.onEnter(searchResults)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingChoosePoliciesScreen.pcf: line 77, column 108
    function def_refreshVariables_13 (def :  pcf.ImpactTestingSearchPoliciesDV) : void {
      def.refreshVariables(criteria, productToAdd, jurisdictionToAdd, producerCodeToAdd)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingChoosePoliciesScreen.pcf: line 79, column 67
    function def_refreshVariables_15 (def :  pcf.ImpactTestingSearchPoliciesPanelSet) : void {
      def.refreshVariables(searchResults)
    }
    
    // 'searchCriteria' attribute on SearchPanel at ImpactTestingChoosePoliciesScreen.pcf: line 75, column 80
    function searchCriteria_17 () : gw.rating.impact.ImpactTestingSearchCriteria {
      return resetSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at ImpactTestingChoosePoliciesScreen.pcf: line 75, column 80
    function search_16 () : java.lang.Object {
      return criteria.search()
    }
    
    property get criteria () : gw.rating.impact.ImpactTestingSearchCriteria {
      return getCriteriaValue(1) as gw.rating.impact.ImpactTestingSearchCriteria
    }
    
    property set criteria ($arg :  gw.rating.impact.ImpactTestingSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<PolicyPeriod> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<PolicyPeriod>
    }
    
    
  }
  
  
}