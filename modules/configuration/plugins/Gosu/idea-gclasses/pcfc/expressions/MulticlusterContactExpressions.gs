package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterContactExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterContactExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shardUrl :  String, contactPublicId :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterContact {
      return super.CurrentLocation as pcf.MulticlusterContact
    }
    
    property get contactPublicId () : String {
      return getVariableValue("contactPublicId", 0) as String
    }
    
    property set contactPublicId ($arg :  String) {
      setVariableValue("contactPublicId", 0, $arg)
    }
    
    property get shardUrl () : String {
      return getVariableValue("shardUrl", 0) as String
    }
    
    property set shardUrl ($arg :  String) {
      setVariableValue("shardUrl", 0, $arg)
    }
    
    
  }
  
  
}