package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policyfile/PolicyMenuItemSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_InlandMarineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policyfile/PolicyMenuItemSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.InlandMarine.pcf: line 21, column 70
    function action_1 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_SignPart) at PolicyMenuItemSet.InlandMarine.pcf: line 40, column 51
    function action_12 () : void {
      PolicyFile_IMSignPart.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.InlandMarine.pcf: line 44, column 67
    function action_14 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.InlandMarine.pcf: line 48, column 72
    function action_16 () : void {
      PolicyFile_Forms_IM.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Buildings) at PolicyMenuItemSet.InlandMarine.pcf: line 25, column 81
    function action_3 () : void {
      PolicyFile_IMBuildingsAndLocations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_AccountsRecPart) at PolicyMenuItemSet.InlandMarine.pcf: line 30, column 58
    function action_6 () : void {
      PolicyFile_AccountsRecPart.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_ContractorsEquipmentPart) at PolicyMenuItemSet.InlandMarine.pcf: line 35, column 61
    function action_9 () : void {
      PolicyFile_ContractorsEquipmentPart.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_ContractorsEquipmentPart) at PolicyMenuItemSet.InlandMarine.pcf: line 35, column 61
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PolicyFile_ContractorsEquipmentPart.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_SignPart) at PolicyMenuItemSet.InlandMarine.pcf: line 40, column 51
    function action_dest_13 () : pcf.api.Destination {
      return pcf.PolicyFile_IMSignPart.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.InlandMarine.pcf: line 44, column 67
    function action_dest_15 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.InlandMarine.pcf: line 48, column 72
    function action_dest_17 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_IM.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.InlandMarine.pcf: line 21, column 70
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Buildings) at PolicyMenuItemSet.InlandMarine.pcf: line 25, column 81
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PolicyFile_IMBuildingsAndLocations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_AccountsRecPart) at PolicyMenuItemSet.InlandMarine.pcf: line 30, column 58
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_AccountsRecPart.createDestination(period, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyMenuItemSet.InlandMarine.pcf: line 17, column 35
    function initialValue_0 () : productmodel.IMLine {
      return period.IMLine
    }
    
    // 'visible' attribute on MenuItem (id=PolicyMenuItemSet_SignPart) at PolicyMenuItemSet.InlandMarine.pcf: line 40, column 51
    function visible_11 () : java.lang.Boolean {
      return period.IMLine.IMSignPart != null
    }
    
    // 'visible' attribute on MenuItem (id=PolicyMenuItemSet_AccountsRecPart) at PolicyMenuItemSet.InlandMarine.pcf: line 30, column 58
    function visible_5 () : java.lang.Boolean {
      return period.IMLine.IMAccountsRecPart != null
    }
    
    // 'visible' attribute on MenuItem (id=PolicyMenuItemSet_ContractorsEquipmentPart) at PolicyMenuItemSet.InlandMarine.pcf: line 35, column 61
    function visible_8 () : java.lang.Boolean {
      return period.IMLine.ContractorsEquipPart != null
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get imLine () : productmodel.IMLine {
      return getVariableValue("imLine", 0) as productmodel.IMLine
    }
    
    property set imLine ($arg :  productmodel.IMLine) {
      setVariableValue("imLine", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}