package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/FederatedDesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedDesktopActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/FederatedDesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedDesktopActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedDesktopActivitiesLV.pcf: line 42, column 88
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.activity.ActivityDataFilters.allFilters()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedDesktopActivitiesLV.pcf: line 70, column 39
    function iconColor_5 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at FederatedDesktopActivitiesLV.pcf: line 14, column 72
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.activity.ActivityFederatedData()
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedDesktopActivitiesLV.pcf: line 46, column 24
    function sortBy_2 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedDesktopActivitiesLV.pcf: line 49, column 24
    function sortBy_3 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityCode
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedDesktopActivitiesLV.pcf: line 53, column 24
    function sortBy_4 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedDesktopActivitiesLV.pcf: line 91, column 25
    function sortValue_10 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedDesktopActivitiesLV.pcf: line 91, column 25
    function sortValue_11 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusCode
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedDesktopActivitiesLV.pcf: line 99, column 24
    function sortValue_12 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedDesktopActivitiesLV.pcf: line 117, column 25
    function sortValue_13 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at FederatedDesktopActivitiesLV.pcf: line 123, column 25
    function sortValue_14 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedDesktopActivitiesLV.pcf: line 70, column 39
    function sortValue_6 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedDesktopActivitiesLV.pcf: line 76, column 25
    function sortValue_7 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function sortValue_8 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function sortValue_9 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityCode
    }
    
    // 'value' attribute on RowIterator at FederatedDesktopActivitiesLV.pcf: line 27, column 76
    function value_62 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedDataActivities
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopActivitiesLV.pcf: line 27, column 76
    function verifyValueTypeIsAllowedType_63 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopActivitiesLV.pcf: line 27, column 76
    function verifyValueTypeIsAllowedType_63 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopActivitiesLV.pcf: line 27, column 76
    function verifyValueTypeIsAllowedType_63 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedDesktopActivitiesLV.pcf: line 27, column 76
    function verifyValueType_64 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_63(__valueTypeArg)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/FederatedDesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedDesktopActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedDesktopActivitiesLV.pcf: line 99, column 24
    function action_39 () : void {
      FederatedActivityForward.push(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedDesktopActivitiesLV.pcf: line 99, column 24
    function action_dest_40 () : pcf.api.Destination {
      return pcf.FederatedActivityForward.createDestination(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at FederatedDesktopActivitiesLV.pcf: line 99, column 24
    function available_38 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityViewPermissionHandler.canViewActivity(User.util.getCurrentUser(), activity)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedDesktopActivitiesLV.pcf: line 32, column 35
    function condition_15 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canAssignOwnedActivity()
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedDesktopActivitiesLV.pcf: line 35, column 33
    function condition_16 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canSkipOwnedActivity(activity)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedDesktopActivitiesLV.pcf: line 38, column 37
    function condition_17 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canCompleteOwnedActivity(activity)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedDesktopActivitiesLV.pcf: line 76, column 25
    function fontColor_25 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function fontColor_31 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'highlighted' attribute on Row at FederatedDesktopActivitiesLV.pcf: line 56, column 55
    function highlighted_60 () : java.lang.Boolean {
      return processedActivities.contains(activity.PublicId)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedDesktopActivitiesLV.pcf: line 70, column 39
    function iconColor_23 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at FederatedDesktopActivitiesLV.pcf: line 56, column 55
    function useArchivedStyle_61 () : java.lang.Boolean {
      return activity.IsArchived
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at FederatedDesktopActivitiesLV.pcf: line 63, column 52
    function valueRoot_19 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at FederatedDesktopActivitiesLV.pcf: line 63, column 52
    function value_18 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedDesktopActivitiesLV.pcf: line 70, column 39
    function value_21 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedDesktopActivitiesLV.pcf: line 76, column 25
    function value_26 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function value_32 () : typekey.Priority {
      return typekey.Priority.get(activity.PriorityCode)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedDesktopActivitiesLV.pcf: line 91, column 25
    function value_36 () : typekey.ActivityStatus {
      return typekey.ActivityStatus.get(activity.StatusCode)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedDesktopActivitiesLV.pcf: line 99, column 24
    function value_41 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at FederatedDesktopActivitiesLV.pcf: line 105, column 25
    function value_45 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedDesktopActivitiesLV.pcf: line 111, column 25
    function value_48 () : java.lang.String {
      return activity.ContactName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedDesktopActivitiesLV.pcf: line 117, column 25
    function value_51 () : java.lang.String {
      return activity.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at FederatedDesktopActivitiesLV.pcf: line 123, column 25
    function value_54 () : java.lang.String {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at FederatedDesktopActivitiesLV.pcf: line 130, column 25
    function value_57 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedDesktopActivitiesLV.pcf: line 76, column 25
    function verifyFontColorIsAllowedType_28 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedDesktopActivitiesLV.pcf: line 76, column 25
    function verifyFontColorIsAllowedType_28 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function verifyFontColorIsAllowedType_33 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function verifyFontColorIsAllowedType_33 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedDesktopActivitiesLV.pcf: line 76, column 25
    function verifyFontColor_29 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_28(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedDesktopActivitiesLV.pcf: line 84, column 25
    function verifyFontColor_34 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_33(__fontColorArg)
    }
    
    property get activity () : gw.api.web.desktop.data.activity.ActivityDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.activity.ActivityDTO
    }
    
    
  }
  
  
}