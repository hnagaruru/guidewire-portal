package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.date.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableModalCell_dateExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.date.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableModalCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=ValueCell_Cell) at RateTableModalCell.date.pcf: line 21, column 95
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      (cell as gw.rating.rtm.domain.table.RateTableCell<java.util.Date>).Value = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'required' attribute on DateCell (id=ValueCell_Cell) at RateTableModalCell.date.pcf: line 21, column 95
    function required_0 () : java.lang.Boolean {
      return valueRequired
    }
    
    // 'value' attribute on DateCell (id=ValueCell_Cell) at RateTableModalCell.date.pcf: line 21, column 95
    function valueRoot_3 () : java.lang.Object {
      return (cell as gw.rating.rtm.domain.table.RateTableCell<java.util.Date>)
    }
    
    // 'value' attribute on DateCell (id=ValueCell_Cell) at RateTableModalCell.date.pcf: line 21, column 95
    function value_1 () : java.util.Date {
      return (cell as gw.rating.rtm.domain.table.RateTableCell<java.util.Date>).Value
    }
    
    property get cell () : gw.rating.rtm.domain.table.RateTableCell {
      return getRequireValue("cell", 0) as gw.rating.rtm.domain.table.RateTableCell
    }
    
    property set cell ($arg :  gw.rating.rtm.domain.table.RateTableCell) {
      setRequireValue("cell", 0, $arg)
    }
    
    property get valueProvider () : gw.rating.rtm.valueprovider.RateTableCellValueProvider {
      return getRequireValue("valueProvider", 0) as gw.rating.rtm.valueprovider.RateTableCellValueProvider
    }
    
    property set valueProvider ($arg :  gw.rating.rtm.valueprovider.RateTableCellValueProvider) {
      setRequireValue("valueProvider", 0, $arg)
    }
    
    property get valueRequired () : boolean {
      return getRequireValue("valueRequired", 0) as java.lang.Boolean
    }
    
    property set valueRequired ($arg :  boolean) {
      setRequireValue("valueRequired", 0, $arg)
    }
    
    
  }
  
  
}