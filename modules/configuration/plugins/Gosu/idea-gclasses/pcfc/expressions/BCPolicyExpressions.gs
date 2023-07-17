package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/BCPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BCPolicyExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/BCPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BCPolicyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (billingSystemURL :  String, policyNumber :  String, termNumber :  int) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.BCPolicy {
      return super.CurrentLocation as pcf.BCPolicy
    }
    
    property get billingSystemURL () : String {
      return getVariableValue("billingSystemURL", 0) as String
    }
    
    property set billingSystemURL ($arg :  String) {
      setVariableValue("billingSystemURL", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get termNumber () : int {
      return getVariableValue("termNumber", 0) as java.lang.Integer
    }
    
    property set termNumber ($arg :  int) {
      setVariableValue("termNumber", 0, $arg)
    }
    
    
  }
  
  
}