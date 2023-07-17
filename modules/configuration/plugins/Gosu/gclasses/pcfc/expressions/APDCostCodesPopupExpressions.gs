package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCostCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCostCodesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCostCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCostCodesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (costCodeHelper :  gw.apd.model.CostCodeHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Export) at APDCostCodesPopup.pcf: line 24, column 86
    function action_1 () : void {
      costCodeHelper.saveSystemTableXML()
    }
    
    // EditButtons at APDCostCodesPopup.pcf: line 18, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=CostCode_Cell) at APDCostCodesPopup.pcf: line 44, column 42
    function sortValue_2 (costCode :  CostCode) : java.lang.Object {
      return costCode.CostCode
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDCostCodesPopup.pcf: line 50, column 42
    function sortValue_3 (costCode :  CostCode) : java.lang.Object {
      return costCode.CostName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCostCodesPopup.pcf: line 56, column 45
    function sortValue_4 (costCode :  CostCode) : java.lang.Object {
      return costCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCostCodesPopup.pcf: line 63, column 43
    function sortValue_5 (costCode :  CostCode) : java.lang.Object {
      return costCode.RateAmountType
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCostCodesPopup.pcf: line 70, column 42
    function sortValue_6 (costCode :  CostCode) : java.lang.Object {
      return costCode.ChargePatern
    }
    
    // 'value' attribute on TypeKeyCell (id=ProrationMethod_Cell) at APDCostCodesPopup.pcf: line 77, column 44
    function sortValue_7 (costCode :  CostCode) : java.lang.Object {
      return costCode.ProrationMethod
    }
    
    // 'value' attribute on BooleanRadioCell (id=Overrideable_Cell) at APDCostCodesPopup.pcf: line 84, column 46
    function sortValue_8 (costCode :  CostCode) : java.lang.Object {
      return costCode.Overrideable
    }
    
    // 'toAdd' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function toAdd_40 (costCode :  CostCode) : void {
      costCodeHelper.addToCostCodes(costCode)
    }
    
    // 'toRemove' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function toRemove_41 (costCode :  CostCode) : void {
      costCodeHelper.removeFromCostCodes(costCode)
    }
    
    // 'value' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function value_42 () : List<CostCode> {
      return costCodeHelper.CostCodes
    }
    
    // 'valueType' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function verifyValueTypeIsAllowedType_43 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function verifyValueTypeIsAllowedType_43 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function verifyValueTypeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=CostCodes) at APDCostCodesPopup.pcf: line 35, column 44
    function verifyValueType_44 () : void {
      var __valueTypeArg : List<CostCode>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_43(__valueTypeArg)
    }
    
    override property get CurrentLocation () : pcf.APDCostCodesPopup {
      return super.CurrentLocation as pcf.APDCostCodesPopup
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getVariableValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setVariableValue("costCodeHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCostCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDCostCodesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CostCode_Cell) at APDCostCodesPopup.pcf: line 44, column 42
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.CostCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDCostCodesPopup.pcf: line 50, column 42
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.CostName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCostCodesPopup.pcf: line 56, column 45
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCostCodesPopup.pcf: line 63, column 43
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.RateAmountType = (__VALUE_TO_SET as RateAmountType)
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCostCodesPopup.pcf: line 70, column 42
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.ChargePatern = (__VALUE_TO_SET as ChargePattern)
    }
    
    // 'value' attribute on TypeKeyCell (id=ProrationMethod_Cell) at APDCostCodesPopup.pcf: line 77, column 44
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.ProrationMethod = (__VALUE_TO_SET as ProrationMethod)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Overrideable_Cell) at APDCostCodesPopup.pcf: line 84, column 46
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      costCode.Overrideable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=CostCode_Cell) at APDCostCodesPopup.pcf: line 44, column 42
    function valueRoot_11 () : java.lang.Object {
      return costCode
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDCostCodesPopup.pcf: line 50, column 42
    function value_13 () : java.lang.String {
      return costCode.CostName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCostCodesPopup.pcf: line 56, column 45
    function value_17 () : java.lang.String {
      return costCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCostCodesPopup.pcf: line 63, column 43
    function value_21 () : RateAmountType {
      return costCode.RateAmountType
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCostCodesPopup.pcf: line 70, column 42
    function value_26 () : ChargePattern {
      return costCode.ChargePatern
    }
    
    // 'value' attribute on TypeKeyCell (id=ProrationMethod_Cell) at APDCostCodesPopup.pcf: line 77, column 44
    function value_31 () : ProrationMethod {
      return costCode.ProrationMethod
    }
    
    // 'value' attribute on BooleanRadioCell (id=Overrideable_Cell) at APDCostCodesPopup.pcf: line 84, column 46
    function value_36 () : java.lang.Boolean {
      return costCode.Overrideable
    }
    
    // 'value' attribute on TextCell (id=CostCode_Cell) at APDCostCodesPopup.pcf: line 44, column 42
    function value_9 () : java.lang.String {
      return costCode.CostCode
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCostCodesPopup.pcf: line 63, column 43
    function verifyValueType_25 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCostCodesPopup.pcf: line 70, column 42
    function verifyValueType_30 () : void {
      var __valueTypeArg : ChargePattern
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ProrationMethod_Cell) at APDCostCodesPopup.pcf: line 77, column 44
    function verifyValueType_35 () : void {
      var __valueTypeArg : ProrationMethod
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get costCode () : CostCode {
      return getIteratedValue(1) as CostCode
    }
    
    
  }
  
  
}