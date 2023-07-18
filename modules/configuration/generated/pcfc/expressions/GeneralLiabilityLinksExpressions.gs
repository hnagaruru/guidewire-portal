package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/GeneralLiabilityLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GeneralLiabilityLinksExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/GeneralLiabilityLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GeneralLiabilityLinksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 19, column 73
    function action_1 () : void {
      pcf.GeneralLiability_Coverages_GL.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 21, column 77
    function action_3 () : void {
      pcf.GeneralLiability_ExposureUnits_GL.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 23, column 73
    function action_5 () : void {
      pcf.GeneralLiability_Modifiers_GL.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 19, column 73
    function action_dest_2 () : pcf.api.Destination {
      return pcf.GeneralLiability_Coverages_GL.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 21, column 77
    function action_dest_4 () : pcf.api.Destination {
      return pcf.GeneralLiability_ExposureUnits_GL.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 23, column 73
    function action_dest_6 () : pcf.api.Destination {
      return pcf.GeneralLiability_Modifiers_GL.createDestination(policyPeriod, asOfDate)
    }
    
    // LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 8, column 91
    static function firstVisitableChildDestinationMethod_10 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.GeneralLiability_Coverages_GL.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.GeneralLiability_ExposureUnits_GL.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.GeneralLiability_Modifiers_GL.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'initialValue' attribute on Variable at GeneralLiabilityLinks.pcf: line 17, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'parent' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 8, column 91
    static function parent_7 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate) 
    }
    
    // 'tabBar' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 8, column 91
    function tabBar_onEnter_8 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=GeneralLiabilityLinks) at GeneralLiabilityLinks.pcf: line 8, column 91
    function tabBar_refreshVariables_9 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.GeneralLiabilityLinks {
      return super.CurrentLocation as pcf.GeneralLiabilityLinks
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