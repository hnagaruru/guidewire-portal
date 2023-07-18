package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/importexport/ImportResultsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportResultsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportResultsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportResultsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at ImportResultsDV.pcf: line 16, column 92
    function label_2 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportResultsDV.SuccessWithDelete", pcImportDataInfo.Results.NumInserted, pcImportDataInfo.Results.NumUpdated, pcImportDataInfo.Results.NumDeleted)
    }
    
    // 'label' attribute on Label at ImportResultsDV.pcf: line 19, column 133
    function label_4 () : java.lang.String {
      return pcImportDataInfo.InfoString
    }
    
    // 'label' attribute on Label at ImportResultsDV.pcf: line 22, column 93
    function label_6 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportResultsDV.Failure", pcImportDataInfo.Results.ErrorMessage)
    }
    
    // 'visible' attribute on Label at ImportResultsDV.pcf: line 13, column 54
    function visible_0 () : java.lang.Boolean {
      return pcImportDataInfo.Results.Canceled
    }
    
    // 'visible' attribute on Label at ImportResultsDV.pcf: line 16, column 92
    function visible_1 () : java.lang.Boolean {
      return !pcImportDataInfo.Results.Canceled and pcImportDataInfo.Results.Success
    }
    
    // 'visible' attribute on Label at ImportResultsDV.pcf: line 19, column 133
    function visible_3 () : java.lang.Boolean {
      return pcImportDataInfo.InfoString != null and !pcImportDataInfo.Results.Canceled and pcImportDataInfo.Results.Success 
    }
    
    // 'visible' attribute on Label at ImportResultsDV.pcf: line 22, column 93
    function visible_5 () : java.lang.Boolean {
      return !pcImportDataInfo.Results.Canceled and !pcImportDataInfo.Results.Success
    }
    
    property get pcImportDataInfo () : gw.api.admin.PCImportDataInfo {
      return getRequireValue("pcImportDataInfo", 0) as gw.api.admin.PCImportDataInfo
    }
    
    property set pcImportDataInfo ($arg :  gw.api.admin.PCImportDataInfo) {
      setRequireValue("pcImportDataInfo", 0, $arg)
    }
    
    
  }
  
  
}