package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountClaimsLV.pcf: line 33, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return filterSet.getAllFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountClaimsLV.pcf: line 36, column 74
    function filter_2 () : gw.api.filters.IFilter {
      return filterSet.getNoPolicyInforceFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountClaimsLV.pcf: line 46, column 33
    function filter_4 () : gw.api.filters.IFilter {
      return productCodeFilterSet.getAllFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at AccountClaimsLV.pcf: line 38, column 81
    function filters_3 () : gw.api.filters.IFilter[] {
      return filterSet.getClaimPolicyPeriodFilters().getFilterOptions()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at AccountClaimsLV.pcf: line 48, column 73
    function filters_5 () : gw.api.filters.IFilter[] {
      return productCodeFilterSet.getClaimPolicyPeriodFilters()
    }
    
    // 'initialValue' attribute on Variable at AccountClaimsLV.pcf: line 19, column 47
    function initialValue_0 () : gw.account.ProductCodeFilterSet {
      return new gw.account.ProductCodeFilterSet(account)
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at AccountClaimsLV.pcf: line 75, column 35
    function sortValue_10 (claim :  entity.Claim) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AccountClaimsLV.pcf: line 79, column 38
    function sortValue_11 (claim :  entity.Claim) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountClaimsLV.pcf: line 83, column 33
    function sortValue_12 (claim :  entity.Claim) : java.lang.Object {
      return claim.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at AccountClaimsLV.pcf: line 88, column 40
    function sortValue_13 (claim :  entity.Claim) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriod_Cell) at AccountClaimsLV.pcf: line 55, column 146
    function sortValue_6 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyInForce ? claim.PolicyPeriod.getPolicyPeriodDateDisplay() : DisplayKey.get("Web.Claims.NoPolicyPeriod")
    }
    
    // 'value' attribute on DateCell (id=PolicyStartDate_Cell) at AccountClaimsLV.pcf: line 60, column 28
    function sortValue_7 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountClaimsLV.pcf: line 64, column 65
    function sortValue_8 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=ProductCode_Cell) at AccountClaimsLV.pcf: line 69, column 66
    function sortValue_9 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.Policy.Product.DisplayName
    }
    
    // 'footerSumValue' attribute on RowIterator at AccountClaimsLV.pcf: line 88, column 40
    function sumValue_14 (claim :  entity.Claim) : java.lang.Object {
      return claim.TotalIncurred == null ? null : claim.TotalIncurred?.convertAmount(account.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator at AccountClaimsLV.pcf: line 25, column 34
    function value_44 () : entity.Claim[] {
      return claims
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get claims () : Claim[] {
      return getRequireValue("claims", 0) as Claim[]
    }
    
    property set claims ($arg :  Claim[]) {
      setRequireValue("claims", 0, $arg)
    }
    
    property get filterSet () : gw.losshistory.ClaimPolicyPeriodFilterSet {
      return getRequireValue("filterSet", 0) as gw.losshistory.ClaimPolicyPeriodFilterSet
    }
    
    property set filterSet ($arg :  gw.losshistory.ClaimPolicyPeriodFilterSet) {
      setRequireValue("filterSet", 0, $arg)
    }
    
    property get productCodeFilterSet () : gw.account.ProductCodeFilterSet {
      return getVariableValue("productCodeFilterSet", 0) as gw.account.ProductCodeFilterSet
    }
    
    property set productCodeFilterSet ($arg :  gw.account.ProductCodeFilterSet) {
      setVariableValue("productCodeFilterSet", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at AccountClaimsLV.pcf: line 55, column 146
    function fontColor_15 () : java.lang.Object {
      return claim.PolicyInForce ? null : gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on DateCell (id=PolicyStartDate_Cell) at AccountClaimsLV.pcf: line 60, column 28
    function valueRoot_21 () : java.lang.Object {
      return claim.PolicyPeriod
    }
    
    // 'value' attribute on TextCell (id=ProductCode_Cell) at AccountClaimsLV.pcf: line 69, column 66
    function valueRoot_27 () : java.lang.Object {
      return claim.PolicyPeriod.Policy.Product
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at AccountClaimsLV.pcf: line 75, column 35
    function valueRoot_30 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriod_Cell) at AccountClaimsLV.pcf: line 55, column 146
    function value_16 () : java.lang.String {
      return claim.PolicyInForce ? claim.PolicyPeriod.getPolicyPeriodDateDisplay() : DisplayKey.get("Web.Claims.NoPolicyPeriod")
    }
    
    // 'value' attribute on DateCell (id=PolicyStartDate_Cell) at AccountClaimsLV.pcf: line 60, column 28
    function value_20 () : java.util.Date {
      return claim.PolicyPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountClaimsLV.pcf: line 64, column 65
    function value_23 () : java.lang.String {
      return claim.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=ProductCode_Cell) at AccountClaimsLV.pcf: line 69, column 66
    function value_26 () : java.lang.String {
      return claim.PolicyPeriod.Policy.Product.DisplayName
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at AccountClaimsLV.pcf: line 75, column 35
    function value_29 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AccountClaimsLV.pcf: line 79, column 38
    function value_32 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountClaimsLV.pcf: line 83, column 33
    function value_35 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at AccountClaimsLV.pcf: line 88, column 40
    function value_38 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at AccountClaimsLV.pcf: line 55, column 146
    function verifyFontColorIsAllowedType_17 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at AccountClaimsLV.pcf: line 55, column 146
    function verifyFontColorIsAllowedType_17 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at AccountClaimsLV.pcf: line 55, column 146
    function verifyFontColor_18 () : void {
      var __fontColorArg = claim.PolicyInForce ? null : gw.api.web.color.GWColor.THEME_ALERT_ERROR
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_17(__fontColorArg)
    }
    
    // 'visible' attribute on Link (id=Litigation) at AccountClaimsLV.pcf: line 96, column 50
    function visible_41 () : java.lang.Boolean {
      return claim.LitigationIndicator
    }
    
    // 'visible' attribute on Link (id=Fraud) at AccountClaimsLV.pcf: line 102, column 45
    function visible_42 () : java.lang.Boolean {
      return claim.FraudIndicator
    }
    
    // 'visible' attribute on Link (id=LargeLoss) at AccountClaimsLV.pcf: line 108, column 49
    function visible_43 () : java.lang.Boolean {
      return claim.LargeLossIndicator
    }
    
    property get claim () : entity.Claim {
      return getIteratedValue(1) as entity.Claim
    }
    
    
  }
  
  
}