package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RatingCostDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCostDetailPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCostDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingCostDetailPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=ActualBaseRate_Cell) at RatingCostDetailPopup.pcf: line 74, column 51
    function fontColor_34 () : java.lang.Object {
      return cost.OverrideBaseRate == null ? "Normal" : "red"
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAdjRate_Cell) at RatingCostDetailPopup.pcf: line 80, column 51
    function fontColor_39 () : java.lang.Object {
      return cost.OverrideAdjRate == null ? "Normal" : "red"
    }
    
    // 'fontColor' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function fontColor_45 () : java.lang.Object {
      return cost.OverrideTermAmount == null ? "Normal" : "red"
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAmount_Cell) at RatingCostDetailPopup.pcf: line 99, column 60
    function fontColor_54 () : java.lang.Object {
      return cost.OverrideAmount == null ? "Normal" : "red"
    }
    
    // 'label' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function label_44 () : java.lang.Object {
      return period.Policy.Product.DefaultTermType == TermType.TC_ANNUAL ?  DisplayKey.get("Web.RatingCostDetailPopup.ActualAnnualAmount") : DisplayKey.get("Web.RatingCostDetailPopup.ActualTermAmount")
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RatingCostDetailPopup.pcf: line 59, column 39
    function valueRoot_26 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RatingCostDetailPopup.pcf: line 59, column 39
    function value_25 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at RatingCostDetailPopup.pcf: line 63, column 39
    function value_28 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at RatingCostDetailPopup.pcf: line 68, column 51
    function value_31 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at RatingCostDetailPopup.pcf: line 74, column 51
    function value_35 () : java.math.BigDecimal {
      return cost.ActualBaseRate == 0 ? cost.StandardBaseRate : cost.ActualBaseRate 
    }
    
    // 'value' attribute on TextCell (id=ActualAdjRate_Cell) at RatingCostDetailPopup.pcf: line 80, column 51
    function value_40 () : java.math.BigDecimal {
      return cost.ActualAdjRate == 0 ? cost.StandardAdjRate : cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function value_46 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount == 0 ? cost.StandardTermAmount : cost.ActualTermAmount
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at RatingCostDetailPopup.pcf: line 92, column 37
    function value_51 () : Double {
      return cost.Proration
    }
    
    // 'value' attribute on TextCell (id=ActualAmount_Cell) at RatingCostDetailPopup.pcf: line 99, column 60
    function value_55 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at RatingCostDetailPopup.pcf: line 104, column 46
    function value_60 () : java.lang.String {
      return cost.OverrideReason
    }
    
    // 'fontColor' attribute on TextCell (id=ActualBaseRate_Cell) at RatingCostDetailPopup.pcf: line 74, column 51
    function verifyFontColorIsAllowedType_36 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualBaseRate_Cell) at RatingCostDetailPopup.pcf: line 74, column 51
    function verifyFontColorIsAllowedType_36 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAdjRate_Cell) at RatingCostDetailPopup.pcf: line 80, column 51
    function verifyFontColorIsAllowedType_41 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAdjRate_Cell) at RatingCostDetailPopup.pcf: line 80, column 51
    function verifyFontColorIsAllowedType_41 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function verifyFontColorIsAllowedType_47 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function verifyFontColorIsAllowedType_47 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAmount_Cell) at RatingCostDetailPopup.pcf: line 99, column 60
    function verifyFontColorIsAllowedType_57 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAmount_Cell) at RatingCostDetailPopup.pcf: line 99, column 60
    function verifyFontColorIsAllowedType_57 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=OverrideReason_Cell) at RatingCostDetailPopup.pcf: line 104, column 46
    function verifyFontColorIsAllowedType_62 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=OverrideReason_Cell) at RatingCostDetailPopup.pcf: line 104, column 46
    function verifyFontColorIsAllowedType_62 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ActualBaseRate_Cell) at RatingCostDetailPopup.pcf: line 74, column 51
    function verifyFontColor_37 () : void {
      var __fontColorArg = cost.OverrideBaseRate == null ? "Normal" : "red"
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_36(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAdjRate_Cell) at RatingCostDetailPopup.pcf: line 80, column 51
    function verifyFontColor_42 () : void {
      var __fontColorArg = cost.OverrideAdjRate == null ? "Normal" : "red"
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_41(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function verifyFontColor_48 () : void {
      var __fontColorArg = cost.OverrideTermAmount == null ? "Normal" : "red"
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_47(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=ActualAmount_Cell) at RatingCostDetailPopup.pcf: line 99, column 60
    function verifyFontColor_58 () : void {
      var __fontColorArg = cost.OverrideAmount == null ? "Normal" : "red"
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_57(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=OverrideReason_Cell) at RatingCostDetailPopup.pcf: line 104, column 46
    function verifyFontColor_63 () : void {
      var __fontColorArg = "red"
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_62(__fontColorArg)
    }
    
    property get cost () : Cost {
      return getIteratedValue(1) as Cost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCostDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCostDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, costs :  List<Cost>) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at RatingCostDetailPopup.pcf: line 19, column 20
    function initialValue_0 () : Cost {
      return costs.first()
    }
    
    // 'label' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function label_20 () : java.lang.Object {
      return period.Policy.Product.DefaultTermType == TermType.TC_ANNUAL ?  DisplayKey.get("Web.RatingCostDetailPopup.ActualAnnualAmount") : DisplayKey.get("Web.RatingCostDetailPopup.ActualTermAmount")
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RatingCostDetailPopup.pcf: line 59, column 39
    function sortValue_15 (cost :  Cost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at RatingCostDetailPopup.pcf: line 63, column 39
    function sortValue_16 (cost :  Cost) : java.lang.Object {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at RatingCostDetailPopup.pcf: line 68, column 51
    function sortValue_17 (cost :  Cost) : java.lang.Object {
      return cost.Basis
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at RatingCostDetailPopup.pcf: line 74, column 51
    function sortValue_18 (cost :  Cost) : java.lang.Object {
      return cost.ActualBaseRate == 0 ? cost.StandardBaseRate : cost.ActualBaseRate 
    }
    
    // 'value' attribute on TextCell (id=ActualAdjRate_Cell) at RatingCostDetailPopup.pcf: line 80, column 51
    function sortValue_19 (cost :  Cost) : java.lang.Object {
      return cost.ActualAdjRate == 0 ? cost.StandardAdjRate : cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=ActualTermAmount_Cell) at RatingCostDetailPopup.pcf: line 87, column 60
    function sortValue_21 (cost :  Cost) : java.lang.Object {
      return cost.ActualTermAmount == 0 ? cost.StandardTermAmount : cost.ActualTermAmount
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at RatingCostDetailPopup.pcf: line 92, column 37
    function sortValue_22 (cost :  Cost) : java.lang.Object {
      return cost.Proration
    }
    
    // 'value' attribute on TextCell (id=ActualAmount_Cell) at RatingCostDetailPopup.pcf: line 99, column 60
    function sortValue_23 (cost :  Cost) : java.lang.Object {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at RatingCostDetailPopup.pcf: line 104, column 46
    function sortValue_24 (cost :  Cost) : java.lang.Object {
      return cost.OverrideReason
    }
    
    // 'title' attribute on Popup (id=RatingCostDetailPopup) at RatingCostDetailPopup.pcf: line 7, column 106
    static function title_68 (costs :  List<Cost>, period :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.RatingCostDetailPopup.Title", costs.first().CostCode.CostName)
    }
    
    // 'value' attribute on TypeKeyInput (id=ChargePattern_Input) at RatingCostDetailPopup.pcf: line 27, column 40
    function valueRoot_2 () : java.lang.Object {
      return firstCost
    }
    
    // 'value' attribute on TypeKeyInput (id=ChargePattern_Input) at RatingCostDetailPopup.pcf: line 27, column 40
    function value_1 () : ChargePattern {
      return firstCost.ChargePattern
    }
    
    // 'value' attribute on TextInput (id=BillGroup_Input) at RatingCostDetailPopup.pcf: line 42, column 42
    function value_12 () : java.lang.String {
      return firstCost.BillGroup
    }
    
    // 'value' attribute on TextInput (id=ChargeGroup_Input) at RatingCostDetailPopup.pcf: line 31, column 44
    function value_5 () : java.lang.String {
      return firstCost.ChargeGroup
    }
    
    // 'value' attribute on RowIterator at RatingCostDetailPopup.pcf: line 53, column 42
    function value_65 () : List<Cost> {
      return costs
    }
    
    // 'value' attribute on TypeKeyInput (id=RateAmountType_Input) at RatingCostDetailPopup.pcf: line 38, column 41
    function value_8 () : RateAmountType {
      return firstCost.RateAmountType
    }
    
    // 'valueType' attribute on RowIterator at RatingCostDetailPopup.pcf: line 53, column 42
    function verifyValueTypeIsAllowedType_66 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostDetailPopup.pcf: line 53, column 42
    function verifyValueTypeIsAllowedType_66 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostDetailPopup.pcf: line 53, column 42
    function verifyValueTypeIsAllowedType_66 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on TypeKeyInput (id=RateAmountType_Input) at RatingCostDetailPopup.pcf: line 38, column 41
    function verifyValueType_11 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ChargePattern_Input) at RatingCostDetailPopup.pcf: line 27, column 40
    function verifyValueType_4 () : void {
      var __valueTypeArg : ChargePattern
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on RowIterator at RatingCostDetailPopup.pcf: line 53, column 42
    function verifyValueType_67 () : void {
      var __valueTypeArg : List<Cost>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_66(__valueTypeArg)
    }
    
    override property get CurrentLocation () : pcf.RatingCostDetailPopup {
      return super.CurrentLocation as pcf.RatingCostDetailPopup
    }
    
    property get costs () : List<Cost> {
      return getVariableValue("costs", 0) as List<Cost>
    }
    
    property set costs ($arg :  List<Cost>) {
      setVariableValue("costs", 0, $arg)
    }
    
    property get firstCost () : Cost {
      return getVariableValue("firstCost", 0) as Cost
    }
    
    property set firstCost ($arg :  Cost) {
      setVariableValue("firstCost", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}