package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at JobWizardInfoBar.pcf: line 42, column 49
    function action_13 () : void {
      AccountFileForward.go(job.Policy.Account)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at JobWizardInfoBar.pcf: line 48, column 83
    function action_17 () : void {
      if (job.LatestPeriod.PolicyNumberAssigned) PolicyFileForward.go(job.LatestPeriod.PolicyNumber, job.LatestPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on InfoBarElement (id=WorkflowLabel) at JobWizardInfoBar.pcf: line 23, column 51
    function action_4 () : void {
      WorkflowDetail.go(policyPeriod.ActiveWorkflow)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at JobWizardInfoBar.pcf: line 42, column 49
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(job.Policy.Account)
    }
    
    // 'action' attribute on InfoBarElement (id=WorkflowLabel) at JobWizardInfoBar.pcf: line 23, column 51
    function action_dest_5 () : pcf.api.Destination {
      return pcf.WorkflowDetail.createDestination(policyPeriod.ActiveWorkflow)
    }
    
    // 'iconColor' attribute on InfoBarElement (id=JobLabel) at JobWizardInfoBar.pcf: line 18, column 110
    function iconColor_2 () : gw.api.web.color.GWColor {
      return job.Subtype == typekey.Job.TC_CANCELLATION ? gw.api.web.color.GWColor.THEME_ALERT_ERROR : null
    }
    
    // 'icon' attribute on InfoBarElement (id=JobLabel) at JobWizardInfoBar.pcf: line 18, column 110
    function icon_1 () : java.lang.String {
      return job.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=LOBLabel) at JobWizardInfoBar.pcf: line 28, column 55
    function icon_8 () : java.lang.String {
      return policyPeriod.Policy.Product.Icon
    }
    
    // 'label' attribute on InfoBarElement (id=JobLabel) at JobWizardInfoBar.pcf: line 18, column 110
    function label_0 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.JobStatus", job.DisplayType,policyPeriod.Status)
    }
    
    // 'label' attribute on InfoBarElement (id=EffectiveDate) at JobWizardInfoBar.pcf: line 32, column 57
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.EffectiveDate", gw.api.util.StringUtil.formatDate(policyPeriod.EditEffectiveDate, "short"))
    }
    
    // 'label' attribute on InfoBarElement (id=LOBLabel) at JobWizardInfoBar.pcf: line 28, column 55
    function label_7 () : java.lang.Object {
      return policyPeriod.Policy.ProductDisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=AccountName) at JobWizardInfoBar.pcf: line 37, column 59
    function value_12 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=AccountNumber) at JobWizardInfoBar.pcf: line 42, column 49
    function value_15 () : java.lang.Object {
      return job.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on InfoBarElement (id=PolicyNumber) at JobWizardInfoBar.pcf: line 48, column 83
    function value_18 () : java.lang.Object {
      return job.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on InfoBarElement (id=Underwriter) at JobWizardInfoBar.pcf: line 53, column 47
    function value_20 () : java.lang.Object {
      return job.getUnderwriter()
    }
    
    // 'value' attribute on InfoBarElement (id=EditLock) at JobWizardInfoBar.pcf: line 57, column 40
    function value_22 () : java.lang.Object {
      return getLockedForUWReviewLabel()
    }
    
    // 'value' attribute on InfoBarElement (id=WorkflowLabel) at JobWizardInfoBar.pcf: line 23, column 51
    function value_6 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.WorkflowStatus", policyPeriod.ActiveWorkflow.State == TC_ACTIVE ? policyPeriod.ActiveWorkflow.ActiveState.DisplayName : policyPeriod.ActiveWorkflow.State.DisplayName )
    }
    
    // 'visible' attribute on InfoBarElement (id=AccountName) at JobWizardInfoBar.pcf: line 37, column 59
    function visible_11 () : java.lang.Boolean {
      return policyPeriod.PrimaryNamedInsured != null
    }
    
    // 'visible' attribute on InfoBarElement (id=PolicyNumber) at JobWizardInfoBar.pcf: line 48, column 83
    function visible_16 () : java.lang.Boolean {
      return gw.web.job.JobWizardInfoBarHelper.shouldDisplayPolicyNumber(job)
    }
    
    // 'visible' attribute on InfoBarElement (id=Underwriter) at JobWizardInfoBar.pcf: line 53, column 47
    function visible_19 () : java.lang.Boolean {
      return job.getUnderwriter() != null
    }
    
    // 'visible' attribute on InfoBarElement (id=EditLock) at JobWizardInfoBar.pcf: line 57, column 40
    function visible_21 () : java.lang.Boolean {
      return policyPeriod.UWLocked
    }
    
    // 'visible' attribute on InfoBarElement (id=WorkflowLabel) at JobWizardInfoBar.pcf: line 23, column 51
    function visible_3 () : java.lang.Boolean {
      return policyPeriod.hasActiveWorkflow()
    }
    
    // 'visible' attribute on InfoBarElement (id=EffectiveDate) at JobWizardInfoBar.pcf: line 32, column 57
    function visible_9 () : java.lang.Boolean {
      return policyPeriod.EditEffectiveDate != null
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function getLockedForUWReviewLabel() : String {
      if (job.SideBySide) {
        return DisplayKey.get("Web.Wizard.InfoBar.JobEditLock")
      } else {
        return DisplayKey.get("Web.Wizard.InfoBar.EditLock")
      }
    }
    
    
  }
  
  
}