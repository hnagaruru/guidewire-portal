package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAssignableQueuesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAssignableQueuesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopAssignableQueuesLV.pcf: line 36, column 87
    function filter_3 () : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopAssignableQueuesLV.pcf: line 38, column 57
    function filters_4 () : gw.api.filters.IFilter[] {
      return aQFilterSet.Filters.toTypedArray()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Overdue_Cell) at DesktopAssignableQueuesLV.pcf: line 63, column 37
    function iconColor_7 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DesktopAssignableQueuesLV.pcf: line 15, column 33
    function initialValue_0 () : AssignableQueue[] {
      return getVisibleQueues()
    }
    
    // 'initialValue' attribute on Variable at DesktopAssignableQueuesLV.pcf: line 19, column 64
    function initialValue_1 () : gw.api.database.IQueryBeanResult<Activity> {
      return Activity.finder.findActivitiesByQueues(queues)
    }
    
    // 'initialValue' attribute on Variable at DesktopAssignableQueuesLV.pcf: line 23, column 53
    function initialValue_2 () : gw.api.filters.AssignableQueueFilters {
      return new gw.api.filters.AssignableQueueFilters(queues)
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopAssignableQueuesLV.pcf: line 44, column 24
    function sortBy_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopAssignableQueuesLV.pcf: line 47, column 24
    function sortBy_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAssignableQueuesLV.pcf: line 80, column 25
    function sortValue_10 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopAssignableQueuesLV.pcf: line 87, column 37
    function sortValue_11 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopAssignableQueuesLV.pcf: line 106, column 25
    function sortValue_12 (activity :  entity.Activity) : java.lang.Object {
      return activity.Job.Policy.ProductCode
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at DesktopAssignableQueuesLV.pcf: line 111, column 25
    function sortValue_13 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at DesktopAssignableQueuesLV.pcf: line 68, column 25
    function sortValue_8 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopAssignableQueuesLV.pcf: line 74, column 25
    function sortValue_9 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on RowIterator at DesktopAssignableQueuesLV.pcf: line 31, column 75
    function value_54 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return activities
    }
    
    property get aQFilterSet () : gw.api.filters.AssignableQueueFilters {
      return getVariableValue("aQFilterSet", 0) as gw.api.filters.AssignableQueueFilters
    }
    
    property set aQFilterSet ($arg :  gw.api.filters.AssignableQueueFilters) {
      setVariableValue("aQFilterSet", 0, $arg)
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<Activity> {
      return getVariableValue("activities", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setVariableValue("activities", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopAssignableQueuesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopAssignableQueuesLV.pcf: line 87, column 37
    function action_31 () : void {
      ActivityForward.go(activity)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopAssignableQueuesLV.pcf: line 111, column 25
    function action_45 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopAssignableQueuesLV.pcf: line 87, column 37
    function action_dest_32 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopAssignableQueuesLV.pcf: line 111, column 25
    function action_dest_46 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at DesktopAssignableQueuesLV.pcf: line 87, column 37
    function available_30 () : java.lang.Boolean {
      return perm.Activity.edit(activity)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at DesktopAssignableQueuesLV.pcf: line 31, column 75
    function checkBoxVisible_53 () : java.lang.Boolean {
      return perm.Activity.pickfromqueue
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Overdue_Cell) at DesktopAssignableQueuesLV.pcf: line 63, column 37
    function iconColor_19 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at DesktopAssignableQueuesLV.pcf: line 55, column 52
    function valueRoot_15 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=JobID_Cell) at DesktopAssignableQueuesLV.pcf: line 93, column 25
    function valueRoot_38 () : java.lang.Object {
      return activity.Job
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopAssignableQueuesLV.pcf: line 106, column 25
    function valueRoot_43 () : java.lang.Object {
      return activity.Job.Policy
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at DesktopAssignableQueuesLV.pcf: line 118, column 25
    function valueRoot_51 () : java.lang.Object {
      return activity.Job.Policy.Account.AccountHolderContact.PrimaryAddress
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at DesktopAssignableQueuesLV.pcf: line 55, column 52
    function value_14 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Overdue_Cell) at DesktopAssignableQueuesLV.pcf: line 63, column 37
    function value_17 () : java.lang.Boolean {
      return activity.Overdue
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at DesktopAssignableQueuesLV.pcf: line 68, column 25
    function value_21 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopAssignableQueuesLV.pcf: line 74, column 25
    function value_24 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAssignableQueuesLV.pcf: line 80, column 25
    function value_27 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopAssignableQueuesLV.pcf: line 87, column 37
    function value_33 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=JobID_Cell) at DesktopAssignableQueuesLV.pcf: line 93, column 25
    function value_37 () : java.lang.String {
      return activity.Job.PolicyNumberOrJobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopAssignableQueuesLV.pcf: line 99, column 25
    function value_40 () : java.lang.String {
      return activity.Job.Policy.Account.AccountHolderContact.Name == null ? activity.Account.AccountHolderContact.DisplayName : activity.Job.Policy.Account.AccountHolderContact.Name
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopAssignableQueuesLV.pcf: line 106, column 25
    function value_42 () : gw.api.productmodel.Product {
      return activity.Job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at DesktopAssignableQueuesLV.pcf: line 111, column 25
    function value_47 () : entity.User {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at DesktopAssignableQueuesLV.pcf: line 118, column 25
    function value_50 () : typekey.State {
      return activity.Job.Policy.Account.AccountHolderContact.PrimaryAddress.State
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}