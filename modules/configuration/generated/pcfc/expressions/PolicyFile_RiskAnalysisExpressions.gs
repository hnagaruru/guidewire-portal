package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_RiskAnalysis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_RiskAnalysisExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_RiskAnalysis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_RiskAnalysisCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canPick' attribute on RowIterator at PolicyFile_RiskAnalysis.pcf: line 68, column 70
    function canPick_18 () : java.lang.Boolean {
      return modalRow.IsItem
    }
    
    // 'condition' attribute on ToolbarFlag at PolicyFile_RiskAnalysis.pcf: line 74, column 36
    function condition_10 () : java.lang.Boolean {
      return modalRow.IsItem and modalRow.Close == Clickable
    }
    
    // 'condition' attribute on ToolbarFlag at PolicyFile_RiskAnalysis.pcf: line 71, column 38
    function condition_9 () : java.lang.Boolean {
      return modalRow.IsItem and modalRow.Open == Clickable
    }
    
    // 'def' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function def_onEnter_11 (def :  pcf.UWReferralReasonRowSet_default) : void {
      def.onEnter(modalRow)
    }
    
    // 'def' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function def_onEnter_13 (def :  pcf.UWReferralReasonRowSet_issue) : void {
      def.onEnter(modalRow)
    }
    
    // 'def' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function def_onEnter_15 (def :  pcf.UWReferralReasonRowSet_label) : void {
      def.onEnter(modalRow)
    }
    
    // 'def' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function def_refreshVariables_12 (def :  pcf.UWReferralReasonRowSet_default) : void {
      def.refreshVariables(modalRow)
    }
    
    // 'def' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function def_refreshVariables_14 (def :  pcf.UWReferralReasonRowSet_issue) : void {
      def.refreshVariables(modalRow)
    }
    
    // 'def' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function def_refreshVariables_16 (def :  pcf.UWReferralReasonRowSet_label) : void {
      def.refreshVariables(modalRow)
    }
    
    // 'mode' attribute on RowSetRef at PolicyFile_RiskAnalysis.pcf: line 77, column 41
    function mode_17 () : java.lang.Object {
      return modalRow.Mode
    }
    
    property get modalRow () : gw.web.policy.UWReferralReasonModalRow {
      return getIteratedValue(2) as gw.web.policy.UWReferralReasonModalRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_RiskAnalysis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 140, column 194
    function def_onEnter_62 (def :  pcf.ClaimsLV) : void {
      def.onEnter(claimSet.Claims, claimSet==null ? new gw.losshistory.ClaimPolicyPeriodFilterSet(null) : claimSet.retrieveClaimFilter(), policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 146, column 50
    function def_onEnter_65 (def :  pcf.ClaimDetailsCV) : void {
      def.onEnter(selectedClaim,false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 140, column 194
    function def_refreshVariables_63 (def :  pcf.ClaimsLV) : void {
      def.refreshVariables(claimSet.Claims, claimSet==null ? new gw.losshistory.ClaimPolicyPeriodFilterSet(null) : claimSet.retrieveClaimFilter(), policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 146, column 50
    function def_refreshVariables_66 (def :  pcf.ClaimDetailsCV) : void {
      def.refreshVariables(selectedClaim,false)
    }
    
    // 'visible' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 146, column 50
    function visible_64 () : java.lang.Boolean {
      return selectedClaim != null
    }
    
    property get selectedClaim () : Claim {
      return getCurrentSelection(3) as Claim
    }
    
    property set selectedClaim ($arg :  Claim) {
      setCurrentSelection(3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_RiskAnalysis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_RiskAnalysisCVExpressionsImpl extends PolicyFile_RiskAnalysisExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddContingencyButton) at PolicyFile_RiskAnalysis.pcf: line 98, column 73
    function action_25 () : void {
      NewContingencyPopup.push(policyPeriod.Policy)
    }
    
    // 'action' attribute on ToolbarButton (id=AddUWReferralReason) at PolicyFile_RiskAnalysis.pcf: line 57, column 61
    function action_7 () : void {
      NewUWReferralReasonPopup.push(policyPeriod.Policy)
    }
    
    // 'action' attribute on ToolbarButton (id=AddContingencyButton) at PolicyFile_RiskAnalysis.pcf: line 98, column 73
    function action_dest_26 () : pcf.api.Destination {
      return pcf.NewContingencyPopup.createDestination(policyPeriod.Policy)
    }
    
    // 'action' attribute on ToolbarButton (id=AddUWReferralReason) at PolicyFile_RiskAnalysis.pcf: line 57, column 61
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewUWReferralReasonPopup.createDestination(policyPeriod.Policy)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ViewUWReferralReason) at PolicyFile_RiskAnalysis.pcf: line 52, column 89
    function allCheckedRowsAction_5 (CheckedValues :  gw.web.policy.UWReferralReasonModalRow[], CheckedValuesErrors :  java.util.Map) : void {
      ReferralReasonDetailsPopup.push(CheckedValues*.Item)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=CloseUWReferralReason) at PolicyFile_RiskAnalysis.pcf: line 41, column 83
    function checkedRowAction_3 (modalRow :  gw.web.policy.UWReferralReasonModalRow, CheckedValue :  gw.web.policy.UWReferralReasonModalRow) : void {
      CheckedValue.closeReferralReasonAndCommit()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=ReopenUWReferralReason) at PolicyFile_RiskAnalysis.pcf: line 47, column 84
    function checkedRowAction_4 (modalRow :  gw.web.policy.UWReferralReasonModalRow, CheckedValue :  gw.web.policy.UWReferralReasonModalRow) : void {
      CheckedValue.openReferralReasonAndCommit()
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 87, column 64
    function def_onEnter_22 (def :  pcf.RiskEvaluationPanelSet) : void {
      def.onEnter(policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 93, column 53
    function def_onEnter_27 (def :  pcf.ContingencyPanelSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 107, column 81
    function def_onEnter_29 (def :  pcf.PolicyFile_PriorHistoryDV) : void {
      def.onEnter(policyPeriod, policyPeriod.Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 155, column 80
    function def_onEnter_70 (def :  pcf.PolicyFile_LossHistoryDV) : void {
      def.onEnter(policyPeriod, policyPeriod.Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 162, column 60
    function def_onEnter_73 (def :  pcf.MotorVehicleRecordSummary) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 87, column 64
    function def_refreshVariables_23 (def :  pcf.RiskEvaluationPanelSet) : void {
      def.refreshVariables(policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 93, column 53
    function def_refreshVariables_28 (def :  pcf.ContingencyPanelSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 107, column 81
    function def_refreshVariables_30 (def :  pcf.PolicyFile_PriorHistoryDV) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 155, column 80
    function def_refreshVariables_71 (def :  pcf.PolicyFile_LossHistoryDV) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 162, column 60
    function def_refreshVariables_74 (def :  pcf.MotorVehicleRecordSummary) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_RiskAnalysis.pcf: line 29, column 60
    function initialValue_2 () : gw.web.policy.UWReferralReasonModalRow[] {
      return gw.web.policy.UWReferralReasonsModalRowOrganizer.organize(policyPeriod.Policy.UWReferralReasons)
    }
    
    // 'value' attribute on RowIterator at PolicyFile_RiskAnalysis.pcf: line 68, column 70
    function value_20 () : gw.web.policy.UWReferralReasonModalRow[] {
      return organizedReasons
    }
    
    // 'visible' attribute on Card (id=PolicyFile_UWReferralReasonCard) at PolicyFile_RiskAnalysis.pcf: line 33, column 52
    function visible_21 () : java.lang.Boolean {
      return perm.System.viewriskrefreasons
    }
    
    // 'visible' attribute on Card (id=PolicyFile_EvaluationIssuesCard) at PolicyFile_RiskAnalysis.pcf: line 85, column 52
    function visible_24 () : java.lang.Boolean {
      return perm.System.viewriskevalissues
    }
    
    // 'visible' attribute on Card (id=PolicyFile_PriorPoliciesCard) at PolicyFile_RiskAnalysis.pcf: line 105, column 55
    function visible_31 () : java.lang.Boolean {
      return perm.System.viewriskpriorpolicies
    }
    
    // 'visible' attribute on ToolbarButton (id=AddUWReferralReason) at PolicyFile_RiskAnalysis.pcf: line 57, column 61
    function visible_6 () : java.lang.Boolean {
      return perm.System.createreferralreason
    }
    
    // 'visible' attribute on Card (id=PolicyFile_ClaimsCard) at PolicyFile_RiskAnalysis.pcf: line 112, column 48
    function visible_69 () : java.lang.Boolean {
      return perm.System.viewriskclaims
    }
    
    // 'visible' attribute on Card (id=PolicyFile_LossHistoryCard) at PolicyFile_RiskAnalysis.pcf: line 153, column 53
    function visible_72 () : java.lang.Boolean {
      return perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on Card (id=MotorVehicleRecord) at PolicyFile_RiskAnalysis.pcf: line 160, column 57
    function visible_75 () : java.lang.Boolean {
      return policyPeriod.PersonalAutoLineExists
    }
    
    property get organizedReasons () : gw.web.policy.UWReferralReasonModalRow[] {
      return getVariableValue("organizedReasons", 1) as gw.web.policy.UWReferralReasonModalRow[]
    }
    
    property set organizedReasons ($arg :  gw.web.policy.UWReferralReasonModalRow[]) {
      setVariableValue("organizedReasons", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_RiskAnalysis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_RiskAnalysisExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_RiskAnalysis) at PolicyFile_RiskAnalysis.pcf: line 9, column 69
    function afterEnter_76 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_RiskAnalysis) at PolicyFile_RiskAnalysis.pcf: line 9, column 69
    static function canVisit_77 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and (perm.System.viewriskrefreasons or perm.System.viewriskclaims or perm.System.viewriskpriorpolicies or perm.System.viewriskpriorlosses)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 22, column 81
    function def_onEnter_0 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_RiskAnalysis.pcf: line 22, column 81
    function def_refreshVariables_1 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.Policy.ContingencyWarningMessages)
    }
    
    // Page (id=PolicyFile_RiskAnalysis) at PolicyFile_RiskAnalysis.pcf: line 9, column 69
    static function parent_78 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_RiskAnalysis {
      return super.CurrentLocation as pcf.PolicyFile_RiskAnalysis
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_RiskAnalysis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends PolicyFile_RiskAnalysisCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function available_32 () : java.lang.Boolean {
      return claimSearchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function available_41 () : java.lang.Boolean {
      return claimSearchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_RiskAnalysis.pcf: line 133, column 51
    function def_onEnter_60 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_RiskAnalysis.pcf: line 133, column 51
    function def_refreshVariables_61 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria = (__VALUE_TO_SET as entity.DateCriteria)
    }
    
    // 'searchCriteria' attribute on SearchPanel at PolicyFile_RiskAnalysis.pcf: line 120, column 42
    function searchCriteria_68 () : gw.losshistory.ClaimSearchCriteria {
      return policyPeriod.getNewClaimSearchCriteria(true)
    }
    
    // 'search' attribute on SearchPanel at PolicyFile_RiskAnalysis.pcf: line 120, column 42
    function search_67 () : java.lang.Object {
      return claimSearchCriteria.performSearch()
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function valueRoot_35 () : java.lang.Object {
      return claimSearchCriteria.DateCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function valueRoot_58 () : java.lang.Object {
      return claimSearchCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function value_33 () : typekey.DateRangeChoiceType {
      return claimSearchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function value_37 () : java.lang.Object {
      return claimSearchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function value_38 () : typekey.DateSearchType {
      return claimSearchCriteria.DateCriteria.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function value_42 () : java.util.Date {
      return claimSearchCriteria.DateCriteria.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function value_48 () : java.util.Date {
      return claimSearchCriteria.DateCriteria.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at PolicyFile_RiskAnalysis.pcf: line 129, column 52
    function value_56 () : entity.DateCriteria {
      return claimSearchCriteria.DateCriteria
    }
    
    property get claimSearchCriteria () : gw.losshistory.ClaimSearchCriteria {
      return getCriteriaValue(2) as gw.losshistory.ClaimSearchCriteria
    }
    
    property set claimSearchCriteria ($arg :  gw.losshistory.ClaimSearchCriteria) {
      setCriteriaValue(2, $arg)
    }
    
    property get claimSet () : ClaimSet {
      return getResultsValue(2) as ClaimSet
    }
    
    
  }
  
  
}