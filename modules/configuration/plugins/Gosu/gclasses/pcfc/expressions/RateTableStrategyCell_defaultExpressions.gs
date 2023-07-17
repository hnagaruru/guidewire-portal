package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableStrategyCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableStrategyCell_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableStrategyCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableStrategyCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=OwnerStrategy_Cell) at RateTableStrategyCell.default.pcf: line 13, column 132
    function value_0 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTables.OwnerStrategy", selectedRateTable.TableOwningFactors.QueryStrategy)
    }
    
    property get selectedRateTable () : RateTable {
      return getRequireValue("selectedRateTable", 0) as RateTable
    }
    
    property set selectedRateTable ($arg :  RateTable) {
      setRequireValue("selectedRateTable", 0, $arg)
    }
    
    
  }
  
  
}