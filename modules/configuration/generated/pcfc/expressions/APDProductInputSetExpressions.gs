package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDProductInputSet.pcf: line 20, column 29
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at APDProductInputSet.pcf: line 38, column 37
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Abbreviation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Portal_Input) at APDProductInputSet.pcf: line 44, column 65
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Portal = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=multiline_Input) at APDProductInputSet.pcf: line 49, column 33
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Multiline = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UsesLocationListView_Input) at APDProductInputSet.pcf: line 56, column 45
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.UsesLocationListView = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Coinsurance_Input) at APDProductInputSet.pcf: line 61, column 36
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Coinsurance = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currencies_Input) at APDProductInputSet.pcf: line 67, column 40
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Currencies = (__VALUE_TO_SET as APDCurrencyHandling)
    }
    
    // 'value' attribute on TypeKeyInput (id=AccountType_Input) at APDProductInputSet.pcf: line 73, column 39
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.ProductAccountType = (__VALUE_TO_SET as ProductAccountType)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDProductInputSet.pcf: line 26, column 36
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDProductInputSet.pcf: line 32, column 39
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=multiline_Input) at APDProductInputSet.pcf: line 49, column 33
    function editable_22 () : java.lang.Boolean {
      return product.ProductLines.Count < 2
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDProductInputSet.pcf: line 20, column 29
    function valueRoot_2 () : java.lang.Object {
      return product
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDProductInputSet.pcf: line 20, column 29
    function value_0 () : java.lang.String {
      return product.Name
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at APDProductInputSet.pcf: line 38, column 37
    function value_12 () : java.lang.String {
      return product.Abbreviation
    }
    
    // 'value' attribute on BooleanRadioInput (id=Portal_Input) at APDProductInputSet.pcf: line 44, column 65
    function value_17 () : java.lang.Boolean {
      return product.Portal
    }
    
    // 'value' attribute on BooleanRadioInput (id=multiline_Input) at APDProductInputSet.pcf: line 49, column 33
    function value_23 () : java.lang.Boolean {
      return product.Multiline
    }
    
    // 'value' attribute on BooleanRadioInput (id=UsesLocationListView_Input) at APDProductInputSet.pcf: line 56, column 45
    function value_28 () : java.lang.Boolean {
      return product.UsesLocationListView
    }
    
    // 'value' attribute on BooleanRadioInput (id=Coinsurance_Input) at APDProductInputSet.pcf: line 61, column 36
    function value_32 () : java.lang.Boolean {
      return product.Coinsurance
    }
    
    // 'value' attribute on TypeKeyInput (id=Currencies_Input) at APDProductInputSet.pcf: line 67, column 40
    function value_36 () : APDCurrencyHandling {
      return product.Currencies
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDProductInputSet.pcf: line 26, column 36
    function value_4 () : java.lang.String {
      return product.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=AccountType_Input) at APDProductInputSet.pcf: line 73, column 39
    function value_41 () : ProductAccountType {
      return product.ProductAccountType
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDProductInputSet.pcf: line 32, column 39
    function value_8 () : java.lang.String {
      return product.CodeIdentifier
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Currencies_Input) at APDProductInputSet.pcf: line 67, column 40
    function verifyValueType_40 () : void {
      var __valueTypeArg : APDCurrencyHandling
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=AccountType_Input) at APDProductInputSet.pcf: line 73, column 39
    function verifyValueType_45 () : void {
      var __valueTypeArg : ProductAccountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Portal_Input) at APDProductInputSet.pcf: line 44, column 65
    function visible_16 () : java.lang.Boolean {
      return ScriptParameters.APDEnableDigitalAutoGenConfig
    }
    
    property get inDevelopMode () : Boolean {
      return getRequireValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setRequireValue("inDevelopMode", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getRequireValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setRequireValue("product", 0, $arg)
    }
    
    
  }
  
  
}