package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/CurrentPolicyTermsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentPolicyTermsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/CurrentPolicyTermsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentPolicyTermsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=RecalculateLossRatio) at CurrentPolicyTermsListViewTile.pcf: line 28, column 98
    function action_30 () : void {
      lossRatioHelper.recalculateLossRatio()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentPolicyTermsListViewTile) at CurrentPolicyTermsListViewTile.pcf: line 12, column 61
    function action_32 () : void {
      currentPoliciesHelper.viewMore()
    }
    
    // 'filter' attribute on ToolbarFilterOption at CurrentPolicyTermsListViewTile.pcf: line 41, column 33
    function filter_0 () : gw.api.filters.IFilter {
      return new gw.api.web.policy.ViewablePolicyPeriodQueryFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at CurrentPolicyTermsListViewTile.pcf: line 48, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return new gw.policy.PolicyFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at CurrentPolicyTermsListViewTile.pcf: line 22, column 66
    function initialValue_29 () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return gw.api.web.dashboard.ui.policy.CurrentPolicyHelper.forAccount(account, lossRatioHelper)
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentPolicyTermsListViewTile.pcf: line 53, column 24
    function sortBy_2 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPolicyTermsListViewTile.pcf: line 62, column 25
    function sortValue_3 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPolicyTermsListViewTile.pcf: line 68, column 31
    function sortValue_4 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CurrentPolicyTermsListViewTile.pcf: line 74, column 25
    function sortValue_5 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=DatesEffective_Cell) at CurrentPolicyTermsListViewTile.pcf: line 80, column 25
    function sortValue_6 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return currentPoliciesHelper.effectiveDates(policyPeriod)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at CurrentPolicyTermsListViewTile.pcf: line 85, column 25
    function sortValue_7 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=LossRatio_Cell) at CurrentPolicyTermsListViewTile.pcf: line 91, column 25
    function sortValue_8 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return gw.api.web.dashboard.ui.policy.PremiumHelper.lossRatioWithDate(policyPeriod)
    }
    
    // 'value' attribute on RowIterator at CurrentPolicyTermsListViewTile.pcf: line 34, column 41
    function value_28 () : entity.PolicyPeriod[] {
      return currentPoliciesHelper.PolicyPeriods
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=CurrentPolicyTermsListViewTile) at CurrentPolicyTermsListViewTile.pcf: line 12, column 61
    function visible_31 () : java.lang.Boolean {
      return currentPoliciesHelper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get currentPoliciesHelper () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return getVariableValue("currentPoliciesHelper", 0) as gw.api.web.dashboard.ui.policy.CurrentPolicyHelper
    }
    
    property set currentPoliciesHelper ($arg :  gw.api.web.dashboard.ui.policy.CurrentPolicyHelper) {
      setVariableValue("currentPoliciesHelper", 0, $arg)
    }
    
    property get lossRatioHelper () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return getRequireValue("lossRatioHelper", 0) as gw.api.web.dashboard.ui.claims.LossRatioHelper
    }
    
    property set lossRatioHelper ($arg :  gw.api.web.dashboard.ui.claims.LossRatioHelper) {
      setRequireValue("lossRatioHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/CurrentPolicyTermsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentPolicyTermsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentPolicyTermsListViewTile.pcf: line 62, column 25
    function action_9 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber, policyPeriod.PeriodStart)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentPolicyTermsListViewTile.pcf: line 62, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber, policyPeriod.PeriodStart)
    }
    
    // 'useArchivedStyle' attribute on Row at CurrentPolicyTermsListViewTile.pcf: line 55, column 50
    function useArchivedStyle_27 () : java.lang.Boolean {
      return policyPeriod.Archived
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPolicyTermsListViewTile.pcf: line 62, column 25
    function valueRoot_12 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPolicyTermsListViewTile.pcf: line 68, column 31
    function valueRoot_15 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPolicyTermsListViewTile.pcf: line 62, column 25
    function value_11 () : String {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPolicyTermsListViewTile.pcf: line 68, column 31
    function value_14 () : String {
      return policyPeriod.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CurrentPolicyTermsListViewTile.pcf: line 74, column 25
    function value_17 () : java.lang.String {
      return policyPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=DatesEffective_Cell) at CurrentPolicyTermsListViewTile.pcf: line 80, column 25
    function value_20 () : java.lang.String {
      return currentPoliciesHelper.effectiveDates(policyPeriod)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at CurrentPolicyTermsListViewTile.pcf: line 85, column 25
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=LossRatio_Cell) at CurrentPolicyTermsListViewTile.pcf: line 91, column 25
    function value_25 () : java.lang.String {
      return gw.api.web.dashboard.ui.policy.PremiumHelper.lossRatioWithDate(policyPeriod)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}