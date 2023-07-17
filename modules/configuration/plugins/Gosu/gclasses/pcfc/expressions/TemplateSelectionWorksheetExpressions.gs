package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/integration/TemplateSelectionWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TemplateSelectionWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/integration/TemplateSelectionWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TemplateSelectionWorksheetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SelectButton) at TemplateSelectionWorksheet.pcf: line 41, column 42
    function action_5 () : void {
      helper.goInCreateDraftWorksheet(CurrentLocation, info, template)
    }
    
    // 'value' attribute on TextCell (id=TemplateID_Cell) at TemplateSelectionWorksheet.pcf: line 46, column 44
    function valueRoot_7 () : java.lang.Object {
      return template
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at TemplateSelectionWorksheet.pcf: line 54, column 47
    function value_12 () : java.util.Date {
      return template.DateEffective
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at TemplateSelectionWorksheet.pcf: line 58, column 48
    function value_15 () : java.util.Date {
      return template.DateExpiration
    }
    
    // 'value' attribute on TextCell (id=TemplateID_Cell) at TemplateSelectionWorksheet.pcf: line 46, column 44
    function value_6 () : java.lang.String {
      return template.TemplateId
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TemplateSelectionWorksheet.pcf: line 50, column 38
    function value_9 () : java.lang.String {
      return template.Name
    }
    
    property get template () : gw.plugin.document.IDocumentTemplateDescriptor {
      return getIteratedValue(1) as gw.plugin.document.IDocumentTemplateDescriptor
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/document/integration/TemplateSelectionWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TemplateSelectionWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (info :  gw.integration.document.production.web.DocumentProductionInfo) : int {
      return 0
    }
    
    // 'canVisit' attribute on Worksheet (id=TemplateSelectionWorksheet) at TemplateSelectionWorksheet.pcf: line 11, column 24
    static function canVisit_19 (info :  gw.integration.document.production.web.DocumentProductionInfo) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // EditButtons at TemplateSelectionWorksheet.pcf: line 26, column 34
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=TemplateID_Cell) at TemplateSelectionWorksheet.pcf: line 46, column 44
    function sortValue_1 (template :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.Object {
      return template.TemplateId
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TemplateSelectionWorksheet.pcf: line 50, column 38
    function sortValue_2 (template :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.Object {
      return template.Name
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at TemplateSelectionWorksheet.pcf: line 54, column 47
    function sortValue_3 (template :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.Object {
      return template.DateEffective
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at TemplateSelectionWorksheet.pcf: line 58, column 48
    function sortValue_4 (template :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.Object {
      return template.DateExpiration
    }
    
    // 'title' attribute on Worksheet (id=TemplateSelectionWorksheet) at TemplateSelectionWorksheet.pcf: line 11, column 24
    static function title_20 (info :  gw.integration.document.production.web.DocumentProductionInfo) : java.lang.Object {
      return info.Title
    }
    
    // 'value' attribute on RowIterator at TemplateSelectionWorksheet.pcf: line 34, column 72
    function value_18 () : gw.plugin.document.IDocumentTemplateDescriptor[] {
      return helper.DocumentTemplates
    }
    
    override property get CurrentLocation () : pcf.TemplateSelectionWorksheet {
      return super.CurrentLocation as pcf.TemplateSelectionWorksheet
    }
    
    property get helper () : gw.integration.document.production.web.DocumentProductionUIHelper {
      return getVariableValue("helper", 0) as gw.integration.document.production.web.DocumentProductionUIHelper
    }
    
    property set helper ($arg :  gw.integration.document.production.web.DocumentProductionUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get info () : gw.integration.document.production.web.DocumentProductionInfo {
      return getVariableValue("info", 0) as gw.integration.document.production.web.DocumentProductionInfo
    }
    
    property set info ($arg :  gw.integration.document.production.web.DocumentProductionInfo) {
      setVariableValue("info", 0, $arg)
    }
    
    
  }
  
  
}