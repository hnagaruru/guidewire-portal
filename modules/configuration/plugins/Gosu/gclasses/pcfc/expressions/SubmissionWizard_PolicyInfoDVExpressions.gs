package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionWizard_PolicyInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionWizard_PolicyInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AutoSelectUWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 77, column 53
    function action_34 () : void {
      policyPeriod.autoSelectUWCompany()
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 37, column 77
    function currency_9 () : typekey.Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 40, column 50
    function def_onEnter_12 (def :  pcf.AccountInfoInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 42, column 60
    function def_onEnter_14 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 44, column 74
    function def_onEnter_16 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 52, column 38
    function def_onEnter_18 (def :  pcf.PolicyInfoInputSet) : void {
      def.onEnter(policyPeriod, true, false, true)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 55, column 102
    function def_onEnter_20 (def :  pcf.PolicyInfoProducerOfRecordInputSet) : void {
      def.onEnter(policyPeriod, ProducerStatusUse.TC_SUBMISSIONOKAY)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 81, column 56
    function def_onEnter_36 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 40, column 50
    function def_refreshVariables_13 (def :  pcf.AccountInfoInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 42, column 60
    function def_refreshVariables_15 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 44, column 74
    function def_refreshVariables_17 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 52, column 38
    function def_refreshVariables_19 (def :  pcf.PolicyInfoInputSet) : void {
      def.refreshVariables(policyPeriod, true, false, true)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 55, column 102
    function def_refreshVariables_21 (def :  pcf.PolicyInfoProducerOfRecordInputSet) : void {
      def.refreshVariables(policyPeriod, ProducerStatusUse.TC_SUBMISSIONOKAY)
    }
    
    // 'def' attribute on InputSetRef at SubmissionWizard_PolicyInfoDV.pcf: line 81, column 56
    function def_refreshVariables_37 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'value' attribute on DateInput (id=DateQuoteNeeded_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 27, column 45
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      submission.DateQuoteNeeded = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.UWCompany = (__VALUE_TO_SET as entity.UWCompany)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 37, column 77
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.EstimatedPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'editable' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function editable_22 () : java.lang.Boolean {
      return perm.System.multicompquote
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard_PolicyInfoDV.pcf: line 19, column 43
    function initialValue_0 () : gw.job.AvailableUWCompanies {
      return new gw.job.AvailableUWCompanies(policyPeriod)
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function optionLabel_26 (VALUE :  entity.UWCompany) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function valueRange_27 () : java.lang.Object {
      return availableUWCompanies.Value
    }
    
    // 'value' attribute on DateInput (id=DateQuoteNeeded_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 27, column 45
    function valueRoot_3 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 37, column 77
    function valueRoot_8 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on DateInput (id=DateQuoteNeeded_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 27, column 45
    function value_1 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function value_23 () : entity.UWCompany {
      return policyPeriod.UWCompany
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 37, column 77
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.EstimatedPremium
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  entity.UWCompany[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWCompany>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 67, column 41
    function verifyValueRange_29 () : void {
      var __valueRangeArg = availableUWCompanies.Value
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'visible' attribute on Label (id=InvalidUWCompanyLabel) at SubmissionWizard_PolicyInfoDV.pcf: line 71, column 147
    function visible_32 () : java.lang.Boolean {
      return availableUWCompanies.Value.Count > 0 and not availableUWCompanies.Value.hasMatch( \ u -> u == policyPeriod.UWCompany )
    }
    
    // 'visible' attribute on ButtonInput (id=AutoSelectUWCompany_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 77, column 53
    function visible_33 () : java.lang.Boolean {
      return not perm.System.multicompquote
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at SubmissionWizard_PolicyInfoDV.pcf: line 37, column 77
    function visible_5 () : java.lang.Boolean {
      return policyPeriod.Policy.Product.ProductType == TC_COMMERCIAL
    }
    
    property get availableUWCompanies () : gw.job.AvailableUWCompanies {
      return getVariableValue("availableUWCompanies", 0) as gw.job.AvailableUWCompanies
    }
    
    property set availableUWCompanies ($arg :  gw.job.AvailableUWCompanies) {
      setVariableValue("availableUWCompanies", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get submission () : Submission {
      return getRequireValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setRequireValue("submission", 0, $arg)
    }
    
    
  }
  
  
}