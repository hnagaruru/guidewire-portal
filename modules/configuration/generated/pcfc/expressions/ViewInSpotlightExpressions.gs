package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/ViewInSpotlight.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ViewInSpotlightExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/ViewInSpotlight.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ViewInSpotlightExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (spotlightSystemBaseURL :  String, policySystemServerURLPrefix :  String, encodedParamUrl :  String, encodedReturnUrl :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.ViewInSpotlight {
      return super.CurrentLocation as pcf.ViewInSpotlight
    }
    
    property get encodedParamUrl () : String {
      return getVariableValue("encodedParamUrl", 0) as String
    }
    
    property set encodedParamUrl ($arg :  String) {
      setVariableValue("encodedParamUrl", 0, $arg)
    }
    
    property get encodedReturnUrl () : String {
      return getVariableValue("encodedReturnUrl", 0) as String
    }
    
    property set encodedReturnUrl ($arg :  String) {
      setVariableValue("encodedReturnUrl", 0, $arg)
    }
    
    property get policySystemServerURLPrefix () : String {
      return getVariableValue("policySystemServerURLPrefix", 0) as String
    }
    
    property set policySystemServerURLPrefix ($arg :  String) {
      setVariableValue("policySystemServerURLPrefix", 0, $arg)
    }
    
    property get spotlightSystemBaseURL () : String {
      return getVariableValue("spotlightSystemBaseURL", 0) as String
    }
    
    property set spotlightSystemBaseURL ($arg :  String) {
      setVariableValue("spotlightSystemBaseURL", 0, $arg)
    }
    
    
  }
  
  
}