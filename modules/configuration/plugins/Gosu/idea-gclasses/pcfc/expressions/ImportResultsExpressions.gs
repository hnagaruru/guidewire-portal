package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/importexport/ImportResults.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportResultsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportResults.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportResultsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (pcImportDataInfo :  gw.api.admin.PCImportDataInfo) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ImportResults) at ImportResults.pcf: line 9, column 65
    static function canVisit_2 (pcImportDataInfo :  gw.api.admin.PCImportDataInfo) : java.lang.Boolean {
      return perm.User.exportadmindata
    }
    
    // 'def' attribute on PanelRef at ImportResults.pcf: line 19, column 50
    function def_onEnter_0 (def :  pcf.ImportResultsDV) : void {
      def.onEnter(pcImportDataInfo)
    }
    
    // 'def' attribute on PanelRef at ImportResults.pcf: line 19, column 50
    function def_refreshVariables_1 (def :  pcf.ImportResultsDV) : void {
      def.refreshVariables(pcImportDataInfo)
    }
    
    // 'parent' attribute on Page (id=ImportResults) at ImportResults.pcf: line 9, column 65
    static function parent_3 (pcImportDataInfo :  gw.api.admin.PCImportDataInfo) : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ImportResults {
      return super.CurrentLocation as pcf.ImportResults
    }
    
    property get pcImportDataInfo () : gw.api.admin.PCImportDataInfo {
      return getVariableValue("pcImportDataInfo", 0) as gw.api.admin.PCImportDataInfo
    }
    
    property set pcImportDataInfo ($arg :  gw.api.admin.PCImportDataInfo) {
      setVariableValue("pcImportDataInfo", 0, $arg)
    }
    
    
  }
  
  
}