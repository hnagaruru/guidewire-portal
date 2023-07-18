package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRoleDetailsCVExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyContactRoleDetailsCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_11 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborClient) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_13 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborContractor) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_15 (def :  pcf.PolicyContactRolePanelSet_PolicyOwnerOfficer) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_17 (def :  pcf.PolicyContactRolePanelSet_PolicyPriNamedInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_19 (def :  pcf.PolicyContactRolePanelSet_default) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_3 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_5 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInterest) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_7 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlNamedInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_onEnter_9 (def :  pcf.PolicyContactRolePanelSet_PolicyDriver) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_10 (def :  pcf.PolicyContactRolePanelSet_PolicyDriver) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_12 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborClient) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_14 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborContractor) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_16 (def :  pcf.PolicyContactRolePanelSet_PolicyOwnerOfficer) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_18 (def :  pcf.PolicyContactRolePanelSet_PolicyPriNamedInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_20 (def :  pcf.PolicyContactRolePanelSet_default) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_4 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_6 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInterest) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function def_refreshVariables_8 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlNamedInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'mode' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 34, column 52
    function mode_21 () : java.lang.Object {
      return currentPolicyContactRole.Subtype
    }
    
    property get currentPolicyContactRole () : entity.PolicyContactRole {
      return getIteratedValue(1) as entity.PolicyContactRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRoleDetailsCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 17, column 78
    function def_onEnter_0 (def :  pcf.PolicyContactDetailsDV) : void {
      def.onEnter(policyContactRole, openForEditOverride)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 41, column 167
    function def_onEnter_23 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(policyContactRole.AccountContactRole.AccountContact.Contact,false,policyContactRole.Branch.Policy.Account, policyContactRole.Branch)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 17, column 78
    function def_refreshVariables_1 (def :  pcf.PolicyContactDetailsDV) : void {
      def.refreshVariables(policyContactRole, openForEditOverride)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRoleDetailsCV.pcf: line 41, column 167
    function def_refreshVariables_24 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(policyContactRole.AccountContactRole.AccountContact.Contact,false,policyContactRole.Branch.Policy.Account, policyContactRole.Branch)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyContactRoleDetailsCV.pcf: line 31, column 26
    function sortBy_2 (currentPolicyContactRole :  entity.PolicyContactRole) : java.lang.Object {
      return currentPolicyContactRole.Subtype.DisplayName
    }
    
    // 'value' attribute on PanelIterator (id=PolicyContactRoleIterator) at PolicyContactRoleDetailsCV.pcf: line 28, column 48
    function value_22 () : entity.PolicyContactRole[] {
      return policyContactRole.Branch.PolicyContactRoles.where(\ pcr -> pcr.AccountContactRole.AccountContact == policyContactRole.AccountContactRole.AccountContact)
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