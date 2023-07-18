package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHolds.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHolds.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PolicyHolds_NewPolicyHoldsButton) at PolicyHolds.pcf: line 23, column 48
    function action_2 () : void {
      NewPolicyHold.go()
    }
    
    // 'action' attribute on ToolbarButton (id=PolicyHolds_NewPolicyHoldsButton) at PolicyHolds.pcf: line 23, column 48
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NewPolicyHold.createDestination()
    }
    
    // 'canEdit' attribute on Page (id=PolicyHolds) at PolicyHolds.pcf: line 10, column 74
    function canEdit_11 () : java.lang.Boolean {
      return perm.System.polholdedit
    }
    
    // 'canVisit' attribute on Page (id=PolicyHolds) at PolicyHolds.pcf: line 10, column 74
    static function canVisit_12 () : java.lang.Boolean {
      return perm.System.polholdview
    }
    
    // 'checkedRowAction' attribute on CheckedValuesMenuItem (id=CopyRegions) at PolicyHolds.pcf: line 33, column 79
    function checkedRowAction_4 (element :  entity.PolicyHold, CheckedValue :  entity.PolicyHold) : void {
      NewPolicyHold.go(CheckedValue, false, true)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesMenuItem (id=CopyRules) at PolicyHolds.pcf: line 37, column 77
    function checkedRowAction_5 (element :  entity.PolicyHold, CheckedValue :  entity.PolicyHold) : void {
      NewPolicyHold.go(CheckedValue, true, false)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesMenuItem (id=CopyRegionsAndRules) at PolicyHolds.pcf: line 41, column 87
    function checkedRowAction_6 (element :  entity.PolicyHold, CheckedValue :  entity.PolicyHold) : void {
      NewPolicyHold.go(CheckedValue, true, true)
    }
    
    // 'def' attribute on PanelRef at PolicyHolds.pcf: line 52, column 55
    function def_onEnter_9 (def :  pcf.PolicyHoldsPanelSet) : void {
      def.onEnter(policyHolds, true)
    }
    
    // 'def' attribute on PanelRef at PolicyHolds.pcf: line 52, column 55
    function def_refreshVariables_10 (def :  pcf.PolicyHoldsPanelSet) : void {
      def.refreshVariables(policyHolds, true)
    }
    
    // 'initialValue' attribute on Variable at PolicyHolds.pcf: line 14, column 66
    function initialValue_0 () : gw.api.database.IQueryBeanResult<PolicyHold> {
      return PolicyHold.finder.findPolicyHolds()
    }
    
    // Page (id=PolicyHolds) at PolicyHolds.pcf: line 10, column 74
    static function parent_13 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    // 'visible' attribute on ToolbarButton (id=PolicyHolds_NewPolicyHoldsButton) at PolicyHolds.pcf: line 23, column 48
    function visible_1 () : java.lang.Boolean {
      return perm.System.polholdcreate
    }
    
    // 'visible' attribute on RemoveButton (id=PolicyHolds_DeleteButton) at PolicyHolds.pcf: line 49, column 47
    function visible_8 () : java.lang.Boolean {
      return perm.System.polholdelete
    }
    
    override property get CurrentLocation () : pcf.PolicyHolds {
      return super.CurrentLocation as pcf.PolicyHolds
    }
    
    property get policyHolds () : gw.api.database.IQueryBeanResult<PolicyHold> {
      return getVariableValue("policyHolds", 0) as gw.api.database.IQueryBeanResult<PolicyHold>
    }
    
    property set policyHolds ($arg :  gw.api.database.IQueryBeanResult<PolicyHold>) {
      setVariableValue("policyHolds", 0, $arg)
    }
    
    
  }
  
  
}