package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFileMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at PolicyFileMenuActions.pcf: line 137, column 108
    function action_39 () : void {
      JobForward.go(cancellationJob, cancellationJob.PolicyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=item) at PolicyFileMenuActions.pcf: line 137, column 108
    function action_dest_40 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(cancellationJob, cancellationJob.PolicyPeriod)
    }
    
    // 'label' attribute on MenuItem (id=item) at PolicyFileMenuActions.pcf: line 137, column 108
    function label_41 () : java.lang.Object {
      return gw.web.policyfile.PolicyFileMenuActionsUIHelper.getCancellationLabel(cancellationJob)
    }
    
    property get cancellationJob () : entity.Cancellation {
      return getIteratedValue(1) as entity.Cancellation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_NewNote) at PolicyFileMenuActions.pcf: line 60, column 37
    function action_10 () : void {
      NewNoteWorksheet.goInWorkspace(policyPeriod, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_NewEmail) at PolicyFileMenuActions.pcf: line 81, column 23
    function action_18 () : void {
      EmailWorksheet.goInWorkspace(policyPeriod, policyPeriod.Policy, null)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_PreRenewalDirection) at PolicyFileMenuActions.pcf: line 87, column 118
    function action_21 () : void {
      PreRenewalDirectionPage.go(policyPeriod, policyPeriod.Policy, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_CopySubmission) at PolicyFileMenuActions.pcf: line 93, column 98
    function action_24 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.copySubmission(submission)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_SpinPolicy) at PolicyFileMenuActions.pcf: line 98, column 189
    function action_26 () : void {
      SpinPolicy.go(latestPeriod, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_SplitPolicy) at PolicyFileMenuActions.pcf: line 103, column 189
    function action_29 () : void {
      SplitPolicy.go(latestPeriod, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_IssueSubmission) at PolicyFileMenuActions.pcf: line 113, column 109
    function action_32 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.startIssuance(policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_ChangePolicy) at PolicyFileMenuActions.pcf: line 119, column 90
    function action_34 () : void {
      StartPolicyChange.go(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_CancelPolicy) at PolicyFileMenuActions.pcf: line 125, column 121
    function action_37 () : void {
      StartCancellation.go(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_ReinstatePolicy) at PolicyFileMenuActions.pcf: line 145, column 88
    function action_45 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.startReinstatement(policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToAccountFile) at PolicyFileMenuActions.pcf: line 42, column 93
    function action_5 () : void {
      AccountFileForward.go(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_RenewPolicy) at PolicyFileMenuActions.pcf: line 153, column 108
    function action_50 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.startRenewal(policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_SuspendResumeArchiving) at PolicyFileMenuActions.pcf: line 163, column 82
    function action_51 () : void {
      ArchiveSuspendResumePopup.push(policyPeriod.PolicyTerm.Policy)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToPolicyFile) at PolicyFileMenuActions.pcf: line 49, column 128
    function action_8 () : void {
      var periodToView = policyPeriod.Promoted ? policyPeriod : policyPeriod.BasedOn; PolicyFileForward.go(periodToView, periodToView.EditEffectiveDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_NewNote) at PolicyFileMenuActions.pcf: line 60, column 37
    function action_dest_11 () : pcf.api.Destination {
      return pcf.NewNoteWorksheet.createDestination(policyPeriod, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_NewEmail) at PolicyFileMenuActions.pcf: line 81, column 23
    function action_dest_19 () : pcf.api.Destination {
      return pcf.EmailWorksheet.createDestination(policyPeriod, policyPeriod.Policy, null)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_PreRenewalDirection) at PolicyFileMenuActions.pcf: line 87, column 118
    function action_dest_22 () : pcf.api.Destination {
      return pcf.PreRenewalDirectionPage.createDestination(policyPeriod, policyPeriod.Policy, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_SpinPolicy) at PolicyFileMenuActions.pcf: line 98, column 189
    function action_dest_27 () : pcf.api.Destination {
      return pcf.SpinPolicy.createDestination(latestPeriod, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_SplitPolicy) at PolicyFileMenuActions.pcf: line 103, column 189
    function action_dest_30 () : pcf.api.Destination {
      return pcf.SplitPolicy.createDestination(latestPeriod, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_ChangePolicy) at PolicyFileMenuActions.pcf: line 119, column 90
    function action_dest_35 () : pcf.api.Destination {
      return pcf.StartPolicyChange.createDestination(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_CancelPolicy) at PolicyFileMenuActions.pcf: line 125, column 121
    function action_dest_38 () : pcf.api.Destination {
      return pcf.StartCancellation.createDestination(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyFileMenuActions_SuspendResumeArchiving) at PolicyFileMenuActions.pcf: line 163, column 82
    function action_dest_52 () : pcf.api.Destination {
      return pcf.ArchiveSuspendResumePopup.createDestination(policyPeriod.PolicyTerm.Policy)
    }
    
    // 'action' attribute on MenuItem (id=WizardMenuActions_ToAccountFile) at PolicyFileMenuActions.pcf: line 42, column 93
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=PolicyFileMenuActions_ReinstatePolicy) at PolicyFileMenuActions.pcf: line 145, column 88
    function confirmMessage_46 () : java.lang.String {
      return (policyPeriod.hasFinalAuditFinished()) ? DisplayKey.get("Web.Job.FinalAuditCompletedReinstatement") : ""
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileMenuActions.pcf: line 67, column 61
    function def_onEnter_12 (def :  pcf.NewPolicyDocumentMenuItemSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileMenuActions.pcf: line 75, column 82
    function def_onEnter_15 (def :  pcf.NewActivityMenuItemSet) : void {
      def.onEnter(null, policyPeriod.Policy, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileMenuActions.pcf: line 147, column 54
    function def_onEnter_47 (def :  pcf.StartRewriteMenuItemSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileMenuActions.pcf: line 67, column 61
    function def_refreshVariables_13 (def :  pcf.NewPolicyDocumentMenuItemSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileMenuActions.pcf: line 75, column 82
    function def_refreshVariables_16 (def :  pcf.NewActivityMenuItemSet) : void {
      def.refreshVariables(null, policyPeriod.Policy, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileMenuActions.pcf: line 147, column 54
    function def_refreshVariables_48 (def :  pcf.StartRewriteMenuItemSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFileMenuActions.pcf: line 18, column 33
    function initialValue_0 () : entity.Submission {
      return policyPeriod.Policy.Jobs.firstWhere(\ j -> j typeis Submission) as Submission
    }
    
    // 'initialValue' attribute on Variable at PolicyFileMenuActions.pcf: line 23, column 35
    function initialValue_1 () : entity.PolicyPeriod {
      return policyPeriod.Policy.findLastCoveredPeriod()
    }
    
    // 'initialValue' attribute on Variable at PolicyFileMenuActions.pcf: line 28, column 35
    function initialValue_2 () : entity.PolicyPeriod {
      return latestCoveredPeriod?.getSlice(latestCoveredPeriod.getCoverageEndDate().addSeconds(-1))
    }
    
    // 'initialValue' attribute on Variable at PolicyFileMenuActions.pcf: line 32, column 23
    function initialValue_3 () : boolean {
      return gw.plugin.Plugins.get(gw.plugin.policy.IPolicyPlugin).canStartReinstatement(policyPeriod) == null
    }
    
    // 'value' attribute on MenuItemIterator at PolicyFileMenuActions.pcf: line 133, column 45
    function value_42 () : entity.Cancellation[] {
      return gw.web.policyfile.PolicyFileMenuActionsUIHelper.getRescindableCancellations(policyPeriod)
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_NewDocument) at PolicyFileMenuActions.pcf: line 65, column 112
    function visible_14 () : java.lang.Boolean {
      return perm.Document.create and gw.document.DocumentsActionsUIHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_NewActivity) at PolicyFileMenuActions.pcf: line 73, column 41
    function visible_17 () : java.lang.Boolean {
      return perm.System.actcreate
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_PreRenewalDirection) at PolicyFileMenuActions.pcf: line 87, column 118
    function visible_20 () : java.lang.Boolean {
      return policyPeriod.Policy.OpenRenewalJob == null or policyPeriod.PolicyTerm.PreRenewalDirection != null
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_CopySubmission) at PolicyFileMenuActions.pcf: line 93, column 98
    function visible_23 () : java.lang.Boolean {
      return gw.web.policyfile.PolicyFileMenuActionsUIHelper.canCopySubmission(submission)
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_SpinPolicy) at PolicyFileMenuActions.pcf: line 98, column 189
    function visible_25 () : java.lang.Boolean {
      return perm.PolicyPeriod.splitpolicy(policyPeriod) and gw.job.CopyDataVisibilityByProduct.isCopyDataVisibleForProduct(policyPeriod.Policy.ProductCode) and latestPeriod != null
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_IssueSubmission) at PolicyFileMenuActions.pcf: line 113, column 109
    function visible_31 () : java.lang.Boolean {
      return perm.PolicyPeriod.issue(policyPeriod) and policyPeriod.Policy.canStartIssuance() == null
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_ChangePolicy) at PolicyFileMenuActions.pcf: line 119, column 90
    function visible_33 () : java.lang.Boolean {
      return perm.PolicyPeriod.change(policyPeriod) and policyPeriod.Policy.Issued
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_CancelPolicy) at PolicyFileMenuActions.pcf: line 125, column 121
    function visible_36 () : java.lang.Boolean {
      return perm.PolicyPeriod.cancel(policyPeriod) and policyPeriod.CancellationDate != policyPeriod.PeriodStart
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_ToAccountFile) at PolicyFileMenuActions.pcf: line 42, column 93
    function visible_4 () : java.lang.Boolean {
      return policyPeriod.Policy.Account != null and !policyPeriod.Policy.Account.New
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_RescindCancellation) at PolicyFileMenuActions.pcf: line 129, column 45
    function visible_43 () : java.lang.Boolean {
      return perm.System.cancelrescind
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_ReinstatePolicy) at PolicyFileMenuActions.pcf: line 145, column 88
    function visible_44 () : java.lang.Boolean {
      return perm.PolicyPeriod.reinstate(policyPeriod) and canStartReinstatement
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_RenewPolicy) at PolicyFileMenuActions.pcf: line 153, column 108
    function visible_49 () : java.lang.Boolean {
      return perm.PolicyPeriod.renew(policyPeriod) and policyPeriod.Policy.canStartRenewal() == null
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_Archiving) at PolicyFileMenuActions.pcf: line 159, column 73
    function visible_53 () : java.lang.Boolean {
      return perm.System.archivedisable or perm.System.archiveenable
    }
    
    // 'visible' attribute on MenuItem (id=WizardMenuActions_ToPolicyFile) at PolicyFileMenuActions.pcf: line 49, column 128
    function visible_7 () : java.lang.Boolean {
      return (policyPeriod.Promoted) or (policyPeriod.Job typeis Issuance) or (not policyPeriod.Job?.createsNewPolicy())
    }
    
    // 'visible' attribute on MenuItem (id=PolicyFileMenuActions_NewNote) at PolicyFileMenuActions.pcf: line 60, column 37
    function visible_9 () : java.lang.Boolean {
      return perm.Note.create
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get canStartReinstatement () : boolean {
      return getVariableValue("canStartReinstatement", 0) as java.lang.Boolean
    }
    
    property set canStartReinstatement ($arg :  boolean) {
      setVariableValue("canStartReinstatement", 0, $arg)
    }
    
    property get latestCoveredPeriod () : entity.PolicyPeriod {
      return getVariableValue("latestCoveredPeriod", 0) as entity.PolicyPeriod
    }
    
    property set latestCoveredPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("latestCoveredPeriod", 0, $arg)
    }
    
    property get latestPeriod () : entity.PolicyPeriod {
      return getVariableValue("latestPeriod", 0) as entity.PolicyPeriod
    }
    
    property set latestPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("latestPeriod", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get submission () : entity.Submission {
      return getVariableValue("submission", 0) as entity.Submission
    }
    
    property set submission ($arg :  entity.Submission) {
      setVariableValue("submission", 0, $arg)
    }
    
    
  }
  
  
}