package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewPolicyContactRoleDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPolicyContactRoleDetailsCVExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewPolicyContactRoleDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPolicyContactRoleDetailsCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at NewPolicyContactRoleDetailsCV.pcf: line 17, column 78
    function def_onEnter_0 (def :  pcf.PolicyContactDetailsDV) : void {
      def.onEnter(policyContactRole, openForEditOverride)
    }
    
    // 'def' attribute on PanelRef at NewPolicyContactRoleDetailsCV.pcf: line 17, column 78
    function def_refreshVariables_1 (def :  pcf.PolicyContactDetailsDV) : void {
      def.refreshVariables(policyContactRole, openForEditOverride)
    }
    
    property get openForEditOverride () : boolean {
      return getRequireValue("openForEditOverride", 0) as java.lang.Boolean
    }
    
    property set openForEditOverride ($arg :  boolean) {
      setRequireValue("openForEditOverride", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    
  }
  
  
}