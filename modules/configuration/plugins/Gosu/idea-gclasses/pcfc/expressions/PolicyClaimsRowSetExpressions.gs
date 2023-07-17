package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyClaimsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyClaimsRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyClaimsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyClaimsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at PolicyClaimsRowSet.pcf: line 21, column 38
    function action_7 () : void {
      claimHelper.viewInClaimSystem(claim)
    }
    
    // 'available' attribute on TextCell (id=Number_Cell) at PolicyClaimsRowSet.pcf: line 21, column 38
    function available_6 () : java.lang.Boolean {
      return claimHelper.isViewInClaimSystemLinkAvailable(claim)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at PolicyClaimsRowSet.pcf: line 21, column 38
    function valueRoot_9 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at PolicyClaimsRowSet.pcf: line 25, column 33
    function value_12 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at PolicyClaimsRowSet.pcf: line 30, column 35
    function value_15 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at PolicyClaimsRowSet.pcf: line 34, column 36
    function value_18 () : java.lang.String {
      return claim.LossCause
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at PolicyClaimsRowSet.pcf: line 38, column 40
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyClaimsRowSet.pcf: line 42, column 38
    function value_24 () : java.lang.String {
      return claim.Description
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at PolicyClaimsRowSet.pcf: line 21, column 38
    function value_8 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    property get claim () : gw.api.web.dashboard.data.claims.ClaimDTO {
      return getIteratedValue(1) as gw.api.web.dashboard.data.claims.ClaimDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyClaimsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyClaimsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at PolicyClaimsRowSet.pcf: line 21, column 38
    function sortValue_0 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at PolicyClaimsRowSet.pcf: line 25, column 33
    function sortValue_1 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at PolicyClaimsRowSet.pcf: line 30, column 35
    function sortValue_2 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at PolicyClaimsRowSet.pcf: line 34, column 36
    function sortValue_3 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossCause
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at PolicyClaimsRowSet.pcf: line 38, column 40
    function sortValue_4 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyClaimsRowSet.pcf: line 42, column 38
    function sortValue_5 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.Description
    }
    
    // 'value' attribute on RowIterator at PolicyClaimsRowSet.pcf: line 14, column 63
    function value_27 () : gw.api.web.dashboard.data.claims.ClaimDTO[] {
      return claimHelper.Claims
    }
    
    property get claimHelper () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return getRequireValue("claimHelper", 0) as gw.api.web.dashboard.ui.claims.ClaimHelper
    }
    
    property set claimHelper ($arg :  gw.api.web.dashboard.ui.claims.ClaimHelper) {
      setRequireValue("claimHelper", 0, $arg)
    }
    
    
  }
  
  
}