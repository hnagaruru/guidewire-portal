package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PolicyHoldDetailScreen_DeleteButton) at PolicyHoldDetailScreen.pcf: line 21, column 45
    function action_2 () : void {
      gw.api.admin.PolicyHoldUtil.deletePolicyHold(policyHold); PolicyHolds.go()
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailScreen.pcf: line 24, column 61
    function def_onEnter_3 (def :  pcf.PolicyHoldDetailCV) : void {
      def.onEnter(policyHold, showTimeStamps)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailScreen.pcf: line 24, column 61
    function def_refreshVariables_4 (def :  pcf.PolicyHoldDetailCV) : void {
      def.refreshVariables(policyHold, showTimeStamps)
    }
    
    // EditButtons at PolicyHoldDetailScreen.pcf: line 14, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=PolicyHoldDetailScreen_DeleteButton) at PolicyHoldDetailScreen.pcf: line 21, column 45
    function visible_1 () : java.lang.Boolean {
      return perm.System.polholdelete
    }
    
    property get policyHold () : PolicyHold {
      return getRequireValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setRequireValue("policyHold", 0, $arg)
    }
    
    property get showTimeStamps () : boolean {
      return getRequireValue("showTimeStamps", 0) as java.lang.Boolean
    }
    
    property set showTimeStamps ($arg :  boolean) {
      setRequireValue("showTimeStamps", 0, $arg)
    }
    
    
  }
  
  
}