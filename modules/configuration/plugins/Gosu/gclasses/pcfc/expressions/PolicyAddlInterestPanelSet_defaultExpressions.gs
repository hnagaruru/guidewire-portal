package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAddlInterestPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAddlInterestPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get policyAddlInterest () : PolicyAddlInterest {
      return getRequireValue("policyAddlInterest", 0) as PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  PolicyAddlInterest) {
      setRequireValue("policyAddlInterest", 0, $arg)
    }
    
    
  }
  
  
}