package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchPickerResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchPickerResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltGroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 28, column 26
    function sortValue_0 (group :  entity.Group) : java.lang.Object {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function sortValue_1 (group :  entity.Group) : java.lang.Object {
      return group.Parent
    }
    
    // 'value' attribute on TypeKeyCell (id=Web_GroupSearchResults_Type_Cell) at GroupSearchPickerResultsLV.pcf: line 43, column 42
    function sortValue_2 (group :  entity.Group) : java.lang.Object {
      return group.GroupType
    }
    
    // 'value' attribute on RowIterator at GroupSearchPickerResultsLV.pcf: line 22, column 54
    function value_23 () : java.util.List<entity.Group> {
      return groupList?.where(\g -> ShowGroup(g))
    }
    
    property get excludeGroup () : Group {
      return getRequireValue("excludeGroup", 0) as Group
    }
    
    property set excludeGroup ($arg :  Group) {
      setRequireValue("excludeGroup", 0, $arg)
    }
    
    property get groupList () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("groupList", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set groupList ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("groupList", 0, $arg)
    }
    
    function ShowGroup( CurrentGroup : Group ) : Boolean
    {
      return ( excludeGroup == null || (CurrentGroup != excludeGroup and not excludeGroup.isAncestor( CurrentGroup )) )
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupSearchPickerResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function action_11 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 28, column 26
    function action_3 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 28, column 26
    function action_5 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function action_9 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function action_dest_10 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function action_dest_12 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 28, column 26
    function action_dest_4 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 28, column 26
    function action_dest_6 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'value' attribute on AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function valueRoot_14 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 32, column 33
    function value_13 () : entity.Group {
      return group.Parent
    }
    
    // 'value' attribute on TextCell (id=Web_GroupSearchResults_Organization_Cell) at GroupSearchPickerResultsLV.pcf: line 38, column 44
    function value_16 () : entity.Organization {
      return group.Organization
    }
    
    // 'value' attribute on TypeKeyCell (id=Web_GroupSearchResults_Type_Cell) at GroupSearchPickerResultsLV.pcf: line 43, column 42
    function value_19 () : typekey.GroupType {
      return group.GroupType
    }
    
    // 'value' attribute on AltGroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 28, column 26
    function value_7 () : entity.Group {
      return group
    }
    
    property get group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}