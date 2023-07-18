package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_UploadDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportWizard_UploadDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_UploadDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportWizard_UploadDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 32, column 56
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      pcImportDataInfo.ResolutionStrategy = (__VALUE_TO_SET as gw.api.admin.PCImportDataInfo.ResolutionOption)
    }
    
    // 'value' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 18, column 40
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      pcImportDataInfo.File = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'label' attribute on Label at ImportWizard_UploadDV.pcf: line 24, column 57
    function label_8 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportWizard.UploadDV.ConflictsMessage", pcImportDataInfo.NumConflicts)
    }
    
    // 'validationExpression' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 18, column 40
    function validationExpression_0 () : java.lang.Object {
      return pcImportDataInfo.File != null ? null : DisplayKey.get("Web.Admin.ImportWizard.UploadDV.FileNotSpecifiedMessage")
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 32, column 56
    function valueRange_13 () : java.lang.Object {
      return pcImportDataInfo.ResolutionOptions
    }
    
    // 'value' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 18, column 40
    function valueRoot_3 () : java.lang.Object {
      return pcImportDataInfo
    }
    
    // 'value' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 18, column 40
    function value_1 () : gw.api.web.WebFile {
      return pcImportDataInfo.File
    }
    
    // 'value' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 32, column 56
    function value_10 () : gw.api.admin.PCImportDataInfo.ResolutionOption {
      return pcImportDataInfo.ResolutionStrategy
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 32, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.admin.PCImportDataInfo.ResolutionOption[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 32, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 32, column 56
    function verifyValueRange_15 () : void {
      var __valueRangeArg = pcImportDataInfo.ResolutionOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at ImportWizard_UploadDV.pcf: line 21, column 89
    function visible_6 () : java.lang.Boolean {
      return pcImportDataInfo.File != null and pcImportDataInfo.NumConflicts == 0
    }
    
    // 'visible' attribute on Label at ImportWizard_UploadDV.pcf: line 24, column 57
    function visible_7 () : java.lang.Boolean {
      return pcImportDataInfo.NumConflicts > 0
    }
    
    property get pcImportDataInfo () : gw.api.admin.PCImportDataInfo {
      return getRequireValue("pcImportDataInfo", 0) as gw.api.admin.PCImportDataInfo
    }
    
    property set pcImportDataInfo ($arg :  gw.api.admin.PCImportDataInfo) {
      setRequireValue("pcImportDataInfo", 0, $arg)
    }
    
    
  }
  
  
}