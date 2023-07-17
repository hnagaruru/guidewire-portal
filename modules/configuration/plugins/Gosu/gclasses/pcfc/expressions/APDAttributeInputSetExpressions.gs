package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDAttributeInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDAttributeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyInput (id=Usage_Input) at APDAttributeInputSet.pcf: line 28, column 49
    function action_5 () : void {
      APDAttributeRulePopup.push(attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE), attribute, APDRuleType.TC_EXISTENCE, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TypeKeyInput (id=Usage_Input) at APDAttributeInputSet.pcf: line 28, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE), attribute, APDRuleType.TC_EXISTENCE, edition, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDAttributeInputSet.pcf: line 33, column 38
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDAttributeInputSet.pcf: line 39, column 32
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Label_Input) at APDAttributeInputSet.pcf: line 22, column 32
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDAttributeInputSet.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'label' attribute on TextInput (id=Name_Input) at APDAttributeInputSet.pcf: line 39, column 32
    function label_16 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Name"))
    }
    
    // 'label' attribute on TextInput (id=Description_Input) at APDAttributeInputSet.pcf: line 33, column 38
    function label_9 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Description"))
    }
    
    // 'value' attribute on TextInput (id=Label_Input) at APDAttributeInputSet.pcf: line 22, column 32
    function valueRoot_3 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TextInput (id=Label_Input) at APDAttributeInputSet.pcf: line 22, column 32
    function value_1 () : java.lang.String {
      return attribute.Label
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDAttributeInputSet.pcf: line 33, column 38
    function value_10 () : java.lang.String {
      return attribute.Description
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDAttributeInputSet.pcf: line 39, column 32
    function value_17 () : java.lang.String {
      return attribute.Name
    }
    
    // 'value' attribute on TypeKeyInput (id=Usage_Input) at APDAttributeInputSet.pcf: line 28, column 49
    function value_7 () : typekey.APDDataExistenceType {
      return attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_CAPTURED
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at APDAttributeInputSet.pcf: line 39, column 32
    function visible_15 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get attribute () : APDAttribute {
      return getRequireValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setRequireValue("attribute", 0, $arg)
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
    
    
  }
  
  
}