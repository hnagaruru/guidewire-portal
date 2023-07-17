package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/CurrentActivitiesPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentActivitiesPolicyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CurrentActivitiesPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentActivitiesPolicyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentActivitiesPolicyPopup.pcf: line 22, column 28
    function sortBy_0 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentActivitiesPolicyPopup.pcf: line 25, column 28
    function sortBy_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function sortValue_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyPopup.pcf: line 38, column 41
    function sortValue_3 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyPopup.pcf: line 44, column 45
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesPolicyPopup.pcf: line 49, column 45
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on RowIterator at CurrentActivitiesPolicyPopup.pcf: line 19, column 79
    function value_28 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return policyPeriod.Policy.AllOpenActivities
    }
    
    override property get CurrentLocation () : pcf.CurrentActivitiesPolicyPopup {
      return super.CurrentLocation as pcf.CurrentActivitiesPolicyPopup
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CurrentActivitiesPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentActivitiesPolicyPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyPopup.pcf: line 38, column 41
    function action_13 () : void {
      ActivityForward.go(activity, policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyPopup.pcf: line 38, column 41
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, policyPeriod)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyPopup.pcf: line 38, column 41
    function available_12 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyPopup.pcf: line 44, column 45
    function fontColor_19 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function fontColor_6 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function valueRoot_8 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyPopup.pcf: line 38, column 41
    function value_15 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyPopup.pcf: line 44, column 45
    function value_20 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesPolicyPopup.pcf: line 49, column 45
    function value_25 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function value_7 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyPopup.pcf: line 44, column 45
    function verifyFontColorIsAllowedType_22 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyPopup.pcf: line 44, column 45
    function verifyFontColorIsAllowedType_22 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function verifyFontColorIsAllowedType_9 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function verifyFontColorIsAllowedType_9 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyPopup.pcf: line 32, column 44
    function verifyFontColor_10 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_9(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyPopup.pcf: line 44, column 45
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