package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/ClaimDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/ClaimDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ClaimDetailsDV.pcf: line 41, column 48
    function valueRoot_18 () : java.lang.Object {
      return claimDetail.Claim
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimDetailsDV.pcf: line 49, column 40
    function valueRoot_24 () : java.lang.Object {
      return claimDetail
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimDetailsDV.pcf: line 24, column 44
    function valueRoot_4 () : java.lang.Object {
      return claimDetail.Claim.PolicyPeriod
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimDetailsDV.pcf: line 29, column 44
    function valueRoot_9 () : java.lang.Object {
      return claimDetail.Claim.PolicyPeriod.Policy.Product
    }
    
    // 'value' attribute on DateInput (id=PolicyPeriodStart_Input) at ClaimDetailsDV.pcf: line 33, column 61
    function value_12 () : java.util.Date {
      return claimDetail.Claim.PolicyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateInput (id=PolicyPeriodEnd_Input) at ClaimDetailsDV.pcf: line 37, column 71
    function value_15 () : java.util.Date {
      return claimDetail.Claim.PolicyPeriod?.getCoverageEndDate()
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ClaimDetailsDV.pcf: line 41, column 48
    function value_17 () : java.lang.String {
      return claimDetail.Claim.ClaimNumber
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimDetailsDV.pcf: line 45, column 45
    function value_20 () : java.util.Date {
      return claimDetail.Claim.LossDate
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimDetailsDV.pcf: line 49, column 40
    function value_23 () : java.lang.String {
      return claimDetail.LossCause
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at ClaimDetailsDV.pcf: line 53, column 43
    function value_26 () : java.lang.String {
      return claimDetail.Claim.Status
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ClaimDetailsDV.pcf: line 57, column 42
    function value_29 () : java.lang.String {
      return claimDetail.Description
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimDetailsDV.pcf: line 24, column 44
    function value_3 () : java.lang.String {
      return claimDetail.Claim.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on BooleanRadioInput (id=Litigation_Input) at ClaimDetailsDV.pcf: line 64, column 95
    function value_33 () : java.lang.Boolean {
      return claimDetail.Litigation
    }
    
    // 'value' attribute on BooleanRadioInput (id=Injury_Input) at ClaimDetailsDV.pcf: line 69, column 95
    function value_38 () : java.lang.Boolean {
      return claimDetail.Injuries
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Reserves_Input) at ClaimDetailsDV.pcf: line 74, column 48
    function value_42 () : gw.pl.currency.MonetaryAmount {
      return claimDetail.RemainingReserves
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PaidToDate_Input) at ClaimDetailsDV.pcf: line 78, column 40
    function value_45 () : gw.pl.currency.MonetaryAmount {
      return claimDetail.TotalPaid
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalIncurred_Input) at ClaimDetailsDV.pcf: line 82, column 50
    function value_48 () : gw.pl.currency.MonetaryAmount {
      return claimDetail.Claim.TotalIncurred
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPaidLoss_Input) at ClaimDetailsDV.pcf: line 86, column 41
    function value_51 () : gw.pl.currency.MonetaryAmount {
      return claimDetail.Recoveries
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimDetailsDV.pcf: line 29, column 44
    function value_8 () : java.lang.String {
      return claimDetail.Claim.PolicyPeriod.Policy.Product.DisplayName
    }
    
    // 'visible' attribute on TextInput (id=ClaimSecurityType_Input) at ClaimDetailsDV.pcf: line 19, column 54
    function visible_0 () : java.lang.Boolean {
      return claimDetail.Claim.RestrictedClaim
    }
    
    // 'visible' attribute on TextInput (id=PolicyNumber_Input) at ClaimDetailsDV.pcf: line 24, column 44
    function visible_2 () : java.lang.Boolean {
      return showPolicyNumberAndType
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Litigation_Input) at ClaimDetailsDV.pcf: line 64, column 95
    function visible_32 () : java.lang.Boolean {
      return (not claimDetail.Claim.RestrictedClaim) or perm.System.viewrestrictedclaim
    }
    
    property get claimDetail () : ClaimDetail {
      return getRequireValue("claimDetail", 0) as ClaimDetail
    }
    
    property set claimDetail ($arg :  ClaimDetail) {
      setRequireValue("claimDetail", 0, $arg)
    }
    
    property get showPolicyNumberAndType () : boolean {
      return getRequireValue("showPolicyNumberAndType", 0) as java.lang.Boolean
    }
    
    property set showPolicyNumberAndType ($arg :  boolean) {
      setRequireValue("showPolicyNumberAndType", 0, $arg)
    }
    
    
  }
  
  
}