package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropDownDefinitionDVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropDownDefinitionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=SyncTypelist) at APDDropDownDefinitionDV.pcf: line 57, column 72
    function action_26 () : void {
      attribute.sync()
    }
    
    // 'value' attribute on TypeKeyInput (id=DropDownType_Input) at APDDropDownDefinitionDV.pcf: line 34, column 26
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.DropDownType = (__VALUE_TO_SET as typekey.APDDropDownType)
    }
    
    // 'value' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.OwningDropDown = (__VALUE_TO_SET as entity.APDAttribute)
    }
    
    // 'value' attribute on TextInput (id=Typelist_Input) at APDDropDownDefinitionDV.pcf: line 57, column 72
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Typelist = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TypelistStatus_Input) at APDDropDownDefinitionDV.pcf: line 74, column 73
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.DoNotRegenerate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on TypeKeyInput (id=DropDownType_Input) at APDDropDownDefinitionDV.pcf: line 34, column 26
    function editable_8 () : java.lang.Boolean {
      return attribute.CanChangeType
    }
    
    // 'initialValue' attribute on Variable at APDDropDownDefinitionDV.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'initialValue' attribute on Variable at APDDropDownDefinitionDV.pcf: line 20, column 23
    function initialValue_1 () : APDTerm {
      return isTerm ? attribute as APDTerm : null 
    }
    
    // 'label' attribute on TextInput (id=Typelist_Input) at APDDropDownDefinitionDV.pcf: line 57, column 72
    function label_28 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDAttributeDropDownDefinition.Typelist"))
    }
    
    // 'onChange' attribute on PostOnChange at APDDropDownDefinitionDV.pcf: line 50, column 58
    function onChange_16 () : void {
      attribute.switchOwningDropDown()
    }
    
    // 'onChange' attribute on PostOnChange at APDDropDownDefinitionDV.pcf: line 36, column 134
    function onChange_7 () : void {
      attribute.switchDropdownType(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDDropdownColumn)
    }
    
    // 'optionLabel' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function optionLabel_20 (VALUE :  entity.APDAttribute) : java.lang.String {
      return VALUE.Typelist != null ? DisplayKey.get("Web.APDAttributeDropDownDefinition.OwningDropDown.Label", VALUE.QualifiedLabel, VALUE.Typelist) : VALUE.QualifiedLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function valueRange_21 () : java.lang.Object {
      return attribute.CandidateDropDownOwners
    }
    
    // 'value' attribute on TextInput (id=DropdownLabel_Input) at APDDropDownDefinitionDV.pcf: line 26, column 47
    function valueRoot_4 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TypeKeyInput (id=DropDownType_Input) at APDDropDownDefinitionDV.pcf: line 34, column 26
    function value_10 () : typekey.APDDropDownType {
      return attribute.DropDownType
    }
    
    // 'value' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function value_17 () : entity.APDAttribute {
      return attribute.OwningDropDown
    }
    
    // 'value' attribute on TextInput (id=Typelist_Input) at APDDropDownDefinitionDV.pcf: line 57, column 72
    function value_29 () : java.lang.String {
      return attribute.Typelist
    }
    
    // 'value' attribute on TextInput (id=DropdownLabel_Input) at APDDropDownDefinitionDV.pcf: line 26, column 47
    function value_3 () : java.lang.String {
      return attribute.Label
    }
    
    // 'value' attribute on BooleanRadioInput (id=TypelistStatus_Input) at APDDropDownDefinitionDV.pcf: line 74, column 73
    function value_36 () : java.lang.Boolean {
      return attribute.DoNotRegenerate
    }
    
    // 'valueRange' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function verifyValueRangeIsAllowedType_22 ($$arg :  entity.APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.database.IQueryBeanResult<entity.APDAttribute>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OwningDropDown_Input) at APDDropDownDefinitionDV.pcf: line 48, column 43
    function verifyValueRange_23 () : void {
      var __valueRangeArg = attribute.CandidateDropDownOwners
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=DropdownLabel_Input) at APDDropDownDefinitionDV.pcf: line 26, column 47
    function visible_2 () : java.lang.Boolean {
      return attribute.Label.HasContent
    }
    
    // 'visible' attribute on MenuItem (id=SyncTypelist) at APDDropDownDefinitionDV.pcf: line 57, column 72
    function visible_25 () : java.lang.Boolean {
      return attribute.TypelistExists
    }
    
    // 'visible' attribute on TextInput (id=Typelist_Input) at APDDropDownDefinitionDV.pcf: line 57, column 72
    function visible_27 () : java.lang.Boolean {
      return attribute.OwningDropDown == null and inDevelopMode
    }
    
    // 'visible' attribute on InputSet at APDDropDownDefinitionDV.pcf: line 39, column 73
    function visible_41 () : java.lang.Boolean {
      return attribute.DropDownType == APDDropDownType.TC_TYPELIST
    }
    
    // 'visible' attribute on TypeKeyInput (id=DropDownType_Input) at APDDropDownDefinitionDV.pcf: line 34, column 26
    function visible_9 () : java.lang.Boolean {
      return isTerm
    }
    
    property get attribute () : APDAttribute {
      return getRequireValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setRequireValue("attribute", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get isTerm () : Boolean {
      return getRequireValue("isTerm", 0) as Boolean
    }
    
    property set isTerm ($arg :  Boolean) {
      setRequireValue("isTerm", 0, $arg)
    }
    
    property get term () : APDTerm {
      return getVariableValue("term", 0) as APDTerm
    }
    
    property set term ($arg :  APDTerm) {
      setVariableValue("term", 0, $arg)
    }
    
    
  }
  
  
}