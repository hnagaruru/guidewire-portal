package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_JobInfoDV.Archived.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_JobInfoDV_ArchivedExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_JobInfoDV.Archived.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_JobInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=JobFile_Input) at Policy_JobInfoDV.Archived.pcf: line 39, column 33
    function action_15 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextInput (id=policyfile_Input) at Policy_JobInfoDV.Archived.pcf: line 68, column 61
    function action_30 () : void {
      pcf.PolicyFileForward.go(job.SelectedVersion.PolicyNumber)
    }
    
    // 'action' attribute on TextInput (id=JobFile_Input) at Policy_JobInfoDV.Archived.pcf: line 39, column 33
    function action_dest_16 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on TextInput (id=policyfile_Input) at Policy_JobInfoDV.Archived.pcf: line 68, column 61
    function action_dest_31 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.SelectedVersion.PolicyNumber)
    }
    
    // 'value' attribute on DateInput (id=PeriodEffDate_Input) at Policy_JobInfoDV.Archived.pcf: line 19, column 53
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      job.LatestPeriod.EditEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=PeriodStatus_Input) at Policy_JobInfoDV.Archived.pcf: line 49, column 65
    function valueRoot_19 () : java.lang.Object {
      return job.ResultingBoundPeriod
    }
    
    // 'value' attribute on DateInput (id=PeriodEffDate_Input) at Policy_JobInfoDV.Archived.pcf: line 19, column 53
    function valueRoot_2 () : java.lang.Object {
      return job.LatestPeriod
    }
    
    // 'value' attribute on DateInput (id=CreateDate_Input) at Policy_JobInfoDV.Archived.pcf: line 23, column 33
    function valueRoot_5 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateInput (id=PeriodEffDate_Input) at Policy_JobInfoDV.Archived.pcf: line 19, column 53
    function value_0 () : java.util.Date {
      return job.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at Policy_JobInfoDV.Archived.pcf: line 31, column 36
    function value_10 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextInput (id=PeriodStatus_Input) at Policy_JobInfoDV.Archived.pcf: line 49, column 65
    function value_18 () : java.lang.String {
      return job.ResultingBoundPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateInput (id=PolicyPerEffDate_Input) at Policy_JobInfoDV.Archived.pcf: line 55, column 57
    function value_21 () : java.util.Date {
      return job.ResultingBoundPeriod.PeriodStart
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at Policy_JobInfoDV.Archived.pcf: line 59, column 55
    function value_24 () : java.util.Date {
      return job.ResultingBoundPeriod.PeriodEnd
    }
    
    // 'value' attribute on DateInput (id=CreateDate_Input) at Policy_JobInfoDV.Archived.pcf: line 23, column 33
    function value_4 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on DateInput (id=CloseDate_Input) at Policy_JobInfoDV.Archived.pcf: line 27, column 32
    function value_7 () : java.util.Date {
      return job.CloseDate
    }
    
    // 'visible' attribute on Label at Policy_JobInfoDV.Archived.pcf: line 34, column 47
    function visible_13 () : java.lang.Boolean {
      return !(job typeis Cancellation)
    }
    
    // 'visible' attribute on TextInput (id=JobFile_Input) at Policy_JobInfoDV.Archived.pcf: line 39, column 33
    function visible_14 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'visible' attribute on InputSet at Policy_JobInfoDV.Archived.pcf: line 43, column 71
    function visible_27 () : java.lang.Boolean {
      return job.isComplete() and job.ResultingBoundPeriod!=null
    }
    
    // 'visible' attribute on Label at Policy_JobInfoDV.Archived.pcf: line 63, column 62
    function visible_28 () : java.lang.Boolean {
      return job.Subtype == typekey.Job.TC_SUBMISSION 
    }
    
    // 'visible' attribute on TextInput (id=policyfile_Input) at Policy_JobInfoDV.Archived.pcf: line 68, column 61
    function visible_29 () : java.lang.Boolean {
      return job.Subtype == typekey.Job.TC_SUBMISSION
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    
  }
  
  
}