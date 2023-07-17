package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard_QuoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CancellationWizard_QuoteScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard_QuoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CancellationWizard_QuoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateCancellationQuote) at CancellationWizard_QuoteScreen.pcf: line 39, column 23
    function action_22 () : void {
      policyPeriod.printDocument("CancellationQuote", "Cancellation Quote", gw.api.web.document.DocumentsHelper.PrintQuoteParameters)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 42, column 76
    function def_onEnter_23 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 44, column 43
    function def_onEnter_25 (def :  pcf.Quote_SummaryDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_29 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_31 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_33 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_35 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_37 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_39 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_41 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_43 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_45 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_onEnter_47 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_52 (def :  pcf.RatingTxDetailsPanelSet_BOPLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_54 (def :  pcf.RatingTxDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_56 (def :  pcf.RatingTxDetailsPanelSet_CPLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_58 (def :  pcf.RatingTxDetailsPanelSet_GLLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_60 (def :  pcf.RatingTxDetailsPanelSet_HOPLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_62 (def :  pcf.RatingTxDetailsPanelSet_IMLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_64 (def :  pcf.RatingTxDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_66 (def :  pcf.RatingTxDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_onEnter_68 (def :  pcf.RatingTxDetailsPanelSet_default) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 42, column 76
    function def_refreshVariables_24 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 44, column 43
    function def_refreshVariables_26 (def :  pcf.Quote_SummaryDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_30 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_32 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_34 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_36 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_38 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_40 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_42 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_44 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_46 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function def_refreshVariables_48 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_53 (def :  pcf.RatingTxDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_55 (def :  pcf.RatingTxDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_57 (def :  pcf.RatingTxDetailsPanelSet_CPLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_59 (def :  pcf.RatingTxDetailsPanelSet_GLLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_61 (def :  pcf.RatingTxDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_63 (def :  pcf.RatingTxDetailsPanelSet_IMLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_65 (def :  pcf.RatingTxDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_67 (def :  pcf.RatingTxDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 64, column 40
    function def_refreshVariables_69 (def :  pcf.RatingTxDetailsPanelSet_default) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Total"), DisplayKey.get("Web.Quote.TotalCostLabel.Total"), isEditable, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard_QuoteScreen.pcf: line 20, column 28
    function initialValue_0 () : PolicyPeriod {
      return cancellation.PolicyPeriod
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard_QuoteScreen.pcf: line 24, column 46
    function initialValue_1 () : gw.document.DocumentProduction {
      return new gw.document.DocumentProduction()
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard_QuoteScreen.pcf: line 28, column 33
    function initialValue_2 () : entity.PolicyLine {
      return policyPeriod.RepresentativePolicyLines.first()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function mode_3 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at CancellationWizard_QuoteScreen.pcf: line 53, column 40
    function mode_49 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'title' attribute on TitleBar at CancellationWizard_QuoteScreen.pcf: line 56, column 76
    function title_28 () : java.lang.String {
      return line.Pattern.DisplayName
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_21 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CancellationWizard_QuoteScreen.pcf: line 33, column 100
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, cancellation, jobWizardHelper)
    }
    
    // 'visible' attribute on TitleBar at CancellationWizard_QuoteScreen.pcf: line 56, column 76
    function visible_27 () : java.lang.Boolean {
      return policyPeriod.RepresentativePolicyLines.Count > 1
    }
    
    property get cancellation () : Cancellation {
      return getRequireValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setRequireValue("cancellation", 0, $arg)
    }
    
    property get documentProduction () : gw.document.DocumentProduction {
      return getVariableValue("documentProduction", 0) as gw.document.DocumentProduction
    }
    
    property set documentProduction ($arg :  gw.document.DocumentProduction) {
      setVariableValue("documentProduction", 0, $arg)
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
    
    property get line () : entity.PolicyLine {
      return getVariableValue("line", 0) as entity.PolicyLine
    }
    
    property set line ($arg :  entity.PolicyLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}