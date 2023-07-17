package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverablePricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverablePricingPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverablePricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverablePricingPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at APDCoverablePricingPanelSet.pcf: line 45, column 73
    function def_onEnter_12 (def :  pcf.APDCoverableCovPricingLV) : void {
      def.onEnter(coverable, costCodeHelper)
    }
    
    // 'def' attribute on PanelRef at APDCoverablePricingPanelSet.pcf: line 45, column 73
    function def_refreshVariables_13 (def :  pcf.APDCoverableCovPricingLV) : void {
      def.refreshVariables(coverable, costCodeHelper)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDCoverablePricingPanelSet.pcf: line 23, column 48
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateCollection_Input) at APDCoverablePricingPanelSet.pcf: line 30, column 51
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverablePricingPanelSet.pcf: line 73, column 28
    function sortBy_14 (costDefinition :  APDRiskCostDefinition) : java.lang.Object {
      return costDefinition.PricingOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverablePricingPanelSet.pcf: line 173, column 40
    function sortValue_15 (costDefinition :  APDRiskCostDefinition) : java.lang.Object {
      return costDefinition.RatingScale
    }
    
    // 'title' attribute on TitleBar at APDCoverablePricingPanelSet.pcf: line 15, column 40
    function title_0 () : java.lang.String {
      return coverable.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=CostDefinitionIterator) at APDCoverablePricingPanelSet.pcf: line 70, column 47
    function toCreateAndAdd_72 () : APDRiskCostDefinition {
      return coverable.createAndAddCostDefinition()
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDCoverablePricingPanelSet.pcf: line 23, column 48
    function valueRoot_3 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDCoverablePricingPanelSet.pcf: line 23, column 48
    function value_1 () : java.lang.Boolean {
      return coverable.SeparateBilling
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateCollection_Input) at APDCoverablePricingPanelSet.pcf: line 30, column 51
    function value_5 () : java.lang.Boolean {
      return coverable.SeparateCollection
    }
    
    // 'value' attribute on RowIterator (id=CostDefinitionIterator) at APDCoverablePricingPanelSet.pcf: line 70, column 47
    function value_73 () : APDRiskCostDefinition[] {
      return coverable.CostDefinitions
    }
    
    // 'visible' attribute on PanelRef at APDCoverablePricingPanelSet.pcf: line 35, column 73
    function visible_10 () : java.lang.Boolean {
      return coverable.Clauses.whereTypeIs(APDCoverage).Count > 0
    }
    
    // 'visible' attribute on DetailViewPanel at APDCoverablePricingPanelSet.pcf: line 17, column 57
    function visible_9 () : java.lang.Boolean {
      return not (coverable typeis APDProductLine)
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
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverablePricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDCoverablePricingPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverablePricingPanelSet.pcf: line 91, column 89
    function action_17 () : void {
      coverable.costDefinitionUp(costDefinition); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskCostDefinition)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverablePricingPanelSet.pcf: line 96, column 91
    function action_19 () : void {
      coverable.costDefinitionDown(costDefinition); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskCostDefinition)
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDCoverablePricingPanelSet.pcf: line 100, column 86
    function action_20 () : void {
      APDCostCodesPopup.push(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=Remove) at APDCoverablePricingPanelSet.pcf: line 104, column 88
    function action_22 () : void {
      coverable.removeCostDefinition(costDefinition); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskPricing) 
    }
    
    // 'action' attribute on MenuItem (id=DefPriorCosts) at APDCoverablePricingPanelSet.pcf: line 156, column 71
    function action_52 () : void {
      costDefinition.CumulativeCostBasis = true; APDDependantPricePopup.push(costDefinition, true)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDCoverablePricingPanelSet.pcf: line 161, column 67
    function action_54 () : void {
      APDDependantPricePopup.push(costDefinition, true)
    }
    
    // 'action' attribute on MenuItem (id=DeletePriorCosts) at APDCoverablePricingPanelSet.pcf: line 166, column 67
    function action_57 () : void {
      costDefinition.CumulativeCostBasis = false
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDCoverablePricingPanelSet.pcf: line 100, column 86
    function action_dest_21 () : pcf.api.Destination {
      return pcf.APDCostCodesPopup.createDestination(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDCoverablePricingPanelSet.pcf: line 161, column 67
    function action_dest_55 () : pcf.api.Destination {
      return pcf.APDDependantPricePopup.createDestination(costDefinition, true)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverablePricingPanelSet.pcf: line 91, column 89
    function available_16 () : java.lang.Boolean {
      return costDefinition.PricingOrder != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverablePricingPanelSet.pcf: line 96, column 91
    function available_18 () : java.lang.Boolean {
      return costDefinition.PricingOrder != coverable.CostDefinitions.Count
    }
    
    // 'value' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.CostCode = (__VALUE_TO_SET as CostCode)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDCoverablePricingPanelSet.pcf: line 125, column 55
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDCoverablePricingPanelSet.pcf: line 139, column 58
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.Basis = (__VALUE_TO_SET as APDAttribute)
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverablePricingPanelSet.pcf: line 173, column 40
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      costDefinition.RatingScale = (__VALUE_TO_SET as RatingScale)
    }
    
    // 'noneSelectedLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function noneSelectedLabel_61 () : java.lang.String {
      return costDefinition.isCumulativeCostBasis()? DisplayKey.get("Web.APDRiskPricingPanelSet.PriorCosts.NoneSelected") : DisplayKey.get("Java.NameValueView.NoneSelected")
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverablePricingPanelSet.pcf: line 151, column 106
    function onChange_50 () : void {
      if (costDefinition.Basis != null) costDefinition.CumulativeCostBasis = false
    }
    
    // 'optionLabel' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function optionLabel_26 (VALUE :  CostCode) : java.lang.String {
      return VALUE.CostCode
    }
    
    // 'optionLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function optionLabel_62 (VALUE :  APDAttribute) : java.lang.String {
      return VALUE.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function valueRange_27 () : java.lang.Object {
      return costCodeHelper.CostCodes
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function valueRange_63 () : java.lang.Object {
      return costDefinition.BasisCandidates
    }
    
    // 'value' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function valueRoot_25 () : java.lang.Object {
      return costDefinition
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDCoverablePricingPanelSet.pcf: line 111, column 57
    function valueRoot_32 () : java.lang.Object {
      return costDefinition.CostCode
    }
    
    // 'value' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function value_23 () : CostCode {
      return costDefinition.CostCode
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDCoverablePricingPanelSet.pcf: line 111, column 57
    function value_31 () : java.lang.String {
      return costDefinition.CostCode.CostName
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCoverablePricingPanelSet.pcf: line 118, column 43
    function value_34 () : RateAmountType {
      return costDefinition.CostCode.RateAmountType
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDCoverablePricingPanelSet.pcf: line 125, column 55
    function value_38 () : java.lang.Boolean {
      return costDefinition.SeparateBilling
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCoverablePricingPanelSet.pcf: line 132, column 42
    function value_42 () : ChargePattern {
      return costDefinition.CostCode.ChargePatern
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDCoverablePricingPanelSet.pcf: line 139, column 58
    function value_46 () : java.lang.Boolean {
      return costDefinition.SeparateCollection
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function value_58 () : APDAttribute {
      return costDefinition.Basis
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverablePricingPanelSet.pcf: line 173, column 40
    function value_67 () : RatingScale {
      return costDefinition.RatingScale
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function verifyValueRangeIsAllowedType_28 ($$arg :  CostCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function verifyValueRangeIsAllowedType_64 ($$arg :  APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function verifyValueRangeIsAllowedType_64 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function verifyValueRangeIsAllowedType_64 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDCoverablePricingPanelSet.pcf: line 85, column 36
    function verifyValueRange_29 () : void {
      var __valueRangeArg = costCodeHelper.CostCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDCoverablePricingPanelSet.pcf: line 149, column 40
    function verifyValueRange_65 () : void {
      var __valueRangeArg = costDefinition.BasisCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_64(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDCoverablePricingPanelSet.pcf: line 118, column 43
    function verifyValueType_37 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDCoverablePricingPanelSet.pcf: line 132, column 42
    function verifyValueType_45 () : void {
      var __valueTypeArg : ChargePattern
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingScale_Cell) at APDCoverablePricingPanelSet.pcf: line 173, column 40
    function verifyValueType_71 () : void {
      var __valueTypeArg : RatingScale
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=DefPriorCosts) at APDCoverablePricingPanelSet.pcf: line 156, column 71
    function visible_51 () : java.lang.Boolean {
      return not costDefinition.isCumulativeCostBasis()
    }
    
    // 'visible' attribute on MenuItem (id=EditPriorCosts) at APDCoverablePricingPanelSet.pcf: line 161, column 67
    function visible_53 () : java.lang.Boolean {
      return costDefinition.isCumulativeCostBasis()
    }
    
    property get costDefinition () : APDRiskCostDefinition {
      return getIteratedValue(1) as APDRiskCostDefinition
    }
    
    
  }
  
  
}