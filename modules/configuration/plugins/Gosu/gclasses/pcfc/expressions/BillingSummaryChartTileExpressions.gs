package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/BillingSummaryChartTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingSummaryChartTileExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/BillingSummaryChartTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingSummaryChartTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=NextInvoice0_Input) at BillingSummaryChartTile.pcf: line 57, column 59
    function actionAvailable_17 () : java.lang.Boolean {
      return  billingSummaryHelper.nextInvoiceAvailable(0)
    }
    
    // 'actionAvailable' attribute on TextInput (id=LastPayment0_Input) at BillingSummaryChartTile.pcf: line 65, column 59
    function actionAvailable_23 () : java.lang.Boolean {
      return  billingSummaryHelper.lastPaymentAvailable(0)
    }
    
    // 'actionAvailable' attribute on TextInput (id=NextInvoice1_Input) at BillingSummaryChartTile.pcf: line 79, column 59
    function actionAvailable_33 () : java.lang.Boolean {
      return  billingSummaryHelper.nextInvoiceAvailable(1)
    }
    
    // 'actionAvailable' attribute on TextInput (id=LastPayment1_Input) at BillingSummaryChartTile.pcf: line 87, column 59
    function actionAvailable_39 () : java.lang.Boolean {
      return  billingSummaryHelper.lastPaymentAvailable(1)
    }
    
    // 'actionAvailable' attribute on TextInput (id=NextInvoice2_Input) at BillingSummaryChartTile.pcf: line 101, column 59
    function actionAvailable_49 () : java.lang.Boolean {
      return  billingSummaryHelper.nextInvoiceAvailable(2)
    }
    
    // 'actionAvailable' attribute on TextInput (id=LastPayment2_Input) at BillingSummaryChartTile.pcf: line 109, column 59
    function actionAvailable_55 () : java.lang.Boolean {
      return  billingSummaryHelper.lastPaymentAvailable(2)
    }
    
    // 'action' attribute on TextInput (id=NextInvoice0_Input) at BillingSummaryChartTile.pcf: line 57, column 59
    function action_16 () : void {
      billingSummaryHelper.viewNextInvoiceInBillingCenter(0)
    }
    
    // 'action' attribute on TextInput (id=LastPayment0_Input) at BillingSummaryChartTile.pcf: line 65, column 59
    function action_22 () : void {
      billingSummaryHelper.viewLastPaymentInBillingCenter(0)
    }
    
    // 'action' attribute on TextInput (id=NextInvoice1_Input) at BillingSummaryChartTile.pcf: line 79, column 59
    function action_32 () : void {
      billingSummaryHelper.viewNextInvoiceInBillingCenter(1)
    }
    
    // 'action' attribute on TextInput (id=LastPayment1_Input) at BillingSummaryChartTile.pcf: line 87, column 59
    function action_38 () : void {
      billingSummaryHelper.viewLastPaymentInBillingCenter(1)
    }
    
    // 'action' attribute on TextInput (id=NextInvoice2_Input) at BillingSummaryChartTile.pcf: line 101, column 59
    function action_48 () : void {
      billingSummaryHelper.viewNextInvoiceInBillingCenter(2)
    }
    
    // 'action' attribute on TextInput (id=LastPayment2_Input) at BillingSummaryChartTile.pcf: line 109, column 59
    function action_54 () : void {
      billingSummaryHelper.viewLastPaymentInBillingCenter(2)
    }
    
    // 'viewMoreAction' attribute on ChartTile (id=BillingSummaryChartTile) at BillingSummaryChartTile.pcf: line 10, column 61
    function action_60 () : void {
      billingSummaryHelper.ViewMore()
    }
    
    // 'categoryLabel' attribute on DataSeries at BillingSummaryChartTile.pcf: line 41, column 31
    function categoryLabel_5 (value :  gw.api.web.dashboard.ui.billing.BillingSummaryChartEntry) : java.lang.String {
      return value.Label
    }
    
    // 'dataValues' attribute on DataSeries at BillingSummaryChartTile.pcf: line 41, column 31
    function dataValues_6 () : java.lang.Object {
      return billingSummaryHelper.BillingSummaryData
    }
    
    // 'initialValue' attribute on Variable at BillingSummaryChartTile.pcf: line 17, column 52
    function initialValue_0 () : List<gw.api.web.color.GWColor> {
      return billingSummaryHelper.SummaryChartColors
    }
    
    // 'strokeColor' attribute on DataSeries at BillingSummaryChartTile.pcf: line 41, column 31
    function strokeColor_8 () : List<gw.api.web.color.GWColor> {
      return summaryChartColors
    }
    
    // 'value' attribute on TextInput (id=AccountLabel0_Input) at BillingSummaryChartTile.pcf: line 49, column 61
    function value_12 () : java.lang.String {
      return billingSummaryHelper.accountLabel(0)
    }
    
    // 'value' attribute on TextInput (id=NextInvoice0_Input) at BillingSummaryChartTile.pcf: line 57, column 59
    function value_18 () : java.lang.String {
      return billingSummaryHelper.formattedNextInvoice(0)
    }
    
    // 'value' attribute on TextInput (id=LastPayment0_Input) at BillingSummaryChartTile.pcf: line 65, column 59
    function value_24 () : java.lang.String {
      return billingSummaryHelper.formattedLastPayment(0)
    }
    
    // 'value' attribute on TextInput (id=AccountLabel1_Input) at BillingSummaryChartTile.pcf: line 71, column 59
    function value_28 () : java.lang.String {
      return billingSummaryHelper.accountLabel(1)
    }
    
    // 'value' attribute on TextInput (id=NextInvoice1_Input) at BillingSummaryChartTile.pcf: line 79, column 59
    function value_34 () : java.lang.String {
      return billingSummaryHelper.formattedNextInvoice(1)
    }
    
    // 'value' attribute on TileActionIterator at BillingSummaryChartTile.pcf: line 24, column 38
    function value_4 () : gw.api.web.dashboard.ui.billing.OpenBillingHandler[] {
      return billingSummaryHelper.BillingHandlers
    }
    
    // 'value' attribute on TextInput (id=LastPayment1_Input) at BillingSummaryChartTile.pcf: line 87, column 59
    function value_40 () : java.lang.String {
      return billingSummaryHelper.formattedLastPayment(1)
    }
    
    // 'value' attribute on TextInput (id=AccountLabel2_Input) at BillingSummaryChartTile.pcf: line 93, column 59
    function value_44 () : java.lang.String {
      return billingSummaryHelper.accountLabel(2)
    }
    
    // 'value' attribute on TextInput (id=NextInvoice2_Input) at BillingSummaryChartTile.pcf: line 101, column 59
    function value_50 () : java.lang.String {
      return billingSummaryHelper.formattedNextInvoice(2)
    }
    
    // 'value' attribute on TextInput (id=LastPayment2_Input) at BillingSummaryChartTile.pcf: line 109, column 59
    function value_56 () : java.lang.String {
      return billingSummaryHelper.formattedLastPayment(2)
    }
    
    // 'value' attribute on DataSeries at BillingSummaryChartTile.pcf: line 41, column 31
    function value_7 (value :  gw.api.web.dashboard.ui.billing.BillingSummaryChartEntry) : java.lang.Object {
      return value.Amount
    }
    
    // 'visible' attribute on TileChartPanel at BillingSummaryChartTile.pcf: line 34, column 51
    function visible_10 () : java.lang.Boolean {
      return billingSummaryHelper.DisplayChart
    }
    
    // 'visible' attribute on TextInput (id=AccountLabel0_Input) at BillingSummaryChartTile.pcf: line 49, column 61
    function visible_11 () : java.lang.Boolean {
      return billingSummaryHelper.Payments.length > 1
    }
    
    // 'visible' attribute on TextInput (id=NextInvoice0_Input) at BillingSummaryChartTile.pcf: line 57, column 59
    function visible_15 () : java.lang.Boolean {
      return billingSummaryHelper.entryAvailable(0)
    }
    
    // 'visible' attribute on TextInput (id=AccountLabel1_Input) at BillingSummaryChartTile.pcf: line 71, column 59
    function visible_27 () : java.lang.Boolean {
      return billingSummaryHelper.entryAvailable(1)
    }
    
    // 'visible' attribute on TextInput (id=AccountLabel2_Input) at BillingSummaryChartTile.pcf: line 93, column 59
    function visible_43 () : java.lang.Boolean {
      return billingSummaryHelper.entryAvailable(2)
    }
    
    // 'viewMoreVisible' attribute on ChartTile (id=BillingSummaryChartTile) at BillingSummaryChartTile.pcf: line 10, column 61
    function visible_59 () : java.lang.Boolean {
      return billingSummaryHelper.ViewMore != null
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
  
  @javax.annotation.Generated("config/web/pcf/billing/BillingSummaryChartTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BillingSummaryChartTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction at BillingSummaryChartTile.pcf: line 28, column 47
    function action_2 () : void {
      billingHandler.openInBillng()
    }
    
    // 'label' attribute on TileAction at BillingSummaryChartTile.pcf: line 28, column 47
    function label_3 () : java.lang.Object {
      return billingHandler.ActionLabel
    }
    
    // 'visible' attribute on TileAction at BillingSummaryChartTile.pcf: line 28, column 47
    function visible_1 () : java.lang.Boolean {
      return billingSummaryHelper.OpenInBillingSystemAvailable and gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance.ViewInBillingCenter
    }
    
    property get billingHandler () : gw.api.web.dashboard.ui.billing.OpenBillingHandler {
      return getIteratedValue(1) as gw.api.web.dashboard.ui.billing.OpenBillingHandler
    }
    
    
  }
  
  
}