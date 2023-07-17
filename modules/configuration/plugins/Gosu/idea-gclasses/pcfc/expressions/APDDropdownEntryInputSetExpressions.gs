package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropdownEntryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropdownEntryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDDropdownEntryInputSet.pcf: line 32, column 34
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      entry.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at APDDropdownEntryInputSet.pcf: line 20, column 32
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      entry.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDDropdownEntryInputSet.pcf: line 26, column 27
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      entry.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDDropdownEntryInputSet.pcf: line 13, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at APDDropdownEntryInputSet.pcf: line 20, column 32
    function valueRoot_4 () : java.lang.Object {
      return entry
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDDropdownEntryInputSet.pcf: line 32, column 34
    function value_11 () : java.lang.String {
      return entry.Description
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at APDDropdownEntryInputSet.pcf: line 20, column 32
    function value_2 () : java.lang.String {
      return entry.Code
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDDropdownEntryInputSet.pcf: line 26, column 27
    function value_7 () : java.lang.String {
      return entry.Name
    }
    
    // 'visible' attribute on TextInput (id=Code_Input) at APDDropdownEntryInputSet.pcf: line 20, column 32
    function visible_1 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get entry () : APDDropdownEntry {
      return getRequireValue("entry", 0) as APDDropdownEntry
    }
    
    property set entry ($arg :  APDDropdownEntry) {
      setRequireValue("entry", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    
  }
  
  
}