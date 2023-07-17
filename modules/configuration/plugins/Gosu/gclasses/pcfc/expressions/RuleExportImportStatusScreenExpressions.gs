package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleExportImportStatusScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleExportImportStatusScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleExportImportStatusScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RuleExportImportStatusScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 184, column 54
    function actionAvailable_64 () : java.lang.Boolean {
      return taskStatus.FailureReason != null
    }
    
    // 'action' attribute on TextCell (id=Rules_Cell) at RuleExportImportStatusScreen.pcf: line 168, column 51
    function action_56 () : void {
      RuleExportDetailsPopup.push(navigationSupport, exportTask)
    }
    
    // 'action' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 184, column 54
    function action_62 () : void {
      RuleExportImportFailurePopup.push(taskStatus.FailureReason)
    }
    
    // 'action' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 196, column 122
    function action_70 () : void {
      navigationSupport.VersionController.ExportImportController.requestExportImportTaskTermination(exportTask)
    }
    
    // 'action' attribute on Link (id=Download) at RuleExportImportStatusScreen.pcf: line 204, column 49
    function action_73 () : void {
      navigationSupport.VersionController.ExportImportController.sendExportedRulesToWebClient(exportTask)
    }
    
    // 'action' attribute on TextCell (id=Rules_Cell) at RuleExportImportStatusScreen.pcf: line 168, column 51
    function action_dest_57 () : pcf.api.Destination {
      return pcf.RuleExportDetailsPopup.createDestination(navigationSupport, exportTask)
    }
    
    // 'action' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 184, column 54
    function action_dest_63 () : pcf.api.Destination {
      return pcf.RuleExportImportFailurePopup.createDestination(taskStatus.FailureReason)
    }
    
    // 'available' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 196, column 122
    function available_68 () : java.lang.Boolean {
      return exportTask.StartedBy == User.util.CurrentUser
    }
    
    // 'confirmMessage' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 196, column 122
    function confirmMessage_71 () : java.lang.String {
      return DisplayKey.get('BizRules.RuleExportImportStatusScreen.Export.CancelConfirmation', exportedRulesCountAsString)
    }
    
    // 'initialValue' attribute on Variable at RuleExportImportStatusScreen.pcf: line 131, column 71
    function initialValue_45 () : gw.bizrules.management.RuleExportImportTaskStatus {
      return gw.bizrules.management.RuleExportImportTaskStatus.of(navigationSupport.VersionController.ExportImportController, exportTask)
    }
    
    // 'initialValue' attribute on Variable at RuleExportImportStatusScreen.pcf: line 135, column 38
    function initialValue_46 () : java.lang.String {
      return navigationSupport.VersionController.ExportImportController.createExportTaskEntriesQuery(exportTask).select().Count as String
    }
    
    // RowIterator at RuleExportImportStatusScreen.pcf: line 127, column 78
    function initializeVariables_74 () : void {
        taskStatus = gw.bizrules.management.RuleExportImportTaskStatus.of(navigationSupport.VersionController.ExportImportController, exportTask);
  exportedRulesCountAsString = navigationSupport.VersionController.ExportImportController.createExportTaskEntriesQuery(exportTask).select().Count as String;

    }
    
    // 'percentage' attribute on BarCell (id=Progress_Cell) at RuleExportImportStatusScreen.pcf: line 175, column 69
    function percentage_61 () : java.lang.Double {
      return taskStatus.ProgressPercentage
    }
    
    // 'value' attribute on TextCell (id=StartedBy_Cell) at RuleExportImportStatusScreen.pcf: line 143, column 57
    function valueRoot_48 () : java.lang.Object {
      return exportTask.StartedBy
    }
    
    // 'value' attribute on DateCell (id=Created_Cell) at RuleExportImportStatusScreen.pcf: line 153, column 45
    function valueRoot_51 () : java.lang.Object {
      return exportTask
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 184, column 54
    function valueRoot_66 () : java.lang.Object {
      return taskStatus.Status
    }
    
    // 'value' attribute on TextCell (id=StartedBy_Cell) at RuleExportImportStatusScreen.pcf: line 143, column 57
    function value_47 () : java.lang.String {
      return exportTask.StartedBy.DisplayName
    }
    
    // 'value' attribute on DateCell (id=Created_Cell) at RuleExportImportStatusScreen.pcf: line 153, column 45
    function value_50 () : java.util.Date {
      return exportTask.StartTime
    }
    
    // 'value' attribute on TypeKeyCell (id=RuleType_Cell) at RuleExportImportStatusScreen.pcf: line 160, column 41
    function value_53 () : typekey.Rule {
      return exportTask.RuleType
    }
    
    // 'value' attribute on TextCell (id=Rules_Cell) at RuleExportImportStatusScreen.pcf: line 168, column 51
    function value_58 () : java.lang.String {
      return exportedRulesCountAsString
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 184, column 54
    function value_65 () : java.lang.String {
      return taskStatus.Status.DisplayName
    }
    
    // 'valueVisible' attribute on BarCell (id=Progress_Cell) at RuleExportImportStatusScreen.pcf: line 175, column 69
    function visible_60 () : java.lang.Boolean {
      return taskStatus.ProgressPercentage >= 0
    }
    
    // 'visible' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 196, column 122
    function visible_69 () : java.lang.Boolean {
      return taskStatus.Status == gw.bizrules.management.RuleExportImportTaskStatus.StatusType.IN_PROGRESS
    }
    
    // 'visible' attribute on Link (id=Download) at RuleExportImportStatusScreen.pcf: line 204, column 49
    function visible_72 () : java.lang.Boolean {
      return exportTask.hasData()
    }
    
    property get exportTask () : RuleExportTask {
      return getIteratedValue(1) as RuleExportTask
    }
    
    property get exportedRulesCountAsString () : java.lang.String {
      return getVariableValue("exportedRulesCountAsString", 1) as java.lang.String
    }
    
    property set exportedRulesCountAsString ($arg :  java.lang.String) {
      setVariableValue("exportedRulesCountAsString", 1, $arg)
    }
    
    property get taskStatus () : gw.bizrules.management.RuleExportImportTaskStatus {
      return getVariableValue("taskStatus", 1) as gw.bizrules.management.RuleExportImportTaskStatus
    }
    
    property set taskStatus ($arg :  gw.bizrules.management.RuleExportImportTaskStatus) {
      setVariableValue("taskStatus", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleExportImportStatusScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleExportImportStatusScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 89, column 54
    function actionAvailable_26 () : java.lang.Boolean {
      return taskStatus.FailureReason != null
    }
    
    // 'action' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 89, column 54
    function action_24 () : void {
      RuleExportImportFailurePopup.push(taskStatus.FailureReason)
    }
    
    // 'action' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 101, column 122
    function action_33 () : void {
      navigationSupport.VersionController.ExportImportController.requestExportImportTaskTermination(importTask)
    }
    
    // 'action' attribute on Link (id=ImportDetails) at RuleExportImportStatusScreen.pcf: line 108, column 168
    function action_36 () : void {
      RuleImportDetailsPopup.push(navigationSupport, importTask, taskStatus.Status == gw.bizrules.management.RuleExportImportTaskStatus.StatusType.COMPLETED)
    }
    
    // 'action' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 89, column 54
    function action_dest_25 () : pcf.api.Destination {
      return pcf.RuleExportImportFailurePopup.createDestination(taskStatus.FailureReason)
    }
    
    // 'action' attribute on Link (id=ImportDetails) at RuleExportImportStatusScreen.pcf: line 108, column 168
    function action_dest_37 () : pcf.api.Destination {
      return pcf.RuleImportDetailsPopup.createDestination(navigationSupport, importTask, taskStatus.Status == gw.bizrules.management.RuleExportImportTaskStatus.StatusType.COMPLETED)
    }
    
    // 'available' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 89, column 54
    function available_23 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canImportRule(importTask.getRuleType().getEntityType())
    }
    
    // 'available' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 101, column 122
    function available_31 () : java.lang.Boolean {
      return importTask.StartedBy == User.util.CurrentUser
    }
    
    // 'confirmMessage' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 101, column 122
    function confirmMessage_34 () : java.lang.String {
      return DisplayKey.get('BizRules.RuleExportImportStatusScreen.Import.CancelConfirmation', importTask.SourceName)
    }
    
    // 'initialValue' attribute on Variable at RuleExportImportStatusScreen.pcf: line 40, column 71
    function initialValue_8 () : gw.bizrules.management.RuleExportImportTaskStatus {
      return gw.bizrules.management.RuleExportImportTaskStatus.of(navigationSupport.VersionController.ExportImportController, importTask)
    }
    
    // RowIterator at RuleExportImportStatusScreen.pcf: line 36, column 78
    function initializeVariables_40 () : void {
        taskStatus = gw.bizrules.management.RuleExportImportTaskStatus.of(navigationSupport.VersionController.ExportImportController, importTask);

    }
    
    // 'label' attribute on Link (id=ImportDetails) at RuleExportImportStatusScreen.pcf: line 108, column 168
    function label_38 () : java.lang.Object {
      return taskStatus.Status == gw.bizrules.management.RuleExportImportTaskStatus.StatusType.COMPLETED ? DisplayKey.get('BizRules.RuleExportImportStatusScreen.Review') : DisplayKey.get('BizRules.RuleExportImportStatusScreen.CompleteImport') 
    }
    
    // 'percentage' attribute on BarCell (id=Progress_Cell) at RuleExportImportStatusScreen.pcf: line 78, column 69
    function percentage_22 () : java.lang.Double {
      return taskStatus.ProgressPercentage
    }
    
    // 'tooltip' attribute on Link (id=ImportDetails) at RuleExportImportStatusScreen.pcf: line 108, column 168
    function tooltip_39 () : java.lang.String {
      return taskStatus.Status == gw.bizrules.management.RuleExportImportTaskStatus.StatusType.COMPLETED ? DisplayKey.get('BizRules.RuleExportImportStatusScreen.ReviewTooltip') : DisplayKey.get('BizRules.RuleExportImportStatusScreen.CompleteImportTooltip') 
    }
    
    // 'value' attribute on TextCell (id=StartedBy_Cell) at RuleExportImportStatusScreen.pcf: line 48, column 57
    function valueRoot_10 () : java.lang.Object {
      return importTask.StartedBy
    }
    
    // 'value' attribute on DateCell (id=Created_Cell) at RuleExportImportStatusScreen.pcf: line 58, column 45
    function valueRoot_13 () : java.lang.Object {
      return importTask
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 89, column 54
    function valueRoot_28 () : java.lang.Object {
      return taskStatus.Status
    }
    
    // 'value' attribute on DateCell (id=Created_Cell) at RuleExportImportStatusScreen.pcf: line 58, column 45
    function value_12 () : java.util.Date {
      return importTask.StartTime
    }
    
    // 'value' attribute on TypeKeyCell (id=RuleType_Cell) at RuleExportImportStatusScreen.pcf: line 65, column 41
    function value_15 () : typekey.Rule {
      return importTask.RuleType
    }
    
    // 'value' attribute on TextCell (id=SourceName_Cell) at RuleExportImportStatusScreen.pcf: line 71, column 46
    function value_18 () : java.lang.String {
      return importTask.SourceName
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at RuleExportImportStatusScreen.pcf: line 89, column 54
    function value_27 () : java.lang.String {
      return taskStatus.Status.DisplayName
    }
    
    // 'value' attribute on TextCell (id=StartedBy_Cell) at RuleExportImportStatusScreen.pcf: line 48, column 57
    function value_9 () : java.lang.String {
      return importTask.StartedBy.DisplayName
    }
    
    // 'valueVisible' attribute on BarCell (id=Progress_Cell) at RuleExportImportStatusScreen.pcf: line 78, column 69
    function visible_21 () : java.lang.Boolean {
      return taskStatus.ProgressPercentage >= 0
    }
    
    // 'visible' attribute on Link (id=Cancel) at RuleExportImportStatusScreen.pcf: line 101, column 122
    function visible_32 () : java.lang.Boolean {
      return taskStatus.Status == gw.bizrules.management.RuleExportImportTaskStatus.StatusType.IN_PROGRESS
    }
    
    // 'visible' attribute on Link (id=ImportDetails) at RuleExportImportStatusScreen.pcf: line 108, column 168
    function visible_35 () : java.lang.Boolean {
      return importTask.BatchProcessCompleted != null and gw.bizrules.pcf.RulePermissionUIHelper.canImportRule(importTask.getRuleType().getEntityType())
    }
    
    property get importTask () : RuleImportTask {
      return getIteratedValue(1) as RuleImportTask
    }
    
    property get taskStatus () : gw.bizrules.management.RuleExportImportTaskStatus {
      return getVariableValue("taskStatus", 1) as gw.bizrules.management.RuleExportImportTaskStatus
    }
    
    property set taskStatus ($arg :  gw.bizrules.management.RuleExportImportTaskStatus) {
      setVariableValue("taskStatus", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleExportImportStatusScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleExportImportStatusScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Import) at RuleExportImportStatusScreen.pcf: line 16, column 75
    function action_1 () : void {
      StartRuleImportPopup.push(navigationSupport)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at RuleExportImportStatusScreen.pcf: line 22, column 91
    function action_3 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=Import) at RuleExportImportStatusScreen.pcf: line 16, column 75
    function action_dest_2 () : pcf.api.Destination {
      return pcf.StartRuleImportPopup.createDestination(navigationSupport)
    }
    
    // 'sortBy' attribute on TextCell (id=StartedBy_Cell) at RuleExportImportStatusScreen.pcf: line 48, column 57
    function sortValue_4 (importTask :  RuleImportTask) : java.lang.Object {
      return importTask.StartedBy
    }
    
    // 'sortBy' attribute on TextCell (id=StartedBy_Cell) at RuleExportImportStatusScreen.pcf: line 143, column 57
    function sortValue_42 (exportTask :  RuleExportTask) : java.lang.Object {
      return exportTask.StartedBy
    }
    
    // 'value' attribute on DateCell (id=Created_Cell) at RuleExportImportStatusScreen.pcf: line 153, column 45
    function sortValue_43 (exportTask :  RuleExportTask) : java.lang.Object {
      return exportTask.StartTime
    }
    
    // 'value' attribute on TypeKeyCell (id=RuleType_Cell) at RuleExportImportStatusScreen.pcf: line 160, column 41
    function sortValue_44 (exportTask :  RuleExportTask) : java.lang.Object {
      return exportTask.RuleType
    }
    
    // 'value' attribute on DateCell (id=Created_Cell) at RuleExportImportStatusScreen.pcf: line 58, column 45
    function sortValue_5 (importTask :  RuleImportTask) : java.lang.Object {
      return importTask.StartTime
    }
    
    // 'value' attribute on TypeKeyCell (id=RuleType_Cell) at RuleExportImportStatusScreen.pcf: line 65, column 41
    function sortValue_6 (importTask :  RuleImportTask) : java.lang.Object {
      return importTask.RuleType
    }
    
    // 'value' attribute on TextCell (id=SourceName_Cell) at RuleExportImportStatusScreen.pcf: line 71, column 46
    function sortValue_7 (importTask :  RuleImportTask) : java.lang.Object {
      return importTask.SourceName
    }
    
    // 'value' attribute on RowIterator at RuleExportImportStatusScreen.pcf: line 36, column 78
    function value_41 () : gw.api.database.IQueryBeanResult<RuleImportTask> {
      return navigationSupport.VersionController.ExportImportController.createImportTasksQuery().select()
    }
    
    // 'value' attribute on RowIterator at RuleExportImportStatusScreen.pcf: line 127, column 78
    function value_75 () : gw.api.database.IQueryBeanResult<RuleExportTask> {
      return navigationSupport.VersionController.ExportImportController.createExportTasksQuery().select()
    }
    
    // 'visible' attribute on ToolbarButton (id=Import) at RuleExportImportStatusScreen.pcf: line 16, column 75
    function visible_0 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canImportRule()
    }
    
    // 'visible' attribute on PanelRef at RuleExportImportStatusScreen.pcf: line 115, column 70
    function visible_76 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canViewRule()
    }
    
    property get navigationSupport () : gw.bizrules.pcf.BizRulesPageNavigationSupport {
      return getRequireValue("navigationSupport", 0) as gw.bizrules.pcf.BizRulesPageNavigationSupport
    }
    
    property set navigationSupport ($arg :  gw.bizrules.pcf.BizRulesPageNavigationSupport) {
      setRequireValue("navigationSupport", 0, $arg)
    }
    
    
  }
  
  
}