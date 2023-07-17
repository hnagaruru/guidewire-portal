package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ModifyUserProducerCodeRolesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ModifyUserProducerCodeRolesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ModifyUserProducerCodeRolesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ModifyUserProducerCodeRolesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=Available_Cell) at ModifyUserProducerCodeRolesPopup.pcf: line 75, column 37
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      avail = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at ModifyUserProducerCodeRolesPopup.pcf: line 69, column 37
    function initialValue_10 () : boolean {
      return selectedRoles.containsKey(role)
    }
    
    // 'initialValue' attribute on Variable at ModifyUserProducerCodeRolesPopup.pcf: line 65, column 34
    function initialValue_9 () : Role {
      return pcRole.Role
    }
    
    // RowIterator at ModifyUserProducerCodeRolesPopup.pcf: line 61, column 57
    function initializeVariables_17 () : void {
        role = pcRole.Role;
  avail = selectedRoles.containsKey(role);

    }
    
    // 'onChange' attribute on PostOnChange at ModifyUserProducerCodeRolesPopup.pcf: line 77, column 66
    function onChange_11 () : void {
      modifySelection(avail, role)
    }
    
    // 'value' attribute on CheckBoxCell (id=Available_Cell) at ModifyUserProducerCodeRolesPopup.pcf: line 75, column 37
    function value_12 () : java.lang.Boolean {
      return avail
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ModifyUserProducerCodeRolesPopup.pcf: line 83, column 48
    function value_15 () : entity.Role {
      return role
    }
    
    property get avail () : boolean {
      return getVariableValue("avail", 1) as java.lang.Boolean
    }
    
    property set avail ($arg :  boolean) {
      setVariableValue("avail", 1, $arg)
    }
    
    property get pcRole () : entity.ProducerCodeRole {
      return getIteratedValue(1) as entity.ProducerCodeRole
    }
    
    property get role () : Role {
      return getVariableValue("role", 1) as Role
    }
    
    property set role ($arg :  Role) {
      setVariableValue("role", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ModifyUserProducerCodeRolesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ModifyUserProducerCodeRolesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User, prodCode :  ProducerCode) : int {
      return 0
    }
    
    static function __constructorIndex (user :  User, prodCode :  ProducerCode, canEdit :  boolean) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateButton) at ModifyUserProducerCodeRolesPopup.pcf: line 36, column 30
    function action_2 () : void {
      CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at ModifyUserProducerCodeRolesPopup.pcf: line 42, column 30
    function action_4 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on ToolbarButton (id=OkButton) at ModifyUserProducerCodeRolesPopup.pcf: line 48, column 31
    function action_6 () : void {
      CurrentLocation.cancel()
    }
    
    // 'initialValue' attribute on Variable at ModifyUserProducerCodeRolesPopup.pcf: line 27, column 29
    function initialValue_0 () : java.util.Map {
      return computeSelectedRoles(user, prodCode)
    }
    
    // 'value' attribute on CheckBoxCell (id=Available_Cell) at ModifyUserProducerCodeRolesPopup.pcf: line 75, column 37
    function sortValue_7 (pcRole :  entity.ProducerCodeRole) : java.lang.Object {
      var role : Role = (pcRole.Role)
var avail : boolean = (selectedRoles.containsKey(role))
return avail
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ModifyUserProducerCodeRolesPopup.pcf: line 83, column 48
    function sortValue_8 (pcRole :  entity.ProducerCodeRole) : java.lang.Object {
      var role : Role = (pcRole.Role)
var avail : boolean = (selectedRoles.containsKey(role))
return role
    }
    
    // 'title' attribute on Popup (id=ModifyUserProducerCodeRolesPopup) at ModifyUserProducerCodeRolesPopup.pcf: line 9, column 165
    static function title_21 (canEdit :  boolean, prodCode :  ProducerCode, user :  User) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UserAccessDV.ModifyRoles.Title", prodCode.Code, prodCode.Description != null ? prodCode.Description : "")
    }
    
    // 'value' attribute on RowIterator at ModifyUserProducerCodeRolesPopup.pcf: line 61, column 57
    function value_18 () : entity.ProducerCodeRole[] {
      return prodCode.ProducerCodeRoles
    }
    
    // 'visible' attribute on ToolbarButton (id=UpdateButton) at ModifyUserProducerCodeRolesPopup.pcf: line 36, column 30
    function visible_1 () : java.lang.Boolean {
      return canEdit
    }
    
    // 'visible' attribute on ToolbarButton (id=OkButton) at ModifyUserProducerCodeRolesPopup.pcf: line 48, column 31
    function visible_5 () : java.lang.Boolean {
      return !canEdit
    }
    
    override property get CurrentLocation () : pcf.ModifyUserProducerCodeRolesPopup {
      return super.CurrentLocation as pcf.ModifyUserProducerCodeRolesPopup
    }
    
    property get canEdit () : boolean {
      return getVariableValue("canEdit", 0) as java.lang.Boolean
    }
    
    property set canEdit ($arg :  boolean) {
      setVariableValue("canEdit", 0, $arg)
    }
    
    property get prodCode () : ProducerCode {
      return getVariableValue("prodCode", 0) as ProducerCode
    }
    
    property set prodCode ($arg :  ProducerCode) {
      setVariableValue("prodCode", 0, $arg)
    }
    
    property get selectedRoles () : java.util.Map {
      return getVariableValue("selectedRoles", 0) as java.util.Map
    }
    
    property set selectedRoles ($arg :  java.util.Map) {
      setVariableValue("selectedRoles", 0, $arg)
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    function computeSelectedRoles(u : User, pc : ProducerCode) : java.util.Map {
            var upcs : UserProducerCode[] = pc.getUserProducerCodesFor(u)
            var map : java.util.Map = new java.util.HashMap()
            for (var upc in upcs) {
              map.put(upc.Role, upc)
            }
            return map
          }
    
          function modifySelection(avail : boolean, role : Role) {
            if (avail) {
              var upc : UserProducerCode = prodCode.addUserProducerCodeRole(user, role)
              selectedRoles.put(role, upc)
            } else {
              var upc = selectedRoles.remove(role) as UserProducerCode
              prodCode.removeFromUserProducerCodes(upc)
            }
          }
    
    
  }
  
  
}