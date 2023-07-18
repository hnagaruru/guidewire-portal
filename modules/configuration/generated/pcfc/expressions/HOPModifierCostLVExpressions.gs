package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifierCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPModifierCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifierCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPModifierCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPModifierCostLV.pcf: line 15, column 35
    function initialValue_0 () : List<HOPCost> {
      return line.ModifierCosts
    }
    
    // 'initialValue' attribute on Variable at HOPModifierCostLV.pcf: line 19, column 23
    function initialValue_1 () : boolean {
      return modifierCosts.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at HOPModifierCostLV.pcf: line 28, column 24
    function sortBy_2 (cost :  HOPCost) : java.lang.Object {
      return cost.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at HOPModifierCostLV.pcf: line 31, column 24
    function sortBy_3 (cost :  HOPCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // '$$sumValue' attribute on RowIterator (id=costIterator) at HOPModifierCostLV.pcf: line 76, column 25
    function sumValueRoot_13 (cost :  HOPCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator (id=costIterator) at HOPModifierCostLV.pcf: line 76, column 25
    function sumValue_12 (cost :  HOPCost) : java.lang.Object {
      return cost.ActualAmount
    }
    
    // 'value' attribute on RowIterator (id=costIterator) at HOPModifierCostLV.pcf: line 25, column 29
    function value_35 () : HOPCost[] {
      return modifierCosts.where(\cost -> cost.ActualTermAmount.IsNotZero).toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPModifierCostLV.pcf: line 47, column 25
    function visible_4 () : java.lang.Boolean {
      return proRatedCosts
    }
    
    property get line () : HOPLine {
      return getRequireValue("line", 0) as HOPLine
    }
    
    property set line ($arg :  HOPLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get modifierCosts () : List<HOPCost> {
      return getVariableValue("modifierCosts", 0) as List<HOPCost>
    }
    
    property set modifierCosts ($arg :  List<HOPCost>) {
      setVariableValue("modifierCosts", 0, $arg)
    }
    
    property get proRatedCosts () : boolean {
      return getVariableValue("proRatedCosts", 0) as java.lang.Boolean
    }
    
    property set proRatedCosts ($arg :  boolean) {
      setVariableValue("proRatedCosts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifierCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPModifierCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPModifierCostLV.pcf: line 39, column 37
    function valueRoot_15 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPModifierCostLV.pcf: line 39, column 37
    function value_14 () : java.lang.String {
      return cost.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPModifierCostLV.pcf: line 47, column 25
    function value_17 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at HOPModifierCostLV.pcf: line 54, column 25
    function value_21 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=PeriodEnd_Cell) at HOPModifierCostLV.pcf: line 61, column 25
    function value_25 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at HOPModifierCostLV.pcf: line 69, column 25
    function value_29 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at HOPModifierCostLV.pcf: line 76, column 25
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPModifierCostLV.pcf: line 47, column 25
    function visible_19 () : java.lang.Boolean {
      return proRatedCosts
    }
    
    property get cost () : HOPCost {
      return getIteratedValue(1) as HOPCost
    }
    
    
  }
  
  
}