package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/ClaimsPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimsPolicyListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/ClaimsPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimsPolicyListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ClaimsPolicyListViewTile) at ClaimsPolicyListViewTile.pcf: line 11, column 51
    function action_35 () : void {
      claimHelper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at ClaimsPolicyListViewTile.pcf: line 18, column 58
    function initialValue_33 () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return gw.api.web.dashboard.ui.claims.ClaimHelper.forPolicy(policyPeriod.Policy)
    }
    
    // 'sortBy' attribute on IteratorSort at ClaimsPolicyListViewTile.pcf: line 26, column 24
    function sortBy_0 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Status
    }
    
    // 'sortBy' attribute on IteratorSort at ClaimsPolicyListViewTile.pcf: line 29, column 24
    function sortBy_1 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 37, column 25
    function sortValue_2 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsPolicyListViewTile.pcf: line 42, column 25
    function sortValue_3 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsPolicyListViewTile.pcf: line 48, column 25
    function sortValue_4 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at ClaimsPolicyListViewTile.pcf: line 53, column 36
    function sortValue_5 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossCause
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsPolicyListViewTile.pcf: line 59, column 29
    function sortValue_6 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimsPolicyListViewTile.pcf: line 64, column 38
    function sortValue_7 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Description
    }
    
    // 'value' attribute on TextCell (id=Adjuster_Cell) at ClaimsPolicyListViewTile.pcf: line 69, column 63
    function sortValue_8 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claimHelper.formatAdjuster(claim.Adjuster)
    }
    
    // 'value' attribute on RowIterator at ClaimsPolicyListViewTile.pcf: line 23, column 63
    function value_32 () : gw.api.web.dashboard.data.claims.ClaimDTO[] {
      return claimHelper.Claims
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=ClaimsPolicyListViewTile) at ClaimsPolicyListViewTile.pcf: line 11, column 51
    function visible_34 () : java.lang.Boolean {
      return claimHelper.ViewMoreVisible
    }
    
    property get claimHelper () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return getVariableValue("claimHelper", 0) as gw.api.web.dashboard.ui.claims.ClaimHelper
    }
    
    property set claimHelper ($arg :  gw.api.web.dashboard.ui.claims.ClaimHelper) {
      setVariableValue("claimHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/ClaimsPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimsPolicyListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 37, column 25
    function action_10 () : void {
      claimHelper.viewInClaimSystem(claim)
    }
    
    // 'available' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 37, column 25
    function available_9 () : java.lang.Boolean {
      return claimHelper.isViewInClaimSystemLinkAvailable(claim)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 37, column 25
    function valueRoot_12 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 37, column 25
    function value_11 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsPolicyListViewTile.pcf: line 42, column 25
    function value_15 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsPolicyListViewTile.pcf: line 48, column 25
    function value_18 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at ClaimsPolicyListViewTile.pcf: line 53, column 36
    function value_21 () : java.lang.String {
      return claim.LossCause
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsPolicyListViewTile.pcf: line 59, column 29
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimsPolicyListViewTile.pcf: line 64, column 38
    function value_27 () : java.lang.String {
      return claim.Description
    }
    
    // 'value' attribute on TextCell (id=Adjuster_Cell) at ClaimsPolicyListViewTile.pcf: line 69, column 63
    function value_30 () : java.lang.String {
      return claimHelper.formatAdjuster(claim.Adjuster)
    }
    
    property get claim () : gw.api.web.dashboard.data.claims.ClaimDTO {
      return getIteratedValue(1) as gw.api.web.dashboard.data.claims.ClaimDTO
    }
    
    
  }
  
  
}