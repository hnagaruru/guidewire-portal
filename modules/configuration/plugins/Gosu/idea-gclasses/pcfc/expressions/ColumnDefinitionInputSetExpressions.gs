package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ColumnDefinitionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ColumnDefinitionInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ColumnDefinitionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ColumnDefinitionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ColumnDefinitionInputSet.pcf: line 97, column 44
    function def_onEnter_58 (def :  pcf.ValueProviderArgumentsInputSet_TypeListValueProvider) : void {
      def.onEnter(valueProviderProxy, advancedEdit, columnDefinition)
    }
    
    // 'def' attribute on InputSetRef at ColumnDefinitionInputSet.pcf: line 97, column 44
    function def_onEnter_60 (def :  pcf.ValueProviderArgumentsInputSet_default) : void {
      def.onEnter(valueProviderProxy, advancedEdit, columnDefinition)
    }
    
    // 'def' attribute on InputSetRef at ColumnDefinitionInputSet.pcf: line 97, column 44
    function def_refreshVariables_59 (def :  pcf.ValueProviderArgumentsInputSet_TypeListValueProvider) : void {
      def.refreshVariables(valueProviderProxy, advancedEdit, columnDefinition)
    }
    
    // 'def' attribute on InputSetRef at ColumnDefinitionInputSet.pcf: line 97, column 44
    function def_refreshVariables_61 (def :  pcf.ValueProviderArgumentsInputSet_default) : void {
      def.refreshVariables(valueProviderProxy, advancedEdit, columnDefinition)
    }
    
    // 'value' attribute on TextInput (id=ColumnName_Input) at ColumnDefinitionInputSet.pcf: line 54, column 109
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.ColumnName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ColumnLabel_Input) at ColumnDefinitionInputSet.pcf: line 61, column 109
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.ColumnLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=DisplayType_Input) at ColumnDefinitionInputSet.pcf: line 67, column 51
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.DisplayType = (__VALUE_TO_SET as typekey.RateTableColumnDisplay)
    }
    
    // 'value' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.PhysicalColumnName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValueProvider_Input) at ColumnDefinitionInputSet.pcf: line 84, column 41
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueProviderProxy.ClassName = (__VALUE_TO_SET as typekey.ValueProvider)
    }
    
    // 'value' attribute on CheckBoxInput (id=AllowMultiple_Input) at ColumnDefinitionInputSet.pcf: line 94, column 153
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.MultiSelect = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.DependsOn = (__VALUE_TO_SET as entity.RateTableColumn)
    }
    
    // 'value' attribute on TextInput (id=SortOrder_Input) at ColumnDefinitionInputSet.pcf: line 47, column 88
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      columnDefinition.SortOrder = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TextInput (id=SortOrder_Input) at ColumnDefinitionInputSet.pcf: line 47, column 88
    function editable_4 () : java.lang.Boolean {
      return advancedEdit
    }
    
    // 'editable' attribute on CheckBoxInput (id=AllowMultiple_Input) at ColumnDefinitionInputSet.pcf: line 94, column 153
    function editable_50 () : java.lang.Boolean {
      return advancedEdit and valueProviderProxy.ClassName != null
    }
    
    // 'initialValue' attribute on Variable at ColumnDefinitionInputSet.pcf: line 25, column 38
    function initialValue_0 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at ColumnDefinitionInputSet.pcf: line 29, column 36
    function initialValue_1 () : typekey.LanguageType {
      return gw.api.util.LocaleUtil.getDefaultLanguageType()
    }
    
    // 'initialValue' attribute on Variable at ColumnDefinitionInputSet.pcf: line 33, column 86
    function initialValue_2 () : java.util.HashMap<entity.RateTableColumn, typekey.ValueProvider> {
      return new java.util.HashMap<entity.RateTableColumn, ValueProvider>()
    }
    
    // 'initialValue' attribute on Variable at ColumnDefinitionInputSet.pcf: line 38, column 67
    function initialValue_3 () : gw.rating.rtm.valueprovider.CustomValueProviderData {
      return getProxy()
    }
    
    // 'mode' attribute on InputSetRef at ColumnDefinitionInputSet.pcf: line 97, column 44
    function mode_62 () : java.lang.Object {
      return valueProviderProxy.ClassName
    }
    
    // 'noneSelectedLabel' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function noneSelectedLabel_36 () : java.lang.String {
      return getRangeForPhysicalColumns(columnDefinition).Empty? DisplayKey.get("Web.Rating.RateTableDefinition.PhysicalColumnNotAvailable") : DisplayKey.get("Java.TextValueWidget.NoneSelected")
    }
    
    // 'onChange' attribute on PostOnChange at ColumnDefinitionInputSet.pcf: line 86, column 101
    function onChange_43 () : void {
      helper.updateValuesForValueProviderChange(valueProviderProxy, columnDefinition)
    }
    
    // 'optionLabel' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function optionLabel_37 (VALUE :  java.lang.String) : java.lang.String {
      return getPhysicalColumnLabel(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function optionLabel_69 (VALUE :  entity.RateTableColumn) : java.lang.String {
      return VALUE.ColumnName
    }
    
    // 'validationExpression' attribute on TextInput (id=SortOrder_Input) at ColumnDefinitionInputSet.pcf: line 47, column 88
    function validationExpression_5 () : java.lang.Object {
      return helper.enforceSortOrder(columnDefinition)
    }
    
    // 'validationExpression' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function validationExpression_64 () : java.lang.Object {
      return columnDefinition.DependsOn.MultiSelect ? DisplayKey.get("Web.Rating.RateTableDefinition.DependsOnMultiValueParameterError") : null
    }
    
    // 'valueRange' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function valueRange_38 () : java.lang.Object {
      return getRangeForPhysicalColumns(columnDefinition)
    }
    
    // 'valueRange' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function valueRange_70 () : java.lang.Object {
      return columnDefinition.Definition.MatchOps.arrays("Params").toArray(new entity.RateTableColumn[0]).where(\ col -> col != columnDefinition)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValueProvider_Input) at ColumnDefinitionInputSet.pcf: line 84, column 41
    function valueRoot_47 () : java.lang.Object {
      return valueProviderProxy
    }
    
    // 'value' attribute on TextInput (id=SortOrder_Input) at ColumnDefinitionInputSet.pcf: line 47, column 88
    function valueRoot_9 () : java.lang.Object {
      return columnDefinition
    }
    
    // 'value' attribute on TextInput (id=ColumnName_Input) at ColumnDefinitionInputSet.pcf: line 54, column 109
    function value_16 () : java.lang.String {
      return columnDefinition.ColumnName
    }
    
    // 'value' attribute on TextInput (id=ColumnLabel_Input) at ColumnDefinitionInputSet.pcf: line 61, column 109
    function value_23 () : java.lang.String {
      return columnDefinition.ColumnLabel
    }
    
    // 'value' attribute on TypeKeyInput (id=DisplayType_Input) at ColumnDefinitionInputSet.pcf: line 67, column 51
    function value_28 () : typekey.RateTableColumnDisplay {
      return columnDefinition.DisplayType
    }
    
    // 'value' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function value_33 () : java.lang.String {
      return columnDefinition.PhysicalColumnName
    }
    
    // 'value' attribute on TypeKeyInput (id=ValueProvider_Input) at ColumnDefinitionInputSet.pcf: line 84, column 41
    function value_45 () : typekey.ValueProvider {
      return valueProviderProxy.ClassName
    }
    
    // 'value' attribute on CheckBoxInput (id=AllowMultiple_Input) at ColumnDefinitionInputSet.pcf: line 94, column 153
    function value_52 () : java.lang.Boolean {
      return columnDefinition.MultiSelect
    }
    
    // 'value' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function value_66 () : entity.RateTableColumn {
      return columnDefinition.DependsOn
    }
    
    // 'value' attribute on TextInput (id=SortOrder_Input) at ColumnDefinitionInputSet.pcf: line 47, column 88
    function value_7 () : java.lang.Integer {
      return columnDefinition.SortOrder
    }
    
    // 'valueRange' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function verifyValueRangeIsAllowedType_71 ($$arg :  entity.RateTableColumn[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function verifyValueRangeIsAllowedType_71 ($$arg :  gw.api.database.IQueryBeanResult<entity.RateTableColumn>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function verifyValueRangeIsAllowedType_71 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PhysicalColumn_Input) at ColumnDefinitionInputSet.pcf: line 76, column 36
    function verifyValueRange_40 () : void {
      var __valueRangeArg = getRangeForPhysicalColumns(columnDefinition)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function verifyValueRange_72 () : void {
      var __valueRangeArg = columnDefinition.Definition.MatchOps.arrays("Params").toArray(new entity.RateTableColumn[0]).where(\ col -> col != columnDefinition)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_71(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ColumnName_Input) at ColumnDefinitionInputSet.pcf: line 54, column 109
    function visible_15 () : java.lang.Boolean {
      return not hideCodeAndLabelInSingleParameterMode or columnDefinition.MatchOp.Params.length > 1
    }
    
    // 'visible' attribute on CheckBoxInput (id=AllowMultiple_Input) at ColumnDefinitionInputSet.pcf: line 94, column 153
    function visible_51 () : java.lang.Boolean {
      return columnDefinition.MatchOp.MatchOpDefinition.OpCode == "ExactMatch" and columnDefinition.ColumnType.Code == "String"
    }
    
    // 'visible' attribute on TextInput (id=SortOrder_Input) at ColumnDefinitionInputSet.pcf: line 47, column 88
    function visible_6 () : java.lang.Boolean {
      return columnDefinition.IsParameterColumn or columnDefinition.IsFactorColumn
    }
    
    // 'visible' attribute on RangeInput (id=DependsOn_Input) at ColumnDefinitionInputSet.pcf: line 108, column 91
    function visible_65 () : java.lang.Boolean {
      return columnDefinition.IsParameterColumn and columnDefinition.HasValueProvider
    }
    
    property get advancedEdit () : boolean {
      return getRequireValue("advancedEdit", 0) as java.lang.Boolean
    }
    
    property set advancedEdit ($arg :  boolean) {
      setRequireValue("advancedEdit", 0, $arg)
    }
    
    property get columnDefinition () : RateTableColumn {
      return getRequireValue("columnDefinition", 0) as RateTableColumn
    }
    
    property set columnDefinition ($arg :  RateTableColumn) {
      setRequireValue("columnDefinition", 0, $arg)
    }
    
    property get defaultLanguage () : typekey.LanguageType {
      return getVariableValue("defaultLanguage", 0) as typekey.LanguageType
    }
    
    property set defaultLanguage ($arg :  typekey.LanguageType) {
      setVariableValue("defaultLanguage", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.rtm.RateTableParameterSetHelper {
      return getRequireValue("helper", 0) as gw.pcf.rating.rtm.RateTableParameterSetHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.rtm.RateTableParameterSetHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get hideCodeAndLabelInSingleParameterMode () : boolean {
      return getRequireValue("hideCodeAndLabelInSingleParameterMode", 0) as java.lang.Boolean
    }
    
    property set hideCodeAndLabelInSingleParameterMode ($arg :  boolean) {
      setRequireValue("hideCodeAndLabelInSingleParameterMode", 0, $arg)
    }
    
    property get languages () : typekey.LanguageType[] {
      return getVariableValue("languages", 0) as typekey.LanguageType[]
    }
    
    property set languages ($arg :  typekey.LanguageType[]) {
      setVariableValue("languages", 0, $arg)
    }
    
    property get providerMap () : java.util.HashMap<entity.RateTableColumn, typekey.ValueProvider> {
      return getVariableValue("providerMap", 0) as java.util.HashMap<entity.RateTableColumn, typekey.ValueProvider>
    }
    
    property set providerMap ($arg :  java.util.HashMap<entity.RateTableColumn, typekey.ValueProvider>) {
      setVariableValue("providerMap", 0, $arg)
    }
    
    property get tableDefinition () : RateTableDefinition {
      return getRequireValue("tableDefinition", 0) as RateTableDefinition
    }
    
    property set tableDefinition ($arg :  RateTableDefinition) {
      setRequireValue("tableDefinition", 0, $arg)
    }
    
    property get valueProviderProxy () : gw.rating.rtm.valueprovider.CustomValueProviderData {
      return getVariableValue("valueProviderProxy", 0) as gw.rating.rtm.valueprovider.CustomValueProviderData
    }
    
    property set valueProviderProxy ($arg :  gw.rating.rtm.valueprovider.CustomValueProviderData) {
      setVariableValue("valueProviderProxy", 0, $arg)
    }
    
    function getPhysicalColumnLabel(colName : String) : String {
      if (columnDefinition.ColumnType == TC_DECIMAL) {
        return DisplayKey.get("Web.Rating.RateTableDefinition.PhysicalColumnMenuLabel", colName,
                                                                                 columnDefinition.precision(colName),
                                                                                 columnDefinition.scale(colName))
      } else {
        return colName
      }
    }
    
    function getRangeForPhysicalColumns(column : entity.RateTableColumn) : java.util.List<String> {
      var ret = new java.util.ArrayList<String>()
      if (column.PhysicalColumnName != null and not column.PhysicalColumnName.Empty) {
        ret.add(column.PhysicalColumnName)
      }
      try {
        ret.addAll(tableDefinition.availablePhysicalColumnsForDataType(column.ColumnType))
      } catch(ex : gw.rating.rtm.InvalidCustomRateTableException) {
        // don't really care about it here - will simply get an empty list
        ex = null
        ret = null
      }
      return ret
    }
    
    function getProxy(): gw.rating.rtm.valueprovider.CustomValueProviderData{
      var proxy = valueProviderProxy
      if(valueProviderProxy == null or valueProviderProxy.ColumnDef != columnDefinition){
        proxy = new gw.rating.rtm.valueprovider.CustomValueProviderData(columnDefinition)
    }
    
      return proxy
    }
    
    
  }
  
  
}