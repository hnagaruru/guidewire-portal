package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Summary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFile_SummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Summary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFile_SummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ContactFile_Summary) at ContactFile_Summary.pcf: line 8, column 95
    static function canVisit_24 (contact :  Contact) : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions.Instance.canVisitDashboard(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 39, column 59
    function def_onEnter_10 (def :  pcf.OpenPolicyTransactionsListViewTile) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 42, column 43
    function def_onEnter_13 (def :  pcf.ClaimsListViewTile) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 47, column 52
    function def_onEnter_16 (def :  pcf.AccountHolderOverviewDetailViewTile) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 50, column 51
    function def_onEnter_19 (def :  pcf.BillingSummaryChartTile) : void {
      def.onEnter(billingSummaryHelper)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 53, column 42
    function def_onEnter_22 (def :  pcf.NotesDetailViewTile) : void {
      def.onEnter(gw.api.web.dashboard.ui.note.NoteHelper.forContact(contact))
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 33, column 50
    function def_onEnter_4 (def :  pcf.ContactDetailsDetailViewTile) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 36, column 52
    function def_onEnter_7 (def :  pcf.CurrentPoliciesListViewTile) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 39, column 59
    function def_refreshVariables_11 (def :  pcf.OpenPolicyTransactionsListViewTile) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 42, column 43
    function def_refreshVariables_14 (def :  pcf.ClaimsListViewTile) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 47, column 52
    function def_refreshVariables_17 (def :  pcf.AccountHolderOverviewDetailViewTile) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 50, column 51
    function def_refreshVariables_20 (def :  pcf.BillingSummaryChartTile) : void {
      def.refreshVariables(billingSummaryHelper)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 53, column 42
    function def_refreshVariables_23 (def :  pcf.NotesDetailViewTile) : void {
      def.refreshVariables(gw.api.web.dashboard.ui.note.NoteHelper.forContact(contact))
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 33, column 50
    function def_refreshVariables_5 (def :  pcf.ContactDetailsDetailViewTile) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on TileRef at ContactFile_Summary.pcf: line 36, column 52
    function def_refreshVariables_8 (def :  pcf.CurrentPoliciesListViewTile) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Summary.pcf: line 17, column 91
    function initialValue_0 () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions.Instance
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Summary.pcf: line 22, column 68
    function initialValue_1 () : gw.api.web.dashboard.ui.billing.BillingSummaryHelper {
      return new gw.api.web.dashboard.ui.billing.BillingSummaryHelper(contact)
    }
    
    // Page (id=ContactFile_Summary) at ContactFile_Summary.pcf: line 8, column 95
    static function parent_25 (contact :  Contact) : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    // 'title' attribute on Page (id=ContactFile_Summary) at ContactFile_Summary.pcf: line 8, column 95
    static function title_26 (contact :  Contact) : java.lang.Object {
      return DisplayKey.get('Web.ContactFile.AccountHolderSummary.Title', contact.DisplayName)
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 42, column 43
    function visible_12 () : java.lang.Boolean {
      return permissions.Claims
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 47, column 52
    function visible_15 () : java.lang.Boolean {
      return permissions.CustomerSummary
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 50, column 51
    function visible_18 () : java.lang.Boolean {
      return permissions.BillingSummary
    }
    
    // 'visible' attribute on AlertBar (id=MultipleCurrenciesWarning) at ContactFile_Summary.pcf: line 27, column 122
    function visible_2 () : java.lang.Boolean {
      return billingSummaryHelper.HasNoErrors and billingSummaryHelper.BillingSummary.AggregatedMultipleCurrencies
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 53, column 42
    function visible_21 () : java.lang.Boolean {
      return permissions.Notes
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 33, column 50
    function visible_3 () : java.lang.Boolean {
      return permissions.ContactDetail
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 36, column 52
    function visible_6 () : java.lang.Boolean {
      return permissions.CurrentPolicies
    }
    
    // 'visible' attribute on TileRef at ContactFile_Summary.pcf: line 39, column 59
    function visible_9 () : java.lang.Boolean {
      return permissions.OpenPolicyTransactions
    }
    
    override property get CurrentLocation () : pcf.ContactFile_Summary {
      return super.CurrentLocation as pcf.ContactFile_Summary
    }
    
    property get billingSummaryHelper () : gw.api.web.dashboard.ui.billing.BillingSummaryHelper {
      return getVariableValue("billingSummaryHelper", 0) as gw.api.web.dashboard.ui.billing.BillingSummaryHelper
    }
    
    property set billingSummaryHelper ($arg :  gw.api.web.dashboard.ui.billing.BillingSummaryHelper) {
      setVariableValue("billingSummaryHelper", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    
  }
  
  
}