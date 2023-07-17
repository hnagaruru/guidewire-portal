package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/GLExpCovCumulDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GLExpCovCumulDetailLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLExpCovCumulDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GLExpCovCumulDetailLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GLExpCovCumulDetailLV.pcf: line 15, column 23
    function initialValue_0 () : boolean {
      return locCosts.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at GLExpCovCumulDetailLV.pcf: line 24, column 24
    function sortBy_1 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.Location.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at GLExpCovCumulDetailLV.pcf: line 27, column 24
    function sortBy_2 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.GLExposure.ClassCode
    }
    
    // 'sortBy' attribute on IteratorSort at GLExpCovCumulDetailLV.pcf: line 30, column 24
    function sortBy_3 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.Subline
    }
    
    // 'sortBy' attribute on IteratorSort at GLExpCovCumulDetailLV.pcf: line 33, column 24
    function sortBy_4 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.SplitType
    }
    
    // '$$sumValue' attribute on RowIterator at GLExpCovCumulDetailLV.pcf: line 123, column 25
    function sumValueRoot_14 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator at GLExpCovCumulDetailLV.pcf: line 123, column 25
    function sumValue_13 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at GLExpCovCumulDetailLV.pcf: line 21, column 46
    function value_53 () : entity.GLCovExposureCost[] {
      return locCosts?.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at GLExpCovCumulDetailLV.pcf: line 92, column 25
    function visible_5 () : java.lang.Boolean {
      return true //prorated
    }
    
    property get locCosts () : java.util.Set<GLCovExposureCost> {
      return getRequireValue("locCosts", 0) as java.util.Set<GLCovExposureCost>
    }
    
    property set locCosts ($arg :  java.util.Set<GLCovExposureCost>) {
      setRequireValue("locCosts", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLExpCovCumulDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GLExpCovCumulDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LocIndex_Cell) at GLExpCovCumulDetailLV.pcf: line 42, column 25
    function valueRoot_16 () : java.lang.Object {
      return cost.GLExposure.Location
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GLExpCovCumulDetailLV.pcf: line 48, column 25
    function valueRoot_19 () : java.lang.Object {
      return cost.GLExposure.ClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Subline_Cell) at GLExpCovCumulDetailLV.pcf: line 62, column 25
    function valueRoot_25 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=LocIndex_Cell) at GLExpCovCumulDetailLV.pcf: line 42, column 25
    function value_15 () : java.lang.Integer {
      return cost.GLExposure.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GLExpCovCumulDetailLV.pcf: line 48, column 25
    function value_18 () : java.lang.String {
      return cost.GLExposure.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GLExpCovCumulDetailLV.pcf: line 55, column 61
    function value_21 () : java.lang.String {
      return cost.GLExposure.ClassCode.Classification
    }
    
    // 'value' attribute on TypeKeyCell (id=Subline_Cell) at GLExpCovCumulDetailLV.pcf: line 62, column 25
    function value_24 () : typekey.GLCostSubline {
      return cost.Subline
    }
    
    // 'value' attribute on TypeKeyCell (id=Split_Cell) at GLExpCovCumulDetailLV.pcf: line 69, column 25
    function value_27 () : typekey.GLCostSplitType {
      return cost.SplitType
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GLExpCovCumulDetailLV.pcf: line 76, column 25
    function value_30 () : java.lang.String {
      return cost.Basis == null or cost.Basis == 0? "" : cost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GLExpCovCumulDetailLV.pcf: line 84, column 25
    function value_32 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at GLExpCovCumulDetailLV.pcf: line 92, column 25
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at GLExpCovCumulDetailLV.pcf: line 99, column 25
    function value_39 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at GLExpCovCumulDetailLV.pcf: line 106, column 25
    function value_43 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at GLExpCovCumulDetailLV.pcf: line 114, column 25
    function value_47 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at GLExpCovCumulDetailLV.pcf: line 123, column 25
    function value_50 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at GLExpCovCumulDetailLV.pcf: line 92, column 25
    function visible_37 () : java.lang.Boolean {
      return true //prorated
    }
    
    property get cost () : entity.GLCovExposureCost {
      return getIteratedValue(1) as entity.GLCovExposureCost
    }
    
    
  }
  
  
}