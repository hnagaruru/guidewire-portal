package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPAdjustmentsToBasePremiumLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPAdjustmentsToBasePremiumLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPAdjustmentsToBasePremiumLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPAdjustmentsToBasePremiumLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=SecILineCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 77, column 32
    function def_onEnter_11 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(secILineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecIIDwellingCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 80, column 37
    function def_onEnter_13 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(secIIDwellCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecIILineCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 83, column 33
    function def_onEnter_15 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(secIILineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecIDwellingCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 74, column 36
    function def_onEnter_9 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.onEnter(secIDwellCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecIDwellingCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 74, column 36
    function def_refreshVariables_10 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(secIDwellCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecILineCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 77, column 32
    function def_refreshVariables_12 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(secILineCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecIIDwellingCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 80, column 37
    function def_refreshVariables_14 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(secIIDwellCovCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=SecIILineCovCostRow) at HOPAdjustmentsToBasePremiumLV.pcf: line 83, column 33
    function def_refreshVariables_16 (def :  pcf.HOPCoverageCostRowSet) : void {
      def.refreshVariables(secIILineCovCosts, proRatedCosts)
    }
    
    // 'initialValue' attribute on Variable at HOPAdjustmentsToBasePremiumLV.pcf: line 15, column 35
    function initialValue_0 () : List<HOPCost> {
      return line.DwellingSectionIChangedCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPAdjustmentsToBasePremiumLV.pcf: line 19, column 35
    function initialValue_1 () : List<HOPCost> {
      return line.LineSectionIChangedCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPAdjustmentsToBasePremiumLV.pcf: line 23, column 35
    function initialValue_2 () : List<HOPCost> {
      return line.DwellingSectionIIChangedCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPAdjustmentsToBasePremiumLV.pcf: line 27, column 35
    function initialValue_3 () : List<HOPCost> {
      return line.LineSectionIIChangedCovCosts
    }
    
    // 'initialValue' attribute on Variable at HOPAdjustmentsToBasePremiumLV.pcf: line 31, column 23
    function initialValue_4 () : Boolean {
      return line.AdjustmentsToBasePremiumCosts.AnyProrated
    }
    
    // 'value' attribute on TextCell (id=SubtotalAmt_Cell) at HOPAdjustmentsToBasePremiumLV.pcf: line 109, column 23
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return gw.lob.hop.financials.HOPQuoteDisplayUtil.getCostsSum({line.AdjustmentsToBasePremiumCosts}, line.PreferredCoverageCurrency)
    }
    
    // 'visible' attribute on TextCell (id=AmountHeader_Cell) at HOPAdjustmentsToBasePremiumLV.pcf: line 45, column 23
    function visible_5 () : java.lang.Boolean {
      return proRatedCosts
    }
    
    property get line () : HOPLine {
      return getRequireValue("line", 0) as HOPLine
    }
    
    property set line ($arg :  HOPLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get proRatedCosts () : Boolean {
      return getVariableValue("proRatedCosts", 0) as Boolean
    }
    
    property set proRatedCosts ($arg :  Boolean) {
      setVariableValue("proRatedCosts", 0, $arg)
    }
    
    property get secIDwellCovCosts () : List<HOPCost> {
      return getVariableValue("secIDwellCovCosts", 0) as List<HOPCost>
    }
    
    property set secIDwellCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("secIDwellCovCosts", 0, $arg)
    }
    
    property get secIIDwellCovCosts () : List<HOPCost> {
      return getVariableValue("secIIDwellCovCosts", 0) as List<HOPCost>
    }
    
    property set secIIDwellCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("secIIDwellCovCosts", 0, $arg)
    }
    
    property get secIILineCovCosts () : List<HOPCost> {
      return getVariableValue("secIILineCovCosts", 0) as List<HOPCost>
    }
    
    property set secIILineCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("secIILineCovCosts", 0, $arg)
    }
    
    property get secILineCovCosts () : List<HOPCost> {
      return getVariableValue("secILineCovCosts", 0) as List<HOPCost>
    }
    
    property set secILineCovCosts ($arg :  List<HOPCost>) {
      setVariableValue("secILineCovCosts", 0, $arg)
    }
    
    
  }
  
  
}