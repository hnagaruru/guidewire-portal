package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalDirectionForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PreRenewalDirectionForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalDirectionForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PreRenewalDirectionForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at PreRenewalDirectionForward.pcf: line 16, column 58
    function action_0 () : void {
      ArchivedLocationGroup.go(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PreRenewalDirectionForward.pcf: line 18, column 111
    function action_3 () : void {
      PreRenewalDirectionPage.go(policyPeriod, policyPeriod.Policy, policyPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on ForwardCondition at PreRenewalDirectionForward.pcf: line 16, column 58
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ArchivedLocationGroup.createDestination(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PreRenewalDirectionForward.pcf: line 18, column 111
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PreRenewalDirectionPage.createDestination(policyPeriod, policyPeriod.Policy, policyPeriod.EditEffectiveDate)
    }
    
    // 'canVisit' attribute on Forward (id=PreRenewalDirectionForward) at PreRenewalDirectionForward.pcf: line 8, column 71
    static function canVisit_5 (policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.System.viewprerenewal and perm.PolicyPeriod.view(policyPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at PreRenewalDirectionForward.pcf: line 16, column 58
    function condition_2 () : java.lang.Boolean {
      return policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'parent' attribute on Forward (id=PreRenewalDirectionForward) at PreRenewalDirectionForward.pcf: line 8, column 71
    static function parent_6 (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    override property get CurrentLocation () : pcf.PreRenewalDirectionForward {
      return super.CurrentLocation as pcf.PreRenewalDirectionForward
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}