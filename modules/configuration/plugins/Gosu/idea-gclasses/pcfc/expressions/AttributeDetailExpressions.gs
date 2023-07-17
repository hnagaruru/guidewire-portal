package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AttributeDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttributeDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AttributeDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttributeDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (attribute :  Attribute) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=AttributeDetail) at AttributeDetail.pcf: line 12, column 67
    function afterCancel_2 () : void {
      Attributes.go()
    }
    
    // 'afterCancel' attribute on Page (id=AttributeDetail) at AttributeDetail.pcf: line 12, column 67
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=AttributeDetail) at AttributeDetail.pcf: line 12, column 67
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      Attributes.go()
    }
    
    // 'def' attribute on ScreenRef at AttributeDetail.pcf: line 19, column 47
    function def_onEnter_0 (def :  pcf.AttributeDetailScreen) : void {
      def.onEnter(attribute)
    }
    
    // 'def' attribute on ScreenRef at AttributeDetail.pcf: line 19, column 47
    function def_refreshVariables_1 (def :  pcf.AttributeDetailScreen) : void {
      def.refreshVariables(attribute)
    }
    
    // 'parent' attribute on Page (id=AttributeDetail) at AttributeDetail.pcf: line 12, column 67
    static function parent_5 (attribute :  Attribute) : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AttributeDetail {
      return super.CurrentLocation as pcf.AttributeDetail
    }
    
    property get attribute () : Attribute {
      return getVariableValue("attribute", 0) as Attribute
    }
    
    property set attribute ($arg :  Attribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    
  }
  
  
}