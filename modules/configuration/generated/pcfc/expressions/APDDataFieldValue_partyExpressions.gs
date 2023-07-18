package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.party.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_partyExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.party.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddFromSearch) at APDDataFieldValue.party.pcf: line 26, column 64
    function action_0 () : void {
      ContactSearchPopup.push(TC_APDINVOLVEDPARTY)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddFromSearch) at APDDataFieldValue.party.pcf: line 26, column 64
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_APDINVOLVEDPARTY)
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.Party = (__VALUE_TO_SET as PolicyContactRole)
    }
    
    // 'label' attribute on MenuItem (id=existingInvolvedParties) at APDDataFieldValue.party.pcf: line 43, column 125
    function label_12 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting",APDPolicyInvolvedParty.Type.TypeInfo.DisplayName)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddFromSearch) at APDDataFieldValue.party.pcf: line 26, column 64
    function onPick_2 (PickedValue :  Contact) : void {
      dataField.Party = dataField.Branch.addNewPolicyContactRoleForContact(PickedValue, TC_APDPOLICYINVOLVEDPARTY)
    }
    
    // 'sortBy' attribute on IteratorSort at APDDataFieldValue.party.pcf: line 34, column 26
    function sortBy_3 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function valueRange_20 () : java.lang.Object {
      return dataField.Branch.PolicyContactRoles.whereTypeIs(APDPolicyInvolvedParty)
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function valueRoot_19 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on MenuItemIterator (id=AddOtherInvolvedParty) at APDDataFieldValue.party.pcf: line 48, column 51
    function value_11 () : entity.AccountContactView[] {
      return dataField.Branch.UnassignedAPDInvolvedParties
    }
    
    // 'value' attribute on MenuItemIterator (id=AddOtherContact) at APDDataFieldValue.party.pcf: line 62, column 51
    function value_15 () : entity.AccountContactView[] {
      return dataField.Branch.APDInvolvedPartyOtherCandidates
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function value_17 () : PolicyContactRole {
      return dataField.Party
    }
    
    // 'value' attribute on MenuItemIterator (id=addNewContactType) at APDDataFieldValue.party.pcf: line 31, column 43
    function value_8 () : typekey.ContactType[] {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin).getAllowedContactTypesForPolicyContactRoleType(TC_APDPOLICYINVOLVEDPARTY)
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function verifyValueRangeIsAllowedType_21 ($$arg :  PolicyContactRole[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function verifyValueRange_22 () : void {
      var __valueRangeArg = dataField.Branch.PolicyContactRoles.whereTypeIs(APDPolicyInvolvedParty)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.party.pcf: line 21, column 44
    function visible_16 () : java.lang.Boolean {
      return dataField.VisibleInUI
    }
    
    property get dataField () : APDDataField {
      return getRequireValue("dataField", 0) as APDDataField
    }
    
    property set dataField ($arg :  APDDataField) {
      setRequireValue("dataField", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.party.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDDataFieldValueExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=OtherInvolvedParty) at APDDataFieldValue.party.pcf: line 52, column 57
    function action_9 () : void {
      dataField.Party = dataField.Branch.ManualLine.addNewAPDPolicyInvolvedPartyForContact(availableInvolvedParty.AccountContact.Contact)
    }
    
    // 'label' attribute on MenuItem (id=OtherInvolvedParty) at APDDataFieldValue.party.pcf: line 52, column 57
    function label_10 () : java.lang.Object {
      return availableInvolvedParty.DisplayName
    }
    
    property get availableInvolvedParty () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.party.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends APDDataFieldValueExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=OtherContact) at APDDataFieldValue.party.pcf: line 66, column 51
    function action_13 () : void {
      dataField.Party = dataField.Branch.ManualLine.addNewAPDPolicyInvolvedPartyForContact(availableContact.AccountContact.Contact)
    }
    
    // 'label' attribute on MenuItem (id=OtherContact) at APDDataFieldValue.party.pcf: line 66, column 51
    function label_14 () : java.lang.Object {
      return availableContact.DisplayName
    }
    
    property get availableContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.party.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDDataFieldValueExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=ContactType) at APDDataFieldValue.party.pcf: line 39, column 51
    function action_4 () : void {
      NewAPDPolicyInvolvedPartyPopup.push(dataField.Branch.ManualLine,contactType)
    }
    
    // 'action' attribute on PickerMenuItem (id=ContactType) at APDDataFieldValue.party.pcf: line 39, column 51
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewAPDPolicyInvolvedPartyPopup.createDestination(dataField.Branch.ManualLine,contactType)
    }
    
    // 'label' attribute on PickerMenuItem (id=ContactType) at APDDataFieldValue.party.pcf: line 39, column 51
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=ContactType) at APDDataFieldValue.party.pcf: line 39, column 51
    function onPick_7 (PickedValue :  APDPolicyInvolvedParty) : void {
      dataField.Party = PickedValue
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  
}