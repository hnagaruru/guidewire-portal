package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AttributeDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttributeDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AttributeDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttributeDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AttributeDetailDV.pcf: line 18, column 33
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at AttributeDetailDV.pcf: line 24, column 40
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AttributeDetailDV.pcf: line 31, column 48
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      attribute.Type = (__VALUE_TO_SET as typekey.UserAttributeType)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AttributeDetailDV.pcf: line 18, column 33
    function valueRoot_2 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AttributeDetailDV.pcf: line 18, column 33
    function value_0 () : java.lang.String {
      return attribute.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at AttributeDetailDV.pcf: line 24, column 40
    function value_4 () : java.lang.String {
      return attribute.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AttributeDetailDV.pcf: line 31, column 48
    function value_8 () : typekey.UserAttributeType {
      return attribute.Type
    }
    
    property get attribute () : Attribute {
      return getRequireValue("attribute", 0) as Attribute
    }
    
    property set attribute ($arg :  Attribute) {
      setRequireValue("attribute", 0, $arg)
    }
    
    
  }
  
  
}