package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/PCSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCSampleDataExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/PCSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PCSampleDataExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=LoadSampleData) at PCSampleData.pcf: line 43, column 42
    function action_6 () : void {
      loadSampleDataSet(dataSet)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PCSampleData.pcf: line 48, column 44
    function valueRoot_8 () : java.lang.Object {
      return dataSet
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PCSampleData.pcf: line 52, column 44
    function value_10 () : java.lang.String {
      return dataSet.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PCSampleData.pcf: line 48, column 44
    function value_7 () : java.lang.String {
      return dataSet.DisplayName
    }
    
    property get dataSet () : typekey.SampleDataSet {
      return getIteratedValue(1) as typekey.SampleDataSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PCSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCSampleDataExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonCell (id=GenerateCommercialPropertyPolicies_Cell) at PCSampleData.pcf: line 91, column 106
    function action_14 () : void {
      eval("new gw.sampledata.GenerateCommercialPropertyPolicies().create()")
    }
    
    // 'def' attribute on PanelRef at PCSampleData.pcf: line 25, column 47
    function def_onEnter_1 (def :  pcf.UnsupportedToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PCSampleData.pcf: line 98, column 42
    function def_onEnter_15 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PCSampleData.pcf: line 98, column 42
    function def_refreshVariables_16 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at PCSampleData.pcf: line 25, column 47
    function def_refreshVariables_2 (def :  pcf.UnsupportedToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'label' attribute on Verbatim at PCSampleData.pcf: line 23, column 25
    function label_0 () : java.lang.String {
      return result
    }
    
    // 'parent' attribute on Page (id=PCSampleData) at PCSampleData.pcf: line 12, column 72
    static function parent_17 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    // 'sortBy' attribute on IteratorSort at PCSampleData.pcf: line 35, column 28
    function sortBy_3 (dataSet :  typekey.SampleDataSet) : java.lang.Object {
      return dataSet
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PCSampleData.pcf: line 48, column 44
    function sortValue_4 (dataSet :  typekey.SampleDataSet) : java.lang.Object {
      return dataSet.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PCSampleData.pcf: line 52, column 44
    function sortValue_5 (dataSet :  typekey.SampleDataSet) : java.lang.Object {
      return dataSet.Description
    }
    
    // 'value' attribute on RowIterator at PCSampleData.pcf: line 32, column 47
    function value_13 () : typekey.SampleDataSet[] {
      return typekey.SampleDataSet.getTypeKeys(false)?.toTypedArray()
    }
    
    override property get CurrentLocation () : pcf.PCSampleData {
      return super.CurrentLocation as pcf.PCSampleData
    }
    
    property get result () : String {
      return getVariableValue("result", 0) as String
    }
    
    property set result ($arg :  String) {
      setVariableValue("result", 0, $arg)
    }
    
    function loadSampleDataSet(dataSet : SampleDataSet) {
      result = ""
      gw.lang.reflect.TypeSystem.getByFullName("gw.sampledata.SampleData").TypeInfo.getMethod("loadSampleDataSet", {SampleDataSet}).CallHandler.handleCall(null, {dataSet})
      result = DisplayKey.get("Web.UnsupportedTools.SampleData.Success", dataSet.DisplayName)
    }
    
    
  }
  
  
}