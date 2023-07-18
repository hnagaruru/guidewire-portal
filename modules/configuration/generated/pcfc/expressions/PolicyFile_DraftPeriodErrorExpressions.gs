package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_DraftPeriodError.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_DraftPeriodErrorExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_DraftPeriodError.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_DraftPeriodErrorExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_DraftPeriodError.pcf: line 21, column 28
    function initialValue_0 () : entity.Job[] {
      return policyPeriod.Policy.Jobs
    }
    
    // 'parent' attribute on Page (id=PolicyFile_DraftPeriodError) at PolicyFile_DraftPeriodError.pcf: line 8, column 73
    static function parent_1 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_DraftPeriodError {
      return super.CurrentLocation as pcf.PolicyFile_DraftPeriodError
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get jobs () : entity.Job[] {
      return getVariableValue("jobs", 0) as entity.Job[]
    }
    
    property set jobs ($arg :  entity.Job[]) {
      setVariableValue("jobs", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}