package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeDetail_RolesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducerCodeDetail_RolesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function actionAvailable_5 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'action' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function action_3 () : void {
      RoleDetailPage.go(producerCodeRole.Role)
    }
    
    // 'action' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function action_dest_4 () : pcf.api.Destination {
      return pcf.RoleDetailPage.createDestination(producerCodeRole.Role)
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCodeRole.Role = (__VALUE_TO_SET as entity.Role)
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function valueRange_9 () : java.lang.Object {
      return producerCodeRoles
    }
    
    // 'value' attribute on TextCell (id=RoleDescription_Cell) at ProducerCodeDetail_RolesLV.pcf: line 44, column 54
    function valueRoot_14 () : java.lang.Object {
      return producerCodeRole.Role
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function valueRoot_8 () : java.lang.Object {
      return producerCodeRole
    }
    
    // 'value' attribute on TextCell (id=RoleDescription_Cell) at ProducerCodeDetail_RolesLV.pcf: line 44, column 54
    function value_13 () : java.lang.String {
      return producerCodeRole.Role.Description
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function value_6 () : entity.Role {
      return producerCodeRole.Role
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function verifyValueRangeIsAllowedType_10 ($$arg :  entity.Role[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult<entity.Role>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function verifyValueRange_11 () : void {
      var __valueRangeArg = producerCodeRoles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get producerCodeRole () : entity.ProducerCodeRole {
      return getIteratedValue(1) as entity.ProducerCodeRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeDetail_RolesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeDetail_RolesLV.pcf: line 16, column 22
    function initialValue_0 () : Role[] {
      return producerCode.getAvailableRoles()
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at ProducerCodeDetail_RolesLV.pcf: line 37, column 35
    function sortValue_1 (producerCodeRole :  entity.ProducerCodeRole) : java.lang.Object {
      return producerCodeRole.Role
    }
    
    // 'value' attribute on TextCell (id=RoleDescription_Cell) at ProducerCodeDetail_RolesLV.pcf: line 44, column 54
    function sortValue_2 (producerCodeRole :  entity.ProducerCodeRole) : java.lang.Object {
      return producerCodeRole.Role.Description
    }
    
    // 'toAdd' attribute on RowIterator at ProducerCodeDetail_RolesLV.pcf: line 25, column 45
    function toAdd_16 (producerCodeRole :  entity.ProducerCodeRole) : void {
      producerCode.addToProducerCodeRoles(producerCodeRole); producerCodeRoles = producerCode.getAvailableRoles()
    }
    
    // 'toRemove' attribute on RowIterator at ProducerCodeDetail_RolesLV.pcf: line 25, column 45
    function toRemove_17 (producerCodeRole :  entity.ProducerCodeRole) : void {
      producerCode.removeFromProducerCodeRoles(producerCodeRole)
    }
    
    // 'value' attribute on RowIterator at ProducerCodeDetail_RolesLV.pcf: line 25, column 45
    function value_18 () : entity.ProducerCodeRole[] {
      return producerCode.ProducerCodeRoles
    }
    
    property get producerCode () : ProducerCode {
      return getRequireValue("producerCode", 0) as ProducerCode
    }
    
    property set producerCode ($arg :  ProducerCode) {
      setRequireValue("producerCode", 0, $arg)
    }
    
    property get producerCodeRoles () : Role[] {
      return getVariableValue("producerCodeRoles", 0) as Role[]
    }
    
    property set producerCodeRoles ($arg :  Role[]) {
      setVariableValue("producerCodeRoles", 0, $arg)
    }
    
    
  }
  
  
}