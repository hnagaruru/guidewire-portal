package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/ClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/ClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ClaimsLV.pcf: line 29, column 33
    function filter_0 () : gw.api.filters.IFilter {
      return filterSet.getAllFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ClaimsLV.pcf: line 32, column 74
    function filter_1 () : gw.api.filters.IFilter {
      return filterSet.getNoPolicyInforceFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ClaimsLV.pcf: line 34, column 81
    function filters_2 () : gw.api.filters.IFilter[] {
      return filterSet.getClaimPolicyPeriodFilters().getFilterOptions()
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriod_Cell) at ClaimsLV.pcf: line 41, column 146
    function sortValue_3 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyInForce ? claim.PolicyPeriod.getPolicyPeriodDateDisplay() : DisplayKey.get("Web.Claims.NoPolicyPeriod")
    }
    
    // 'value' attribute on DateCell (id=PolicyStartDate_Cell) at ClaimsLV.pcf: line 46, column 28
    function sortValue_4 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsLV.pcf: line 52, column 35
    function sortValue_5 (claim :  entity.Claim) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsLV.pcf: line 56, column 38
    function sortValue_6 (claim :  entity.Claim) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsLV.pcf: line 60, column 33
    function sortValue_7 (claim :  entity.Claim) : java.lang.Object {
      return claim.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsLV.pcf: line 65, column 40
    function sortValue_8 (claim :  entity.Claim) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'footerSumValue' attribute on RowIterator at ClaimsLV.pcf: line 65, column 40
    function sumValue_9 (claim :  entity.Claim) : java.lang.Object {
      return claim.TotalIncurred == null ? null : claim.TotalIncurred?.convertAmount(preferredCurrency)
    }
    
    // 'value' attribute on RowIterator at ClaimsLV.pcf: line 21, column 34
    function value_30 () : entity.Claim[] {
      return claims
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
    
    property get preferredCurrency () : Currency {
      return getRequireValue("preferredCurrency", 0) as Currency
    }
    
    property set preferredCurrency ($arg :  Currency) {
      setRequireValue("preferredCurrency", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/ClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at ClaimsLV.pcf: line 41, column 146
    function fontColor_10 () : java.lang.Object {
      return claim.PolicyInForce ? null : gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on DateCell (id=PolicyStartDate_Cell) at ClaimsLV.pcf: line 46, column 28
    function valueRoot_16 () : java.lang.Object {
      return claim.PolicyPeriod
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsLV.pcf: line 52, column 35
    function valueRoot_19 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriod_Cell) at ClaimsLV.pcf: line 41, column 146
    function value_11 () : java.lang.String {
      return claim.PolicyInForce ? claim.PolicyPeriod.getPolicyPeriodDateDisplay() : DisplayKey.get("Web.Claims.NoPolicyPeriod")
    }
    
    // 'value' attribute on DateCell (id=PolicyStartDate_Cell) at ClaimsLV.pcf: line 46, column 28
    function value_15 () : java.util.Date {
      return claim.PolicyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsLV.pcf: line 52, column 35
    function value_18 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsLV.pcf: line 56, column 38
    function value_21 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsLV.pcf: line 60, column 33
    function value_24 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsLV.pcf: line 65, column 40
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at ClaimsLV.pcf: line 41, column 146
    function verifyFontColorIsAllowedType_12 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at ClaimsLV.pcf: line 41, column 146
    function verifyFontColorIsAllowedType_12 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=PolicyPeriod_Cell) at ClaimsLV.pcf: line 41, column 146
    function verifyFontColor_13 () : void {
      var __fontColorArg = claim.PolicyInForce ? null : gw.api.web.color.GWColor.THEME_ALERT_ERROR
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_12(__fontColorArg)
    }
    
    property get claim () : entity.Claim {
      return getIteratedValue(1) as entity.Claim
    }
    
    
  }
  
  
}