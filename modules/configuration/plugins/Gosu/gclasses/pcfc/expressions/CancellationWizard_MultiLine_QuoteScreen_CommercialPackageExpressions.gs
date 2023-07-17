package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CancellationWizard_MultiLine_QuoteScreen_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CancellationWizard_MultiLine_QuoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateCancellationQuote) at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 32, column 23
    function action_20 () : void {
      policyPeriod.printDocument("CancellationQuote", "Cancellation Quote", gw.api.web.document.DocumentsHelper.PrintQuoteParameters)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 36, column 45
    function def_onEnter_21 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_CommercialPackage) : void {
      def.onEnter(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 36, column 45
    function def_onEnter_23 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_default) : void {
      def.onEnter(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 36, column 45
    function def_refreshVariables_22 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_CommercialPackage) : void {
      def.refreshVariables(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 36, column 45
    function def_refreshVariables_24 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_default) : void {
      def.refreshVariables(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 21, column 28
    function initialValue_0 () : PolicyPeriod {
      return cancellation.PolicyPeriod
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 26, column 100
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    property get cancellation () : Cancellation {
      return getRequireValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setRequireValue("cancellation", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}