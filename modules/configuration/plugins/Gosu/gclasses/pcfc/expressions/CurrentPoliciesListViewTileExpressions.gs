package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/overview/CurrentPoliciesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentPoliciesListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/CurrentPoliciesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentPoliciesListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentPoliciesListViewTile) at CurrentPoliciesListViewTile.pcf: line 11, column 61
    function action_40 () : void {
      currentPoliciesHelper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at CurrentPoliciesListViewTile.pcf: line 18, column 66
    function initialValue_37 () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return gw.api.web.dashboard.ui.policy.CurrentPolicyHelper.forContact(contact)
    }
    
    // 'initialValue' attribute on Variable at CurrentPoliciesListViewTile.pcf: line 22, column 91
    function initialValue_38 () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions.Instance
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentPoliciesListViewTile.pcf: line 31, column 24
    function sortBy_0 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 39, column 25
    function sortValue_1 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPoliciesListViewTile.pcf: line 45, column 52
    function sortValue_2 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CurrentPoliciesListViewTile.pcf: line 51, column 25
    function sortValue_3 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CurrentPoliciesListViewTile.pcf: line 56, column 25
    function sortValue_4 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at CurrentPoliciesListViewTile.pcf: line 61, column 25
    function sortValue_5 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.Policy.findCoverageEndDate()
    }
    
    // 'value' attribute on RowIterator at CurrentPoliciesListViewTile.pcf: line 27, column 41
    function value_36 () : entity.PolicyPeriod[] {
      return currentPoliciesHelper.PolicyPeriods
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=CurrentPoliciesListViewTile) at CurrentPoliciesListViewTile.pcf: line 11, column 61
    function visible_39 () : java.lang.Boolean {
      return currentPoliciesHelper.ViewMoreVisible
    }
    
    // 'visible' attribute on ButtonCell (id=FileClaim_Cell) at CurrentPoliciesListViewTile.pcf: line 86, column 25
    function visible_6 () : java.lang.Boolean {
      return currentPoliciesHelper.CanFileClaim and permissions.ViewInClaimCenter
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get currentPoliciesHelper () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return getVariableValue("currentPoliciesHelper", 0) as gw.api.web.dashboard.ui.policy.CurrentPolicyHelper
    }
    
    property set currentPoliciesHelper ($arg :  gw.api.web.dashboard.ui.policy.CurrentPolicyHelper) {
      setVariableValue("currentPoliciesHelper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/CurrentPoliciesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentPoliciesListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyCancel) at CurrentPoliciesListViewTile.pcf: line 72, column 66
    function action_24 () : void {
      StartCancellation.go(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyRenew) at CurrentPoliciesListViewTile.pcf: line 78, column 65
    function action_27 () : void {
      currentPoliciesHelper.startRenewal(policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on ButtonCell (id=PolicyActions_Cell) at CurrentPoliciesListViewTile.pcf: line 67, column 24
    function action_29 () : void {
      StartPolicyChange.go(policyPeriod)
    }
    
    // 'action' attribute on ButtonCell (id=FileClaim_Cell) at CurrentPoliciesListViewTile.pcf: line 86, column 25
    function action_33 () : void {
      currentPoliciesHelper.fileClaim(policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 39, column 25
    function action_7 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber, policyPeriod.PeriodStart)
    }
    
    // 'action' attribute on MenuItem (id=PolicyCancel) at CurrentPoliciesListViewTile.pcf: line 72, column 66
    function action_dest_25 () : pcf.api.Destination {
      return pcf.StartCancellation.createDestination(policyPeriod)
    }
    
    // 'action' attribute on ButtonCell (id=PolicyActions_Cell) at CurrentPoliciesListViewTile.pcf: line 67, column 24
    function action_dest_30 () : pcf.api.Destination {
      return pcf.StartPolicyChange.createDestination(policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 39, column 25
    function action_dest_8 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber, policyPeriod.PeriodStart)
    }
    
    // 'available' attribute on ButtonCell (id=PolicyActions_Cell) at CurrentPoliciesListViewTile.pcf: line 67, column 24
    function available_28 () : java.lang.Boolean {
      return policyPeriod.Policy.Issued and permissions.canChangePolicy(policyPeriod)
    }
    
    // 'available' attribute on ButtonCell (id=FileClaim_Cell) at CurrentPoliciesListViewTile.pcf: line 86, column 25
    function available_32 () : java.lang.Boolean {
      return currentPoliciesHelper.CanFileClaim and permissions.ViewInClaimCenter
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 39, column 25
    function valueRoot_10 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPoliciesListViewTile.pcf: line 45, column 52
    function valueRoot_13 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPoliciesListViewTile.pcf: line 45, column 52
    function value_12 () : gw.api.productmodel.Product {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CurrentPoliciesListViewTile.pcf: line 51, column 25
    function value_15 () : java.lang.String {
      return policyPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CurrentPoliciesListViewTile.pcf: line 56, column 25
    function value_18 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at CurrentPoliciesListViewTile.pcf: line 61, column 25
    function value_21 () : java.util.Date {
      return policyPeriod.Policy.findCoverageEndDate()
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 39, column 25
    function value_9 () : String {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'visible' attribute on MenuItem (id=PolicyCancel) at CurrentPoliciesListViewTile.pcf: line 72, column 66
    function visible_23 () : java.lang.Boolean {
      return permissions.canCancelPolicy(policyPeriod)
    }
    
    // 'visible' attribute on MenuItem (id=PolicyRenew) at CurrentPoliciesListViewTile.pcf: line 78, column 65
    function visible_26 () : java.lang.Boolean {
      return permissions.canRenewPolicy(policyPeriod)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}