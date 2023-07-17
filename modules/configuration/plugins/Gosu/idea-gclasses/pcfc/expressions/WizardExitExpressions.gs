package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/WizardExit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WizardExitExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/WizardExit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WizardExitExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // LocationGroup (id=WizardExit) at WizardExit.pcf: line 8, column 26
    static function firstVisitableChildDestinationMethod_3 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      return null
    }
    
    // 'parent' attribute on LocationGroup (id=WizardExit) at WizardExit.pcf: line 8, column 26
    static function parent_0 () : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=WizardExit) at WizardExit.pcf: line 8, column 26
    function tabBar_onEnter_1 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=WizardExit) at WizardExit.pcf: line 8, column 26
    function tabBar_refreshVariables_2 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.WizardExit {
      return super.CurrentLocation as pcf.WizardExit
    }
    
    
  }
  
  
}