package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/ContingencyActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContingencyActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContingencyActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ContingencyActivitiesLV.pcf: line 29, column 39
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ContingencyActivitiesLV.pcf: line 29, column 39
    function sortValue_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at ContingencyActivitiesLV.pcf: line 35, column 44
    function sortValue_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.CloseDate
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at ContingencyActivitiesLV.pcf: line 41, column 45
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ContingencyActivitiesLV.pcf: line 48, column 24
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at ContingencyActivitiesLV.pcf: line 52, column 50
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedTo as String
    }
    
    // 'value' attribute on RowIterator at ContingencyActivitiesLV.pcf: line 20, column 30
    function value_31 () : Activity[] {
      return activities
    }
    
    // 'visible' attribute on DateCell (id=CompletionDate_Cell) at ContingencyActivitiesLV.pcf: line 35, column 44
    function visible_3 () : java.lang.Boolean {
      return completionDateVisible
    }
    
    // 'visible' attribute on DateCell (id=EscalationDate_Cell) at ContingencyActivitiesLV.pcf: line 41, column 45
    function visible_5 () : java.lang.Boolean {
      return !completionDateVisible
    }
    
    property get activities () : Activity[] {
      return getRequireValue("activities", 0) as Activity[]
    }
    
    property set activities ($arg :  Activity[]) {
      setRequireValue("activities", 0, $arg)
    }
    
    property get completionDateVisible () : boolean {
      return getRequireValue("completionDateVisible", 0) as java.lang.Boolean
    }
    
    property set completionDateVisible ($arg :  boolean) {
      setRequireValue("completionDateVisible", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContingencyActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ContingencyActivitiesLV.pcf: line 48, column 24
    function action_21 () : void {
      ActivityDetailWorksheet.goInWorkspace(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ContingencyActivitiesLV.pcf: line 48, column 24
    function action_dest_22 () : pcf.api.Destination {
      return pcf.ActivityDetailWorksheet.createDestination(activity, activity.PolicyPeriod)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at ContingencyActivitiesLV.pcf: line 48, column 24
    function available_20 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ContingencyActivitiesLV.pcf: line 29, column 39
    function iconColor_10 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at ContingencyActivitiesLV.pcf: line 22, column 72
    function useArchivedStyle_30 () : java.lang.Boolean {
      return activity.associatedItemIsArchived();
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ContingencyActivitiesLV.pcf: line 29, column 39
    function valueRoot_9 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at ContingencyActivitiesLV.pcf: line 35, column 44
    function value_12 () : java.util.Date {
      return activity.CloseDate
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at ContingencyActivitiesLV.pcf: line 41, column 45
    function value_16 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ContingencyActivitiesLV.pcf: line 48, column 24
    function value_23 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at ContingencyActivitiesLV.pcf: line 52, column 50
    function value_27 () : java.lang.String {
      return activity.AssignedTo as String
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ContingencyActivitiesLV.pcf: line 29, column 39
    function value_8 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'visible' attribute on DateCell (id=CompletionDate_Cell) at ContingencyActivitiesLV.pcf: line 35, column 44
    function visible_14 () : java.lang.Boolean {
      return completionDateVisible
    }
    
    // 'visible' attribute on DateCell (id=EscalationDate_Cell) at ContingencyActivitiesLV.pcf: line 41, column 45
    function visible_18 () : java.lang.Boolean {
      return !completionDateVisible
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}