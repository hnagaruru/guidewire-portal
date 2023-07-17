package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueues.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAssignableQueuesExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueues.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAssignableQueuesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopAssignableQueues) at DesktopAssignableQueues.pcf: line 8, column 69
    static function canVisit_5 () : java.lang.Boolean {
      return perm.System.viewmyqueues
    }
    
    // 'def' attribute on ScreenRef at DesktopAssignableQueues.pcf: line 13, column 68
    function def_onEnter_0 (def :  pcf.DesktopAssignableQueuesScreen_default) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at DesktopAssignableQueues.pcf: line 13, column 68
    function def_onEnter_2 (def :  pcf.DesktopAssignableQueuesScreen_federated) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at DesktopAssignableQueues.pcf: line 13, column 68
    function def_refreshVariables_1 (def :  pcf.DesktopAssignableQueuesScreen_default) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on ScreenRef at DesktopAssignableQueues.pcf: line 13, column 68
    function def_refreshVariables_3 (def :  pcf.DesktopAssignableQueuesScreen_federated) : void {
      def.refreshVariables()
    }
    
    // 'mode' attribute on ScreenRef at DesktopAssignableQueues.pcf: line 13, column 68
    function mode_4 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // Page (id=DesktopAssignableQueues) at DesktopAssignableQueues.pcf: line 8, column 69
    static function parent_6 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopAssignableQueues {
      return super.CurrentLocation as pcf.DesktopAssignableQueues
    }
    
    
  }
  
  
}