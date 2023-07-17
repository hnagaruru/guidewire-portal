package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/ViewClaim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ViewClaimExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/ViewClaim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ViewClaimExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claimSystemURL :  String, claimNumber :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.ViewClaim {
      return super.CurrentLocation as pcf.ViewClaim
    }
    
    property get claimNumber () : String {
      return getVariableValue("claimNumber", 0) as String
    }
    
    property set claimNumber ($arg :  String) {
      setVariableValue("claimNumber", 0, $arg)
    }
    
    property get claimSystemURL () : String {
      return getVariableValue("claimSystemURL", 0) as String
    }
    
    property set claimSystemURL ($arg :  String) {
      setVariableValue("claimSystemURL", 0, $arg)
    }
    
    
  }
  
  
}