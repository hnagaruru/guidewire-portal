package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleImportDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleImportDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleImportDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleImportDetailsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=ExistingVersion_Cell) at RuleImportDetailsPopup.pcf: line 348, column 63
    function actionAvailable_105 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canViewRule(importTask.getRuleType().getEntityType())
    }
    
    // 'action' attribute on Link (id=CompareVersions) at RuleImportDetailsPopup.pcf: line 338, column 85
    function action_101 () : void {
      navigationSupport.pushRuleComparisonPopup(entry, pageHelper)
    }
    
    // 'action' attribute on TextCell (id=ExistingVersion_Cell) at RuleImportDetailsPopup.pcf: line 348, column 63
    function action_104 () : void {
      pageHelper.actionExistingVersionLink(navigationSupport,entry)
    }
    
    // 'action' attribute on TextCell (id=ImportingVersion_Cell) at RuleImportDetailsPopup.pcf: line 356, column 94
    function action_108 () : void {
      pageHelper.actionImportingVersionLink(navigationSupport,entry,pending)
    }
    
    // 'action' attribute on Link (id=AnotherRuleWithSameNameLink) at RuleImportDetailsPopup.pcf: line 265, column 93
    function action_79 () : void {
      ruleVersionController.pushRulesWithSameNamePopup(entry.ImportedVersion)
    }
    
    // 'action' attribute on Link (id=EditedVersionLink) at RuleImportDetailsPopup.pcf: line 292, column 89
    function action_85 () : void {
      pageHelper.actionEditedVersionLink(navigationSupport, entry, pending)
    }
    
    // 'action' attribute on Link (id=ChooseExistingRadioIcon) at RuleImportDetailsPopup.pcf: line 298, column 88
    function action_88 () : void {
      pageHelper.resolveConflict(entry, TC_EXISTING)
    }
    
    // 'action' attribute on Link (id=ChooseExistingSelectedRadioIcon) at RuleImportDetailsPopup.pcf: line 304, column 88
    function action_90 () : void {
      pageHelper.resolveConflict(entry, TC_EXISTING)
    }
    
    // 'action' attribute on Link (id=ChooseExistingLink) at RuleImportDetailsPopup.pcf: line 310, column 52
    function action_92 () : void {
      pageHelper.resolveConflict(entry, TC_EXISTING)
    }
    
    // 'action' attribute on Link (id=ChooseImportingRadioIcon) at RuleImportDetailsPopup.pcf: line 316, column 89
    function action_94 () : void {
      pageHelper.resolveConflict(entry, TC_IMPORTING)
    }
    
    // 'action' attribute on Link (id=ChooseImportingSelectedRadioIcon) at RuleImportDetailsPopup.pcf: line 322, column 89
    function action_96 () : void {
      pageHelper.resolveConflict(entry, TC_IMPORTING)
    }
    
    // 'action' attribute on Link (id=ChooseImportingLink) at RuleImportDetailsPopup.pcf: line 328, column 52
    function action_98 () : void {
      pageHelper.resolveConflict(entry, TC_IMPORTING)
    }
    
    // 'available' attribute on LinkCell at RuleImportDetailsPopup.pcf: line 280, column 95
    function available_102 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canImportRule(importTask.getRuleType().getEntityType())
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=EntriesIterator) at RuleImportDetailsPopup.pcf: line 233, column 85
    function checkBoxVisible_112 () : java.lang.Boolean {
      return pending
    }
    
    // 'condition' attribute on ToolbarFlag at RuleImportDetailsPopup.pcf: line 240, column 34
    function condition_71 () : java.lang.Boolean {
      return entry.NewHeadVersion != null
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at RuleImportDetailsPopup.pcf: line 247, column 62
    function def_onEnter_72 (def :  pcf.RuleValidationInfoCell_default) : void {
      def.onEnter(entry.NewHeadVersion.Rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at RuleImportDetailsPopup.pcf: line 247, column 62
    function def_onEnter_74 (def :  pcf.RuleValidationInfoCell_uwrule) : void {
      def.onEnter(entry.NewHeadVersion.Rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at RuleImportDetailsPopup.pcf: line 247, column 62
    function def_refreshVariables_73 (def :  pcf.RuleValidationInfoCell_default) : void {
      def.refreshVariables(entry.NewHeadVersion.Rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at RuleImportDetailsPopup.pcf: line 247, column 62
    function def_refreshVariables_75 (def :  pcf.RuleValidationInfoCell_uwrule) : void {
      def.refreshVariables(entry.NewHeadVersion.Rule)
    }
    
    // 'initialValue' attribute on Variable at RuleImportDetailsPopup.pcf: line 237, column 31
    function initialValue_70 () : boolean {
      return !entry.Status.Final
    }
    
    // RowIterator (id=EntriesIterator) at RuleImportDetailsPopup.pcf: line 233, column 85
    function initializeVariables_113 () : void {
        pending = !entry.Status.Final;

    }
    
    // 'label' attribute on Link (id=Name) at RuleImportDetailsPopup.pcf: line 257, column 43
    function label_77 () : java.lang.Object {
      return entry.RuleName
    }
    
    // 'label' attribute on Link (id=Status) at RuleImportDetailsPopup.pcf: line 274, column 55
    function label_80 () : java.lang.Object {
      return entry.Status.Name
    }
    
    // 'label' attribute on Link (id=AvailableActionTextLink) at RuleImportDetailsPopup.pcf: line 283, column 69
    function label_82 () : java.lang.Object {
      return pageHelper.getAvailableActionText(entry)
    }
    
    // 'label' attribute on Link (id=EditedVersionLink) at RuleImportDetailsPopup.pcf: line 292, column 89
    function label_86 () : java.lang.Object {
      return pageHelper.getLabelForEditedVersionLink(navigationSupport, entry)
    }
    
    // 'mode' attribute on ModalCellRef (id=RuleValidationInfo) at RuleImportDetailsPopup.pcf: line 247, column 62
    function mode_76 () : java.lang.Object {
      return navigationSupport.ValidationInfoMode
    }
    
    // 'tooltip' attribute on Link (id=Status) at RuleImportDetailsPopup.pcf: line 274, column 55
    function tooltip_81 () : java.lang.String {
      return entry.Status.Description
    }
    
    // 'value' attribute on TextCell (id=ExistingVersion_Cell) at RuleImportDetailsPopup.pcf: line 348, column 63
    function value_106 () : java.lang.String {
      return pageHelper.getLabelForExistingVersionLink(navigationSupport,entry)
    }
    
    // 'value' attribute on TextCell (id=ImportingVersion_Cell) at RuleImportDetailsPopup.pcf: line 356, column 94
    function value_110 () : java.lang.String {
      return pageHelper.getLabelForImportingVersionLink(navigationSupport,entry)
    }
    
    // 'valueVisible' attribute on TextCell (id=ExistingVersion_Cell) at RuleImportDetailsPopup.pcf: line 348, column 63
    function visible_103 () : java.lang.Boolean {
      return entry.ExistingVersion != null
    }
    
    // 'visible' attribute on Link (id=AnotherRuleWithSameNameLink) at RuleImportDetailsPopup.pcf: line 265, column 93
    function visible_78 () : java.lang.Boolean {
      return !ruleVersionController.isRuleNameUnique(entry.ImportedVersion)
    }
    
    // 'visible' attribute on Link (id=EditedVersionLinkSeparator) at RuleImportDetailsPopup.pcf: line 287, column 89
    function visible_83 () : java.lang.Boolean {
      return entry.Status == RuleImportStatus.TC_EDITEDRESOLVEDCONFLICT
    }
    
    // 'visible' attribute on Link (id=ChooseExistingRadioIcon) at RuleImportDetailsPopup.pcf: line 298, column 88
    function visible_87 () : java.lang.Boolean {
      return entry.Status.Conflict and entry.ChosenSide != TC_EXISTING
    }
    
    // 'visible' attribute on Link (id=ChooseExistingSelectedRadioIcon) at RuleImportDetailsPopup.pcf: line 304, column 88
    function visible_89 () : java.lang.Boolean {
      return entry.Status.Conflict and entry.ChosenSide == TC_EXISTING
    }
    
    // 'visible' attribute on Link (id=ChooseExistingLink) at RuleImportDetailsPopup.pcf: line 310, column 52
    function visible_91 () : java.lang.Boolean {
      return entry.Status.Conflict
    }
    
    // 'visible' attribute on Link (id=ChooseImportingRadioIcon) at RuleImportDetailsPopup.pcf: line 316, column 89
    function visible_93 () : java.lang.Boolean {
      return entry.Status.Conflict and entry.ChosenSide != TC_IMPORTING
    }
    
    // 'visible' attribute on Link (id=ChooseImportingSelectedRadioIcon) at RuleImportDetailsPopup.pcf: line 322, column 89
    function visible_95 () : java.lang.Boolean {
      return entry.Status.Conflict and entry.ChosenSide == TC_IMPORTING
    }
    
    // 'visible' attribute on Link (id=CompareSeparator) at RuleImportDetailsPopup.pcf: line 332, column 85
    function visible_99 () : java.lang.Boolean {
      return entry.Status.Conflict or entry.Status == TC_NOCONFLICT
    }
    
    property get entry () : RuleImportTaskEntry {
      return getIteratedValue(1) as RuleImportTaskEntry
    }
    
    property get pending () : boolean {
      return getVariableValue("pending", 1) as java.lang.Boolean
    }
    
    property set pending ($arg :  boolean) {
      setVariableValue("pending", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleImportDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleImportDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (navigationSupport :  gw.bizrules.pcf.BizRulesPageNavigationSupport, importTask :  RuleImportTask, completed :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ImportAllRemaining) at RuleImportDetailsPopup.pcf: line 196, column 119
    function action_57 () : void {
      RuleImportAllPopup.push(pageHelper, importTask)
    }
    
    // 'action' attribute on AlertBar (id=ImportCompletedAlert) at RuleImportDetailsPopup.pcf: line 45, column 54
    function action_6 () : void {
      navigationSupport.goToRulesListPage(importTask.getRuleType())
    }
    
    // 'action' attribute on ToolbarButton (id=DiscardAllRemaining) at RuleImportDetailsPopup.pcf: line 204, column 119
    function action_61 () : void {
      pageHelper.discardAllRemainingRules(importTask)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportAllRemaining) at RuleImportDetailsPopup.pcf: line 196, column 119
    function action_dest_58 () : pcf.api.Destination {
      return pcf.RuleImportAllPopup.createDestination(pageHelper, importTask)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ImportSelected) at RuleImportDetailsPopup.pcf: line 180, column 119
    function allCheckedRowsAction_52 (CheckedValues :  RuleImportTaskEntry[], CheckedValuesErrors :  java.util.Map) : void {
      pageHelper.importRules(CheckedValues.toList())
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DiscardSelected) at RuleImportDetailsPopup.pcf: line 188, column 119
    function allCheckedRowsAction_54 (CheckedValues :  RuleImportTaskEntry[], CheckedValuesErrors :  java.util.Map) : void {
      pageHelper.discardRules(CheckedValues.toList())
    }
    
    // 'available' attribute on AlertBar (id=ImportCompletedAlert) at RuleImportDetailsPopup.pcf: line 45, column 54
    function available_4 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canViewRule(importTask.getRuleType().getEntityType())
    }
    
    // 'available' attribute on ToolbarButton (id=ImportAllRemaining) at RuleImportDetailsPopup.pcf: line 196, column 119
    function available_55 () : java.lang.Boolean {
      return rulesDisposition.Outstanding > 0 and pageHelper.isAllConflictsResolved(importTask)
    }
    
    // 'available' attribute on ToolbarButton (id=DiscardAllRemaining) at RuleImportDetailsPopup.pcf: line 204, column 119
    function available_59 () : java.lang.Boolean {
      return rulesDisposition.Outstanding > 0
    }
    
    // 'canVisit' attribute on Popup (id=RuleImportDetailsPopup) at RuleImportDetailsPopup.pcf: line 8, column 155
    static function canVisit_115 (completed :  boolean, importTask :  RuleImportTask, navigationSupport :  gw.bizrules.pcf.BizRulesPageNavigationSupport) : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canImportRule(importTask.getRuleType().getEntityType())
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=DiscardAllRemaining) at RuleImportDetailsPopup.pcf: line 204, column 119
    function confirmMessage_62 () : java.lang.String {
      return DisplayKey.get('BizRules.RuleImportDetailsPopup.DiscardAllRemaining.Confirmation', rulesDisposition.Outstanding)
    }
    
    // 'filter' attribute on ToolbarFilterOption at RuleImportDetailsPopup.pcf: line 210, column 93
    function filter_63 () : gw.api.filters.IFilter {
      return gw.bizrules.pcf.ImportingRulesDisposition.createOutstandingFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at RuleImportDetailsPopup.pcf: line 212, column 93
    function filter_64 () : gw.api.filters.IFilter {
      return gw.bizrules.pcf.ImportingRulesDisposition.createAllImportedFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at RuleImportDetailsPopup.pcf: line 214, column 102
    function filter_65 () : gw.api.filters.IFilter {
      return gw.bizrules.pcf.ImportingRulesDisposition.createFilterByStatus(TC_DISCARDED)
    }
    
    // 'filter' attribute on ToolbarFilterOption at RuleImportDetailsPopup.pcf: line 216, column 91
    function filter_66 () : gw.api.filters.IFilter {
      return gw.bizrules.pcf.ImportingRulesDisposition.createAllEditedFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at RuleImportDetailsPopup.pcf: line 218, column 93
    function filter_67 () : gw.api.filters.IFilter {
      return gw.bizrules.pcf.ImportingRulesDisposition.createAllNoActionFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at RuleImportDetailsPopup.pcf: line 221, column 37
    function filter_68 () : gw.api.filters.IFilter {
      return new gw.api.util.CoreFilters.AllFilter()
    }
    
    // 'initialValue' attribute on Variable at RuleImportDetailsPopup.pcf: line 24, column 57
    function initialValue_0 () : gw.bizrules.pcf.ImportingRulesDisposition {
      return gw.bizrules.pcf.ImportingRulesDisposition.create(navigationSupport.VersionController.ExportImportController, importTask)
    }
    
    // 'initialValue' attribute on Variable at RuleImportDetailsPopup.pcf: line 28, column 58
    function initialValue_1 () : gw.bizrules.pcf.RuleExportImportPageHelper {
      return new gw.bizrules.pcf.RuleExportImportPageHelper(navigationSupport.VersionController.ExportImportController)
    }
    
    // 'initialValue' attribute on Variable at RuleImportDetailsPopup.pcf: line 32, column 53
    function initialValue_2 () : gw.bizrules.pcf.RuleVersionController {
      return new gw.bizrules.pcf.RuleVersionController(navigationSupport)
    }
    
    // 'initialValue' attribute on Variable at RuleImportDetailsPopup.pcf: line 37, column 30
    function initialValue_3 () : java.lang.Void {
      pageHelper.onImportDetailsPopupRefresh(importTask); return null
    }
    
    // 'label' attribute on AlertBar (id=ImportCompletedAlert) at RuleImportDetailsPopup.pcf: line 45, column 54
    function label_7 () : java.lang.Object {
      return gw.bizrules.pcf.RulePermissionUIHelper.canViewRule(importTask.getRuleType().getEntityType()) ? DisplayKey.get("BizRules.RuleImportDetailsPopup.Alert.ImportCompleted.WithReturnToRules"): DisplayKey.get("BizRules.RuleImportDetailsPopup.Alert.ImportCompleted")
    }
    
    // 'sortBy' attribute on LinkCell (id=NameContainer) at RuleImportDetailsPopup.pcf: line 254, column 31
    function sortValue_69 (entry :  RuleImportTaskEntry) : java.lang.Object {
      return entry.RuleName
    }
    
    // 'title' attribute on TitleBar at RuleImportDetailsPopup.pcf: line 57, column 230
    function title_11 () : java.lang.String {
      return rulesDisposition.Total == 1 ? DisplayKey.get('BizRules.RuleImportDetailsPopup.Disposition', rulesDisposition.Total) : DisplayKey.get('BizRules.RuleImportDetailsPopup.DispositionPlural', rulesDisposition.Total)
    }
    
    // 'title' attribute on Popup (id=RuleImportDetailsPopup) at RuleImportDetailsPopup.pcf: line 8, column 155
    static function title_116 (completed :  boolean, importTask :  RuleImportTask, navigationSupport :  gw.bizrules.pcf.BizRulesPageNavigationSupport) : java.lang.Object {
      return completed ? DisplayKey.get('BizRules.RuleImportDetailsPopup.ReviewImport') : DisplayKey.get('BizRules.RuleImportDetailsPopup.CompleteImport')
    }
    
    // 'value' attribute on TextCell (id=DiscardedHeader_Cell) at RuleImportDetailsPopup.pcf: line 77, column 66
    function valueRoot_15 () : java.lang.Object {
      return RuleImportStatus.TC_DISCARDED
    }
    
    // 'value' attribute on TextCell (id=NoActionHeader_Cell) at RuleImportDetailsPopup.pcf: line 85, column 58
    function valueRoot_18 () : java.lang.Object {
      return RuleImportStatus.TC_NOACTION
    }
    
    // 'value' attribute on TextCell (id=NewCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 94, column 60
    function valueRoot_21 () : java.lang.Object {
      return RuleImportStatus.TC_NEW
    }
    
    // 'value' attribute on TextCell (id=NoConflictCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 99, column 67
    function valueRoot_24 () : java.lang.Object {
      return RuleImportStatus.TC_NOCONFLICT
    }
    
    // 'value' attribute on TextCell (id=DeployedCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 104, column 65
    function valueRoot_27 () : java.lang.Object {
      return RuleImportStatus.TC_DEPLOYED
    }
    
    // 'value' attribute on TextCell (id=ConflictCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 109, column 65
    function valueRoot_30 () : java.lang.Object {
      return RuleImportStatus.TC_CONFLICT
    }
    
    // 'value' attribute on TextCell (id=ConflictCount_Cell) at RuleImportDetailsPopup.pcf: line 143, column 46
    function valueRoot_39 () : java.lang.Object {
      return rulesDisposition
    }
    
    // 'value' attribute on TextInput (id=SourceName_Input) at RuleImportDetailsPopup.pcf: line 52, column 44
    function valueRoot_9 () : java.lang.Object {
      return importTask
    }
    
    // 'value' attribute on RowIterator (id=EntriesIterator) at RuleImportDetailsPopup.pcf: line 233, column 85
    function value_114 () : gw.api.database.IQueryBeanResult<RuleImportTaskEntry> {
      return navigationSupport.VersionController.ExportImportController.createImportTaskEntriesQuery(importTask).select()
    }
    
    // 'value' attribute on TextCell (id=OutstandingCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 69, column 179
    function value_12 () : java.lang.String {
      return DisplayKey.get('BizRules.RuleImportDetailsPopup.StatusWithCount', DisplayKey.get('BizRules.Import.Disposition.Outstanding'), rulesDisposition.Outstanding)
    }
    
    // 'value' attribute on TextCell (id=DiscardedHeader_Cell) at RuleImportDetailsPopup.pcf: line 77, column 66
    function value_14 () : java.lang.String {
      return RuleImportStatus.TC_DISCARDED.DisplayName
    }
    
    // 'value' attribute on TextCell (id=NoActionHeader_Cell) at RuleImportDetailsPopup.pcf: line 85, column 58
    function value_17 () : java.lang.String {
      return RuleImportStatus.TC_NOACTION.Name
    }
    
    // 'value' attribute on TextCell (id=NewCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 94, column 60
    function value_20 () : java.lang.String {
      return RuleImportStatus.TC_NEW.DisplayName
    }
    
    // 'value' attribute on TextCell (id=NoConflictCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 99, column 67
    function value_23 () : java.lang.String {
      return RuleImportStatus.TC_NOCONFLICT.DisplayName
    }
    
    // 'value' attribute on TextCell (id=DeployedCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 104, column 65
    function value_26 () : java.lang.String {
      return RuleImportStatus.TC_DEPLOYED.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ConflictCountHeader_Cell) at RuleImportDetailsPopup.pcf: line 109, column 65
    function value_29 () : java.lang.String {
      return RuleImportStatus.TC_CONFLICT.DisplayName
    }
    
    // 'value' attribute on TextCell (id=NewCount_Cell) at RuleImportDetailsPopup.pcf: line 128, column 46
    function value_32 () : java.lang.Integer {
      return rulesDisposition.getRulesWithStatus(TC_NEW)
    }
    
    // 'value' attribute on TextCell (id=NoConflictCount_Cell) at RuleImportDetailsPopup.pcf: line 133, column 46
    function value_34 () : java.lang.Integer {
      return rulesDisposition.getRulesWithStatus(TC_NOCONFLICT)
    }
    
    // 'value' attribute on TextCell (id=DeployedCount_Cell) at RuleImportDetailsPopup.pcf: line 138, column 46
    function value_36 () : java.lang.Integer {
      return rulesDisposition.getRulesWithStatus(TC_DEPLOYED)
    }
    
    // 'value' attribute on TextCell (id=ConflictCount_Cell) at RuleImportDetailsPopup.pcf: line 143, column 46
    function value_38 () : java.lang.Integer {
      return rulesDisposition.AllConflict
    }
    
    // 'value' attribute on TextCell (id=ImportedCount_Cell) at RuleImportDetailsPopup.pcf: line 149, column 46
    function value_41 () : java.lang.Integer {
      return rulesDisposition.AllImported
    }
    
    // 'value' attribute on TextCell (id=DiscardedCount_Cell) at RuleImportDetailsPopup.pcf: line 154, column 46
    function value_44 () : java.lang.Integer {
      return rulesDisposition.getRulesWithStatus(TC_DISCARDED)
    }
    
    // 'value' attribute on TextCell (id=EditedCount_Cell) at RuleImportDetailsPopup.pcf: line 159, column 46
    function value_46 () : java.lang.Integer {
      return rulesDisposition.getRulesWithStatus(TC_IMPORTEDEDITEDCONFLICT)
    }
    
    // 'value' attribute on TextCell (id=NoActionCount_Cell) at RuleImportDetailsPopup.pcf: line 164, column 46
    function value_48 () : java.lang.Integer {
      return rulesDisposition.AllNoAction
    }
    
    // 'value' attribute on TextInput (id=SourceName_Input) at RuleImportDetailsPopup.pcf: line 52, column 44
    function value_8 () : java.lang.String {
      return importTask.SourceName
    }
    
    // 'visible' attribute on AlertBar (id=ImportCompletedAlert) at RuleImportDetailsPopup.pcf: line 45, column 54
    function visible_5 () : java.lang.Boolean {
      return rulesDisposition.Outstanding == 0
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=ImportSelected) at RuleImportDetailsPopup.pcf: line 180, column 119
    function visible_51 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canImportRule(importTask.getRuleType().getEntityType())
    }
    
    override property get CurrentLocation () : pcf.RuleImportDetailsPopup {
      return super.CurrentLocation as pcf.RuleImportDetailsPopup
    }
    
    property get completed () : boolean {
      return getVariableValue("completed", 0) as java.lang.Boolean
    }
    
    property set completed ($arg :  boolean) {
      setVariableValue("completed", 0, $arg)
    }
    
    property get ignore () : java.lang.Void {
      return getVariableValue("ignore", 0) as java.lang.Void
    }
    
    property set ignore ($arg :  java.lang.Void) {
      setVariableValue("ignore", 0, $arg)
    }
    
    property get importTask () : RuleImportTask {
      return getVariableValue("importTask", 0) as RuleImportTask
    }
    
    property set importTask ($arg :  RuleImportTask) {
      setVariableValue("importTask", 0, $arg)
    }
    
    property get navigationSupport () : gw.bizrules.pcf.BizRulesPageNavigationSupport {
      return getVariableValue("navigationSupport", 0) as gw.bizrules.pcf.BizRulesPageNavigationSupport
    }
    
    property set navigationSupport ($arg :  gw.bizrules.pcf.BizRulesPageNavigationSupport) {
      setVariableValue("navigationSupport", 0, $arg)
    }
    
    property get pageHelper () : gw.bizrules.pcf.RuleExportImportPageHelper {
      return getVariableValue("pageHelper", 0) as gw.bizrules.pcf.RuleExportImportPageHelper
    }
    
    property set pageHelper ($arg :  gw.bizrules.pcf.RuleExportImportPageHelper) {
      setVariableValue("pageHelper", 0, $arg)
    }
    
    property get ruleVersionController () : gw.bizrules.pcf.RuleVersionController {
      return getVariableValue("ruleVersionController", 0) as gw.bizrules.pcf.RuleVersionController
    }
    
    property set ruleVersionController ($arg :  gw.bizrules.pcf.RuleVersionController) {
      setVariableValue("ruleVersionController", 0, $arg)
    }
    
    property get rulesDisposition () : gw.bizrules.pcf.ImportingRulesDisposition {
      return getVariableValue("rulesDisposition", 0) as gw.bizrules.pcf.ImportingRulesDisposition
    }
    
    property set rulesDisposition ($arg :  gw.bizrules.pcf.ImportingRulesDisposition) {
      setVariableValue("rulesDisposition", 0, $arg)
    }
    
    
  }
  
  
}