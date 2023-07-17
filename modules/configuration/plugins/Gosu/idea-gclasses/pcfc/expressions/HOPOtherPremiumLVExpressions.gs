package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPOtherPremiumLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPOtherPremiumLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPOtherPremiumLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPOtherPremiumLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=AdditionalLineCovCostRow) at HOPOtherPremiumLV.pcf: line 82, column 38
    function def_onEnter_11 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(additionalLineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=AdditionalDwellingCovCostRow) at HOPOtherPremiumLV.pcf: line 85, column 42
    function def_onEnter_13 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(additionalDwellingCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalLineCovCostRow) at HOPOtherPremiumLV.pcf: line 88, column 36
    function def_onEnter_15 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(optionalLineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalLineScheduledItemCovCostRow) at HOPOtherPremiumLV.pcf: line 91, column 49
    function def_onEnter_17 (def :  pcf.HOPScheduledItemCovCostRowSet) : void {
      def.onEnter(optionalLineScheduledItemCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalDwellingCovCostRow) at HOPOtherPremiumLV.pcf: line 94, column 40
    function def_onEnter_19 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(optionalDwellingCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalDwellScheduledItemCovCostRow) at HOPOtherPremiumLV.pcf: line 97, column 50
    function def_onEnter_21 (def :  pcf.HOPScheduledItemCovCostRowSet) : void {
      def.onEnter(optionalDwellingScheduledItemCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=AdditionalLineCovCostRow) at HOPOtherPremiumLV.pcf: line 82, column 38
    function def_refreshVariables_12 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(additionalLineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=AdditionalDwellingCovCostRow) at HOPOtherPremiumLV.pcf: line 85, column 42
    function def_refreshVariables_14 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(additionalDwellingCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalLineCovCostRow) at HOPOtherPremiumLV.pcf: line 88, column 36
    function def_refreshVariables_16 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(optionalLineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalLineScheduledItemCovCostRow) at HOPOtherPremiumLV.pcf: line 91, column 49
    function def_refreshVariables_18 (def :  pcf.HOPScheduledItemCovCostRowSet) : void {
      def.refreshVariables(optionalLineScheduledItemCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalDwellingCovCostRow) at HOPOtherPremiumLV.pcf: line 94, column 40
    function def_refreshVariables_20 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(optionalDwellingCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=OptionalDwellScheduledItemCovCostRow) at HOPOtherPremiumLV.pcf: line 97, column 50
    function def_refreshVariables_22 (def :  pcf.HOPScheduledItemCovCostRowSet) : void {
      def.refreshVariables(optionalDwellingScheduledItemCovCosts, proRatedCosts)
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 15, column 35
    function initialValue_0 () : List<HOPCost> {
      return line.LineAdditionalCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 19, column 35
    function initialValue_1 () : List<HOPCost> {
      return line.DwellingAdditionalCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 23, column 35
    function initialValue_2 () : List<HOPCost> {
      return line.LineOptionalCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 27, column 35
    function initialValue_3 () : List<HOPCost> {
      return line.LineOptionalScheduledItemCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 31, column 35
    function initialValue_4 () : List<HOPCost> {
      return line.DwellingOptionalCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 35, column 35
    function initialValue_5 () : List<HOPCost> {
      return line.DwellingOptionalScheduledItemCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPOtherPremiumLV.pcf: line 39, column 23
    function initialValue_6 () : Boolean {
      return line.OtherCosts.AnyProrated
    }
    
    // 'value' attribute on TextCell (id=SubtotalAmt_Cell) at HOPOtherPremiumLV.pcf: line 126, column 52
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return gw.lob.hop.financials.HOPQuoteDisplayUtil.getCostsSum({line.OtherCosts}, line.PreferredCoverageCurrency)
    }
    
    // 'visible' attribute on TextCell (id=AmountHeader_Cell) at HOPOtherPremiumLV.pcf: line 53, column 23
    function visible_7 () : java.lang.Boolean {
      return proRatedCosts
    }
    
    property get additionalDwellingCovCosts () : List<HOPCost> {
      return getVariableValue("additionalDwellingCovCosts", 0) as List<HOPCost>
    }
    
    property set additionalDwellingCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("additionalDwellingCovCosts", 0, $arg)
    }
    
    property get additionalLineCovCosts () : List<HOPCost> {
      return getVariableValue("additionalLineCovCosts", 0) as List<HOPCost>
    }
    
    property set additionalLineCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("additionalLineCovCosts", 0, $arg)
    }
    
    property get line () : HOPLine {
      return getRequireValue("line", 0) as HOPLine
    }
    
    property set line ($arg :  HOPLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get optionalDwellingCovCosts () : List<HOPCost> {
      return getVariableValue("optionalDwellingCovCosts", 0) as List<HOPCost>
    }
    
    property set optionalDwellingCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("optionalDwellingCovCosts", 0, $arg)
    }
    
    property get optionalDwellingScheduledItemCovCosts () : List<HOPCost> {
      return getVariableValue("optionalDwellingScheduledItemCovCosts", 0) as List<HOPCost>
    }
    
    property set optionalDwellingScheduledItemCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("optionalDwellingScheduledItemCovCosts", 0, $arg)
    }
    
    property get optionalLineCovCosts () : List<HOPCost> {
      return getVariableValue("optionalLineCovCosts", 0) as List<HOPCost>
    }
    
    property set optionalLineCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("optionalLineCovCosts", 0, $arg)
    }
    
    property get optionalLineScheduledItemCovCosts () : List<HOPCost> {
      return getVariableValue("optionalLineScheduledItemCovCosts", 0) as List<HOPCost>
    }
    
    property set optionalLineScheduledItemCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("optionalLineScheduledItemCovCosts", 0, $arg)
    }
    
    property get proRatedCosts () : Boolean {
      return getVariableValue("proRatedCosts", 0) as Boolean
    }
    
    property set proRatedCosts ($arg :  Boolean) {
      setVariableValue("proRatedCosts", 0, $arg)
    }
    
    
  }
  
  
}