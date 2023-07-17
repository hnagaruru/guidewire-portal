package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupQueueDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupQueueDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupQueueDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupQueueDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GroupQueueDetailScreen.pcf: line 17, column 55
    function def_onEnter_1 (def :  pcf.AssignableQueueDetailDV) : void {
      def.onEnter(assignableQueue)
    }
    
    // 'def' attribute on PanelRef at GroupQueueDetailScreen.pcf: line 17, column 55
    function def_refreshVariables_2 (def :  pcf.AssignableQueueDetailDV) : void {
      def.refreshVariables(assignableQueue)
    }
    
    // EditButtons at GroupQueueDetailScreen.pcf: line 14, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get assignableQueue () : AssignableQueue {
      return getRequireValue("assignableQueue", 0) as AssignableQueue
    }
    
    property set assignableQueue ($arg :  AssignableQueue) {
      setRequireValue("assignableQueue", 0, $arg)
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    
  }
  
  
}