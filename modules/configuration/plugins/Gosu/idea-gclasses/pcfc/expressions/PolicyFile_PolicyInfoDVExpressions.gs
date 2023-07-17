package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PolicyInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PolicyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PolicyInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 12, column 50
    function def_onEnter_0 (def :  pcf.AccountInfoInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 28, column 56
    function def_onEnter_10 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 14, column 60
    function def_onEnter_2 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 16, column 68
    function def_onEnter_4 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.onEnter(policyPeriod, false)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 21, column 38
    function def_onEnter_6 (def :  pcf.PolicyInfoInputSet) : void {
      def.onEnter(policyPeriod, false, false, false)
    }
    
    // 'def' attribute on InputSetRef (id=UWCompanyInputSet) at PolicyFile_PolicyInfoDV.pcf: line 26, column 33
    function def_onEnter_8 (def :  pcf.PolicyInfoProducerInfoInputSet) : void {
      def.onEnter(policyPeriod, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 12, column 50
    function def_refreshVariables_1 (def :  pcf.AccountInfoInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 28, column 56
    function def_refreshVariables_11 (def :  pcf.PreferredCurrencyInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 14, column 60
    function def_refreshVariables_3 (def :  pcf.SecondaryNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 16, column 68
    function def_refreshVariables_5 (def :  pcf.AdditionalNamedInsuredInputSet) : void {
      def.refreshVariables(policyPeriod, false)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_PolicyInfoDV.pcf: line 21, column 38
    function def_refreshVariables_7 (def :  pcf.PolicyInfoInputSet) : void {
      def.refreshVariables(policyPeriod, false, false, false)
    }
    
    // 'def' attribute on InputSetRef (id=UWCompanyInputSet) at PolicyFile_PolicyInfoDV.pcf: line 26, column 33
    function def_refreshVariables_9 (def :  pcf.PolicyInfoProducerInfoInputSet) : void {
      def.refreshVariables(policyPeriod, null)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}