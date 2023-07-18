package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyAccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAccountForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyAccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAccountForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Forward (id=PolicyAccountForward) at PolicyAccountForward.pcf: line 8, column 30
    static function canVisit_0 (account :  Account) : java.lang.Boolean {
      return perm.System.viewpolicyfile
    }
    
    // 'parent' attribute on Forward (id=PolicyAccountForward) at PolicyAccountForward.pcf: line 8, column 30
    static function parent_1 (account :  Account) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PolicyAccountForward {
      return super.CurrentLocation as pcf.PolicyAccountForward
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  
}