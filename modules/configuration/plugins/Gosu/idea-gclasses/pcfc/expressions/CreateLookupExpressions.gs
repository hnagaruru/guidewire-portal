package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CreateLookup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateLookupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CreateLookup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateLookupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=CreateLookup) at CreateLookup.pcf: line 16, column 84
    function afterCancel_40 () : void {
      LookupPage.go()
    }
    
    // 'afterCancel' attribute on Page (id=CreateLookup) at CreateLookup.pcf: line 16, column 84
    function afterCancel_dest_41 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=CreateLookup) at CreateLookup.pcf: line 16, column 84
    function afterCommit_42 (TopLocation :  pcf.api.Location) : void {
      LookupPage.go()
    }
    
    // 'beforeCommit' attribute on Page (id=CreateLookup) at CreateLookup.pcf: line 16, column 84
    function beforeCommit_43 (pickedValue :  java.lang.Object) : void {
      helper.commitLookupTableDefinition()
    }
    
    // 'canVisit' attribute on Page (id=CreateLookup) at CreateLookup.pcf: line 16, column 84
    static function canVisit_44 () : java.lang.Boolean {
      return perm.System.lookuptableedit
    }
    
    // 'def' attribute on PanelRef at CreateLookup.pcf: line 87, column 59
    function def_onEnter_38 (def :  pcf.LookupColumnPanelSet) : void {
      def.onEnter(helper, lookupDefDTO)
    }
    
    // 'def' attribute on PanelRef at CreateLookup.pcf: line 87, column 59
    function def_refreshVariables_39 (def :  pcf.LookupColumnPanelSet) : void {
      def.refreshVariables(helper, lookupDefDTO)
    }
    
    // 'value' attribute on TextInput (id=LookupName_Input) at CreateLookup.pcf: line 59, column 53
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at CreateLookup.pcf: line 64, column 49
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LookupTableCode_Input) at CreateLookup.pcf: line 72, column 53
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.TableCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExistenceButton_Input) at CreateLookup.pcf: line 79, column 46
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.Existence = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupDefDTO.SourceTable = (__VALUE_TO_SET as String)
    }
    
    // 'dismissed' attribute on AlertBar (id=ExistenceAlert) at CreateLookup.pcf: line 37, column 79
    function dismissed_4 () : java.lang.Boolean {
      return helper.MessageDismissed
    }
    
    // 'initialValue' attribute on Variable at CreateLookup.pcf: line 20, column 46
    function initialValue_0 () : gw.web.bizrules.LookupUIHelper {
      return new gw.web.bizrules.LookupUIHelper(new LookupTableDefinition())
    }
    
    // 'initialValue' attribute on Variable at CreateLookup.pcf: line 24, column 45
    function initialValue_1 () : gw.lookup.LookupDefinitionDTO {
      return helper.LookupDefinitionDTO
    }
    
    // 'onChange' attribute on PostOnChange at CreateLookup.pcf: line 81, column 60
    function onChange_33 () : void {
      helper.processExistenceState()
    }
    
    // 'onChange' attribute on PostOnChange at CreateLookup.pcf: line 51, column 106
    function onChange_6 () : void {
      helper.populateLookupDefinitionDTOAndColumns(); helper.populateDefaultName()
    }
    
    // 'optionLabel' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function optionLabel_10 (VALUE :  String) : java.lang.String {
      return helper.getOptionLabelForSourceTable(VALUE)
    }
    
    // 'parent' attribute on Page (id=CreateLookup) at CreateLookup.pcf: line 16, column 84
    static function parent_45 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    // 'dismissed' attribute on AlertBar (id=ExistenceAlert) at CreateLookup.pcf: line 37, column 79
    function setDismissed_5 (__VALUE :  java.lang.Boolean) : void {
      helper.MessageDismissed = __VALUE
    }
    
    // 'showConfirmMessage' attribute on AlertBar (id=ExistenceAlert) at CreateLookup.pcf: line 37, column 79
    function showConfirmMessage_3 () : java.lang.Boolean {
      return true 
    }
    
    // 'validationExpression' attribute on TextInput (id=LookupTableCode_Input) at CreateLookup.pcf: line 72, column 53
    function validationExpression_25 () : java.lang.Object {
      return helper.validateTableCodeIsInUse()
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function valueRange_11 () : java.lang.Object {
      return gw.plugin.Plugins.get(gw.plugin.lookup.LookupCreationPlugin).AvailableLookupSourceNames
    }
    
    // 'value' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function valueRoot_9 () : java.lang.Object {
      return lookupDefDTO
    }
    
    // 'value' attribute on TextInput (id=LookupName_Input) at CreateLookup.pcf: line 59, column 53
    function value_16 () : java.lang.String {
      return lookupDefDTO.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at CreateLookup.pcf: line 64, column 49
    function value_21 () : java.lang.String {
      return lookupDefDTO.Description
    }
    
    // 'value' attribute on TextInput (id=LookupTableCode_Input) at CreateLookup.pcf: line 72, column 53
    function value_27 () : java.lang.String {
      return lookupDefDTO.TableCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExistenceButton_Input) at CreateLookup.pcf: line 79, column 46
    function value_34 () : java.lang.Boolean {
      return lookupDefDTO.Existence
    }
    
    // 'value' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function value_7 () : String {
      return lookupDefDTO.SourceTable
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function verifyValueRangeIsAllowedType_12 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SourceTable_Input) at CreateLookup.pcf: line 49, column 34
    function verifyValueRange_13 () : void {
      var __valueRangeArg = gw.plugin.Plugins.get(gw.plugin.lookup.LookupCreationPlugin).AvailableLookupSourceNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=LookupName_Input) at CreateLookup.pcf: line 59, column 53
    function visible_15 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on AlertBar (id=ExistenceAlert) at CreateLookup.pcf: line 37, column 79
    function visible_2 () : java.lang.Boolean {
      return helper.ShowExistenceMessage and CurrentLocation.InEditMode
    }
    
    override property get CurrentLocation () : pcf.CreateLookup {
      return super.CurrentLocation as pcf.CreateLookup
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
    
    
  }
  
  
}