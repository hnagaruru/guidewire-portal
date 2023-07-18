package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on EntryPointParameter at Policy.pcf: line 12, column 28
    function conversionExpression_0 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.EntityParamUtil.convertStringParam(VALUE, entity.PolicyPeriod) as entity.PolicyPeriod
    }
    
    // 'location' attribute on EntryPoint (id=Policy) at Policy.pcf: line 8, column 61
    function location_1 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(PolicyPeriod.PolicyNumber)
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getVariableValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  
}