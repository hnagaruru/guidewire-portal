package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_UploadScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportWizard_UploadScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_UploadScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportWizard_UploadScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ImportWizard_UploadScreen.pcf: line 18, column 54
    function def_onEnter_2 (def :  pcf.ImportWizard_UploadDV) : void {
      def.onEnter(pcImportDataInfo)
    }
    
    // 'def' attribute on PanelRef at ImportWizard_UploadScreen.pcf: line 18, column 54
    function def_refreshVariables_3 (def :  pcf.ImportWizard_UploadDV) : void {
      def.refreshVariables(pcImportDataInfo)
    }
    
    // 'label' attribute on Verbatim at ImportWizard_UploadScreen.pcf: line 16, column 23
    function label_1 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportWizard.UploadDV.ErrorsFoundMessage", pcImportDataInfo.ErrorString)
    }
    
    // 'visible' attribute on Verbatim at ImportWizard_UploadScreen.pcf: line 16, column 23
    function visible_0 () : java.lang.Boolean {
      return pcImportDataInfo.hasErrors()
    }
    
    property get pcImportDataInfo () : gw.api.admin.PCImportDataInfo {
      return getRequireValue("pcImportDataInfo", 0) as gw.api.admin.PCImportDataInfo
    }
    
    property set pcImportDataInfo ($arg :  gw.api.admin.PCImportDataInfo) {
      setRequireValue("pcImportDataInfo", 0, $arg)
    }
    
    
  }
  
  
}