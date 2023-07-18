package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/JobWizardToolsMenuWizardStepSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolsMenuWizardStepSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/JobWizardToolsMenuWizardStepSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolsMenuWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Reinsurance) at JobWizardToolsMenuWizardStepSet.pcf: line 111, column 236
    function beforeSave_34 () : void {
      policyPeriod.RIRiskVersionLists.each(\ v -> v.AllVersions.each(\ r -> gw.reinsurance.risk.RIRiskValidation.validateUI(r)))
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=ProductDefinition) at JobWizardToolsMenuWizardStepSet.pcf: line 131, column 125
    function beforeSave_44 () : void {
      if (not policyPeriod.Job.Complete and policyPeriod.ManualLineExists) { policyPeriod.ManualLine.reSyncAgainstModel() }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Reinsurance) at JobWizardToolsMenuWizardStepSet.pcf: line 111, column 236
    function onEnter_35 () : void {
      policyPeriod.reevalutateAttachments()
    }
    
    // 'onExit' attribute on JobWizardStep (id=SideBySide) at JobWizardToolsMenuWizardStepSet.pcf: line 26, column 97
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); sxsCache.clearCache()
    }
    
    // 'onExit' attribute on JobWizardStep (id=Notes) at JobWizardToolsMenuWizardStepSet.pcf: line 46, column 119
    function onExit_10 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Documents) at JobWizardToolsMenuWizardStepSet.pcf: line 56, column 79
    function onExit_14 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Participants) at JobWizardToolsMenuWizardStepSet.pcf: line 67, column 88
    function onExit_18 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyVersions) at JobWizardToolsMenuWizardStepSet.pcf: line 77, column 133
    function onExit_22 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Workplan) at JobWizardToolsMenuWizardStepSet.pcf: line 87, column 84
    function onExit_26 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskEvaluation) at JobWizardToolsMenuWizardStepSet.pcf: line 98, column 258
    function onExit_30 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Reinsurance) at JobWizardToolsMenuWizardStepSet.pcf: line 111, column 236
    function onExit_36 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=History) at JobWizardToolsMenuWizardStepSet.pcf: line 121, column 80
    function onExit_40 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ManageBranches) at JobWizardToolsMenuWizardStepSet.pcf: line 36, column 134
    function onExit_6 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=ProductDefinition) at JobWizardToolsMenuWizardStepSet.pcf: line 131, column 125
    function save_45 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=Notes) at JobWizardToolsMenuWizardStepSet.pcf: line 46, column 119
    function screen_onEnter_11 (def :  pcf.Policy_NotesScreen) : void {
      def.onEnter(policyPeriod, null)
    }
    
    // 'screen' attribute on JobWizardStep (id=Documents) at JobWizardToolsMenuWizardStepSet.pcf: line 56, column 79
    function screen_onEnter_15 (def :  pcf.Policy_DocumentsScreen) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=Participants) at JobWizardToolsMenuWizardStepSet.pcf: line 67, column 88
    function screen_onEnter_19 (def :  pcf.ParticipantsScreen) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=SideBySide) at JobWizardToolsMenuWizardStepSet.pcf: line 26, column 97
    function screen_onEnter_2 (def :  pcf.SideBySideScreen) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyVersions) at JobWizardToolsMenuWizardStepSet.pcf: line 77, column 133
    function screen_onEnter_23 (def :  pcf.ManageBranchesScreen) : void {
      def.onEnter(jobWizardHelper, policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=Workplan) at JobWizardToolsMenuWizardStepSet.pcf: line 87, column 84
    function screen_onEnter_27 (def :  pcf.WorkplanScreen) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskEvaluation) at JobWizardToolsMenuWizardStepSet.pcf: line 98, column 258
    function screen_onEnter_31 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper )
    }
    
    // 'screen' attribute on JobWizardStep (id=Reinsurance) at JobWizardToolsMenuWizardStepSet.pcf: line 111, column 236
    function screen_onEnter_37 (def :  pcf.PolicyReinsuranceScreen) : void {
      def.onEnter(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'screen' attribute on JobWizardStep (id=History) at JobWizardToolsMenuWizardStepSet.pcf: line 121, column 80
    function screen_onEnter_41 (def :  pcf.Job_HistoryScreen) : void {
      def.onEnter(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'screen' attribute on JobWizardStep (id=ProductDefinition) at JobWizardToolsMenuWizardStepSet.pcf: line 131, column 125
    function screen_onEnter_46 (def :  pcf.APDProductScreen) : void {
      def.onEnter(policyPeriod.Policy.APDProduct, policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=ManageBranches) at JobWizardToolsMenuWizardStepSet.pcf: line 36, column 134
    function screen_onEnter_7 (def :  pcf.ManageBranchesScreen) : void {
      def.onEnter(jobWizardHelper, policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=Notes) at JobWizardToolsMenuWizardStepSet.pcf: line 46, column 119
    function screen_refreshVariables_12 (def :  pcf.Policy_NotesScreen) : void {
      def.refreshVariables(policyPeriod, null)
    }
    
    // 'screen' attribute on JobWizardStep (id=Documents) at JobWizardToolsMenuWizardStepSet.pcf: line 56, column 79
    function screen_refreshVariables_16 (def :  pcf.Policy_DocumentsScreen) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=Participants) at JobWizardToolsMenuWizardStepSet.pcf: line 67, column 88
    function screen_refreshVariables_20 (def :  pcf.ParticipantsScreen) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyVersions) at JobWizardToolsMenuWizardStepSet.pcf: line 77, column 133
    function screen_refreshVariables_24 (def :  pcf.ManageBranchesScreen) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=Workplan) at JobWizardToolsMenuWizardStepSet.pcf: line 87, column 84
    function screen_refreshVariables_28 (def :  pcf.WorkplanScreen) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=SideBySide) at JobWizardToolsMenuWizardStepSet.pcf: line 26, column 97
    function screen_refreshVariables_3 (def :  pcf.SideBySideScreen) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskEvaluation) at JobWizardToolsMenuWizardStepSet.pcf: line 98, column 258
    function screen_refreshVariables_32 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper )
    }
    
    // 'screen' attribute on JobWizardStep (id=Reinsurance) at JobWizardToolsMenuWizardStepSet.pcf: line 111, column 236
    function screen_refreshVariables_38 (def :  pcf.PolicyReinsuranceScreen) : void {
      def.refreshVariables(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'screen' attribute on JobWizardStep (id=History) at JobWizardToolsMenuWizardStepSet.pcf: line 121, column 80
    function screen_refreshVariables_42 (def :  pcf.Job_HistoryScreen) : void {
      def.refreshVariables(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'screen' attribute on JobWizardStep (id=ProductDefinition) at JobWizardToolsMenuWizardStepSet.pcf: line 131, column 125
    function screen_refreshVariables_47 (def :  pcf.APDProductScreen) : void {
      def.refreshVariables(policyPeriod.Policy.APDProduct, policyPeriod)
    }
    
    // 'screen' attribute on JobWizardStep (id=ManageBranches) at JobWizardToolsMenuWizardStepSet.pcf: line 36, column 134
    function screen_refreshVariables_8 (def :  pcf.ManageBranchesScreen) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod)
    }
    
    // 'visible' attribute on JobWizardStep (id=SideBySide) at JobWizardToolsMenuWizardStepSet.pcf: line 26, column 97
    function visible_0 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()
    }
    
    // 'visible' attribute on JobWizardStep (id=Documents) at JobWizardToolsMenuWizardStepSet.pcf: line 56, column 79
    function visible_13 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.docview
    }
    
    // 'visible' attribute on JobWizardStep (id=Participants) at JobWizardToolsMenuWizardStepSet.pcf: line 67, column 88
    function visible_17 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.viewparticipants
    }
    
    // 'visible' attribute on JobWizardStep (id=PolicyVersions) at JobWizardToolsMenuWizardStepSet.pcf: line 77, column 133
    function visible_21 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.ActivePeriods.Count > 1 and policyPeriod.Job.Complete
    }
    
    // 'visible' attribute on JobWizardStep (id=Workplan) at JobWizardToolsMenuWizardStepSet.pcf: line 87, column 84
    function visible_25 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.viewworkplan
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskEvaluation) at JobWizardToolsMenuWizardStepSet.pcf: line 98, column 258
    function visible_29 () : java.lang.Boolean {
      return (jobWizardHelper.isRiskEvaluationVisible(policyPeriod.Job)) and perm.PolicyPeriod.view(policyPeriod) and (perm.System.viewriskevalissues or perm.System.viewriskclaims or perm.System.viewriskpriorpolicies or perm.System.viewriskpriorlosses)
    }
    
    // 'visible' attribute on JobWizardStep (id=Reinsurance) at JobWizardToolsMenuWizardStepSet.pcf: line 111, column 236
    function visible_33 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.ValidQuote and policyPeriod.AllReinsurables.HasElements and (!policyPeriod.Promoted or policyPeriod.LatestPeriod == policyPeriod) and policyPeriod.ValidReinsurance
    }
    
    // 'visible' attribute on JobWizardStep (id=History) at JobWizardToolsMenuWizardStepSet.pcf: line 121, column 80
    function visible_39 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.viewhist
    }
    
    // 'visible' attribute on JobWizardStep (id=ProductDefinition) at JobWizardToolsMenuWizardStepSet.pcf: line 131, column 125
    function visible_43 () : java.lang.Boolean {
      return policyPeriod.ManualLineExists and new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign()
    }
    
    // 'visible' attribute on JobWizardStep (id=ManageBranches) at JobWizardToolsMenuWizardStepSet.pcf: line 36, column 134
    function visible_5 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.ActivePeriods.Count > 1 and !policyPeriod.Job.Complete
    }
    
    // 'visible' attribute on JobWizardStep (id=Notes) at JobWizardToolsMenuWizardStepSet.pcf: line 46, column 119
    function visible_9 () : java.lang.Boolean {
      return policyPeriod.Policy.canViewNotes() and perm.PolicyPeriod.view(policyPeriod) and perm.System.noteview
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=SideBySide) at JobWizardToolsMenuWizardStepSet.pcf: line 26, column 97
    function wizardStepAvailable_4 () : java.lang.Boolean {
      return policyPeriod.Job.SideBySide and !jobWizardHelper.isInPicker() and !jobWizardHelper.hasActiveWorksheet()
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
    
    property get sxsCache () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getRequireValue("sxsCache", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set sxsCache ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setRequireValue("sxsCache", 0, $arg)
    }
    
    
  }
  
  
}