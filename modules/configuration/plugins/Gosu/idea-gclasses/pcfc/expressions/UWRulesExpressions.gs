package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRulesExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at UWRules.pcf: line 136, column 36
    function action_47 () : void {
      UWRuleDetail.go(helper.getHead(helper.RuleQueryResults.getRuleVersion(rule)))
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at UWRules.pcf: line 136, column 36
    function action_dest_48 () : pcf.api.Destination {
      return pcf.UWRuleDetail.createDestination(helper.getHead(helper.RuleQueryResults.getRuleVersion(rule)))
    }
    
    // 'def' attribute on ModalCellRef (id=RuleExecutionInfo) at UWRules.pcf: line 129, column 92
    function def_onEnter_42 (def :  pcf.RuleExecutionInfoCell_default) : void {
      def.onEnter(helper.RuleQueryResults.getRuleVersion(rule), helper.VersionController)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleExecutionInfo) at UWRules.pcf: line 129, column 92
    function def_onEnter_44 (def :  pcf.RuleExecutionInfoCell_uwrule) : void {
      def.onEnter(helper.RuleQueryResults.getRuleVersion(rule), helper.VersionController)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at UWRules.pcf: line 154, column 93
    function def_onEnter_56 (def :  pcf.RuleValidationInfoCell_default) : void {
      def.onEnter(rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at UWRules.pcf: line 154, column 93
    function def_onEnter_58 (def :  pcf.RuleValidationInfoCell_uwrule) : void {
      def.onEnter(rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleExecutionInfo) at UWRules.pcf: line 129, column 92
    function def_refreshVariables_43 (def :  pcf.RuleExecutionInfoCell_default) : void {
      def.refreshVariables(helper.RuleQueryResults.getRuleVersion(rule), helper.VersionController)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleExecutionInfo) at UWRules.pcf: line 129, column 92
    function def_refreshVariables_45 (def :  pcf.RuleExecutionInfoCell_uwrule) : void {
      def.refreshVariables(helper.RuleQueryResults.getRuleVersion(rule), helper.VersionController)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at UWRules.pcf: line 154, column 93
    function def_refreshVariables_57 (def :  pcf.RuleValidationInfoCell_default) : void {
      def.refreshVariables(rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at UWRules.pcf: line 154, column 93
    function def_refreshVariables_59 (def :  pcf.RuleValidationInfoCell_uwrule) : void {
      def.refreshVariables(rule)
    }
    
    // 'mode' attribute on ModalCellRef (id=RuleExecutionInfo) at UWRules.pcf: line 129, column 92
    function mode_46 () : java.lang.Object {
      return gw.bizrules.PCBizRulesNavigationSupport.Instance.ExecutionInfoMode
    }
    
    // 'mode' attribute on ModalCellRef (id=RuleValidationInfo) at UWRules.pcf: line 154, column 93
    function mode_60 () : java.lang.Object {
      return gw.bizrules.PCBizRulesNavigationSupport.Instance.ValidationInfoMode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWRules.pcf: line 136, column 36
    function valueRoot_50 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TypeKeyCell (id=BlockingPoint_Cell) at UWRules.pcf: line 181, column 59
    function valueRoot_71 () : java.lang.Object {
      return rule.UWIssueType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWRules.pcf: line 136, column 36
    function value_49 () : java.lang.String {
      return rule.Name
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at UWRules.pcf: line 142, column 37
    function value_52 () : String {
      return helper.RuleQueryResults.getStatusText(rule)
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at UWRules.pcf: line 148, column 37
    function value_54 () : String {
      return helper.RuleQueryResults.getVersionText(rule)
    }
    
    // 'value' attribute on TextAreaCell (id=PolicyTransactions_Cell) at UWRules.pcf: line 159, column 81
    function value_61 () : java.lang.String {
      return helper.join(rule.PolicyTransactions*.Job*.DisplayName)
    }
    
    // 'value' attribute on TextAreaCell (id=PolicyLine_Cell) at UWRules.pcf: line 164, column 85
    function value_63 () : java.lang.String {
      return helper.join(rule.LinesOfBusiness*.PolicyLine*.DisplayName)
    }
    
    // 'value' attribute on TextAreaCell (id=Jurisdictions_Cell) at UWRules.pcf: line 169, column 85
    function value_65 () : java.lang.String {
      return helper.join(rule.Jurisdictions*.Jurisdiction*.DisplayName)
    }
    
    // 'value' attribute on TypeKeyCell (id=CheckingSet_Cell) at UWRules.pcf: line 175, column 57
    function value_67 () : typekey.TriggeringPointKey {
      return rule.TriggeringPointKey
    }
    
    // 'value' attribute on TypeKeyCell (id=BlockingPoint_Cell) at UWRules.pcf: line 181, column 59
    function value_70 () : typekey.UWIssueBlockingPoint {
      return rule.UWIssueType.BlockingPoint
    }
    
    property get rule () : UWRule {
      return getIteratedValue(2) as UWRule
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends UWRulesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Filter) at UWRules.pcf: line 103, column 77
    function action_29 () : void {
      gw.api.util.SearchUtil.search()
    }
    
    // 'action' attribute on ToolbarButton (id=Clear) at UWRules.pcf: line 107, column 55
    function action_30 () : void {
      filterCriteria.clear(); gw.api.util.SearchUtil.search()
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at UWRules.pcf: line 94, column 45
    function def_onEnter_27 (def :  pcf.UWRuleFilterCriteriaDV) : void {
      def.onEnter(filterCriteria)
    }
    
    // 'def' attribute on PanelRef at UWRules.pcf: line 98, column 44
    function def_onEnter_32 (def :  pcf.EmptyDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at UWRules.pcf: line 94, column 45
    function def_refreshVariables_28 (def :  pcf.UWRuleFilterCriteriaDV) : void {
      def.refreshVariables(filterCriteria)
    }
    
    // 'def' attribute on PanelRef at UWRules.pcf: line 98, column 44
    function def_refreshVariables_33 (def :  pcf.EmptyDV) : void {
      def.refreshVariables()
    }
    
    // 'searchCriteria' attribute on SearchPanel at UWRules.pcf: line 90, column 81
    function searchCriteria_75 () : gw.web.bizrules.UWRuleFilterCriteria {
      return filterCriteria
    }
    
    // 'search' attribute on SearchPanel at UWRules.pcf: line 90, column 81
    function search_74 () : java.lang.Object {
      return helper.queryRuleVersionsWithResults(filterCriteria)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWRules.pcf: line 136, column 36
    function sortValue_34 (rule :  UWRule) : java.lang.Object {
      return rule.Name
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at UWRules.pcf: line 142, column 37
    function sortValue_35 (rule :  UWRule) : java.lang.Object {
      return helper.RuleQueryResults.getStatusText(rule)
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at UWRules.pcf: line 148, column 37
    function sortValue_36 (rule :  UWRule) : java.lang.Object {
      return helper.RuleQueryResults.getVersionText(rule)
    }
    
    // 'value' attribute on TextAreaCell (id=PolicyTransactions_Cell) at UWRules.pcf: line 159, column 81
    function sortValue_37 (rule :  UWRule) : java.lang.Object {
      return helper.join(rule.PolicyTransactions*.Job*.DisplayName)
    }
    
    // 'value' attribute on TextAreaCell (id=PolicyLine_Cell) at UWRules.pcf: line 164, column 85
    function sortValue_38 (rule :  UWRule) : java.lang.Object {
      return helper.join(rule.LinesOfBusiness*.PolicyLine*.DisplayName)
    }
    
    // 'value' attribute on TextAreaCell (id=Jurisdictions_Cell) at UWRules.pcf: line 169, column 85
    function sortValue_39 (rule :  UWRule) : java.lang.Object {
      return helper.join(rule.Jurisdictions*.Jurisdiction*.DisplayName)
    }
    
    // 'value' attribute on TypeKeyCell (id=CheckingSet_Cell) at UWRules.pcf: line 175, column 57
    function sortValue_40 (rule :  UWRule) : java.lang.Object {
      return rule.TriggeringPointKey
    }
    
    // 'value' attribute on TypeKeyCell (id=BlockingPoint_Cell) at UWRules.pcf: line 181, column 59
    function sortValue_41 (rule :  UWRule) : java.lang.Object {
      return rule.UWIssueType.BlockingPoint
    }
    
    // 'value' attribute on RowIterator (id=RulesIterator) at UWRules.pcf: line 120, column 72
    function value_73 () : gw.api.database.IQueryBeanResult<UWRule> {
      return helper.getRuleQueryResults(helper.queryRules(filterCriteria))
    }
    
    // 'visible' attribute on PanelRef (id=SearchCriteriaPanelRef) at UWRules.pcf: line 94, column 45
    function visible_26 () : java.lang.Boolean {
      return areSearchFieldsVisible
    }
    
    property get results () : gw.api.database.IQueryBeanResult<RuleVersion> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<RuleVersion>
    }
    
    property get uwfilterCriteria () : gw.web.bizrules.UWRuleFilterCriteria {
      return getCriteriaValue(1) as gw.web.bizrules.UWRuleFilterCriteria
    }
    
    property set uwfilterCriteria ($arg :  gw.web.bizrules.UWRuleFilterCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRulesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at UWRules.pcf: line 64, column 122
    function action_17 () : void {
      helper.NavigationSupport.goToExportImportStatusPage()
    }
    
    // 'action' attribute on AlertBar (id=ValidationProgressAlert) at UWRules.pcf: line 70, column 83
    function action_19 () : void {
      
    }
    
    // 'action' attribute on AlertBar (id=ValidationProcessFailedAlert) at UWRules.pcf: line 76, column 84
    function action_22 () : void {
      gw.bizrules.validator.ValidateAllWorkQueueUtil.startValidationProcess()
    }
    
    // 'action' attribute on ToolbarButton (id=ShowHideFilter) at UWRules.pcf: line 42, column 247
    function action_9 () : void {
      areSearchFieldsVisible = not areSearchFieldsVisible
    }
    
    // 'canVisit' attribute on Page (id=UWRules) at UWRules.pcf: line 8, column 58
    static function canVisit_76 () : java.lang.Boolean {
      return perm.System.uwruleview or perm.Rule.view
    }
    
    // 'def' attribute on MenuItemSetRef at UWRules.pcf: line 37, column 243
    function def_onEnter_7 (def :  pcf.RuleListMoreButtonMenuItemSet) : void {
      def.onEnter(helper.NavigationSupport, helper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "RulesIterator"), helper.queryRuleVersions(filterCriteria), ruleType, helper, helper.UIConfigs)
    }
    
    // 'def' attribute on MenuItemSetRef at UWRules.pcf: line 37, column 243
    function def_refreshVariables_8 (def :  pcf.RuleListMoreButtonMenuItemSet) : void {
      def.refreshVariables(helper.NavigationSupport, helper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "RulesIterator"), helper.queryRuleVersions(filterCriteria), ruleType, helper, helper.UIConfigs)
    }
    
    // 'initialValue' attribute on Variable at UWRules.pcf: line 12, column 49
    function initialValue_0 () : gw.web.bizrules.UWRulesPageHelper {
      return new gw.web.bizrules.UWRulesPageHelper(gw.bizrules.PCBizRulesNavigationSupport.Instance)
    }
    
    // 'initialValue' attribute on Variable at UWRules.pcf: line 16, column 52
    function initialValue_1 () : gw.web.bizrules.UWRuleFilterCriteria {
      return gw.web.bizrules.UWRuleFilterCriteria.getInstance(helper)
    }
    
    // 'initialValue' attribute on Variable at UWRules.pcf: line 24, column 72
    function initialValue_2 () : gw.pl.persistence.type.EntityTypeReference<UWRule> {
      return UWRule.TYPE
    }
    
    // 'label' attribute on ToolbarButton (id=ShowHideFilter) at UWRules.pcf: line 42, column 247
    function label_10 () : java.lang.Object {
      return areSearchFieldsVisible ? DisplayKey.get('Web.BizRules.UWRules.Filter.HideFilter') : filterCriteria.Specified ? DisplayKey.get('Web.BizRules.UWRules.Filter.EditFilter') : DisplayKey.get('Web.BizRules.UWRules.Filter.ShowFilter')
    }
    
    // 'label' attribute on AlertBar (id=ValidationProgressAlert) at UWRules.pcf: line 70, column 83
    function label_20 () : java.lang.Object {
      return DisplayKey.get('BizRules.ValidateAll.Pending', gw.bizrules.validator.ValidateAllWorkQueueUtil.CountWorkItemsPending)
    }
    
    // 'label' attribute on AlertBar (id=ValidationProcessFailedAlert) at UWRules.pcf: line 76, column 84
    function label_23 () : java.lang.Object {
      return DisplayKey.get('BizRules.ValidateAll.Failed', gw.bizrules.validator.ValidateAllWorkQueueUtil.getLastRunFailureReason())
    }
    
    // 'label' attribute on AlertBar (id=PCSelectedRulesAlertBar) at UWRules.pcf: line 81, column 85
    function label_25 () : java.lang.Object {
      return gw.bizrules.pcf.SelectedRulesWarningHelper.WarningMessage
    }
    
    // Page (id=UWRules) at UWRules.pcf: line 8, column 58
    static function parent_77 () : pcf.api.Destination {
      return pcf.BizRules.createDestination()
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRules.pcf: line 29, column 183
    function toolbarButtonSet_onEnter_3 (def :  pcf.CreateRuleToolbarButtonSet) : void {
      def.onEnter(helper.NavigationSupport, helper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "RulesIterator"), ruleType)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRules.pcf: line 32, column 234
    function toolbarButtonSet_onEnter_5 (def :  pcf.DeployRulesToolbarButtonSet) : void {
      def.onEnter(helper.NavigationSupport, helper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "RulesIterator"), helper.queryRuleVersions(filterCriteria), ruleType, helper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRules.pcf: line 29, column 183
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.CreateRuleToolbarButtonSet) : void {
      def.refreshVariables(helper.NavigationSupport, helper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "RulesIterator"), ruleType)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRules.pcf: line 32, column 234
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.DeployRulesToolbarButtonSet) : void {
      def.refreshVariables(helper.NavigationSupport, helper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "RulesIterator"), helper.queryRuleVersions(filterCriteria), ruleType, helper)
    }
    
    // 'value' attribute on TextValue (id=ValidationStatusToolbarInput) at UWRules.pcf: line 52, column 41
    function value_13 () : java.lang.String {
      return helper.getValidationStatusDisplay(filterCriteria)
    }
    
    // 'visible' attribute on TextValue (id=FilteredInput) at UWRules.pcf: line 47, column 47
    function visible_11 () : java.lang.Boolean {
      return filterCriteria.Specified
    }
    
    // 'visible' attribute on AlertBar (id=RollingUpgradeAlert) at UWRules.pcf: line 58, column 235
    function visible_15 () : java.lang.Boolean {
      return gw.bizrules.management.BizRulesRollingUpgradeManager.Instance.RollingUpgradeProcessStartedInDB and helper.VersionController.DeploymentEnabled and gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(ruleType.get())
    }
    
    // 'visible' attribute on AlertBar (id=PendingImportAlert) at UWRules.pcf: line 64, column 122
    function visible_16 () : java.lang.Boolean {
      return helper.NavigationSupport.VersionController.ExportImportController.doesPendingImportExist(UWRule.TYPE)
    }
    
    // 'visible' attribute on AlertBar (id=ValidationProgressAlert) at UWRules.pcf: line 70, column 83
    function visible_18 () : java.lang.Boolean {
      return gw.bizrules.validator.ValidateAllWorkQueueUtil.isWorkPending()
    }
    
    // 'visible' attribute on AlertBar (id=ValidationProcessFailedAlert) at UWRules.pcf: line 76, column 84
    function visible_21 () : java.lang.Boolean {
      return gw.bizrules.validator.ValidateAllWorkQueueUtil.didLastRunFail()
    }
    
    // 'visible' attribute on AlertBar (id=PCSelectedRulesAlertBar) at UWRules.pcf: line 81, column 85
    function visible_24 () : java.lang.Boolean {
      return gw.bizrules.pcf.SelectedRulesWarningHelper.showWarningAlertBar()
    }
    
    override property get CurrentLocation () : pcf.UWRules {
      return super.CurrentLocation as pcf.UWRules
    }
    
    property get areSearchFieldsVisible () : Boolean {
      return getVariableValue("areSearchFieldsVisible", 0) as Boolean
    }
    
    property set areSearchFieldsVisible ($arg :  Boolean) {
      setVariableValue("areSearchFieldsVisible", 0, $arg)
    }
    
    property get filterCriteria () : gw.web.bizrules.UWRuleFilterCriteria {
      return getVariableValue("filterCriteria", 0) as gw.web.bizrules.UWRuleFilterCriteria
    }
    
    property set filterCriteria ($arg :  gw.web.bizrules.UWRuleFilterCriteria) {
      setVariableValue("filterCriteria", 0, $arg)
    }
    
    property get helper () : gw.web.bizrules.UWRulesPageHelper {
      return getVariableValue("helper", 0) as gw.web.bizrules.UWRulesPageHelper
    }
    
    property set helper ($arg :  gw.web.bizrules.UWRulesPageHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get ruleType () : gw.pl.persistence.type.EntityTypeReference<UWRule> {
      return getVariableValue("ruleType", 0) as gw.pl.persistence.type.EntityTypeReference<UWRule>
    }
    
    property set ruleType ($arg :  gw.pl.persistence.type.EntityTypeReference<UWRule>) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    
  }
  
  
}