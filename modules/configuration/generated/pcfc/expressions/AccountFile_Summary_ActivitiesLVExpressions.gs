package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_ActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Summary_ActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_ActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Summary_ActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 19, column 40
    function sortValue_0 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 24, column 41
    function sortValue_1 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 31, column 24
    function sortValue_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on RowIterator at AccountFile_Summary_ActivitiesLV.pcf: line 14, column 75
    function value_19 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return account.AllOpenActivities as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_ActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Summary_ActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 31, column 24
    function action_10 () : void {
      ActivityForward.go(activity, activity.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 31, column 24
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, activity.PolicyPeriod)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 31, column 24
    function available_9 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 19, column 40
    function valueRoot_4 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 31, column 24
    function value_12 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 37, column 41
    function value_16 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on DateCell (id=Due_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 19, column 40
    function value_3 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at AccountFile_Summary_ActivitiesLV.pcf: line 24, column 41
    function value_6 () : typekey.Priority {
      return activity.Priority
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}