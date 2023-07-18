package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorModalCell.select.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableFactorModalCell_selectExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorModalCell.select.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableFactorModalCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function available_0 () : java.lang.Boolean {
      return cell.checkAvailable(valueProvider)
    }
    
    // 'value' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      cell.Value = (__VALUE_TO_SET as java.lang.Comparable<java.lang.Object>)
    }
    
    // 'fontColor' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function fontColor_1 () : java.lang.Object {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'optionLabel' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function optionLabel_8 (VALUE :  java.lang.Comparable<java.lang.Object>) : java.lang.String {
      return cell.getOptionalLabel(valueProvider, VALUE)
    }
    
    // 'required' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function required_2 () : java.lang.Boolean {
      return valueRequired
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function valueRange_9 () : java.lang.Object {
      return cell.getValueRange(valueProvider)
    }
    
    // 'value' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function valueRoot_5 () : java.lang.Object {
      return cell
    }
    
    // 'value' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function value_3 () : java.lang.Comparable<java.lang.Object> {
      return cell.Value
    }
    
    // 'fontColor' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function verifyFontColorIsAllowedType_6 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function verifyFontColorIsAllowedType_6 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function verifyFontColor_7 () : void {
      var __fontColorArg = gw.api.web.color.GWColor.THEME_ALERT_ERROR
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_6(__fontColorArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.lang.Comparable<java.lang.Object>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ValueCell_Cell) at RateTableFactorModalCell.select.pcf: line 29, column 65
    function verifyValueRange_11 () : void {
      var __valueRangeArg = cell.getValueRange(valueProvider)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
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