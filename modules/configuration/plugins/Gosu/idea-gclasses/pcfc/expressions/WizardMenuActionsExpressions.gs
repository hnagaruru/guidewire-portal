package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/WizardMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WizardMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/WizardMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WizardMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=JobItem) at WizardMenuActions.pcf: line 52, column 39
    function action_15 () : void {
      JobForward.go(jobItem)
    }
    
    // 'action' attribute on MenuItem (id=JobItem) at WizardMenuActions.pcf: line 52, column 39
    function action_dest_16 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(jobItem)
    }
    
    // 'label' attribute on MenuItem (id=JobItem) at WizardMenuActions.pcf: line 52, column 39
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.JobWizard.JobGroup.JobName", jobItem.Policy.Product.Abbreviation, jobItem.JobNumber)
    }
    
    // 'visible' attribute on MenuItem (id=JobItem) at WizardMenuActions.pcf: line 52, column 39
    function visible_14 () : java.lang.Boolean {
      return jobItem != job
    }
    
    property get jobItem () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/WizardMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WizardMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToAccountFile) at WizardMenuActions.pcf: line 25, column 93
    function action_1 () : void {
      AccountFileForward.go(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on MenuItem (id=JobGroupItem) at WizardMenuActions.pcf: line 42, column 38
    function action_11 () : void {
      JobGroupForward.go(job.JobGroup)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_NewNote) at WizardMenuActions.pcf: line 65, column 62
    function action_21 () : void {
      NewNoteWorksheet.goInWorkspace(policyPeriod, policyPeriod.EditEffectiveDate, job)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_CopySubmission) at WizardMenuActions.pcf: line 84, column 107
    function action_30 () : void {
      gw.web.job.common.WizardMenuActionsUIHelper.copySubmission(job, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ChangeEffDate) at WizardMenuActions.pcf: line 100, column 83
    function action_38 () : void {
      PolicyChange_ChangeEditEffectiveDate.go(job as PolicyChange, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToPolicyFile) at WizardMenuActions.pcf: line 31, column 128
    function action_4 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_CopyPolicyData) at WizardMenuActions.pcf: line 105, column 107
    function action_42 () : void {
      gw.web.job.common.WizardMenuActionsUIHelper.validateThenGoToCopyData(jobWizardHelper, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_SuspendResumeArchiving) at WizardMenuActions.pcf: line 115, column 82
    function action_43 () : void {
      ArchiveSuspendResumePopup.push(policyPeriod.PolicyTerm.Policy)
    }
    
    // 'action' attribute on MenuItem (id=ShowDiagWorksheet) at WizardMenuActions.pcf: line 127, column 37
    function action_46 () : void {
      RatingWorksheetPopup.push(policyPeriod.Lines.firstWhere(\ line -> gw.rating.worksheet.WorksheetUIHelper.canViewDiagnosticWorksheet(line)))
    }
    
    // 'action' attribute on MenuItem (id=CollectCreditCard) at WizardMenuActions.pcf: line 134, column 35
    function action_50 () : void {
      CollectCreditCardPage.go(policyPeriod.Job.JobNumber)
    }
    
    // 'action' attribute on MenuItem (id=JobGroupItem) at WizardMenuActions.pcf: line 42, column 38
    function action_dest_12 () : pcf.api.Destination {
      return pcf.JobGroupForward.createDestination(job.JobGroup)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToAccountFile) at WizardMenuActions.pcf: line 25, column 93
    function action_dest_2 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_NewNote) at WizardMenuActions.pcf: line 65, column 62
    function action_dest_22 () : pcf.api.Destination {
      return pcf.NewNoteWorksheet.createDestination(policyPeriod, policyPeriod.EditEffectiveDate, job)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ChangeEffDate) at WizardMenuActions.pcf: line 100, column 83
    function action_dest_39 () : pcf.api.Destination {
      return pcf.PolicyChange_ChangeEditEffectiveDate.createDestination(job as PolicyChange, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_SuspendResumeArchiving) at WizardMenuActions.pcf: line 115, column 82
    function action_dest_44 () : pcf.api.Destination {
      return pcf.ArchiveSuspendResumePopup.createDestination(policyPeriod.PolicyTerm.Policy)
    }
    
    // 'action' attribute on MenuItem (id=ShowDiagWorksheet) at WizardMenuActions.pcf: line 127, column 37
    function action_dest_47 () : pcf.api.Destination {
      return pcf.RatingWorksheetPopup.createDestination(policyPeriod.Lines.firstWhere(\ line -> gw.rating.worksheet.WorksheetUIHelper.canViewDiagnosticWorksheet(line)))
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToPolicyFile) at WizardMenuActions.pcf: line 31, column 128
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on MenuItem (id=CollectCreditCard) at WizardMenuActions.pcf: line 134, column 35
    function action_dest_51 () : pcf.api.Destination {
      return pcf.CollectCreditCardPage.createDestination(policyPeriod.Job.JobNumber)
    }
    
    // 'available' attribute on MenuItem (id=WizardMenuActions_ChangeEffDate) at WizardMenuActions.pcf: line 100, column 83
    function available_36 () : java.lang.Boolean {
      return !policyPeriod.hasAnyUnhandledPreemptions()
    }
    
    // 'confirmMessage' attribute on MenuItem (id=WizardMenuActions_ChangeEffDate) at WizardMenuActions.pcf: line 100, column 83
    function confirmMessage_40 () : java.lang.String {
      return gw.web.job.common.WizardMenuActionsUIHelper.getConfirmMessgeForChangeEffectiveDate(job, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 71, column 58
    function def_onEnter_23 (def :  pcf.NewJobDocumentMenuItemSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 78, column 67
    function def_onEnter_26 (def :  pcf.NewActivityMenuItemSet) : void {
      def.onEnter(null, null, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 93, column 29
    function def_onEnter_31 (def :  pcf.WizardActionsEditMenuItemSet_Renewal) : void {
      def.onEnter(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 93, column 29
    function def_onEnter_33 (def :  pcf.WizardActionsEditMenuItemSet_default) : void {
      def.onEnter(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 34, column 29
    function def_onEnter_6 (def :  pcf.WizardActionsMenuItemSet_Submission) : void {
      def.onEnter(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 34, column 29
    function def_onEnter_8 (def :  pcf.WizardActionsMenuItemSet_default) : void {
      def.onEnter(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 71, column 58
    function def_refreshVariables_24 (def :  pcf.NewJobDocumentMenuItemSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 78, column 67
    function def_refreshVariables_27 (def :  pcf.NewActivityMenuItemSet) : void {
      def.refreshVariables(null, null, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 93, column 29
    function def_refreshVariables_32 (def :  pcf.WizardActionsEditMenuItemSet_Renewal) : void {
      def.refreshVariables(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 93, column 29
    function def_refreshVariables_34 (def :  pcf.WizardActionsEditMenuItemSet_default) : void {
      def.refreshVariables(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 34, column 29
    function def_refreshVariables_7 (def :  pcf.WizardActionsMenuItemSet_Submission) : void {
      def.refreshVariables(jobWizardHelper,job,policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 34, column 29
    function def_refreshVariables_9 (def :  pcf.WizardActionsMenuItemSet_default) : void {
      def.refreshVariables(jobWizardHelper,job,policyPeriod)
    }
    
    // 'label' attribute on MenuItem (id=JobGroupItem) at WizardMenuActions.pcf: line 42, column 38
    function label_13 () : java.lang.Object {
      return job.JobGroup.Name
    }
    
    // 'mode' attribute on MenuItemSetRef at WizardMenuActions.pcf: line 34, column 29
    function mode_10 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'value' attribute on MenuItemIterator (id=JobsItems) at WizardMenuActions.pcf: line 47, column 36
    function value_18 () : entity.Job[] {
      return job.JobGroup.Jobs
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_ToAccountFile) at WizardMenuActions.pcf: line 25, column 93
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.Policy.Account != null and !policyPeriod.Policy.Account.New
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_JobGroup) at WizardMenuActions.pcf: line 38, column 40
    function visible_19 () : java.lang.Boolean {
      return job.JobGroup != null
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_NewNote) at WizardMenuActions.pcf: line 65, column 62
    function visible_20 () : java.lang.Boolean {
      return !policyPeriod.Locked and perm.Note.create
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_NewDocument) at WizardMenuActions.pcf: line 69, column 112
    function visible_25 () : java.lang.Boolean {
      return !policyPeriod.Locked and gw.document.DocumentsActionsUIHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_NewActivity) at WizardMenuActions.pcf: line 76, column 66
    function visible_28 () : java.lang.Boolean {
      return !policyPeriod.Locked and perm.System.actcreate
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_CopySubmission) at WizardMenuActions.pcf: line 84, column 107
    function visible_29 () : java.lang.Boolean {
      return job typeis Submission && perm.System.jobcopy && perm.Submission.create
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_ToPolicyFile) at WizardMenuActions.pcf: line 31, column 128
    function visible_3 () : java.lang.Boolean {
      return (policyPeriod.Promoted) or (policyPeriod.Job typeis Issuance) or (not policyPeriod.Job?.createsNewPolicy())
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_ChangeEffDate) at WizardMenuActions.pcf: line 100, column 83
    function visible_37 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canStartChangeEditEffectiveDate().Okay
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_CopyPolicyData) at WizardMenuActions.pcf: line 105, column 107
    function visible_41 () : java.lang.Boolean {
      return gw.web.job.common.WizardMenuActionsUIHelper.canCopyData(jobWizardHelper, policyPeriod)
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_Archiving) at WizardMenuActions.pcf: line 111, column 73
    function visible_45 () : java.lang.Boolean {
      return perm.System.archivedisable or perm.System.archiveenable
    }
    
    // 'visible' attribute on MenuItem (id=DiagWorksheetItem) at WizardMenuActions.pcf: line 122, column 130
    function visible_48 () : java.lang.Boolean {
      return policyPeriod.Lines.hasMatch(\ line -> gw.rating.worksheet.WorksheetUIHelper.canViewDiagnosticWorksheet(line))
    }
    
    // 'visible' attribute on MenuItem (id=CollectCreditCard) at WizardMenuActions.pcf: line 134, column 35
    function visible_49 () : java.lang.Boolean {
      return gw.web.job.common.WizardMenuActionsUIHelper.showCollectCreditCardMenuAction()
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}