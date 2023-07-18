package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateCostsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StateCostsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function def_onEnter_1 (def :  pcf.StateCostRowSet_GL) : void {
      def.onEnter(aggCost)
    }
    
    // 'def' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function def_onEnter_3 (def :  pcf.StateCostRowSet_default) : void {
      def.onEnter(aggCost)
    }
    
    // 'def' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function def_onEnter_5 (def :  pcf.StateCostRowSet_total) : void {
      def.onEnter(aggCost)
    }
    
    // 'def' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function def_refreshVariables_2 (def :  pcf.StateCostRowSet_GL) : void {
      def.refreshVariables(aggCost)
    }
    
    // 'def' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function def_refreshVariables_4 (def :  pcf.StateCostRowSet_default) : void {
      def.refreshVariables(aggCost)
    }
    
    // 'def' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function def_refreshVariables_6 (def :  pcf.StateCostRowSet_total) : void {
      def.refreshVariables(aggCost)
    }
    
    // 'mode' attribute on RowSetRef at StateCostsLV.pcf: line 55, column 30
    function mode_7 () : java.lang.Object {
      return aggCost.Mode
    }
    
    property get aggCost () : gw.api.ui.CostWrapper {
      return getIteratedValue(1) as gw.api.ui.CostWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/StateCostsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateCostsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at StateCostsLV.pcf: line 52, column 24
    function sortBy_0 (aggCost :  gw.api.ui.CostWrapper) : java.lang.Object {
      return aggCost.Order
    }
    
    // 'value' attribute on RowIterator at StateCostsLV.pcf: line 49, column 43
    function value_8 () : gw.api.ui.CostWrapper[] {
      return stateCosts
    }
    
    property get stateCosts () : gw.api.ui.CostWrapper[] {
      return getRequireValue("stateCosts", 0) as gw.api.ui.CostWrapper[]
    }
    
    property set stateCosts ($arg :  gw.api.ui.CostWrapper[]) {
      setRequireValue("stateCosts", 0, $arg)
    }
    
    
  }
  
  
}