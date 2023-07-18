package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyClaimsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyClaimsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyClaimsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyClaimsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claimHelper :  gw.api.web.dashboard.ui.claims.ClaimHelper) : int {
      return 0
    }
    
    // 'def' attribute on RowSetRef at PolicyClaimsPopup.pcf: line 16, column 50
    function def_onEnter_0 (def :  pcf.PolicyClaimsRowSet) : void {
      def.onEnter(claimHelper)
    }
    
    // 'def' attribute on RowSetRef at PolicyClaimsPopup.pcf: line 16, column 50
    function def_refreshVariables_1 (def :  pcf.PolicyClaimsRowSet) : void {
      def.refreshVariables(claimHelper)
    }
    
    override property get CurrentLocation () : pcf.PolicyClaimsPopup {
      return super.CurrentLocation as pcf.PolicyClaimsPopup
    }
    
    property get claimHelper () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return getVariableValue("claimHelper", 0) as gw.api.web.dashboard.ui.claims.ClaimHelper
    }
    
    property set claimHelper ($arg :  gw.api.web.dashboard.ui.claims.ClaimHelper) {
      setVariableValue("claimHelper", 0, $arg)
    }
    
    
  }
  
  
}