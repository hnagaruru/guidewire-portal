package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policyfile/PolicyFile_IMBuildingsAndLocations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_IMBuildingsAndLocationsExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policyfile/PolicyFile_IMBuildingsAndLocations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_IMBuildingsAndLocationsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_IMBuildingsScreen) at PolicyFile_IMBuildingsAndLocations.pcf: line 19, column 42
    function def_onEnter_0 (def :  pcf.PolicyFile_IMBuildingsScreen) : void {
      def.onEnter(period.IMLine, false, null as gw.api.web.job.JobWizardHelper)
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_IMBuildingsScreen) at PolicyFile_IMBuildingsAndLocations.pcf: line 19, column 42
    function def_refreshVariables_1 (def :  pcf.PolicyFile_IMBuildingsScreen) : void {
      def.refreshVariables(period.IMLine, false, null as gw.api.web.job.JobWizardHelper)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_IMBuildingsAndLocations) at PolicyFile_IMBuildingsAndLocations.pcf: line 8, column 78
    static function parent_2 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_IMBuildingsAndLocations {
      return super.CurrentLocation as pcf.PolicyFile_IMBuildingsAndLocations
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