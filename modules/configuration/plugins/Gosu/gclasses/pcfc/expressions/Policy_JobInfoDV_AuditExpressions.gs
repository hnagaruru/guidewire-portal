package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_JobInfoDV.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_JobInfoDV_AuditExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_JobInfoDV.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_JobInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=JobFile_Input) at Policy_JobInfoDV.Audit.pcf: line 67, column 33
    function action_33 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextInput (id=JobFile_Input) at Policy_JobInfoDV.Audit.pcf: line 67, column 33
    function action_dest_34 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'def' attribute on InputSetRef at Policy_JobInfoDV.Audit.pcf: line 70, column 29
    function def_onEnter_36 (def :  pcf.Policy_JobDetailsInputSet_Submission) : void {
      def.onEnter(job)
    }
    
    // 'def' attribute on InputSetRef at Policy_JobInfoDV.Audit.pcf: line 70, column 29
    function def_onEnter_38 (def :  pcf.Policy_JobDetailsInputSet_default) : void {
      def.onEnter(job)
    }
    
    // 'def' attribute on InputSetRef at Policy_JobInfoDV.Audit.pcf: line 70, column 29
    function def_refreshVariables_37 (def :  pcf.Policy_JobDetailsInputSet_Submission) : void {
      def.refreshVariables(job)
    }
    
    // 'def' attribute on InputSetRef at Policy_JobInfoDV.Audit.pcf: line 70, column 29
    function def_refreshVariables_39 (def :  pcf.Policy_JobDetailsInputSet_default) : void {
      def.refreshVariables(job)
    }
    
    // 'mode' attribute on InputSetRef at Policy_JobInfoDV.Audit.pcf: line 70, column 29
    function mode_40 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'value' attribute on DateInput (id=AuditPeriodStartDate_Input) at Policy_JobInfoDV.Audit.pcf: line 18, column 71
    function valueRoot_1 () : java.lang.Object {
      return (job as Audit).AuditInformation
    }
    
    // 'value' attribute on DateInput (id=CloseDate_Input) at Policy_JobInfoDV.Audit.pcf: line 34, column 32
    function valueRoot_13 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateInput (id=AuditPeriodStartDate_Input) at Policy_JobInfoDV.Audit.pcf: line 18, column 71
    function value_0 () : java.util.Date {
      return (job as Audit).AuditInformation.AuditPeriodStartDate
    }
    
    // 'value' attribute on DateInput (id=CloseDate_Input) at Policy_JobInfoDV.Audit.pcf: line 34, column 32
    function value_12 () : java.util.Date {
      return job.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=AuditMethod_Input) at Policy_JobInfoDV.Audit.pcf: line 39, column 42
    function value_15 () : typekey.AuditMethod {
      return (job as Audit).AuditInformation.AuditMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=ActualAuditMethod_Input) at Policy_JobInfoDV.Audit.pcf: line 44, column 42
    function value_18 () : typekey.AuditMethod {
      return (job as Audit).AuditInformation.ActualAuditMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at Policy_JobInfoDV.Audit.pcf: line 49, column 48
    function value_21 () : typekey.AuditScheduleType {
      return (job as Audit).AuditInformation.AuditScheduleType
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at Policy_JobInfoDV.Audit.pcf: line 53, column 64
    function value_24 () : java.lang.String {
      return (job as Audit).AuditInformation.DisplayStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=RevisionType_Input) at Policy_JobInfoDV.Audit.pcf: line 59, column 109
    function value_28 () : typekey.RevisionType {
      return (job as Audit).AuditInformation.RevisionType
    }
    
    // 'value' attribute on DateInput (id=AuditPeriodEndDate_Input) at Policy_JobInfoDV.Audit.pcf: line 22, column 69
    function value_3 () : java.util.Date {
      return (job as Audit).AuditInformation.AuditPeriodEndDate
    }
    
    // 'value' attribute on DateInput (id=AuditInitiationDate_Input) at Policy_JobInfoDV.Audit.pcf: line 26, column 59
    function value_6 () : java.util.Date {
      return (job as Audit).AuditInformation.InitDate
    }
    
    // 'value' attribute on DateInput (id=AuditDueDate_Input) at Policy_JobInfoDV.Audit.pcf: line 30, column 58
    function value_9 () : java.util.Date {
      return (job as Audit).AuditInformation.DueDate
    }
    
    // 'visible' attribute on TypeKeyInput (id=RevisionType_Input) at Policy_JobInfoDV.Audit.pcf: line 59, column 109
    function visible_27 () : java.lang.Boolean {
      return (job as Audit).AuditInformation.IsRevision || (job as Audit).AuditInformation.IsReversal
    }
    
    // 'visible' attribute on TextInput (id=JobFile_Input) at Policy_JobInfoDV.Audit.pcf: line 67, column 33
    function visible_32 () : java.lang.Boolean {
      return job.Viewable
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