package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LookupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LookupPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LookupPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (existingLookup :  LookupTableDefinition, editable :  Boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=LookupPopup) at LookupPopup.pcf: line 11, column 210
    function beforeCommit_44 (pickedValue :  java.lang.Object) : void {
      helper.commitLookupTableDefinition()
    }
    
    // 'canVisit' attribute on Popup (id=LookupPopup) at LookupPopup.pcf: line 11, column 210
    static function canVisit_46 (editable :  Boolean, existingLookup :  LookupTableDefinition) : java.lang.Boolean {
      return perm.System.lookuptableview 
    }
    
    // 'def' attribute on PanelRef at LookupPopup.pcf: line 98, column 37
    function def_onEnter_42 (def :  pcf.LookupColumnPanelSet) : void {
      def.onEnter(helper, lookupDefDTO)
    }
    
    // 'def' attribute on PanelRef at LookupPopup.pcf: line 98, column 37
    function def_refreshVariables_43 (def :  pcf.LookupColumnPanelSet) : void {
      def.refreshVariables(helper, lookupDefDTO)
    }
    
    // 'value' attribute on TextInput (id=LookupName_Input) at LookupPopup.pcf: line 60, column 42
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LookupPopup.pcf: line 66, column 49
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.SourceTable = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExistenceButton_Input) at LookupPopup.pcf: line 89, column 46
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.Existence = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'dismissed' attribute on AlertBar (id=ExistenceAlert) at LookupPopup.pcf: line 47, column 79
    function dismissed_8 () : java.lang.Boolean {
      return helper.MessageDismissed
    }
    
    // 'editable' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function editable_21 () : java.lang.Boolean {
      return not lookupInUse
    }
    
    // 'initialValue' attribute on Variable at LookupPopup.pcf: line 23, column 46
    function initialValue_0 () : gw.web.bizrules.LookupUIHelper {
      return new gw.web.bizrules.LookupUIHelper(existingLookup)
    }
    
    // 'initialValue' attribute on Variable at LookupPopup.pcf: line 27, column 45
    function initialValue_1 () : gw.lookup.LookupDefinitionDTO {
      return helper.LookupDefinitionDTO
    }
    
    // 'initialValue' attribute on Variable at LookupPopup.pcf: line 31, column 23
    function initialValue_2 () : boolean {
      return existingLookup.IsLookupInUse
    }
    
    // 'label' attribute on AlertBar (id=InUseLookupAlert) at LookupPopup.pcf: line 51, column 32
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.BizRules.Lookup.LookupPage.EditInUseLookupAlert", existingLookup.DisplayName, existingLookup.RulesUsingLookup*.Name.join('\n'))
    }
    
    // 'onChange' attribute on PostOnChange at LookupPopup.pcf: line 77, column 76
    function onChange_20 () : void {
      helper.populateLookupDefinitionDTOAndColumns()
    }
    
    // 'onChange' attribute on PostOnChange at LookupPopup.pcf: line 91, column 60
    function onChange_34 () : void {
      helper.processExistenceState()
    }
    
    // 'optionLabel' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function optionLabel_25 (VALUE :  String) : java.lang.String {
      return helper.getOptionLabelForSourceTable(VALUE)
    }
    
    // 'dismissed' attribute on AlertBar (id=ExistenceAlert) at LookupPopup.pcf: line 47, column 79
    function setDismissed_9 (__VALUE :  java.lang.Boolean) : void {
      helper.MessageDismissed = __VALUE
    }
    
    // 'showConfirmMessage' attribute on AlertBar (id=ExistenceAlert) at LookupPopup.pcf: line 47, column 79
    function showConfirmMessage_7 () : java.lang.Boolean {
      return true 
    }
    
    // 'startInEditMode' attribute on Popup (id=LookupPopup) at LookupPopup.pcf: line 11, column 210
    function startInEditMode_47 () : java.lang.Boolean {
      return editable
    }
    
    // 'title' attribute on Popup (id=LookupPopup) at LookupPopup.pcf: line 11, column 210
    static function title_48 (editable :  Boolean, existingLookup :  LookupTableDefinition) : java.lang.Object {
      return editable ? DisplayKey.get("Web.BizRules.Lookup.SelectLookupPage.Title.EditLookupTable") : DisplayKey.get("Web.BizRules.Lookup.SelectLookupPage.Title", existingLookup.TableName)
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function valueRange_26 () : java.lang.Object {
      return gw.plugin.Plugins.get(gw.plugin.lookup.LookupCreationPlugin).AvailableLookupSourceNames
    }
    
    // 'value' attribute on TextInput (id=LookupName_Input) at LookupPopup.pcf: line 60, column 42
    function valueRoot_14 () : java.lang.Object {
      return lookupDefDTO
    }
    
    // 'value' attribute on TextInput (id=LookupName_Input) at LookupPopup.pcf: line 60, column 42
    function value_12 () : java.lang.String {
      return lookupDefDTO.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LookupPopup.pcf: line 66, column 49
    function value_16 () : java.lang.String {
      return lookupDefDTO.Description
    }
    
    // 'value' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function value_22 () : String {
      return lookupDefDTO.SourceTable
    }
    
    // 'value' attribute on TextInput (id=LookupTableCode_Input) at LookupPopup.pcf: line 82, column 47
    function value_31 () : java.lang.String {
      return lookupDefDTO.TableCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExistenceButton_Input) at LookupPopup.pcf: line 89, column 46
    function value_36 () : java.lang.Boolean {
      return lookupDefDTO.Existence
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function verifyValueRangeIsAllowedType_27 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at LookupPopup.pcf: line 75, column 34
    function verifyValueRange_28 () : void {
      var __valueRangeArg = gw.plugin.Plugins.get(gw.plugin.lookup.LookupCreationPlugin).AvailableLookupSourceNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'visible' attribute on AlertBar (id=InUseLookupAlert) at LookupPopup.pcf: line 51, column 32
    function visible_10 () : java.lang.Boolean {
      return lookupInUse
    }
    
    // 'cancelVisible' attribute on EditButtons (id=EditButtons) at LookupPopup.pcf: line 40, column 56
    function visible_3 () : java.lang.Boolean {
      return CurrentLocation.InEditMode 
    }
    
    // 'editVisible' attribute on EditButtons (id=EditButtons) at LookupPopup.pcf: line 40, column 56
    function visible_4 () : java.lang.Boolean {
      return perm.System.lookuptableedit
    }
    
    // 'visible' attribute on AlertBar (id=ExistenceAlert) at LookupPopup.pcf: line 47, column 79
    function visible_6 () : java.lang.Boolean {
      return helper.ShowExistenceMessage and CurrentLocation.InEditMode
    }
    
    override property get CurrentLocation () : pcf.LookupPopup {
      return super.CurrentLocation as pcf.LookupPopup
    }
    
    property get editable () : Boolean {
      return getVariableValue("editable", 0) as Boolean
    }
    
    property set editable ($arg :  Boolean) {
      setVariableValue("editable", 0, $arg)
    }
    
    property get existingLookup () : LookupTableDefinition {
      return getVariableValue("existingLookup", 0) as LookupTableDefinition
    }
    
    property set existingLookup ($arg :  LookupTableDefinition) {
      setVariableValue("existingLookup", 0, $arg)
    }
    
    property get helper () : gw.web.bizrules.LookupUIHelper {
      return getVariableValue("helper", 0) as gw.web.bizrules.LookupUIHelper
    }
    
    property set helper ($arg :  gw.web.bizrules.LookupUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get lookupDefDTO () : gw.lookup.LookupDefinitionDTO {
      return getVariableValue("lookupDefDTO", 0) as gw.lookup.LookupDefinitionDTO
    }
    
    property set lookupDefDTO ($arg :  gw.lookup.LookupDefinitionDTO) {
      setVariableValue("lookupDefDTO", 0, $arg)
    }
    
    property get lookupInUse () : boolean {
      return getVariableValue("lookupInUse", 0) as java.lang.Boolean
    }
    
    property set lookupInUse ($arg :  boolean) {
      setVariableValue("lookupInUse", 0, $arg)
    }
    
    
  }
  
  
}