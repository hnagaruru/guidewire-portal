package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.Default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.Default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get copier () : gw.policy.PolicyPeriodCopier {
      return getRequireValue("copier", 0) as gw.policy.PolicyPeriodCopier
    }
    
    property set copier ($arg :  gw.policy.PolicyPeriodCopier) {
      setRequireValue("copier", 0, $arg)
    }
    
    
  }
  
  
}