package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/SecondaryNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SecondaryNamedInsuredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/SecondaryNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SecondaryNamedInsuredInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountContact) at SecondaryNamedInsuredInputSet.pcf: line 67, column 47
    function action_17 () : void {
      period.changeSecondaryNamedInsuredTo(unassignedAccountContact.Contact)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountContact) at SecondaryNamedInsuredInputSet.pcf: line 67, column 47
    function label_18 () : java.lang.Object {
      return unassignedAccountContact
    }
    
    property get unassignedAccountContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/SecondaryNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SecondaryNamedInsuredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=ChangeSecondaryNamedInsuredLabel_Input) at SecondaryNamedInsuredInputSet.pcf: line 29, column 34
    function actionAvailable_5 () : java.lang.Boolean {
      return period.SecondaryNamedInsured != null
    }
    
    // 'action' attribute on MenuItem (id=AdditionalNamedPersonAdder) at SecondaryNamedInsuredInputSet.pcf: line 44, column 40
    function action_10 () : void {
      NewSecondaryNamedInsuredPopup.push(period)
    }
    
    // 'action' attribute on PickerMenuItem (id=SecondaryNamedInsuredABContactAdder) at SecondaryNamedInsuredInputSet.pcf: line 50, column 40
    function action_13 () : void {
      ContactSearchPopup.push(TC_NAMEDINSURED, period.Policy.Product)
    }
    
    // 'action' attribute on MenuItem (id=RemoveSecondaryNamedInsured) at SecondaryNamedInsuredInputSet.pcf: line 74, column 78
    function action_22 () : void {
      period.removePolicyNamedInsured(period.SecondaryNamedInsured)
    }
    
    // 'action' attribute on TextInput (id=ChangeSecondaryNamedInsuredButton_Input) at SecondaryNamedInsuredInputSet.pcf: line 39, column 29
    function action_25 () : void {
      EditPolicyContactRolePopup.push(period.SecondaryNamedInsured, openForEdit)
    }
    
    // 'action' attribute on TextInput (id=ChangeSecondaryNamedInsuredLabel_Input) at SecondaryNamedInsuredInputSet.pcf: line 29, column 34
    function action_3 () : void {
      EditPolicyContactRolePopup.push(period.SecondaryNamedInsured, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=AdditionalNamedPersonAdder) at SecondaryNamedInsuredInputSet.pcf: line 44, column 40
    function action_dest_11 () : pcf.api.Destination {
      return pcf.NewSecondaryNamedInsuredPopup.createDestination(period)
    }
    
    // 'action' attribute on PickerMenuItem (id=SecondaryNamedInsuredABContactAdder) at SecondaryNamedInsuredInputSet.pcf: line 50, column 40
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_NAMEDINSURED, period.Policy.Product)
    }
    
    // 'action' attribute on TextInput (id=ChangeSecondaryNamedInsuredButton_Input) at SecondaryNamedInsuredInputSet.pcf: line 39, column 29
    function action_dest_26 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(period.SecondaryNamedInsured, openForEdit)
    }
    
    // 'action' attribute on TextInput (id=ChangeSecondaryNamedInsuredLabel_Input) at SecondaryNamedInsuredInputSet.pcf: line 29, column 34
    function action_dest_4 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(period.SecondaryNamedInsured, openForEdit)
    }
    
    // 'available' attribute on TextInput (id=ChangeSecondaryNamedInsuredButton_Input) at SecondaryNamedInsuredInputSet.pcf: line 39, column 29
    function available_23 () : java.lang.Boolean {
      return period.Active
    }
    
    // 'initialValue' attribute on Variable at SecondaryNamedInsuredInputSet.pcf: line 15, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> period.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at SecondaryNamedInsuredInputSet.pcf: line 20, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'onPick' attribute on PickerMenuItem (id=SecondaryNamedInsuredABContactAdder) at SecondaryNamedInsuredInputSet.pcf: line 50, column 40
    function onPick_15 (PickedValue :  Contact) : void {
      period.changeSecondaryNamedInsuredTo(PickedValue)
    }
    
    // 'sortBy' attribute on IteratorSort at SecondaryNamedInsuredInputSet.pcf: line 63, column 28
    function sortBy_16 (unassignedAccountContact :  entity.AccountContact) : java.lang.Object {
      return unassignedAccountContact.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedAccountContactIterator) at SecondaryNamedInsuredInputSet.pcf: line 60, column 47
    function value_19 () : entity.AccountContact[] {
      return period.SecondaryNamedInsuredCandidates
    }
    
    // 'value' attribute on TextInput (id=ChangeSecondaryNamedInsuredLabel_Input) at SecondaryNamedInsuredInputSet.pcf: line 29, column 34
    function value_6 () : java.lang.String {
      return SecondaryNamedInsuredDisplayName
    }
    
    // 'visible' attribute on TextInput (id=ChangeSecondaryNamedInsuredLabel_Input) at SecondaryNamedInsuredInputSet.pcf: line 29, column 34
    function visible_2 () : java.lang.Boolean {
      return not openForEdit
    }
    
    // 'visible' attribute on MenuItem (id=ExistingNamedInsured) at SecondaryNamedInsuredInputSet.pcf: line 55, column 37
    function visible_20 () : java.lang.Boolean {
      return !period.Promoted 
    }
    
    // 'visible' attribute on MenuItem (id=RemoveSecondaryNamedInsured) at SecondaryNamedInsuredInputSet.pcf: line 74, column 78
    function visible_21 () : java.lang.Boolean {
      return !period.Promoted and period.SecondaryNamedInsured != null
    }
    
    // 'visible' attribute on TextInput (id=ChangeSecondaryNamedInsuredButton_Input) at SecondaryNamedInsuredInputSet.pcf: line 39, column 29
    function visible_24 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on InputSet (id=SecondaryNamedInsuredInputSet) at SecondaryNamedInsuredInputSet.pcf: line 7, column 46
    function visible_32 () : java.lang.Boolean {
      return period.Policy.Product.Personal
    }
    
    // 'visible' attribute on MenuItem (id=AdditionalNamedPersonAdder) at SecondaryNamedInsuredInputSet.pcf: line 44, column 40
    function visible_9 () : java.lang.Boolean {
      return not period.Promoted
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get SecondaryNamedInsuredDisplayName() : String {
      return period.SecondaryNamedInsured == null ? " " : period.SecondaryNamedInsured.DisplayName  // specifically return " " because letting it return null leaves a one space link
    }
    
    
  }
  
  
}