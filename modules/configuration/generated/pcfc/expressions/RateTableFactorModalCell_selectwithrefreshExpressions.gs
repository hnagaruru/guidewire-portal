package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorModalCell.selectwithrefresh.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableFactorModalCell_selectwithrefreshExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorModalCell.selectwithrefresh.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableFactorModalCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function available_0 () : java.lang.Boolean {
      return cell.checkAvailable(valueProvider)
    }
    
    // 'value' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      cell.Value = (__VALUE_TO_SET as java.lang.Comparable<java.lang.Object>)
    }
    
    // 'optionLabel' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function optionLabel_5 (VALUE :  java.lang.Comparable<java.lang.Object>) : java.lang.String {
      return cell.getOptionalLabel(valueProvider, VALUE)
    }
    
    // 'required' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function required_1 () : java.lang.Boolean {
      return valueRequired
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function valueRange_6 () : java.lang.Object {
      return cell.getValueRange(valueProvider)
    }
    
    // 'value' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function valueRoot_4 () : java.lang.Object {
      return cell
    }
    
    // 'value' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function value_2 () : java.lang.Comparable<java.lang.Object> {
      return cell.Value
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.lang.Comparable<java.lang.Object>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.selectwithrefresh.pcf: line 28, column 64
    function verifyValueRange_8 () : void {
      var __valueRangeArg = cell.getValueRange(valueProvider)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
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