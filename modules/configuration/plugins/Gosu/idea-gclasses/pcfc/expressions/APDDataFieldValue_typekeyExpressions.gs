package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_typekeyExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Definition) at APDDataFieldValue.typekey.pcf: line 47, column 48
    function action_11 () : void {
      APDDropDownDefinitionPopup.push(dataField.Attribute, dataField.Attribute typeis APDTerm, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=AddChoice) at APDDataFieldValue.typekey.pcf: line 36, column 95
    function action_4 () : void {
      APDNewDropdownEntryPopup.push(dataField)
    }
    
    // 'action' attribute on MenuItem (id=EditChoice) at APDDataFieldValue.typekey.pcf: line 42, column 95
    function action_8 () : void {
      APDDropdownEntryPopup.push(dataField.CodeValue, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=Definition) at APDDataFieldValue.typekey.pcf: line 47, column 48
    function action_dest_12 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(dataField.Attribute, dataField.Attribute typeis APDTerm, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=AddChoice) at APDDataFieldValue.typekey.pcf: line 36, column 95
    function action_dest_5 () : pcf.api.Destination {
      return pcf.APDNewDropdownEntryPopup.createDestination(dataField)
    }
    
    // 'action' attribute on MenuItem (id=EditChoice) at APDDataFieldValue.typekey.pcf: line 42, column 95
    function action_dest_9 () : pcf.api.Destination {
      return pcf.APDDropdownEntryPopup.createDestination(dataField.CodeValue, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=EditChoice) at APDDataFieldValue.typekey.pcf: line 42, column 95
    function available_6 () : java.lang.Boolean {
      return dataField.CodeValue != null
    }
    
    // 'value' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.CodeValue = (__VALUE_TO_SET as APDDropdownEntry)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at APDDataFieldValue.typekey.pcf: line 31, column 124
    function disablePostOnEnter_1 () : java.lang.Boolean {
      return not dataField.Attribute.UsedToConditionPeer
    }
    
    // 'initialValue' attribute on Variable at APDDataFieldValue.typekey.pcf: line 17, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'onChange' attribute on PostOnChange at APDDataFieldValue.typekey.pcf: line 31, column 124
    function onChange_2 () : void {
      dataField.syncPeerClauses(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDDataField)
    }
    
    // 'optionLabel' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function optionLabel_18 (VALUE :  APDDropdownEntry) : java.lang.String {
      return VALUE.Name
    }
    
    // 'validationExpression' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function validationExpression_13 () : java.lang.Object {
      return dataField.MinMaxError
    }
    
    // 'valueRange' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function valueRange_19 () : java.lang.Object {
      return dataField.AvailableCodes.orderBy(\c -> c.Sequence)
    }
    
    // 'value' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function valueRoot_17 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function value_15 () : APDDropdownEntry {
      return dataField.CodeValue
    }
    
    // 'valueRange' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function verifyValueRangeIsAllowedType_20 ($$arg :  APDDropdownEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function verifyValueRange_21 () : void {
      var __valueRangeArg = dataField.AvailableCodes.orderBy(\c -> c.Sequence)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'visible' attribute on MenuItem (id=Definition) at APDDataFieldValue.typekey.pcf: line 47, column 48
    function visible_10 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'valueVisible' attribute on RangeCell (id=DropDownCode_Cell) at APDDataFieldValue.typekey.pcf: line 28, column 44
    function visible_14 () : java.lang.Boolean {
      return dataField.VisibleInUI
    }
    
    // 'visible' attribute on MenuItem (id=AddChoice) at APDDataFieldValue.typekey.pcf: line 36, column 95
    function visible_3 () : java.lang.Boolean {
      return userPreferences.canDesign() and dataField.Attribute.OwningDropDown == null
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
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  
}