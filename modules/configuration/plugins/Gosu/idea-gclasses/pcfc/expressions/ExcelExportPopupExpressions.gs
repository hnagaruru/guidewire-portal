package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.exportimport.ExcelExporter
uses gw.exportimport.ExportData
uses gw.exportimport.web.ExportDataWebFactory
@javax.annotation.Generated("config/web/pcf/line/cp/policy/ExcelExportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExcelExportPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/ExcelExportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExcelExportPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ExportSynchronouslyButton) at ExcelExportPopup.pcf: line 40, column 54
    function action_4 () : void {
      export(true)
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=ExportProgressBar_Input) at ExcelExportPopup.pcf: line 107, column 49
    function action_42 () : void {
      complete = true
    }
    
    // 'action' attribute on ButtonInput (id=DownloadExcelFileButton_Input) at ExcelExportPopup.pcf: line 116, column 33
    function action_47 () : void {
      asynchronousExporter.streamExcelFile()
    }
    
    // 'action' attribute on ToolbarButton (id=ExportAsynchronouslyButton) at ExcelExportPopup.pcf: line 46, column 50
    function action_7 () : void {
      export(false)
    }
    
    // 'available' attribute on ToolbarButton (id=ExportSynchronouslyButton) at ExcelExportPopup.pcf: line 40, column 54
    function available_2 () : java.lang.Boolean {
      return hasValidExportAndFormat()
    }
    
    // 'value' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      maskSelection.MaskData = (__VALUE_TO_SET as gw.exportimport.web.ExportMaskData)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllData_Input) at ExcelExportPopup.pcf: line 67, column 49
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      maskSelection.ExportAllData = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Format_Input) at ExcelExportPopup.pcf: line 78, column 66
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      maskSelection.Format = (__VALUE_TO_SET as gw.exportimport.web.ExportMaskDataFormat)
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at ExcelExportPopup.pcf: line 88, column 46
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      maskSelection.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on RangeInput (id=Locale_Input) at ExcelExportPopup.pcf: line 98, column 44
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      maskSelection.Locale = (__VALUE_TO_SET as typekey.LocaleType)
    }
    
    // 'initialValue' attribute on Variable at ExcelExportPopup.pcf: line 19, column 57
    function initialValue_0 () : gw.exportimport.AsynchronousExcelExporter {
      return new gw.exportimport.AsynchronousExcelExporter()
    }
    
    // 'initialValue' attribute on Variable at ExcelExportPopup.pcf: line 27, column 55
    function initialValue_1 () : gw.exportimport.web.ExportMaskSelection {
      return new gw.exportimport.web.ExportMaskSelection() {:Language = cpLine.Branch.Policy.PrimaryLanguage}
    }
    
    // 'onChange' attribute on PostOnChange at ExcelExportPopup.pcf: line 59, column 135
    function onChange_8 () : void {
      maskSelection.Format = gw.exportimport.web.ExportMaskUtil.findDefaultMaskDataFormat(maskSelection.MaskData)
    }
    
    // 'percentage' attribute on ProgressInput (id=ExportProgressBar_Input) at ExcelExportPopup.pcf: line 107, column 49
    function percentage_43 () : java.lang.Double {
      return asynchronousExporter.Status
    }
    
    // 'status' attribute on ProgressInput (id=ExportProgressBar_Input) at ExcelExportPopup.pcf: line 107, column 49
    function status_44 () : java.lang.String {
      return asynchronousExporter.StatusMessage
    }
    
    // 'valueRange' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function valueRange_12 () : java.lang.Object {
      return gw.exportimport.web.ExportMaskUtil.MaskData
    }
    
    // 'valueRange' attribute on RangeInput (id=Format_Input) at ExcelExportPopup.pcf: line 78, column 66
    function valueRange_23 () : java.lang.Object {
      return gw.exportimport.web.ExportMaskUtil.getFormats(maskSelection.MaskData)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at ExcelExportPopup.pcf: line 88, column 46
    function valueRange_30 () : java.lang.Object {
      return gw.exportimport.web.ExportMaskUtil.SupportedLanguages
    }
    
    // 'valueRange' attribute on RangeInput (id=Locale_Input) at ExcelExportPopup.pcf: line 98, column 44
    function valueRange_37 () : java.lang.Object {
      return gw.exportimport.web.ExportMaskUtil.SupportedLocales
    }
    
    // 'value' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function valueRoot_11 () : java.lang.Object {
      return maskSelection
    }
    
    // 'value' attribute on RangeInput (id=Format_Input) at ExcelExportPopup.pcf: line 78, column 66
    function value_20 () : gw.exportimport.web.ExportMaskDataFormat {
      return maskSelection.Format
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at ExcelExportPopup.pcf: line 88, column 46
    function value_27 () : typekey.LanguageType {
      return maskSelection.Language
    }
    
    // 'value' attribute on RangeInput (id=Locale_Input) at ExcelExportPopup.pcf: line 98, column 44
    function value_34 () : typekey.LocaleType {
      return maskSelection.Locale
    }
    
    // 'value' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function value_9 () : gw.exportimport.web.ExportMaskData {
      return maskSelection.MaskData
    }
    
    // 'valueRange' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.exportimport.web.ExportMaskData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Format_Input) at ExcelExportPopup.pcf: line 78, column 66
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.exportimport.web.ExportMaskDataFormat[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Format_Input) at ExcelExportPopup.pcf: line 78, column 66
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at ExcelExportPopup.pcf: line 88, column 46
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at ExcelExportPopup.pcf: line 88, column 46
    function verifyValueRangeIsAllowedType_31 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Locale_Input) at ExcelExportPopup.pcf: line 98, column 44
    function verifyValueRangeIsAllowedType_38 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Locale_Input) at ExcelExportPopup.pcf: line 98, column 44
    function verifyValueRangeIsAllowedType_38 ($$arg :  typekey.LocaleType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Export_Input) at ExcelExportPopup.pcf: line 57, column 60
    function verifyValueRange_14 () : void {
      var __valueRangeArg = gw.exportimport.web.ExportMaskUtil.MaskData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Format_Input) at ExcelExportPopup.pcf: line 78, column 66
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.exportimport.web.ExportMaskUtil.getFormats(maskSelection.MaskData)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at ExcelExportPopup.pcf: line 88, column 46
    function verifyValueRange_32 () : void {
      var __valueRangeArg = gw.exportimport.web.ExportMaskUtil.SupportedLanguages
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Locale_Input) at ExcelExportPopup.pcf: line 98, column 44
    function verifyValueRange_39 () : void {
      var __valueRangeArg = gw.exportimport.web.ExportMaskUtil.SupportedLocales
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_38(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=ExportSynchronouslyButton) at ExcelExportPopup.pcf: line 40, column 54
    function visible_3 () : java.lang.Boolean {
      return not maskSelection.ExportAllData
    }
    
    // 'visible' attribute on ProgressInput (id=ExportProgressBar_Input) at ExcelExportPopup.pcf: line 107, column 49
    function visible_41 () : java.lang.Boolean {
      return waiting and not complete
    }
    
    // 'visible' attribute on ButtonInput (id=DownloadExcelFileButton_Input) at ExcelExportPopup.pcf: line 116, column 33
    function visible_46 () : java.lang.Boolean {
      return complete
    }
    
    // 'visible' attribute on ToolbarButton (id=ExportAsynchronouslyButton) at ExcelExportPopup.pcf: line 46, column 50
    function visible_6 () : java.lang.Boolean {
      return maskSelection.ExportAllData
    }
    
    override property get CurrentLocation () : pcf.ExcelExportPopup {
      return super.CurrentLocation as pcf.ExcelExportPopup
    }
    
    property get asynchronousExporter () : gw.exportimport.AsynchronousExcelExporter {
      return getVariableValue("asynchronousExporter", 0) as gw.exportimport.AsynchronousExcelExporter
    }
    
    property set asynchronousExporter ($arg :  gw.exportimport.AsynchronousExcelExporter) {
      setVariableValue("asynchronousExporter", 0, $arg)
    }
    
    property get complete () : boolean {
      return getVariableValue("complete", 0) as java.lang.Boolean
    }
    
    property set complete ($arg :  boolean) {
      setVariableValue("complete", 0, $arg)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getVariableValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setVariableValue("cpLine", 0, $arg)
    }
    
    property get maskSelection () : gw.exportimport.web.ExportMaskSelection {
      return getVariableValue("maskSelection", 0) as gw.exportimport.web.ExportMaskSelection
    }
    
    property set maskSelection ($arg :  gw.exportimport.web.ExportMaskSelection) {
      setVariableValue("maskSelection", 0, $arg)
    }
    
    property get waiting () : boolean {
      return getVariableValue("waiting", 0) as java.lang.Boolean
    }
    
    property set waiting ($arg :  boolean) {
      setVariableValue("waiting", 0, $arg)
    }
    
    
    function export(asTemplate : boolean) {
      var exportData = ExportDataWebFactory.createExportData(cpLine.Branch, maskSelection)
      if (asTemplate) {
        new ExcelExporter(exportData).export(true)
        return
      }
      asynchronousExporter.initialize(exportData, asTemplate)
      asynchronousExporter.execute()
      complete = false
      waiting = true
    }
    
    function hasValidExportAndFormat() : boolean {
      return maskSelection.Format != null and maskSelection.MaskData != null
    }
    
    
  }
  
  
}