package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/CommissionPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommissionPlanSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/CommissionPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommissionPlanSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (tier :  Tier, unselectablePlanNames :  String[]) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.CommissionPlanSearchPopup {
      return super.CurrentLocation as pcf.CommissionPlanSearchPopup
    }
    
    property get tier () : Tier {
      return getVariableValue("tier", 0) as Tier
    }
    
    property set tier ($arg :  Tier) {
      setVariableValue("tier", 0, $arg)
    }
    
    property get unselectablePlanNames () : String[] {
      return getVariableValue("unselectablePlanNames", 0) as String[]
    }
    
    property set unselectablePlanNames ($arg :  String[]) {
      setVariableValue("unselectablePlanNames", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/CommissionPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canPick' attribute on RowIterator at CommissionPlanSearchPopup.pcf: line 57, column 69
    function canPick_13 () : java.lang.Boolean {
      return  not unselectablePlanNames.contains(commissionPlan.Name)
    }
    
    // 'pickValue' attribute on RowIterator at CommissionPlanSearchPopup.pcf: line 57, column 69
    function pickValue_14 () : java.lang.Object {
      return commissionPlan.Id
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CommissionPlanSearchPopup.pcf: line 65, column 48
    function valueRoot_9 () : java.lang.Object {
      return commissionPlan
    }
    
    // 'value' attribute on TextCell (id=CommissionPlanCurrencies_Cell) at CommissionPlanSearchPopup.pcf: line 69, column 88
    function value_11 () : java.lang.String {
      return commissionPlan.Currencies*.DisplayName.join(", ")
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CommissionPlanSearchPopup.pcf: line 65, column 48
    function value_8 () : java.lang.String {
      return commissionPlan.Name
    }
    
    property get commissionPlan () : gw.plugin.billing.CommissionPlanSummary {
      return getIteratedValue(2) as gw.plugin.billing.CommissionPlanSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/CommissionPlanSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CommissionPlanSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CommissionPlanSearchPopup.pcf: line 42, column 43
    function def_onEnter_4 (def :  pcf.SearchOnlyInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at CommissionPlanSearchPopup.pcf: line 42, column 43
    function def_refreshVariables_5 (def :  pcf.SearchOnlyInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=nameInput_Input) at CommissionPlanSearchPopup.pcf: line 37, column 74
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      commissionPlanSearchCriteria.CommissionPlanName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at CommissionPlanSearchPopup.pcf: line 26, column 71
    function searchCriteria_17 () : gw.plugin.billing.CommissionPlanSearchCriteria {
      return new gw.plugin.billing.CommissionPlanSearchCriteria(tier)
    }
    
    // 'search' attribute on SearchPanel at CommissionPlanSearchPopup.pcf: line 26, column 71
    function search_16 () : java.lang.Object {
      return commissionPlanSearchCriteria.doSearch()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CommissionPlanSearchPopup.pcf: line 65, column 48
    function sortValue_6 (commissionPlan :  gw.plugin.billing.CommissionPlanSummary) : java.lang.Object {
      return commissionPlan.Name
    }
    
    // 'value' attribute on TextCell (id=CommissionPlanCurrencies_Cell) at CommissionPlanSearchPopup.pcf: line 69, column 88
    function sortValue_7 (commissionPlan :  gw.plugin.billing.CommissionPlanSummary) : java.lang.Object {
      return commissionPlan.Currencies*.DisplayName.join(", ")
    }
    
    // 'value' attribute on TextInput (id=nameInput_Input) at CommissionPlanSearchPopup.pcf: line 37, column 74
    function valueRoot_2 () : java.lang.Object {
      return commissionPlanSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=nameInput_Input) at CommissionPlanSearchPopup.pcf: line 37, column 74
    function value_0 () : java.lang.String {
      return commissionPlanSearchCriteria.CommissionPlanName
    }
    
    // 'value' attribute on RowIterator at CommissionPlanSearchPopup.pcf: line 57, column 69
    function value_15 () : gw.plugin.billing.CommissionPlanSummary[] {
      return commissionPlans
    }
    
    property get commissionPlanSearchCriteria () : gw.plugin.billing.CommissionPlanSearchCriteria {
      return getCriteriaValue(1) as gw.plugin.billing.CommissionPlanSearchCriteria
    }
    
    property set commissionPlanSearchCriteria ($arg :  gw.plugin.billing.CommissionPlanSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get commissionPlans () : gw.plugin.billing.CommissionPlanSummary[] {
      return getResultsValue(1) as gw.plugin.billing.CommissionPlanSummary[]
    }
    
    
  }
  
  
}