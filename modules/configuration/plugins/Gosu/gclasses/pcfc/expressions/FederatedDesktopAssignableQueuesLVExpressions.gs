package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/FederatedDesktopAssignableQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedDesktopAssignableQueuesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/FederatedDesktopAssignableQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedDesktopAssignableQueuesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at FederatedDesktopAssignableQueuesLV.pcf: line 40, column 87
    function filter_3 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.data.queue.QueueDataFilters.all()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedDesktopAssignableQueuesLV.pcf: line 42, column 57
    function filters_4 () : gw.api.filters.IFilter[] {
      return aQFilterSet.Filters.toTypedArray()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Overdue_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 71, column 37
    function iconColor_8 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at FederatedDesktopAssignableQueuesLV.pcf: line 18, column 33
    function initialValue_0 () : AssignableQueue[] {
      return getVisibleQueues()
    }
    
    // 'initialValue' attribute on Variable at FederatedDesktopAssignableQueuesLV.pcf: line 22, column 72
    function initialValue_1 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.queue.QueueActivityFederatedData(queues)
    }
    
    // 'initialValue' attribute on Variable at FederatedDesktopAssignableQueuesLV.pcf: line 26, column 62
    function initialValue_2 () : gw.api.web.desktop.data.queue.QueueDataFilters {
      return new gw.api.web.desktop.data.queue.QueueDataFilters(queues)
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedDesktopAssignableQueuesLV.pcf: line 48, column 24
    function sortBy_5 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedDesktopAssignableQueuesLV.pcf: line 51, column 24
    function sortBy_6 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityCode
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedDesktopAssignableQueuesLV.pcf: line 54, column 24
    function sortBy_7 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 83, column 25
    function sortValue_10 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 83, column 25
    function sortValue_11 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityCode
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 90, column 25
    function sortValue_12 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 90, column 25
    function sortValue_13 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusCode
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 97, column 37
    function sortValue_14 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 115, column 25
    function sortValue_15 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 121, column 25
    function sortValue_16 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 76, column 25
    function sortValue_9 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on RowIterator at FederatedDesktopAssignableQueuesLV.pcf: line 35, column 76
    function value_55 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedDataActivities
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopAssignableQueuesLV.pcf: line 35, column 76
    function verifyValueTypeIsAllowedType_56 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopAssignableQueuesLV.pcf: line 35, column 76
    function verifyValueTypeIsAllowedType_56 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopAssignableQueuesLV.pcf: line 35, column 76
    function verifyValueTypeIsAllowedType_56 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopAssignableQueuesLV.pcf: line 35, column 76
    function verifyValueType_57 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_56(__valueTypeArg)
    }
    
    property get aQFilterSet () : gw.api.web.desktop.data.queue.QueueDataFilters {
      return getVariableValue("aQFilterSet", 0) as gw.api.web.desktop.data.queue.QueueDataFilters
    }
    
    property set aQFilterSet ($arg :  gw.api.web.desktop.data.queue.QueueDataFilters) {
      setVariableValue("aQFilterSet", 0, $arg)
    }
    
    property get federatedDataActivities () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return getVariableValue("federatedDataActivities", 0) as gw.api.web.desktop.data.FederatedDataIteratorBackingData
    }
    
    property set federatedDataActivities ($arg :  gw.api.web.desktop.data.FederatedDataIteratorBackingData) {
      setVariableValue("federatedDataActivities", 0, $arg)
    }
    
    property get processedActivities () : Set<String> {
      return getRequireValue("processedActivities", 0) as Set<String>
    }
    
    property set processedActivities ($arg :  Set<String>) {
      setRequireValue("processedActivities", 0, $arg)
    }
    
    property get queues () : AssignableQueue[] {
      return getVariableValue("queues", 0) as AssignableQueue[]
    }
    
    property set queues ($arg :  AssignableQueue[]) {
      setVariableValue("queues", 0, $arg)
    }
    
    // The results are needed all at once because the array will be reused to avoid querying twice.
          function getVisibleQueues() : AssignableQueue[] {
            var retValue = new java.util.ArrayList<AssignableQueue>()
            var processor = AssignableQueue.finder.findVisibleQueuesInUserAndAncestorGroups(User.util.CurrentUser) as gw.api.database.IQueryBeanResult<AssignableQueue>
            foreach (i in processor.iterator()) {
              retValue.add(i)
            }
            return retValue?.toTypedArray()
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/FederatedDesktopAssignableQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedDesktopAssignableQueuesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 97, column 37
    function action_32 () : void {
      FederatedActivityForward.push(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 97, column 37
    function action_dest_33 () : pcf.api.Destination {
      return pcf.FederatedActivityForward.createDestination(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 97, column 37
    function available_31 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityEditPermissionHandler.canEditActivity(User.util.getCurrentUser(), activity)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at FederatedDesktopAssignableQueuesLV.pcf: line 35, column 76
    function checkBoxVisible_54 () : java.lang.Boolean {
      return perm.Activity.pickfromqueue
    }
    
    // 'highlighted' attribute on Row at FederatedDesktopAssignableQueuesLV.pcf: line 56, column 71
    function highlighted_53 () : java.lang.Boolean {
      return processedActivities.contains(activity.PublicId)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Overdue_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 71, column 37
    function iconColor_22 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 63, column 52
    function valueRoot_18 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 63, column 52
    function value_17 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Overdue_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 71, column 37
    function value_20 () : java.lang.Boolean {
      return activity.Overdue
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 76, column 25
    function value_24 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 83, column 25
    function value_27 () : typekey.Priority {
      return typekey.Priority.get(activity.PriorityCode)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 90, column 25
    function value_29 () : typekey.ActivityStatus {
      return typekey.ActivityStatus.get(activity.StatusCode)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 97, column 37
    function value_34 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=JobID_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 103, column 25
    function value_38 () : java.lang.String {
      return activity.PolicyNumberOrJobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 109, column 25
    function value_41 () : java.lang.String {
      return activity.ContactName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 115, column 25
    function value_44 () : java.lang.String {
      return activity.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 121, column 25
    function value_47 () : java.lang.String {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at FederatedDesktopAssignableQueuesLV.pcf: line 128, column 25
    function value_50 () : typekey.State {
      return activity.UIDisplayState
    }
    
    property get activity () : gw.api.web.desktop.data.activity.ActivityDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.activity.ActivityDTO
    }
    
    
  }
  
  
}