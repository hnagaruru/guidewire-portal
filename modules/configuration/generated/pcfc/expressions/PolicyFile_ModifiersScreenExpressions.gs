package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/PolicyFile_ModifiersScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_ModifiersScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/PolicyFile_ModifiersScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_ModifiersScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_ModifiersScreen.pcf: line 29, column 58
    function def_onEnter_2 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_ModifiersScreen.pcf: line 34, column 81
    function def_onEnter_4 (def :  pcf.WCModifiersInputSet) : void {
      def.onEnter(nonScheduleRates.toList(), policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_ModifiersScreen.pcf: line 40, column 43
    function def_onEnter_7 (def :  pcf.ScheduleRateDV) : void {
      def.onEnter(scheduleRates)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_ModifiersScreen.pcf: line 29, column 58
    function def_refreshVariables_3 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_ModifiersScreen.pcf: line 34, column 81
    function def_refreshVariables_5 (def :  pcf.WCModifiersInputSet) : void {
      def.refreshVariables(nonScheduleRates.toList(), policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_ModifiersScreen.pcf: line 40, column 43
    function def_refreshVariables_8 (def :  pcf.ScheduleRateDV) : void {
      def.refreshVariables(scheduleRates)
    }
    
    // 'editable' attribute on Screen (id=PolicyFile_ModifiersScreen) at PolicyFile_ModifiersScreen.pcf: line 7, column 37
    function editable_9 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_ModifiersScreen.pcf: line 23, column 33
    function initialValue_0 () : entity.Modifier[] {
      return modifiers.where(\ m -> m.ScheduleRate )
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_ModifiersScreen.pcf: line 27, column 33
    function initialValue_1 () : entity.Modifier[] {
      return modifiers.where(\ m -> not m.ScheduleRate )
    }
    
    // 'visible' attribute on PanelRef at PolicyFile_ModifiersScreen.pcf: line 40, column 43
    function visible_6 () : java.lang.Boolean {
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