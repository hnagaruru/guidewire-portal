package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterShard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterShardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterShard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterShardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shardUrl :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterShard {
      return super.CurrentLocation as pcf.MulticlusterShard
    }
    
    property get shardUrl () : String {
      return getVariableValue("shardUrl", 0) as String
    }
    
    property set shardUrl ($arg :  String) {
      setVariableValue("shardUrl", 0, $arg)
    }
    
    
  }
  
  
}