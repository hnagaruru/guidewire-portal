package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/PCAssignmentQueueLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCAssignmentQueueLVExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/PCAssignmentQueueLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PCAssignmentQueueLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function action_5 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function action_7 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function action_dest_6 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function action_dest_8 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator at PCAssignmentQueueLV.pcf: line 16, column 82
    function pickValue_15 () : gw.api.assignment.Assignee {
      return queue
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function valueRoot_10 () : java.lang.Object {
      return queue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PCAssignmentQueueLV.pcf: line 31, column 38
    function value_12 () : java.lang.String {
      return queue.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PCAssignmentQueueLV.pcf: line 23, column 47
    function value_3 () : entity.AssignableQueue {
      return queue
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function value_9 () : entity.Group {
      return queue.Group
    }
    
    property get queue () : entity.AssignableQueue {
      return getIteratedValue(1) as entity.AssignableQueue
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/PCAssignmentQueueLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCAssignmentQueueLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PCAssignmentQueueLV.pcf: line 23, column 47
    function sortValue_0 (queue :  entity.AssignableQueue) : java.lang.Object {
      return queue
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentQueueLV.pcf: line 27, column 32
    function sortValue_1 (queue :  entity.AssignableQueue) : java.lang.Object {
      return queue.Group
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PCAssignmentQueueLV.pcf: line 31, column 38
    function sortValue_2 (queue :  entity.AssignableQueue) : java.lang.Object {
      return queue.Description
    }
    
    // 'value' attribute on RowIterator at PCAssignmentQueueLV.pcf: line 16, column 82
    function value_16 () : gw.api.database.IQueryBeanResult<entity.AssignableQueue> {
      return queues
    }
    
    property get queues () : gw.api.database.IQueryBeanResult<AssignableQueue> {
      return getRequireValue("queues", 0) as gw.api.database.IQueryBeanResult<AssignableQueue>
    }
    
    property set queues ($arg :  gw.api.database.IQueryBeanResult<AssignableQueue>) {
      setRequireValue("queues", 0, $arg)
    }
    
    
  }
  
  
}