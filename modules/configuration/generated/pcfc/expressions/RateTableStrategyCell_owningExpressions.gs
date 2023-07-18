package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableStrategyCell.owning.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableStrategyCell_owningExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableStrategyCell.owning.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableStrategyCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnedStrategy_Cell) at RateTableStrategyCell.owning.pcf: line 15, column 48
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedRateTable.QueryStrategy = (__VALUE_TO_SET as typekey.FactorQueryStrategy)
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnedStrategy_Cell) at RateTableStrategyCell.owning.pcf: line 15, column 48
    function valueRoot_2 () : java.lang.Object {
      return selectedRateTable
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnedStrategy_Cell) at RateTableStrategyCell.owning.pcf: line 15, column 48
    function value_0 () : typekey.FactorQueryStrategy {
      return selectedRateTable.QueryStrategy
    }
    
    property get selectedRateTable () : RateTable {
      return getRequireValue("selectedRateTable", 0) as RateTable
    }
    
    property set selectedRateTable ($arg :  RateTable) {
      setRequireValue("selectedRateTable", 0, $arg)
    }
    
    
  }
  
  
}