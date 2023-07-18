package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/FederatedTeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedTeamActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedTeamActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedTeamActivitiesLV.pcf: line 34, column 101
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.federated.FederatedTeamViewActivityFilters().FilterOptions
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedTeamActivitiesLV.pcf: line 59, column 39
    function iconColor_3 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamActivitiesLV.pcf: line 17, column 52
    function initialValue_0 () : gw.api.web.team.PCFederatedTeamModel {
      return teamModel as gw.api.web.team.PCFederatedTeamModel
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamActivitiesLV.pcf: line 21, column 74
    function initialValue_1 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return pcFederatedTeamModel.Activities as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedTeamActivitiesLV.pcf: line 82, column 37
    function sortValue_10 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedTeamActivitiesLV.pcf: line 97, column 43
    function sortValue_11 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at FederatedTeamActivitiesLV.pcf: line 101, column 44
    function sortValue_12 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedTeamActivitiesLV.pcf: line 59, column 39
    function sortValue_4 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedTeamActivitiesLV.pcf: line 65, column 40
    function sortValue_5 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedTeamActivitiesLV.pcf: line 71, column 41
    function sortValue_6 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityValue
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Priority_Cell) at FederatedTeamActivitiesLV.pcf: line 71, column 41
    function sortValue_7 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PriorityCode
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedTeamActivitiesLV.pcf: line 77, column 47
    function sortValue_8 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedTeamActivitiesLV.pcf: line 77, column 47
    function sortValue_9 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.StatusCode
    }
    
    // 'value' attribute on RowIterator at FederatedTeamActivitiesLV.pcf: line 30, column 78
    function value_56 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return activities
    }
    
    // 'valueType' attribute on RowIterator at FederatedTeamActivitiesLV.pcf: line 30, column 78
    function verifyValueTypeIsAllowedType_57 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedTeamActivitiesLV.pcf: line 30, column 78
    function verifyValueTypeIsAllowedType_57 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedTeamActivitiesLV.pcf: line 30, column 78
    function verifyValueTypeIsAllowedType_57 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedTeamActivitiesLV.pcf: line 30, column 78
    function verifyValueType_58 () : void {
      var __valueTypeArg : gw.api.web.team.federated.TeamFederatedIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_57(__valueTypeArg)
    }
    
    property get activities () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return getVariableValue("activities", 0) as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    property set activities ($arg :  gw.api.web.team.federated.TeamFederatedIteratorBackingData) {
      setVariableValue("activities", 0, $arg)
    }
    
    property get pcFederatedTeamModel () : gw.api.web.team.PCFederatedTeamModel {
      return getVariableValue("pcFederatedTeamModel", 0) as gw.api.web.team.PCFederatedTeamModel
    }
    
    property set pcFederatedTeamModel ($arg :  gw.api.web.team.PCFederatedTeamModel) {
      setVariableValue("pcFederatedTeamModel", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedTeamActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedTeamActivitiesLV.pcf: line 82, column 37
    function action_33 () : void {
      FederatedActivityForward.push(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedTeamActivitiesLV.pcf: line 82, column 37
    function action_dest_34 () : pcf.api.Destination {
      return pcf.FederatedActivityForward.createDestination(activity.PublicId, activity.AccountPublicId, activity.Id)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedTeamActivitiesLV.pcf: line 40, column 35
    function condition_13 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canAssignOwnedActivity()
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedTeamActivitiesLV.pcf: line 43, column 33
    function condition_14 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canSkipOwnedActivity(activity)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedTeamActivitiesLV.pcf: line 46, column 37
    function condition_15 () : java.lang.Boolean {
      return gw.api.web.activity.FederatedActivityUtil.canCompleteOwnedActivity(activity)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedTeamActivitiesLV.pcf: line 65, column 40
    function fontColor_23 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedTeamActivitiesLV.pcf: line 59, column 39
    function iconColor_21 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at FederatedTeamActivitiesLV.pcf: line 53, column 52
    function valueRoot_17 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at FederatedTeamActivitiesLV.pcf: line 53, column 52
    function value_16 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at FederatedTeamActivitiesLV.pcf: line 59, column 39
    function value_19 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedTeamActivitiesLV.pcf: line 65, column 40
    function value_24 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FederatedTeamActivitiesLV.pcf: line 71, column 41
    function value_29 () : typekey.Priority {
      return typekey.Priority.get(activity.PriorityCode)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedTeamActivitiesLV.pcf: line 77, column 47
    function value_31 () : typekey.ActivityStatus {
      return typekey.ActivityStatus.get(activity.StatusCode)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedTeamActivitiesLV.pcf: line 82, column 37
    function value_35 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at FederatedTeamActivitiesLV.pcf: line 87, column 44
    function value_38 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedTeamActivitiesLV.pcf: line 92, column 41
    function value_41 () : java.lang.String {
      return activity.ContactName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedTeamActivitiesLV.pcf: line 97, column 43
    function value_44 () : java.lang.String {
      return activity.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at FederatedTeamActivitiesLV.pcf: line 101, column 44
    function value_47 () : java.lang.String {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at FederatedTeamActivitiesLV.pcf: line 107, column 38
    function value_50 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at FederatedTeamActivitiesLV.pcf: line 112, column 42
    function value_53 () : java.lang.String {
      return activity.AssignedUser
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedTeamActivitiesLV.pcf: line 65, column 40
    function verifyFontColorIsAllowedType_26 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedTeamActivitiesLV.pcf: line 65, column 40
    function verifyFontColorIsAllowedType_26 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedTeamActivitiesLV.pcf: line 65, column 40
    function verifyFontColor_27 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_26(__fontColorArg)
    }
    
    property get activity () : gw.api.web.desktop.data.activity.ActivityDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.activity.ActivityDTO
    }
    
    
  }
  
  
}