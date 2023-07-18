package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TerritoryCodeSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TerritoryCodeSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at TerritoryCodeSearchResultsLV.pcf: line 23, column 25
    function valueRoot_7 () : java.lang.Object {
      return territory
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at TerritoryCodeSearchResultsLV.pcf: line 34, column 25
    function value_12 () : java.lang.String {
      return territory.City
    }
    
    // 'value' attribute on TextCell (id=County_Cell) at TerritoryCodeSearchResultsLV.pcf: line 39, column 25
    function value_15 () : java.lang.String {
      return territory.County
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at TerritoryCodeSearchResultsLV.pcf: line 44, column 25
    function value_18 () : java.lang.String {
      return territory.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at TerritoryCodeSearchResultsLV.pcf: line 49, column 42
    function value_21 () : java.lang.String {
      return territory.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at TerritoryCodeSearchResultsLV.pcf: line 23, column 25
    function value_6 () : java.lang.String {
      return territory.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TerritoryCodeSearchResultsLV.pcf: line 29, column 25
    function value_9 () : typekey.Jurisdiction {
      return territory.State
    }
    
    property get territory () : entity.Territory {
      return getIteratedValue(1) as entity.Territory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TerritoryCodeSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at TerritoryCodeSearchResultsLV.pcf: line 23, column 25
    function sortValue_0 (territory :  entity.Territory) : java.lang.Object {
      return territory.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TerritoryCodeSearchResultsLV.pcf: line 29, column 25
    function sortValue_1 (territory :  entity.Territory) : java.lang.Object {
      return territory.State
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at TerritoryCodeSearchResultsLV.pcf: line 34, column 25
    function sortValue_2 (territory :  entity.Territory) : java.lang.Object {
      return territory.City
    }
    
    // 'value' attribute on TextCell (id=County_Cell) at TerritoryCodeSearchResultsLV.pcf: line 39, column 25
    function sortValue_3 (territory :  entity.Territory) : java.lang.Object {
      return territory.County
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at TerritoryCodeSearchResultsLV.pcf: line 44, column 25
    function sortValue_4 (territory :  entity.Territory) : java.lang.Object {
      return territory.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at TerritoryCodeSearchResultsLV.pcf: line 49, column 42
    function sortValue_5 (territory :  entity.Territory) : java.lang.Object {
      return territory.Description
    }
    
    // 'value' attribute on RowIterator at TerritoryCodeSearchResultsLV.pcf: line 17, column 38
    function value_25 () : entity.Territory[] {
      return searchResults
    }
    
    property get searchResults () : Territory[] {
      return getRequireValue("searchResults", 0) as Territory[]
    }
    
    property set searchResults ($arg :  Territory[]) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  
}