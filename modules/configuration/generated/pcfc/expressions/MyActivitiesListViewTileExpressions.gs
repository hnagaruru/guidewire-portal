package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary/MyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MyActivitiesListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MyActivitiesListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at MyActivitiesListViewTile.pcf: line 53, column 24
    function action_23 () : void {
      ActivityForward.go(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=AccountHolder_Cell) at MyActivitiesListViewTile.pcf: line 72, column 70
    function action_38 () : void {
      ContactForward.go(activity.Account.AccountHolderContact)
    }
    
    // 'action' attribute on ButtonCell (id=CompleteButton_Cell) at MyActivitiesListViewTile.pcf: line 89, column 80
    function action_50 () : void {
      gw.api.web.activity.ActivityUtil.completeActivity(activity, null)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at MyActivitiesListViewTile.pcf: line 53, column 24
    function action_dest_24 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=AccountHolder_Cell) at MyActivitiesListViewTile.pcf: line 72, column 70
    function action_dest_39 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(activity.Account.AccountHolderContact)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at MyActivitiesListViewTile.pcf: line 53, column 24
    function available_22 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'available' attribute on ButtonCell (id=CompleteButton_Cell) at MyActivitiesListViewTile.pcf: line 89, column 80
    function available_49 () : java.lang.Boolean {
      return activity.canComplete() and activity.canRecur() == false
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MyActivitiesListViewTile.pcf: line 45, column 25
    function fontColor_16 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at MyActivitiesListViewTile.pcf: line 60, column 25
    function fontColor_29 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at MyActivitiesListViewTile.pcf: line 39, column 32
    function iconColor_14 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at MyActivitiesListViewTile.pcf: line 29, column 72
    function useArchivedStyle_52 () : java.lang.Boolean {
      return activity.associatedItemIsArchived();
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at MyActivitiesListViewTile.pcf: line 39, column 32
    function valueRoot_13 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at MyActivitiesListViewTile.pcf: line 72, column 70
    function valueRoot_41 () : java.lang.Object {
      return activity.Account.AccountHolderContact
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyActivitiesListViewTile.pcf: line 84, column 52
    function valueRoot_47 () : java.lang.Object {
      return activity.Policy
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at MyActivitiesListViewTile.pcf: line 39, column 32
    function value_12 () : boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at MyActivitiesListViewTile.pcf: line 45, column 25
    function value_17 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at MyActivitiesListViewTile.pcf: line 53, column 24
    function value_25 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at MyActivitiesListViewTile.pcf: line 60, column 25
    function value_30 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at MyActivitiesListViewTile.pcf: line 66, column 25
    function value_35 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at MyActivitiesListViewTile.pcf: line 72, column 70
    function value_40 () : java.lang.String {
      return activity.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at MyActivitiesListViewTile.pcf: line 77, column 25
    function value_43 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyActivitiesListViewTile.pcf: line 84, column 52
    function value_46 () : gw.api.productmodel.Product {
      return activity.Policy.Product
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MyActivitiesListViewTile.pcf: line 45, column 25
    function verifyFontColorIsAllowedType_19 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MyActivitiesListViewTile.pcf: line 45, column 25
    function verifyFontColorIsAllowedType_19 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at MyActivitiesListViewTile.pcf: line 60, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at MyActivitiesListViewTile.pcf: line 60, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MyActivitiesListViewTile.pcf: line 45, column 25
    function verifyFontColor_20 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_19(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at MyActivitiesListViewTile.pcf: line 60, column 25
    function verifyFontColor_33 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_32(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MyActivitiesListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MyActivitiesListViewTile) at MyActivitiesListViewTile.pcf: line 11, column 56
    function action_54 () : void {
      DesktopActivities.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MyActivitiesListViewTile) at MyActivitiesListViewTile.pcf: line 11, column 56
    function action_dest_55 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MyActivitiesListViewTile.pcf: line 20, column 74
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopActivityFilters.filters()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at MyActivitiesListViewTile.pcf: line 39, column 32
    function iconColor_3 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'sortBy' attribute on IteratorSort at MyActivitiesListViewTile.pcf: line 24, column 24
    function sortBy_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at MyActivitiesListViewTile.pcf: line 27, column 24
    function sortBy_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at MyActivitiesListViewTile.pcf: line 77, column 25
    function sortValue_10 (activity :  entity.Activity) : java.lang.Object {
      return activity.EscalationDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at MyActivitiesListViewTile.pcf: line 84, column 52
    function sortValue_11 (activity :  entity.Activity) : java.lang.Object {
      return activity.Policy.ProductCode
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at MyActivitiesListViewTile.pcf: line 39, column 32
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at MyActivitiesListViewTile.pcf: line 45, column 25
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at MyActivitiesListViewTile.pcf: line 53, column 24
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at MyActivitiesListViewTile.pcf: line 60, column 25
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at MyActivitiesListViewTile.pcf: line 66, column 25
    function sortValue_8 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at MyActivitiesListViewTile.pcf: line 72, column 70
    function sortValue_9 (activity :  entity.Activity) : java.lang.Object {
      return activity.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on RowIterator at MyActivitiesListViewTile.pcf: line 16, column 75
    function value_53 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return Activity.finder.getAssignedToCurrentUser()
    }
    
    
  }
  
  
}