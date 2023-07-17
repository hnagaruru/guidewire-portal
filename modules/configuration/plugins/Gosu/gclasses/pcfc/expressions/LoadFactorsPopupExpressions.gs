package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/loadandvacation/LoadFactorsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoadFactorsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/loadandvacation/LoadFactorsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at LoadFactorsPopup.pcf: line 35, column 37
    function valueRoot_3 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at LoadFactorsPopup.pcf: line 35, column 37
    function value_2 () : java.lang.String {
      return group.Name
    }
    
    property get group () : entity.Group {
      return getIteratedValue(2) as entity.Group
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/loadandvacation/LoadFactorsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends LoadFactorsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at LoadFactorsPopup.pcf: line 45, column 70
    function def_onEnter_9 (def :  pcf.LoadFactorDV) : void {
      def.onEnter(selectedGroup)
    }
    
    // 'def' attribute on PanelRef at LoadFactorsPopup.pcf: line 45, column 70
    function def_refreshVariables_10 (def :  pcf.LoadFactorDV) : void {
      def.refreshVariables(selectedGroup)
    }
    
    // EditButtons at LoadFactorsPopup.pcf: line 48, column 31
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at LoadFactorsPopup.pcf: line 35, column 37
    function sortValue_1 (group :  entity.Group) : java.lang.Object {
      return group.Name
    }
    
    // 'title' attribute on Card (id=GroupDetailsCard) at LoadFactorsPopup.pcf: line 42, column 108
    function title_11 () : java.lang.String {
      return DisplayKey.get("Web.LoadAndVacation.GroupDetails.Title", selectedGroup.Name)
    }
    
    // 'value' attribute on RowIterator at LoadFactorsPopup.pcf: line 30, column 78
    function value_5 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return loadFactorGroupList
    }
    
    // 'visible' attribute on Toolbar (id=LoadFactorDV_tb) at LoadFactorsPopup.pcf: line 47, column 71
    function visible_7 () : java.lang.Boolean {
      return perm.Group.manageloadfactors(selectedGroup)
    }
    
    property get selectedGroup () : Group {
      return getCurrentSelection(1) as Group
    }
    
    property set selectedGroup ($arg :  Group) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/loadandvacation/LoadFactorsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoadFactorsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=LoadFactorsPopup) at LoadFactorsPopup.pcf: line 10, column 61
    static function canVisit_12 () : java.lang.Boolean {
      return perm.Group.viewloadfactors
    }
    
    // 'initialValue' attribute on Variable at LoadFactorsPopup.pcf: line 14, column 61
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Group> {
      return Group.finder.findLoadFactorGroupsByUser(User.util.CurrentUser) as gw.api.database.IQueryBeanResult<Group>
    }
    
    // 'parent' attribute on Popup (id=LoadFactorsPopup) at LoadFactorsPopup.pcf: line 10, column 61
    static function parent_13 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.LoadFactorsPopup {
      return super.CurrentLocation as pcf.LoadFactorsPopup
    }
    
    property get loadFactorGroupList () : gw.api.database.IQueryBeanResult<Group> {
      return getVariableValue("loadFactorGroupList", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set loadFactorGroupList ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setVariableValue("loadFactorGroupList", 0, $arg)
    }
    
    
  }
  
  
}