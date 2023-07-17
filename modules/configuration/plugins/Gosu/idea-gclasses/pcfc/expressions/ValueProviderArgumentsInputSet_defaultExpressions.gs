package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/ValueProviderArgumentsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ValueProviderArgumentsInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/ValueProviderArgumentsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ValueProviderArgumentsInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ArgumentValue_Cell) at ValueProviderArgumentsInputSet.default.pcf: line 46, column 37
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      argument.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onChange' attribute on PostOnChange at ValueProviderArgumentsInputSet.default.pcf: line 48, column 76
    function onChange_4 () : void {
      valueProviderProxy.createValueProviderString()
    }
    
    // 'value' attribute on TextCell (id=ArgumentValue_Cell) at ValueProviderArgumentsInputSet.default.pcf: line 46, column 37
    function valueRoot_7 () : java.lang.Object {
      return argument
    }
    
    // 'value' attribute on TextCell (id=ArgumentValue_Cell) at ValueProviderArgumentsInputSet.default.pcf: line 46, column 37
    function value_5 () : java.lang.String {
      return argument.Name
    }
    
    property get argument () : gw.rating.rtm.valueprovider.CustomValueProviderData.Argument {
      return getIteratedValue(1) as gw.rating.rtm.valueprovider.CustomValueProviderData.Argument
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/ValueProviderArgumentsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ValueProviderArgumentsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on InputSet (id=ValueProviderArgumentsInputSet) at ValueProviderArgumentsInputSet.default.pcf: line 8, column 20
    function editable_13 () : java.lang.Boolean {
      return advancedEdit
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ArgumentIterator) at ValueProviderArgumentsInputSet.default.pcf: line 39, column 106
    function toCreateAndAdd_9 () : gw.rating.rtm.valueprovider.CustomValueProviderData.Argument {
      return valueProviderProxy.addNewArgument()
    }
    
    // 'toRemove' attribute on RowIterator (id=ArgumentIterator) at ValueProviderArgumentsInputSet.default.pcf: line 39, column 106
    function toRemove_10 (argument :  gw.rating.rtm.valueprovider.CustomValueProviderData.Argument) : void {
      valueProviderProxy.Arguments.remove(argument); valueProviderProxy.createValueProviderString()
    }
    
    // 'value' attribute on TextInput (id=ValueProviderHelpText_Input) at ValueProviderArgumentsInputSet.default.pcf: line 21, column 86
    function value_1 () : java.lang.String {
      return valueProviderProxy.ClassName == TC_TYPELISTVALUEPROVIDER ? "" : gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory.getValueProvider(columnDefinition).ArgumentsHelpText
    }
    
    // 'value' attribute on RowIterator (id=ArgumentIterator) at ValueProviderArgumentsInputSet.default.pcf: line 39, column 106
    function value_11 () : java.util.List<gw.rating.rtm.valueprovider.CustomValueProviderData.Argument> {
      return valueProviderProxy.Arguments
    }
    
    // 'visible' attribute on TextInput (id=ValueProviderHelpText_Input) at ValueProviderArgumentsInputSet.default.pcf: line 21, column 86
    function visible_0 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and valueProviderProxy.ClassName != null
    }
    
    // 'visible' attribute on ListViewInput (id=ArgumentListView) at ValueProviderArgumentsInputSet.default.pcf: line 25, column 88
    function visible_12 () : java.lang.Boolean {
      return valueProviderProxy.ClassName != ValueProvider.TC_TYPELISTVALUEPROVIDER
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
    
    property get valueProviderProxy () : gw.rating.rtm.valueprovider.CustomValueProviderData {
      return getRequireValue("valueProviderProxy", 0) as gw.rating.rtm.valueprovider.CustomValueProviderData
    }
    
    property set valueProviderProxy ($arg :  gw.rating.rtm.valueprovider.CustomValueProviderData) {
      setRequireValue("valueProviderProxy", 0, $arg)
    }
    
    
  }
  
  
}