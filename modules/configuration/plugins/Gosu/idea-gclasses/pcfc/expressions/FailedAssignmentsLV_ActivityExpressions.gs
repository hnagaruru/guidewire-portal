package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/FailedAssignmentsLV.Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FailedAssignmentsLV_ActivityExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/FailedAssignmentsLV.Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FailedAssignmentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FailedAssignmentsLV.Activity.pcf: line 22, column 41
    function sortValue_0 (activity :  Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FailedAssignmentsLV.Activity.pcf: line 26, column 37
    function sortValue_1 (activity :  Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FailedAssignmentsLV.Activity.pcf: line 30, column 43
    function sortValue_2 (activity :  Activity) : java.lang.Object {
      return activity.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at FailedAssignmentsLV.Activity.pcf: line 34, column 74
    function sortValue_3 (activity :  Activity) : java.lang.Object {
      return activity.Job.Policy.Account.AccountHolderContact.Name
    }
    
    // 'value' attribute on RowIterator at FailedAssignmentsLV.Activity.pcf: line 16, column 39
    function value_16 () : entity.Assignable[] {
      return assignmentPopup.getFailedAssignables()
    }
    
    // 'type' attribute on RowIterator at FailedAssignmentsLV.Activity.pcf: line 16, column 39
    function verifyIteratorType_17 () : void {
      var entry : entity.Assignable = null
      var typedEntry : Activity
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as Activity
    }
    
    property get assignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("assignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("assignmentPopup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/FailedAssignmentsLV.Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FailedAssignmentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FailedAssignmentsLV.Activity.pcf: line 30, column 43
    function valueRoot_11 () : java.lang.Object {
      return activity.Job
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at FailedAssignmentsLV.Activity.pcf: line 34, column 74
    function valueRoot_14 () : java.lang.Object {
      return activity.Job.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FailedAssignmentsLV.Activity.pcf: line 22, column 41
    function valueRoot_5 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FailedAssignmentsLV.Activity.pcf: line 30, column 43
    function value_10 () : java.lang.String {
      return activity.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at FailedAssignmentsLV.Activity.pcf: line 34, column 74
    function value_13 () : java.lang.String {
      return activity.Job.Policy.Account.AccountHolderContact.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FailedAssignmentsLV.Activity.pcf: line 22, column 41
    function value_4 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FailedAssignmentsLV.Activity.pcf: line 26, column 37
    function value_7 () : java.lang.String {
      return activity.Subject
    }
    
    property get activity () : Activity {
      return getIteratedValue(1) as Activity
    }
    
    
  }
  
  
}