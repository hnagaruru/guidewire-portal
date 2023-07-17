package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/CreateClaim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateClaimExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/CreateClaim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateClaimExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claimSystemUrl :  String, policyNumber :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.CreateClaim {
      return super.CurrentLocation as pcf.CreateClaim
    }
    
    property get claimSystemUrl () : String {
      return getVariableValue("claimSystemUrl", 0) as String
    }
    
    property set claimSystemUrl ($arg :  String) {
      setVariableValue("claimSystemUrl", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    
  }
  
  
}