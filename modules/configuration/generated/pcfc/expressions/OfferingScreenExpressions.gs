package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/OfferingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OfferingScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/OfferingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OfferingScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at OfferingScreen.pcf: line 39, column 52
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(period, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=OfferingQuestionSetsDV) at OfferingScreen.pcf: line 67, column 52
    function def_onEnter_36 (def :  pcf.QuestionSetsDV) : void {
      def.onEnter(offeringQuestionSets, period, \ -> gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(period, jobWizardHelper))
    }
    
    // 'def' attribute on PanelRef at OfferingScreen.pcf: line 39, column 52
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(period, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=OfferingQuestionSetsDV) at OfferingScreen.pcf: line 67, column 52
    function def_refreshVariables_37 (def :  pcf.QuestionSetsDV) : void {
      def.refreshVariables(offeringQuestionSets, period, \ -> gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(period, jobWizardHelper))
    }
    
    // 'value' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.Offering = (__VALUE_TO_SET as gw.api.productmodel.Offering)
    }
    
    // 'editable' attribute on Screen (id=OfferingScreen) at OfferingScreen.pcf: line 7, column 25
    function editable_38 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'filter' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function filter_30 (VALUE :  gw.api.productmodel.Offering, VALUES :  gw.api.productmodel.Offering[]) : java.lang.Boolean {
      return VALUE.isOfferingAvailable(period)
    }
    
    // 'initialValue' attribute on Variable at OfferingScreen.pcf: line 20, column 43
    function initialValue_0 () : gw.api.productmodel.Product {
      return period.Policy.Product
    }
    
    // 'initialValue' attribute on Variable at OfferingScreen.pcf: line 24, column 49
    function initialValue_1 () : gw.api.productmodel.QuestionSet[] {
      return product.getQuestionSetsByType(QuestionSetType.TC_OFFERING)
    }
    
    // 'label' attribute on Verbatim (id=unavailableLineWarningLabel) at OfferingScreen.pcf: line 45, column 25
    function label_25 () : java.lang.String {
      return policyLineName
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function mode_2 () : java.lang.Object {
      return period.Job.Subtype
    }
    
    // 'required' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function required_26 () : java.lang.Boolean {
      return product.OfferingRequired
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at OfferingScreen.pcf: line 32, column 92
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(period, period.Job, jobWizardHelper)
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function valueRange_31 () : java.lang.Object {
      return product.Offerings
    }
    
    // 'value' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function valueRoot_29 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function value_27 () : gw.api.productmodel.Offering {
      return period.Offering
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.productmodel.Offering[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OfferingSelection_Input) at OfferingScreen.pcf: line 57, column 54
    function verifyValueRange_33 () : void {
      var __valueRangeArg = product.Offerings
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at OfferingScreen.pcf: line 37, column 74
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(period)
    }
    
    // 'visible' attribute on Verbatim (id=unavailableLineWarningLabel) at OfferingScreen.pcf: line 45, column 25
    function visible_24 () : java.lang.Boolean {
      return unavailableLineExists()
    }
    
    // 'visible' attribute on PanelRef (id=OfferingQuestionSetsDV) at OfferingScreen.pcf: line 67, column 52
    function visible_35 () : java.lang.Boolean {
      return offeringQuestionSets.Count > 0
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get offeringQuestionSets () : gw.api.productmodel.QuestionSet[] {
      return getVariableValue("offeringQuestionSets", 0) as gw.api.productmodel.QuestionSet[]
    }
    
    property set offeringQuestionSets ($arg :  gw.api.productmodel.QuestionSet[]) {
      setVariableValue("offeringQuestionSets", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get policyLineName () : String {
      return getVariableValue("policyLineName", 0) as String
    }
    
    property set policyLineName ($arg :  String) {
      setVariableValue("policyLineName", 0, $arg)
    }
    
    property get product () : gw.api.productmodel.Product {
      return getVariableValue("product", 0) as gw.api.productmodel.Product
    }
    
    property set product ($arg :  gw.api.productmodel.Product) {
      setVariableValue("product", 0, $arg)
    }
    
    function unavailableLineExists(): boolean {
      var issues = period.checkPolicyLinesAgainstProductModel()
          .whereTypeIs( gw.api.web.productmodel.UnavailablePolicyLineIssue).toTypedArray()
      if (issues.length == 0) {
        return false
      } else if (issues.length == 1) {
        policyLineName = DisplayKey.get("Web.JobWizard.ProductModelSync.UnavailablePolicyLineWillBeRemoved1", issues[0].Pattern.DisplayName)
        return true
      } else {
        policyLineName = ""
        issues.eachWithIndex( \ issue, i -> {policyLineName += issue.Pattern.Name + (i != issues.length - 1 ? " and " : "")})
        policyLineName = DisplayKey.get("Web.JobWizard.ProductModelSync.UnavailablePolicyLineWillBeRemoved2", policyLineName)
        return true
      }
    }
    
    
  }
  
  
}