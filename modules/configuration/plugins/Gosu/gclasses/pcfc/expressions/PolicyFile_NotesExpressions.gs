package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Notes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_NotesExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Notes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_NotesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, activity :  Activity) : int {
      return 1
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date, activity :  Activity) : int {
      return 2
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Notes) at PolicyFile_Notes.pcf: line 10, column 62
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Notes) at PolicyFile_Notes.pcf: line 10, column 62
    static function canVisit_3 (activity :  Activity, asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return policyPeriod.Policy.canViewNotes() and perm.PolicyPeriod.view(policyPeriod) and perm.System.viewpolicyfile and perm.System.noteview
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Notes.pcf: line 27, column 57
    function def_onEnter_0 (def :  pcf.Policy_NotesScreen) : void {
      def.onEnter(policyPeriod, activity)
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Notes.pcf: line 27, column 57
    function def_refreshVariables_1 (def :  pcf.Policy_NotesScreen) : void {
      def.refreshVariables(policyPeriod, activity)
    }
    
    // Page (id=PolicyFile_Notes) at PolicyFile_Notes.pcf: line 10, column 62
    static function parent_4 (activity :  Activity, asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Notes {
      return super.CurrentLocation as pcf.PolicyFile_Notes
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}