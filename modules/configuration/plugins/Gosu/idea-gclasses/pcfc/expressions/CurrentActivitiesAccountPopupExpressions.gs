package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/CurrentActivitiesAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentActivitiesAccountPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/CurrentActivitiesAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentActivitiesAccountPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentActivitiesAccountPopup.pcf: line 22, column 28
    function sortBy_0 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentActivitiesAccountPopup.pcf: line 25, column 28
    function sortBy_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function sortValue_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountPopup.pcf: line 38, column 41
    function sortValue_3 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountPopup.pcf: line 44, column 45
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesAccountPopup.pcf: line 49, column 45
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on RowIterator at CurrentActivitiesAccountPopup.pcf: line 19, column 79
    function value_35 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return account.AllOpenActivities
    }
    
    override property get CurrentLocation () : pcf.CurrentActivitiesAccountPopup {
      return super.CurrentLocation as pcf.CurrentActivitiesAccountPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/CurrentActivitiesAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentActivitiesAccountPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountPopup.pcf: line 38, column 41
    function action_13 () : void {
      ActivityForward.go(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountPopup.pcf: line 55, column 72
    function action_28 () : void {
      PolicyFileForward.go(activity.Policy.LatestPeriod.PolicyNumber, activity.Policy.LatestPeriod.PeriodStart)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountPopup.pcf: line 38, column 41
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountPopup.pcf: line 55, column 72
    function action_dest_29 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(activity.Policy.LatestPeriod.PolicyNumber, activity.Policy.LatestPeriod.PeriodStart)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountPopup.pcf: line 38, column 41
    function available_12 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountPopup.pcf: line 44, column 45
    function fontColor_19 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function fontColor_6 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentActivitiesAccountPopup.pcf: line 60, column 60
    function valueRoot_33 () : java.lang.Object {
      return activity.Policy.Product
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function valueRoot_8 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountPopup.pcf: line 38, column 41
    function value_15 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountPopup.pcf: line 44, column 45
    function value_20 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesAccountPopup.pcf: line 49, column 45
    function value_25 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountPopup.pcf: line 55, column 72
    function value_30 () : java.lang.String {
      return activity.Policy.LatestPeriod.PolicyNumber ?: ''
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentActivitiesAccountPopup.pcf: line 60, column 60
    function value_32 () : java.lang.String {
      return activity.Policy.Product.DisplayName
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function value_7 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountPopup.pcf: line 44, column 45
    function verifyFontColorIsAllowedType_22 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountPopup.pcf: line 44, column 45
    function verifyFontColorIsAllowedType_22 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function verifyFontColorIsAllowedType_9 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function verifyFontColorIsAllowedType_9 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountPopup.pcf: line 32, column 44
    function verifyFontColor_10 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_9(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountPopup.pcf: line 44, column 45
    function verifyFontColor_23 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_22(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}