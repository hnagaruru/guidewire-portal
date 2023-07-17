package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyHoldsLDPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Code_Cell) at PolicyHoldsPanelSet.pcf: line 48, column 52
    function actionAvailable_10 () : java.lang.Boolean {
      return perm.System.polholdedit
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at PolicyHoldsPanelSet.pcf: line 55, column 49
    function action_14 () : void {
      PolicyHoldDetail.go(policyHold)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at PolicyHoldsPanelSet.pcf: line 48, column 52
    function action_8 () : void {
      PolicyHoldDetail.go(policyHold)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at PolicyHoldsPanelSet.pcf: line 55, column 49
    function action_dest_15 () : pcf.api.Destination {
      return pcf.PolicyHoldDetail.createDestination(policyHold)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at PolicyHoldsPanelSet.pcf: line 48, column 52
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PolicyHoldDetail.createDestination(policyHold)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at PolicyHoldsPanelSet.pcf: line 32, column 83
    function checkBoxVisible_26 () : java.lang.Boolean {
      return perm.System.polholdcreate and perm.System.polholdelete
    }
    
    // 'value' attribute on TypeKeyCell (id=HoldType_Cell) at PolicyHoldsPanelSet.pcf: line 41, column 57
    function valueRoot_6 () : java.lang.Object {
      return policyHold
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at PolicyHoldsPanelSet.pcf: line 48, column 52
    function value_11 () : java.lang.String {
      return policyHold.PolicyHoldCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyHoldsPanelSet.pcf: line 55, column 49
    function value_17 () : java.lang.String {
      return policyHold.Description
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PolicyHoldsPanelSet.pcf: line 60, column 47
    function value_20 () : java.util.Date {
      return policyHold.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at PolicyHoldsPanelSet.pcf: line 65, column 45
    function value_23 () : java.util.Date {
      return policyHold.EndDate
    }
    
    // 'value' attribute on TypeKeyCell (id=HoldType_Cell) at PolicyHoldsPanelSet.pcf: line 41, column 57
    function value_5 () : typekey.UWIssueCheckingSet {
      return policyHold.HoldType
    }
    
    property get policyHold () : entity.PolicyHold {
      return getIteratedValue(2) as entity.PolicyHold
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldsLDPExpressionsImpl extends PolicyHoldsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldsPanelSet.pcf: line 71, column 49
    function def_onEnter_30 (def :  pcf.PolicyHoldDetailCV) : void {
      def.onEnter(selectedPolicyHold, showTimeStamps)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldsPanelSet.pcf: line 71, column 49
    function def_refreshVariables_31 (def :  pcf.PolicyHoldDetailCV) : void {
      def.refreshVariables(selectedPolicyHold, showTimeStamps)
    }
    
    // 'value' attribute on TypeKeyCell (id=HoldType_Cell) at PolicyHoldsPanelSet.pcf: line 41, column 57
    function sortValue_0 (policyHold :  entity.PolicyHold) : java.lang.Object {
      return policyHold.HoldType
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at PolicyHoldsPanelSet.pcf: line 48, column 52
    function sortValue_1 (policyHold :  entity.PolicyHold) : java.lang.Object {
      return policyHold.PolicyHoldCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyHoldsPanelSet.pcf: line 55, column 49
    function sortValue_2 (policyHold :  entity.PolicyHold) : java.lang.Object {
      return policyHold.Description
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PolicyHoldsPanelSet.pcf: line 60, column 47
    function sortValue_3 (policyHold :  entity.PolicyHold) : java.lang.Object {
      return policyHold.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at PolicyHoldsPanelSet.pcf: line 65, column 45
    function sortValue_4 (policyHold :  entity.PolicyHold) : java.lang.Object {
      return policyHold.EndDate
    }
    
    // 'toRemove' attribute on RowIterator at PolicyHoldsPanelSet.pcf: line 32, column 83
    function toRemove_27 (policyHold :  entity.PolicyHold) : void {
      gw.api.admin.PolicyHoldUtil.deletePolicyHold(policyHold)
    }
    
    // 'value' attribute on RowIterator at PolicyHoldsPanelSet.pcf: line 32, column 83
    function value_28 () : gw.api.database.IQueryBeanResult<entity.PolicyHold> {
      return policyHolds
    }
    
    // 'visible' attribute on PanelRef at PolicyHoldsPanelSet.pcf: line 71, column 49
    function visible_29 () : java.lang.Boolean {
      return selectedPolicyHold != null
    }
    
    property get selectedPolicyHold () : PolicyHold {
      return getCurrentSelection(1) as PolicyHold
    }
    
    property set selectedPolicyHold ($arg :  PolicyHold) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get policyHolds () : gw.api.database.IQueryBeanResult<PolicyHold> {
      return getRequireValue("policyHolds", 0) as gw.api.database.IQueryBeanResult<PolicyHold>
    }
    
    property set policyHolds ($arg :  gw.api.database.IQueryBeanResult<PolicyHold>) {
      setRequireValue("policyHolds", 0, $arg)
    }
    
    property get showTimeStamps () : boolean {
      return getRequireValue("showTimeStamps", 0) as java.lang.Boolean
    }
    
    property set showTimeStamps ($arg :  boolean) {
      setRequireValue("showTimeStamps", 0, $arg)
    }
    
    
  }
  
  
}