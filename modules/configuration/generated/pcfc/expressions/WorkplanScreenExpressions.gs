package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/WorkplanScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkplanScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/WorkplanScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkplanScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at WorkplanScreen.pcf: line 11, column 54
    function def_onEnter_0 (def :  pcf.JobWizardWorkplanPanelSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at WorkplanScreen.pcf: line 11, column 54
    function def_refreshVariables_1 (def :  pcf.JobWizardWorkplanPanelSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}