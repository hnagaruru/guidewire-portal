package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policyfile/PolicyMenuItemSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_GeneralLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policyfile/PolicyMenuItemSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.GeneralLiability.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.GeneralLiability.pcf: line 37, column 67
    function action_10 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.GeneralLiability.pcf: line 41, column 72
    function action_12 () : void {
      PolicyFile_Forms_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.GeneralLiability.pcf: line 21, column 69
    function action_2 () : void {
      PolicyFile_Locations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GeneralLiability) at PolicyMenuItemSet.GeneralLiability.pcf: line 25, column 68
    function action_4 () : void {
      PolicyFile_Coverages_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GeneralExposures) at PolicyMenuItemSet.GeneralLiability.pcf: line 29, column 75
    function action_6 () : void {
      PolicyFile_ExposureUnits_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.GeneralLiability.pcf: line 33, column 69
    function action_8 () : void {
      PolicyFile_Modifiers_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.GeneralLiability.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.GeneralLiability.pcf: line 37, column 67
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.GeneralLiability.pcf: line 41, column 72
    function action_dest_13 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_GL.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.GeneralLiability.pcf: line 21, column 69
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_Locations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GeneralLiability) at PolicyMenuItemSet.GeneralLiability.pcf: line 25, column 68
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_Coverages_GL.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GeneralExposures) at PolicyMenuItemSet.GeneralLiability.pcf: line 29, column 75
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_ExposureUnits_GL.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.GeneralLiability.pcf: line 33, column 69
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PolicyFile_Modifiers_GL.createDestination(period, asOfDate)
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}