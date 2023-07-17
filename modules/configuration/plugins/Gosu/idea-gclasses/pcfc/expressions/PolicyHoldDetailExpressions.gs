package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyHold :  PolicyHold) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=PolicyHoldDetail) at PolicyHoldDetail.pcf: line 11, column 103
    function beforeCommit_2 (pickedValue :  java.lang.Object) : void {
      gw.admin.PolicyHoldValidation.validatePolicyHold(policyHold)
    }
    
    // 'canEdit' attribute on Page (id=PolicyHoldDetail) at PolicyHoldDetail.pcf: line 11, column 103
    function canEdit_3 () : java.lang.Boolean {
      return perm.System.polholdedit
    }
    
    // 'def' attribute on ScreenRef at PolicyHoldDetail.pcf: line 18, column 56
    function def_onEnter_0 (def :  pcf.PolicyHoldDetailScreen) : void {
      def.onEnter(policyHold, false)
    }
    
    // 'def' attribute on ScreenRef at PolicyHoldDetail.pcf: line 18, column 56
    function def_refreshVariables_1 (def :  pcf.PolicyHoldDetailScreen) : void {
      def.refreshVariables(policyHold, false)
    }
    
    // 'parent' attribute on Page (id=PolicyHoldDetail) at PolicyHoldDetail.pcf: line 11, column 103
    static function parent_4 (policyHold :  PolicyHold) : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    // 'title' attribute on Page (id=PolicyHoldDetail) at PolicyHoldDetail.pcf: line 11, column 103
    static function title_5 (policyHold :  PolicyHold) : java.lang.Object {
      return DisplayKey.get("Web.Admin.PolicyHold.PolicyHoldDetail", policyHold.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.PolicyHoldDetail {
      return super.CurrentLocation as pcf.PolicyHoldDetail
    }
    
    property get policyHold () : PolicyHold {
      return getVariableValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setVariableValue("policyHold", 0, $arg)
    }
    
    
  }
  
  
}