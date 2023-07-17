package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.large.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableModalCell_largeExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.large.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableModalCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.large.pcf: line 25, column 65
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      cell.Value = (__VALUE_TO_SET as java.lang.Comparable<java.lang.Object>)
    }
    
    // 'inputConversion' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.large.pcf: line 25, column 65
    function inputConversion_0 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE
    }
    
    // 'outputConversion' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.large.pcf: line 25, column 65
    function outputConversion_1 (VALUE :  java.lang.Comparable<java.lang.Object>) : java.lang.String {
      return cell.DisplayValue
    }
    
    // 'required' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.large.pcf: line 25, column 65
    function required_2 () : java.lang.Boolean {
      return valueRequired
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.large.pcf: line 25, column 65
    function valueRoot_5 () : java.lang.Object {
      return cell
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.large.pcf: line 25, column 65
    function value_3 () : java.lang.Comparable<java.lang.Object> {
      return cell.Value
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