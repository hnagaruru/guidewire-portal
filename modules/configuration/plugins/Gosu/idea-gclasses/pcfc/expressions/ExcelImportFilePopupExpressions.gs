package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/ExcelImportFilePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExcelImportFilePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/ExcelImportFilePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExcelImportFilePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=TestImportButton) at ExcelImportFilePopup.pcf: line 58, column 50
    function action_11 () : void {
      UIHelper.importSynchronously(jobWizardHelper)
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=ImportProgressBar_Input) at ExcelImportFilePopup.pcf: line 79, column 43
    function action_21 () : void {
      UIHelper.importDone(asynchronousImporter, jobWizardHelper)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportButton) at ExcelImportFilePopup.pcf: line 37, column 45
    function action_4 () : void {
      UIHelper.import(asynchronousImporter)
    }
    
    // 'action' attribute on Link (id=ShowChanges) at ExcelImportFilePopup.pcf: line 164, column 64
    function action_64 () : void {
      UIHelper.createDiffTree()
    }
    
    // 'action' attribute on ToolbarButton (id=SaveLogButton) at ExcelImportFilePopup.pcf: line 47, column 44
    function action_8 () : void {
      UIHelper.exportLog()
    }
    
    // 'available' attribute on ToolbarButton (id=ImportButton) at ExcelImportFilePopup.pcf: line 37, column 45
    function available_2 () : java.lang.Boolean {
      return UIHelper.ExcelFile != null or UIHelper.TestPath != null
    }
    
    // 'def' attribute on PanelRef at ExcelImportFilePopup.pcf: line 174, column 57
    function def_onEnter_68 (def :  pcf.DiffTreePanelSet) : void {
      def.onEnter(DisplayKey.get("Web.ExcelImport.Previous"), DisplayKey.get("Web.ExcelImport.Imported"), UIHelper.ImportDiffs)
    }
    
    // 'def' attribute on PanelRef at ExcelImportFilePopup.pcf: line 174, column 57
    function def_refreshVariables_69 (def :  pcf.DiffTreePanelSet) : void {
      def.refreshVariables(DisplayKey.get("Web.ExcelImport.Previous"), DisplayKey.get("Web.ExcelImport.Imported"), UIHelper.ImportDiffs)
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at ExcelImportFilePopup.pcf: line 67, column 43
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      UIHelper.ExcelFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at ExcelImportFilePopup.pcf: line 72, column 45
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      UIHelper.TestPath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ExcelImportFilePopup.pcf: line 21, column 64
    function initialValue_0 () : gw.pcf.exportimport.ExcelImportFilePopupUIHelper {
      return new gw.pcf.exportimport.ExcelImportFilePopupUIHelper(period)
    }
    
    // 'initialValue' attribute on Variable at ExcelImportFilePopup.pcf: line 25, column 57
    function initialValue_1 () : gw.exportimport.AsynchronousExcelImporter {
      return new gw.exportimport.AsynchronousExcelImporter()
    }
    
    // 'label' attribute on TextInput (id=BeansRead_Input) at ExcelImportFilePopup.pcf: line 96, column 44
    function label_26 () : java.lang.Object {
      return DisplayKey.get("Web.ExcelImport.Log.SummaryLog.ReportBeanAction", gw.exportimport.ExportLocaleUtil.lookupEntityTypeDisplayName(UIHelper.SummaryLog.Type), gw.exportimport.validation.BeanAction.Read)
    }
    
    // 'label' attribute on TextInput (id=BeansEdited_Input) at ExcelImportFilePopup.pcf: line 102, column 44
    function label_31 () : java.lang.Object {
      return DisplayKey.get("Web.ExcelImport.Log.SummaryLog.ReportBeanAction", gw.exportimport.ExportLocaleUtil.lookupEntityTypeDisplayName(UIHelper.SummaryLog.Type), gw.exportimport.validation.BeanAction.Edited)
    }
    
    // 'label' attribute on TextInput (id=BeansAdded_Input) at ExcelImportFilePopup.pcf: line 108, column 44
    function label_36 () : java.lang.Object {
      return DisplayKey.get("Web.ExcelImport.Log.SummaryLog.ReportBeanAction", gw.exportimport.ExportLocaleUtil.lookupEntityTypeDisplayName(UIHelper.SummaryLog.Type), gw.exportimport.validation.BeanAction.Added)
    }
    
    // 'label' attribute on TextInput (id=BeansRemoved_Input) at ExcelImportFilePopup.pcf: line 114, column 44
    function label_41 () : java.lang.Object {
      return DisplayKey.get("Web.ExcelImport.Log.SummaryLog.ReportBeanAction", gw.exportimport.ExportLocaleUtil.lookupEntityTypeDisplayName(UIHelper.SummaryLog.Type), gw.exportimport.validation.BeanAction.Removed)
    }
    
    // EditButtons at ExcelImportFilePopup.pcf: line 41, column 36
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'percentage' attribute on ProgressInput (id=ImportProgressBar_Input) at ExcelImportFilePopup.pcf: line 79, column 43
    function percentage_22 () : java.lang.Double {
      return asynchronousImporter.Status
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=ImportButton) at ExcelImportFilePopup.pcf: line 37, column 45
    function showConfirmMessage_5 () : java.lang.Boolean {
      return UIHelper.showConfirmMessageForImportButton()
    }
    
    // 'status' attribute on ProgressInput (id=ImportProgressBar_Input) at ExcelImportFilePopup.pcf: line 79, column 43
    function status_23 () : java.lang.String {
      return asynchronousImporter.StatusMessage
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at ExcelImportFilePopup.pcf: line 67, column 43
    function valueRoot_14 () : java.lang.Object {
      return UIHelper
    }
    
    // 'value' attribute on TextInput (id=BeansRead_Input) at ExcelImportFilePopup.pcf: line 96, column 44
    function valueRoot_28 () : java.lang.Object {
      return UIHelper.SummaryLog
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at ExcelImportFilePopup.pcf: line 67, column 43
    function value_12 () : gw.api.web.WebFile {
      return UIHelper.ExcelFile
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at ExcelImportFilePopup.pcf: line 72, column 45
    function value_16 () : java.lang.String {
      return UIHelper.TestPath
    }
    
    // 'value' attribute on TextInput (id=BeansRead_Input) at ExcelImportFilePopup.pcf: line 96, column 44
    function value_27 () : java.lang.Integer {
      return UIHelper.SummaryLog.BeansRead
    }
    
    // 'value' attribute on TextInput (id=BeansEdited_Input) at ExcelImportFilePopup.pcf: line 102, column 44
    function value_32 () : java.lang.Integer {
      return UIHelper.SummaryLog.BeansEdited
    }
    
    // 'value' attribute on TextInput (id=BeansAdded_Input) at ExcelImportFilePopup.pcf: line 108, column 44
    function value_37 () : java.lang.Integer {
      return UIHelper.SummaryLog.BeansAdded
    }
    
    // 'value' attribute on TextInput (id=BeansRemoved_Input) at ExcelImportFilePopup.pcf: line 114, column 44
    function value_42 () : java.lang.Integer {
      return UIHelper.SummaryLog.BeansRemoved
    }
    
    // 'value' attribute on TextInput (id=ErrorRowCount_Input) at ExcelImportFilePopup.pcf: line 120, column 44
    function value_46 () : java.lang.Integer {
      return UIHelper.NumberOfRowsWithErrors
    }
    
    // 'value' attribute on TextAreaInput (id=FatalErrors_Input) at ExcelImportFilePopup.pcf: line 135, column 66
    function value_51 () : java.lang.String {
      return UIHelper.getFatalErrorMessagesString("")
    }
    
    // 'value' attribute on TextAreaInput (id=Errors_Input) at ExcelImportFilePopup.pcf: line 143, column 69
    function value_55 () : java.lang.String {
      return UIHelper.getErrorMessagesString("")
    }
    
    // 'value' attribute on TextAreaInput (id=Warnings_Input) at ExcelImportFilePopup.pcf: line 151, column 65
    function value_59 () : java.lang.String {
      return UIHelper.getWarningMessagesString("")
    }
    
    // 'visible' attribute on ToolbarButton (id=TestImportButton) at ExcelImportFilePopup.pcf: line 58, column 50
    function visible_10 () : java.lang.Boolean {
      return UIHelper.TestPath != null
    }
    
    // 'visible' attribute on ProgressInput (id=ImportProgressBar_Input) at ExcelImportFilePopup.pcf: line 79, column 43
    function visible_20 () : java.lang.Boolean {
      return UIHelper.Waiting
    }
    
    // 'visible' attribute on ToolbarButton (id=ImportButton) at ExcelImportFilePopup.pcf: line 37, column 45
    function visible_3 () : java.lang.Boolean {
      return !UIHelper.IsImported
    }
    
    // 'visible' attribute on DetailViewPanel (id=LogDV) at ExcelImportFilePopup.pcf: line 86, column 89
    function visible_49 () : java.lang.Boolean {
      return UIHelper.IsImported and not UIHelper.ValidationResult?.HasFatalErrors
    }
    
    // 'visible' attribute on TextAreaInput (id=FatalErrors_Input) at ExcelImportFilePopup.pcf: line 135, column 66
    function visible_50 () : java.lang.Boolean {
      return UIHelper.ValidationResult?.HasFatalErrors
    }
    
    // 'visible' attribute on TextAreaInput (id=Errors_Input) at ExcelImportFilePopup.pcf: line 143, column 69
    function visible_54 () : java.lang.Boolean {
      return UIHelper.ValidationResult?.HasNonFatalErrors
    }
    
    // 'visible' attribute on TextAreaInput (id=Warnings_Input) at ExcelImportFilePopup.pcf: line 151, column 65
    function visible_58 () : java.lang.Boolean {
      return UIHelper.ValidationResult?.hasWarnings()
    }
    
    // 'visible' attribute on Link (id=ShowChanges) at ExcelImportFilePopup.pcf: line 164, column 64
    function visible_63 () : java.lang.Boolean {
      return UIHelper.isShowChangesButtonVisible()
    }
    
    // 'visible' attribute on Label (id=NoDifferencesLabel) at ExcelImportFilePopup.pcf: line 169, column 63
    function visible_65 () : java.lang.Boolean {
      return UIHelper.isNoDifferencesLabelVisible()
    }
    
    // 'visible' attribute on PanelRef at ExcelImportFilePopup.pcf: line 174, column 57
    function visible_67 () : java.lang.Boolean {
      return UIHelper.isDiffTreePanelSetVisible()
    }
    
    // 'visible' attribute on ToolbarButton (id=SaveLogButton) at ExcelImportFilePopup.pcf: line 47, column 44
    function visible_7 () : java.lang.Boolean {
      return UIHelper.IsImported
    }
    
    // 'updateVisible' attribute on EditButtons (id=ReturnButton) at ExcelImportFilePopup.pcf: line 53, column 99
    function visible_9 () : java.lang.Boolean {
      return UIHelper.IsImported and not UIHelper.ValidationResult.HasFatalErrors
    }
    
    override property get CurrentLocation () : pcf.ExcelImportFilePopup {
      return super.CurrentLocation as pcf.ExcelImportFilePopup
    }
    
    property get UIHelper () : gw.pcf.exportimport.ExcelImportFilePopupUIHelper {
      return getVariableValue("UIHelper", 0) as gw.pcf.exportimport.ExcelImportFilePopupUIHelper
    }
    
    property set UIHelper ($arg :  gw.pcf.exportimport.ExcelImportFilePopupUIHelper) {
      setVariableValue("UIHelper", 0, $arg)
    }
    
    property get asynchronousImporter () : gw.exportimport.AsynchronousExcelImporter {
      return getVariableValue("asynchronousImporter", 0) as gw.exportimport.AsynchronousExcelImporter
    }
    
    property set asynchronousImporter ($arg :  gw.exportimport.AsynchronousExcelImporter) {
      setVariableValue("asynchronousImporter", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}