package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDependantPricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDependantPricePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDependantPricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDependantPricePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (costDefinition :  APDCostDefinition, openForEdit :  Boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=APDDependantPricePopup) at APDDependantPricePopup.pcf: line 11, column 74
    function beforeCommit_31 (pickedValue :  java.lang.Object) : void {
      gw.apd.model.CostCodeFilterHelper.applyUpdates(costCodeFilters, costDefinition)
    }
    
    // 'canEdit' attribute on Popup (id=APDDependantPricePopup) at APDDependantPricePopup.pcf: line 11, column 74
    function canEdit_32 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at APDDependantPricePopup.pcf: line 35, column 39
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.JurisdictionFilter = (__VALUE_TO_SET as Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyInput (id=RateAmountTypeFilter_Input) at APDDependantPricePopup.pcf: line 41, column 41
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.RateAmountTypeFilter = (__VALUE_TO_SET as RateAmountType)
    }
    
    // 'initialValue' attribute on Variable at APDDependantPricePopup.pcf: line 23, column 51
    function initialValue_0 () : gw.apd.model.CostCodeFilterHelper[] {
      return gw.apd.model.CostCodeFilterHelper.buildList(costDefinition)
    }
    
    // EditButtons at APDDependantPricePopup.pcf: line 26, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'sortBy' attribute on IteratorSort at APDDependantPricePopup.pcf: line 59, column 34
    function sortBy_12 (filterHelper :  gw.apd.model.CostCodeFilterHelper) : java.lang.Object {
      return filterHelper.Code
    }
    
    // 'value' attribute on CheckBoxCell (id=FilterCostCode_Cell) at APDDependantPricePopup.pcf: line 65, column 52
    function sortValue_13 (filterHelper :  gw.apd.model.CostCodeFilterHelper) : java.lang.Object {
      return filterHelper.FilterBy
    }
    
    // 'value' attribute on TextCell (id=CostCode_Cell) at APDDependantPricePopup.pcf: line 69, column 48
    function sortValue_14 (filterHelper :  gw.apd.model.CostCodeFilterHelper) : java.lang.Object {
      return filterHelper.Code
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDDependantPricePopup.pcf: line 73, column 48
    function sortValue_15 (filterHelper :  gw.apd.model.CostCodeFilterHelper) : java.lang.Object {
      return filterHelper.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDDependantPricePopup.pcf: line 78, column 55
    function sortValue_16 (filterHelper :  gw.apd.model.CostCodeFilterHelper) : java.lang.Object {
      return filterHelper.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at APDDependantPricePopup.pcf: line 35, column 39
    function valueRoot_4 () : java.lang.Object {
      return costDefinition
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at APDDependantPricePopup.pcf: line 35, column 39
    function value_2 () : Jurisdiction {
      return costDefinition.JurisdictionFilter
    }
    
    // 'value' attribute on RowIterator (id=costCodesIterator) at APDDependantPricePopup.pcf: line 56, column 65
    function value_30 () : gw.apd.model.CostCodeFilterHelper[] {
      return costCodeFilters
    }
    
    // 'value' attribute on TypeKeyInput (id=RateAmountTypeFilter_Input) at APDDependantPricePopup.pcf: line 41, column 41
    function value_7 () : RateAmountType {
      return costDefinition.RateAmountTypeFilter
    }
    
    // 'valueType' attribute on TypeKeyInput (id=RateAmountTypeFilter_Input) at APDDependantPricePopup.pcf: line 41, column 41
    function verifyValueType_11 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at APDDependantPricePopup.pcf: line 35, column 39
    function verifyValueType_6 () : void {
      var __valueTypeArg : Jurisdiction
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    override property get CurrentLocation () : pcf.APDDependantPricePopup {
      return super.CurrentLocation as pcf.APDDependantPricePopup
    }
    
    property get costCodeFilters () : gw.apd.model.CostCodeFilterHelper[] {
      return getVariableValue("costCodeFilters", 0) as gw.apd.model.CostCodeFilterHelper[]
    }
    
    property set costCodeFilters ($arg :  gw.apd.model.CostCodeFilterHelper[]) {
      setVariableValue("costCodeFilters", 0, $arg)
    }
    
    property get costDefinition () : APDCostDefinition {
      return getVariableValue("costDefinition", 0) as APDCostDefinition
    }
    
    property set costDefinition ($arg :  APDCostDefinition) {
      setVariableValue("costDefinition", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getVariableValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDependantPricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDDependantPricePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=FilterCostCode_Cell) at APDDependantPricePopup.pcf: line 65, column 52
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      filterHelper.FilterBy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=FilterCostCode_Cell) at APDDependantPricePopup.pcf: line 65, column 52
    function valueRoot_19 () : java.lang.Object {
      return filterHelper
    }
    
    // 'value' attribute on CheckBoxCell (id=FilterCostCode_Cell) at APDDependantPricePopup.pcf: line 65, column 52
    function value_17 () : java.lang.Boolean {
      return filterHelper.FilterBy
    }
    
    // 'value' attribute on TextCell (id=CostCode_Cell) at APDDependantPricePopup.pcf: line 69, column 48
    function value_21 () : java.lang.String {
      return filterHelper.Code
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDDependantPricePopup.pcf: line 73, column 48
    function value_24 () : java.lang.String {
      return filterHelper.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDDependantPricePopup.pcf: line 78, column 55
    function value_27 () : java.lang.String {
      return filterHelper.Description
    }
    
    property get filterHelper () : gw.apd.model.CostCodeFilterHelper {
      return getIteratedValue(1) as gw.apd.model.CostCodeFilterHelper
    }
    
    
  }
  
  
}