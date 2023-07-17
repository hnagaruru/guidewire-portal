package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobNumberForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobNumberForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobNumberForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobNumberForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobNumber :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at JobNumberForward.pcf: line 27, column 34
    function action_2 () : void {
      PolicySearch.go(error)
    }
    
    // 'action' attribute on ForwardCondition at JobNumberForward.pcf: line 30, column 38
    function action_5 () : void {
      JobForward.go(jobToFind)
    }
    
    // 'action' attribute on ForwardCondition at JobNumberForward.pcf: line 27, column 34
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination(error)
    }
    
    // 'action' attribute on ForwardCondition at JobNumberForward.pcf: line 30, column 38
    function action_dest_6 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(jobToFind)
    }
    
    // 'condition' attribute on ForwardCondition at JobNumberForward.pcf: line 27, column 34
    function condition_4 () : java.lang.Boolean {
      return error != null
    }
    
    // 'condition' attribute on ForwardCondition at JobNumberForward.pcf: line 30, column 38
    function condition_7 () : java.lang.Boolean {
      return jobToFind != null
    }
    
    // 'initialValue' attribute on Variable at JobNumberForward.pcf: line 17, column 19
    function initialValue_0 () : Job {
      return Job.finder.findJobByJobNumber(jobNumber)
    }
    
    // 'initialValue' attribute on Variable at JobNumberForward.pcf: line 21, column 22
    function initialValue_1 () : String {
      return checkForError()
    }
    
    // 'parent' attribute on Forward (id=JobNumberForward) at JobNumberForward.pcf: line 8, column 30
    static function parent_8 (jobNumber :  String) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.JobNumberForward {
      return super.CurrentLocation as pcf.JobNumberForward
    }
    
    property get error () : String {
      return getVariableValue("error", 0) as String
    }
    
    property set error ($arg :  String) {
      setVariableValue("error", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get jobToFind () : Job {
      return getVariableValue("jobToFind", 0) as Job
    }
    
    property set jobToFind ($arg :  Job) {
      setVariableValue("jobToFind", 0, $arg)
    }
    
    property get paymentMethod () : String {
      return getVariableValue("paymentMethod", 0) as String
    }
    
    property set paymentMethod ($arg :  String) {
      setVariableValue("paymentMethod", 0, $arg)
    }
    
    function checkForError() : String{
      if (jobNumber == null)
        return DisplayKey.get("Web.Errors.MissingUrlParameter", "JobNumber")
      if (jobToFind == null)
        return DisplayKey.get("Web.Errors.MissingFromSystem", "Job", jobNumber)
      if (not (User.util.CurrentUser as User).canView( jobToFind ))
        return DisplayKey.get("Java.Error.Permission.View", "job")
      return null
    }
    
    
  }
  
  
}