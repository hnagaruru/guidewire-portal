package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_SummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_SummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Summary) at AccountFile_Summary.pcf: line 8, column 103
    static function canVisit_42 (account :  Account) : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance.canVisitDashboard(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 45, column 61
    function def_onEnter_10 (def :  pcf.CurrentActivitiesAccountListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef (id=CurrentPoliciesTileLV) at AccountFile_Summary.pcf: line 49, column 52
    function def_onEnter_13 (def :  pcf.CurrentPolicyTermsListViewTile) : void {
      def.onEnter(account, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 52, column 59
    function def_onEnter_16 (def :  pcf.OpenPolicyTransactionsAccountListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 55, column 43
    function def_onEnter_19 (def :  pcf.ClaimsAccountListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 60, column 51
    function def_onEnter_22 (def :  pcf.AccountOverviewDetailViewTile) : void {
      def.onEnter(account, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 63, column 51
    function def_onEnter_25 (def :  pcf.BillingSummaryChartTile) : void {
      def.onEnter(billingSummaryHelper)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 66, column 44
    function def_onEnter_28 (def :  pcf.AccountContactListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 69, column 44
    function def_onEnter_31 (def :  pcf.ProducersListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 72, column 46
    function def_onEnter_34 (def :  pcf.LocationsListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 75, column 52
    function def_onEnter_37 (def :  pcf.RelatedAccountsListViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 78, column 57
    function def_onEnter_40 (def :  pcf.NotesDetailViewTile) : void {
      def.onEnter(gw.api.web.dashboard.ui.note.NoteHelper.forAccount(account))
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 42, column 51
    function def_onEnter_7 (def :  pcf.AccountDetailsDetailViewTile) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 45, column 61
    function def_refreshVariables_11 (def :  pcf.CurrentActivitiesAccountListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef (id=CurrentPoliciesTileLV) at AccountFile_Summary.pcf: line 49, column 52
    function def_refreshVariables_14 (def :  pcf.CurrentPolicyTermsListViewTile) : void {
      def.refreshVariables(account, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 52, column 59
    function def_refreshVariables_17 (def :  pcf.OpenPolicyTransactionsAccountListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 55, column 43
    function def_refreshVariables_20 (def :  pcf.ClaimsAccountListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 60, column 51
    function def_refreshVariables_23 (def :  pcf.AccountOverviewDetailViewTile) : void {
      def.refreshVariables(account, lossRatioHelper)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 63, column 51
    function def_refreshVariables_26 (def :  pcf.BillingSummaryChartTile) : void {
      def.refreshVariables(billingSummaryHelper)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 66, column 44
    function def_refreshVariables_29 (def :  pcf.AccountContactListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 69, column 44
    function def_refreshVariables_32 (def :  pcf.ProducersListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 72, column 46
    function def_refreshVariables_35 (def :  pcf.LocationsListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 75, column 52
    function def_refreshVariables_38 (def :  pcf.RelatedAccountsListViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 78, column 57
    function def_refreshVariables_41 (def :  pcf.NotesDetailViewTile) : void {
      def.refreshVariables(gw.api.web.dashboard.ui.note.NoteHelper.forAccount(account))
    }
    
    // 'def' attribute on TileRef at AccountFile_Summary.pcf: line 42, column 51
    function def_refreshVariables_8 (def :  pcf.AccountDetailsDetailViewTile) : void {
      def.refreshVariables(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Summary.pcf: line 17, column 62
    function initialValue_0 () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return gw.api.web.dashboard.ui.claims.LossRatioHelper.forAccount(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Summary.pcf: line 21, column 86
    function initialValue_1 () : gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Summary.pcf: line 26, column 68
    function initialValue_2 () : gw.api.web.dashboard.ui.billing.BillingSummaryHelper {
      return new gw.api.web.dashboard.ui.billing.BillingSummaryHelper(account)
    }
    
    // 'label' attribute on AlertBar (id=LossRatioAlert) at AccountFile_Summary.pcf: line 32, column 57
    function label_4 () : java.lang.Object {
      return lossRatioHelper.ErrorMessage
    }
    
    // Page (id=AccountFile_Summary) at AccountFile_Summary.pcf: line 8, column 103
    static function parent_43 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'title' attribute on Page (id=AccountFile_Summary) at AccountFile_Summary.pcf: line 8, column 103
    static function title_44 (account :  Account) : java.lang.Object {
      return DisplayKey.get('Web.AccountFile.Overview.Title', account.AccountHolderContactNameAndNick)
    }
    
    // 'visible' attribute on TileRef (id=CurrentPoliciesTileLV) at AccountFile_Summary.pcf: line 49, column 52
    function visible_12 () : java.lang.Boolean {
      return permissions.CurrentPolicies
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 52, column 59
    function visible_15 () : java.lang.Boolean {
      return permissions.OpenPolicyTransactions
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 55, column 43
    function visible_18 () : java.lang.Boolean {
      return permissions.Claims
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 60, column 51
    function visible_21 () : java.lang.Boolean {
      return permissions.AccountSummary
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 63, column 51
    function visible_24 () : java.lang.Boolean {
      return permissions.BillingSummary
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 66, column 44
    function visible_27 () : java.lang.Boolean {
      return permissions.Contact
    }
    
    // 'visible' attribute on AlertBar (id=LossRatioAlert) at AccountFile_Summary.pcf: line 32, column 57
    function visible_3 () : java.lang.Boolean {
      return lossRatioHelper.ErrorMessage != null
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 72, column 46
    function visible_33 () : java.lang.Boolean {
      return permissions.Locations
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 75, column 52
    function visible_36 () : java.lang.Boolean {
      return permissions.RelatedAccounts
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 78, column 57
    function visible_39 () : java.lang.Boolean {
      return permissions.canSeeNotes(account)
    }
    
    // 'visible' attribute on AlertBar (id=MultipleCurrenciesWarning) at AccountFile_Summary.pcf: line 36, column 122
    function visible_5 () : java.lang.Boolean {
      return billingSummaryHelper.HasNoErrors and billingSummaryHelper.BillingSummary.AggregatedMultipleCurrencies
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 42, column 51
    function visible_6 () : java.lang.Boolean {
      return permissions.AccountDetails
    }
    
    // 'visible' attribute on TileRef at AccountFile_Summary.pcf: line 45, column 61
    function visible_9 () : java.lang.Boolean {
      return permissions.CurrentAccountActivities
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Summary {
      return super.CurrentLocation as pcf.AccountFile_Summary
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get billingSummaryHelper () : gw.api.web.dashboard.ui.billing.BillingSummaryHelper {
      return getVariableValue("billingSummaryHelper", 0) as gw.api.web.dashboard.ui.billing.BillingSummaryHelper
    }
    
    property set billingSummaryHelper ($arg :  gw.api.web.dashboard.ui.billing.BillingSummaryHelper) {
      setVariableValue("billingSummaryHelper", 0, $arg)
    }
    
    property get lossRatioHelper () : gw.api.web.dashboard.ui.claims.LossRatioHelper {
      return getVariableValue("lossRatioHelper", 0) as gw.api.web.dashboard.ui.claims.LossRatioHelper
    }
    
    property set lossRatioHelper ($arg :  gw.api.web.dashboard.ui.claims.LossRatioHelper) {
      setVariableValue("lossRatioHelper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    
  }
  
  
}