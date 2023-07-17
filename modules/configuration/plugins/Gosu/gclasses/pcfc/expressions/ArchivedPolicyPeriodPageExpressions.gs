package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/archive/ArchivedPolicyPeriodPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchivedPolicyPeriodPageExpressions {
  @javax.annotation.Generated("config/web/pcf/archive/ArchivedPolicyPeriodPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchivedPolicyPeriodPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ArchivedPolicyPeriodPage) at ArchivedPolicyPeriodPage.pcf: line 10, column 100
    static function canVisit_29 (policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 46, column 43
    function def_onEnter_12 (def :  pcf.ClaimsPolicyListViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 49, column 62
    function def_onEnter_15 (def :  pcf.PendingPolicyTransactionsListViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 52, column 64
    function def_onEnter_18 (def :  pcf.CompletedPolicyTransactionsListViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 57, column 44
    function def_onEnter_21 (def :  pcf.AccountDetailViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 60, column 62
    function def_onEnter_24 (def :  pcf.NotesDetailViewTile) : void {
      def.onEnter(gw.api.web.dashboard.ui.note.NoteHelper.forPolicyPeriod(policyPeriod, asOfDate))
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 63, column 45
    function def_onEnter_27 (def :  pcf.ProducerDetailViewTile) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 40, column 50
    function def_onEnter_6 (def :  pcf.PolicyDetailsDetailViewTile) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 43, column 44
    function def_onEnter_9 (def :  pcf.TermFinancialsViewTile) : void {
      def.onEnter(policyPeriod, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 43, column 44
    function def_refreshVariables_10 (def :  pcf.TermFinancialsViewTile) : void {
      def.refreshVariables(policyPeriod, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 46, column 43
    function def_refreshVariables_13 (def :  pcf.ClaimsPolicyListViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 49, column 62
    function def_refreshVariables_16 (def :  pcf.PendingPolicyTransactionsListViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 52, column 64
    function def_refreshVariables_19 (def :  pcf.CompletedPolicyTransactionsListViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 57, column 44
    function def_refreshVariables_22 (def :  pcf.AccountDetailViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 60, column 62
    function def_refreshVariables_25 (def :  pcf.NotesDetailViewTile) : void {
      def.refreshVariables(gw.api.web.dashboard.ui.note.NoteHelper.forPolicyPeriod(policyPeriod, asOfDate))
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 63, column 45
    function def_refreshVariables_28 (def :  pcf.ProducerDetailViewTile) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 40, column 50
    function def_refreshVariables_7 (def :  pcf.PolicyDetailsDetailViewTile) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at ArchivedPolicyPeriodPage.pcf: line 19, column 30
    function initialValue_0 () : java.util.Date {
      return java.util.Date.CurrentDate
    }
    
    // 'initialValue' attribute on Variable at ArchivedPolicyPeriodPage.pcf: line 23, column 84
    function initialValue_1 () : gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions.Instance
    }
    
    // 'initialValue' attribute on Variable at ArchivedPolicyPeriodPage.pcf: line 27, column 62
    function initialValue_2 () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return gw.api.web.dashboard.ui.claims.LossRatioHelper.forPolicyPeriod(policyPeriod)
    }
    
    // 'label' attribute on AlertBar (id=ArchivedPeriodWarning) at ArchivedPolicyPeriodPage.pcf: line 34, column 42
    function label_4 () : java.lang.Object {
      return DisplayKey.get('Web.Archive.PolicyPeriodLandingPage.Issue', policyPeriod.PeriodStart, policyPeriod.PeriodEnd)
    }
    
    // Page (id=ArchivedPolicyPeriodPage) at ArchivedPolicyPeriodPage.pcf: line 10, column 100
    static function parent_30 (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.ArchivedLocationGroup.createDestination(policyPeriod)
    }
    
    // 'title' attribute on Page (id=ArchivedPolicyPeriodPage) at ArchivedPolicyPeriodPage.pcf: line 10, column 100
    static function title_31 (policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get('Web.PolicyFile.PolicySummary', policyPeriod.PolicyNumberDisplayString)
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 46, column 43
    function visible_11 () : java.lang.Boolean {
      return permissions.Claims
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 49, column 62
    function visible_14 () : java.lang.Boolean {
      return permissions.PendingPolicyTransactions
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 52, column 64
    function visible_17 () : java.lang.Boolean {
      return permissions.CompletedPolicyTransactions
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 57, column 44
    function visible_20 () : java.lang.Boolean {
      return permissions.Account
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 60, column 62
    function visible_23 () : java.lang.Boolean {
      return permissions.canSeeNotes(policyPeriod)
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 63, column 45
    function visible_26 () : java.lang.Boolean {
      return permissions.Producer
    }
    
    // 'visible' attribute on AlertBar (id=ArchivedPeriodWarning) at ArchivedPolicyPeriodPage.pcf: line 34, column 42
    function visible_3 () : java.lang.Boolean {
      return policyPeriod.Archived
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 40, column 50
    function visible_5 () : java.lang.Boolean {
      return permissions.PolicyDetails
    }
    
    // 'visible' attribute on TileRef at ArchivedPolicyPeriodPage.pcf: line 43, column 44
    function visible_8 () : java.lang.Boolean {
      return permissions.Premium
    }
    
    override property get CurrentLocation () : pcf.ArchivedPolicyPeriodPage {
      return super.CurrentLocation as pcf.ArchivedPolicyPeriodPage
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
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
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}