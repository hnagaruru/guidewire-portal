package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 79, column 37
    function action_33 () : void {
      ActivityForward.go(activity)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 99, column 44
    function action_46 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 110, column 42
    function action_54 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 79, column 37
    function action_dest_34 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 99, column 44
    function action_dest_47 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 110, column 42
    function action_dest_55 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamActivitiesLV.pcf: line 39, column 35
    function condition_11 () : java.lang.Boolean {
      return activity.canAssign()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamActivitiesLV.pcf: line 42, column 33
    function condition_12 () : java.lang.Boolean {
      return activity.canSkip()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamActivitiesLV.pcf: line 45, column 37
    function condition_13 () : java.lang.Boolean {
      return activity.canComplete()
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 64, column 40
    function fontColor_21 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 58, column 39
    function iconColor_19 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at TeamActivitiesLV.pcf: line 52, column 52
    function valueRoot_15 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at TeamActivitiesLV.pcf: line 52, column 52
    function value_14 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 58, column 39
    function value_17 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 64, column 40
    function value_22 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at TeamActivitiesLV.pcf: line 69, column 41
    function value_27 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TeamActivitiesLV.pcf: line 74, column 47
    function value_30 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 79, column 37
    function value_35 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at TeamActivitiesLV.pcf: line 84, column 44
    function value_38 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamActivitiesLV.pcf: line 89, column 43
    function value_41 () : java.lang.String {
      return activity.UIDisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamActivitiesLV.pcf: line 95, column 52
    function value_44 () : gw.api.productmodel.Product {
      return activity.Policy.Product ?: activity.Job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at TeamActivitiesLV.pcf: line 99, column 44
    function value_48 () : entity.User {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TeamActivitiesLV.pcf: line 105, column 38
    function value_51 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'value' attribute on AltUserCell (id=AssignedTo_Cell) at TeamActivitiesLV.pcf: line 110, column 42
    function value_56 () : entity.User {
      return activity.AssignedUser
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 64, column 40
    function verifyFontColorIsAllowedType_24 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 64, column 40
    function verifyFontColorIsAllowedType_24 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 64, column 40
    function verifyFontColor_25 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_24(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamActivitiesLV.pcf: line 33, column 82
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewActivityFilters().FilterOptions
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 58, column 39
    function iconColor_3 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at TeamActivitiesLV.pcf: line 17, column 50
    function initialValue_0 () : gw.api.web.team.PCDefaultTeamModel {
      return teamModel as gw.api.web.team.PCDefaultTeamModel
    }
    
    // 'initialValue' attribute on Variable at TeamActivitiesLV.pcf: line 21, column 64
    function initialValue_1 () : gw.api.database.IQueryBeanResult<Activity> {
      return pcDefaultTeamModel.Activities
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at TeamActivitiesLV.pcf: line 99, column 44
    function sortValue_10 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 58, column 39
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 64, column 40
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at TeamActivitiesLV.pcf: line 69, column 41
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TeamActivitiesLV.pcf: line 74, column 47
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 79, column 37
    function sortValue_8 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamActivitiesLV.pcf: line 95, column 52
    function sortValue_9 (activity :  entity.Activity) : java.lang.Object {
      return activity.Job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at TeamActivitiesLV.pcf: line 29, column 75
    function value_59 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return activities
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<Activity> {
      return getVariableValue("activities", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setVariableValue("activities", 0, $arg)
    }
    
    property get pcDefaultTeamModel () : gw.api.web.team.PCDefaultTeamModel {
      return getVariableValue("pcDefaultTeamModel", 0) as gw.api.web.team.PCDefaultTeamModel
    }
    
    property set pcDefaultTeamModel ($arg :  gw.api.web.team.PCDefaultTeamModel) {
      setVariableValue("pcDefaultTeamModel", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}