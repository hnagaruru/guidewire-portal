package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/TermFinancialsViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TermFinancialsViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/TermFinancialsViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TermFinancialsViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=RecalculateLossRatio) at TermFinancialsViewTile.pcf: line 28, column 91
    function action_3 () : void {
      lossRatioHelper.recalculateLossRatio()
    }
    
    // 'available' attribute on TileAction (id=RecalculateLossRatio) at TermFinancialsViewTile.pcf: line 28, column 91
    function available_2 () : java.lang.Boolean {
      return not period.Archived
    }
    
    // 'initialValue' attribute on Variable at TermFinancialsViewTile.pcf: line 18, column 60
    function initialValue_0 () : gw.api.web.dashboard.ui.policy.PremiumHelper {
      return new gw.api.web.dashboard.ui.policy.PremiumHelper(period)
    }
    
    // 'initialValue' attribute on Variable at TermFinancialsViewTile.pcf: line 22, column 51
    function initialValue_1 () : gw.job.audit.ReportingTrendSynopsis {
      return period.reportingTrendSynopsis(true)
    }
    
    // 'label' attribute on PerformanceIndicator (id=LossRatio) at TermFinancialsViewTile.pcf: line 64, column 40
    function label_13 () : java.lang.String {
      return DisplayKey.get('Web.Dashboard.Tile.TermFinancials.LossRatio', helper.LossRatioCalculationDate)
    }
    
    // 'label' attribute on MonetaryAmountInput (id=CommercialLine1_Input) at TermFinancialsViewTile.pcf: line 91, column 75
    function label_27 () : java.lang.Object {
      return helper.CommercialLines[1].Key
    }
    
    // 'label' attribute on MonetaryAmountInput (id=CommercialLine0_Input) at TermFinancialsViewTile.pcf: line 117, column 75
    function label_48 () : java.lang.Object {
      return helper.CommercialLines[0].Key
    }
    
    // 'label' attribute on MonetaryAmountInput (id=CommercialLine2_Input) at TermFinancialsViewTile.pcf: line 122, column 75
    function label_54 () : java.lang.Object {
      return helper.CommercialLines[2].Key
    }
    
    // 'label' attribute on PerformanceIndicator (id=EarnedPremium) at TermFinancialsViewTile.pcf: line 50, column 40
    function label_8 () : java.lang.String {
      return helper.EarnedPremiumLabel
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalEstimatedPremium_Input) at TermFinancialsViewTile.pcf: line 76, column 46
    function valueRoot_17 () : java.lang.Object {
      return synopsis
    }
    
    // 'value' attribute on TextInput (id=IncludesEBURorNot_Input) at TermFinancialsViewTile.pcf: line 112, column 46
    function valueRoot_44 () : java.lang.Object {
      return helper
    }
    
    // 'value' attribute on PerformanceIndicator (id=TotalIncurred) at TermFinancialsViewTile.pcf: line 57, column 40
    function value_10 () : gw.pl.currency.MonetaryAmount {
      return helper.TotalIncurred
    }
    
    // 'value' attribute on PerformanceIndicator (id=LossRatio) at TermFinancialsViewTile.pcf: line 64, column 40
    function value_12 () : String {
      return helper.LossRatio
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalEstimatedPremium_Input) at TermFinancialsViewTile.pcf: line 76, column 46
    function value_16 () : gw.pl.currency.MonetaryAmount {
      return synopsis.TotalEstimatedPremium
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalReportedPremium_Input) at TermFinancialsViewTile.pcf: line 82, column 46
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return synopsis.TotalReportedPremium
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CommercialLine1_Input) at TermFinancialsViewTile.pcf: line 91, column 75
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return helper.CommercialLines[1].Value
    }
    
    // 'value' attribute on TextInput (id=PremiumRatio_Input) at TermFinancialsViewTile.pcf: line 100, column 46
    function value_33 () : java.math.BigDecimal {
      return synopsis.PremiumRatio
    }
    
    // 'value' attribute on TextInput (id=DaysReported_Input) at TermFinancialsViewTile.pcf: line 107, column 46
    function value_38 () : java.lang.Integer {
      return synopsis.DaysReported
    }
    
    // 'value' attribute on PerformanceIndicator (id=TotalPremium) at TermFinancialsViewTile.pcf: line 37, column 52
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return helper.TotalPremium
    }
    
    // 'value' attribute on TextInput (id=IncludesEBURorNot_Input) at TermFinancialsViewTile.pcf: line 112, column 46
    function value_43 () : java.lang.String {
      return helper.IncludesEarnedButUnreportedText
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CommercialLine0_Input) at TermFinancialsViewTile.pcf: line 117, column 75
    function value_49 () : gw.pl.currency.MonetaryAmount {
      return helper.CommercialLines[0].Value
    }
    
    // 'value' attribute on PerformanceIndicator (id=TaxesAndFees) at TermFinancialsViewTile.pcf: line 43, column 52
    function value_5 () : gw.pl.currency.MonetaryAmount {
      return helper.TaxesAndFees
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CommercialLine2_Input) at TermFinancialsViewTile.pcf: line 122, column 75
    function value_55 () : gw.pl.currency.MonetaryAmount {
      return helper.CommercialLines[2].Value
    }
    
    // 'value' attribute on PerformanceIndicator (id=EarnedPremium) at TermFinancialsViewTile.pcf: line 50, column 40
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return helper.EarnedPremium
    }
    
    // 'visible' attribute on Label (id=TrendAnalysisLabel) at TermFinancialsViewTile.pcf: line 70, column 46
    function visible_14 () : java.lang.Boolean {
      return helper.IsPremiumReporting
    }
    
    // 'visible' attribute on Label (id=EarnedPremiumLines1) at TermFinancialsViewTile.pcf: line 86, column 37
    function visible_25 () : java.lang.Boolean {
      return period.MultiLine
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=CommercialLine1_Input) at TermFinancialsViewTile.pcf: line 91, column 75
    function visible_26 () : java.lang.Boolean {
      return period.MultiLine and helper.CommercialLines.length > 1
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=CommercialLine0_Input) at TermFinancialsViewTile.pcf: line 117, column 75
    function visible_47 () : java.lang.Boolean {
      return period.MultiLine and helper.CommercialLines.length > 0
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=CommercialLine2_Input) at TermFinancialsViewTile.pcf: line 122, column 75
    function visible_53 () : java.lang.Boolean {
      return period.MultiLine and helper.CommercialLines.length > 2
    }
    
    property get helper () : gw.api.web.dashboard.ui.policy.PremiumHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.policy.PremiumHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.policy.PremiumHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get lossRatioHelper () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return getRequireValue("lossRatioHelper", 0) as gw.api.web.dashboard.ui.claims.LossRatioHelper
    }
    
    property set lossRatioHelper ($arg :  gw.api.web.dashboard.ui.claims.LossRatioHelper) {
      setRequireValue("lossRatioHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get synopsis () : gw.job.audit.ReportingTrendSynopsis {
      return getVariableValue("synopsis", 0) as gw.job.audit.ReportingTrendSynopsis
    }
    
    property set synopsis ($arg :  gw.job.audit.ReportingTrendSynopsis) {
      setVariableValue("synopsis", 0, $arg)
    }
    
    
  }
  
  
}