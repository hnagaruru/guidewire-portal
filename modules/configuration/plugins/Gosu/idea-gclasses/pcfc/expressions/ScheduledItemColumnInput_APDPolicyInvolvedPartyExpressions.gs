package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemColumnInput_APDPolicyInvolvedPartyExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ScheduledItemColumnInputExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=OtherInvolvedParty) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 58, column 57
    function action_11 () : void {
      valueProvider.Value = schedItemAsCoverable.PolicyLine.addNewAPDPolicyInvolvedPartyForContact(availableInvolvedParty.AccountContact.Contact)
    }
    
    // 'label' attribute on MenuItem (id=OtherInvolvedParty) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 58, column 57
    function label_12 () : java.lang.Object {
      return availableInvolvedParty.DisplayName
    }
    
    property get availableInvolvedParty () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ScheduledItemColumnInputExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=OtherContact) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 72, column 51
    function action_15 () : void {
      valueProvider.Value = schedItemAsCoverable.PolicyLine.addNewAPDPolicyInvolvedPartyForContact(availableContact.AccountContact.Contact)
    }
    
    // 'label' attribute on MenuItem (id=OtherContact) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 72, column 51
    function label_16 () : java.lang.Object {
      return availableContact.DisplayName
    }
    
    property get availableContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScheduledItemColumnInputExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=ContactType) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 45, column 55
    function action_6 () : void {
      NewAPDPolicyInvolvedPartyPopup.push(schedItemAsCoverable.PolicyLine,contactType)
    }
    
    // 'action' attribute on PickerMenuItem (id=ContactType) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 45, column 55
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NewAPDPolicyInvolvedPartyPopup.createDestination(schedItemAsCoverable.PolicyLine,contactType)
    }
    
    // 'label' attribute on PickerMenuItem (id=ContactType) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 45, column 55
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=ContactType) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 45, column 55
    function onPick_9 (PickedValue :  APDPolicyInvolvedParty) : void {
      valueProvider.Value = PickedValue
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemColumnInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddFromSearch) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 33, column 64
    function action_2 () : void {
      ContactSearchPopup.push(TC_APDINVOLVEDPARTY)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddFromSearch) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 33, column 64
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_APDINVOLVEDPARTY)
    }
    
    // 'value' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueProvider.Value = (__VALUE_TO_SET as entity.KeyableBean)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 17, column 84
    function initialValue_0 () : gw.api.productmodel.SchedulePropertyValueProvider<KeyableBean> {
      return schedulePropertyInfo.createValueProvider(scheduledItem) as gw.api.productmodel.SchedulePropertyValueProvider<KeyableBean>
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 21, column 25
    function initialValue_1 () : Coverable {
      return scheduledItem as Coverable
    }
    
    // 'label' attribute on MenuItem (id=existingInvolvedParties) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 49, column 125
    function label_14 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting",APDPolicyInvolvedParty.Type.TypeInfo.DisplayName)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddFromSearch) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 33, column 64
    function onPick_4 (PickedValue :  Contact) : void {
      valueProvider.Value = (scheduledItem.BranchUntyped as PolicyPeriod).addNewPolicyContactRoleForContact(PickedValue, TC_APDPOLICYINVOLVEDPARTY)
    }
    
    // 'required' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function required_18 () : java.lang.Boolean {
      return schedulePropertyInfo.Required
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 40, column 26
    function sortBy_5 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function valueRange_22 () : java.lang.Object {
      return gw.api.upgrade.Coercions.makeArray<entity.KeyableBean>(schedulePropertyInfo.ValueRange)
    }
    
    // 'value' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function valueRoot_21 () : java.lang.Object {
      return valueProvider
    }
    
    // 'value' attribute on MenuItemIterator at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 37, column 43
    function value_10 () : typekey.ContactType[] {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin).getAllowedContactTypesForPolicyContactRoleType(TC_APDPOLICYINVOLVEDPARTY)
    }
    
    // 'value' attribute on MenuItemIterator (id=AddOtherInvolvedParty) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 54, column 51
    function value_13 () : entity.AccountContactView[] {
      return (scheduledItem.BranchUntyped as PolicyPeriod).UnassignedAPDInvolvedParties
    }
    
    // 'value' attribute on MenuItemIterator (id=AddOtherContact) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 68, column 51
    function value_17 () : entity.AccountContactView[] {
      return (scheduledItem.BranchUntyped as PolicyPeriod).APDInvolvedPartyOtherCandidates
    }
    
    // 'value' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function value_19 () : entity.KeyableBean {
      return valueProvider.Value
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.KeyableBean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.KeyableBean>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.APDPolicyInvolvedParty.pcf: line 28, column 38
    function verifyValueRange_24 () : void {
      var __valueRangeArg = gw.api.upgrade.Coercions.makeArray<entity.KeyableBean>(schedulePropertyInfo.ValueRange)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get schedItemAsCoverable () : Coverable {
      return getVariableValue("schedItemAsCoverable", 0) as Coverable
    }
    
    property set schedItemAsCoverable ($arg :  Coverable) {
      setVariableValue("schedItemAsCoverable", 0, $arg)
    }
    
    property get schedulePropertyInfo () : gw.api.productmodel.SchedulePropertyInfo {
      return getRequireValue("schedulePropertyInfo", 0) as gw.api.productmodel.SchedulePropertyInfo
    }
    
    property set schedulePropertyInfo ($arg :  gw.api.productmodel.SchedulePropertyInfo) {
      setRequireValue("schedulePropertyInfo", 0, $arg)
    }
    
    property get scheduledItem () : ScheduledItem {
      return getRequireValue("scheduledItem", 0) as ScheduledItem
    }
    
    property set scheduledItem ($arg :  ScheduledItem) {
      setRequireValue("scheduledItem", 0, $arg)
    }
    
    property get valueProvider () : gw.api.productmodel.SchedulePropertyValueProvider<KeyableBean> {
      return getVariableValue("valueProvider", 0) as gw.api.productmodel.SchedulePropertyValueProvider<KeyableBean>
    }
    
    property set valueProvider ($arg :  gw.api.productmodel.SchedulePropertyValueProvider<KeyableBean>) {
      setVariableValue("valueProvider", 0, $arg)
    }
    
    
  }
  
  
}