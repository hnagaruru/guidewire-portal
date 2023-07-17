package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ActivitiesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitiesSearchLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ActivitiesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitiesSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitiesSearchLV.pcf: line 48, column 39
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitiesSearchLV.pcf: line 48, column 39
    function sortValue_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ActivitiesSearchLV.pcf: line 54, column 40
    function sortValue_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ActivitiesSearchLV.pcf: line 60, column 25
    function sortValue_3 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ActivitiesSearchLV.pcf: line 66, column 25
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivitiesSearchLV.pcf: line 73, column 24
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at ActivitiesSearchLV.pcf: line 93, column 25
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Job.Policy.ProductCode
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at ActivitiesSearchLV.pcf: line 98, column 25
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on RowIterator at ActivitiesSearchLV.pcf: line 24, column 75
    function value_54 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return activities
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<Activity> {
      return getRequireValue("activities", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setRequireValue("activities", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getRequireValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setRequireValue("policyNumber", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/ActivitiesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ActivitiesSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ActivitiesSearchLV.pcf: line 73, column 24
    function action_30 () : void {
      ActivityForward.go(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Account_Cell) at ActivitiesSearchLV.pcf: line 86, column 25
    function action_38 () : void {
      AccountFileForward.go(activity.Account)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ActivitiesSearchLV.pcf: line 98, column 25
    function action_46 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ActivitiesSearchLV.pcf: line 73, column 24
    function action_dest_31 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Account_Cell) at ActivitiesSearchLV.pcf: line 86, column 25
    function action_dest_39 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(activity.Account)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ActivitiesSearchLV.pcf: line 98, column 25
    function action_dest_47 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at ActivitiesSearchLV.pcf: line 35, column 37
    function condition_10 () : java.lang.Boolean {
      return activity.canComplete()
    }
    
    // 'condition' attribute on ToolbarFlag at ActivitiesSearchLV.pcf: line 29, column 35
    function condition_8 () : java.lang.Boolean {
      return activity.canAssign()
    }
    
    // 'condition' attribute on ToolbarFlag at ActivitiesSearchLV.pcf: line 32, column 33
    function condition_9 () : java.lang.Boolean {
      return activity.canSkip()
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitiesSearchLV.pcf: line 54, column 40
    function fontColor_18 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitiesSearchLV.pcf: line 48, column 39
    function iconColor_16 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at ActivitiesSearchLV.pcf: line 42, column 52
    function valueRoot_12 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ActivitiesSearchLV.pcf: line 93, column 25
    function valueRoot_44 () : java.lang.Object {
      return activity.Job.Policy
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at ActivitiesSearchLV.pcf: line 42, column 52
    function value_11 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitiesSearchLV.pcf: line 48, column 39
    function value_14 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ActivitiesSearchLV.pcf: line 54, column 40
    function value_19 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ActivitiesSearchLV.pcf: line 60, column 25
    function value_24 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ActivitiesSearchLV.pcf: line 66, column 25
    function value_27 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivitiesSearchLV.pcf: line 73, column 24
    function value_32 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at ActivitiesSearchLV.pcf: line 79, column 25
    function value_35 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at ActivitiesSearchLV.pcf: line 86, column 25
    function value_40 () : java.lang.String {
      return activity.UIDisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ActivitiesSearchLV.pcf: line 93, column 25
    function value_43 () : gw.api.productmodel.Product {
      return activity.Job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at ActivitiesSearchLV.pcf: line 98, column 25
    function value_48 () : entity.User {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at ActivitiesSearchLV.pcf: line 105, column 25
    function value_51 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitiesSearchLV.pcf: line 54, column 40
    function verifyFontColorIsAllowedType_21 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitiesSearchLV.pcf: line 54, column 40
    function verifyFontColorIsAllowedType_21 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitiesSearchLV.pcf: line 54, column 40
    function verifyFontColor_22 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_21(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}