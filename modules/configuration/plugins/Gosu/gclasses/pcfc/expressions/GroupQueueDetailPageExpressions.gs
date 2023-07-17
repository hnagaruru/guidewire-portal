package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupQueueDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupQueueDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupQueueDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupQueueDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (group :  Group, assignableQueue :  AssignableQueue) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at GroupQueueDetailPage.pcf: line 20, column 61
    function def_onEnter_0 (def :  pcf.GroupQueueDetailScreen) : void {
      def.onEnter(assignableQueue, group)
    }
    
    // 'def' attribute on ScreenRef at GroupQueueDetailPage.pcf: line 20, column 61
    function def_refreshVariables_1 (def :  pcf.GroupQueueDetailScreen) : void {
      def.refreshVariables(assignableQueue, group)
    }
    
    // 'parent' attribute on Page (id=GroupQueueDetailPage) at GroupQueueDetailPage.pcf: line 10, column 91
    static function parent_2 (assignableQueue :  AssignableQueue, group :  Group) : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(group)
    }
    
    // 'title' attribute on Page (id=GroupQueueDetailPage) at GroupQueueDetailPage.pcf: line 10, column 91
    static function title_3 (assignableQueue :  AssignableQueue, group :  Group) : java.lang.Object {
      return DisplayKey.get("Web.Admin.GroupDetail.Queue", assignableQueue.Name)
    }
    
    override property get CurrentLocation () : pcf.GroupQueueDetailPage {
      return super.CurrentLocation as pcf.GroupQueueDetailPage
    }
    
    property get assignableQueue () : AssignableQueue {
      return getVariableValue("assignableQueue", 0) as AssignableQueue
    }
    
    property set assignableQueue ($arg :  AssignableQueue) {
      setVariableValue("assignableQueue", 0, $arg)
    }
    
    property get group () : Group {
      return getVariableValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 0, $arg)
    }
    
    
  }
  
  
}