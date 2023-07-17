package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AgencyBillPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgencyBillPlanSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AgencyBillPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgencyBillPlanSearchPanelExpressionsImpl extends AgencyBillPlanSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AgencyBillPlanSearchPopup.pcf: line 32, column 43
    function def_onEnter_4 (def :  pcf.SearchOnlyInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AgencyBillPlanSearchPopup.pcf: line 32, column 43
    function def_refreshVariables_5 (def :  pcf.SearchOnlyInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=PlanName_Input) at AgencyBillPlanSearchPopup.pcf: line 30, column 62
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      agencyBillPlanSearchCriteria.PlanName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=AgencyBillPlanSearchPanel) at AgencyBillPlanSearchPopup.pcf: line 23, column 71
    function searchCriteria_17 () : gw.plugin.billing.AgencyBillPlanSearchCriteria {
      return new gw.plugin.billing.AgencyBillPlanSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel (id=AgencyBillPlanSearchPanel) at AgencyBillPlanSearchPopup.pcf: line 23, column 71
    function search_16 () : java.lang.Object {
      return agencyBillPlanSearchCriteria.doSearch()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AgencyBillPlanSearchPopup.pcf: line 55, column 49
    function sortValue_6 (agencyBillPlanSummary :  gw.plugin.billing.AgencyBillPlanSummary) : java.lang.Object {
      return agencyBillPlanSummary.Name
    }
    
    // 'value' attribute on TextCell (id=Currencies_Cell) at AgencyBillPlanSearchPopup.pcf: line 61, column 49
    function sortValue_7 (agencyBillPlanSummary :  gw.plugin.billing.AgencyBillPlanSummary) : java.lang.Object {
      return agencyBillPlanSummary.Currencies*.DisplayName.join(", ")
    }
    
    // 'value' attribute on TextInput (id=PlanName_Input) at AgencyBillPlanSearchPopup.pcf: line 30, column 62
    function valueRoot_2 () : java.lang.Object {
      return agencyBillPlanSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=PlanName_Input) at AgencyBillPlanSearchPopup.pcf: line 30, column 62
    function value_0 () : java.lang.String {
      return agencyBillPlanSearchCriteria.PlanName
    }
    
    // 'value' attribute on RowIterator at AgencyBillPlanSearchPopup.pcf: line 48, column 69
    function value_15 () : gw.plugin.billing.AgencyBillPlanSummary[] {
      return agencyBillPlanSummaries
    }
    
    property get agencyBillPlanSearchCriteria () : gw.plugin.billing.AgencyBillPlanSearchCriteria {
      return getCriteriaValue(1) as gw.plugin.billing.AgencyBillPlanSearchCriteria
    }
    
    property set agencyBillPlanSearchCriteria ($arg :  gw.plugin.billing.AgencyBillPlanSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get agencyBillPlanSummaries () : gw.plugin.billing.AgencyBillPlanSummary[] {
      return getResultsValue(1) as gw.plugin.billing.AgencyBillPlanSummary[]
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/AgencyBillPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgencyBillPlanSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (unselectablePlans :  String[]) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.AgencyBillPlanSearchPopup {
      return super.CurrentLocation as pcf.AgencyBillPlanSearchPopup
    }
    
    property get unselectablePlans () : String[] {
      return getVariableValue("unselectablePlans", 0) as String[]
    }
    
    property set unselectablePlans ($arg :  String[]) {
      setVariableValue("unselectablePlans", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/AgencyBillPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AgencyBillPlanSearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canPick' attribute on RowIterator at AgencyBillPlanSearchPopup.pcf: line 48, column 69
    function canPick_13 () : java.lang.Boolean {
      return not unselectablePlans.contains(agencyBillPlanSummary.Id)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AgencyBillPlanSearchPopup.pcf: line 55, column 49
    function valueRoot_9 () : java.lang.Object {
      return agencyBillPlanSummary
    }
    
    // 'value' attribute on TextCell (id=Currencies_Cell) at AgencyBillPlanSearchPopup.pcf: line 61, column 49
    function value_11 () : java.lang.String {
      return agencyBillPlanSummary.Currencies*.DisplayName.join(", ")
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AgencyBillPlanSearchPopup.pcf: line 55, column 49
    function value_8 () : java.lang.String {
      return agencyBillPlanSummary.Name
    }
    
    property get agencyBillPlanSummary () : gw.plugin.billing.AgencyBillPlanSummary {
      return getIteratedValue(2) as gw.plugin.billing.AgencyBillPlanSummary
    }
    
    
  }
  
  
}