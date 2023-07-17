package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.LocaleUtil
uses gw.api.util.LocationUtil
@javax.annotation.Generated("config/web/pcf/i18n/LocalizedValuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocalizedValuesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/i18n/LocalizedValuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LocalizedValuesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on Row at LocalizedValuesLV.pcf: line 46, column 80
    function editable_12 () : java.lang.Boolean {
      return language != gw.api.util.LocaleUtil.getCurrentLanguageType()
    }
    
    // 'value' attribute on CellIterator at LocalizedValuesLV.pcf: line 53, column 42
    function value_11 () : java.lang.String[] {
      return fieldNames
    }
    
    // 'value' attribute on TextCell (id=Language_Cell) at LocalizedValuesLV.pcf: line 49, column 154
    function value_4 () : java.lang.String {
      return language.DisplayName + (language == defaultLanguage ? DisplayKey.get("Web.Admin.LocalizedValuesLV.Default") : "")
    }
    
    property get language () : typekey.LanguageType {
      return getIteratedValue(1) as typekey.LanguageType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/i18n/LocalizedValuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=column_Cell) at LocalizedValuesLV.pcf: line 59, column 43
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      entity[fieldName + "_" + language.Code] = __VALUE_TO_SET
    }
    
    // 'validationExpression' attribute on TextCell (id=column_Cell) at LocalizedValuesLV.pcf: line 59, column 43
    function validationExpression_6 () : java.lang.Object {
      return copyValueIfNotSet(language, fieldName)
    }
    
    // 'value' attribute on TextCell (id=column_Cell) at LocalizedValuesLV.pcf: line 59, column 43
    function value_7 () : java.lang.Object {
      return entity[fieldName + "_" + language.Code]
    }
    
    property get fieldName () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/i18n/LocalizedValuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocalizedValuesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FieldHeading_Cell) at LocalizedValuesLV.pcf: line 35, column 31
    function value_1 () : java.lang.String {
      return columnName
    }
    
    property get columnName () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/i18n/LocalizedValuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocalizedValuesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LocalizedValuesLV.pcf: line 23, column 28
    function initialValue_0 () : LanguageType {
      return gw.api.util.LocaleUtil.getDefaultLanguageType()
    }
    
    // 'value' attribute on RowIterator (id=LocalizedFields) at LocalizedValuesLV.pcf: line 44, column 42
    function value_13 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'value' attribute on CellIterator at LocalizedValuesLV.pcf: line 32, column 40
    function value_3 () : java.lang.String[] {
      return columnNames
    }
    
    property get columnNames () : String[] {
      return getRequireValue("columnNames", 0) as String[]
    }
    
    property set columnNames ($arg :  String[]) {
      setRequireValue("columnNames", 0, $arg)
    }
    
    property get defaultLanguage () : LanguageType {
      return getVariableValue("defaultLanguage", 0) as LanguageType
    }
    
    property set defaultLanguage ($arg :  LanguageType) {
      setVariableValue("defaultLanguage", 0, $arg)
    }
    
    property get entity () : Object {
      return getRequireValue("entity", 0) as Object
    }
    
    property set entity ($arg :  Object) {
      setRequireValue("entity", 0, $arg)
    }
    
    property get fieldNames () : String[] {
      return getRequireValue("fieldNames", 0) as String[]
    }
    
    property set fieldNames ($arg :  String[]) {
      setRequireValue("fieldNames", 0, $arg)
    }
    
    
    function copyValueIfNotSet(language: LanguageType, fldName : String): String {
      var localizedFieldName = fldName + "_" + language.Code
      var value = entity[localizedFieldName] as String
      var copyFromValue = entity[fldName] as String
      var index = fieldNames.toList().indexOf(fldName)
      var columnName = columnNames[index]
      if (not value.HasContent and copyFromValue.HasContent) {
        LocationUtil.addRequestScopedWarningMessage(DisplayKey.get("Web.Admin.LocalizedValuesLV.ValuesCopiedMessage", columnName))
        entity[localizedFieldName] = copyFromValue
      }
    
      entity[fldName + "_" + LocaleUtil.getCurrentLanguageType().Code] = copyFromValue // workaround for PL-23047
      return null
    }
    
    
  }
  
  
}