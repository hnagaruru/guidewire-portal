package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.multiselect.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableModalCell_multiselectExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.multiselect.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateTableModalCellExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Item) at RateTableModalCell.multiselect.pcf: line 36, column 25
    function action_2 () : void {
      cell.toggle(name)
    }
    
    // 'checked' attribute on MenuItem (id=Item) at RateTableModalCell.multiselect.pcf: line 36, column 25
    function checked_4 () : java.lang.Boolean {
      return cell.isChecked(name)
    }
    
    // 'label' attribute on MenuItem (id=Item) at RateTableModalCell.multiselect.pcf: line 36, column 25
    function label_3 () : java.lang.Object {
      return name
    }
    
    property get name () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.multiselect.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableModalCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.multiselect.pcf: line 26, column 77
    function available_6 () : java.lang.Boolean {
      return cell.checkAvailable(valueProvider)
    }
    
    // 'initialValue' attribute on Variable at RateTableModalCell.multiselect.pcf: line 20, column 58
    function initialValue_0 () : gw.rating.rtm.domain.table.MultiSelectCell {
      return cell as gw.rating.rtm.domain.table.MultiSelectCell
    }
    
    // 'outputConversion' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.multiselect.pcf: line 26, column 77
    function outputConversion_7 (VALUE :  java.lang.String) : java.lang.String {
      return multiSelectCell.displayMultiValue(valueProvider)
    }
    
    // 'value' attribute on MenuItemIterator at RateTableModalCell.multiselect.pcf: line 31, column 60
    function value_5 () : java.util.List<java.lang.String> {
      return multiSelectCell.getMenuValues(valueProvider).cast(String)
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at RateTableModalCell.multiselect.pcf: line 26, column 77
    function value_8 () : java.lang.String {
      return multiSelectCell.getValueCheckedByAllowedValues(valueProvider)
    }
    
    // 'visible' attribute on MenuItemIterator at RateTableModalCell.multiselect.pcf: line 31, column 60
    function visible_1 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get cell () : gw.rating.rtm.domain.table.RateTableCell {
      return getRequireValue("cell", 0) as gw.rating.rtm.domain.table.RateTableCell
    }
    
    property set cell ($arg :  gw.rating.rtm.domain.table.RateTableCell) {
      setRequireValue("cell", 0, $arg)
    }
    
    property get multiSelectCell () : gw.rating.rtm.domain.table.MultiSelectCell {
      return getVariableValue("multiSelectCell", 0) as gw.rating.rtm.domain.table.MultiSelectCell
    }
    
    property set multiSelectCell ($arg :  gw.rating.rtm.domain.table.MultiSelectCell) {
      setVariableValue("multiSelectCell", 0, $arg)
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