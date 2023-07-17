package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopActivitiesLV.pcf: line 25, column 74
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopActivityFilters.filters()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 60, column 39
    function iconColor_3 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopActivitiesLV.pcf: line 40, column 24
    function sortBy_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopActivitiesLV.pcf: line 44, column 24
    function sortBy_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at DesktopActivitiesLV.pcf: line 111, column 25
    function sortValue_10 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 60, column 39
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 66, column 25
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 73, column 25
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopActivitiesLV.pcf: line 79, column 25
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 87, column 24
    function sortValue_8 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopActivitiesLV.pcf: line 106, column 25
    function sortValue_9 (activity :  entity.Activity) : java.lang.Object {
      return activity.Job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopActivitiesLV.pcf: line 21, column 75
    function value_61 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return activities
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<Activity> {
      return getRequireValue("activities", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setRequireValue("activities", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 87, column 24
    function action_37 () : void {
      ActivityForward.go(activity, activity.PolicyPeriod)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopActivitiesLV.pcf: line 111, column 25
    function action_52 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 87, column 24
    function action_dest_38 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, activity.PolicyPeriod)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopActivitiesLV.pcf: line 111, column 25
    function action_dest_53 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 87, column 24
    function available_36 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 31, column 35
    function condition_11 () : java.lang.Boolean {
      return activity.canAssign()
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 34, column 33
    function condition_12 () : java.lang.Boolean {
      return activity.canSkip()
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 37, column 37
    function condition_13 () : java.lang.Boolean {
      return activity.canComplete()
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 66, column 25
    function fontColor_21 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 73, column 25
    function fontColor_27 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 60, column 39
    function iconColor_19 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at DesktopActivitiesLV.pcf: line 46, column 72
    function useArchivedStyle_60 () : java.lang.Boolean {
      return activity.associatedItemIsArchived();
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at DesktopActivitiesLV.pcf: line 53, column 52
    function valueRoot_15 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopActivitiesLV.pcf: line 106, column 25
    function valueRoot_50 () : java.lang.Object {
      return activity.Job.Policy
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at DesktopActivitiesLV.pcf: line 53, column 52
    function value_14 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 60, column 39
    function value_17 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 66, column 25
    function value_22 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 73, column 25
    function value_28 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopActivitiesLV.pcf: line 79, column 25
    function value_33 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 87, column 24
    function value_39 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at DesktopActivitiesLV.pcf: line 93, column 25
    function value_43 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopActivitiesLV.pcf: line 99, column 25
    function value_46 () : java.lang.String {
      return activity.UIDisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopActivitiesLV.pcf: line 106, column 25
    function value_49 () : gw.api.productmodel.Product {
      return activity.Job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at DesktopActivitiesLV.pcf: line 111, column 25
    function value_54 () : entity.User {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at DesktopActivitiesLV.pcf: line 118, column 25
    function value_57 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 66, column 25
    function verifyFontColorIsAllowedType_24 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 66, column 25
    function verifyFontColorIsAllowedType_24 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 73, column 25
    function verifyFontColorIsAllowedType_30 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 73, column 25
    function verifyFontColorIsAllowedType_30 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 66, column 25
    function verifyFontColor_25 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_24(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 73, column 25
    function verifyFontColor_31 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_30(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}