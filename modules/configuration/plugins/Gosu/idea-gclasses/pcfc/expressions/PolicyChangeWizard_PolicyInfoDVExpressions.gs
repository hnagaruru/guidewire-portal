package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChangeWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyChangeWizard_PolicyInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChangeWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyChangeWizard_PolicyInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 16, column 50
    function def_onEnter_1 (def :  pcf.AccountInfoInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 45, column 56
    function def_onEnter_18 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 18, column 60
    function def_onEnter_3 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 20, column 87
    function def_onEnter_5 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod, policyPeriod.OpenForEdit)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 27, column 38
    function def_onEnter_7 (def :  pcf.PolicyInfoInputSet) : void {
      def.onEnter(policyPeriod, true, false, false)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 30, column 88
    function def_onEnter_9 (def :  pcf.PolicyInfoProducerInfoInputSet) : void {
      def.onEnter(policyPeriod, ProducerStatusUse.TC_OKAY)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 30, column 88
    function def_refreshVariables_10 (def :  pcf.PolicyInfoProducerInfoInputSet) : void {
      def.refreshVariables(policyPeriod, ProducerStatusUse.TC_OKAY)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 45, column 56
    function def_refreshVariables_19 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 16, column 50
    function def_refreshVariables_2 (def :  pcf.AccountInfoInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 18, column 60
    function def_refreshVariables_4 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 20, column 87
    function def_refreshVariables_6 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod, policyPeriod.OpenForEdit)
    }
    
    // 'def' attribute on InputSetRef at PolicyChangeWizard_PolicyInfoDV.pcf: line 27, column 38
    function def_refreshVariables_8 (def :  pcf.PolicyInfoInputSet) : void {
      def.refreshVariables(policyPeriod, true, false, false)
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard_PolicyInfoDV.pcf: line 13, column 43
    function initialValue_0 () : gw.job.AvailableUWCompanies {
      return new gw.job.AvailableUWCompanies(policyPeriod)
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function optionLabel_13 (VALUE :  entity.UWCompany) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function valueRange_14 () : java.lang.Object {
      return availableUWCompanies.Value
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function valueRoot_12 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function value_11 () : entity.UWCompany {
      return policyPeriod.UWCompany
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function verifyValueRangeIsAllowedType_15 ($$arg :  entity.UWCompany[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWCompany>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at PolicyChangeWizard_PolicyInfoDV.pcf: line 41, column 41
    function verifyValueRange_16 () : void {
      var __valueRangeArg = availableUWCompanies.Value
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    property get availableUWCompanies () : gw.job.AvailableUWCompanies {
      return getVariableValue("availableUWCompanies", 0) as gw.job.AvailableUWCompanies
    }
    
    property set availableUWCompanies ($arg :  gw.job.AvailableUWCompanies) {
      setVariableValue("availableUWCompanies", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}