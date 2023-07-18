package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policyfile/PolicyMenuItemSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_WorkersCompExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policyfile/PolicyMenuItemSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.WorkersComp.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.WorkersComp.pcf: line 37, column 72
    function action_10 () : void {
      PolicyFile_Forms_WC.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.WorkersComp.pcf: line 21, column 69
    function action_2 () : void {
      PolicyFile_Locations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_WCStateRate) at PolicyMenuItemSet.WorkersComp.pcf: line 25, column 71
    function action_4 () : void {
      PolicyFile_WCStateRate.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_WCOptions) at PolicyMenuItemSet.WorkersComp.pcf: line 29, column 69
    function action_6 () : void {
      PolicyFile_WCOptions.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.WorkersComp.pcf: line 33, column 67
    function action_8 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.WorkersComp.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.WorkersComp.pcf: line 37, column 72
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_WC.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.WorkersComp.pcf: line 21, column 69
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_Locations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_WCStateRate) at PolicyMenuItemSet.WorkersComp.pcf: line 25, column 71
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_WCStateRate.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_WCOptions) at PolicyMenuItemSet.WorkersComp.pcf: line 29, column 69
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_WCOptions.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.WorkersComp.pcf: line 33, column 67
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