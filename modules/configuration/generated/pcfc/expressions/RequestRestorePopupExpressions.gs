package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/archive/RequestRestorePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RequestRestorePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/archive/RequestRestorePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RequestRestorePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyTerm :  PolicyTerm) : int {
      return 0
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonText_Input) at RequestRestorePopup.pcf: line 33, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      restoreRequest.Reason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RequestRestorePopup.pcf: line 18, column 40
    function initialValue_0 () : PolicyTermRestoreRequest {
      return policyTerm.createRestoreRequest(gw.plugin.util.CurrentUserUtil.getCurrentUser().getUser(), "", true)
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonText_Input) at RequestRestorePopup.pcf: line 33, column 46
    function valueRoot_3 () : java.lang.Object {
      return restoreRequest
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonText_Input) at RequestRestorePopup.pcf: line 33, column 46
    function value_1 () : java.lang.String {
      return restoreRequest.Reason
    }
    
    // 'visible' attribute on DetailViewPanel at RequestRestorePopup.pcf: line 26, column 58
    function visible_5 () : java.lang.Boolean {
      return perm.PolicyPeriod.restorefromarchive
    }
    
    override property get CurrentLocation () : pcf.RequestRestorePopup {
      return super.CurrentLocation as pcf.RequestRestorePopup
    }
    
    property get policyTerm () : PolicyTerm {
      return getVariableValue("policyTerm", 0) as PolicyTerm
    }
    
    property set policyTerm ($arg :  PolicyTerm) {
      setVariableValue("policyTerm", 0, $arg)
    }
    
    property get restoreRequest () : PolicyTermRestoreRequest {
      return getVariableValue("restoreRequest", 0) as PolicyTermRestoreRequest
    }
    
    property set restoreRequest ($arg :  PolicyTermRestoreRequest) {
      setVariableValue("restoreRequest", 0, $arg)
    }
    
    
  }
  
  
}