package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/Job_RiskAnalysisScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Job_RiskAnalysisScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/Job_RiskAnalysisScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Job_RiskAnalysisScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddManualIssue) at Job_RiskAnalysisScreen.pcf: line 48, column 121
    function action_27 () : void {
      NewManualUWIssuePopup.push(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=AddNewContingencyButton) at Job_RiskAnalysisScreen.pcf: line 54, column 85
    function action_30 () : void {
      NewContingencyPopup.push(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=RequestApproval) at Job_RiskAnalysisScreen.pcf: line 60, column 85
    function action_33 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("approve_general"), "UWRequest")
    }
    
    // 'action' attribute on ToolbarButton (id=LockForReview) at Job_RiskAnalysisScreen.pcf: line 66, column 80
    function action_36 () : void {
      policyPeriod.JobProcess.setPostUWRequestChanges(); policyPeriod.Bundle.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=MultiLocationRiskEval) at Job_RiskAnalysisScreen.pcf: line 74, column 239
    function action_39 () : void {
      RiskEvaluationInProgress = true; gw.riskassessment.PolicyLocationsRiskAssessmentRequestor.enqueueForLocationsRiskAssessment(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=AddManualIssue) at Job_RiskAnalysisScreen.pcf: line 48, column 121
    function action_dest_28 () : pcf.api.Destination {
      return pcf.NewManualUWIssuePopup.createDestination(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=AddNewContingencyButton) at Job_RiskAnalysisScreen.pcf: line 54, column 85
    function action_dest_31 () : pcf.api.Destination {
      return pcf.NewContingencyPopup.createDestination(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=RequestApproval) at Job_RiskAnalysisScreen.pcf: line 60, column 85
    function action_dest_34 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("approve_general"), "UWRequest")
    }
    
    // 'available' attribute on ToolbarButton (id=AddManualIssue) at Job_RiskAnalysisScreen.pcf: line 48, column 121
    function available_25 () : java.lang.Boolean {
      return !(policyPeriod.Job.Subtype == typekey.Job.TC_AUDIT || policyPeriod.Job.Subtype == typekey.Job.TC_CANCELLATION)
    }
    
    // 'available' attribute on ToolbarButton (id=MultiLocationRiskEval) at Job_RiskAnalysisScreen.pcf: line 74, column 239
    function available_37 () : java.lang.Boolean {
      return openForEdit and not RiskEvaluationInProgress
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function def_onEnter_102 (def :  pcf.LossHistoryInputSet_att) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function def_onEnter_104 (def :  pcf.LossHistoryInputSet_man) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function def_onEnter_106 (def :  pcf.LossHistoryInputSet_nol) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 175, column 91
    function def_onEnter_111 (def :  pcf.MotorVehicleRecordSummary) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 38, column 58
    function def_onEnter_23 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 83, column 124
    function def_onEnter_41 (def :  pcf.RiskEvaluationPanelSet) : void {
      def.onEnter(policyPeriod, not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod))
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 91, column 70
    function def_onEnter_45 (def :  pcf.ContingencyPanelSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 99, column 91
    function def_onEnter_48 (def :  pcf.PriorHistoryDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 159, column 91
    function def_onEnter_99 (def :  pcf.LossHistoryTypeSelectDV) : void {
      def.onEnter(policyPeriod.Policy)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 159, column 91
    function def_refreshVariables_100 (def :  pcf.LossHistoryTypeSelectDV) : void {
      def.refreshVariables(policyPeriod.Policy)
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function def_refreshVariables_103 (def :  pcf.LossHistoryInputSet_att) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function def_refreshVariables_105 (def :  pcf.LossHistoryInputSet_man) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function def_refreshVariables_107 (def :  pcf.LossHistoryInputSet_nol) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 175, column 91
    function def_refreshVariables_112 (def :  pcf.MotorVehicleRecordSummary) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 38, column 58
    function def_refreshVariables_24 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 83, column 124
    function def_refreshVariables_42 (def :  pcf.RiskEvaluationPanelSet) : void {
      def.refreshVariables(policyPeriod, not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod))
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 91, column 70
    function def_refreshVariables_46 (def :  pcf.ContingencyPanelSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 99, column 91
    function def_refreshVariables_49 (def :  pcf.PriorHistoryDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'editable' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function editable_1 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'editable' attribute on Screen (id=Job_RiskAnalysisScreen) at Job_RiskAnalysisScreen.pcf: line 7, column 33
    function editable_115 () : java.lang.Boolean {
      return not policyPeriod.Locked
    }
    
    // 'editable' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 99, column 91
    function editable_47 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at Job_RiskAnalysisScreen.pcf: line 20, column 23
    function initialValue_0 () : Boolean {
      return gw.riskassessment.PolicyLocationsRiskAssessmentRequestor.isLocationsRiskAssessmentInProgress(policyPeriod)
    }
    
    // 'mode' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 165, column 61
    function mode_108 () : java.lang.Object {
      return policyPeriod.Policy.LossHistoryType
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at Job_RiskAnalysisScreen.pcf: line 27, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=MultiLocationRiskEval) at Job_RiskAnalysisScreen.pcf: line 74, column 239
    function tooltip_40 () : java.lang.String {
      return RiskEvaluationInProgress ? DisplayKey.get("Web.Policy.EvaluationIssues.MultiLocationRiskEvalInProgressToolTip") : DisplayKey.get("Web.Policy.EvaluationIssues.MultiLocationRiskEvalToolTip")
    }
    
    // 'visible' attribute on Card (id=LossHistoryCard) at Job_RiskAnalysisScreen.pcf: line 156, column 53
    function visible_109 () : java.lang.Boolean {
      return perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on Card (id=MotorVehicleRecord) at Job_RiskAnalysisScreen.pcf: line 172, column 57
    function visible_113 () : java.lang.Boolean {
      return policyPeriod.PersonalAutoLineExists
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at Job_RiskAnalysisScreen.pcf: line 32, column 80
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on AlertBar (id=RiskEvaluationInProgressAlert) at Job_RiskAnalysisScreen.pcf: line 36, column 43
    function visible_22 () : java.lang.Boolean {
      return RiskEvaluationInProgress
    }
    
    // 'visible' attribute on ToolbarButton (id=AddManualIssue) at Job_RiskAnalysisScreen.pcf: line 48, column 121
    function visible_26 () : java.lang.Boolean {
      return perm.System.createmanualuwissue and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButton (id=AddNewContingencyButton) at Job_RiskAnalysisScreen.pcf: line 54, column 85
    function visible_29 () : java.lang.Boolean {
      return !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButton (id=LockForReview) at Job_RiskAnalysisScreen.pcf: line 66, column 80
    function visible_35 () : java.lang.Boolean {
      return !policyPeriod.EditLocked and perm.System.editlockoverride
    }
    
    // 'visible' attribute on ToolbarButton (id=MultiLocationRiskEval) at Job_RiskAnalysisScreen.pcf: line 74, column 239
    function visible_38 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value and gw.api.system.PCConfigParameters.MultipleLocationRiskAssessmentEnabled.Value and not (policyPeriod.Job typeis Reinstatement) and openForEdit
    }
    
    // 'visible' attribute on Card (id=EvaluationIssuesCard) at Job_RiskAnalysisScreen.pcf: line 81, column 52
    function visible_43 () : java.lang.Boolean {
      return perm.System.viewriskevalissues
    }
    
    // 'visible' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 91, column 70
    function visible_44 () : java.lang.Boolean {
      return not policyPeriod.Policy.Contingencies.IsEmpty
    }
    
    // 'visible' attribute on Card (id=PriorPolicyCard) at Job_RiskAnalysisScreen.pcf: line 96, column 55
    function visible_50 () : java.lang.Boolean {
      return perm.System.viewriskpriorpolicies
    }
    
    // 'visible' attribute on Card (id=ClaimsCard) at Job_RiskAnalysisScreen.pcf: line 104, column 118
    function visible_97 () : java.lang.Boolean {
      return perm.System.viewriskclaims and not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get RiskEvaluationInProgress () : Boolean {
      return getVariableValue("RiskEvaluationInProgress", 0) as Boolean
    }
    
    property set RiskEvaluationInProgress ($arg :  Boolean) {
      setVariableValue("RiskEvaluationInProgress", 0, $arg)
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
    
    function performSearch(claimSearchCriteria : gw.losshistory.ClaimSearchCriteria) : ClaimSet {
            if (policyPeriod.Job.Subtype == typekey.Job.TC_SUBMISSION) {
              claimSearchCriteria.Policy = null
            } else {
              claimSearchCriteria.Policy = policyPeriod.Policy
              claimSearchCriteria.PolicyNumber = policyPeriod.PolicyNumber
            }
            if ( claimSearchCriteria.PolicyNumber == null || claimSearchCriteria.PolicyNumber.length == 0) {
              throw new gw.api.util.DisplayableException(DisplayKey.get("Web.Policy.RiskAnalysis.ClaimSearch.Error.PolicyNumberRequired"))
            }
            return claimSearchCriteria.performSearch()
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/Job_RiskAnalysisScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 143, column 194
    function def_onEnter_90 (def :  pcf.ClaimsLV) : void {
      def.onEnter(claimSet.Claims, claimSet==null ? new gw.losshistory.ClaimPolicyPeriodFilterSet(null) : claimSet.retrieveClaimFilter(), policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 149, column 50
    function def_onEnter_93 (def :  pcf.ClaimDetailsCV) : void {
      def.onEnter(selectedClaim,false)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 143, column 194
    function def_refreshVariables_91 (def :  pcf.ClaimsLV) : void {
      def.refreshVariables(claimSet.Claims, claimSet==null ? new gw.losshistory.ClaimPolicyPeriodFilterSet(null) : claimSet.retrieveClaimFilter(), policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 149, column 50
    function def_refreshVariables_94 (def :  pcf.ClaimDetailsCV) : void {
      def.refreshVariables(selectedClaim,false)
    }
    
    // 'visible' attribute on PanelRef at Job_RiskAnalysisScreen.pcf: line 149, column 50
    function visible_92 () : java.lang.Boolean {
      return selectedClaim != null
    }
    
    property get selectedClaim () : Claim {
      return getCurrentSelection(2) as Claim
    }
    
    property set selectedClaim ($arg :  Claim) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/Job_RiskAnalysisScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends Job_RiskAnalysisScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function action_51 () : void {
      PolicySearchPopup.push()
    }
    
    // 'pickLocation' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function action_dest_52 () : pcf.api.Destination {
      return pcf.PolicySearchPopup.createDestination()
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function available_60 () : java.lang.Boolean {
      return claimSearchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function available_69 () : java.lang.Boolean {
      return claimSearchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'conversionExpression' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function conversionExpression_54 (PickedValue :  Object) : java.lang.String {
      return (PickedValue as PolicyPeriodSummary).PolicyNumber
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 136, column 51
    function def_onEnter_88 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at Job_RiskAnalysisScreen.pcf: line 136, column 51
    function def_refreshVariables_89 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria = (__VALUE_TO_SET as entity.DateCriteria)
    }
    
    // 'searchCriteria' attribute on SearchPanel at Job_RiskAnalysisScreen.pcf: line 113, column 42
    function searchCriteria_96 () : gw.losshistory.ClaimSearchCriteria {
      return policyPeriod.getNewClaimSearchCriteria(policyPeriod.Job.Subtype != typekey.Job.TC_SUBMISSION)
    }
    
    // 'search' attribute on SearchPanel at Job_RiskAnalysisScreen.pcf: line 113, column 42
    function search_95 () : java.lang.Object {
      return performSearch(claimSearchCriteria)
    }
    
    // 'value' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function valueRoot_57 () : java.lang.Object {
      return claimSearchCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function valueRoot_63 () : java.lang.Object {
      return claimSearchCriteria.DateCriteria
    }
    
    // 'value' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function value_55 () : java.lang.String {
      return claimSearchCriteria.PolicyNumber
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function value_61 () : typekey.DateRangeChoiceType {
      return claimSearchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function value_65 () : java.lang.Object {
      return claimSearchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function value_66 () : typekey.DateSearchType {
      return claimSearchCriteria.DateCriteria.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function value_70 () : java.util.Date {
      return claimSearchCriteria.DateCriteria.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function value_76 () : java.util.Date {
      return claimSearchCriteria.DateCriteria.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at Job_RiskAnalysisScreen.pcf: line 132, column 52
    function value_84 () : entity.DateCriteria {
      return claimSearchCriteria.DateCriteria
    }
    
    // 'visible' attribute on PickerInput (id=PolicyNumberPicker_Input) at Job_RiskAnalysisScreen.pcf: line 125, column 84
    function visible_53 () : java.lang.Boolean {
      return policyPeriod.Job.Subtype == typekey.Job.TC_SUBMISSION
    }
    
    property get claimSearchCriteria () : gw.losshistory.ClaimSearchCriteria {
      return getCriteriaValue(1) as gw.losshistory.ClaimSearchCriteria
    }
    
    property set claimSearchCriteria ($arg :  gw.losshistory.ClaimSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get claimSet () : ClaimSet {
      return getResultsValue(1) as ClaimSet
    }
    
    
  }
  
  
}