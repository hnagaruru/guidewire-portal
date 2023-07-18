package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductDefinition.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductDefinitionExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductDefinition.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductDefinitionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (apdProduct :  entity.APDProduct) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=APDProductDefinition) at APDProductDefinition.pcf: line 12, column 72
    function beforeCommit_2 (pickedValue :  java.lang.Object) : void {
      apdProduct.productUpdated(); apdProduct.anyProductLineUnderProductUpdated()
    }
    
    // 'def' attribute on ScreenRef at APDProductDefinition.pcf: line 19, column 49
    function def_onEnter_0 (def :  pcf.APDProductScreen) : void {
      def.onEnter(apdProduct, null)
    }
    
    // 'def' attribute on ScreenRef at APDProductDefinition.pcf: line 19, column 49
    function def_refreshVariables_1 (def :  pcf.APDProductScreen) : void {
      def.refreshVariables(apdProduct, null)
    }
    
    // 'parent' attribute on Page (id=APDProductDefinition) at APDProductDefinition.pcf: line 12, column 72
    static function parent_3 (apdProduct :  entity.APDProduct) : pcf.api.Destination {
      return pcf.APDProductManagementPage.createDestination()
    }
    
    override property get CurrentLocation () : pcf.APDProductDefinition {
      return super.CurrentLocation as pcf.APDProductDefinition
    }
    
    property get apdProduct () : entity.APDProduct {
      return getVariableValue("apdProduct", 0) as entity.APDProduct
    }
    
    property set apdProduct ($arg :  entity.APDProduct) {
      setVariableValue("apdProduct", 0, $arg)
    }
    
    
  }
  
  
}