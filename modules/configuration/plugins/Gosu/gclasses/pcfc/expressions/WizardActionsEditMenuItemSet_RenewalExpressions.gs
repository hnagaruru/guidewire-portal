package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/WizardActionsEditMenuItemSet.Renewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WizardActionsEditMenuItemSet_RenewalExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/WizardActionsEditMenuItemSet.Renewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WizardActionsEditMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DoNotEscalateAfterPolicyHoldReleased) at WizardActionsEditMenuItemSet.Renewal.pcf: line 26, column 68
    function action_1 () : void {
      policyPeriod.Renewal.EscalateAfterHoldReleased = false; policyPeriod.Bundle.commit()
    }
    
    // 'action' attribute on MenuItem (id=EscalateAfterPolicyHoldReleased) at WizardActionsEditMenuItemSet.Renewal.pcf: line 31, column 69
    function action_4 () : void {
      policyPeriod.Renewal.EscalateAfterHoldReleased = true; policyPeriod.Bundle.commit()
    }
    
    // 'available' attribute on MenuItem (id=PolicyHold) at WizardActionsEditMenuItemSet.Renewal.pcf: line 21, column 48
    function available_6 () : java.lang.Boolean {
      return perm.Renewal.edit(job)
    }
    
    // 'label' attribute on MenuItem (id=DoNotEscalateAfterPolicyHoldReleased) at WizardActionsEditMenuItemSet.Renewal.pcf: line 26, column 68
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Job.Operation.DoNotEscalateAfterPolicyHoldReleased") 
    }
    
    // 'label' attribute on MenuItem (id=EscalateAfterPolicyHoldReleased) at WizardActionsEditMenuItemSet.Renewal.pcf: line 31, column 69
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Job.Operation.EscalateAfterPolicyHoldReleased") 
    }
    
    // 'visible' attribute on MenuItem (id=DoNotEscalateAfterPolicyHoldReleased) at WizardActionsEditMenuItemSet.Renewal.pcf: line 26, column 68
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.Renewal.EscalateAfterHoldReleased 
    }
    
    // 'visible' attribute on MenuItem (id=EscalateAfterPolicyHoldReleased) at WizardActionsEditMenuItemSet.Renewal.pcf: line 31, column 69
    function visible_3 () : java.lang.Boolean {
      return !policyPeriod.Renewal.EscalateAfterHoldReleased 
    }
    
    // 'visible' attribute on MenuItem (id=PolicyHold) at WizardActionsEditMenuItemSet.Renewal.pcf: line 21, column 48
    function visible_7 () : java.lang.Boolean {
      return !policyPeriod.Renewal.Complete
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