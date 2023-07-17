package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (group :  Group) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 14, column 82
    function canEdit_2 () : java.lang.Boolean {
      return perm.Group.edit and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(group.Organization)
    }
    
    // 'canVisit' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 14, column 82
    static function canVisit_3 (group :  Group) : java.lang.Boolean {
      return perm.Group.view and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(group.Organization)
    }
    
    // 'def' attribute on ScreenRef at GroupDetailPage.pcf: line 21, column 39
    function def_onEnter_0 (def :  pcf.GroupDetailScreen) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on ScreenRef at GroupDetailPage.pcf: line 21, column 39
    function def_refreshVariables_1 (def :  pcf.GroupDetailScreen) : void {
      def.refreshVariables(group)
    }
    
    // 'parent' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 14, column 82
    static function parent_4 (group :  Group) : pcf.api.Destination {
      return pcf.Admin.createDestination(group)
    }
    
    // 'title' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 14, column 82
    static function title_5 (group :  Group) : java.lang.Object {
      return DisplayKey.get("Web.Admin.GroupDetail", group.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.GroupDetailPage {
      return super.CurrentLocation as pcf.GroupDetailPage
    }
    
    property get group () : Group {
      return getVariableValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 0, $arg)
    }
    
    
  }
  
  
}