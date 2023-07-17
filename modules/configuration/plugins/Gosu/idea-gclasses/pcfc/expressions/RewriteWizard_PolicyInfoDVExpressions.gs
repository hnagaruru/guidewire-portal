package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteWizard_PolicyInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteWizard_PolicyInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AutoSelectUWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 70, column 53
    function action_33 () : void {
      policyPeriod.autoSelectUWCompany()
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteWizard_PolicyInfoDV.pcf: line 30, column 77
    function currency_5 () : typekey.Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 34, column 60
    function def_onEnter_10 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 36, column 74
    function def_onEnter_12 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 41, column 38
    function def_onEnter_14 (def :  pcf.PolicyInfoInputSet) : void {
      def.onEnter(policyPeriod, true, false, false)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 44, column 102
    function def_onEnter_16 (def :  pcf.PolicyInfoProducerOfRecordInputSet) : void {
      def.onEnter(policyPeriod, ProducerStatusUse.TC_SUBMISSIONOKAY)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 73, column 56
    function def_onEnter_35 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 32, column 50
    function def_onEnter_8 (def :  pcf.AccountInfoInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 34, column 60
    function def_refreshVariables_11 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 36, column 74
    function def_refreshVariables_13 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 41, column 38
    function def_refreshVariables_15 (def :  pcf.PolicyInfoInputSet) : void {
      def.refreshVariables(policyPeriod, true, false, false)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 44, column 102
    function def_refreshVariables_17 (def :  pcf.PolicyInfoProducerOfRecordInputSet) : void {
      def.refreshVariables(policyPeriod, ProducerStatusUse.TC_SUBMISSIONOKAY)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 73, column 56
    function def_refreshVariables_36 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at RewriteWizard_PolicyInfoDV.pcf: line 32, column 50
    function def_refreshVariables_9 (def :  pcf.AccountInfoInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ChangePolicyNumber_Input) at RewriteWizard_PolicyInfoDV.pcf: line 52, column 45
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      rewrite.ChangePolicyNumber = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.UWCompany = (__VALUE_TO_SET as entity.UWCompany)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteWizard_PolicyInfoDV.pcf: line 30, column 77
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.EstimatedPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'editable' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function editable_22 () : java.lang.Boolean {
      return perm.System.multicompquote
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard_PolicyInfoDV.pcf: line 19, column 43
    function initialValue_0 () : gw.job.AvailableUWCompanies {
      return new gw.job.AvailableUWCompanies(policyPeriod)
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function optionLabel_26 (VALUE :  entity.UWCompany) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function valueRange_27 () : java.lang.Object {
      return availableUWCompanies.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=ChangePolicyNumber_Input) at RewriteWizard_PolicyInfoDV.pcf: line 52, column 45
    function valueRoot_20 () : java.lang.Object {
      return rewrite
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteWizard_PolicyInfoDV.pcf: line 30, column 77
    function valueRoot_4 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on BooleanRadioInput (id=ChangePolicyNumber_Input) at RewriteWizard_PolicyInfoDV.pcf: line 52, column 45
    function value_18 () : java.lang.Boolean {
      return rewrite.ChangePolicyNumber
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteWizard_PolicyInfoDV.pcf: line 30, column 77
    function value_2 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.EstimatedPremium
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function value_23 () : entity.UWCompany {
      return policyPeriod.UWCompany
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  entity.UWCompany[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWCompany>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 64, column 41
    function verifyValueRange_29 () : void {
      var __valueRangeArg = availableUWCompanies.Value
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteWizard_PolicyInfoDV.pcf: line 30, column 77
    function visible_1 () : java.lang.Boolean {
      return policyPeriod.Policy.Product.ProductType == TC_COMMERCIAL
    }
    
    // 'visible' attribute on ButtonInput (id=AutoSelectUWCompany_Input) at RewriteWizard_PolicyInfoDV.pcf: line 70, column 53
    function visible_32 () : java.lang.Boolean {
      return not perm.System.multicompquote
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
    
    property get rewrite () : Rewrite {
      return getRequireValue("rewrite", 0) as Rewrite
    }
    
    property set rewrite ($arg :  Rewrite) {
      setRequireValue("rewrite", 0, $arg)
    }
    
    
  }
  
  
}