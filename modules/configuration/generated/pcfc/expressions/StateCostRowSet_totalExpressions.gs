package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostRowSet.total.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateCostRowSet_totalExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostRowSet.total.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at StateCostRowSet.total.pcf: line 21, column 42
    function valueRoot_1 () : java.lang.Object {
      return costWrapper
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at StateCostRowSet.total.pcf: line 21, column 42
    function value_0 () : java.lang.String {
      return costWrapper.Description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=total_Cell) at StateCostRowSet.total.pcf: line 32, column 23
    function value_3 () : gw.pl.currency.MonetaryAmount {
      return costWrapper.Total
    }
    
    // 'visible' attribute on Row at StateCostRowSet.total.pcf: line 35, column 38
    function visible_13 () : java.lang.Boolean {
      return not costWrapper.Bold
    }
    
    // 'visible' attribute on Row at StateCostRowSet.total.pcf: line 12, column 34
    function visible_6 () : java.lang.Boolean {
      return costWrapper.Bold
    }
    
    property get costWrapper () : gw.api.ui.CostWrapper {
      return getRequireValue("costWrapper", 0) as gw.api.ui.CostWrapper
    }
    
    property set costWrapper ($arg :  gw.api.ui.CostWrapper) {
      setRequireValue("costWrapper", 0, $arg)
    }
    
    
  }
  
  
}