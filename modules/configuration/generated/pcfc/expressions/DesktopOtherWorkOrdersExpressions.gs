package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopOtherWorkOrdersExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopOtherWorkOrdersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopOtherWorkOrders) at DesktopOtherWorkOrders.pcf: line 9, column 75
    static function canVisit_5 () : java.lang.Boolean {
      return perm.System.viewmypolicychanges
    }
    
    // 'def' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 19, column 70
    function def_onEnter_0 (def :  pcf.DesktopOtherWorkOrdersLV_default) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 19, column 70
    function def_onEnter_2 (def :  pcf.DesktopOtherWorkOrdersLV_federated) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 19, column 70
    function def_refreshVariables_1 (def :  pcf.DesktopOtherWorkOrdersLV_default) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 19, column 70
    function def_refreshVariables_3 (def :  pcf.DesktopOtherWorkOrdersLV_federated) : void {
      def.refreshVariables()
    }
    
    // 'mode' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 19, column 70
    function mode_4 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // Page (id=DesktopOtherWorkOrders) at DesktopOtherWorkOrders.pcf: line 9, column 75
    static function parent_6 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopOtherWorkOrders {
      return super.CurrentLocation as pcf.DesktopOtherWorkOrders
    }
    
    
  }
  
  
}