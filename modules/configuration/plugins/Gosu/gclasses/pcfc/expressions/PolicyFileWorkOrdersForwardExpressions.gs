package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileWorkOrdersForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileWorkOrdersForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileWorkOrdersForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileWorkOrdersForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 1
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileWorkOrdersForward.pcf: line 24, column 43
    function action_1 () : void {
      PolicyFileForward.go(policyPeriod, asOfDate, "PolicyDraftPeriodError")
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileWorkOrdersForward.pcf: line 26, column 120
    function action_4 () : void {
      PolicyFileForward.go(policyPeriod, asOfDate, "PolicyWorkOrders for Job", {policyPeriod.Job})
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileWorkOrdersForward.pcf: line 24, column 43
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod, asOfDate, "PolicyDraftPeriodError")
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileWorkOrdersForward.pcf: line 26, column 120
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod, asOfDate, "PolicyWorkOrders for Job", {policyPeriod.Job})
    }
    
    // 'canVisit' attribute on Forward (id=PolicyFileWorkOrdersForward) at PolicyFileWorkOrdersForward.pcf: line 7, column 38
    static function canVisit_6 (asOfDate :  java.util.Date, job :  Job, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileWorkOrdersForward.pcf: line 24, column 43
    function condition_3 () : java.lang.Boolean {
      return !policyPeriod.Promoted
    }
    
    // 'initialValue' attribute on Variable at PolicyFileWorkOrdersForward.pcf: line 21, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    override property get CurrentLocation () : pcf.PolicyFileWorkOrdersForward {
      return super.CurrentLocation as pcf.PolicyFileWorkOrdersForward
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}