package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/overview/AccountHolderOverviewDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountHolderOverviewDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/AccountHolderOverviewDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountHolderOverviewDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'backgroundColor' attribute on DetailViewTile (id=AccountHolderOverviewDetailViewTile) at AccountHolderOverviewDetailViewTile.pcf: line 7, column 72
    function backgroundColor_34 () : gw.api.web.color.GWColor {
      return customerSummaryHelper.BadgeColor
    }
    
    // 'color' attribute on PerformanceIndicator (id=NonPaymentCancellationsCount) at AccountHolderOverviewDetailViewTile.pcf: line 28, column 40
    function color_1 () : gw.api.web.color.GWColor {
      return customerSummaryHelper.NonPaymentCancellationsColor
    }
    
    // 'color' attribute on PerformanceIndicator (id=DelinquenciesCount) at AccountHolderOverviewDetailViewTile.pcf: line 35, column 39
    function color_3 () : gw.api.web.color.GWColor {
      return customerSummaryHelper.DelinquenciesIn12MonthsColor
    }
    
    // 'initialValue' attribute on Variable at AccountHolderOverviewDetailViewTile.pcf: line 15, column 70
    function initialValue_0 () : gw.api.web.dashboard.ui.overview.AccountOverviewHelper {
      return gw.api.web.dashboard.ui.overview.AccountOverviewHelper.forContact(contact)
    }
    
    // 'text' attribute on DetailViewTile (id=AccountHolderOverviewDetailViewTile) at AccountHolderOverviewDetailViewTile.pcf: line 7, column 72
    function text_33 () : java.lang.String {
      return customerSummaryHelper.BadgeText
    }
    
    // 'value' attribute on MonetaryAmountInput (id=InForcePremium_Input) at AccountHolderOverviewDetailViewTile.pcf: line 47, column 54
    function valueRoot_11 () : java.lang.Object {
      return customerSummaryHelper.AccountOverview
    }
    
    // 'value' attribute on MonetaryAmountInput (id=InForcePremium_Input) at AccountHolderOverviewDetailViewTile.pcf: line 47, column 54
    function value_10 () : gw.pl.currency.MonetaryAmount {
      return customerSummaryHelper.AccountOverview.InForcePremium
    }
    
    // 'value' attribute on MonetaryAmountInput (id=LifetimePremium_Input) at AccountHolderOverviewDetailViewTile.pcf: line 52, column 54
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return customerSummaryHelper.AccountOverview.LifetimePremium
    }
    
    // 'value' attribute on PerformanceIndicator (id=NonPaymentCancellationsCount) at AccountHolderOverviewDetailViewTile.pcf: line 28, column 40
    function value_2 () : java.lang.Integer {
      return customerSummaryHelper.AccountOverview.NonPaymentCancellations
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalLosses_Input) at AccountHolderOverviewDetailViewTile.pcf: line 57, column 54
    function value_20 () : gw.pl.currency.MonetaryAmount {
      return customerSummaryHelper.AccountOverview.TotalLosses
    }
    
    // 'value' attribute on TextInput (id=PolicyCount_Input) at AccountHolderOverviewDetailViewTile.pcf: line 63, column 54
    function value_25 () : java.lang.Integer {
      return customerSummaryHelper.AccountOverview.InForcePolicies
    }
    
    // 'value' attribute on TextInput (id=OpenClaimsCount_Input) at AccountHolderOverviewDetailViewTile.pcf: line 69, column 54
    function value_30 () : java.lang.String {
      return customerSummaryHelper.formattedOpenClaims()
    }
    
    // 'value' attribute on PerformanceIndicator (id=DelinquenciesCount) at AccountHolderOverviewDetailViewTile.pcf: line 35, column 39
    function value_4 () : java.lang.String {
      return customerSummaryHelper.formattedDelinquencies()
    }
    
    // 'value' attribute on TextInput (id=CustomerSince_Input) at AccountHolderOverviewDetailViewTile.pcf: line 42, column 129
    function value_6 () : java.lang.String {
      return customerSummaryHelper.formattedCustomerSince()
    }
    
    // 'visible' attribute on DetailViewTile (id=AccountHolderOverviewDetailViewTile) at AccountHolderOverviewDetailViewTile.pcf: line 7, column 72
    function visible_35 () : java.lang.Boolean {
      return customerSummaryHelper.DisplayBadge
    }
    
    // 'visible' attribute on TextInput (id=CustomerSince_Input) at AccountHolderOverviewDetailViewTile.pcf: line 42, column 129
    function visible_5 () : java.lang.Boolean {
      return customerSummaryHelper.AccountOverview.FirstEffectivePolicyDate != null and customerSummaryHelper.HasNoErrors
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=InForcePremium_Input) at AccountHolderOverviewDetailViewTile.pcf: line 47, column 54
    function visible_9 () : java.lang.Boolean {
      return customerSummaryHelper.HasNoErrors
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get customerSummaryHelper () : gw.api.web.dashboard.ui.overview.AccountOverviewHelper {
      return getVariableValue("customerSummaryHelper", 0) as gw.api.web.dashboard.ui.overview.AccountOverviewHelper
    }
    
    property set customerSummaryHelper ($arg :  gw.api.web.dashboard.ui.overview.AccountOverviewHelper) {
      setVariableValue("customerSummaryHelper", 0, $arg)
    }
    
    
  }
  
  
}