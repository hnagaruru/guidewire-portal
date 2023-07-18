package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/ratingoverride/RatingOverridePanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverridePanelSet_IMLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/ratingoverride/RatingOverridePanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 164, column 57
    function currency_36 () : typekey.Currency {
      return (cost.BranchUntyped as PolicyPeriod).PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 149, column 51
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 157, column 51
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 164, column 57
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideTermAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 171, column 53
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at RatingOverridePanelSet.IMLine.pcf: line 175, column 46
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 149, column 51
    function editable_20 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and cost.Overridable
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.IMLine.pcf: line 116, column 30
    function initialValue_4 () : String {
      return costMap.Keys.first()
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.IMLine.pcf: line 120, column 28
    function initialValue_5 () : Cost {
      return costMap.Values.first()
    }
    
    // RowIterator at RatingOverridePanelSet.IMLine.pcf: line 112, column 98
    function initializeVariables_64 () : void {
        description = costMap.Keys.first();
  cost = costMap.Values.first();

    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 129, column 51
    function valueRoot_9 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 134, column 51
    function value_11 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 138, column 55
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 142, column 51
    function value_17 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 149, column 51
    function value_21 () : java.math.BigDecimal {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 157, column 51
    function value_27 () : java.math.BigDecimal {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 164, column 57
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 171, column 53
    function value_40 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at RatingOverridePanelSet.IMLine.pcf: line 175, column 46
    function value_47 () : java.lang.String {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 180, column 51
    function value_52 () : java.math.BigDecimal {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 185, column 51
    function value_55 () : java.math.BigDecimal {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 189, column 57
    function value_58 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardTermAmountBilling
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingOverridePanelSet.IMLine.pcf: line 124, column 38
    function value_6 () : java.lang.String {
      return description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmount_Cell) at RatingOverridePanelSet.IMLine.pcf: line 193, column 53
    function value_61 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardAmountBilling
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at RatingOverridePanelSet.IMLine.pcf: line 129, column 51
    function value_8 () : java.math.BigDecimal {
      return cost.ActualBaseRate
    }
    
    property get cost () : Cost {
      return getVariableValue("cost", 3) as Cost
    }
    
    property set cost ($arg :  Cost) {
      setVariableValue("cost", 3, $arg)
    }
    
    property get costMap () : java.util.Map<java.lang.String, entity.Cost> {
      return getIteratedValue(3) as java.util.Map<java.lang.String, entity.Cost>
    }
    
    property get description () : String {
      return getVariableValue("description", 3) as String
    }
    
    property set description ($arg :  String) {
      setVariableValue("description", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/ratingoverride/RatingOverridePanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at RatingOverridePanelSet.IMLine.pcf: line 112, column 98
    function editable_3 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.IMLine.pcf: line 28, column 67
    function initialValue_2 () : List<java.util.Map<String, Cost>> {
      return period.IMLine.costMapsFor(covPart)
    }
    
    // 'value' attribute on RowIterator at RatingOverridePanelSet.IMLine.pcf: line 112, column 98
    function value_65 () : java.util.List<java.util.Map<java.lang.String, entity.Cost>> {
      return costMaps
    }
    
    property get costMaps () : List<java.util.Map<String, Cost>> {
      return getVariableValue("costMaps", 2) as List<java.util.Map<String, Cost>>
    }
    
    property set costMaps ($arg :  List<java.util.Map<String, Cost>>) {
      setVariableValue("costMaps", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/ratingoverride/RatingOverridePanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingOverridePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'title' attribute on TitleBar at RatingOverridePanelSet.IMLine.pcf: line 22, column 48
    function title_1 () : java.lang.String {
      return covPart.Subtype.DisplayName
    }
    
    property get covPart () : entity.IMCoveragePart {
      return getIteratedValue(1) as entity.IMCoveragePart
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/ratingoverride/RatingOverridePanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverridePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.IMLine.pcf: line 14, column 32
    function initialValue_0 () : IMCoveragePart[] {
      return period.IMLine.IMCoverageParts
    }
    
    // 'value' attribute on PanelIterator (id=CovPart) at RatingOverridePanelSet.IMLine.pcf: line 19, column 43
    function value_66 () : entity.IMCoveragePart[] {
      return covParts
    }
    
    property get covParts () : IMCoveragePart[] {
      return getVariableValue("covParts", 0) as IMCoveragePart[]
    }
    
    property set covParts ($arg :  IMCoveragePart[]) {
      setVariableValue("covParts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}