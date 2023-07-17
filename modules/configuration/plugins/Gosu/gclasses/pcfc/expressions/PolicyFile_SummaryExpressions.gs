package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Summary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_SummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Summary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_SummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 1
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date, errorMessage :  String) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Summary) at PolicyFile_Summary.pcf: line 9, column 100
    function afterEnter_52 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Summary) at PolicyFile_Summary.pcf: line 9, column 100
    static function canVisit_53 (asOfDate :  java.util.Date, errorMessage :  String, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions.Instance.canVisitDashboard()
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 79, column 50
    function def_onEnter_14 (def :  pcf.PolicyDetailsDetailViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 82, column 44
    function def_onEnter_17 (def :  pcf.TermFinancialsViewTile) : void {
      def.onEnter(policyPeriod, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 85, column 54
    function def_onEnter_20 (def :  pcf.CurrentActivitiesPolicyListViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 88, column 62
    function def_onEnter_23 (def :  pcf.PendingPolicyTransactionsListViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 91, column 43
    function def_onEnter_26 (def :  pcf.ClaimsPolicyListViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 94, column 64
    function def_onEnter_29 (def :  pcf.CompletedPolicyTransactionsListViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 97, column 72
    function def_onEnter_32 (def :  pcf.SplitPolicyListViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 102, column 44
    function def_onEnter_35 (def :  pcf.AccountDetailViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 105, column 62
    function def_onEnter_38 (def :  pcf.NotesDetailViewTile) : void {
      def.onEnter(gw.api.web.dashboard.ui.note.NoteHelper.forPolicyPeriod(policyPeriod, asOfDate))
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 108, column 51
    function def_onEnter_41 (def :  pcf.PolicyBillingSummaryChartTile) : void {
      def.onEnter(new gw.api.web.dashboard.ui.billing.BillingSummaryHelper(policyPeriod))
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 111, column 52
    function def_onEnter_44 (def :  pcf.PaymentScheduleListViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 114, column 65
    function def_onEnter_47 (def :  pcf.PolicyContactListViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 117, column 45
    function def_onEnter_50 (def :  pcf.ProducerDetailViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 79, column 50
    function def_refreshVariables_15 (def :  pcf.PolicyDetailsDetailViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 82, column 44
    function def_refreshVariables_18 (def :  pcf.TermFinancialsViewTile) : void {
      def.refreshVariables(policyPeriod, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 85, column 54
    function def_refreshVariables_21 (def :  pcf.CurrentActivitiesPolicyListViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 88, column 62
    function def_refreshVariables_24 (def :  pcf.PendingPolicyTransactionsListViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 91, column 43
    function def_refreshVariables_27 (def :  pcf.ClaimsPolicyListViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 94, column 64
    function def_refreshVariables_30 (def :  pcf.CompletedPolicyTransactionsListViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 97, column 72
    function def_refreshVariables_33 (def :  pcf.SplitPolicyListViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 102, column 44
    function def_refreshVariables_36 (def :  pcf.AccountDetailViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 105, column 62
    function def_refreshVariables_39 (def :  pcf.NotesDetailViewTile) : void {
      def.refreshVariables(gw.api.web.dashboard.ui.note.NoteHelper.forPolicyPeriod(policyPeriod, asOfDate))
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 108, column 51
    function def_refreshVariables_42 (def :  pcf.PolicyBillingSummaryChartTile) : void {
      def.refreshVariables(new gw.api.web.dashboard.ui.billing.BillingSummaryHelper(policyPeriod))
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 111, column 52
    function def_refreshVariables_45 (def :  pcf.PaymentScheduleListViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 114, column 65
    function def_refreshVariables_48 (def :  pcf.PolicyContactListViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at PolicyFile_Summary.pcf: line 117, column 45
    function def_refreshVariables_51 (def :  pcf.ProducerDetailViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Summary.pcf: line 27, column 22
    function initialValue_0 () : String {
      return gw.web.ErrorConduit.addRequestScopedErrorMessagePassThrough(errorMessage)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Summary.pcf: line 31, column 84
    function initialValue_1 () : gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions.Instance
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Summary.pcf: line 35, column 56
    function initialValue_2 () : gw.pcf.policysummary.PolicySummaryHelper {
      return new gw.pcf.policysummary.PolicySummaryHelper(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Summary.pcf: line 39, column 62
    function initialValue_3 () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return gw.api.web.dashboard.ui.claims.LossRatioHelper.forPolicyPeriod(policyPeriod)
    }
    
    // 'label' attribute on AlertBar (id=LossRatioWarning) at PolicyFile_Summary.pcf: line 73, column 57
    function label_12 () : java.lang.Object {
      return lossRatioHelper.ErrorMessage
    }
    
    // 'label' attribute on AlertBar (id=FutureArchivedTermWarning) at PolicyFile_Summary.pcf: line 46, column 88
    function label_5 () : java.lang.Object {
      return DisplayKey.get('Web.Job.Warning.ArchivedFutureTerm', asOfDate.ShortFormat)
    }
    
    // 'label' attribute on AlertBar (id=PolicyRewrittenWarning) at PolicyFile_Summary.pcf: line 57, column 81
    function label_8 () : java.lang.Object {
      return policyPeriod.Policy.RewrittenToNewAccountDestination.Issued ? DisplayKey.get('Web.PolicyFile.Warnings.PolicyRewritten') : DisplayKey.get('Web.PolicyFile.Warnings.PolicyBeingRewritten')
    }
    
    // Page (id=PolicyFile_Summary) at PolicyFile_Summary.pcf: line 9, column 100
    static function parent_54 (asOfDate :  java.util.Date, errorMessage :  String, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    // 'title' attribute on Page (id=PolicyFile_Summary) at PolicyFile_Summary.pcf: line 9, column 100
    static function title_55 (asOfDate :  java.util.Date, errorMessage :  String, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get('Web.PolicyFile.PolicySummary', policyPeriod.PolicyNumberDisplayString)
    }
    
    // 'visible' attribute on AlertBar (id=PendingCancellationWarning) at PolicyFile_Summary.pcf: line 69, column 66
    function visible_10 () : java.lang.Boolean {
      return policySummaryHelper.PendingCancellationExists
    }
    
    // 'visible' attribute on AlertBar (id=LossRatioWarning) at PolicyFile_Summary.pcf: line 73, column 57
    function visible_11 () : java.lang.Boolean {
      return lossRatioHelper.ErrorMessage != null
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 79, column 50
    function visible_13 () : java.lang.Boolean {
      return permissions.PolicyDetails
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 82, column 44
    function visible_16 () : java.lang.Boolean {
      return permissions.Premium
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 85, column 54
    function visible_19 () : java.lang.Boolean {
      return permissions.CurrentActivities
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 88, column 62
    function visible_22 () : java.lang.Boolean {
      return permissions.PendingPolicyTransactions
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 91, column 43
    function visible_25 () : java.lang.Boolean {
      return permissions.Claims
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 94, column 64
    function visible_28 () : java.lang.Boolean {
      return permissions.CompletedPolicyTransactions
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 97, column 72
    function visible_31 () : java.lang.Boolean {
      return policyPeriod.Policy.DividedPolicies.HasElements
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 102, column 44
    function visible_34 () : java.lang.Boolean {
      return permissions.Account
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 105, column 62
    function visible_37 () : java.lang.Boolean {
      return permissions.canSeeNotes(policyPeriod)
    }
    
    // 'visible' attribute on AlertBar (id=FutureArchivedTermWarning) at PolicyFile_Summary.pcf: line 46, column 88
    function visible_4 () : java.lang.Boolean {
      return gw.api.archive.PCArchivingUtil.hasFutureArchivedTerms(policyPeriod)
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 108, column 51
    function visible_40 () : java.lang.Boolean {
      return permissions.BillingSummary
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 111, column 52
    function visible_43 () : java.lang.Boolean {
      return permissions.PaymentSchedule
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 114, column 65
    function visible_46 () : java.lang.Boolean {
      return permissions.canSeeContacts(policyPeriod)
    }
    
    // 'visible' attribute on TileRef at PolicyFile_Summary.pcf: line 117, column 45
    function visible_49 () : java.lang.Boolean {
      return permissions.Producer
    }
    
    // 'visible' attribute on AlertBar (id=PendingPaymentConfirmation) at PolicyFile_Summary.pcf: line 51, column 84
    function visible_6 () : java.lang.Boolean {
      return not policyPeriod.PolicyTerm.Bound and not policyPeriod.Canceled
    }
    
    // 'visible' attribute on AlertBar (id=PolicyRewrittenWarning) at PolicyFile_Summary.pcf: line 57, column 81
    function visible_7 () : java.lang.Boolean {
      return policyPeriod.Policy.RewrittenToNewAccountDestination != null
    }
    
    // 'visible' attribute on AlertBar (id=OutstandingContingencyWarning) at PolicyFile_Summary.pcf: line 63, column 68
    function visible_9 () : java.lang.Boolean {
      return policyPeriod.Policy.HasOutstandingContingencies
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Summary {
      return super.CurrentLocation as pcf.PolicyFile_Summary
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get errorMessage () : String {
      return getVariableValue("errorMessage", 0) as String
    }
    
    property set errorMessage ($arg :  String) {
      setVariableValue("errorMessage", 0, $arg)
    }
    
    property get lossRatioHelper () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return getVariableValue("lossRatioHelper", 0) as gw.api.web.dashboard.ui.claims.LossRatioHelper
    }
    
    property set lossRatioHelper ($arg :  gw.api.web.dashboard.ui.claims.LossRatioHelper) {
      setVariableValue("lossRatioHelper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    property get placeholderUsedToTriggerPassThroughMethod () : String {
      return getVariableValue("placeholderUsedToTriggerPassThroughMethod", 0) as String
    }
    
    property set placeholderUsedToTriggerPassThroughMethod ($arg :  String) {
      setVariableValue("placeholderUsedToTriggerPassThroughMethod", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get policySummaryHelper () : gw.pcf.policysummary.PolicySummaryHelper {
      return getVariableValue("policySummaryHelper", 0) as gw.pcf.policysummary.PolicySummaryHelper
    }
    
    property set policySummaryHelper ($arg :  gw.pcf.policysummary.PolicySummaryHelper) {
      setVariableValue("policySummaryHelper", 0, $arg)
    }
    
    
  }
  
  
}