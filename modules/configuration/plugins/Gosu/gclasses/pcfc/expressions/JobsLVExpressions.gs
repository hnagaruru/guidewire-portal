package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/JobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/JobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends JobsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at JobsLV.pcf: line 23, column 32
    function checkBoxVisible_23 () : java.lang.Boolean {
      return !job.SelectedVersion.PolicyTerm.CheckArchived
    }
    
    // 'highlighted' attribute on Row at JobsLV.pcf: line 28, column 73
    function highlighted_21 () : java.lang.Boolean {
      return job.ResultingBoundPeriod == policyPeriod
    }
    
    // 'useArchivedStyle' attribute on Row at JobsLV.pcf: line 28, column 73
    function useArchivedStyle_22 () : java.lang.Boolean {
      return job.SelectedVersion.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at JobsLV.pcf: line 43, column 55
    function valueRoot_13 () : java.lang.Object {
      return job.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at JobsLV.pcf: line 32, column 34
    function valueRoot_7 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at JobsLV.pcf: line 43, column 55
    function value_12 () : java.util.Date {
      return job.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at JobsLV.pcf: line 47, column 38
    function value_15 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PeriodStatus_Cell) at JobsLV.pcf: line 51, column 57
    function value_18 () : java.lang.String {
      return job.LatestPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at JobsLV.pcf: line 32, column 34
    function value_6 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at JobsLV.pcf: line 36, column 36
    function value_9 () : java.lang.String {
      return job.DisplayType
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/JobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at JobsLV.pcf: line 32, column 34
    function sortValue_0 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at JobsLV.pcf: line 36, column 36
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'sortBy' attribute on DateCell (id=EffectiveDate_Cell) at JobsLV.pcf: line 43, column 55
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.LatestPeriod.EditEffectiveDate
    }
    
    // 'sortBy' attribute on DateCell (id=EffectiveDate_Cell) at JobsLV.pcf: line 43, column 55
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return  job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at JobsLV.pcf: line 47, column 38
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PeriodStatus_Cell) at JobsLV.pcf: line 51, column 57
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return job.LatestPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on RowIterator at JobsLV.pcf: line 23, column 32
    function value_24 () : entity.Job[] {
      return jobs
    }
    
    property get jobs () : Job[] {
      return getRequireValue("jobs", 0) as Job[]
    }
    
    property set jobs ($arg :  Job[]) {
      setRequireValue("jobs", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}