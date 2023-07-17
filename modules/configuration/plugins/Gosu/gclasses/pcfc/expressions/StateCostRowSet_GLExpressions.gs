package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/StateCostRowSet.GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateCostRowSet_GLExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/StateCostRowSet.GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at StateCostRowSet.GL.pcf: line 14, column 29
    function initialValue_0 () : entity.GLCost {
      return costWrapper.Cost as GLCost
    }
    
    // 'value' attribute on TextCell (id=empty_Cell) at StateCostRowSet.GL.pcf: line 23, column 23
    function valueRoot_2 () : java.lang.Object {
      return aggCost.Location
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at StateCostRowSet.GL.pcf: line 28, column 23
    function valueRoot_5 () : java.lang.Object {
      return aggCost.Coverage
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at StateCostRowSet.GL.pcf: line 33, column 38
    function valueRoot_8 () : java.lang.Object {
      return aggCost
    }
    
    // 'value' attribute on TextCell (id=empty_Cell) at StateCostRowSet.GL.pcf: line 23, column 23
    function value_1 () : java.lang.Integer {
      return aggCost.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at StateCostRowSet.GL.pcf: line 38, column 23
    function value_10 () : java.lang.String {
      return aggCost.Basis == null or aggCost.Basis == 0 ? "" : aggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at StateCostRowSet.GL.pcf: line 44, column 23
    function value_12 () : java.lang.String {
      return aggCost.ActualAdjRate == 0 ? "" : aggCost.ActualAdjRate.DisplayValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at StateCostRowSet.GL.pcf: line 50, column 23
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return aggCost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at StateCostRowSet.GL.pcf: line 28, column 23
    function value_4 () : java.lang.String {
      return aggCost.Coverage.PatternCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at StateCostRowSet.GL.pcf: line 33, column 38
    function value_7 () : java.lang.String {
      return aggCost.DisplayName
    }
    
    // 'visible' attribute on Row (id=AggCostRow) at StateCostRowSet.GL.pcf: line 17, column 56
    function visible_17 () : java.lang.Boolean {
      return not aggCost.ActualAmountBilling.IsZero
    }
    
    property get aggCost () : entity.GLCost {
      return getVariableValue("aggCost", 0) as entity.GLCost
    }
    
    property set aggCost ($arg :  entity.GLCost) {
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