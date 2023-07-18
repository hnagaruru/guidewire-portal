package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/integration/CreateDraftWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateDraftWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/integration/CreateDraftWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateDraftWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (info :  gw.integration.document.production.web.DocumentProductionInfo) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CreateDraftButton) at CreateDraftWorksheet.pcf: line 27, column 94
    function action_0 () : void {
      helper.goInDraftEditWorksheet(CurrentLocation, info)
    }
    
    // 'canVisit' attribute on Worksheet (id=CreateDraftWorksheet) at CreateDraftWorksheet.pcf: line 11, column 120
    static function canVisit_6 (info :  gw.integration.document.production.web.DocumentProductionInfo) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at CreateDraftWorksheet.pcf: line 40, column 34
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      info.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // EditButtons at CreateDraftWorksheet.pcf: line 31, column 34
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Worksheet (id=CreateDraftWorksheet) at CreateDraftWorksheet.pcf: line 11, column 120
    static function title_7 (info :  gw.integration.document.production.web.DocumentProductionInfo) : java.lang.Object {
      return DisplayKey.get('Web.Document.Integration.DocumentCreation.Title.Template', info.Template.Name, info.Title)
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at CreateDraftWorksheet.pcf: line 40, column 34
    function valueRoot_4 () : java.lang.Object {
      return info
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at CreateDraftWorksheet.pcf: line 40, column 34
    function value_2 () : java.lang.String {
      return info.Name
    }
    
    override property get CurrentLocation () : pcf.CreateDraftWorksheet {
      return super.CurrentLocation as pcf.CreateDraftWorksheet
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