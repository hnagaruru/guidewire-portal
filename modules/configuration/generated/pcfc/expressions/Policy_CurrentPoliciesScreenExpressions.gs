package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_CurrentPoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_CurrentPoliciesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_CurrentPoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssociatedPoliciesLVExpressionsImpl extends Policy_CurrentPoliciesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at Policy_CurrentPoliciesScreen.pcf: line 52, column 37
    function filter_7 () : gw.api.filters.IFilter {
      return productCodeFilterSet.getAllFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at Policy_CurrentPoliciesScreen.pcf: line 62, column 37
    function filter_9 () : gw.api.filters.IFilter {
      return new gw.api.web.policy.ViewablePolicyPeriodQueryFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at Policy_CurrentPoliciesScreen.pcf: line 43, column 70
    function filters_6 () : gw.api.filters.IFilter[] {
      return new gw.policy.PolicyFilters().FilterOptions
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at Policy_CurrentPoliciesScreen.pcf: line 54, column 77
    function filters_8 () : gw.api.filters.IFilter[] {
      return productCodeFilterSet.getClaimPolicyPeriodFilters()
    }
    
    // 'initialValue' attribute on Variable at Policy_CurrentPoliciesScreen.pcf: line 32, column 51
    function initialValue_5 () : gw.account.ProductCodeFilterSet {
      return policiesHelper.getProductCodeFilterSet()
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at Policy_CurrentPoliciesScreen.pcf: line 70, column 57
    function sortValue_10 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.PolicyNumberDisplayString
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyType_Cell) at Policy_CurrentPoliciesScreen.pcf: line 76, column 56
    function sortValue_11 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.Policy.ProductCode
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at Policy_CurrentPoliciesScreen.pcf: line 80, column 51
    function sortValue_12 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=DatesEffective_Cell) at Policy_CurrentPoliciesScreen.pcf: line 84, column 62
    function sortValue_13 (period :  entity.PolicyPeriod) : java.lang.Object {
      return policiesHelper.effectiveDates(period)
    }
    
    // 'value' attribute on RowIterator at Policy_CurrentPoliciesScreen.pcf: line 37, column 45
    function value_46 () : entity.PolicyPeriod[] {
      return policiesHelper.PolicyPeriodsOnViewMore
    }
    
    property get productCodeFilterSet () : gw.account.ProductCodeFilterSet {
      return getVariableValue("productCodeFilterSet", 1) as gw.account.ProductCodeFilterSet
    }
    
    property set productCodeFilterSet ($arg :  gw.account.ProductCodeFilterSet) {
      setVariableValue("productCodeFilterSet", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_CurrentPoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssociatedPoliciesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=OpenBilling_Cell) at Policy_CurrentPoliciesScreen.pcf: line 101, column 84
    function actionAvailable_34 () : java.lang.Boolean {
      return policiesHelper.isOpenBillingsActionAvailable(period)
    }
    
    // 'actionAvailable' attribute on TextCell (id=OpenTransactions_Cell) at Policy_CurrentPoliciesScreen.pcf: line 108, column 71
    function actionAvailable_38 () : java.lang.Boolean {
      return policiesHelper.isOpenTransactionsActionAvailable(period)
    }
    
    // 'actionAvailable' attribute on TextCell (id=OpenClaims_Cell) at Policy_CurrentPoliciesScreen.pcf: line 115, column 82
    function actionAvailable_42 () : java.lang.Boolean {
      return policiesHelper.isOpenClaimsActionAvailable(period)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at Policy_CurrentPoliciesScreen.pcf: line 70, column 57
    function action_14 () : void {
      PolicyFileForward.go(period.PolicyNumber, period.PeriodStart)
    }
    
    // 'action' attribute on TextCell (id=OpenBilling_Cell) at Policy_CurrentPoliciesScreen.pcf: line 101, column 84
    function action_32 () : void {
      PolicyFile_Billing.push(period, period.EditEffectiveDate)
    }
    
    // 'action' attribute on TextCell (id=OpenTransactions_Cell) at Policy_CurrentPoliciesScreen.pcf: line 108, column 71
    function action_37 () : void {
      policiesHelper.openTransactionsAction(period)
    }
    
    // 'action' attribute on TextCell (id=OpenClaims_Cell) at Policy_CurrentPoliciesScreen.pcf: line 115, column 82
    function action_41 () : void {
      policiesHelper.claimsViewMore(period)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at Policy_CurrentPoliciesScreen.pcf: line 70, column 57
    function action_dest_15 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(period.PolicyNumber, period.PeriodStart)
    }
    
    // 'action' attribute on TextCell (id=OpenBilling_Cell) at Policy_CurrentPoliciesScreen.pcf: line 101, column 84
    function action_dest_33 () : pcf.api.Destination {
      return pcf.PolicyFile_Billing.createDestination(period, period.EditEffectiveDate)
    }
    
    // 'useArchivedStyle' attribute on Row at Policy_CurrentPoliciesScreen.pcf: line 65, column 64
    function useArchivedStyle_45 () : java.lang.Boolean {
      return period.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at Policy_CurrentPoliciesScreen.pcf: line 70, column 57
    function valueRoot_17 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at Policy_CurrentPoliciesScreen.pcf: line 76, column 56
    function valueRoot_20 () : java.lang.Object {
      return period.Policy
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at Policy_CurrentPoliciesScreen.pcf: line 70, column 57
    function value_16 () : java.lang.String {
      return period.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at Policy_CurrentPoliciesScreen.pcf: line 76, column 56
    function value_19 () : gw.api.productmodel.Product {
      return period.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at Policy_CurrentPoliciesScreen.pcf: line 80, column 51
    function value_22 () : java.lang.String {
      return period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=DatesEffective_Cell) at Policy_CurrentPoliciesScreen.pcf: line 84, column 62
    function value_25 () : java.lang.String {
      return policiesHelper.effectiveDates(period)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at Policy_CurrentPoliciesScreen.pcf: line 89, column 47
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return period.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=LossRatio_Cell) at Policy_CurrentPoliciesScreen.pcf: line 94, column 114
    function value_30 () : java.lang.String {
      return gw.api.web.dashboard.ui.policy.PremiumHelper.formatLossRatio(period.PolicyTerm.LossRatio)
    }
    
    // 'value' attribute on TextCell (id=OpenBilling_Cell) at Policy_CurrentPoliciesScreen.pcf: line 101, column 84
    function value_35 () : java.lang.String {
      return String.valueOf(policiesHelper.numberOfOpenBillings(period))
    }
    
    // 'value' attribute on TextCell (id=OpenTransactions_Cell) at Policy_CurrentPoliciesScreen.pcf: line 108, column 71
    function value_39 () : java.lang.String {
      return String.valueOf(policiesHelper.numberOfOpenTransactions(period))
    }
    
    // 'value' attribute on TextCell (id=OpenClaims_Cell) at Policy_CurrentPoliciesScreen.pcf: line 115, column 82
    function value_43 () : java.lang.String {
      return String.valueOf(policiesHelper.numberOfOpenClaims(period))
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(2) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_CurrentPoliciesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_CurrentPoliciesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RecalculateLossRatio) at Policy_CurrentPoliciesScreen.pcf: line 19, column 95
    function action_2 () : void {
      policiesHelper.recalculateLossRatio()
    }
    
    // 'available' attribute on ToolbarButton (id=RecalculateLossRatio) at Policy_CurrentPoliciesScreen.pcf: line 19, column 95
    function available_1 () : java.lang.Boolean {
      return policiesHelper.PolicyPeriodsOnViewMore.HasElements
    }
    
    // 'initialValue' attribute on Variable at Policy_CurrentPoliciesScreen.pcf: line 13, column 66
    function initialValue_0 () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return gw.api.web.dashboard.ui.policy.CurrentPolicyHelper.forAccount(account)
    }
    
    // 'label' attribute on AlertBar (id=LossRatioWarning) at Policy_CurrentPoliciesScreen.pcf: line 24, column 70
    function label_4 () : java.lang.Object {
      return policiesHelper.LossRatioHelper.ErrorMessage
    }
    
    // 'visible' attribute on AlertBar (id=LossRatioWarning) at Policy_CurrentPoliciesScreen.pcf: line 24, column 70
    function visible_3 () : java.lang.Boolean {
      return policiesHelper.LossRatioHelper.ErrorMessage != null
    }
    
    // 'visible' attribute on DetailViewPanel at Policy_CurrentPoliciesScreen.pcf: line 121, column 63
    function visible_47 () : java.lang.Boolean {
      return gw.api.archive.PCArchivingUtil.ArchiveEnabled
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get policiesHelper () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return getVariableValue("policiesHelper", 0) as gw.api.web.dashboard.ui.policy.CurrentPolicyHelper
    }
    
    property set policiesHelper ($arg :  gw.api.web.dashboard.ui.policy.CurrentPolicyHelper) {
      setVariableValue("policiesHelper", 0, $arg)
    }
    
    
  }
  
  
}