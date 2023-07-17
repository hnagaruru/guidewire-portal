package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/IMPolicyFilePartScreen.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPolicyFilePartScreen_IMAccountsRecPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/IMPolicyFilePartScreen.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPolicyFilePartScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPolicyFilePartScreen.IMAccountsRecPart.pcf: line 12, column 79
    function def_onEnter_0 (def :  pcf.IMARPanelSet) : void {
      def.onEnter(policyPeriod.IMLine.IMAccountsRecPart, false, null)
    }
    
    // 'def' attribute on PanelRef at IMPolicyFilePartScreen.IMAccountsRecPart.pcf: line 12, column 79
    function def_refreshVariables_1 (def :  pcf.IMARPanelSet) : void {
      def.refreshVariables(policyPeriod.IMLine.IMAccountsRecPart, false, null)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}