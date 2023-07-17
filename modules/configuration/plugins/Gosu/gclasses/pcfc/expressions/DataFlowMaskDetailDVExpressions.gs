package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DataFlowMaskDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataFlowMaskDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      mask.SelectedColumnNames = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DataFlowMaskDetailDV.pcf: line 23, column 28
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      mask.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      mask.EntityTypeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function editable_7 () : java.lang.Boolean {
      return mask.New
    }
    
    // 'initialValue' attribute on Variable at DataFlowMaskDetailDV.pcf: line 13, column 23
    function initialValue_0 () : boolean {
      return mask.New
    }
    
    // 'onChange' attribute on PostOnChange at DataFlowMaskDetailDV.pcf: line 34, column 60
    function onChange_6 () : void {
      skipValidationAfterTypeChange = true
    }
    
    // 'optionLabel' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function optionLabel_11 (VALUE :  java.lang.String) : java.lang.String {
      return gw.exportimport.ExportLocaleUtil.lookupEntityTypeDisplayName(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function optionLabel_25 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.locale.DisplayKey.get(VALUE)
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=Name_Input) at DataFlowMaskDetailDV.pcf: line 23, column 28
    function requestValidationExpression_1 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.web.admin.flowmeta.DataFlowMaskDetailDVUIHelper.validateName(mask, VALUE)
    }
    
    // 'requestValidationExpression' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function requestValidationExpression_21 (VALUE :  java.lang.String[]) : java.lang.Object {
      return gw.web.admin.flowmeta.DataFlowMaskDetailDVUIHelper.validateSelectedList(skipValidationAfterTypeChange, mask, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function valueRange_12 () : java.lang.Object {
      return gw.exportimport.EntityInfo.Registry.getRegisteredEntityTypes().map(\ t -> t.Name)
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function valueRange_26 () : java.lang.Object {
      return mask.SelectableColumnNames
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DataFlowMaskDetailDV.pcf: line 23, column 28
    function valueRoot_4 () : java.lang.Object {
      return mask
    }
    
    // 'value' attribute on InputIterator (id=ReadOnlyColumns) at DataFlowMaskDetailDV.pcf: line 44, column 40
    function value_18 () : java.lang.String[] {
      return mask.AllIncludedColumnNames
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DataFlowMaskDetailDV.pcf: line 23, column 28
    function value_2 () : java.lang.String {
      return mask.Name
    }
    
    // 'value' attribute on InputIterator at DataFlowMaskDetailDV.pcf: line 58, column 40
    function value_20 () : java.lang.String[] {
      return mask.RequiredColumnNames
    }
    
    // 'value' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function value_22 () : java.lang.String[] {
      return mask.SelectedColumnNames
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function value_8 () : java.lang.String {
      return mask.EntityTypeName
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at DataFlowMaskDetailDV.pcf: line 32, column 38
    function verifyValueRange_14 () : void {
      var __valueRangeArg = gw.exportimport.EntityInfo.Registry.getRegisteredEntityTypes().map(\ t -> t.Name)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludedColumns_Input) at DataFlowMaskDetailDV.pcf: line 79, column 41
    function verifyValueRange_28 () : void {
      var __valueRangeArg = mask.SelectableColumnNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    property get mask () : EntityFlowMaskData {
      return getRequireValue("mask", 0) as EntityFlowMaskData
    }
    
    property set mask ($arg :  EntityFlowMaskData) {
      setRequireValue("mask", 0, $arg)
    }
    
    property get skipValidationAfterTypeChange () : boolean {
      return getVariableValue("skipValidationAfterTypeChange", 0) as java.lang.Boolean
    }
    
    property set skipValidationAfterTypeChange ($arg :  boolean) {
      setVariableValue("skipValidationAfterTypeChange", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DataFlowMaskDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Link (id=RequiredColumnId) at DataFlowMaskDetailDV.pcf: line 62, column 55
    function label_19 () : java.lang.Object {
      return gw.api.locale.DisplayKey.get(id)
    }
    
    property get id () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DataFlowMaskDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Link (id=RequiredColumnId) at DataFlowMaskDetailDV.pcf: line 48, column 55
    function label_17 () : java.lang.Object {
      return gw.api.locale.DisplayKey.get(id)
    }
    
    property get id () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  
}