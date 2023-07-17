package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/billing/BillingPoliciesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingPoliciesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/billing/BillingPoliciesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingPoliciesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BillingPoliciesLV.pcf: line 17, column 53
    function initialValue_0 () : gw.plugin.billing.BillingPeriodInfo[] {
      return account.retrievePolicies(areOwnedPolicies)
    }
    
    // 'sortBy' attribute on IteratorSort at BillingPoliciesLV.pcf: line 30, column 24
    function sortBy_1 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.EffectiveDate
    }
    
    // 'sortBy' attribute on IteratorSort at BillingPoliciesLV.pcf: line 33, column 24
    function sortBy_2 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.Product
    }
    
    // 'value' attribute on TextCell (id=OwningAccount_Cell) at BillingPoliciesLV.pcf: line 69, column 43
    function sortValue_11 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.OwningAccount
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at BillingPoliciesLV.pcf: line 74, column 24
    function sortValue_13 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.Delinquent ? DisplayKey.get("Web.Billing.Status.Delinquent") : DisplayKey.get("Web.Billing.Status.InGoodStanding")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BilledAmount_Cell) at BillingPoliciesLV.pcf: line 79, column 46
    function sortValue_14 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.TotalBilled
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at BillingPoliciesLV.pcf: line 84, column 42
    function sortValue_15 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.PastDue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unbilled_Cell) at BillingPoliciesLV.pcf: line 89, column 43
    function sortValue_16 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.Unbilled
    }
    
    // 'value' attribute on TextCell (id=InvoiceStream_Cell) at BillingPoliciesLV.pcf: line 94, column 134
    function sortValue_17 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.InvoiceStream
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at BillingPoliciesLV.pcf: line 40, column 47
    function sortValue_3 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at BillingPoliciesLV.pcf: line 45, column 24
    function sortValue_4 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.Product
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BillingPoliciesLV.pcf: line 49, column 48
    function sortValue_5 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at BillingPoliciesLV.pcf: line 53, column 49
    function sortValue_6 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Billed_Cell) at BillingPoliciesLV.pcf: line 59, column 39
    function sortValue_7 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.BillingMethod
    }
    
    // 'value' attribute on TextCell (id=AltBillingAccount_Cell) at BillingPoliciesLV.pcf: line 64, column 39
    function sortValue_9 (billingPeriod :  gw.plugin.billing.BillingPeriodInfo) : java.lang.Object {
      return billingPeriod.AltBillingAccount
    }
    
    // 'value' attribute on RowIterator at BillingPoliciesLV.pcf: line 23, column 57
    function value_62 () : gw.plugin.billing.BillingPeriodInfo[] {
      return policyPeriods
    }
    
    // 'visible' attribute on TextCell (id=OwningAccount_Cell) at BillingPoliciesLV.pcf: line 69, column 43
    function visible_12 () : java.lang.Boolean {
      return not areOwnedPolicies
    }
    
    // 'visible' attribute on TypeKeyCell (id=Billed_Cell) at BillingPoliciesLV.pcf: line 59, column 39
    function visible_8 () : java.lang.Boolean {
      return areOwnedPolicies
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get areOwnedPolicies () : boolean {
      return getRequireValue("areOwnedPolicies", 0) as java.lang.Boolean
    }
    
    property set areOwnedPolicies ($arg :  boolean) {
      setRequireValue("areOwnedPolicies", 0, $arg)
    }
    
    property get policyPeriods () : gw.plugin.billing.BillingPeriodInfo[] {
      return getVariableValue("policyPeriods", 0) as gw.plugin.billing.BillingPeriodInfo[]
    }
    
    property set policyPeriods ($arg :  gw.plugin.billing.BillingPeriodInfo[]) {
      setVariableValue("policyPeriods", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/billing/BillingPoliciesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BillingPoliciesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at BillingPoliciesLV.pcf: line 40, column 47
    function action_19 () : void {
      PolicyFileForward.go(policyPeriod, policyPeriod.PeriodStart, "PolicyBilling")
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at BillingPoliciesLV.pcf: line 40, column 47
    function action_dest_20 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod, policyPeriod.PeriodStart, "PolicyBilling")
    }
    
    // 'initialValue' attribute on Variable at BillingPoliciesLV.pcf: line 27, column 37
    function initialValue_18 () : entity.PolicyPeriod {
      return billingPeriod.findPolicyPeriod()?.LatestPeriod
    }
    
    // RowIterator at BillingPoliciesLV.pcf: line 23, column 57
    function initializeVariables_61 () : void {
        policyPeriod = billingPeriod.findPolicyPeriod()?.LatestPeriod;

    }
    
    // 'useArchivedStyle' attribute on Row at BillingPoliciesLV.pcf: line 35, column 66
    function useArchivedStyle_60 () : java.lang.Boolean {
      return policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at BillingPoliciesLV.pcf: line 40, column 47
    function valueRoot_22 () : java.lang.Object {
      return billingPeriod
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at BillingPoliciesLV.pcf: line 40, column 47
    function value_21 () : java.lang.String {
      return billingPeriod.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at BillingPoliciesLV.pcf: line 45, column 24
    function value_24 () : java.lang.String {
      return billingPeriod.Product
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BillingPoliciesLV.pcf: line 49, column 48
    function value_27 () : java.util.Date {
      return billingPeriod.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at BillingPoliciesLV.pcf: line 53, column 49
    function value_30 () : java.util.Date {
      return billingPeriod.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Billed_Cell) at BillingPoliciesLV.pcf: line 59, column 39
    function value_33 () : typekey.BillingMethod {
      return billingPeriod.BillingMethod
    }
    
    // 'value' attribute on TextCell (id=AltBillingAccount_Cell) at BillingPoliciesLV.pcf: line 64, column 39
    function value_37 () : java.lang.String {
      return billingPeriod.AltBillingAccount
    }
    
    // 'value' attribute on TextCell (id=OwningAccount_Cell) at BillingPoliciesLV.pcf: line 69, column 43
    function value_41 () : java.lang.String {
      return billingPeriod.OwningAccount
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at BillingPoliciesLV.pcf: line 74, column 24
    function value_45 () : java.lang.String {
      return billingPeriod.Delinquent ? DisplayKey.get("Web.Billing.Status.Delinquent") : DisplayKey.get("Web.Billing.Status.InGoodStanding")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BilledAmount_Cell) at BillingPoliciesLV.pcf: line 79, column 46
    function value_47 () : gw.pl.currency.MonetaryAmount {
      return billingPeriod.TotalBilled
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at BillingPoliciesLV.pcf: line 84, column 42
    function value_50 () : gw.pl.currency.MonetaryAmount {
      return billingPeriod.PastDue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unbilled_Cell) at BillingPoliciesLV.pcf: line 89, column 43
    function value_53 () : gw.pl.currency.MonetaryAmount {
      return billingPeriod.Unbilled
    }
    
    // 'value' attribute on TextCell (id=InvoiceStream_Cell) at BillingPoliciesLV.pcf: line 94, column 134
    function value_57 () : java.lang.String {
      return billingPeriod.InvoiceStream
    }
    
    // 'visible' attribute on TypeKeyCell (id=Billed_Cell) at BillingPoliciesLV.pcf: line 59, column 39
    function visible_35 () : java.lang.Boolean {
      return areOwnedPolicies
    }
    
    // 'visible' attribute on TextCell (id=OwningAccount_Cell) at BillingPoliciesLV.pcf: line 69, column 43
    function visible_43 () : java.lang.Boolean {
      return not areOwnedPolicies
    }
    
    // 'valueVisible' attribute on TextCell (id=InvoiceStream_Cell) at BillingPoliciesLV.pcf: line 94, column 134
    function visible_56 () : java.lang.Boolean {
      return not areOwnedPolicies or billingPeriod.AltBillingAccount == null // only for periods billed to this account
    }
    
    property get billingPeriod () : gw.plugin.billing.BillingPeriodInfo {
      return getIteratedValue(1) as gw.plugin.billing.BillingPeriodInfo
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 1) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 1, $arg)
    }
    
    
  }
  
  
}