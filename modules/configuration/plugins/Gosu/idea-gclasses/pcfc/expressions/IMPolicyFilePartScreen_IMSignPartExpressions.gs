package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/IMPolicyFilePartScreen.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPolicyFilePartScreen_IMSignPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/IMPolicyFilePartScreen.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPolicyFilePartScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPolicyFilePartScreen.IMSignPart.pcf: line 12, column 82
    function def_onEnter_0 (def :  pcf.IMSignsPanelSet) : void {
      def.onEnter(policyPeriod, policyPeriod.IMLine.IMSignPart, null)
    }
    
    // 'def' attribute on PanelRef at IMPolicyFilePartScreen.IMSignPart.pcf: line 12, column 82
    function def_refreshVariables_1 (def :  pcf.IMSignsPanelSet) : void {
      def.refreshVariables(policyPeriod, policyPeriod.IMLine.IMSignPart, null)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}