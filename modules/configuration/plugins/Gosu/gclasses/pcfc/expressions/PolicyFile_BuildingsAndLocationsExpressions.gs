package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policyfile/PolicyFile_BuildingsAndLocations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_BuildingsAndLocationsExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policyfile/PolicyFile_BuildingsAndLocations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_BuildingsAndLocationsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_CPBuildingsScreen) at PolicyFile_BuildingsAndLocations.pcf: line 19, column 42
    function def_onEnter_0 (def :  pcf.PolicyFile_CPBuildingsScreen) : void {
      def.onEnter(period.CPLine, false, null as gw.api.web.job.JobWizardHelper)
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_CPBuildingsScreen) at PolicyFile_BuildingsAndLocations.pcf: line 19, column 42
    function def_refreshVariables_1 (def :  pcf.PolicyFile_CPBuildingsScreen) : void {
      def.refreshVariables(period.CPLine, false, null as gw.api.web.job.JobWizardHelper)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_BuildingsAndLocations) at PolicyFile_BuildingsAndLocations.pcf: line 8, column 78
    static function parent_2 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_BuildingsAndLocations {
      return super.CurrentLocation as pcf.PolicyFile_BuildingsAndLocations
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}