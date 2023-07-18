package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RatingCostBreakdownPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCostBreakdownPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCostBreakdownPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at RatingCostBreakdownPopup.pcf: line 78, column 54
    function action_12 () : void {
      RatingCostDetailPopup.push(period, costs)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at RatingCostBreakdownPopup.pcf: line 78, column 54
    function action_dest_13 () : pcf.api.Destination {
      return pcf.RatingCostDetailPopup.createDestination(period, costs)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCostBreakdownPopup.pcf: line 78, column 54
    function valueRoot_15 () : java.lang.Object {
      return costs.first()
    }
    
    // 'value' attribute on TextCell (id=FutureTerm_Cell) at RatingCostBreakdownPopup.pcf: line 98, column 62
    function valueRoot_24 () : java.lang.Object {
      return costs.orderByDescending(\c -> c.EffDate).first()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCostBreakdownPopup.pcf: line 78, column 54
    function value_14 () : java.lang.String {
      return costs.first().DisplayName
    }
    
    // 'value' attribute on TextCell (id=SettlementAmount_Cell) at RatingCostBreakdownPopup.pcf: line 83, column 62
    function value_17 () : gw.pl.currency.MonetaryAmount {
      return quoteLine.getSettlementAmount(costs)
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at RatingCostBreakdownPopup.pcf: line 88, column 62
    function value_19 () : gw.pl.currency.MonetaryAmount {
      return quoteLine.getTransactionAmount(costs)
    }
    
    // 'value' attribute on TextCell (id=CurrentTerm_Cell) at RatingCostBreakdownPopup.pcf: line 93, column 62
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return costs.sum(costs.first().CoverageCurrency, \ c -> c.ActualAmount)
    }
    
    // 'value' attribute on TextCell (id=FutureTerm_Cell) at RatingCostBreakdownPopup.pcf: line 98, column 62
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return costs.orderByDescending(\c -> c.EffDate).first().ActualTermAmount
    }
    
    property get costs () : List<Cost> {
      return getIteratedValue(2) as List<Cost>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCostBreakdownPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingCostBreakdownPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCostBreakdownPopup.pcf: line 72, column 32
    function sortBy_11 (costs :  List<Cost>) : java.lang.Object {
      return costs.first().DisplayName
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at RatingCostBreakdownPopup.pcf: line 61, column 48
    function valueRoot_9 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 69, column 56
    function value_26 () : List<List<Cost>> {
      return quoteLine.getCostsByCost(quoteLine.CostByCoverable.get(coverable)).Values.toList()
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at RatingCostBreakdownPopup.pcf: line 61, column 48
    function value_8 () : java.lang.String {
      return coverable.DisplayName
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 69, column 56
    function verifyValueTypeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 69, column 56
    function verifyValueTypeIsAllowedType_27 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 69, column 56
    function verifyValueTypeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 69, column 56
    function verifyValueType_28 () : void {
      var __valueTypeArg : List<List<Cost>>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_27(__valueTypeArg)
    }
    
    property get coverable () : Coverable {
      return getIteratedValue(1) as Coverable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCostBreakdownPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCostBreakdownPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, quoteLine :  gw.apd.policy.QuoteHelperLine) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at RatingCostBreakdownPopup.pcf: line 22, column 41
    function valueRoot_1 () : java.lang.Object {
      return quoteLine
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at RatingCostBreakdownPopup.pcf: line 22, column 41
    function value_0 () : java.lang.String {
      return quoteLine.LineType
    }
    
    // 'value' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 55, column 47
    function value_29 () : List<Coverable> {
      return quoteLine.CostByCoverable.Keys.toList()
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RatingCostBreakdownPopup.pcf: line 26, column 44
    function value_3 () : java.lang.String {
      return quoteLine.Description
    }
    
    // 'value' attribute on TextCell (id=SettlementAmount_Cell) at RatingCostBreakdownPopup.pcf: line 113, column 58
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return quoteLine.SettlementAmount
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at RatingCostBreakdownPopup.pcf: line 119, column 58
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return quoteLine.Amount
    }
    
    // 'value' attribute on TextCell (id=CurrentTerm_Cell) at RatingCostBreakdownPopup.pcf: line 125, column 58
    function value_38 () : gw.pl.currency.MonetaryAmount {
      return quoteLine.CurrentTerm
    }
    
    // 'value' attribute on TextCell (id=FutureTerm_Cell) at RatingCostBreakdownPopup.pcf: line 131, column 58
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return quoteLine.FutureTerm
    }
    
    // 'value' attribute on TextCell (id=FutureTermHeading_Cell) at RatingCostBreakdownPopup.pcf: line 48, column 229
    function value_6 () : java.lang.String {
      return period.Policy.Product.DefaultTermType == TermType.TC_ANNUAL ?  DisplayKey.get("Web.Policy.Default.Financials.FutureAnnual") : DisplayKey.get("Web.Policy.Default.Financials.FutureTerm")
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 55, column 47
    function verifyValueTypeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 55, column 47
    function verifyValueTypeIsAllowedType_30 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 55, column 47
    function verifyValueTypeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCostBreakdownPopup.pcf: line 55, column 47
    function verifyValueType_31 () : void {
      var __valueTypeArg : List<Coverable>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_30(__valueTypeArg)
    }
    
    override property get CurrentLocation () : pcf.RatingCostBreakdownPopup {
      return super.CurrentLocation as pcf.RatingCostBreakdownPopup
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get quoteLine () : gw.apd.policy.QuoteHelperLine {
      return getVariableValue("quoteLine", 0) as gw.apd.policy.QuoteHelperLine
    }
    
    property set quoteLine ($arg :  gw.apd.policy.QuoteHelperLine) {
      setVariableValue("quoteLine", 0, $arg)
    }
    
    
  }
  
  
}