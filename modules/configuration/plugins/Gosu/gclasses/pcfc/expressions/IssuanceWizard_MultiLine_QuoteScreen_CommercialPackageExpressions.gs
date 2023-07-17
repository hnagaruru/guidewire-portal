package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IssuanceWizard_MultiLine_QuoteScreen_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IssuanceWizard_MultiLine_QuoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateIssuanceQuote) at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 30, column 23
    function action_19 () : void {
      policyPeriod.printDocument("SubmissionQuote", "Issuance Quote", gw.api.web.document.DocumentsHelper.PrintQuoteParameters)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 34, column 45
    function def_onEnter_20 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_CommercialPackage) : void {
      def.onEnter(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 34, column 45
    function def_onEnter_22 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_default) : void {
      def.onEnter(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 34, column 45
    function def_refreshVariables_21 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_CommercialPackage) : void {
      def.refreshVariables(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 34, column 45
    function def_refreshVariables_23 (def :  pcf.Common_MultiLine_QuoteScreenPanelSet_default) : void {
      def.refreshVariables(policyPeriod, isEditable, jobWizardHelper, true)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_MultiLine_QuoteScreen.CommercialPackage.pcf: line 24, column 96
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get issuance () : Issuance {
      return getRequireValue("issuance", 0) as Issuance
    }
    
    property set issuance ($arg :  Issuance) {
      setRequireValue("issuance", 0, $arg)
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