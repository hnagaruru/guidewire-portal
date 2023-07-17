package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/IMPolicyFilePartScreen.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPolicyFilePartScreen_ContractorsEquipPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/IMPolicyFilePartScreen.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPolicyFilePartScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPolicyFilePartScreen.ContractorsEquipPart.pcf: line 12, column 102
    function def_onEnter_0 (def :  pcf.ContractorsEquipmentPartPanelSet) : void {
      def.onEnter(policyPeriod.IMLine.ContractorsEquipPart, false, null)
    }
    
    // 'def' attribute on PanelRef at IMPolicyFilePartScreen.ContractorsEquipPart.pcf: line 12, column 102
    function def_refreshVariables_1 (def :  pcf.ContractorsEquipmentPartPanelSet) : void {
      def.refreshVariables(policyPeriod.IMLine.ContractorsEquipPart, false, null)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}