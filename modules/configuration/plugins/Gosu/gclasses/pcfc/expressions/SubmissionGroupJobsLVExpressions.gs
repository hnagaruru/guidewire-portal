package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/renmgr/SubmissionGroupJobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionGroupJobsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/renmgr/SubmissionGroupJobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubmissionGroupJobsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at SubmissionGroupJobsLV.pcf: line 35, column 70
    function action_17 () : void {
      pcf.PolicyFileForward.go( submission.LatestPeriod, submission.LatestPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on TextCell (id=Submission_Cell) at SubmissionGroupJobsLV.pcf: line 25, column 41
    function action_9 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=Submission_Cell) at SubmissionGroupJobsLV.pcf: line 25, column 41
    function action_dest_10 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at SubmissionGroupJobsLV.pcf: line 35, column 70
    function action_dest_18 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination( submission.LatestPeriod, submission.LatestPeriod.EditEffectiveDate)
    }
    
    // 'useArchivedStyle' attribute on Row at SubmissionGroupJobsLV.pcf: line 16, column 77
    function useArchivedStyle_28 () : java.lang.Boolean {
      return submission.LatestPeriod.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=Submission_Cell) at SubmissionGroupJobsLV.pcf: line 25, column 41
    function valueRoot_12 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubmissionGroupJobsLV.pcf: line 30, column 51
    function valueRoot_15 () : java.lang.Object {
      return submission.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at SubmissionGroupJobsLV.pcf: line 20, column 57
    function valueRoot_7 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on TextCell (id=Submission_Cell) at SubmissionGroupJobsLV.pcf: line 25, column 41
    function value_11 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubmissionGroupJobsLV.pcf: line 30, column 51
    function value_14 () : typekey.PolicyPeriodStatus {
      return submission.LatestPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SubmissionGroupJobsLV.pcf: line 35, column 70
    function value_19 () : java.lang.String {
      return submission.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at SubmissionGroupJobsLV.pcf: line 39, column 42
    function value_22 () : java.util.Date {
      return submission.CreateTime
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at SubmissionGroupJobsLV.pcf: line 43, column 41
    function value_25 () : java.util.Date {
      return submission.CloseDate
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at SubmissionGroupJobsLV.pcf: line 20, column 57
    function value_6 () : java.lang.String {
      return submission.Policy.ProductDisplayName
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/renmgr/SubmissionGroupJobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionGroupJobsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at SubmissionGroupJobsLV.pcf: line 20, column 57
    function sortValue_0 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=Submission_Cell) at SubmissionGroupJobsLV.pcf: line 25, column 41
    function sortValue_1 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubmissionGroupJobsLV.pcf: line 30, column 51
    function sortValue_2 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SubmissionGroupJobsLV.pcf: line 35, column 70
    function sortValue_3 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at SubmissionGroupJobsLV.pcf: line 39, column 42
    function sortValue_4 (submission :  entity.Submission) : java.lang.Object {
      return submission.CreateTime
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at SubmissionGroupJobsLV.pcf: line 43, column 41
    function sortValue_5 (submission :  entity.Submission) : java.lang.Object {
      return submission.CloseDate
    }
    
    // 'value' attribute on RowIterator at SubmissionGroupJobsLV.pcf: line 14, column 39
    function value_29 () : entity.Submission[] {
      return submissionGroup.Submissions
    }
    
    property get submissionGroup () : SubmissionGroup {
      return getRequireValue("submissionGroup", 0) as SubmissionGroup
    }
    
    property set submissionGroup ($arg :  SubmissionGroup) {
      setRequireValue("submissionGroup", 0, $arg)
    }
    
    
  }
  
  
}