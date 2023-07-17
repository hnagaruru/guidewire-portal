package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/roles/RoleProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleProducerCodesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/roles/RoleProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RoleProducerCodesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at RoleProducerCodesLV.pcf: line 47, column 44
    function action_10 () : void {
      OrganizationDetail.go(pcr.ProducerCode.Organization)
    }
    
    // 'action' attribute on TextCell (id=ProducerCode_Cell) at RoleProducerCodesLV.pcf: line 40, column 42
    function action_5 () : void {
      AdminProducerCodeDetail.go(pcr.ProducerCode)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at RoleProducerCodesLV.pcf: line 47, column 44
    function action_dest_11 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(pcr.ProducerCode.Organization)
    }
    
    // 'action' attribute on TextCell (id=ProducerCode_Cell) at RoleProducerCodesLV.pcf: line 40, column 42
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(pcr.ProducerCode)
    }
    
    // 'value' attribute on TextCell (id=ProducerCode_Cell) at RoleProducerCodesLV.pcf: line 40, column 42
    function valueRoot_8 () : java.lang.Object {
      return pcr.ProducerCode
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at RoleProducerCodesLV.pcf: line 47, column 44
    function value_12 () : entity.Organization {
      return pcr.ProducerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=ProducerCode_Cell) at RoleProducerCodesLV.pcf: line 40, column 42
    function value_7 () : java.lang.String {
      return pcr.ProducerCode.Code
    }
    
    property get pcr () : entity.ProducerCodeRole {
      return getIteratedValue(1) as entity.ProducerCodeRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/roles/RoleProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleProducerCodesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at RoleProducerCodesLV.pcf: line 32, column 83
    function conversionExpression_4 (PickedValue :  ProducerCode) : entity.ProducerCodeRole {
      return gw.api.web.admin.ProducerCodeRoleUtil.create(role, PickedValue)
    }
    
    // 'initialValue' attribute on Variable at RoleProducerCodesLV.pcf: line 16, column 27
    function initialValue_0 () : entity.User {
      return entity.User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at RoleProducerCodesLV.pcf: line 21, column 72
    function initialValue_1 () : gw.api.database.IQueryBeanResult<ProducerCodeRole> {
      return gw.api.web.admin.ProducerCodeRoleUtil.findProducerCodeRoles(role)
    }
    
    // 'pickLocation' attribute on RowIterator at RoleProducerCodesLV.pcf: line 32, column 83
    function pickLocation_15 () : void {
      AdminProducerCodeSearchPopup.push(user.Organization.Carrier ? null : user.Organization)
    }
    
    // 'value' attribute on TextCell (id=ProducerCode_Cell) at RoleProducerCodesLV.pcf: line 40, column 42
    function sortValue_2 (pcr :  entity.ProducerCodeRole) : java.lang.Object {
      return pcr.ProducerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at RoleProducerCodesLV.pcf: line 47, column 44
    function sortValue_3 (pcr :  entity.ProducerCodeRole) : java.lang.Object {
      return pcr.ProducerCode.Organization
    }
    
    // 'toAdd' attribute on RowIterator at RoleProducerCodesLV.pcf: line 32, column 83
    function toAdd_16 (pcr :  entity.ProducerCodeRole) : void {
      gw.api.web.admin.ProducerCodeRoleUtil.add(role, pcr)
    }
    
    // 'toRemove' attribute on RowIterator at RoleProducerCodesLV.pcf: line 32, column 83
    function toRemove_17 (pcr :  entity.ProducerCodeRole) : void {
      gw.api.web.admin.ProducerCodeRoleUtil.remove(role, pcr)
    }
    
    // 'value' attribute on RowIterator at RoleProducerCodesLV.pcf: line 32, column 83
    function value_18 () : gw.api.database.IQueryBeanResult<entity.ProducerCodeRole> {
      return pcRoles
    }
    
    property get pcRoles () : gw.api.database.IQueryBeanResult<ProducerCodeRole> {
      return getVariableValue("pcRoles", 0) as gw.api.database.IQueryBeanResult<ProducerCodeRole>
    }
    
    property set pcRoles ($arg :  gw.api.database.IQueryBeanResult<ProducerCodeRole>) {
      setVariableValue("pcRoles", 0, $arg)
    }
    
    property get role () : Role {
      return getRequireValue("role", 0) as Role
    }
    
    property set role ($arg :  Role) {
      setRequireValue("role", 0, $arg)
    }
    
    property get user () : entity.User {
      return getVariableValue("user", 0) as entity.User
    }
    
    property set user ($arg :  entity.User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}