package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (parent :  Group) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=NewGroup) at NewGroup.pcf: line 14, column 60
    function afterCancel_3 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewGroup) at NewGroup.pcf: line 14, column 60
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewGroup) at NewGroup.pcf: line 14, column 60
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      GroupDetailPage.go(group)
    }
    
    // 'canVisit' attribute on Page (id=NewGroup) at NewGroup.pcf: line 14, column 60
    static function canVisit_6 (parent :  Group) : java.lang.Boolean {
      return perm.Group.create
    }
    
    // 'def' attribute on ScreenRef at NewGroup.pcf: line 27, column 39
    function def_onEnter_1 (def :  pcf.GroupDetailScreen) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on ScreenRef at NewGroup.pcf: line 27, column 39
    function def_refreshVariables_2 (def :  pcf.GroupDetailScreen) : void {
      def.refreshVariables(group)
    }
    
    // 'initialValue' attribute on Variable at NewGroup.pcf: line 25, column 21
    function initialValue_0 () : Group {
      return gw.web.admin.NewGroupUIHelper.createNewGroup(parent)
    }
    
    // 'parent' attribute on Page (id=NewGroup) at NewGroup.pcf: line 14, column 60
    static function parent_7 (parent :  Group) : pcf.api.Destination {
      return pcf.Admin.createDestination(User.util.CurrentUser.Organization)
    }
    
    override property get CurrentLocation () : pcf.NewGroup {
      return super.CurrentLocation as pcf.NewGroup
    }
    
    property get group () : Group {
      return getVariableValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 0, $arg)
    }
    
    property get parent () : Group {
      return getVariableValue("parent", 0) as Group
    }
    
    property set parent ($arg :  Group) {
      setVariableValue("parent", 0, $arg)
    }
    
    
  }
  
  
}