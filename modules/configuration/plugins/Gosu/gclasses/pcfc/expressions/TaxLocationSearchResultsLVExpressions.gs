package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TaxLocationSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TaxLocationSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at TaxLocationSearchResultsLV.pcf: line 16, column 40
    function pickValue_24 () : TaxLocation {
      return taxLocation
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at TaxLocationSearchResultsLV.pcf: line 21, column 37
    function valueRoot_7 () : java.lang.Object {
      return taxLocation
    }
    
    // 'value' attribute on TextCell (id=County_Cell) at TaxLocationSearchResultsLV.pcf: line 29, column 39
    function value_12 () : java.lang.String {
      return taxLocation.County
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TaxLocationSearchResultsLV.pcf: line 34, column 45
    function value_15 () : typekey.Jurisdiction {
      return taxLocation.State
    }
    
    // 'value' attribute on TextCell (id=TLPrefix_Cell) at TaxLocationSearchResultsLV.pcf: line 38, column 41
    function value_18 () : java.lang.String {
      return taxLocation.TLPrefix
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at TaxLocationSearchResultsLV.pcf: line 42, column 44
    function value_21 () : java.lang.String {
      return taxLocation.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at TaxLocationSearchResultsLV.pcf: line 21, column 37
    function value_6 () : java.lang.String {
      return taxLocation.Code
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at TaxLocationSearchResultsLV.pcf: line 25, column 37
    function value_9 () : java.lang.String {
      return taxLocation.City
    }
    
    property get taxLocation () : entity.TaxLocation {
      return getIteratedValue(1) as entity.TaxLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TaxLocationSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at TaxLocationSearchResultsLV.pcf: line 21, column 37
    function sortValue_0 (taxLocation :  entity.TaxLocation) : java.lang.Object {
      return taxLocation.Code
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at TaxLocationSearchResultsLV.pcf: line 25, column 37
    function sortValue_1 (taxLocation :  entity.TaxLocation) : java.lang.Object {
      return taxLocation.City
    }
    
    // 'value' attribute on TextCell (id=County_Cell) at TaxLocationSearchResultsLV.pcf: line 29, column 39
    function sortValue_2 (taxLocation :  entity.TaxLocation) : java.lang.Object {
      return taxLocation.County
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TaxLocationSearchResultsLV.pcf: line 34, column 45
    function sortValue_3 (taxLocation :  entity.TaxLocation) : java.lang.Object {
      return taxLocation.State
    }
    
    // 'value' attribute on TextCell (id=TLPrefix_Cell) at TaxLocationSearchResultsLV.pcf: line 38, column 41
    function sortValue_4 (taxLocation :  entity.TaxLocation) : java.lang.Object {
      return taxLocation.TLPrefix
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at TaxLocationSearchResultsLV.pcf: line 42, column 44
    function sortValue_5 (taxLocation :  entity.TaxLocation) : java.lang.Object {
      return taxLocation.Description
    }
    
    // 'value' attribute on RowIterator at TaxLocationSearchResultsLV.pcf: line 16, column 40
    function value_25 () : entity.TaxLocation[] {
      return searchResults
    }
    
    property get searchResults () : TaxLocation[] {
      return getRequireValue("searchResults", 0) as TaxLocation[]
    }
    
    property set searchResults ($arg :  TaxLocation[]) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  
}