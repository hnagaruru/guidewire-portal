package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.nol.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossHistoryInputSet_nolExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.nol.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossHistoryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}