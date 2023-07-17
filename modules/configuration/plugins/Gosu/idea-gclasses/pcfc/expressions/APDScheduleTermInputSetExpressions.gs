package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDScheduleTermInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDScheduleTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDScheduleTermInputSet.pcf: line 25, column 32
    function action_5 () : void {
      APDDropDownDefinitionPopup.push(term, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDScheduleTermInputSet.pcf: line 25, column 32
    function action_dest_6 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(term, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on InputSetRef at APDScheduleTermInputSet.pcf: line 18, column 50
    function def_onEnter_1 (def :  pcf.APDAttributeInputSet) : void {
      def.onEnter(term, edition)
    }
    
    // 'def' attribute on InputSetRef at APDScheduleTermInputSet.pcf: line 18, column 50
    function def_refreshVariables_2 (def :  pcf.APDAttributeInputSet) : void {
      def.refreshVariables(term, edition)
    }
    
    // 'value' attribute on BooleanRadioInput (id=GenerateAsClauseTerm_Input) at APDScheduleTermInputSet.pcf: line 40, column 31
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.GenerateAsClauseTerm = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at APDScheduleTermInputSet.pcf: line 25, column 32
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=GenerateAsClauseTerm_Input) at APDScheduleTermInputSet.pcf: line 40, column 31
    function editable_12 () : java.lang.Boolean {
      return not term.CanOnlyBeAClauseTermBasedOnType
    }
    
    // 'initialValue' attribute on Variable at APDScheduleTermInputSet.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'onChange' attribute on PostOnChange at APDScheduleTermInputSet.pcf: line 27, column 161
    function onChange_3 () : void {
      term.DropDownType = term.Type == APDFieldType.TC_TYPEKEY ? APDDropDownType.TC_TYPELIST : null; term.updateGenerateAsClauseTermBasedOnType()
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at APDScheduleTermInputSet.pcf: line 25, column 32
    function valueRoot_9 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on BooleanRadioInput (id=GenerateAsClauseTerm_Input) at APDScheduleTermInputSet.pcf: line 40, column 31
    function value_14 () : java.lang.Boolean {
      return term.GenerateAsClauseTerm
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at APDScheduleTermInputSet.pcf: line 25, column 32
    function value_7 () : APDFieldType {
      return term.Type
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Type_Input) at APDScheduleTermInputSet.pcf: line 25, column 32
    function verifyValueType_11 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=GenerateAsClauseTerm_Input) at APDScheduleTermInputSet.pcf: line 40, column 31
    function visible_13 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDScheduleTermInputSet.pcf: line 25, column 32
    function visible_4 () : java.lang.Boolean {
      return term.Type == APDFieldType.TC_TYPEKEY
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get term () : APDTerm {
      return getRequireValue("term", 0) as APDTerm
    }
    
    property set term ($arg :  APDTerm) {
      setRequireValue("term", 0, $arg)
    }
    
    
  }
  
  
}