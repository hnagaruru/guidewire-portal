package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAccountsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAccountsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopAccounts) at DesktopAccounts.pcf: line 8, column 61
    static function canVisit_5 () : java.lang.Boolean {
      return perm.System.viewmyaccounts
    }
    
    // 'def' attribute on PanelRef at DesktopAccounts.pcf: line 18, column 70
    function def_onEnter_0 (def :  pcf.DesktopAccountsLV_default) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopAccounts.pcf: line 18, column 70
    function def_onEnter_2 (def :  pcf.DesktopAccountsLV_federated) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopAccounts.pcf: line 18, column 70
    function def_refreshVariables_1 (def :  pcf.DesktopAccountsLV_default) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at DesktopAccounts.pcf: line 18, column 70
    function def_refreshVariables_3 (def :  pcf.DesktopAccountsLV_federated) : void {
      def.refreshVariables()
    }
    
    // 'mode' attribute on PanelRef at DesktopAccounts.pcf: line 18, column 70
    function mode_4 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // Page (id=DesktopAccounts) at DesktopAccounts.pcf: line 8, column 61
    static function parent_6 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopAccounts {
      return super.CurrentLocation as pcf.DesktopAccounts
    }
    
    
  }
  
  
}