package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterJob.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterJobExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterJob.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterJobExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shardUrl :  String, jobNumber :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterJob {
      return super.CurrentLocation as pcf.MulticlusterJob
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get shardUrl () : String {
      return getVariableValue("shardUrl", 0) as String
    }
    
    property set shardUrl ($arg :  String) {
      setVariableValue("shardUrl", 0, $arg)
    }
    
    
  }
  
  
}