package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/CommercialPropertyLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommercialPropertyLinksExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/CommercialPropertyLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommercialPropertyLinksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 19, column 84
    function action_1 () : void {
      pcf.CommercialProperty_BuildingsAndLocations.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 21, column 70
    function action_3 () : void {
      pcf.CommercialProperty_Blanket.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 23, column 72
    function action_5 () : void {
      pcf.CommercialProperty_Modifiers.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 19, column 84
    function action_dest_2 () : pcf.api.Destination {
      return pcf.CommercialProperty_BuildingsAndLocations.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 21, column 70
    function action_dest_4 () : pcf.api.Destination {
      return pcf.CommercialProperty_Blanket.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 23, column 72
    function action_dest_6 () : pcf.api.Destination {
      return pcf.CommercialProperty_Modifiers.createDestination(policyPeriod, asOfDate)
    }
    
    // LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 8, column 93
    static function firstVisitableChildDestinationMethod_10 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.CommercialProperty_BuildingsAndLocations.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.CommercialProperty_Blanket.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.CommercialProperty_Modifiers.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'initialValue' attribute on Variable at CommercialPropertyLinks.pcf: line 17, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'parent' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 8, column 93
    static function parent_7 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate) 
    }
    
    // 'tabBar' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 8, column 93
    function tabBar_onEnter_8 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=CommercialPropertyLinks) at CommercialPropertyLinks.pcf: line 8, column 93
    function tabBar_refreshVariables_9 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.CommercialPropertyLinks {
      return super.CurrentLocation as pcf.CommercialPropertyLinks
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