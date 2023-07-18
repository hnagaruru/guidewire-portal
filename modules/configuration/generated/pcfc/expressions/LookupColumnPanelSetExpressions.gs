package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LookupColumnPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LookupColumnPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupColumnPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LookupColumnPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupColumn.Input = (__VALUE_TO_SET as boolean)
    }
    
    // 'onChange' attribute on PostOnChange at LookupColumnPanelSet.pcf: line 80, column 82
    function onChange_14 () : void {
      helper.changeOtherLookupColumnsToInput(lookupColumn)
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function optionLabel_18 (VALUE :  boolean) : java.lang.String {
      return VALUE ? DisplayKey.get("Web.BizRules.Lookup.CreateLookupPage.Input") : DisplayKey.get("Web.BizRules.Lookup.CreateLookupPage.Output")
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function valueRange_19 () : java.lang.Object {
      return {true, false}
    }
    
    // 'value' attribute on TextCell (id=LookupColumnType_Cell) at LookupColumnPanelSet.pcf: line 69, column 58
    function valueRoot_12 () : java.lang.Object {
      return lookupColumn.DataType
    }
    
    // 'value' attribute on TextCell (id=LookupColumnName_Cell) at LookupColumnPanelSet.pcf: line 64, column 48
    function valueRoot_9 () : java.lang.Object {
      return lookupColumn
    }
    
    // 'value' attribute on TextCell (id=LookupColumnType_Cell) at LookupColumnPanelSet.pcf: line 69, column 58
    function value_11 () : java.lang.String {
      return lookupColumn.DataType.RelativeName
    }
    
    // 'value' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function value_15 () : boolean {
      return lookupColumn.Input
    }
    
    // 'value' attribute on TextCell (id=LookupColumnName_Cell) at LookupColumnPanelSet.pcf: line 64, column 48
    function value_8 () : java.lang.String {
      return lookupColumn.ColumnLabel
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function verifyValueRangeIsAllowedType_20 ($$arg :  boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=IsInputGroup_Cell) at LookupColumnPanelSet.pcf: line 78, column 35
    function verifyValueRange_21 () : void {
      var __valueRangeArg = {true, false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    property get lookupColumn () : gw.plugin.lookup.LookupSourceColumnDTO {
      return getIteratedValue(1) as gw.plugin.lookup.LookupSourceColumnDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupColumnPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LookupColumnPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=availableColumnName) at LookupColumnPanelSet.pcf: line 34, column 102
    function label_1 () : java.lang.Object {
      return availableColumn.ColumnName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=availableColumnName) at LookupColumnPanelSet.pcf: line 34, column 102
    function toCreateAndAdd_2 (CheckedValues :  Object[]) : java.lang.Object {
      helper.addLookupTableColumn(availableColumn); return availableColumn
    }
    
    property get availableColumn () : gw.plugin.lookup.LookupSourceColumnDTO {
      return getIteratedValue(1) as gw.plugin.lookup.LookupSourceColumnDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupColumnPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LookupColumnPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at LookupColumnPanelSet.pcf: line 29, column 30
    function sortBy_0 (availableColumn :  gw.plugin.lookup.LookupSourceColumnDTO) : java.lang.Object {
      return availableColumn.ColumnLabel
    }
    
    // 'sortBy' attribute on IteratorSort at LookupColumnPanelSet.pcf: line 58, column 28
    function sortBy_5 (lookupColumn :  gw.plugin.lookup.LookupSourceColumnDTO) : java.lang.Object {
      return lookupColumn.ColumnName
    }
    
    // 'value' attribute on TextCell (id=LookupColumnName_Cell) at LookupColumnPanelSet.pcf: line 64, column 48
    function sortValue_6 (lookupColumn :  gw.plugin.lookup.LookupSourceColumnDTO) : java.lang.Object {
      return lookupColumn.ColumnLabel
    }
    
    // 'value' attribute on TextCell (id=LookupColumnType_Cell) at LookupColumnPanelSet.pcf: line 69, column 58
    function sortValue_7 (lookupColumn :  gw.plugin.lookup.LookupSourceColumnDTO) : java.lang.Object {
      return lookupColumn.DataType.RelativeName
    }
    
    // 'toRemove' attribute on RowIterator (id=LookupColumnIterator) at LookupColumnPanelSet.pcf: line 55, column 64
    function toRemove_23 (lookupColumn :  gw.plugin.lookup.LookupSourceColumnDTO) : void {
      helper.removeLookupTableColumn(lookupColumn)
    }
    
    // 'value' attribute on RowIterator (id=LookupColumnIterator) at LookupColumnPanelSet.pcf: line 55, column 64
    function value_24 () : gw.plugin.lookup.LookupSourceColumnDTO[] {
      return helper.LookupColumns.toTypedArray()
    }
    
    // 'value' attribute on AddMenuItemIterator at LookupColumnPanelSet.pcf: line 26, column 66
    function value_3 () : gw.plugin.lookup.LookupSourceColumnDTO[] {
      return helper.AvailableLookupTableColumns
    }
    
    // 'visible' attribute on PanelRef (id=LookupPanel) at LookupColumnPanelSet.pcf: line 15, column 50
    function visible_25 () : java.lang.Boolean {
      return lookupDefDTO.SourceTable != null
    }
    
    // 'visible' attribute on AddButton (id=AddLookupCol) at LookupColumnPanelSet.pcf: line 22, column 48
    function visible_4 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get helper () : gw.web.bizrules.LookupUIHelper {
      return getRequireValue("helper", 0) as gw.web.bizrules.LookupUIHelper
    }
    
    property set helper ($arg :  gw.web.bizrules.LookupUIHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get lookupDefDTO () : gw.lookup.LookupDefinitionDTO {
      return getRequireValue("lookupDefDTO", 0) as gw.lookup.LookupDefinitionDTO
    }
    
    property set lookupDefDTO ($arg :  gw.lookup.LookupDefinitionDTO) {
      setRequireValue("lookupDefDTO", 0, $arg)
    }
    
    
  }
  
  
}