package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_ContactsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_ContactsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_ContactsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 70, column 69
    function def_onEnter_21 (def :  pcf.PolicyContactDetailsDV) : void {
      def.onEnter(policyContactRole, false)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 92, column 118
    function def_onEnter_44 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(selectedAccountContact.Contact,false,policyPeriod.Policy.Account, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 70, column 69
    function def_refreshVariables_22 (def :  pcf.PolicyContactDetailsDV) : void {
      def.refreshVariables(policyContactRole, false)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 92, column 118
    function def_refreshVariables_45 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(selectedAccountContact.Contact,false,policyPeriod.Policy.Account, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at Policy_ContactsScreen.pcf: line 65, column 44
    function initialValue_20 () : entity.PolicyContactRole {
      return acctContactRoleMap.get(selectedAccountContact) == null ? null : acctContactRoleMap.get(selectedAccountContact).first()
    }
    
    // 'sortBy' attribute on IteratorSort at Policy_ContactsScreen.pcf: line 82, column 30
    function sortBy_23 (currentPolicyContactRole :  entity.PolicyContactRole) : java.lang.Object {
      return currentPolicyContactRole.Subtype.DisplayName
    }
    
    // 'value' attribute on PanelIterator (id=PolicyContactRoleIterator) at Policy_ContactsScreen.pcf: line 79, column 52
    function value_43 () : entity.PolicyContactRole[] {
      return policyContactRole.Branch.PolicyContactRoles.where(\ pcr -> pcr.AccountContactRole.AccountContact == policyContactRole.AccountContactRole.AccountContact)
    }
    
    property get policyContactRole () : entity.PolicyContactRole {
      return getVariableValue("policyContactRole", 2) as entity.PolicyContactRole
    }
    
    property set policyContactRole ($arg :  entity.PolicyContactRole) {
      setVariableValue("policyContactRole", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_ContactsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=GoToContactButton) at Policy_ContactsScreen.pcf: line 55, column 88
    function action_17 () : void {
      ContactForward.go(accountContact.Contact)
    }
    
    // 'action' attribute on Link (id=GoToContactButton) at Policy_ContactsScreen.pcf: line 55, column 88
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(accountContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at Policy_ContactsScreen.pcf: line 41, column 65
    function valueRoot_12 () : java.lang.Object {
      return accountContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at Policy_ContactsScreen.pcf: line 33, column 83
    function valueRoot_7 () : java.lang.Object {
      return acctContactRoleMap.get(accountContact).first()
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at Policy_ContactsScreen.pcf: line 41, column 65
    function value_11 () : java.lang.String {
      return accountContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at Policy_ContactsScreen.pcf: line 45, column 61
    function value_14 () : java.lang.String {
      return accountContact.Contact.EmailAddress1
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at Policy_ContactsScreen.pcf: line 33, column 83
    function value_6 () : java.lang.String {
      return acctContactRoleMap.get(accountContact).first().DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at Policy_ContactsScreen.pcf: line 37, column 133
    function value_9 () : java.lang.String {
      return acctContactRoleMap.get(accountContact).map( \ p -> (typeof p).TypeInfo.DisplayName ).join(", ")
    }
    
    property get accountContact () : entity.AccountContact {
      return getIteratedValue(2) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_ContactsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends Policy_ContactsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at Policy_ContactsScreen.pcf: line 28, column 28
    function sortBy_1 (accountContact :  entity.AccountContact) : java.lang.Object {
      return accountContact.Contact.Name
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at Policy_ContactsScreen.pcf: line 33, column 83
    function sortValue_2 (accountContact :  entity.AccountContact) : java.lang.Object {
      return acctContactRoleMap.get(accountContact).first().DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at Policy_ContactsScreen.pcf: line 37, column 133
    function sortValue_3 (accountContact :  entity.AccountContact) : java.lang.Object {
      return acctContactRoleMap.get(accountContact).map( \ p -> (typeof p).TypeInfo.DisplayName ).join(", ")
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at Policy_ContactsScreen.pcf: line 41, column 65
    function sortValue_4 (accountContact :  entity.AccountContact) : java.lang.Object {
      return accountContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at Policy_ContactsScreen.pcf: line 45, column 61
    function sortValue_5 (accountContact :  entity.AccountContact) : java.lang.Object {
      return accountContact.Contact.EmailAddress1
    }
    
    // 'value' attribute on RowIterator at Policy_ContactsScreen.pcf: line 25, column 47
    function value_19 () : entity.AccountContact[] {
      return acctContactRoleMap.keySet().toTypedArray()
    }
    
    property get selectedAccountContact () : AccountContact {
      return getCurrentSelection(1) as AccountContact
    }
    
    property set selectedAccountContact ($arg :  AccountContact) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_ContactsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_24 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_26 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInterest) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_28 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlNamedInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_30 (def :  pcf.PolicyContactRolePanelSet_PolicyDriver) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_32 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborClient) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_34 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborContractor) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_36 (def :  pcf.PolicyContactRolePanelSet_PolicyOwnerOfficer) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_38 (def :  pcf.PolicyContactRolePanelSet_PolicyPriNamedInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_onEnter_40 (def :  pcf.PolicyContactRolePanelSet_default) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_25 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_27 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInterest) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_29 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlNamedInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_31 (def :  pcf.PolicyContactRolePanelSet_PolicyDriver) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_33 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborClient) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_35 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborContractor) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_37 (def :  pcf.PolicyContactRolePanelSet_PolicyOwnerOfficer) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_39 (def :  pcf.PolicyContactRolePanelSet_PolicyPriNamedInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function def_refreshVariables_41 (def :  pcf.PolicyContactRolePanelSet_default) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'mode' attribute on PanelRef at Policy_ContactsScreen.pcf: line 85, column 56
    function mode_42 () : java.lang.Object {
      return currentPolicyContactRole.Subtype
    }
    
    property get currentPolicyContactRole () : entity.PolicyContactRole {
      return getIteratedValue(3) as entity.PolicyContactRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_ContactsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_ContactsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at Policy_ContactsScreen.pcf: line 13, column 106
    function initialValue_0 () : java.util.Map<entity.AccountContact, java.util.List<entity.PolicyContactRole>> {
      return policyPeriod.AccountContactRoleMap
    }
    
    property get acctContactRoleMap () : java.util.Map<entity.AccountContact, java.util.List<entity.PolicyContactRole>> {
      return getVariableValue("acctContactRoleMap", 0) as java.util.Map<entity.AccountContact, java.util.List<entity.PolicyContactRole>>
    }
    
    property set acctContactRoleMap ($arg :  java.util.Map<entity.AccountContact, java.util.List<entity.PolicyContactRole>>) {
      setVariableValue("acctContactRoleMap", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}