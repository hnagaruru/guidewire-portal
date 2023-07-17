package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRatingOverrideCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 208, column 67
    function def_onEnter_62 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.onEnter(aggCost, null)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 208, column 67
    function def_refreshVariables_63 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.refreshVariables(aggCost, null)
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends WCRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 221, column 67
    function def_onEnter_66 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.onEnter(aggCost, null)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 221, column 67
    function def_refreshVariables_67 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.refreshVariables(aggCost, null)
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends WCRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 234, column 67
    function def_onEnter_70 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.onEnter(aggCost, null)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 234, column 67
    function def_refreshVariables_71 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.refreshVariables(aggCost, null)
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends WCRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 247, column 67
    function def_onEnter_74 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.onEnter(aggCost, null)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideCostLV.pcf: line 247, column 67
    function def_refreshVariables_75 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.refreshVariables(aggCost, null)
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at WCRatingOverrideCostLV.pcf: line 176, column 47
    function currency_41 () : typekey.Currency {
      return (cost.BranchUntyped as PolicyPeriod).PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at WCRatingOverrideCostLV.pcf: line 161, column 45
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at WCRatingOverrideCostLV.pcf: line 169, column 45
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at WCRatingOverrideCostLV.pcf: line 176, column 47
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at WCRatingOverrideCostLV.pcf: line 181, column 40
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at WCRatingOverrideCostLV.pcf: line 161, column 45
    function editable_25 () : java.lang.Boolean {
      return cost.Overridable
    }
    
    // 'initialValue' attribute on Variable at WCRatingOverrideCostLV.pcf: line 119, column 35
    function initialValue_3 () : WCCoveredEmployee {
      return cost.WCCoveredEmployee
    }
    
    // RowIterator at WCRatingOverrideCostLV.pcf: line 115, column 41
    function initializeVariables_59 () : void {
        wcCovEmp = cost.WCCoveredEmployee;

    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at WCRatingOverrideCostLV.pcf: line 128, column 42
    function valueRoot_5 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCRatingOverrideCostLV.pcf: line 134, column 37
    function value_10 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=BaseRate_Cell) at WCRatingOverrideCostLV.pcf: line 139, column 45
    function value_13 () : java.math.BigDecimal {
      return cost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=AdjustedRate_Cell) at WCRatingOverrideCostLV.pcf: line 144, column 45
    function value_16 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at WCRatingOverrideCostLV.pcf: line 149, column 45
    function value_19 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at WCRatingOverrideCostLV.pcf: line 153, column 45
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at WCRatingOverrideCostLV.pcf: line 161, column 45
    function value_26 () : java.math.BigDecimal {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at WCRatingOverrideCostLV.pcf: line 169, column 45
    function value_32 () : java.math.BigDecimal {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at WCRatingOverrideCostLV.pcf: line 176, column 47
    function value_38 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideAmountBilling
    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at WCRatingOverrideCostLV.pcf: line 128, column 42
    function value_4 () : java.lang.Integer {
      return cost.LocationNum
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at WCRatingOverrideCostLV.pcf: line 181, column 40
    function value_45 () : java.lang.String {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at WCRatingOverrideCostLV.pcf: line 186, column 45
    function value_50 () : java.math.BigDecimal {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at WCRatingOverrideCostLV.pcf: line 191, column 45
    function value_53 () : java.math.BigDecimal {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmount_Cell) at WCRatingOverrideCostLV.pcf: line 194, column 47
    function value_56 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardAmountBilling
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRatingOverrideCostLV.pcf: line 131, column 35
    function value_7 () : java.lang.String {
      return cost.ClassCode
    }
    
    property get cost () : entity.WCCovEmpCost {
      return getIteratedValue(1) as entity.WCCovEmpCost
    }
    
    property get wcCovEmp () : WCCoveredEmployee {
      return getVariableValue("wcCovEmp", 1) as WCCoveredEmployee
    }
    
    property set wcCovEmp ($arg :  WCCoveredEmployee) {
      setVariableValue("wcCovEmp", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRatingOverrideCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WCRatingOverrideCostLV.pcf: line 25, column 56
    function initialValue_0 () : java.util.Set<entity.WCCovEmpCost> {
      return periodCosts.whereTypeIs(WCCovEmpCost).toSet()
    }
    
    // 'initialValue' attribute on Variable at WCRatingOverrideCostLV.pcf: line 30, column 62
    function initialValue_1 () : java.util.Set<entity.WCJurisdictionCost> {
      return periodCosts.whereTypeIs(WCJurisdictionCost).toSet()
    }
    
    // 'sortBy' attribute on IteratorSort at WCRatingOverrideCostLV.pcf: line 122, column 24
    function sortBy_2 (cost :  entity.WCCovEmpCost) : java.lang.Object {
      return cost.CalcOrder
    }
    
    // 'sortBy' attribute on IteratorSort at WCRatingOverrideCostLV.pcf: line 206, column 24
    function sortBy_61 (aggCost :  entity.WCJurisdictionCost) : java.lang.Object {
      return aggCost.CalcOrder
    }
    
    // 'value' attribute on RowIterator at WCRatingOverrideCostLV.pcf: line 115, column 41
    function value_60 () : entity.WCCovEmpCost[] {
      return costs.toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=lt100) at WCRatingOverrideCostLV.pcf: line 203, column 47
    function value_64 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 0, 100 ).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=f100t200) at WCRatingOverrideCostLV.pcf: line 216, column 47
    function value_68 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 101, 200 ).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=f200t300) at WCRatingOverrideCostLV.pcf: line 229, column 47
    function value_72 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 201, 300 ).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=f300t400) at WCRatingOverrideCostLV.pcf: line 242, column 47
    function value_76 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 301, 400 ).toTypedArray()
    }
    
    property get aggCosts () : java.util.Set<entity.WCJurisdictionCost> {
      return getVariableValue("aggCosts", 0) as java.util.Set<entity.WCJurisdictionCost>
    }
    
    property set aggCosts ($arg :  java.util.Set<entity.WCJurisdictionCost>) {
      setVariableValue("aggCosts", 0, $arg)
    }
    
    property get costs () : java.util.Set<entity.WCCovEmpCost> {
      return getVariableValue("costs", 0) as java.util.Set<entity.WCCovEmpCost>
    }
    
    property set costs ($arg :  java.util.Set<entity.WCCovEmpCost>) {
      setVariableValue("costs", 0, $arg)
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get periodCosts () : java.util.Set<WCCost> {
      return getRequireValue("periodCosts", 0) as java.util.Set<WCCost>
    }
    
    property set periodCosts ($arg :  java.util.Set<WCCost>) {
      setRequireValue("periodCosts", 0, $arg)
    }
    
    property get periodEnd () : java.util.Date {
      return getRequireValue("periodEnd", 0) as java.util.Date
    }
    
    property set periodEnd ($arg :  java.util.Date) {
      setRequireValue("periodEnd", 0, $arg)
    }
    
    property get periodStart () : java.util.Date {
      return getRequireValue("periodStart", 0) as java.util.Date
    }
    
    property set periodStart ($arg :  java.util.Date) {
      setRequireValue("periodStart", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}