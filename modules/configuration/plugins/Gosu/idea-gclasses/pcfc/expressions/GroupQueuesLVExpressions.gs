package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupQueuesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupQueuesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at GroupQueuesLV.pcf: line 31, column 41
    function sortValue_0 (assignableQueue :  entity.AssignableQueue) : java.lang.Object {
      return assignableQueue.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GroupQueuesLV.pcf: line 36, column 48
    function sortValue_1 (assignableQueue :  entity.AssignableQueue) : java.lang.Object {
      return assignableQueue.Description
    }
    
    // 'value' attribute on BooleanRadioCell (id=SubGroupVisible_Cell) at GroupQueuesLV.pcf: line 41, column 52
    function sortValue_2 (assignableQueue :  entity.AssignableQueue) : java.lang.Object {
      return assignableQueue.SubGroupVisible
    }
    
    // 'toAdd' attribute on RowIterator at GroupQueuesLV.pcf: line 22, column 44
    function toAdd_17 (assignableQueue :  entity.AssignableQueue) : void {
      group.addToAssignableQueues(assignableQueue)
    }
    
    // 'toRemove' attribute on RowIterator at GroupQueuesLV.pcf: line 22, column 44
    function toRemove_18 (assignableQueue :  entity.AssignableQueue) : void {
      removeQueue(assignableQueue)
    }
    
    // 'value' attribute on RowIterator at GroupQueuesLV.pcf: line 22, column 44
    function value_19 () : entity.AssignableQueue[] {
      return group.AssignableQueues
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    function removeQueue(queue : AssignableQueue) {
      if (queue.New or Activity.finder.findActivitiesByQueues( {queue} ).Empty) {
        group.removeFromAssignableQueues(queue)
      } else {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Web.Admin.GroupQueuesLV.Error.CanNotRemoveQueueWithActivities", queue.Name))
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/GroupQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupQueuesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at GroupQueuesLV.pcf: line 31, column 41
    function action_3 () : void {
      GroupQueueDetailPage.drilldown(group, assignableQueue)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at GroupQueuesLV.pcf: line 31, column 41
    function action_dest_4 () : pcf.api.Destination {
      return pcf.GroupQueueDetailPage.createDestination(group, assignableQueue)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GroupQueuesLV.pcf: line 36, column 48
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignableQueue.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SubGroupVisible_Cell) at GroupQueuesLV.pcf: line 41, column 52
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignableQueue.SubGroupVisible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at GroupQueuesLV.pcf: line 31, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignableQueue.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at GroupQueuesLV.pcf: line 31, column 41
    function valueRoot_7 () : java.lang.Object {
      return assignableQueue
    }
    
    // 'value' attribute on BooleanRadioCell (id=SubGroupVisible_Cell) at GroupQueuesLV.pcf: line 41, column 52
    function value_13 () : java.lang.Boolean {
      return assignableQueue.SubGroupVisible
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at GroupQueuesLV.pcf: line 31, column 41
    function value_5 () : java.lang.String {
      return assignableQueue.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GroupQueuesLV.pcf: line 36, column 48
    function value_9 () : java.lang.String {
      return assignableQueue.Description
    }
    
    property get assignableQueue () : entity.AssignableQueue {
      return getIteratedValue(1) as entity.AssignableQueue
    }
    
    
  }
  
  
}