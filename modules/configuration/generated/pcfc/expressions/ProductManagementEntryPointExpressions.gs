package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/ProductManagement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProductManagementEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/ProductManagement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProductManagementExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=ProductManagement) at ProductManagement.pcf: line 8, column 43
    function location_0 () : pcf.api.Destination {
      return pcf.APDProductManagementPage.createDestination()
    }
    
    
  }
  
  
}