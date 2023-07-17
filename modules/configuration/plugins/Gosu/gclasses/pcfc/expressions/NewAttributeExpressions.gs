package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewAttribute.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAttributeExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewAttribute.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAttributeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewAttribute) at NewAttribute.pcf: line 13, column 64
    function afterCancel_3 () : void {
      Attributes.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewAttribute) at NewAttribute.pcf: line 13, column 64
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewAttribute) at NewAttribute.pcf: line 13, column 64
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      Attributes.go()
    }
    
    // 'def' attribute on ScreenRef at NewAttribute.pcf: line 21, column 47
    function def_onEnter_1 (def :  pcf.AttributeDetailScreen) : void {
      def.onEnter(attribute)
    }
    
    // 'def' attribute on ScreenRef at NewAttribute.pcf: line 21, column 47
    function def_refreshVariables_2 (def :  pcf.AttributeDetailScreen) : void {
      def.refreshVariables(attribute)
    }
    
    // 'initialValue' attribute on Variable at NewAttribute.pcf: line 19, column 25
    function initialValue_0 () : Attribute {
      return new Attribute()
    }
    
    // 'parent' attribute on Page (id=NewAttribute) at NewAttribute.pcf: line 13, column 64
    static function parent_6 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewAttribute {
      return super.CurrentLocation as pcf.NewAttribute
    }
    
    property get attribute () : Attribute {
      return getVariableValue("attribute", 0) as Attribute
    }
    
    property set attribute ($arg :  Attribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    
  }
  
  
}