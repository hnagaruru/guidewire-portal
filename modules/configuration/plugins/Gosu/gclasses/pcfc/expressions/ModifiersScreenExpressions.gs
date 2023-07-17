package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ModifiersScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ModifiersScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ModifiersScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ModifiersScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ModifiersScreen.pcf: line 39, column 58
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ModifiersScreen.pcf: line 44, column 81
    function def_onEnter_24 (def :  pcf.WCModifiersInputSet) : void {
      def.onEnter(nonScheduleRates.toList(), policyPeriod)
    }
    
    // 'def' attribute on PanelRef at ModifiersScreen.pcf: line 51, column 43
    function def_onEnter_27 (def :  pcf.ScheduleRateDV) : void {
      def.onEnter(scheduleRates)
    }
    
    // 'def' attribute on PanelRef at ModifiersScreen.pcf: line 39, column 58
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ModifiersScreen.pcf: line 44, column 81
    function def_refreshVariables_25 (def :  pcf.WCModifiersInputSet) : void {
      def.refreshVariables(nonScheduleRates.toList(), policyPeriod)
    }
    
    // 'def' attribute on PanelRef at ModifiersScreen.pcf: line 51, column 43
    function def_refreshVariables_28 (def :  pcf.ScheduleRateDV) : void {
      def.refreshVariables(scheduleRates)
    }
    
    // 'editable' attribute on Screen (id=ModifiersScreen) at ModifiersScreen.pcf: line 7, column 26
    function editable_29 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at ModifiersScreen.pcf: line 23, column 33
    function initialValue_0 () : entity.Modifier[] {
      return modifiers.where(\ mod -> mod.ScheduleRate )
    }
    
    // 'initialValue' attribute on Variable at ModifiersScreen.pcf: line 27, column 33
    function initialValue_1 () : entity.Modifier[] {
      return modifiers.where(\ mod -> not mod.ScheduleRate )
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ModifiersScreen.pcf: line 32, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at ModifiersScreen.pcf: line 37, column 80
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on PanelRef at ModifiersScreen.pcf: line 51, column 43
    function visible_26 () : java.lang.Boolean {
      return scheduleRates.HasElements
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get modifiers () : Modifier[] {
      return getRequireValue("modifiers", 0) as Modifier[]
    }
    
    property set modifiers ($arg :  Modifier[]) {
      setRequireValue("modifiers", 0, $arg)
    }
    
    property get nonScheduleRates () : entity.Modifier[] {
      return getVariableValue("nonScheduleRates", 0) as entity.Modifier[]
    }
    
    property set nonScheduleRates ($arg :  entity.Modifier[]) {
      setVariableValue("nonScheduleRates", 0, $arg)
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
    
    property get scheduleRates () : entity.Modifier[] {
      return getVariableValue("scheduleRates", 0) as entity.Modifier[]
    }
    
    property set scheduleRates ($arg :  entity.Modifier[]) {
      setVariableValue("scheduleRates", 0, $arg)
    }
    
    
  }
  
  
}