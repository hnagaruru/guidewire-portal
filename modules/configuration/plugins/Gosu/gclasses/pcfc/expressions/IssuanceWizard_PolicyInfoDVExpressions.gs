package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IssuanceWizard_PolicyInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IssuanceWizard_PolicyInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AutoSelectUWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 60, column 53
    function action_23 () : void {
      policyPeriod.autoSelectUWCompany()
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 23, column 50
    function def_onEnter_1 (def :  pcf.AccountInfoInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 63, column 56
    function def_onEnter_25 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 25, column 60
    function def_onEnter_3 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 27, column 74
    function def_onEnter_5 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 35, column 38
    function def_onEnter_7 (def :  pcf.PolicyInfoInputSet) : void {
      def.onEnter(policyPeriod, true, false, false)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 38, column 102
    function def_onEnter_9 (def :  pcf.PolicyInfoProducerOfRecordInputSet) : void {
      def.onEnter(policyPeriod, ProducerStatusUse.TC_SUBMISSIONOKAY)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 38, column 102
    function def_refreshVariables_10 (def :  pcf.PolicyInfoProducerOfRecordInputSet) : void {
      def.refreshVariables(policyPeriod, ProducerStatusUse.TC_SUBMISSIONOKAY)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 23, column 50
    function def_refreshVariables_2 (def :  pcf.AccountInfoInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 63, column 56
    function def_refreshVariables_26 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 25, column 60
    function def_refreshVariables_4 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 27, column 74
    function def_refreshVariables_6 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at IssuanceWizard_PolicyInfoDV.pcf: line 35, column 38
    function def_refreshVariables_8 (def :  pcf.PolicyInfoInputSet) : void {
      def.refreshVariables(policyPeriod, true, false, false)
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.UWCompany = (__VALUE_TO_SET as entity.UWCompany)
    }
    
    // 'editable' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function editable_11 () : java.lang.Boolean {
      return perm.System.multicompquote
    }
    
    // 'initialValue' attribute on Variable at IssuanceWizard_PolicyInfoDV.pcf: line 19, column 43
    function initialValue_0 () : gw.job.AvailableUWCompanies {
      return new gw.job.AvailableUWCompanies(policyPeriod)
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function optionLabel_15 (VALUE :  entity.UWCompany) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function valueRange_16 () : java.lang.Object {
      return availableUWCompanies.Value
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function valueRoot_14 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function value_12 () : entity.UWCompany {
      return policyPeriod.UWCompany
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.UWCompany[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWCompany>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 50, column 41
    function verifyValueRange_18 () : void {
      var __valueRangeArg = availableUWCompanies.Value
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'visible' attribute on Label (id=InvalidUWCompanyLabel) at IssuanceWizard_PolicyInfoDV.pcf: line 54, column 147
    function visible_21 () : java.lang.Boolean {
      return availableUWCompanies.Value.Count > 0 and not availableUWCompanies.Value.hasMatch( \ u -> u == policyPeriod.UWCompany )
    }
    
    // 'visible' attribute on ButtonInput (id=AutoSelectUWCompany_Input) at IssuanceWizard_PolicyInfoDV.pcf: line 60, column 53
    function visible_22 () : java.lang.Boolean {
      return not perm.System.multicompquote
    }
    
    property get availableUWCompanies () : gw.job.AvailableUWCompanies {
      return getVariableValue("availableUWCompanies", 0) as gw.job.AvailableUWCompanies
    }
    
    property set availableUWCompanies ($arg :  gw.job.AvailableUWCompanies) {
      setVariableValue("availableUWCompanies", 0, $arg)
    }
    
    property get issuance () : Issuance {
      return getRequireValue("issuance", 0) as Issuance
    }
    
    property set issuance ($arg :  Issuance) {
      setRequireValue("issuance", 0, $arg)
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
    
    
  }
  
  
}