package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RolesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RolesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 35, column 25
    function action_3 () : void {
      RoleDetailPage.go(role)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 35, column 25
    function action_dest_4 () : pcf.api.Destination {
      return pcf.RoleDetailPage.createDestination(role)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 35, column 25
    function valueRoot_6 () : java.lang.Object {
      return role
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RolesLV.pcf: line 50, column 24
    function value_11 () : java.lang.String {
      return role.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 35, column 25
    function value_5 () : java.lang.String {
      return role.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at RolesLV.pcf: line 42, column 25
    function value_8 () : typekey.RoleType {
      return role.RoleType
    }
    
    property get role () : entity.Role {
      return getIteratedValue(1) as entity.Role
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RolesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at RolesLV.pcf: line 24, column 84
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.security.RoleFilters.TYPE_FILTER_SET.FilterOptions
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 35, column 25
    function sortValue_1 (role :  entity.Role) : java.lang.Object {
      return role.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at RolesLV.pcf: line 42, column 25
    function sortValue_2 (role :  entity.Role) : java.lang.Object {
      return role.RoleType
    }
    
    // 'value' attribute on RowIterator at RolesLV.pcf: line 20, column 71
    function value_14 () : gw.api.database.IQueryBeanResult<entity.Role> {
      return roles
    }
    
    property get roles () : gw.api.database.IQueryBeanResult<Role> {
      return getRequireValue("roles", 0) as gw.api.database.IQueryBeanResult<Role>
    }
    
    property set roles ($arg :  gw.api.database.IQueryBeanResult<Role>) {
      setRequireValue("roles", 0, $arg)
    }
    
    
  }
  
  
}