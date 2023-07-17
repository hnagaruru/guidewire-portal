package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskCovPricingLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskCovPricingLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskCovPricingLV.pcf: line 22, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskCovPricingLV.pcf: line 80, column 24
    function sortBy_6 (riskCoverage :  APDRiskCoverage) : java.lang.Object {
      return riskCoverage.Coverage.PricingOrder
    }
    
    // 'value' attribute on RowIterator (id=CoveragesIterator) at APDRiskCovPricingLV.pcf: line 77, column 37
    function value_121 () : APDRiskCoverage[] {
      return risk.RiskCoverages
    }
    
    // 'visible' attribute on TextCell (id=CodeHeading_Cell) at APDRiskCovPricingLV.pcf: line 33, column 48
    function visible_1 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getRequireValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setRequireValue("costCodeHelper", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get risk () : APDRiskCoverable {
      return getRequireValue("risk", 0) as APDRiskCoverable
    }
    
    property set risk ($arg :  APDRiskCoverable) {
      setRequireValue("risk", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=ExposurePricing_Cell) at APDRiskCovPricingLV.pcf: line 247, column 53
    function action_116 () : void {
      APDExposurePricePopup.push(price, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskCovPricingLV.pcf: line 158, column 87
    function action_37 () : void {
      price.pricingUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCostDefinition) 
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskCovPricingLV.pcf: line 163, column 89
    function action_39 () : void {
      price.pricingDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDCostDefinition) 
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDRiskCovPricingLV.pcf: line 167, column 84
    function action_40 () : void {
      APDCostCodesPopup.push(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=RemoveCost) at APDRiskCovPricingLV.pcf: line 171, column 86
    function action_42 () : void {
      riskCoverage.removePricing(price); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskCovPricing)
    }
    
    // 'action' attribute on MenuItem (id=DefPriorCosts) at APDRiskCovPricingLV.pcf: line 213, column 65
    function action_83 () : void {
      definition.CumulativeCostBasis = true; APDDependantPricePopup.push(definition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDRiskCovPricingLV.pcf: line 218, column 61
    function action_85 () : void {
      APDDependantPricePopup.push(definition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=DeletePriorCosts) at APDRiskCovPricingLV.pcf: line 223, column 61
    function action_88 () : void {
      definition.CumulativeCostBasis = false
    }
    
    // 'action' attribute on ButtonCell (id=ExposurePricing_Cell) at APDRiskCovPricingLV.pcf: line 247, column 53
    function action_dest_117 () : pcf.api.Destination {
      return pcf.APDExposurePricePopup.createDestination(price, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDRiskCovPricingLV.pcf: line 167, column 84
    function action_dest_41 () : pcf.api.Destination {
      return pcf.APDCostCodesPopup.createDestination(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDRiskCovPricingLV.pcf: line 218, column 61
    function action_dest_86 () : pcf.api.Destination {
      return pcf.APDDependantPricePopup.createDestination(definition, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskCovPricingLV.pcf: line 158, column 87
    function available_36 () : java.lang.Boolean {
      return price.CostDefinition.PricingOrder != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskCovPricingLV.pcf: line 163, column 89
    function available_38 () : java.lang.Boolean {
      return price.CostDefinition.PricingOrder != riskCoverage.CostPricing.Count
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDRiskCovPricingLV.pcf: line 236, column 62
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      price.Rate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskCovPricingLV.pcf: line 242, column 38
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.RatingScale = (__VALUE_TO_SET as RatingScale)
    }
    
    // 'value' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.CostCode = (__VALUE_TO_SET as CostCode)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDRiskCovPricingLV.pcf: line 187, column 52
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDRiskCovPricingLV.pcf: line 198, column 52
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.Basis = (__VALUE_TO_SET as APDAttribute)
    }
    
    // 'editable' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function editable_43 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'initialValue' attribute on Variable at APDRiskCovPricingLV.pcf: line 138, column 37
    function initialValue_35 () : APDCostDefinition {
      return price.CostDefinition
    }
    
    // RowIterator at APDRiskCovPricingLV.pcf: line 134, column 41
    function initializeVariables_119 () : void {
        definition = price.CostDefinition;

    }
    
    // 'noneSelectedLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function noneSelectedLabel_93 () : java.lang.String {
      return definition.isCumulativeCostBasis()? DisplayKey.get("Web.APDRiskPricingPanelSet.PriorCosts.NoneSelected") : DisplayKey.get("Java.NameValueView.NoneSelected")
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskCovPricingLV.pcf: line 208, column 96
    function onChange_81 () : void {
      if (definition.Basis != null) definition.CumulativeCostBasis = false
    }
    
    // 'optionLabel' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function optionLabel_47 (VALUE :  CostCode) : java.lang.String {
      return VALUE.CostCode
    }
    
    // 'optionLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function optionLabel_94 (VALUE :  APDAttribute) : java.lang.String {
      return VALUE.QualifiedLabel
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function valueRange_48 () : java.lang.Object {
      return costCodeHelper.CostCodes
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function valueRange_95 () : java.lang.Object {
      return definition.BasisCandidates
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at APDRiskCovPricingLV.pcf: line 229, column 62
    function valueRoot_102 () : java.lang.Object {
      return price
    }
    
    // 'value' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function valueRoot_46 () : java.lang.Object {
      return definition
    }
    
    // 'value' attribute on TextCell (id=ChargeName_Cell) at APDRiskCovPricingLV.pcf: line 176, column 51
    function valueRoot_55 () : java.lang.Object {
      return definition.CostCode
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at APDRiskCovPricingLV.pcf: line 229, column 62
    function value_101 () : java.math.BigDecimal {
      return price.PriceBasis
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDRiskCovPricingLV.pcf: line 236, column 62
    function value_105 () : java.math.BigDecimal {
      return price.Rate
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskCovPricingLV.pcf: line 242, column 38
    function value_110 () : RatingScale {
      return definition.RatingScale
    }
    
    // 'value' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function value_44 () : CostCode {
      return definition.CostCode
    }
    
    // 'value' attribute on TextCell (id=ChargeName_Cell) at APDRiskCovPricingLV.pcf: line 176, column 51
    function value_54 () : java.lang.String {
      return definition.CostCode.CostName
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDRiskCovPricingLV.pcf: line 182, column 52
    function value_57 () : RateAmountType {
      return definition.CostCode.RateAmountType
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDRiskCovPricingLV.pcf: line 187, column 52
    function value_63 () : java.lang.Boolean {
      return definition.SeparateBilling
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDRiskCovPricingLV.pcf: line 193, column 52
    function value_69 () : ChargePattern {
      return definition.CostCode.ChargePatern
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDRiskCovPricingLV.pcf: line 198, column 52
    function value_75 () : java.lang.Boolean {
      return definition.SeparateCollection
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function value_90 () : APDAttribute {
      return definition.Basis
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function verifyValueRangeIsAllowedType_49 ($$arg :  CostCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function verifyValueRangeIsAllowedType_49 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function verifyValueRangeIsAllowedType_49 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function verifyValueRangeIsAllowedType_96 ($$arg :  APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function verifyValueRangeIsAllowedType_96 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function verifyValueRangeIsAllowedType_96 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ChargeCode_Cell) at APDRiskCovPricingLV.pcf: line 152, column 51
    function verifyValueRange_50 () : void {
      var __valueRangeArg = costCodeHelper.CostCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_49(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskCovPricingLV.pcf: line 206, column 38
    function verifyValueRange_97 () : void {
      var __valueRangeArg = definition.BasisCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_96(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskCovPricingLV.pcf: line 242, column 38
    function verifyValueType_115 () : void {
      var __valueTypeArg : RatingScale
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDRiskCovPricingLV.pcf: line 182, column 52
    function verifyValueType_61 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDRiskCovPricingLV.pcf: line 193, column 52
    function verifyValueType_73 () : void {
      var __valueTypeArg : ChargePattern
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TextCell (id=Basis_Cell) at APDRiskCovPricingLV.pcf: line 229, column 62
    function visible_100 () : java.lang.Boolean {
      return not definition.CostingByExposure
    }
    
    // 'visible' attribute on ButtonCell (id=ExposurePricing_Cell) at APDRiskCovPricingLV.pcf: line 247, column 53
    function visible_118 () : java.lang.Boolean {
      return definition.CostingByExposure
    }
    
    // 'visible' attribute on MenuItem (id=DefPriorCosts) at APDRiskCovPricingLV.pcf: line 213, column 65
    function visible_82 () : java.lang.Boolean {
      return not definition.isCumulativeCostBasis()
    }
    
    // 'visible' attribute on MenuItem (id=EditPriorCosts) at APDRiskCovPricingLV.pcf: line 218, column 61
    function visible_84 () : java.lang.Boolean {
      return definition.isCumulativeCostBasis()
    }
    
    property get definition () : APDCostDefinition {
      return getVariableValue("definition", 2) as APDCostDefinition
    }
    
    property set definition ($arg :  APDCostDefinition) {
      setVariableValue("definition", 2, $arg)
    }
    
    property get price () : APDRiskCovPricing {
      return getIteratedValue(2) as APDRiskCovPricing
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskCovPricingLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddCost) at APDRiskCovPricingLV.pcf: line 96, column 85
    function action_10 () : void {
      riskCoverage.createAndAddPricing(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskCovPricing) 
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskCovPricingLV.pcf: line 101, column 85
    function action_12 () : void {
      riskCoverage.pricingUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskCovPricing) 
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskCovPricingLV.pcf: line 106, column 87
    function action_14 () : void {
      riskCoverage.pricingDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskCovPricing) 
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskCovPricingLV.pcf: line 101, column 85
    function available_11 () : java.lang.Boolean {
      return riskCoverage.Coverage.PricingOrder != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskCovPricingLV.pcf: line 106, column 87
    function available_13 () : java.lang.Boolean {
      return riskCoverage.Coverage.PricingOrder != risk.RiskCoverages.Count
    }
    
    // 'available' attribute on ButtonCell (id=riskCoverageMenu_Cell) at APDRiskCovPricingLV.pcf: line 92, column 49
    function available_15 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDRiskCovPricingLV.pcf: line 112, column 50
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskCoverage.Coverage.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDRiskCovPricingLV.pcf: line 120, column 50
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskCoverage.Coverage.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskCovPricingLV.pcf: line 141, column 26
    function sortBy_34 (price :  APDRiskCovPricing) : java.lang.Object {
      return price.CostDefinition.PricingOrder
    }
    
    // 'value' attribute on TextCell (id=riskCoverage_Cell) at APDRiskCovPricingLV.pcf: line 86, column 46
    function valueRoot_8 () : java.lang.Object {
      return riskCoverage.Coverage
    }
    
    // 'value' attribute on RowIterator at APDRiskCovPricingLV.pcf: line 134, column 41
    function value_120 () : APDRiskCovPricing[] {
      return riskCoverage.CostPricing
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDRiskCovPricingLV.pcf: line 112, column 50
    function value_19 () : java.lang.Boolean {
      return riskCoverage.Coverage.SeparateBilling
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDRiskCovPricingLV.pcf: line 120, column 50
    function value_27 () : java.lang.Boolean {
      return riskCoverage.Coverage.SeparateCollection
    }
    
    // 'value' attribute on TextCell (id=riskCoverage_Cell) at APDRiskCovPricingLV.pcf: line 86, column 46
    function value_7 () : java.lang.String {
      return riskCoverage.Coverage.Name
    }
    
    // 'visible' attribute on ButtonCell (id=riskCoverageMenu_Cell) at APDRiskCovPricingLV.pcf: line 92, column 49
    function visible_17 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get riskCoverage () : APDRiskCoverage {
      return getIteratedValue(1) as APDRiskCoverage
    }
    
    
  }
  
  
}