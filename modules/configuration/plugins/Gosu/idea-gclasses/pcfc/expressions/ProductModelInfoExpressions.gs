package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/ProductModelInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProductModelInfoExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/ProductModelInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProductModelInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=Reload_Input) at ProductModelInfo.pcf: line 28, column 90
    function action_2 () : void {
      gw.api.tools.ProductModelToolsUtil.reloadAvailability(); gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.ServerTools.ProductModelInfo.Reload.Successful"))
    }
    
    // 'available' attribute on ButtonInput (id=Reload_Input) at ProductModelInfo.pcf: line 28, column 90
    function available_1 () : java.lang.Boolean {
      return !Page.isRollingUpgradeInProgress()
    }
    
    // 'canVisit' attribute on Page (id=ProductModelInfo) at ProductModelInfo.pcf: line 10, column 80
    static function canVisit_4 () : java.lang.Boolean {
      return perm.User.ViewProductModelInfo or perm.User.DevAllAccess
    }
    
    // 'initialValue' attribute on Variable at ProductModelInfo.pcf: line 16, column 50
    function initialValue_0 () : gw.api.tools.UpgradeInfoPageHelper {
      return new gw.api.tools.UpgradeInfoPageHelper()
    }
    
    // 'parent' attribute on Page (id=ProductModelInfo) at ProductModelInfo.pcf: line 10, column 80
    static function parent_5 () : pcf.api.Destination {
      return pcf.ServerTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ProductModelInfo {
      return super.CurrentLocation as pcf.ProductModelInfo
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    
  }
  
  
}