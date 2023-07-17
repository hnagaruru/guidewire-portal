package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactCVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 27, column 29
    function def_onEnter_2 (def :  pcf.AccountContactDV) : void {
      def.onEnter(acctContact.Contact, acctContact.Account)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 111, column 99
    function def_onEnter_30 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(acctContact.Contact, showAddressTools, acctContact.Account, null)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 121, column 62
    function def_onEnter_32 (def :  pcf.AccountFile_Contacts_WorkOrdersLV) : void {
      def.onEnter(acctContact)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 132, column 60
    function def_onEnter_34 (def :  pcf.AccountFile_Contacts_PoliciesLV) : void {
      def.onEnter(acctContact)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 27, column 29
    function def_refreshVariables_3 (def :  pcf.AccountContactDV) : void {
      def.refreshVariables(acctContact.Contact, acctContact.Account)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 111, column 99
    function def_refreshVariables_31 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(acctContact.Contact, showAddressTools, acctContact.Account, null)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 121, column 62
    function def_refreshVariables_33 (def :  pcf.AccountFile_Contacts_WorkOrdersLV) : void {
      def.refreshVariables(acctContact)
    }
    
    // 'def' attribute on PanelRef at AccountContactCV.pcf: line 132, column 60
    function def_refreshVariables_35 (def :  pcf.AccountFile_Contacts_PoliciesLV) : void {
      def.refreshVariables(acctContact)
    }
    
    // 'initialValue' attribute on Variable at AccountContactCV.pcf: line 19, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'sortBy' attribute on IteratorSort at AccountContactCV.pcf: line 88, column 34
    function sortBy_10 (acctContactRole :  entity.AccountContactRole) : java.lang.Object {
      return (typeof acctContactRole).TypeInfo.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AccountContactCV.pcf: line 57, column 36
    function sortBy_4 (roleType :  typekey.AccountContactRole) : java.lang.Object {
      return roleType
    }
    
    // 'value' attribute on TextCell (id=ContactRole_Cell) at AccountContactCV.pcf: line 94, column 76
    function sortValue_11 (acctContactRole :  entity.AccountContactRole) : java.lang.Object {
      return (typeof acctContactRole).TypeInfo.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at AccountContactCV.pcf: line 85, column 57
    function toCreateAndAdd_25 () : entity.AccountContactRole {
      return dummyCreateAndAddAccountContactRole()
    }
    
    // 'toRemove' attribute on RowIterator at AccountContactCV.pcf: line 85, column 57
    function toRemove_26 (acctContactRole :  entity.AccountContactRole) : void {
      tryToRemoveRole(acctContactRole)
    }
    
    // 'value' attribute on RowIterator at AccountContactCV.pcf: line 85, column 57
    function value_27 () : entity.AccountContactRole[] {
      return acctContact.Roles
    }
    
    // 'value' attribute on AddMenuItemIterator at AccountContactCV.pcf: line 54, column 60
    function value_7 () : typekey.AccountContactRole[] {
      return acctContact.AvailableAccountContactRoleTypes.subtract({TC_ACCOUNTHOLDER}).toTypedArray()
    }
    
    // 'visible' attribute on Toolbar (id=AccountContactDV_tb) at AccountContactCV.pcf: line 29, column 67
    function visible_1 () : java.lang.Boolean {
      return perm.Account.edit( acctContact.Account )
    }
    
    // 'visible' attribute on Card (id=RolesCard) at AccountContactCV.pcf: line 37, column 30
    function visible_28 () : java.lang.Boolean {
      return showRolesTab
    }
    
    // 'visible' attribute on Toolbar (id=AddressesPanelSet_tb) at AccountContactCV.pcf: line 113, column 87
    function visible_29 () : java.lang.Boolean {
      return acctContact.Account.Editable and perm.System.editaccountcontacts
    }
    
    // 'visible' attribute on AddButton (id=AddRoleButton) at AccountContactCV.pcf: line 50, column 55
    function visible_8 () : java.lang.Boolean {
      return acctContact.Contact != null
    }
    
    property get acctContact () : AccountContact {
      return getRequireValue("acctContact", 0) as AccountContact
    }
    
    property set acctContact ($arg :  AccountContact) {
      setRequireValue("acctContact", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get showAddressTools () : boolean {
      return getRequireValue("showAddressTools", 0) as java.lang.Boolean
    }
    
    property set showAddressTools ($arg :  boolean) {
      setRequireValue("showAddressTools", 0, $arg)
    }
    
    property get showRolesTab () : boolean {
      return getRequireValue("showRolesTab", 0) as java.lang.Boolean
    }
    
    property set showRolesTab ($arg :  boolean) {
      setRequireValue("showRolesTab", 0, $arg)
    }
    
    function tryToRemoveRole(acRole : AccountContactRole) {
     if (acRole.AccountContact.Roles.Count == 1) {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Web.AccountContactCV.Error.CannotRemoveOnlyRole"))
      }
      if (not acRole.canRemove()) {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Web.AccountContactCV.Error.CannotRemoveInUseRole", acRole))
      }
      
      acRole.AccountContact.removeFromRoles(acRole)
    }
    
    function dummyCreateAndAddAccountContactRole() : AccountContactRole {
      return null
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountContactCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AccountContactCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at AccountContactCV.pcf: line 85, column 57
    function checkBoxVisible_24 () : java.lang.Boolean {
      return not (acctContactRole typeis AccountHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_onEnter_15 (def :  pcf.AccountContactDisplayCell_Driver) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_onEnter_17 (def :  pcf.AccountContactDisplayCell_NamedInsured) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_onEnter_19 (def :  pcf.AccountContactDisplayCell_OwnerOfficer) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_onEnter_21 (def :  pcf.AccountContactDisplayCell_default) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_refreshVariables_16 (def :  pcf.AccountContactDisplayCell_Driver) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_refreshVariables_18 (def :  pcf.AccountContactDisplayCell_NamedInsured) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_refreshVariables_20 (def :  pcf.AccountContactDisplayCell_OwnerOfficer) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'def' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function def_refreshVariables_22 (def :  pcf.AccountContactDisplayCell_default) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'mode' attribute on ModalCellRef (id=ContactAdditionalInfo) at AccountContactCV.pcf: line 99, column 53
    function mode_23 () : java.lang.Object {
      return acctContactRole.Subtype
    }
    
    // 'value' attribute on TextCell (id=ContactRole_Cell) at AccountContactCV.pcf: line 94, column 76
    function valueRoot_13 () : java.lang.Object {
      return (typeof acctContactRole).TypeInfo
    }
    
    // 'value' attribute on TextCell (id=ContactRole_Cell) at AccountContactCV.pcf: line 94, column 76
    function value_12 () : java.lang.String {
      return (typeof acctContactRole).TypeInfo.DisplayName
    }
    
    property get acctContactRole () : entity.AccountContactRole {
      return getIteratedValue(1) as entity.AccountContactRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountContactCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountContactCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=RoleType) at AccountContactCV.pcf: line 62, column 72
    function label_5 () : java.lang.Object {
      return contactConfigPlugin.getAccountContactRoleTypeDisplayName(roleType)
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=RoleType) at AccountContactCV.pcf: line 62, column 72
    function toCreateAndAdd_6 (CheckedValues :  Object[]) : java.lang.Object {
      return acctContact.addNewRole(roleType)
    }
    
    property get roleType () : typekey.AccountContactRole {
      return getIteratedValue(1) as typekey.AccountContactRole
    }
    
    
  }
  
  
}