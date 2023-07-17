package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policyfile/PolicyMenuItemSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_BusinessOwnersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policyfile/PolicyMenuItemSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.BusinessOwners.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.BusinessOwners.pcf: line 37, column 67
    function action_10 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.BusinessOwners.pcf: line 41, column 72
    function action_12 () : void {
      PolicyFile_Forms_BOP.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_BOP) at PolicyMenuItemSet.BusinessOwners.pcf: line 21, column 89
    function action_2 () : void {
      PolicyFile_PolicyLine_BOP.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.BusinessOwners.pcf: line 25, column 69
    function action_4 () : void {
      PolicyFile_Locations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Buildings) at PolicyMenuItemSet.BusinessOwners.pcf: line 29, column 69
    function action_6 () : void {
      PolicyFile_Buildings_BOP.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.BusinessOwners.pcf: line 33, column 69
    function action_8 () : void {
      PolicyFile_Modifiers_BOP.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.BusinessOwners.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.BusinessOwners.pcf: line 37, column 67
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.BusinessOwners.pcf: line 41, column 72
    function action_dest_13 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_BOP.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_BOP) at PolicyMenuItemSet.BusinessOwners.pcf: line 21, column 89
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyLine_BOP.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.BusinessOwners.pcf: line 25, column 69
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_Locations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Buildings) at PolicyMenuItemSet.BusinessOwners.pcf: line 29, column 69
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_Buildings_BOP.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.BusinessOwners.pcf: line 33, column 69
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PolicyFile_Modifiers_BOP.createDestination(period, asOfDate)
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