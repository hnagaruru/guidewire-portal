package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyMenuItemSet.BusinessAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_BusinessAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyMenuItemSet.BusinessAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.BusinessAuto.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Drivers) at PolicyMenuItemSet.BusinessAuto.pcf: line 37, column 67
    function action_10 () : void {
      PolicyFile_Drivers.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_AutoSymbols) at PolicyMenuItemSet.BusinessAuto.pcf: line 41, column 71
    function action_12 () : void {
      PolicyFile_CoveredAutoSymbols.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.BusinessAuto.pcf: line 45, column 69
    function action_14 () : void {
      PolicyFile_Modifiers_BA.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.BusinessAuto.pcf: line 49, column 67
    function action_16 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.BusinessAuto.pcf: line 53, column 72
    function action_18 () : void {
      PolicyFile_Forms_BA.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.BusinessAuto.pcf: line 21, column 69
    function action_2 () : void {
      PolicyFile_Locations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Vehicles) at PolicyMenuItemSet.BusinessAuto.pcf: line 25, column 68
    function action_4 () : void {
      PolicyFile_Vehicles.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_CommAuto) at PolicyMenuItemSet.BusinessAuto.pcf: line 29, column 78
    function action_6 () : void {
      PolicyFile_CommercialAuto.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_StateInfo) at PolicyMenuItemSet.BusinessAuto.pcf: line 33, column 69
    function action_8 () : void {
      PolicyFile_StateInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.BusinessAuto.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Drivers) at PolicyMenuItemSet.BusinessAuto.pcf: line 37, column 67
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Drivers.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_AutoSymbols) at PolicyMenuItemSet.BusinessAuto.pcf: line 41, column 71
    function action_dest_13 () : pcf.api.Destination {
      return pcf.PolicyFile_CoveredAutoSymbols.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.BusinessAuto.pcf: line 45, column 69
    function action_dest_15 () : pcf.api.Destination {
      return pcf.PolicyFile_Modifiers_BA.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.BusinessAuto.pcf: line 49, column 67
    function action_dest_17 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.BusinessAuto.pcf: line 53, column 72
    function action_dest_19 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_BA.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.BusinessAuto.pcf: line 21, column 69
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_Locations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Vehicles) at PolicyMenuItemSet.BusinessAuto.pcf: line 25, column 68
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_Vehicles.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_CommAuto) at PolicyMenuItemSet.BusinessAuto.pcf: line 29, column 78
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_CommercialAuto.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_StateInfo) at PolicyMenuItemSet.BusinessAuto.pcf: line 33, column 69
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PolicyFile_StateInfo.createDestination(period, asOfDate)
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