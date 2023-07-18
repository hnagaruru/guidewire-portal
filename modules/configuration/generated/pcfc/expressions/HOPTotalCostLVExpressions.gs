package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPTotalCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPTotalCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPTotalCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPTotalCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPTotalCostLV.pcf: line 15, column 23
    function initialValue_0 () : boolean {
      return allCosts.AnyProrated
    }
    
    // 'value' attribute on TextCell (id=TotalAmt_Cell) at HOPTotalCostLV.pcf: line 30, column 23
    function valueRoot_2 () : java.lang.Object {
      return allCosts
    }
    
    // 'value' attribute on TextCell (id=TotalAmt_Cell) at HOPTotalCostLV.pcf: line 30, column 23
    function value_1 () : gw.pl.currency.MonetaryAmount {
      return allCosts.ActualAmountSum
    }
    
    property get allCosts () : List<HOPCost> {
      return getRequireValue("allCosts", 0) as List<HOPCost>
    }
    
    property set allCosts ($arg :  List<HOPCost>) {
      setRequireValue("allCosts", 0, $arg)
    }
    
    property get proRatedCosts () : boolean {
      return getVariableValue("proRatedCosts", 0) as java.lang.Boolean
    }
    
    property set proRatedCosts ($arg :  boolean) {
      setVariableValue("proRatedCosts", 0, $arg)
    }
    
    
  }
  
  
}