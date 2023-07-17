package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterPolicyExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterPolicyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shardUrl :  String, policyNumber :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterPolicy {
      return super.CurrentLocation as pcf.MulticlusterPolicy
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get shardUrl () : String {
      return getVariableValue("shardUrl", 0) as String
    }
    
    property set shardUrl ($arg :  String) {
      setVariableValue("shardUrl", 0, $arg)
    }
    
    
  }
  
  
}