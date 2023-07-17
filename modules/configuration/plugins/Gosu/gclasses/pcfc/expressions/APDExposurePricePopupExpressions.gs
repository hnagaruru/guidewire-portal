package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDExposurePricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDExposurePricePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDExposurePricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDExposurePricePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (pricing :  APDRiskCovPricing, openForEdit :  Boolean) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=APDExposurePricePopup) at APDExposurePricePopup.pcf: line 11, column 134
    function afterEnter_21 () : void {
      pricing.syncExposurePricing()
    }
    
    // 'editable' attribute on Screen at APDExposurePricePopup.pcf: line 21, column 30
    function editable_20 () : java.lang.Boolean {
      return openForEdit
    }
    
    // EditButtons at APDExposurePricePopup.pcf: line 23, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on TextCell (id=PriceBasis_Cell) at APDExposurePricePopup.pcf: line 40, column 49
    function label_1 () : java.lang.Object {
      return pricing.CostDefinition.Basis.Label
    }
    
    // 'value' attribute on TextCell (id=PriceBasis_Cell) at APDExposurePricePopup.pcf: line 40, column 49
    function sortValue_2 (exposurePrice :  entity.APDExposurePrice) : java.lang.Object {
      return exposurePrice.PriceBasis
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDExposurePricePopup.pcf: line 48, column 49
    function sortValue_3 (exposurePrice :  entity.APDExposurePrice) : java.lang.Object {
      return exposurePrice.Rate
    }
    
    // 'title' attribute on Popup (id=APDExposurePricePopup) at APDExposurePricePopup.pcf: line 11, column 134
    static function title_24 (openForEdit :  Boolean, pricing :  APDRiskCovPricing) : java.lang.Object {
      return DisplayKey.get("Web.APDExposurePricePopup.Title", pricing.RiskCoverage.Clause.Name, pricing.CostCode.CostName)
    }
    
    // 'value' attribute on RowIterator at APDExposurePricePopup.pcf: line 30, column 49
    function value_19 () : entity.APDExposurePrice[] {
      return pricing.ExposurePrices
    }
    
    override property get CurrentLocation () : pcf.APDExposurePricePopup {
      return super.CurrentLocation as pcf.APDExposurePricePopup
    }
    
    property get openForEdit () : Boolean {
      return getVariableValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get pricing () : APDRiskCovPricing {
      return getVariableValue("pricing", 0) as APDRiskCovPricing
    }
    
    property set pricing ($arg :  APDRiskCovPricing) {
      setVariableValue("pricing", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDExposurePricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDExposurePricePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDExposurePricePopup.pcf: line 48, column 49
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposurePrice.Rate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'label' attribute on TextCell (id=PriceBasis_Cell) at APDExposurePricePopup.pcf: line 40, column 49
    function label_6 () : java.lang.Object {
      return pricing.CostDefinition.Basis.Label
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDExposurePricePopup.pcf: line 52, column 40
    function valueRoot_16 () : java.lang.Object {
      return pricing.CostDefinition
    }
    
    // 'value' attribute on TextCell (id=PriceBasis_Cell) at APDExposurePricePopup.pcf: line 40, column 49
    function valueRoot_8 () : java.lang.Object {
      return exposurePrice
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at APDExposurePricePopup.pcf: line 48, column 49
    function value_11 () : java.math.BigDecimal {
      return exposurePrice.Rate
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingScale_Cell) at APDExposurePricePopup.pcf: line 52, column 40
    function value_15 () : RatingScale {
      return pricing.CostDefinition.RatingScale
    }
    
    // 'value' attribute on TextCell (id=basis_Cell) at APDExposurePricePopup.pcf: line 34, column 163
    function value_4 () : java.lang.String {
      return exposurePrice.RiskExposure.DisplayName?:"" + exposurePrice.RiskCoverable.DisplayName?:"" // only one will be populated
    }
    
    // 'value' attribute on TextCell (id=PriceBasis_Cell) at APDExposurePricePopup.pcf: line 40, column 49
    function value_7 () : java.math.BigDecimal {
      return exposurePrice.PriceBasis
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingScale_Cell) at APDExposurePricePopup.pcf: line 52, column 40
    function verifyValueType_18 () : void {
      var __valueTypeArg : RatingScale
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get exposurePrice () : entity.APDExposurePrice {
      return getIteratedValue(1) as entity.APDExposurePrice
    }
    
    
  }
  
  
}