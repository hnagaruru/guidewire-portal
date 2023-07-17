package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ririsk :  RIRisk) : int {
      return 1
    }
    
    static function __constructorIndex (searchType :  int, currency :  Currency, toExcludes :  RIAgreement[]) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=AgreementSearchPopup) at AgreementSearchPopup.pcf: line 10, column 80
    static function canVisit_8 (currency :  Currency, ririsk :  RIRisk, searchType :  int, toExcludes :  RIAgreement[]) : java.lang.Boolean {
      return perm.System.viewreinsuranceprogram or perm.System.editreinsuranceforpolicybasic
    }
    
    override property get CurrentLocation () : pcf.AgreementSearchPopup {
      return super.CurrentLocation as pcf.AgreementSearchPopup
    }
    
    property get currency () : Currency {
      return getVariableValue("currency", 0) as Currency
    }
    
    property set currency ($arg :  Currency) {
      setVariableValue("currency", 0, $arg)
    }
    
    property get ririsk () : RIRisk {
      return getVariableValue("ririsk", 0) as RIRisk
    }
    
    property set ririsk ($arg :  RIRisk) {
      setVariableValue("ririsk", 0, $arg)
    }
    
    property get searchType () : int {
      return getVariableValue("searchType", 0) as java.lang.Integer
    }
    
    property set searchType ($arg :  int) {
      setVariableValue("searchType", 0, $arg)
    }
    
    property get toExcludes () : RIAgreement[] {
      return getVariableValue("toExcludes", 0) as RIAgreement[]
    }
    
    property set toExcludes ($arg :  RIAgreement[]) {
      setVariableValue("toExcludes", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AgreementSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at AgreementSearchPopup.pcf: line 42, column 66
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Add) at AgreementSearchPopup.pcf: line 54, column 63
    function allCheckedRowsAction_3 (CheckedValues :  RIAgreement[], CheckedValuesErrors :  java.util.Map) : void {
      CurrentLocation.pickValueAndCommit(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchPopup.pcf: line 37, column 45
    function def_onEnter_1 (def :  pcf.AgreementSearchDV) : void {
      def.onEnter(criteria)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchPopup.pcf: line 46, column 89
    function def_onEnter_4 (def :  pcf.AgreementSearchResultsLV) : void {
      def.onEnter(searchResults, false /* not in search page */)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchPopup.pcf: line 37, column 45
    function def_refreshVariables_2 (def :  pcf.AgreementSearchDV) : void {
      def.refreshVariables(criteria)
    }
    
    // 'def' attribute on PanelRef at AgreementSearchPopup.pcf: line 46, column 89
    function def_refreshVariables_5 (def :  pcf.AgreementSearchResultsLV) : void {
      def.refreshVariables(searchResults, false /* not in search page */)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AgreementSearchPopup.pcf: line 35, column 81
    function searchCriteria_7 () : gw.reinsurance.search.AgreementSearchCriteria {
      return gw.web.admin.ReinsuranceUIHelper.createCriteria(searchType, currency, toExcludes, ririsk)
    }
    
    // 'search' attribute on SearchPanel at AgreementSearchPopup.pcf: line 35, column 81
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