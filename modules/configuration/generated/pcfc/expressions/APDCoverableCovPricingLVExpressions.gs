package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverableCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverableCovPricingLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverableCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverableCovPricingLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableCovPricingLV.pcf: line 56, column 24
    function sortBy_0 (coverage :  APDCoverage) : java.lang.Object {
      return coverage.PricingOrder
    }
    
    // 'value' attribute on RowIterator (id=CoveragesIterator) at APDCoverableCovPricingLV.pcf: line 53, column 33
    function value_75 () : APDCoverage[] {
      return coverable.Clauses.whereTypeIs(APDCoverage)
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getRequireValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setRequireValue("costCodeHelper", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverableCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableCovPricingLV.pcf: line 122, column 87
    function action_19 () : void {
      costDefinition.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCoverageCostDefinition)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableCovPricingLV.pcf: line 127, column 89
    function action_21 () : void {
      costDefinition.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCoverageCostDefinition)
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDCoverableCovPricingLV.pcf: line 131, column 84
    function action_22 () : void {
      APDCostCodesPopup.push(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=RemoveCost) at APDCoverableCovPricingLV.pcf: line 135, column 86
    function action_24 () : void {
      coverage.removeCostDefinition(costDefinition); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCoverage)
    }
    
    // 'action' attribute on MenuItem (id=DefPriorCosts) at APDCoverableCovPricingLV.pcf: line 173, column 69
    function action_54 () : void {
      costDefinition.CumulativeCostBasis = true; APDDependantPricePopup.push(costDefinition, true)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDCoverableCovPricingLV.pcf: line 178, column 65
    function action_56 () : void {
      APDDependantPricePopup.push(costDefinition, true)
    }
    
    // 'action' attribute on MenuItem (id=DeletePriorCosts) at APDCoverableCovPricingLV.pcf: line 183, column 65
    function action_59 () : void {
      costDefinition.CumulativeCostBasis = false
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDCoverableCovPricingLV.pcf: line 131, column 84
    function action_dest_23 () : pcf.api.Destination {
      return pcf.APDCostCodesPopup.createDestination(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDCoverableCovPricingLV.pcf: line 178, column 65
    function action_dest_57 () : pcf.api.Destination {
      return pcf.APDDependantPricePopup.createDestination(costDefinition, true)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableCovPricingLV.pcf: line 122, column 87
    function available_18 () : java.lang.Boolean {
      return costDefinition.PricingOrder != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableCovPricingLV.pcf: line 127, column 89
    function available_20 () : java.lang.Boolean {
      return costDefinition.PricingOrder != coverage.CostDefinitions.Count
    }
    
    // 'value' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.CostCode = (__VALUE_TO_SET as CostCode)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDCoverableCovPricingLV.pcf: line 149, column 53
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDCoverableCovPricingLV.pcf: line 158, column 56
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.Basis = (__VALUE_TO_SET as APDAttribute)
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverableCovPricingLV.pcf: line 190, column 38
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.RatingScale = (__VALUE_TO_SET as RatingScale)
    }
    
    // 'noneSelectedLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function noneSelectedLabel_63 () : java.lang.String {
      return costDefinition.isCumulativeCostBasis()? DisplayKey.get("Web.APDRiskPricingPanelSet.PriorCosts.NoneSelected") : DisplayKey.get("Java.NameValueView.NoneSelected")
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableCovPricingLV.pcf: line 168, column 104
    function onChange_52 () : void {
      if (costDefinition.Basis != null) costDefinition.CumulativeCostBasis = false
    }
    
    // 'optionLabel' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function optionLabel_28 (VALUE :  CostCode) : java.lang.String {
      return VALUE.CostCode
    }
    
    // 'optionLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function optionLabel_64 (VALUE :  APDAttribute) : java.lang.String {
      return VALUE.QualifiedLabel
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function valueRange_29 () : java.lang.Object {
      return costCodeHelper.CostCodes
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function valueRange_65 () : java.lang.Object {
      return costDefinition.BasisCandidates
    }
    
    // 'value' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function valueRoot_27 () : java.lang.Object {
      return costDefinition
    }
    
    // 'value' attribute on TextCell (id=ChargeName_Cell) at APDCoverableCovPricingLV.pcf: line 140, column 55
    function valueRoot_34 () : java.lang.Object {
      return costDefinition.CostCode
    }
    
    // 'value' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function value_25 () : CostCode {
      return costDefinition.CostCode
    }
    
    // 'value' attribute on TextCell (id=ChargeName_Cell) at APDCoverableCovPricingLV.pcf: line 140, column 55
    function value_33 () : java.lang.String {
      return costDefinition.CostCode.CostName
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCoverableCovPricingLV.pcf: line 145, column 41
    function value_36 () : RateAmountType {
      return costDefinition.CostCode.RateAmountType
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDCoverableCovPricingLV.pcf: line 149, column 53
    function value_40 () : java.lang.Boolean {
      return costDefinition.SeparateBilling
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCoverableCovPricingLV.pcf: line 154, column 40
    function value_44 () : ChargePattern {
      return costDefinition.CostCode.ChargePatern
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDCoverableCovPricingLV.pcf: line 158, column 56
    function value_48 () : java.lang.Boolean {
      return costDefinition.SeparateCollection
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function value_60 () : APDAttribute {
      return costDefinition.Basis
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverableCovPricingLV.pcf: line 190, column 38
    function value_69 () : RatingScale {
      return costDefinition.RatingScale
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function verifyValueRangeIsAllowedType_30 ($$arg :  CostCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function verifyValueRangeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function verifyValueRangeIsAllowedType_66 ($$arg :  APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function verifyValueRangeIsAllowedType_66 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function verifyValueRangeIsAllowedType_66 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDCoverableCovPricingLV.pcf: line 116, column 34
    function verifyValueRange_31 () : void {
      var __valueRangeArg = costCodeHelper.CostCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverableCovPricingLV.pcf: line 166, column 38
    function verifyValueRange_67 () : void {
      var __valueRangeArg = costDefinition.BasisCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_66(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCoverableCovPricingLV.pcf: line 145, column 41
    function verifyValueType_39 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCoverableCovPricingLV.pcf: line 154, column 40
    function verifyValueType_47 () : void {
      var __valueTypeArg : ChargePattern
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverableCovPricingLV.pcf: line 190, column 38
    function verifyValueType_73 () : void {
      var __valueTypeArg : RatingScale
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=DefPriorCosts) at APDCoverableCovPricingLV.pcf: line 173, column 69
    function visible_53 () : java.lang.Boolean {
      return not costDefinition.isCumulativeCostBasis()
    }
    
    // 'visible' attribute on MenuItem (id=EditPriorCosts) at APDCoverableCovPricingLV.pcf: line 178, column 65
    function visible_55 () : java.lang.Boolean {
      return costDefinition.isCumulativeCostBasis()
    }
    
    property get costDefinition () : APDCoverageCostDefinition {
      return getIteratedValue(2) as APDCoverageCostDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverableCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDCoverableCovPricingLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddCost) at APDCoverableCovPricingLV.pcf: line 71, column 85
    function action_4 () : void {
      coverage.createAndAddCostDefinition(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCoverageCostDefinition) 
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableCovPricingLV.pcf: line 76, column 85
    function action_6 () : void {
      coverage.pricingUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCoverage)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableCovPricingLV.pcf: line 81, column 87
    function action_8 () : void {
      coverage.pricingDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCoverage)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableCovPricingLV.pcf: line 76, column 85
    function available_5 () : java.lang.Boolean {
      return coverage.PricingOrder != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableCovPricingLV.pcf: line 81, column 87
    function available_7 () : java.lang.Boolean {
      return coverage.PricingOrder != coverable.Coverages.Count
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDCoverableCovPricingLV.pcf: line 86, column 45
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDCoverableCovPricingLV.pcf: line 92, column 48
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableCovPricingLV.pcf: line 106, column 26
    function sortBy_17 (costDefinition :  APDCoverageCostDefinition) : java.lang.Object {
      return costDefinition.PricingOrder
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at APDCoverableCovPricingLV.pcf: line 62, column 33
    function valueRoot_2 () : java.lang.Object {
      return coverage
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at APDCoverableCovPricingLV.pcf: line 62, column 33
    function value_1 () : java.lang.String {
      return coverage.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDCoverableCovPricingLV.pcf: line 92, column 48
    function value_13 () : java.lang.Boolean {
      return coverage.SeparateCollection
    }
    
    // 'value' attribute on RowIterator at APDCoverableCovPricingLV.pcf: line 103, column 49
    function value_74 () : APDCoverageCostDefinition[] {
      return coverage.CostDefinitions
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDCoverableCovPricingLV.pcf: line 86, column 45
    function value_9 () : java.lang.Boolean {
      return coverage.SeparateBilling
    }
    
    property get coverage () : APDCoverage {
      return getIteratedValue(1) as APDCoverage
    }
    
    
  }
  
  
}