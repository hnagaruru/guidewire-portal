package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/Account_BillingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Account_BillingScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/account/Account_BillingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Account_BillingScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ViewInBC) at Account_BillingScreen.pcf: line 29, column 121
    function action_2 () : void {
      BCAccount.push(gw.api.system.PCConfigParameters.BillingSystemURL.Value, account.AccountNumber )
    }
    
    // 'action' attribute on ToolbarButton (id=ViewInBC) at Account_BillingScreen.pcf: line 29, column 121
    function action_dest_3 () : pcf.api.Destination {
      return pcf.BCAccount.createDestination(gw.api.system.PCConfigParameters.BillingSystemURL.Value, account.AccountNumber )
    }
    
    // 'def' attribute on PanelRef (id=OwnedPolicies) at Account_BillingScreen.pcf: line 141, column 30
    function def_onEnter_50 (def :  pcf.BillingPoliciesLV) : void {
      def.onEnter(account, true)
    }
    
    // 'def' attribute on PanelRef (id=BilledPolicies) at Account_BillingScreen.pcf: line 147, column 31
    function def_onEnter_52 (def :  pcf.BillingPoliciesLV) : void {
      def.onEnter(account, false)
    }
    
    // 'def' attribute on PanelRef at Account_BillingScreen.pcf: line 156, column 44
    function def_onEnter_54 (def :  pcf.BillingInvoicesLV) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on PanelRef (id=OwnedPolicies) at Account_BillingScreen.pcf: line 141, column 30
    function def_refreshVariables_51 (def :  pcf.BillingPoliciesLV) : void {
      def.refreshVariables(account, true)
    }
    
    // 'def' attribute on PanelRef (id=BilledPolicies) at Account_BillingScreen.pcf: line 147, column 31
    function def_refreshVariables_53 (def :  pcf.BillingPoliciesLV) : void {
      def.refreshVariables(account, false)
    }
    
    // 'def' attribute on PanelRef at Account_BillingScreen.pcf: line 156, column 44
    function def_refreshVariables_55 (def :  pcf.BillingInvoicesLV) : void {
      def.refreshVariables(account)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=BillingAccounts_Input) at Account_BillingScreen.pcf: line 38, column 38
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at Account_BillingScreen.pcf: line 19, column 71
    function initialValue_0 () : java.util.Map<java.lang.String, java.lang.String> {
      return gw.web.account.AccountBillingUIHelper.retrieveAccountNumbers(account)
    }
    
    // 'onChange' attribute on PostOnChange at Account_BillingScreen.pcf: line 40, column 155
    function onChange_4 () : void {
      billingSummary = gw.web.account.AccountBillingUIHelper.retrieveBillingSummary({accountNumber}, account.PreferredSettlementCurrency)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingAccounts_Input) at Account_BillingScreen.pcf: line 38, column 38
    function valueRange_7 () : java.lang.Object {
      return accountNumbers.Keys.toList()
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BilledOutstanding_Input) at Account_BillingScreen.pcf: line 59, column 64
    function valueRoot_13 () : java.lang.Object {
      return billingSummary.BilledOutstandingTotal
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BilledOutstandingCurrent_Input) at Account_BillingScreen.pcf: line 65, column 66
    function valueRoot_16 () : java.lang.Object {
      return billingSummary.BilledOutstandingCurrent
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BilledOutstandingPastDue_Input) at Account_BillingScreen.pcf: line 71, column 66
    function valueRoot_19 () : java.lang.Object {
      return billingSummary.BilledOutstandingPastDue
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Unbilled_Input) at Account_BillingScreen.pcf: line 77, column 55
    function valueRoot_22 () : java.lang.Object {
      return billingSummary.UnbilledTotal
    }
    
    // 'value' attribute on MonetaryAmountInput (id=UnappliedFunds_Input) at Account_BillingScreen.pcf: line 83, column 61
    function valueRoot_25 () : java.lang.Object {
      return billingSummary.UnappliedFundsTotal
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Requirement_Input) at Account_BillingScreen.pcf: line 102, column 63
    function valueRoot_32 () : java.lang.Object {
      return billingSummary.CollateralRequirement
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Held_Input) at Account_BillingScreen.pcf: line 108, column 56
    function valueRoot_35 () : java.lang.Object {
      return billingSummary.CollateralHeld
    }
    
    // 'value' attribute on TextInput (id=PrimaryPayerName_Input) at Account_BillingScreen.pcf: line 124, column 53
    function valueRoot_42 () : java.lang.Object {
      return billingSummary.PrimaryPayer
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BilledOutstanding_Input) at Account_BillingScreen.pcf: line 59, column 64
    function value_12 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.BilledOutstandingTotal.Total
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BilledOutstandingCurrent_Input) at Account_BillingScreen.pcf: line 65, column 66
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.BilledOutstandingCurrent.Total
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BilledOutstandingPastDue_Input) at Account_BillingScreen.pcf: line 71, column 66
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.BilledOutstandingPastDue.Total
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Unbilled_Input) at Account_BillingScreen.pcf: line 77, column 55
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.UnbilledTotal.Total
    }
    
    // 'value' attribute on MonetaryAmountInput (id=UnappliedFunds_Input) at Account_BillingScreen.pcf: line 83, column 61
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.UnappliedFundsTotal.Total
    }
    
    // 'value' attribute on TextInput (id=AccountBalancesConvertedAlert_Input) at Account_BillingScreen.pcf: line 92, column 62
    function value_28 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Requirement_Input) at Account_BillingScreen.pcf: line 102, column 63
    function value_31 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.CollateralRequirement.Total
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Held_Input) at Account_BillingScreen.pcf: line 108, column 56
    function value_34 () : gw.pl.currency.MonetaryAmount {
      return billingSummary.CollateralHeld.Total
    }
    
    // 'value' attribute on TextInput (id=PrimaryPayerName_Input) at Account_BillingScreen.pcf: line 124, column 53
    function value_41 () : java.lang.String {
      return billingSummary.PrimaryPayer.Name
    }
    
    // 'value' attribute on TextInput (id=PrimaryPayerAddress_Input) at Account_BillingScreen.pcf: line 128, column 56
    function value_44 () : java.lang.String {
      return billingSummary.PrimaryPayer.Address
    }
    
    // 'value' attribute on TextInput (id=PrimaryPayerPhone_Input) at Account_BillingScreen.pcf: line 132, column 54
    function value_47 () : java.lang.String {
      return billingSummary.PrimaryPayer.Phone
    }
    
    // 'value' attribute on ToolbarRangeInput (id=BillingAccounts_Input) at Account_BillingScreen.pcf: line 38, column 38
    function value_5 () : java.lang.String {
      return accountNumber
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingAccounts_Input) at Account_BillingScreen.pcf: line 38, column 38
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingAccounts_Input) at Account_BillingScreen.pcf: line 38, column 38
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingAccounts_Input) at Account_BillingScreen.pcf: line 38, column 38
    function verifyValueRange_9 () : void {
      var __valueRangeArg = accountNumbers.Keys.toList()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=ViewInBC) at Account_BillingScreen.pcf: line 29, column 121
    function visible_1 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.BillingSystemURL.Value.HasContent and perm.System.viewbillingsystem
    }
    
    // 'visible' attribute on Verbatim (id=DelinquentMessage) at Account_BillingScreen.pcf: line 48, column 25
    function visible_11 () : java.lang.Boolean {
      return billingSummary.Delinquent
    }
    
    // 'visible' attribute on TextInput (id=AccountBalancesConvertedAlert_Input) at Account_BillingScreen.pcf: line 92, column 62
    function visible_27 () : java.lang.Boolean {
      return billingSummary.AccountBalancesConverted
    }
    
    // 'visible' attribute on TextInput (id=CollateralConvertedAlert_Input) at Account_BillingScreen.pcf: line 116, column 57
    function visible_37 () : java.lang.Boolean {
      return billingSummary.CollateralConverted
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get accountNumber () : String {
      return getRequireValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setRequireValue("accountNumber", 0, $arg)
    }
    
    property get accountNumbers () : java.util.Map<java.lang.String, java.lang.String> {
      return getVariableValue("accountNumbers", 0) as java.util.Map<java.lang.String, java.lang.String>
    }
    
    property set accountNumbers ($arg :  java.util.Map<java.lang.String, java.lang.String>) {
      setVariableValue("accountNumbers", 0, $arg)
    }
    
    property get billingSummary () : gw.plugin.billing.BCAccountBillingDisplayTotals {
      return getRequireValue("billingSummary", 0) as gw.plugin.billing.BCAccountBillingDisplayTotals
    }
    
    property set billingSummary ($arg :  gw.plugin.billing.BCAccountBillingDisplayTotals) {
      setRequireValue("billingSummary", 0, $arg)
    }
    
    
  }
  
  
}