package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskPricingPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskPricingPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at APDRiskPricingPanelSet.pcf: line 86, column 129
    function def_onEnter_26 (def :  pcf.APDRiskCovPricingLV) : void {
      def.onEnter(risk, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'def' attribute on PanelRef at APDRiskPricingPanelSet.pcf: line 86, column 129
    function def_refreshVariables_27 (def :  pcf.APDRiskCovPricingLV) : void {
      def.refreshVariables(risk, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateCollection_Input) at APDRiskPricingPanelSet.pcf: line 45, column 92
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      risk.Coverable.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDRiskPricingPanelSet.pcf: line 34, column 92
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      risk.Coverable.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPricingPanelSet.pcf: line 22, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'label' attribute on Label at APDRiskPricingPanelSet.pcf: line 37, column 112
    function label_9 () : java.lang.String {
      return risk.Coverable.ChildrenLabel
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskPricingPanelSet.pcf: line 123, column 28
    function sortBy_30 (price :  APDRiskPricing) : java.lang.Object {
      return price.CostDefinition.PricingOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskPricingPanelSet.pcf: line 242, column 40
    function sortValue_36 (price :  APDRiskPricing) : java.lang.Object {
      var definition : APDCostDefinition = (price.CostDefinition)
return definition.RatingScale
    }
    
    // 'title' attribute on TitleBar at APDRiskPricingPanelSet.pcf: line 25, column 35
    function title_1 () : java.lang.String {
      return risk.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=PricingIterator) at APDRiskPricingPanelSet.pcf: line 116, column 40
    function toCreateAndAdd_111 () : APDRiskPricing {
      return risk.createAndAddPricing()
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDRiskPricingPanelSet.pcf: line 34, column 92
    function valueRoot_5 () : java.lang.Object {
      return risk.Coverable
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateCollection_Input) at APDRiskPricingPanelSet.pcf: line 45, column 92
    function value_11 () : java.lang.Boolean {
      return risk.Coverable.SeparateCollection
    }
    
    // 'value' attribute on RowIterator (id=PricingIterator) at APDRiskPricingPanelSet.pcf: line 116, column 40
    function value_112 () : APDRiskPricing[] {
      return risk.CostPricing
    }
    
    // 'value' attribute on RowIterator (id=RiskObjects) at APDRiskPricingPanelSet.pcf: line 64, column 42
    function value_21 () : APDRiskCoverable[] {
      return userPreferences.canDesign() ? risk.ChildRiskCoverables : risk.ChildRiskCoverables.where(\r -> r.HasPricing)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDRiskPricingPanelSet.pcf: line 34, column 92
    function value_3 () : java.lang.Boolean {
      return risk.Coverable.SeparateBilling
    }
    
    // 'visible' attribute on BooleanRadioInput (id=SeparateBilling_Input) at APDRiskPricingPanelSet.pcf: line 34, column 92
    function visible_2 () : java.lang.Boolean {
      return userPreferences.canDesign() and not (risk typeis APDRiskPolicyLine)
    }
    
    // 'visible' attribute on ListViewPanel at APDRiskPricingPanelSet.pcf: line 57, column 57
    function visible_22 () : java.lang.Boolean {
      return risk.ChildRiskCoverables.Count > 0
    }
    
    // 'visible' attribute on PanelRef at APDRiskPricingPanelSet.pcf: line 76, column 129
    function visible_24 () : java.lang.Boolean {
      return risk.RiskClauses.whereTypeIs(APDRiskCoverage).Count > 0 and (risk.HasPricing or userPreferences.canDesign())
    }
    
    // 'visible' attribute on PanelRef at APDRiskPricingPanelSet.pcf: line 93, column 78
    function visible_28 () : java.lang.Boolean {
      return risk.CostPricing.Count > 0 or userPreferences.canDesign()
    }
    
    // 'addVisible' attribute on IteratorButtons at APDRiskPricingPanelSet.pcf: line 106, column 39
    function visible_29 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'visible' attribute on Label at APDRiskPricingPanelSet.pcf: line 37, column 112
    function visible_8 () : java.lang.Boolean {
      return risk.ChildRiskCoverables.hasMatch(\r -> r.HasPricing) or userPreferences.canDesign()
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
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDRiskPricingPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskPricingPanelSet.pcf: line 142, column 89
    function action_39 () : void {
      price.pricingUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskPricingPanelSet.pcf: line 147, column 91
    function action_41 () : void {
      price.pricingDown()
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDRiskPricingPanelSet.pcf: line 151, column 86
    function action_42 () : void {
      APDCostCodesPopup.push(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=Remove) at APDRiskPricingPanelSet.pcf: line 155, column 88
    function action_44 () : void {
      risk.removePricing(price); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskPricing) 
    }
    
    // 'action' attribute on MenuItem (id=DefPriorCosts) at APDRiskPricingPanelSet.pcf: line 211, column 67
    function action_79 () : void {
      definition.CumulativeCostBasis = true; APDDependantPricePopup.push(definition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDRiskPricingPanelSet.pcf: line 216, column 63
    function action_81 () : void {
      APDDependantPricePopup.push(definition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=DeletePriorCosts) at APDRiskPricingPanelSet.pcf: line 221, column 63
    function action_84 () : void {
      definition.CumulativeCostBasis = false
    }
    
    // 'action' attribute on MenuItem (id=EditCostcodes) at APDRiskPricingPanelSet.pcf: line 151, column 86
    function action_dest_43 () : pcf.api.Destination {
      return pcf.APDCostCodesPopup.createDestination(costCodeHelper)
    }
    
    // 'action' attribute on MenuItem (id=EditPriorCosts) at APDRiskPricingPanelSet.pcf: line 216, column 63
    function action_dest_82 () : pcf.api.Destination {
      return pcf.APDDependantPricePopup.createDestination(definition, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskPricingPanelSet.pcf: line 142, column 89
    function available_38 () : java.lang.Boolean {
      return price.CostDefinition.PricingOrder != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskPricingPanelSet.pcf: line 147, column 91
    function available_40 () : java.lang.Boolean {
      return price.CostDefinition.PricingOrder != risk.CostPricing.Count
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDRiskPricingPanelSet.pcf: line 236, column 49
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      price.Rate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskPricingPanelSet.pcf: line 242, column 40
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.RatingScale = (__VALUE_TO_SET as RatingScale)
    }
    
    // 'value' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.CostCode = (__VALUE_TO_SET as CostCode)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDRiskPricingPanelSet.pcf: line 178, column 54
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.SeparateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDRiskPricingPanelSet.pcf: line 194, column 54
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.SeparateCollection = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      definition.Basis = (__VALUE_TO_SET as APDAttribute)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPricingPanelSet.pcf: line 120, column 39
    function initialValue_37 () : APDCostDefinition {
      return price.CostDefinition
    }
    
    // RowIterator (id=PricingIterator) at APDRiskPricingPanelSet.pcf: line 116, column 40
    function initializeVariables_110 () : void {
        definition = price.CostDefinition;

    }
    
    // 'noneSelectedLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function noneSelectedLabel_89 () : java.lang.String {
      return definition.isCumulativeCostBasis()? DisplayKey.get("Web.APDRiskPricingPanelSet.PriorCosts.NoneSelected") : DisplayKey.get("Java.NameValueView.NoneSelected")
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskPricingPanelSet.pcf: line 206, column 98
    function onChange_77 () : void {
      if (definition.Basis != null) definition.CumulativeCostBasis = false
    }
    
    // 'optionLabel' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function optionLabel_48 (VALUE :  CostCode) : java.lang.String {
      return VALUE.CostCode
    }
    
    // 'optionLabel' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function optionLabel_90 (VALUE :  APDAttribute) : java.lang.String {
      return VALUE.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function valueRange_49 () : java.lang.Object {
      return costCodeHelper.CostCodes
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function valueRange_91 () : java.lang.Object {
      return definition.BasisCandidates
    }
    
    // 'value' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function valueRoot_47 () : java.lang.Object {
      return definition
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDRiskPricingPanelSet.pcf: line 162, column 53
    function valueRoot_55 () : java.lang.Object {
      return definition.CostCode
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at APDRiskPricingPanelSet.pcf: line 228, column 49
    function valueRoot_97 () : java.lang.Object {
      return price
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskPricingPanelSet.pcf: line 242, column 40
    function value_104 () : RatingScale {
      return definition.RatingScale
    }
    
    // 'value' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function value_45 () : CostCode {
      return definition.CostCode
    }
    
    // 'value' attribute on TextCell (id=CostName_Cell) at APDRiskPricingPanelSet.pcf: line 162, column 53
    function value_54 () : java.lang.String {
      return definition.CostCode.CostName
    }
    
    // 'value' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDRiskPricingPanelSet.pcf: line 170, column 54
    function value_57 () : RateAmountType {
      return definition.CostCode.RateAmountType
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateBilling_Cell) at APDRiskPricingPanelSet.pcf: line 178, column 54
    function value_62 () : java.lang.Boolean {
      return definition.SeparateBilling
    }
    
    // 'value' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDRiskPricingPanelSet.pcf: line 186, column 54
    function value_67 () : ChargePattern {
      return definition.CostCode.ChargePatern
    }
    
    // 'value' attribute on BooleanRadioCell (id=SeparateCollection_Cell) at APDRiskPricingPanelSet.pcf: line 194, column 54
    function value_72 () : java.lang.Boolean {
      return definition.SeparateCollection
    }
    
    // 'value' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function value_86 () : APDAttribute {
      return definition.Basis
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at APDRiskPricingPanelSet.pcf: line 228, column 49
    function value_96 () : java.math.BigDecimal {
      return price.PriceBasis
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDRiskPricingPanelSet.pcf: line 236, column 49
    function value_99 () : java.math.BigDecimal {
      return price.Rate
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function verifyValueRangeIsAllowedType_50 ($$arg :  CostCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function verifyValueRangeIsAllowedType_92 ($$arg :  APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function verifyValueRangeIsAllowedType_92 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function verifyValueRangeIsAllowedType_92 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function verifyValueRange_51 () : void {
      var __valueRangeArg = costCodeHelper.CostCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=BasisDefinition_Cell) at APDRiskPricingPanelSet.pcf: line 204, column 40
    function verifyValueRange_93 () : void {
      var __valueRangeArg = definition.BasisCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_92(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingScale_Cell) at APDRiskPricingPanelSet.pcf: line 242, column 40
    function verifyValueType_109 () : void {
      var __valueTypeArg : RatingScale
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RateAmountType_Cell) at APDRiskPricingPanelSet.pcf: line 170, column 54
    function verifyValueType_61 () : void {
      var __valueTypeArg : RateAmountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ChargePattern_Cell) at APDRiskPricingPanelSet.pcf: line 186, column 54
    function verifyValueType_71 () : void {
      var __valueTypeArg : ChargePattern
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on RangeCell (id=CostCode_Cell) at APDRiskPricingPanelSet.pcf: line 136, column 53
    function visible_52 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'visible' attribute on MenuItem (id=DefPriorCosts) at APDRiskPricingPanelSet.pcf: line 211, column 67
    function visible_78 () : java.lang.Boolean {
      return not definition.isCumulativeCostBasis()
    }
    
    // 'visible' attribute on MenuItem (id=EditPriorCosts) at APDRiskPricingPanelSet.pcf: line 216, column 63
    function visible_80 () : java.lang.Boolean {
      return definition.isCumulativeCostBasis()
    }
    
    property get definition () : APDCostDefinition {
      return getVariableValue("definition", 1) as APDCostDefinition
    }
    
    property set definition ($arg :  APDCostDefinition) {
      setVariableValue("definition", 1, $arg)
    }
    
    property get price () : APDRiskPricing {
      return getIteratedValue(1) as APDRiskPricing
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskPricingPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=riskObject_Cell) at APDRiskPricingPanelSet.pcf: line 70, column 47
    function action_16 () : void {
      APDPricingPopup.push(riskObject, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'action' attribute on TextCell (id=riskObject_Cell) at APDRiskPricingPanelSet.pcf: line 70, column 47
    function action_dest_17 () : pcf.api.Destination {
      return pcf.APDPricingPopup.createDestination(riskObject, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'value' attribute on TextCell (id=riskObject_Cell) at APDRiskPricingPanelSet.pcf: line 70, column 47
    function valueRoot_19 () : java.lang.Object {
      return riskObject
    }
    
    // 'value' attribute on TextCell (id=riskObject_Cell) at APDRiskPricingPanelSet.pcf: line 70, column 47
    function value_18 () : java.lang.String {
      return riskObject.DisplayName
    }
    
    property get riskObject () : APDRiskCoverable {
      return getIteratedValue(1) as APDRiskCoverable
    }
    
    
  }
  
  
}