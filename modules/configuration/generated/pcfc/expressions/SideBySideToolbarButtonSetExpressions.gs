package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideToolbarButtonSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NewVersion) at SideBySideToolbarButtonSet.pcf: line 48, column 97
    function action_10 () : void {
      gw.lob.common.SideBySideUtil.duplicateVersion(basePeriod, wizard, jobWizardHelper)
    }
    
    // 'action' attribute on ToolbarButton (id=FullApp) at SideBySideToolbarButtonSet.pcf: line 54, column 78
    function action_12 () : void {
      jobWizardHelper.convertQuickQuoteToFullApp(jobProcess as gw.job.SubmissionProcess, basePeriod);
    }
    
    // 'action' attribute on ToolbarButton (id=SaveAll) at SideBySideToolbarButtonSet.pcf: line 60, column 21
    function action_13 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteAll) at SideBySideToolbarButtonSet.pcf: line 37, column 173
    function action_5 () : void {
      gw.lob.common.SideBySideUIHelper.quoteAll(wizard, jobWizardHelper, periodInfos, periods)
    }
    
    // 'action' attribute on ToolbarButton (id=ValidateAll) at SideBySideToolbarButtonSet.pcf: line 42, column 173
    function action_8 () : void {
      periodInfos.each(\ i -> i.validateWithoutQuote()); periodInfos.first().refreshSideBySideStep();
    }
    
    // 'initialValue' attribute on Variable at SideBySideToolbarButtonSet.pcf: line 19, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at SideBySideToolbarButtonSet.pcf: line 23, column 26
    function initialValue_1 () : entity.Job {
      return basePeriod.Job
    }
    
    // 'initialValue' attribute on Variable at SideBySideToolbarButtonSet.pcf: line 27, column 33
    function initialValue_2 () : gw.job.JobProcess {
      return basePeriod.JobProcess
    }
    
    // 'initialValue' attribute on Variable at SideBySideToolbarButtonSet.pcf: line 32, column 30
    function initialValue_3 () : PolicyPeriod[] {
      return job.ActivePeriods
    }
    
    // 'label' attribute on ToolbarButton (id=QuoteAll) at SideBySideToolbarButtonSet.pcf: line 37, column 173
    function label_6 () : java.lang.Object {
      return gw.lob.common.SideBySideUIHelper.getQuoteAllLabel()
    }
    
    // 'visible' attribute on ToolbarButton (id=FullApp) at SideBySideToolbarButtonSet.pcf: line 54, column 78
    function visible_11 () : java.lang.Boolean {
      return gw.lob.common.SideBySideUIHelper.fullAppVisible(jobProcess)
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteAll) at SideBySideToolbarButtonSet.pcf: line 37, column 173
    function visible_4 () : java.lang.Boolean {
      return (!gw.lob.common.SideBySideUtil.hasOOSorPreemption(basePeriod.Job)) and basePeriod.Job.ActivePeriods.hasMatch(\ p -> p.JobProcess.canRequestRate().Okay)
    }
    
    // 'visible' attribute on ToolbarButton (id=NewVersion) at SideBySideToolbarButtonSet.pcf: line 48, column 97
    function visible_9 () : java.lang.Boolean {
      return (not basePeriod.UWLockedAndNoOverride) and jobProcess.canMakeNewVersion().Okay
    }
    
    property get basePeriod () : PolicyPeriod {
      return getRequireValue("basePeriod", 0) as PolicyPeriod
    }
    
    property set basePeriod ($arg :  PolicyPeriod) {
      setRequireValue("basePeriod", 0, $arg)
    }
    
    property get job () : entity.Job {
      return getVariableValue("job", 0) as entity.Job
    }
    
    property set job ($arg :  entity.Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobProcess () : gw.job.JobProcess {
      return getVariableValue("jobProcess", 0) as gw.job.JobProcess
    }
    
    property set jobProcess ($arg :  gw.job.JobProcess) {
      setVariableValue("jobProcess", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get periodInfos () : gw.job.sxs.SideBySidePolicyPeriodInfo[] {
      return getRequireValue("periodInfos", 0) as gw.job.sxs.SideBySidePolicyPeriodInfo[]
    }
    
    property set periodInfos ($arg :  gw.job.sxs.SideBySidePolicyPeriodInfo[]) {
      setRequireValue("periodInfos", 0, $arg)
    }
    
    property get periods () : PolicyPeriod[] {
      return getVariableValue("periods", 0) as PolicyPeriod[]
    }
    
    property set periods ($arg :  PolicyPeriod[]) {
      setVariableValue("periods", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}