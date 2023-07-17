package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/ValueProviderArgumentsInputSet.TypeListValueProvider.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ValueProviderArgumentsInputSet_TypeListValueProviderExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/ValueProviderArgumentsInputSet.TypeListValueProvider.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ValueProviderArgumentsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueProviderProxy.SingleArgument = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function editable_1 () : java.lang.Boolean {
      return advancedEdit
    }
    
    // 'onChange' attribute on PostOnChange at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 29, column 68
    function onChange_0 () : void {
      valueProviderProxy.createValueProviderString()
    }
    
    // 'optionLabel' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function optionLabel_7 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE.remove(gw.rating.rtm.util.RatingUIUtil.TypekeyPrefix)
    }
    
    // 'validationExpression' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function validationExpression_2 () : java.lang.Object {
      return valueProviderProxy.validateTypelistArguments()
    }
    
    // 'valueRange' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function valueRange_8 () : java.lang.Object {
      return gw.rating.rtm.util.RatingUIUtil.getAllTypekeyNames()
    }
    
    // 'value' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function valueRoot_6 () : java.lang.Object {
      return valueProviderProxy
    }
    
    // 'value' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function value_4 () : java.lang.String {
      return valueProviderProxy.SingleArgument
    }
    
    // 'valueRange' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function verifyValueRange_10 () : void {
      var __valueRangeArg = gw.rating.rtm.util.RatingUIUtil.getAllTypekeyNames()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ArgumentViewReadOnly_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 38, column 51
    function visible_16 () : java.lang.Boolean {
      return not (CurrentLocation.InEditMode)
    }
    
    // 'visible' attribute on RangeInput (id=ArgumentView_Input) at ValueProviderArgumentsInputSet.TypeListValueProvider.pcf: line 27, column 46
    function visible_3 () : java.lang.Boolean {
      return (CurrentLocation.InEditMode)
    }
    
    property get advancedEdit () : boolean {
      return getRequireValue("advancedEdit", 0) as java.lang.Boolean
    }
    
    property set advancedEdit ($arg :  boolean) {
      setRequireValue("advancedEdit", 0, $arg)
    }
    
    property get columnDefinition () : RateTableColumn {
      return getRequireValue("columnDefinition", 0) as RateTableColumn
    }
    
    property set columnDefinition ($arg :  RateTableColumn) {
      setRequireValue("columnDefinition", 0, $arg)
    }
    
    property get valueProviderProxy () : gw.rating.rtm.valueprovider.CustomValueProviderData {
      return getRequireValue("valueProviderProxy", 0) as gw.rating.rtm.valueprovider.CustomValueProviderData
    }
    
    property set valueProviderProxy ($arg :  gw.rating.rtm.valueprovider.CustomValueProviderData) {
      setRequireValue("valueProviderProxy", 0, $arg)
    }
    
    
  }
  
  
}