package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at FormPatternSearchDV.pcf: line 41, column 41
    function def_onEnter_21 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at FormPatternSearchDV.pcf: line 41, column 41
    function def_refreshVariables_22 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Product = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on TextInput (id=GroupCode_Input) at FormPatternSearchDV.pcf: line 37, column 43
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.GroupCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FormNumber_Input) at FormPatternSearchDV.pcf: line 19, column 44
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FormNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FormName_Input) at FormPatternSearchDV.pcf: line 24, column 42
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FormName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at FormPatternSearchDV.pcf: line 13, column 52
    function initialValue_0 () : gw.pcf.UniqueProductDisplayNameMaker {
      return new gw.pcf.UniqueProductDisplayNameMaker()
    }
    
    // 'optionLabel' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function optionLabel_12 (VALUE :  gw.api.productmodel.Product) : java.lang.String {
      return uniqueProductDisplayNameMaker.make(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function valueRange_13 () : java.lang.Object {
      return uniqueProductDisplayNameMaker.Products
    }
    
    // 'value' attribute on TextInput (id=FormNumber_Input) at FormPatternSearchDV.pcf: line 19, column 44
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=FormNumber_Input) at FormPatternSearchDV.pcf: line 19, column 44
    function value_1 () : java.lang.String {
      return searchCriteria.FormNumber
    }
    
    // 'value' attribute on TextInput (id=GroupCode_Input) at FormPatternSearchDV.pcf: line 37, column 43
    function value_17 () : java.lang.String {
      return searchCriteria.GroupCode
    }
    
    // 'value' attribute on TextInput (id=FormName_Input) at FormPatternSearchDV.pcf: line 24, column 42
    function value_5 () : java.lang.String {
      return searchCriteria.FormName
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function value_9 () : gw.api.productmodel.Product {
      return searchCriteria.Product
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at FormPatternSearchDV.pcf: line 32, column 50
    function verifyValueRange_15 () : void {
      var __valueRangeArg = uniqueProductDisplayNameMaker.Products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.forms.FormPatternSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.forms.FormPatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.forms.FormPatternSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get uniqueProductDisplayNameMaker () : gw.pcf.UniqueProductDisplayNameMaker {
      return getVariableValue("uniqueProductDisplayNameMaker", 0) as gw.pcf.UniqueProductDisplayNameMaker
    }
    
    property set uniqueProductDisplayNameMaker ($arg :  gw.pcf.UniqueProductDisplayNameMaker) {
      setVariableValue("uniqueProductDisplayNameMaker", 0, $arg)
    }
    
    
  }
  
  
}