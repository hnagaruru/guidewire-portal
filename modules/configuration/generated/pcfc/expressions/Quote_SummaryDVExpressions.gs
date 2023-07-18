package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/Quote_SummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Quote_SummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/Quote_SummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Quote_SummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at Quote_SummaryDV.pcf: line 42, column 31
    function def_onEnter_18 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.onEnter(policyPeriod, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at Quote_SummaryDV.pcf: line 42, column 31
    function def_refreshVariables_19 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.refreshVariables(policyPeriod, true)
    }
    
    // 'initialValue' attribute on Variable at Quote_SummaryDV.pcf: line 15, column 45
    function initialValue_0 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TransactionCostRPT
    }
    
    // 'label' attribute on TextInput (id=JobNumber_Input) at Quote_SummaryDV.pcf: line 29, column 51
    function label_7 () : java.lang.Object {
      return JobNumberLabel
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at Quote_SummaryDV.pcf: line 39, column 65
    function valueRoot_16 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at Quote_SummaryDV.pcf: line 23, column 63
    function valueRoot_3 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at Quote_SummaryDV.pcf: line 29, column 51
    function valueRoot_9 () : java.lang.Object {
      return policyPeriod.Job
    }
    
    // 'value' attribute on TextInput (id=PolicyPeriod_Input) at Quote_SummaryDV.pcf: line 34, column 194
    function value_13 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(policyPeriod.PeriodStart,"short") + " - " + gw.api.util.StringUtil.formatDate(policyPeriod.PeriodEnd,"short")
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at Quote_SummaryDV.pcf: line 39, column 65
    function value_15 () : java.lang.String {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at Quote_SummaryDV.pcf: line 23, column 63
    function value_2 () : java.lang.String {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextInput (id=UWCompany_Input) at Quote_SummaryDV.pcf: line 50, column 35
    function value_21 () : entity.UWCompany {
      return policyPeriod.UWCompany
    }
    
    // 'value' attribute on DateInput (id=transaction_Input) at Quote_SummaryDV.pcf: line 60, column 63
    function value_26 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextInput (id=TransactionDescription_Input) at Quote_SummaryDV.pcf: line 67, column 65
    function value_31 () : java.lang.String {
      return policyPeriod.Job.Description
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at Quote_SummaryDV.pcf: line 74, column 49
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Taxes_Input) at Quote_SummaryDV.pcf: line 81, column 53
    function value_38 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at Quote_SummaryDV.pcf: line 88, column 46
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalCostRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ChangeInCost_Input) at Quote_SummaryDV.pcf: line 97, column 35
    function value_45 () : gw.pl.currency.MonetaryAmount {
      return transactionSum
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at Quote_SummaryDV.pcf: line 29, column 51
    function value_8 () : java.lang.String {
      return policyPeriod.Job.JobNumber
    }
    
    // 'visible' attribute on TextInput (id=PolicyNumber_Input) at Quote_SummaryDV.pcf: line 23, column 63
    function visible_1 () : java.lang.Boolean {
      return not policyPeriod.Job?.createsNewPolicy()
    }
    
    // 'visible' attribute on TextInput (id=UWCompany_Input) at Quote_SummaryDV.pcf: line 50, column 35
    function visible_20 () : java.lang.Boolean {
      return perm.Role.view
    }
    
    // 'visible' attribute on TextInput (id=TransactionDescription_Input) at Quote_SummaryDV.pcf: line 67, column 65
    function visible_30 () : java.lang.Boolean {
      return policyPeriod.Job.Description.length > 0
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=ChangeInCost_Input) at Quote_SummaryDV.pcf: line 97, column 35
    function visible_44 () : java.lang.Boolean {
      return ShowCostChange
    }
    
    // 'visible' attribute on TextInput (id=HeldSubjectToFinalAudit_Input) at Quote_SummaryDV.pcf: line 105, column 71
    function visible_48 () : java.lang.Boolean {
      return policyPeriod.JobProcess.BillingSubjectToFinalAudit
    }
    
    // 'visible' attribute on TextInput (id=JobNumber_Input) at Quote_SummaryDV.pcf: line 29, column 51
    function visible_6 () : java.lang.Boolean {
      return JobNumberLabel.length > 0
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get transactionSum () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("transactionSum", 0) as gw.pl.currency.MonetaryAmount
    }
    
    property set transactionSum ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("transactionSum", 0, $arg)
    }
    
    
    property get JobNumberLabel() : String
    {
      if ( policyPeriod.Job typeis Submission ) return DisplayKey.get("Web.SubmissionWizard.Quote.SubmissionNo")
      if ( policyPeriod.Job typeis Renewal )    return DisplayKey.get("Web.RenewalWizard.Quote.RenewalNo")
      return null
    }
    
    property get ShowCostChange() : boolean
    {
      return (policyPeriod.Job typeis Issuance)
          or (policyPeriod.Job typeis PolicyChange)
          or (policyPeriod.Job typeis Cancellation)
          or (policyPeriod.Job typeis Reinstatement)
    }
          
        
    
    
  }
  
  
}