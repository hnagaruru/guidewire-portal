package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/job/LineQuickWizardStepSet.PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineQuickWizardStepSet_PersonalAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/job/LineQuickWizardStepSet.PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineQuickWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PAQuickSubmission_Info) at LineQuickWizardStepSet.PersonalAuto.pcf: line 25, column 79
    function onExit_0 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=PAQuickSubmission_Info) at LineQuickWizardStepSet.PersonalAuto.pcf: line 25, column 79
    function save_1 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=PAQuickSubmission_Info) at LineQuickWizardStepSet.PersonalAuto.pcf: line 25, column 79
    function screen_onEnter_2 (def :  pcf.PAQuickSubmission_InfoScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PAQuickSubmission_Info) at LineQuickWizardStepSet.PersonalAuto.pcf: line 25, column 79
    function screen_refreshVariables_3 (def :  pcf.PAQuickSubmission_InfoScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
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
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}