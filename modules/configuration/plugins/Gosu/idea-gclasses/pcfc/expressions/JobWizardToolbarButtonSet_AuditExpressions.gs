package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/JobWizardToolbarButtonSet.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_AuditExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/JobWizardToolbarButtonSet.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Audit.pcf: line 51, column 21
    function action_10 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Audit.pcf: line 57, column 123
    function action_12 () : void {
      HandlePreemptionPopup.push(wizard, jobWizardHelper, policyPeriod, false)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmitAudit) at JobWizardToolbarButtonSet.Audit.pcf: line 63, column 70
    function action_15 () : void {
      if (jobWizardHelper.revalidateModel()) { auditProcess.complete(); wizard.finish(); JobComplete.go(job, policyPeriod) }
    }
    
    // 'action' attribute on MenuItem (id=Withdraw) at JobWizardToolbarButtonSet.Audit.pcf: line 75, column 59
    function action_17 () : void {
      jobWizardHelper.withdrawInNewBundle(policyPeriod); wizard.finish(); JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=WaiveAudit) at JobWizardToolbarButtonSet.Audit.pcf: line 83, column 56
    function action_20 () : void {
      if (jobWizardHelper.revalidateModel()) { auditProcess.waive(); wizard.finish(); JobComplete.go(job, policyPeriod) }
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Audit.pcf: line 38, column 118
    function action_5 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Audit.pcf: line 45, column 66
    function action_8 () : void {
      auditProcess.edit(); wizard.saveDraft(); jobWizardHelper.goDirectlyToStep("Details")
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Audit.pcf: line 57, column 123
    function action_dest_13 () : pcf.api.Destination {
      return pcf.HandlePreemptionPopup.createDestination(wizard, jobWizardHelper, policyPeriod, false)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Audit.pcf: line 38, column 118
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'available' attribute on MenuItem (id=WaiveAudit) at JobWizardToolbarButtonSet.Audit.pcf: line 83, column 56
    function available_18 () : java.lang.Boolean {
      return policyPeriod.canBeWaived(audit.AuditInformation)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Audit.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Audit.pcf: line 24, column 35
    function initialValue_1 () : gw.job.AuditProcess {
      return policyPeriod.AuditProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Audit.pcf: line 28, column 23
    function initialValue_2 () : boolean {
      return auditProcess.canHandlePreemptions().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Audit.pcf: line 32, column 21
    function initialValue_3 () : Audit {
      return job as Audit
    }
    
    // 'label' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Audit.pcf: line 45, column 66
    function label_9 () : java.lang.Object {
      return (job as Audit).AuditInformation.IsPremiumReport ? DisplayKey.get("Web.AuditWizard.EditReport") : DisplayKey.get("Web.AuditWizard.EditAudit")
    }
    
    // 'visible' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Audit.pcf: line 57, column 123
    function visible_11 () : java.lang.Boolean {
      return hasPreemptions and perm.Audit.edit and not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmitAudit) at JobWizardToolbarButtonSet.Audit.pcf: line 63, column 70
    function visible_14 () : java.lang.Boolean {
      return !hasPreemptions and auditProcess.canComplete().Okay
    }
    
    // 'visible' attribute on MenuItem (id=Withdraw) at JobWizardToolbarButtonSet.Audit.pcf: line 75, column 59
    function visible_16 () : java.lang.Boolean {
      return audit.AuditInformation.UserCanWithdraw
    }
    
    // 'visible' attribute on MenuItem (id=WaiveAudit) at JobWizardToolbarButtonSet.Audit.pcf: line 83, column 56
    function visible_19 () : java.lang.Boolean {
      return audit.AuditInformation.UserCanWaive
    }
    
    // 'visible' attribute on ToolbarButton (id=CloseOptions) at JobWizardToolbarButtonSet.Audit.pcf: line 68, column 167
    function visible_21 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and (audit.AuditInformation.UserCanWithdraw or audit.AuditInformation.UserCanWaive)
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Audit.pcf: line 38, column 118
    function visible_4 () : java.lang.Boolean {
      return auditProcess.canReleaseLock() and not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Audit.pcf: line 45, column 66
    function visible_7 () : java.lang.Boolean {
      return !hasPreemptions and auditProcess.canEdit().Okay
    }
    
    property get audit () : Audit {
      return getVariableValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setVariableValue("audit", 0, $arg)
    }
    
    property get auditProcess () : gw.job.AuditProcess {
      return getVariableValue("auditProcess", 0) as gw.job.AuditProcess
    }
    
    property set auditProcess ($arg :  gw.job.AuditProcess) {
      setVariableValue("auditProcess", 0, $arg)
    }
    
    property get hasPreemptions () : boolean {
      return getVariableValue("hasPreemptions", 0) as java.lang.Boolean
    }
    
    property set hasPreemptions ($arg :  boolean) {
      setVariableValue("hasPreemptions", 0, $arg)
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
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}