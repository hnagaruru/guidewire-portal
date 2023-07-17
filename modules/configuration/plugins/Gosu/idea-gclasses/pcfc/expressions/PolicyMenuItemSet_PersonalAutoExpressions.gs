package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policyfile/PolicyMenuItemSet.PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_PersonalAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policyfile/PolicyMenuItemSet.PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.PersonalAuto.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.PersonalAuto.pcf: line 37, column 72
    function action_10 () : void {
      PolicyFile_Forms_PA.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Drivers) at PolicyMenuItemSet.PersonalAuto.pcf: line 21, column 67
    function action_2 () : void {
      PolicyFile_PersonalAuto_Drivers.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Vehicles) at PolicyMenuItemSet.PersonalAuto.pcf: line 25, column 68
    function action_4 () : void {
      PolicyFile_PersonalAuto_Vehicles.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PersonalAuto) at PolicyMenuItemSet.PersonalAuto.pcf: line 29, column 64
    function action_6 () : void {
      PolicyFile_PersonalAuto.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.PersonalAuto.pcf: line 33, column 67
    function action_8 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.PersonalAuto.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.PersonalAuto.pcf: line 37, column 72
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_PA.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Drivers) at PolicyMenuItemSet.PersonalAuto.pcf: line 21, column 67
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_PersonalAuto_Drivers.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Vehicles) at PolicyMenuItemSet.PersonalAuto.pcf: line 25, column 68
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_PersonalAuto_Vehicles.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PersonalAuto) at PolicyMenuItemSet.PersonalAuto.pcf: line 29, column 64
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_PersonalAuto.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.PersonalAuto.pcf: line 33, column 67
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(period, asOfDate)
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