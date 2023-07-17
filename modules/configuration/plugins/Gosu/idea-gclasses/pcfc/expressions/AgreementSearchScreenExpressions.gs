package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AgreementSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at AgreementSearchScreen.pcf: line 24, column 74
    function action_2 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "AgreementSearchResultsLV" )
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AgreementSearchResult_MakeActiveButton) at AgreementSearchScreen.pcf: line 30, column 87
    function allCheckedRowsAction_3 (CheckedValues :  RIAgreement[], CheckedValuesErrors :  java.util.Map) : void {
      gw.web.admin.ReinsuranceUIHelper.makeAllCheckedAgreementsActive(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchScreen.pcf: line 15, column 44
    function def_onEnter_0 (def :  pcf.AgreementSearchDV) : void {
      def.onEnter(criteria)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchScreen.pcf: line 17, column 80
    function def_onEnter_4 (def :  pcf.AgreementSearchResultsLV) : void {
      def.onEnter(searchResults, true /*in search page*/)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchScreen.pcf: line 15, column 44
    function def_refreshVariables_1 (def :  pcf.AgreementSearchDV) : void {
      def.refreshVariables(criteria)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchScreen.pcf: line 17, column 80
    function def_refreshVariables_5 (def :  pcf.AgreementSearchResultsLV) : void {
      def.refreshVariables(searchResults, true /*in search page*/)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AgreementSearchScreen.pcf: line 13, column 79
    function searchCriteria_7 () : gw.reinsurance.search.AgreementSearchCriteria {
      return gw.reinsurance.search.AgreementSearchCriteria.forAllAgreements()
    }
    
    // 'search' attribute on SearchPanel at AgreementSearchScreen.pcf: line 13, column 79
    function search_6 () : java.lang.Object {
      return criteria.performSearch()
    }
    
    property get criteria () : gw.reinsurance.search.AgreementSearchCriteria {
      return getCriteriaValue(1) as gw.reinsurance.search.AgreementSearchCriteria
    }
    
    property set criteria ($arg :  gw.reinsurance.search.AgreementSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<RIAgreement> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<RIAgreement>
    }
    
    
  }
  
  
}