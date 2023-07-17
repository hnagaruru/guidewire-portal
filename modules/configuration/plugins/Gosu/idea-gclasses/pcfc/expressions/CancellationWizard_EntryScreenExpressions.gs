package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard_EntryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CancellationWizard_EntryScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard_EntryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CancellationWizard_EntryScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_EntryScreen.pcf: line 45, column 72
    function def_onEnter_24 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_EntryScreen.pcf: line 47, column 60
    function def_onEnter_26 (def :  pcf.CancelPolicyDV) : void {
      def.onEnter(cancellation, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_EntryScreen.pcf: line 45, column 72
    function def_refreshVariables_25 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_EntryScreen.pcf: line 47, column 60
    function def_refreshVariables_27 (def :  pcf.CancelPolicyDV) : void {
      def.refreshVariables(cancellation, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=CancellationWizard_EntryScreen) at CancellationWizard_EntryScreen.pcf: line 7, column 41
    function editable_28 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'label' attribute on Verbatim (id=ErrorMessage) at CancellationWizard_EntryScreen.pcf: line 33, column 23
    function label_21 () : java.lang.String {
      return DisplayKey.get("Web.Cancellation.Error.CannotStart", policyPeriod.Policy.canStartCancellation(policyPeriod.EditEffectiveDate))
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_EntryScreen.pcf: line 24, column 100
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'visible' attribute on Verbatim at CancellationWizard_EntryScreen.pcf: line 28, column 65
    function visible_19 () : java.lang.Boolean {
      return cancellation.PolicyPeriod.Status == TC_QUOTING
    }
    
    // 'visible' attribute on Verbatim (id=ErrorMessage) at CancellationWizard_EntryScreen.pcf: line 33, column 23
    function visible_20 () : java.lang.Boolean {
      return policyPeriod.EditEffectiveDate != null and policyPeriod.Policy.canStartCancellation(policyPeriod.EditEffectiveDate) != null
    }
    
    // 'visible' attribute on Verbatim (id=ReinsuranceWarning) at CancellationWizard_EntryScreen.pcf: line 39, column 23
    function visible_22 () : java.lang.Boolean {
      return policyPeriod.RIRiskVersionLists.hasMatch(\ v -> v.AllVersions.hasMatch(\ r -> r.ChangedByUser))
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at CancellationWizard_EntryScreen.pcf: line 43, column 80
    function visible_23 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get cancellation () : Cancellation {
      return getRequireValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setRequireValue("cancellation", 0, $arg)
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