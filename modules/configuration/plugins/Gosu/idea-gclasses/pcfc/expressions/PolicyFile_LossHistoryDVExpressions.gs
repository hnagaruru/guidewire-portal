package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_LossHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_LossHistoryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_LossHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_LossHistoryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function def_onEnter_0 (def :  pcf.LossHistoryInputSet_att) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function def_onEnter_2 (def :  pcf.LossHistoryInputSet_man) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function def_onEnter_4 (def :  pcf.LossHistoryInputSet_nol) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function def_refreshVariables_1 (def :  pcf.LossHistoryInputSet_att) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function def_refreshVariables_3 (def :  pcf.LossHistoryInputSet_man) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function def_refreshVariables_5 (def :  pcf.LossHistoryInputSet_nol) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'mode' attribute on InputSetRef at PolicyFile_LossHistoryDV.pcf: line 18, column 40
    function mode_6 () : java.lang.Object {
      return policy.LossHistoryType
    }
    
    property get policy () : Policy {
      return getRequireValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setRequireValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}