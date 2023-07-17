package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/AccountOverviewDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountOverviewDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/AccountOverviewDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountOverviewDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=RecalculateLossRatio) at AccountOverviewDetailViewTile.pcf: line 33, column 83
    function action_3 () : void {
      lossRatioHelper.recalculateLossRatio()
    }
    
    // 'backgroundColor' attribute on DetailViewTile (id=AccountOverviewDetailViewTile) at AccountOverviewDetailViewTile.pcf: line 7, column 66
    function backgroundColor_25 () : gw.api.web.color.GWColor {
      return summaryHelper.BadgeColor
    }
    
    // 'color' attribute on PerformanceIndicator (id=ThreeYearPremium) at AccountOverviewDetailViewTile.pcf: line 47, column 52
    function color_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ACTION_SAFE
    }
    
    // 'color' attribute on PerformanceIndicator (id=ThreeYearLoss) at AccountOverviewDetailViewTile.pcf: line 54, column 52
    function color_6 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ACTION_DANGER
    }
    
    // 'color' attribute on PerformanceIndicator (id=ThreeYearLossRatio) at AccountOverviewDetailViewTile.pcf: line 61, column 29
    function color_8 () : gw.api.web.color.GWColor {
      return lossRatioCalculationResult.LossRatioColor
    }
    
    // 'initialValue' attribute on Variable at AccountOverviewDetailViewTile.pcf: line 18, column 70
    function initialValue_0 () : gw.api.web.dashboard.ui.overview.AccountOverviewHelper {
      return gw.api.web.dashboard.ui.overview.AccountOverviewHelper.forAccount(account)
    }
    
    // 'initialValue' attribute on Variable at AccountOverviewDetailViewTile.pcf: line 23, column 68
    function initialValue_1 () : gw.policy.PolicyLossCalculator.LossCalculationResult {
      return lossRatioHelper.LossCalculationResult
    }
    
    // 'initialValue' attribute on Variable at AccountOverviewDetailViewTile.pcf: line 27, column 86
    function initialValue_2 () : gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance
    }
    
    // 'label' attribute on PerformanceIndicator (id=ThreeYearLossRatio) at AccountOverviewDetailViewTile.pcf: line 61, column 29
    function label_10 () : java.lang.String {
      return DisplayKey.get('Web.Dashboard.Tile.AccountOverview.ThreeYearLossRatio', lossRatioCalculationResult.LossRatioCalculationDate)
    }
    
    // 'text' attribute on DetailViewTile (id=AccountOverviewDetailViewTile) at AccountOverviewDetailViewTile.pcf: line 7, column 66
    function text_24 () : java.lang.String {
      return summaryHelper.BadgeText
    }
    
    // 'value' attribute on TextInput (id=NonPaymentCancellationsCount_Input) at AccountOverviewDetailViewTile.pcf: line 81, column 46
    function valueRoot_21 () : java.lang.Object {
      return summaryHelper.AccountOverview
    }
    
    // 'value' attribute on TextInput (id=AccountSince_Input) at AccountOverviewDetailViewTile.pcf: line 69, column 113
    function value_12 () : java.lang.String {
      return summaryHelper.formattedCustomerSince()
    }
    
    // 'value' attribute on TextInput (id=DelinquenciesCount_Input) at AccountOverviewDetailViewTile.pcf: line 75, column 54
    function value_16 () : String {
      return summaryHelper.formattedDelinquencies()
    }
    
    // 'value' attribute on TextInput (id=NonPaymentCancellationsCount_Input) at AccountOverviewDetailViewTile.pcf: line 81, column 46
    function value_20 () : java.lang.Integer {
      return summaryHelper.AccountOverview.NonPaymentCancellations
    }
    
    // 'value' attribute on PerformanceIndicator (id=ThreeYearPremium) at AccountOverviewDetailViewTile.pcf: line 47, column 52
    function value_5 () : gw.pl.currency.MonetaryAmount {
      return lossRatioCalculationResult.EarnedPremium
    }
    
    // 'value' attribute on PerformanceIndicator (id=ThreeYearLoss) at AccountOverviewDetailViewTile.pcf: line 54, column 52
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return lossRatioCalculationResult.TotalIncurred
    }
    
    // 'value' attribute on PerformanceIndicator (id=ThreeYearLossRatio) at AccountOverviewDetailViewTile.pcf: line 61, column 29
    function value_9 () : String {
      return lossRatioCalculationResult.LossRatioFormatted
    }
    
    // 'visible' attribute on TextInput (id=AccountSince_Input) at AccountOverviewDetailViewTile.pcf: line 69, column 113
    function visible_11 () : java.lang.Boolean {
      return summaryHelper.AccountOverview.FirstEffectivePolicyDate != null and summaryHelper.HasNoErrors
    }
    
    // 'visible' attribute on TextInput (id=DelinquenciesCount_Input) at AccountOverviewDetailViewTile.pcf: line 75, column 54
    function visible_15 () : java.lang.Boolean {
      return permissions.AccountSummaryBilling
    }
    
    // 'visible' attribute on TextInput (id=NonPaymentCancellationsCount_Input) at AccountOverviewDetailViewTile.pcf: line 81, column 46
    function visible_19 () : java.lang.Boolean {
      return summaryHelper.HasNoErrors
    }
    
    // 'visible' attribute on DetailViewTile (id=AccountOverviewDetailViewTile) at AccountOverviewDetailViewTile.pcf: line 7, column 66
    function visible_26 () : java.lang.Boolean {
      return summaryHelper.DisplayBadge
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get lossRatioCalculationResult () : gw.policy.PolicyLossCalculator.LossCalculationResult {
      return getVariableValue("lossRatioCalculationResult", 0) as gw.policy.PolicyLossCalculator.LossCalculationResult
    }
    
    property set lossRatioCalculationResult ($arg :  gw.policy.PolicyLossCalculator.LossCalculationResult) {
      setVariableValue("lossRatioCalculationResult", 0, $arg)
    }
    
    property get lossRatioHelper () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return getRequireValue("lossRatioHelper", 0) as gw.api.web.dashboard.ui.claims.LossRatioHelper
    }
    
    property set lossRatioHelper ($arg :  gw.api.web.dashboard.ui.claims.LossRatioHelper) {
      setRequireValue("lossRatioHelper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    property get summaryHelper () : gw.api.web.dashboard.ui.overview.AccountOverviewHelper {
      return getVariableValue("summaryHelper", 0) as gw.api.web.dashboard.ui.overview.AccountOverviewHelper
    }
    
    property set summaryHelper ($arg :  gw.api.web.dashboard.ui.overview.AccountOverviewHelper) {
      setVariableValue("summaryHelper", 0, $arg)
    }
    
    
  }
  
  
}