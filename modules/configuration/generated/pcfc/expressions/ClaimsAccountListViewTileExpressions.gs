package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/ClaimsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimsAccountListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/ClaimsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimsAccountListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ClaimsAccountListViewTile) at ClaimsAccountListViewTile.pcf: line 11, column 51
    function action_41 () : void {
      claimHelper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at ClaimsAccountListViewTile.pcf: line 18, column 58
    function initialValue_39 () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return gw.api.web.dashboard.ui.claims.ClaimHelper.forAccount(account)
    }
    
    // 'sortBy' attribute on IteratorSort at ClaimsAccountListViewTile.pcf: line 26, column 24
    function sortBy_0 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Status
    }
    
    // 'sortBy' attribute on IteratorSort at ClaimsAccountListViewTile.pcf: line 29, column 24
    function sortBy_1 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsAccountListViewTile.pcf: line 37, column 25
    function sortValue_2 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsAccountListViewTile.pcf: line 42, column 25
    function sortValue_3 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsAccountListViewTile.pcf: line 47, column 25
    function sortValue_4 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at ClaimsAccountListViewTile.pcf: line 52, column 36
    function sortValue_5 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossCause
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ClaimsAccountListViewTile.pcf: line 57, column 34
    function sortValue_6 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Product
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimsAccountListViewTile.pcf: line 63, column 25
    function sortValue_7 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.PolicyNumber
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsAccountListViewTile.pcf: line 69, column 29
    function sortValue_8 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=Adjuster_Cell) at ClaimsAccountListViewTile.pcf: line 74, column 63
    function sortValue_9 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claimHelper.formatAdjuster(claim.Adjuster)
    }
    
    // 'value' attribute on RowIterator at ClaimsAccountListViewTile.pcf: line 23, column 63
    function value_38 () : gw.api.web.dashboard.data.claims.ClaimDTO[] {
      return claimHelper.Claims
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=ClaimsAccountListViewTile) at ClaimsAccountListViewTile.pcf: line 11, column 51
    function visible_40 () : java.lang.Boolean {
      return claimHelper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get claimHelper () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return getVariableValue("claimHelper", 0) as gw.api.web.dashboard.ui.claims.ClaimHelper
    }
    
    property set claimHelper ($arg :  gw.api.web.dashboard.ui.claims.ClaimHelper) {
      setVariableValue("claimHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/ClaimsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimsAccountListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsAccountListViewTile.pcf: line 37, column 25
    function action_11 () : void {
      claimHelper.viewInClaimSystem(claim)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ClaimsAccountListViewTile.pcf: line 63, column 25
    function action_28 () : void {
      PolicyFileForward.go(claim.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ClaimsAccountListViewTile.pcf: line 63, column 25
    function action_dest_29 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(claim.PolicyNumber)
    }
    
    // 'available' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsAccountListViewTile.pcf: line 37, column 25
    function available_10 () : java.lang.Boolean {
      return claimHelper.isViewInClaimSystemLinkAvailable(claim)
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsAccountListViewTile.pcf: line 37, column 25
    function valueRoot_13 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimsAccountListViewTile.pcf: line 37, column 25
    function value_12 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsAccountListViewTile.pcf: line 42, column 25
    function value_16 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsAccountListViewTile.pcf: line 47, column 25
    function value_19 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at ClaimsAccountListViewTile.pcf: line 52, column 36
    function value_22 () : java.lang.String {
      return claim.LossCause
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ClaimsAccountListViewTile.pcf: line 57, column 34
    function value_25 () : java.lang.String {
      return claim.Product
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimsAccountListViewTile.pcf: line 63, column 25
    function value_30 () : java.lang.String {
      return claim.PolicyNumber
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsAccountListViewTile.pcf: line 69, column 29
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=Adjuster_Cell) at ClaimsAccountListViewTile.pcf: line 74, column 63
    function value_36 () : java.lang.String {
      return claimHelper.formatAdjuster(claim.Adjuster)
    }
    
    property get claim () : gw.api.web.dashboard.data.claims.ClaimDTO {
      return getIteratedValue(1) as gw.api.web.dashboard.data.claims.ClaimDTO
    }
    
    
  }
  
  
}