package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/ratingoverride/RatingOverridePanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverridePanelSet_CPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/ratingoverride/RatingOverridePanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 141, column 55
    function currency_16 () : typekey.Currency {
      return period.PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 155, column 51
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 163, column 51
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 171, column 57
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideTermAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at RatingOverridePanelSet.CPLine.pcf: line 175, column 46
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 155, column 51
    function editable_22 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and cost.Overridable
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 130, column 51
    function valueRoot_9 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 135, column 51
    function value_11 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 141, column 55
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 147, column 51
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 155, column 51
    function value_23 () : java.math.BigDecimal {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 163, column 51
    function value_29 () : java.math.BigDecimal {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 171, column 57
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideTermAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at RatingOverridePanelSet.CPLine.pcf: line 175, column 46
    function value_42 () : java.lang.String {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 180, column 51
    function value_47 () : java.math.BigDecimal {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 185, column 51
    function value_50 () : java.math.BigDecimal {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 191, column 57
    function value_53 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmount_Cell) at RatingOverridePanelSet.CPLine.pcf: line 197, column 53
    function value_57 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardAmountBilling
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingOverridePanelSet.CPLine.pcf: line 125, column 55
    function value_6 () : entity.CPBuildingCovCost {
      return cost
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at RatingOverridePanelSet.CPLine.pcf: line 130, column 51
    function value_8 () : java.math.BigDecimal {
      return cost.ActualBaseRate
    }
    
    property get cost () : entity.CPBuildingCovCost {
      return getIteratedValue(3) as entity.CPBuildingCovCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/ratingoverride/RatingOverridePanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at RatingOverridePanelSet.CPLine.pcf: line 120, column 72
    function editable_5 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.CPLine.pcf: line 40, column 51
    function initialValue_4 () : List<CPBuildingCovCost> {
      return building.Coverages.arrays("Costs").toArray(new entity.CPBuildingCovCost[0]).toList().sortBy(\ c -> c.DisplayName)
    }
    
    // 'value' attribute on RowIterator at RatingOverridePanelSet.CPLine.pcf: line 120, column 72
    function value_61 () : java.util.List<entity.CPBuildingCovCost> {
      return costs
    }
    
    property get costs () : List<CPBuildingCovCost> {
      return getVariableValue("costs", 2) as List<CPBuildingCovCost>
    }
    
    property set costs ($arg :  List<CPBuildingCovCost>) {
      setVariableValue("costs", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/ratingoverride/RatingOverridePanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingOverridePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at RatingOverridePanelSet.CPLine.pcf: line 31, column 139
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.PolicyFile.PolicyLine.CP.Building.RatingOverrideLabel", building, building.CPLocation)
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(1) as entity.CPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/ratingoverride/RatingOverridePanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverridePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.CPLine.pcf: line 15, column 35
    function initialValue_0 () : entity.CPLocation[] {
      return period.CPLine.CPLocations.sortBy(\ loc -> loc.PolicyLocation.LocationNum)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.CPLine.pcf: line 19, column 28
    function initialValue_1 () : CPBuilding[] {
      return locations.arrays("Buildings").toArray(new entity.CPBuilding[0]).sortBy(\ c -> c.DisplayName)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingOverridePanelSet.CPLine.pcf: line 27, column 24
    function sortBy_2 (building :  entity.CPBuilding) : java.lang.Object {
      return locations
    }
    
    // 'value' attribute on PanelIterator (id=Building) at RatingOverridePanelSet.CPLine.pcf: line 24, column 39
    function value_62 () : entity.CPBuilding[] {
      return buildings
    }
    
    property get buildings () : CPBuilding[] {
      return getVariableValue("buildings", 0) as CPBuilding[]
    }
    
    property set buildings ($arg :  CPBuilding[]) {
      setVariableValue("buildings", 0, $arg)
    }
    
    property get locations () : entity.CPLocation[] {
      return getVariableValue("locations", 0) as entity.CPLocation[]
    }
    
    property set locations ($arg :  entity.CPLocation[]) {
      setVariableValue("locations", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}