package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function sortValue_0 (group :  entity.Group) : java.lang.Object {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function sortValue_1 (group :  entity.Group) : java.lang.Object {
      return group.Parent
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at GroupSearchResultsLV.pcf: line 41, column 24
    function sortValue_2 (group :  entity.Group) : java.lang.Object {
      return group.Organization
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at GroupSearchResultsLV.pcf: line 47, column 42
    function sortValue_3 (group :  entity.Group) : java.lang.Object {
      return group.GroupType
    }
    
    // 'value' attribute on RowIterator at GroupSearchResultsLV.pcf: line 18, column 72
    function value_31 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return groupList
    }
    
    property get groupList () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("groupList", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set groupList ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("groupList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/GroupSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function action_12 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function action_14 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function action_17 () : void {
      GroupDetailPage.go(group.Parent)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at GroupSearchResultsLV.pcf: line 41, column 24
    function action_23 () : void {
      OrganizationDetail.go(group.Organization)
    }
    
    // AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function action_4 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function action_6 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function action_8 () : void {
      GroupDetailPage.go(group)
    }
    
    // AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function action_dest_15 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(group.Parent)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at GroupSearchResultsLV.pcf: line 41, column 24
    function action_dest_24 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(group.Organization)
    }
    
    // AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function action_dest_5 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(group)
    }
    
    // 'available' attribute on AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function available_16 () : java.lang.Boolean {
      return group.Parent != null and group.Parent.GroupType != TC_ROOT
    }
    
    // 'value' attribute on AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function valueRoot_20 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 26, column 25
    function value_10 () : entity.Group {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=Parent_Cell) at GroupSearchResultsLV.pcf: line 33, column 25
    function value_19 () : entity.Group {
      return group.Parent
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at GroupSearchResultsLV.pcf: line 41, column 24
    function value_25 () : entity.Organization {
      return group.Organization
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at GroupSearchResultsLV.pcf: line 47, column 42
    function value_28 () : typekey.GroupType {
      return group.GroupType
    }
    
    property get group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}