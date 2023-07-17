package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactClaimsLV.pcf: line 34, column 65
    function sortValue_0 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=ProductCode_Cell) at ContactClaimsLV.pcf: line 39, column 66
    function sortValue_1 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.Policy.Product.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ContactClaimsLV.pcf: line 43, column 58
    function sortValue_2 (claim :  entity.Claim) : java.lang.Object {
      return claim.PolicyPeriod.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ContactClaimsLV.pcf: line 49, column 35
    function sortValue_3 (claim :  entity.Claim) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ContactClaimsLV.pcf: line 53, column 38
    function sortValue_4 (claim :  entity.Claim) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ContactClaimsLV.pcf: line 57, column 33
    function sortValue_5 (claim :  entity.Claim) : java.lang.Object {
      return claim.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ContactClaimsLV.pcf: line 62, column 40
    function sortValue_6 (claim :  entity.Claim) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'footerSumValue' attribute on RowIterator at ContactClaimsLV.pcf: line 62, column 40
    function sumValue_7 (claim :  entity.Claim) : java.lang.Object {
      return claim.TotalIncurred == null ? null : claim.TotalIncurred?.convertAmount(preferredCurrency)
    }
    
    // 'value' attribute on RowIterator at ContactClaimsLV.pcf: line 19, column 34
    function value_36 () : entity.Claim[] {
      return claims
    }
    
    property get claims () : Claim[] {
      return getRequireValue("claims", 0) as Claim[]
    }
    
    property set claims ($arg :  Claim[]) {
      setRequireValue("claims", 0, $arg)
    }
    
    property get preferredCurrency () : Currency {
      return getRequireValue("preferredCurrency", 0) as Currency
    }
    
    property set preferredCurrency ($arg :  Currency) {
      setRequireValue("preferredCurrency", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=PolicyNumber_Cell) at ContactClaimsLV.pcf: line 34, column 65
    function actionAvailable_14 () : java.lang.Boolean {
      return claim.PolicyPeriod != null
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ContactClaimsLV.pcf: line 34, column 65
    function action_12 () : void {
      PolicyFileForward.go(claim.PolicyPeriod.PolicyNumber)
    }
    
    // 'action' attribute on Link (id=policyAccount) at ContactClaimsLV.pcf: line 27, column 72
    function action_8 () : void {
      pcf.AccountFileDoRetrievalForward.go(claim.PolicyPeriod.Policy.Account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ContactClaimsLV.pcf: line 34, column 65
    function action_dest_13 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(claim.PolicyPeriod.PolicyNumber)
    }
    
    // 'action' attribute on Link (id=policyAccount) at ContactClaimsLV.pcf: line 27, column 72
    function action_dest_9 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(claim.PolicyPeriod.Policy.Account.AccountNumber)
    }
    
    // 'label' attribute on Link (id=policyAccount) at ContactClaimsLV.pcf: line 27, column 72
    function label_10 () : java.lang.Object {
      return claim.PolicyPeriod.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'tooltip' attribute on Link (id=policyAccount) at ContactClaimsLV.pcf: line 27, column 72
    function tooltip_11 () : java.lang.String {
      return claim.PolicyPeriod.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactClaimsLV.pcf: line 34, column 65
    function valueRoot_16 () : java.lang.Object {
      return claim.PolicyPeriod
    }
    
    // 'value' attribute on TextCell (id=ProductCode_Cell) at ContactClaimsLV.pcf: line 39, column 66
    function valueRoot_19 () : java.lang.Object {
      return claim.PolicyPeriod.Policy.Product
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ContactClaimsLV.pcf: line 49, column 35
    function valueRoot_25 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactClaimsLV.pcf: line 34, column 65
    function value_15 () : java.lang.String {
      return claim.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=ProductCode_Cell) at ContactClaimsLV.pcf: line 39, column 66
    function value_18 () : java.lang.String {
      return claim.PolicyPeriod.Policy.Product.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ContactClaimsLV.pcf: line 43, column 58
    function value_21 () : java.lang.String {
      return claim.PolicyPeriod.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ContactClaimsLV.pcf: line 49, column 35
    function value_24 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ContactClaimsLV.pcf: line 53, column 38
    function value_27 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ContactClaimsLV.pcf: line 57, column 33
    function value_30 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ContactClaimsLV.pcf: line 62, column 40
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    property get claim () : entity.Claim {
      return getIteratedValue(1) as entity.Claim
    }
    
    
  }
  
  
}