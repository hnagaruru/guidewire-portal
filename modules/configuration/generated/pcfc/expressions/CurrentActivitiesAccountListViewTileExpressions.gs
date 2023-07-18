package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/CurrentActivitiesAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentActivitiesAccountListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/CurrentActivitiesAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentActivitiesAccountListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentActivitiesAccountListViewTile) at CurrentActivitiesAccountListViewTile.pcf: line 11, column 46
    function action_40 () : void {
      CurrentActivitiesAccountPopup.push(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentActivitiesAccountListViewTile) at CurrentActivitiesAccountListViewTile.pcf: line 11, column 46
    function action_dest_41 () : pcf.api.Destination {
      return pcf.CurrentActivitiesAccountPopup.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at CurrentActivitiesAccountListViewTile.pcf: line 19, column 62
    function initialValue_38 () : gw.api.web.dashboard.ui.account.ActivityHelper {
      return new gw.api.web.dashboard.ui.account.ActivityHelper(account)
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentActivitiesAccountListViewTile.pcf: line 27, column 24
    function sortBy_0 (activity :  Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CurrentActivitiesAccountListViewTile.pcf: line 30, column 24
    function sortBy_1 (activity :  Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function sortValue_2 (activity :  Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 45, column 37
    function sortValue_3 (activity :  Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 52, column 25
    function sortValue_4 (activity :  Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 58, column 41
    function sortValue_5 (activity :  Activity) : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 64, column 25
    function sortValue_6 (activity :  Activity) : java.lang.Object {
      return activity.Policy.LatestPeriod.PolicyNumber ?: ''
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 69, column 55
    function sortValue_7 (activity :  Activity) : java.lang.Object {
      return activity.Policy.ProductDisplayName
    }
    
    // 'value' attribute on RowIterator at CurrentActivitiesAccountListViewTile.pcf: line 24, column 30
    function value_37 () : Activity[] {
      return helper.Activities
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=CurrentActivitiesAccountListViewTile) at CurrentActivitiesAccountListViewTile.pcf: line 11, column 46
    function visible_39 () : java.lang.Boolean {
      return helper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get helper () : gw.api.web.dashboard.ui.account.ActivityHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.account.ActivityHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.account.ActivityHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/CurrentActivitiesAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentActivitiesAccountListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 45, column 37
    function action_15 () : void {
      ActivityForward.go(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 64, column 25
    function action_30 () : void {
      PolicyFileForward.go(activity.Policy.LatestPeriod.PolicyNumber, activity.Policy.LatestPeriod.PeriodStart)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 45, column 37
    function action_dest_16 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 64, column 25
    function action_dest_31 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(activity.Policy.LatestPeriod.PolicyNumber, activity.Policy.LatestPeriod.PeriodStart)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 45, column 37
    function available_14 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 52, column 25
    function fontColor_21 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function fontColor_8 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function valueRoot_10 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 69, column 55
    function valueRoot_35 () : java.lang.Object {
      return activity.Policy
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 45, column 37
    function value_17 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 52, column 25
    function value_22 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 58, column 41
    function value_27 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 64, column 25
    function value_32 () : java.lang.String {
      return activity.Policy.LatestPeriod.PolicyNumber ?: ''
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 69, column 55
    function value_34 () : java.lang.String {
      return activity.Policy.ProductDisplayName
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function value_9 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function verifyFontColorIsAllowedType_11 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function verifyFontColorIsAllowedType_11 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 52, column 25
    function verifyFontColorIsAllowedType_24 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 52, column 25
    function verifyFontColorIsAllowedType_24 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 38, column 25
    function verifyFontColor_12 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_11(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesAccountListViewTile.pcf: line 52, column 25
    function verifyFontColor_25 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_24(__fontColorArg)
    }
    
    property get activity () : Activity {
      return getIteratedValue(1) as Activity
    }
    
    
  }
  
  
}