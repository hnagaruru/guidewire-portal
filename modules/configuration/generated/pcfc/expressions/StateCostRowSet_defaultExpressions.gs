package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateCostRowSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at StateCostRowSet.default.pcf: line 14, column 29
    function initialValue_0 () : entity.WCCost {
      return costWrapper.Cost as WCCost
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at StateCostRowSet.default.pcf: line 44, column 23
    function valueRoot_13 () : java.lang.Object {
      return aggCost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=LocNumber_Cell) at StateCostRowSet.default.pcf: line 23, column 23
    function valueRoot_2 () : java.lang.Object {
      return costWrapper
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at StateCostRowSet.default.pcf: line 28, column 23
    function valueRoot_5 () : java.lang.Object {
      return aggCost
    }
    
    // 'value' attribute on TextCell (id=LocNumber_Cell) at StateCostRowSet.default.pcf: line 23, column 23
    function value_1 () : java.lang.Integer {
      return costWrapper.LocNumber
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at StateCostRowSet.default.pcf: line 38, column 23
    function value_10 () : java.lang.String {
      return aggCost.Basis == null or aggCost.Basis == 0 ? "" : aggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at StateCostRowSet.default.pcf: line 44, column 23
    function value_12 () : java.lang.String {
      return aggCost.ActualAdjRate.DisplayValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at StateCostRowSet.default.pcf: line 50, column 23
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return aggCost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at StateCostRowSet.default.pcf: line 28, column 23
    function value_4 () : java.lang.String {
      return aggCost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at StateCostRowSet.default.pcf: line 33, column 38
    function value_7 () : java.lang.String {
      return aggCost.Description
    }
    
    // 'visible' attribute on Row (id=AggCostRow) at StateCostRowSet.default.pcf: line 17, column 37
    function visible_18 () : java.lang.Boolean {
      return costWrapper.Visible
    }
    
    property get aggCost () : entity.WCCost {
      return getVariableValue("aggCost", 0) as entity.WCCost
    }
    
    property set aggCost ($arg :  entity.WCCost) {
      setVariableValue("aggCost", 0, $arg)
    }
    
    property get costWrapper () : gw.api.ui.CostWrapper {
      return getRequireValue("costWrapper", 0) as gw.api.ui.CostWrapper
    }
    
    property set costWrapper ($arg :  gw.api.ui.CostWrapper) {
      setRequireValue("costWrapper", 0, $arg)
    }
    
    
  }
  
  
}