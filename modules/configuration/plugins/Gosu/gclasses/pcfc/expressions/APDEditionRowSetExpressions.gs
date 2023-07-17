package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDEditionRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDEditionRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDEditionRowSet.pcf: line 37, column 24
    function sortBy_0 (edition :  gw.apd.web.APDEditionDisplay) : java.lang.Object {
      return edition.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=EditionCode_Cell) at APDEditionRowSet.pcf: line 43, column 40
    function sortValue_1 (edition :  gw.apd.web.APDEditionDisplay) : java.lang.Object {
      return edition.EditionCode
    }
    
    // 'value' attribute on TextCell (id=EditionDescription_Cell) at APDEditionRowSet.pcf: line 47, column 47
    function sortValue_2 (edition :  gw.apd.web.APDEditionDisplay) : java.lang.Object {
      return edition.EditionDescription
    }
    
    // 'value' attribute on DateCell (id=EditionDate_Cell) at APDEditionRowSet.pcf: line 51, column 42
    function sortValue_3 (edition :  gw.apd.web.APDEditionDisplay) : java.lang.Object {
      return edition.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=EditionChanges_Cell) at APDEditionRowSet.pcf: line 56, column 32
    function sortValue_4 (edition :  gw.apd.web.APDEditionDisplay) : java.lang.Object {
      return edition.Rules
    }
    
    // 'value' attribute on RowIterator (id=APDEditionsLV) at APDEditionRowSet.pcf: line 24, column 50
    function value_21 () : gw.apd.web.APDEditionDisplay[] {
      return history
    }
    
    property get currentEdition () : APDEdition {
      return getRequireValue("currentEdition", 0) as APDEdition
    }
    
    property set currentEdition ($arg :  APDEdition) {
      setRequireValue("currentEdition", 0, $arg)
    }
    
    property get history () : gw.apd.web.APDEditionDisplay[] {
      return getRequireValue("history", 0) as gw.apd.web.APDEditionDisplay[]
    }
    
    property set history ($arg :  gw.apd.web.APDEditionDisplay[]) {
      setRequireValue("history", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDEditionRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at APDEditionRowSet.pcf: line 27, column 36
    function condition_5 () : java.lang.Boolean {
      return edition.EditionRef != currentEdition
    }
    
    // 'condition' attribute on ToolbarFlag at APDEditionRowSet.pcf: line 30, column 31
    function condition_6 () : java.lang.Boolean {
      return edition.IsBaseProduct
    }
    
    // 'condition' attribute on ToolbarFlag at APDEditionRowSet.pcf: line 33, column 27
    function condition_7 () : java.lang.Boolean {
      return !edition.IsBaseProduct
    }
    
    // 'highlighted' attribute on Row at APDEditionRowSet.pcf: line 39, column 60
    function highlighted_20 () : java.lang.Boolean {
      return edition.EditionRef == currentEdition
    }
    
    // 'value' attribute on TextCell (id=EditionCode_Cell) at APDEditionRowSet.pcf: line 43, column 40
    function valueRoot_9 () : java.lang.Object {
      return edition
    }
    
    // 'value' attribute on TextCell (id=EditionDescription_Cell) at APDEditionRowSet.pcf: line 47, column 47
    function value_11 () : java.lang.String {
      return edition.EditionDescription
    }
    
    // 'value' attribute on DateCell (id=EditionDate_Cell) at APDEditionRowSet.pcf: line 51, column 42
    function value_14 () : java.util.Date {
      return edition.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=EditionChanges_Cell) at APDEditionRowSet.pcf: line 56, column 32
    function value_17 () : Integer {
      return edition.Rules
    }
    
    // 'value' attribute on TextCell (id=EditionCode_Cell) at APDEditionRowSet.pcf: line 43, column 40
    function value_8 () : java.lang.String {
      return edition.EditionCode
    }
    
    property get edition () : gw.apd.web.APDEditionDisplay {
      return getIteratedValue(1) as gw.apd.web.APDEditionDisplay
    }
    
    
  }
  
  
}