package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/QuickSubmission_QuoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickSubmission_QuoteScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/QuickSubmission_QuoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickSubmission_QuoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintQuote) at QuickSubmission_QuoteScreen.pcf: line 32, column 44
    function action_21 () : void {
      policyPeriod.printDocument("SubmissionQuote", "Submission Quote", gw.api.web.document.DocumentsHelper.PrintQuoteParameters)
    }
    
    // 'action' attribute on ButtonInput (id=SyncButton_Input) at QuickSubmission_QuoteScreen.pcf: line 61, column 75
    function action_37 () : void {
      policyPeriod.editIfRatedOrQuotedAndForceSync()
    }
    
    // 'available' attribute on ButtonInput (id=SyncButton_Input) at QuickSubmission_QuoteScreen.pcf: line 61, column 75
    function available_36 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 36, column 60
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 89, column 44
    function def_onEnter_49 (def :  pcf.QuickSubmission_QuoteDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 89, column 44
    function def_onEnter_51 (def :  pcf.QuickSubmission_QuoteDetailsPanelSet_default) : void {
      def.onEnter(policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 36, column 60
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 89, column 44
    function def_refreshVariables_50 (def :  pcf.QuickSubmission_QuoteDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 89, column 44
    function def_refreshVariables_52 (def :  pcf.QuickSubmission_QuoteDetailsPanelSet_default) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.Offering = (__VALUE_TO_SET as gw.api.productmodel.Offering)
    }
    
    // 'filter' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function filter_31 (VALUE :  gw.api.productmodel.Offering, VALUES :  gw.api.productmodel.Offering[]) : java.lang.Boolean {
      return VALUE.isOfferingAvailable(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at QuickSubmission_QuoteScreen.pcf: line 20, column 26
    function initialValue_0 () : PolicyLine {
      return policyPeriod.RepresentativePolicyLines.first()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at QuickSubmission_QuoteScreen.pcf: line 89, column 44
    function mode_53 () : java.lang.Object {
      return line.Pattern.CodeIdentifier
    }
    
    // 'onChange' attribute on PostOnChange at QuickSubmission_QuoteScreen.pcf: line 55, column 74
    function onChange_26 () : void {
      policyPeriod.editIfRatedOrQuotedAndForceSync()
    }
    
    // 'required' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function required_27 () : java.lang.Boolean {
      return policyPeriod.Policy.Product.OfferingRequired
    }
    
    // 'title' attribute on TitleBar at QuickSubmission_QuoteScreen.pcf: line 92, column 74
    function title_48 () : java.lang.String {
      return line.Pattern.DisplayName
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at QuickSubmission_QuoteScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function valueRange_32 () : java.lang.Object {
      return policyPeriod.Policy.Product.Offerings
    }
    
    // 'value' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function valueRoot_30 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=PolicyPeriod_Input) at QuickSubmission_QuoteScreen.pcf: line 43, column 196
    function value_24 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(policyPeriod.PeriodStart,"short") + " - " + gw.api.util.StringUtil.formatDate(policyPeriod.PeriodEnd,"short")
    }
    
    // 'value' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function value_28 () : gw.api.productmodel.Offering {
      return policyPeriod.Offering
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at QuickSubmission_QuoteScreen.pcf: line 70, column 51
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Taxes_Input) at QuickSubmission_QuoteScreen.pcf: line 77, column 100
    function value_42 () : gw.pl.currency.MonetaryAmount {
      return (policyPeriod.TotalCostRPT == null) ? null : policyPeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at QuickSubmission_QuoteScreen.pcf: line 84, column 48
    function value_44 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalCostRPT
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function verifyValueRangeIsAllowedType_33 ($$arg :  gw.api.productmodel.Offering[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at QuickSubmission_QuoteScreen.pcf: line 53, column 54
    function verifyValueRange_34 () : void {
      var __valueRangeArg = policyPeriod.Policy.Product.Offerings
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=PrintQuote) at QuickSubmission_QuoteScreen.pcf: line 32, column 44
    function visible_20 () : java.lang.Boolean {
      return policyPeriod.ValidQuote
    }
    
    // 'visible' attribute on TitleBar at QuickSubmission_QuoteScreen.pcf: line 92, column 74
    function visible_47 () : java.lang.Boolean {
      return policyPeriod.RepresentativePolicyLines.Count > 1
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getVariableValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setVariableValue("line", 0, $arg)
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