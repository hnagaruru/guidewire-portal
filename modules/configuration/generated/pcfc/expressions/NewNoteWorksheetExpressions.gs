package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NewNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewNoteWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NewNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewNoteWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date, contingency :  Contingency) : int {
      return 2
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date, jobContainer :  Job) : int {
      return 1
    }
    
    // 'def' attribute on ScreenRef at NewNoteWorksheet.pcf: line 48, column 43
    function def_onEnter_6 (def :  pcf.NewNoteScreen) : void {
      def.onEnter(newNoteHelper)
    }
    
    // 'def' attribute on ScreenRef at NewNoteWorksheet.pcf: line 48, column 43
    function def_refreshVariables_7 (def :  pcf.NewNoteScreen) : void {
      def.refreshVariables(newNoteHelper)
    }
    
    // 'initialValue' attribute on Variable at NewNoteWorksheet.pcf: line 32, column 23
    function initialValue_3 () : Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at NewNoteWorksheet.pcf: line 36, column 19
    function initialValue_4 () : Job {
      return (policyPeriod.Job != null and not policyPeriod.Job.Complete) ? policyPeriod.Job : null
    }
    
    // 'initialValue' attribute on Variable at NewNoteWorksheet.pcf: line 46, column 37
    function initialValue_5 () : gw.note.NewNoteHelper {
      return gw.note.NewNoteHelper.forPolicy(account, policyPeriod, job, contingency)
    }
    
    // 'location' attribute on Scope at NewNoteWorksheet.pcf: line 18, column 54
    function location_0 () : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on Scope at NewNoteWorksheet.pcf: line 20, column 35
    function location_1 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'location' attribute on Scope at NewNoteWorksheet.pcf: line 22, column 49
    function location_2 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(contingency)
    }
    
    override property get CurrentLocation () : pcf.NewNoteWorksheet {
      return super.CurrentLocation as pcf.NewNoteWorksheet
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get contingency () : Contingency {
      return getVariableValue("contingency", 0) as Contingency
    }
    
    property set contingency ($arg :  Contingency) {
      setVariableValue("contingency", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobContainer () : Job {
      return getVariableValue("jobContainer", 0) as Job
    }
    
    property set jobContainer ($arg :  Job) {
      setVariableValue("jobContainer", 0, $arg)
    }
    
    property get newNoteHelper () : gw.note.NewNoteHelper {
      return getVariableValue("newNoteHelper", 0) as gw.note.NewNoteHelper
    }
    
    property set newNoteHelper ($arg :  gw.note.NewNoteHelper) {
      setVariableValue("newNoteHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}