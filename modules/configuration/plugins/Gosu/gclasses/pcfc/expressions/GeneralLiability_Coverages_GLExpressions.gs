package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/GeneralLiability_Coverages_GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GeneralLiability_Coverages_GLExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/GeneralLiability_Coverages_GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GeneralLiability_Coverages_GLExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=GeneralLiability_Coverages_GL) at GeneralLiability_Coverages_GL.pcf: line 10, column 65
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=GeneralLiability_Coverages_GL) at GeneralLiability_Coverages_GL.pcf: line 10, column 65
    static function canVisit_3 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_Coverage_GLScreen) at GeneralLiability_Coverages_GL.pcf: line 21, column 42
    function def_onEnter_0 (def :  pcf.PolicyFile_Coverage_GLScreen) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_Coverage_GLScreen) at GeneralLiability_Coverages_GL.pcf: line 21, column 42
    function def_refreshVariables_1 (def :  pcf.PolicyFile_Coverage_GLScreen) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'parent' attribute on Page (id=GeneralLiability_Coverages_GL) at GeneralLiability_Coverages_GL.pcf: line 10, column 65
    static function parent_4 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.GeneralLiabilityLinks.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.GeneralLiability_Coverages_GL {
      return super.CurrentLocation as pcf.GeneralLiability_Coverages_GL
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