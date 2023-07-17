package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.location.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_locationExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.location.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewLocation) at APDDataFieldValue.location.pcf: line 39, column 52
    function action_4 () : void {
      LocationPopup.push(null, null, dataField.Branch, true, true, true)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditLocation) at APDDataFieldValue.location.pcf: line 45, column 47
    function action_8 () : void {
      LocationPopup.push(null, dataField.Location, dataField.Branch, true, true, true)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewLocation) at APDDataFieldValue.location.pcf: line 39, column 52
    function action_dest_5 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, null, dataField.Branch, true, true, true)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditLocation) at APDDataFieldValue.location.pcf: line 45, column 47
    function action_dest_9 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, dataField.Location, dataField.Branch, true, true, true)
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.AccountLocation = (__VALUE_TO_SET as AccountLocation)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at APDDataFieldValue.location.pcf: line 34, column 124
    function disablePostOnEnter_2 () : java.lang.Boolean {
      return not dataField.Attribute.UsedToConditionPeer
    }
    
    // 'initialValue' attribute on Variable at APDDataFieldValue.location.pcf: line 17, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'initialValue' attribute on Variable at APDDataFieldValue.location.pcf: line 21, column 23
    function initialValue_1 () : Boolean {
      return userPreferences.canDesign()
    }
    
    // 'onChange' attribute on PostOnChange at APDDataFieldValue.location.pcf: line 34, column 124
    function onChange_3 () : void {
      dataField.syncPeerClauses(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewLocation) at APDDataFieldValue.location.pcf: line 39, column 52
    function onPick_6 (PickedValue :  PolicyLocation) : void {
      dataField.Location = PickedValue
    }
    
    // 'optionLabel' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function optionLabel_16 (VALUE :  AccountLocation) : java.lang.String {
      return dataField.Branch.getPolicyLocationOptionDisplayName(VALUE)
    }
    
    // 'required' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function required_12 () : java.lang.Boolean {
      return dataField.Attribute.Jurisdiction
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function valueRange_17 () : java.lang.Object {
      return dataField.Branch.Policy.Account.AccountLocations
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function valueRoot_15 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function value_13 () : AccountLocation {
      return dataField.AccountLocation
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function verifyValueRangeIsAllowedType_18 ($$arg :  AccountLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function verifyValueRange_19 () : void {
      var __valueRangeArg = dataField.Branch.Policy.Account.AccountLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on RangeCell (id=value_Cell) at APDDataFieldValue.location.pcf: line 31, column 44
    function visible_11 () : java.lang.Boolean {
      return dataField.VisibleInUI
    }
    
    // 'visible' attribute on PickerMenuItem (id=EditLocation) at APDDataFieldValue.location.pcf: line 45, column 47
    function visible_7 () : java.lang.Boolean {
      return dataField.Location != null
    }
    
    property get canDesign () : Boolean {
      return getVariableValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setVariableValue("canDesign", 0, $arg)
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