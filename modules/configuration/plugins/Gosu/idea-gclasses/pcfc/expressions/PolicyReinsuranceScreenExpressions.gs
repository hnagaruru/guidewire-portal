package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyReinsuranceScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyReinsuranceScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Save) at PolicyReinsuranceScreen.pcf: line 29, column 25
    function action_2 () : void {
      gw.web.admin.ReinsuranceUIHelper.saveDraft(policyPeriod, wizard)
    }
    
    // 'def' attribute on PanelRef at PolicyReinsuranceScreen.pcf: line 22, column 57
    function def_onEnter_3 (def :  pcf.PolicyReinsuranceCV) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyReinsuranceScreen.pcf: line 22, column 57
    function def_refreshVariables_4 (def :  pcf.PolicyReinsuranceCV) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceScreen.pcf: line 16, column 56
    function initialValue_0 () : gw.plugin.reinsurance.IReinsurancePlugin {
      return gw.plugin.Plugins.get(gw.plugin.reinsurance.IReinsurancePlugin)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceScreen.pcf: line 20, column 30
    function initialValue_1 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get plugin () : gw.plugin.reinsurance.IReinsurancePlugin {
      return getVariableValue("plugin", 0) as gw.plugin.reinsurance.IReinsurancePlugin
    }
    
    property set plugin ($arg :  gw.plugin.reinsurance.IReinsurancePlugin) {
      setVariableValue("plugin", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}