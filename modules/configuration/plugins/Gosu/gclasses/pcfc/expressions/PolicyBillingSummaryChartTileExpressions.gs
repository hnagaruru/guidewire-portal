package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/PolicyBillingSummaryChartTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyBillingSummaryChartTileExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/PolicyBillingSummaryChartTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyBillingSummaryChartTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction at PolicyBillingSummaryChartTile.pcf: line 25, column 47
    function action_2 () : void {
      billingHandler.openInBillng()
    }
    
    // 'label' attribute on TileAction at PolicyBillingSummaryChartTile.pcf: line 25, column 47
    function label_3 () : java.lang.Object {
      return billingHandler.ActionLabel
    }
    
    // 'visible' attribute on TileAction at PolicyBillingSummaryChartTile.pcf: line 25, column 47
    function visible_1 () : java.lang.Boolean {
      return billingSummaryHelper.OpenInBillingSystemAvailable and gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance.ViewInBillingCenter
    }
    
    property get billingHandler () : gw.api.web.dashboard.ui.billing.OpenBillingHandler {
      return getIteratedValue(1) as gw.api.web.dashboard.ui.billing.OpenBillingHandler
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/PolicyBillingSummaryChartTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyBillingSummaryChartTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'categoryLabel' attribute on DataSeries at PolicyBillingSummaryChartTile.pcf: line 38, column 31
    function categoryLabel_5 (value :  gw.api.web.dashboard.ui.billing.BillingSummaryChartEntry) : java.lang.String {
      return value.Label
    }
    
    // 'dataValues' attribute on DataSeries at PolicyBillingSummaryChartTile.pcf: line 38, column 31
    function dataValues_6 () : java.lang.Object {
      return billingSummaryHelper.BillingSummaryData
    }
    
    // 'initialValue' attribute on Variable at PolicyBillingSummaryChartTile.pcf: line 14, column 52
    function initialValue_0 () : List<gw.api.web.color.GWColor> {
      return billingSummaryHelper.SummaryChartColors
    }
    
    // 'strokeColor' attribute on DataSeries at PolicyBillingSummaryChartTile.pcf: line 38, column 31
    function strokeColor_8 () : List<gw.api.web.color.GWColor> {
      return summaryChartColors
    }
    
    // 'value' attribute on TileActionIterator at PolicyBillingSummaryChartTile.pcf: line 21, column 38
    function value_4 () : gw.api.web.dashboard.ui.billing.OpenBillingHandler[] {
      return billingSummaryHelper.BillingHandlers
    }
    
    // 'value' attribute on DataSeries at PolicyBillingSummaryChartTile.pcf: line 38, column 31
    function value_7 (value :  gw.api.web.dashboard.ui.billing.BillingSummaryChartEntry) : java.lang.Object {
      return value.Amount
    }
    
    // 'visible' attribute on TileChartPanel at PolicyBillingSummaryChartTile.pcf: line 31, column 51
    function visible_10 () : java.lang.Boolean {
      return billingSummaryHelper.DisplayChart
    }
    
    property get billingSummaryHelper () : gw.api.web.dashboard.ui.billing.BillingSummaryHelper {
      return getRequireValue("billingSummaryHelper", 0) as gw.api.web.dashboard.ui.billing.BillingSummaryHelper
    }
    
    property set billingSummaryHelper ($arg :  gw.api.web.dashboard.ui.billing.BillingSummaryHelper) {
      setRequireValue("billingSummaryHelper", 0, $arg)
    }
    
    property get summaryChartColors () : List<gw.api.web.color.GWColor> {
      return getVariableValue("summaryChartColors", 0) as List<gw.api.web.color.GWColor>
    }
    
    property set summaryChartColors ($arg :  List<gw.api.web.color.GWColor>) {
      setVariableValue("summaryChartColors", 0, $arg)
    }
    
    
  }
  
  
}