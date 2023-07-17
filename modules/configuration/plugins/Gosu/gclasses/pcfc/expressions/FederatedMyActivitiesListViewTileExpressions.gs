package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedMyActivitiesListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedMyActivitiesListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMyActivitiesListViewTile) at FederatedMyActivitiesListViewTile.pcf: line 11, column 56
    function action_59 () : void {
      DesktopActivities.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMyActivitiesListViewTile) at FederatedMyActivitiesListViewTile.pcf: line 11, column 56
    function action_dest_60 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedMyActivitiesListViewTile.pcf: line 21, column 88
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.activity.ActivityDataFilters.allFilters()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 43, column 32
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMyActivitiesListViewTile.pcf: line 25, column 24
    function sortBy_1 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMyActivitiesListViewTile.pcf: line 28, column 24
    function sortBy_2 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityCode
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMyActivitiesListViewTile.pcf: line 31, column 24
    function sortBy_3 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyActivitiesListViewTile.pcf: line 72, column 25
    function sortValue_10 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyActivitiesListViewTile.pcf: line 72, column 25
    function sortValue_11 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return  activity.StatusCode
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 79, column 41
    function sortValue_12 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.ContactName
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 84, column 25
    function sortValue_13 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.EscalationDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedMyActivitiesListViewTile.pcf: line 90, column 43
    function sortValue_14 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PolicyProductCode
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 43, column 32
    function sortValue_5 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 25
    function sortValue_6 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 57, column 24
    function sortValue_7 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function sortValue_8 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function sortValue_9 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return  activity.PriorityCode
    }
    
    // 'value' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function value_56 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.activity.ActivityFederatedData()
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueTypeIsAllowedType_57 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueTypeIsAllowedType_57 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueTypeIsAllowedType_57 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueType_58 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_57(__valueTypeArg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedMyActivitiesListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 57, column 24
    function action_26 () : void {
      FederatedActivityForward.push(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'action' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 79, column 41
    function action_40 () : void {
      FederatedContactForward.push(activity.AccountPublicId, activity.ContactPublicId)
    }
    
    // 'action' attribute on ButtonCell (id=CompleteButton_Cell) at FederatedMyActivitiesListViewTile.pcf: line 95, column 151
    function action_53 () : void {
      var activityEntity = Activity.finder.findActivityByPublicId(activity.PublicId); gw.api.web.activity.ActivityUtil.completeActivity(activityEntity, null)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 57, column 24
    function action_dest_27 () : pcf.api.Destination {
      return pcf.FederatedActivityForward.createDestination(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'action' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 79, column 41
    function action_dest_41 () : pcf.api.Destination {
      return pcf.FederatedContactForward.createDestination(activity.AccountPublicId, activity.ContactPublicId)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 57, column 24
    function available_25 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityViewPermissionHandler.canViewActivity(User.util.getCurrentUser(), activity)
    }
    
    // 'available' attribute on ButtonCell (id=CompleteButton_Cell) at FederatedMyActivitiesListViewTile.pcf: line 95, column 151
    function available_52 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canCompleteActivity(User.util.getCurrentUser(), activity) and not activity.Recurring
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 25
    function fontColor_19 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function fontColor_32 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 43, column 32
    function iconColor_17 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at FederatedMyActivitiesListViewTile.pcf: line 33, column 48
    function useArchivedStyle_55 () : java.lang.Boolean {
      return activity.IsArchived
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 43, column 32
    function valueRoot_16 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 43, column 32
    function value_15 () : boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 25
    function value_20 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 57, column 24
    function value_28 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function value_33 () : typekey.Priority {
      return typekey.Priority.get(activity.PriorityCode)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyActivitiesListViewTile.pcf: line 72, column 25
    function value_37 () : typekey.ActivityStatus {
      return typekey.ActivityStatus.get(activity.StatusCode)
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 79, column 41
    function value_42 () : java.lang.String {
      return activity.ContactName
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 84, column 25
    function value_46 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedMyActivitiesListViewTile.pcf: line 90, column 43
    function value_49 () : java.lang.String {
      return activity.PolicyProduct
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 25
    function verifyFontColorIsAllowedType_22 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 25
    function verifyFontColorIsAllowedType_22 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function verifyFontColorIsAllowedType_34 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function verifyFontColorIsAllowedType_34 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 25
    function verifyFontColor_23 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_22(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 65, column 25
    function verifyFontColor_35 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_34(__fontColorArg)
    }
    
    property get activity () : gw.api.web.desktop.data.activity.ActivityDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.activity.ActivityDTO
    }
    
    
  }
  
  
}