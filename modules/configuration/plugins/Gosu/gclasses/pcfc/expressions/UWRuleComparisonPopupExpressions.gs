package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleComparisonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRuleComparisonPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRuleComparisonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRuleComparisonPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : int {
      return 1
    }
    
    static function __constructorIndex (version1 :  RuleVersion, version2 :  RuleVersion) : int {
      return 0
    }
    
    // 'afterReturnFromPopup' attribute on Popup (id=UWRuleComparisonPopup) at UWRuleComparisonPopup.pcf: line 9, column 69
    function afterReturnFromPopup_79 (popupCommitted :  boolean) : void {
      if (popupCommitted) CurrentLocation.commit()
    }
    
    // 'columns' attribute on Layout at UWRuleComparisonPopup.pcf: line 48, column 25
    function columns_7 () : java.lang.Double {
      return controller.TotalColumns
    }
    
    // 'def' attribute on InputSetRef (id=RuleDetailsSectionLabel) at UWRuleComparisonPopup.pcf: line 54, column 41
    function def_onEnter_10 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("BizRules.Import.Comparison.RuleDetails"))
    }
    
    // 'def' attribute on InputSetRef (id=NameRow) at UWRuleComparisonPopup.pcf: line 57, column 25
    function def_onEnter_12 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(controller.NameRow)
    }
    
    // 'def' attribute on InputSetRef (id=CodeRow) at UWRuleComparisonPopup.pcf: line 60, column 25
    function def_onEnter_14 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(controller.CodeRow)
    }
    
    // 'def' attribute on InputSetRef (id=CheckingSetRow) at UWRuleComparisonPopup.pcf: line 63, column 32
    function def_onEnter_16 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.CheckingSetRow)
    }
    
    // 'def' attribute on InputSetRef (id=BlockingPointRow) at UWRuleComparisonPopup.pcf: line 66, column 34
    function def_onEnter_18 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.BlockingPointRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultDurationRow) at UWRuleComparisonPopup.pcf: line 69, column 36
    function def_onEnter_20 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.DefaultDurationRow)
    }
    
    // 'def' attribute on InputSetRef (id=DescriptionRow) at UWRuleComparisonPopup.pcf: line 73, column 55
    function def_onEnter_23 (def :  pcf.RuleComparisonRowTextAreaInputSet) : void {
      def.onEnter(controller.DescriptionRow)
    }
    
    // 'def' attribute on InputSetRef (id=AvailableToRunRow) at UWRuleComparisonPopup.pcf: line 77, column 58
    function def_onEnter_26 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.onEnter(controller.AvailableToRunRow)
    }
    
    // 'def' attribute on InputSetRef (id=StartDateRow) at UWRuleComparisonPopup.pcf: line 81, column 53
    function def_onEnter_29 (def :  pcf.RuleComparisonRowDateInputSet) : void {
      def.onEnter(controller.StartDateRow)
    }
    
    // 'def' attribute on InputSetRef (id=EndDateRow) at UWRuleComparisonPopup.pcf: line 85, column 51
    function def_onEnter_32 (def :  pcf.RuleComparisonRowDateInputSet) : void {
      def.onEnter(controller.EndDateRow)
    }
    
    // 'def' attribute on InputSetRef (id=ContextSectionLabel) at UWRuleComparisonPopup.pcf: line 89, column 52
    function def_onEnter_35 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get('Web.BizRules.UWRulePanelSet.RuleContextTitle'))
    }
    
    // 'def' attribute on InputSetRef (id=ContextRow) at UWRuleComparisonPopup.pcf: line 93, column 52
    function def_onEnter_38 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.ContextRow)
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at UWRuleComparisonPopup.pcf: line 97, column 68
    function def_onEnter_41 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get('Web.BizRules.UWRules.Comparison.ApplicabilityCriteria'))
    }
    
    // 'def' attribute on InputSetRef (id=PolicyLineRowRow) at UWRuleComparisonPopup.pcf: line 101, column 54
    function def_onEnter_44 (def :  pcf.RuleComparisonRowListInputSet) : void {
      def.onEnter(controller.PolicyLineRow)
    }
    
    // 'def' attribute on InputSetRef (id=StateRow) at UWRuleComparisonPopup.pcf: line 105, column 56
    function def_onEnter_47 (def :  pcf.RuleComparisonRowListInputSet) : void {
      def.onEnter(controller.JurisdictionRow)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTransactionRow) at UWRuleComparisonPopup.pcf: line 109, column 61
    function def_onEnter_50 (def :  pcf.RuleComparisonRowListInputSet) : void {
      def.onEnter(controller.PolicyTransactionRow)
    }
    
    // 'def' attribute on InputSetRef (id=RuleVariables) at UWRuleComparisonPopup.pcf: line 113, column 54
    function def_onEnter_53 (def :  pcf.RuleComparisonVariablesSectionInputSet) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleCondition) at UWRuleComparisonPopup.pcf: line 117, column 54
    function def_onEnter_56 (def :  pcf.RuleComparisonConditionInputSet) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleActions) at UWRuleComparisonPopup.pcf: line 121, column 48
    function def_onEnter_59 (def :  pcf.RuleComparisonActionsInputSet) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=AdvancedSectionLabel) at UWRuleComparisonPopup.pcf: line 124, column 38
    function def_onEnter_61 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("Web.BizRules.UWRulePanelSet.AdvancedInfoTitle"))
    }
    
    // 'def' attribute on InputSetRef (id=AutoApprovableRow) at UWRuleComparisonPopup.pcf: line 127, column 35
    function def_onEnter_63 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.onEnter(controller.AutoApprovableRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultEditBeforeBindRow) at UWRuleComparisonPopup.pcf: line 130, column 42
    function def_onEnter_65 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.onEnter(controller.DefaultEditBeforeBindRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultApprovalBlockingPointRow) at UWRuleComparisonPopup.pcf: line 133, column 49
    function def_onEnter_67 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.DefaultApprovalBlockingPointRow)
    }
    
    // 'def' attribute on InputSetRef (id=ComparatorRow) at UWRuleComparisonPopup.pcf: line 136, column 31
    function def_onEnter_69 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.ComparatorRow)
    }
    
    // 'def' attribute on InputSetRef (id=ValueFormatterTypeRow) at UWRuleComparisonPopup.pcf: line 139, column 39
    function def_onEnter_71 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.ValueFormatterTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultValueAssignmentTypeRow) at UWRuleComparisonPopup.pcf: line 142, column 47
    function def_onEnter_73 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.DefaultValueAssignmentTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultValueOffsetAmountRow) at UWRuleComparisonPopup.pcf: line 145, column 45
    function def_onEnter_75 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(controller.DefaultValueOffsetAmountRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultValueOffsetCurrencyRow) at UWRuleComparisonPopup.pcf: line 148, column 47
    function def_onEnter_77 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(controller.DefaultValueOffsetCurrencyRow)
    }
    
    // 'def' attribute on InputSetRef (id=ComparisonHeadings) at UWRuleComparisonPopup.pcf: line 51, column 36
    function def_onEnter_8 (def :  pcf.RuleComparisonColumnHeadingsInputSet) : void {
      def.onEnter(controller, {DisplayKey.get("BizRules.Import.Comparison.Existing",navSupport.VersionController.getLabelForExistingVersion(version1,false)), DisplayKey.get("BizRules.Import.Comparison.Importing",navSupport.VersionController.getLabelForImportingVersion(version2))})
    }
    
    // 'def' attribute on InputSetRef (id=RuleDetailsSectionLabel) at UWRuleComparisonPopup.pcf: line 54, column 41
    function def_refreshVariables_11 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("BizRules.Import.Comparison.RuleDetails"))
    }
    
    // 'def' attribute on InputSetRef (id=NameRow) at UWRuleComparisonPopup.pcf: line 57, column 25
    function def_refreshVariables_13 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(controller.NameRow)
    }
    
    // 'def' attribute on InputSetRef (id=CodeRow) at UWRuleComparisonPopup.pcf: line 60, column 25
    function def_refreshVariables_15 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(controller.CodeRow)
    }
    
    // 'def' attribute on InputSetRef (id=CheckingSetRow) at UWRuleComparisonPopup.pcf: line 63, column 32
    function def_refreshVariables_17 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.CheckingSetRow)
    }
    
    // 'def' attribute on InputSetRef (id=BlockingPointRow) at UWRuleComparisonPopup.pcf: line 66, column 34
    function def_refreshVariables_19 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.BlockingPointRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultDurationRow) at UWRuleComparisonPopup.pcf: line 69, column 36
    function def_refreshVariables_21 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.DefaultDurationRow)
    }
    
    // 'def' attribute on InputSetRef (id=DescriptionRow) at UWRuleComparisonPopup.pcf: line 73, column 55
    function def_refreshVariables_24 (def :  pcf.RuleComparisonRowTextAreaInputSet) : void {
      def.refreshVariables(controller.DescriptionRow)
    }
    
    // 'def' attribute on InputSetRef (id=AvailableToRunRow) at UWRuleComparisonPopup.pcf: line 77, column 58
    function def_refreshVariables_27 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.refreshVariables(controller.AvailableToRunRow)
    }
    
    // 'def' attribute on InputSetRef (id=StartDateRow) at UWRuleComparisonPopup.pcf: line 81, column 53
    function def_refreshVariables_30 (def :  pcf.RuleComparisonRowDateInputSet) : void {
      def.refreshVariables(controller.StartDateRow)
    }
    
    // 'def' attribute on InputSetRef (id=EndDateRow) at UWRuleComparisonPopup.pcf: line 85, column 51
    function def_refreshVariables_33 (def :  pcf.RuleComparisonRowDateInputSet) : void {
      def.refreshVariables(controller.EndDateRow)
    }
    
    // 'def' attribute on InputSetRef (id=ContextSectionLabel) at UWRuleComparisonPopup.pcf: line 89, column 52
    function def_refreshVariables_36 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get('Web.BizRules.UWRulePanelSet.RuleContextTitle'))
    }
    
    // 'def' attribute on InputSetRef (id=ContextRow) at UWRuleComparisonPopup.pcf: line 93, column 52
    function def_refreshVariables_39 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.ContextRow)
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at UWRuleComparisonPopup.pcf: line 97, column 68
    function def_refreshVariables_42 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get('Web.BizRules.UWRules.Comparison.ApplicabilityCriteria'))
    }
    
    // 'def' attribute on InputSetRef (id=PolicyLineRowRow) at UWRuleComparisonPopup.pcf: line 101, column 54
    function def_refreshVariables_45 (def :  pcf.RuleComparisonRowListInputSet) : void {
      def.refreshVariables(controller.PolicyLineRow)
    }
    
    // 'def' attribute on InputSetRef (id=StateRow) at UWRuleComparisonPopup.pcf: line 105, column 56
    function def_refreshVariables_48 (def :  pcf.RuleComparisonRowListInputSet) : void {
      def.refreshVariables(controller.JurisdictionRow)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTransactionRow) at UWRuleComparisonPopup.pcf: line 109, column 61
    function def_refreshVariables_51 (def :  pcf.RuleComparisonRowListInputSet) : void {
      def.refreshVariables(controller.PolicyTransactionRow)
    }
    
    // 'def' attribute on InputSetRef (id=RuleVariables) at UWRuleComparisonPopup.pcf: line 113, column 54
    function def_refreshVariables_54 (def :  pcf.RuleComparisonVariablesSectionInputSet) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleCondition) at UWRuleComparisonPopup.pcf: line 117, column 54
    function def_refreshVariables_57 (def :  pcf.RuleComparisonConditionInputSet) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleActions) at UWRuleComparisonPopup.pcf: line 121, column 48
    function def_refreshVariables_60 (def :  pcf.RuleComparisonActionsInputSet) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=AdvancedSectionLabel) at UWRuleComparisonPopup.pcf: line 124, column 38
    function def_refreshVariables_62 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("Web.BizRules.UWRulePanelSet.AdvancedInfoTitle"))
    }
    
    // 'def' attribute on InputSetRef (id=AutoApprovableRow) at UWRuleComparisonPopup.pcf: line 127, column 35
    function def_refreshVariables_64 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.refreshVariables(controller.AutoApprovableRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultEditBeforeBindRow) at UWRuleComparisonPopup.pcf: line 130, column 42
    function def_refreshVariables_66 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.refreshVariables(controller.DefaultEditBeforeBindRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultApprovalBlockingPointRow) at UWRuleComparisonPopup.pcf: line 133, column 49
    function def_refreshVariables_68 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.DefaultApprovalBlockingPointRow)
    }
    
    // 'def' attribute on InputSetRef (id=ComparatorRow) at UWRuleComparisonPopup.pcf: line 136, column 31
    function def_refreshVariables_70 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.ComparatorRow)
    }
    
    // 'def' attribute on InputSetRef (id=ValueFormatterTypeRow) at UWRuleComparisonPopup.pcf: line 139, column 39
    function def_refreshVariables_72 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.ValueFormatterTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultValueAssignmentTypeRow) at UWRuleComparisonPopup.pcf: line 142, column 47
    function def_refreshVariables_74 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.DefaultValueAssignmentTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultValueOffsetAmountRow) at UWRuleComparisonPopup.pcf: line 145, column 45
    function def_refreshVariables_76 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(controller.DefaultValueOffsetAmountRow)
    }
    
    // 'def' attribute on InputSetRef (id=DefaultValueOffsetCurrencyRow) at UWRuleComparisonPopup.pcf: line 148, column 47
    function def_refreshVariables_78 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(controller.DefaultValueOffsetCurrencyRow)
    }
    
    // 'def' attribute on InputSetRef (id=ComparisonHeadings) at UWRuleComparisonPopup.pcf: line 51, column 36
    function def_refreshVariables_9 (def :  pcf.RuleComparisonColumnHeadingsInputSet) : void {
      def.refreshVariables(controller, {DisplayKey.get("BizRules.Import.Comparison.Existing",navSupport.VersionController.getLabelForExistingVersion(version1,false)), DisplayKey.get("BizRules.Import.Comparison.Importing",navSupport.VersionController.getLabelForImportingVersion(version2))})
    }
    
    // 'initialValue' attribute on Variable at UWRuleComparisonPopup.pcf: line 23, column 27
    function initialValue_0 () : RuleVersion {
      return importEntry.ExistingVersion
    }
    
    // 'initialValue' attribute on Variable at UWRuleComparisonPopup.pcf: line 27, column 27
    function initialValue_1 () : RuleVersion {
      return importEntry.ImportedVersion
    }
    
    // 'initialValue' attribute on Variable at UWRuleComparisonPopup.pcf: line 31, column 61
    function initialValue_2 () : gw.web.bizrules.UWRuleVersionComparisonHelper {
      return new gw.web.bizrules.UWRuleVersionComparisonHelper(version1, version2, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at UWRuleComparisonPopup.pcf: line 35, column 61
    function initialValue_3 () : gw.bizrules.pcf.BizRulesPageNavigationSupport {
      return gw.bizrules.PCBizRulesNavigationSupport.Instance
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleComparisonPopup.pcf: line 39, column 101
    function toolbarButtonSet_onEnter_4 (def :  pcf.RuleComparisonToolbarButtonSet) : void {
      def.onEnter(importEntry, importHelper, navSupport)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleComparisonPopup.pcf: line 39, column 101
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.RuleComparisonToolbarButtonSet) : void {
      def.refreshVariables(importEntry, importHelper, navSupport)
    }
    
    // 'visible' attribute on InputSetRef (id=DescriptionRow) at UWRuleComparisonPopup.pcf: line 73, column 55
    function visible_22 () : java.lang.Boolean {
      return controller.DescriptionRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=AvailableToRunRow) at UWRuleComparisonPopup.pcf: line 77, column 58
    function visible_25 () : java.lang.Boolean {
      return controller.AvailableToRunRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=StartDateRow) at UWRuleComparisonPopup.pcf: line 81, column 53
    function visible_28 () : java.lang.Boolean {
      return controller.StartDateRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=EndDateRow) at UWRuleComparisonPopup.pcf: line 85, column 51
    function visible_31 () : java.lang.Boolean {
      return controller.EndDateRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=ContextSectionLabel) at UWRuleComparisonPopup.pcf: line 89, column 52
    function visible_34 () : java.lang.Boolean {
      return controller.RuleContextVisible
    }
    
    // 'visible' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at UWRuleComparisonPopup.pcf: line 97, column 68
    function visible_40 () : java.lang.Boolean {
      return controller.ApplicabilityCriteriaHeaderVisible
    }
    
    // 'visible' attribute on InputSetRef (id=PolicyLineRowRow) at UWRuleComparisonPopup.pcf: line 101, column 54
    function visible_43 () : java.lang.Boolean {
      return controller.PolicyLineRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=StateRow) at UWRuleComparisonPopup.pcf: line 105, column 56
    function visible_46 () : java.lang.Boolean {
      return controller.JurisdictionRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=PolicyTransactionRow) at UWRuleComparisonPopup.pcf: line 109, column 61
    function visible_49 () : java.lang.Boolean {
      return controller.PolicyTransactionRowVisible
    }
    
    // 'visible' attribute on InputSetRef (id=RuleVariables) at UWRuleComparisonPopup.pcf: line 113, column 54
    function visible_52 () : java.lang.Boolean {
      return controller.RuleVariablesVisible
    }
    
    // 'visible' attribute on InputSetRef (id=RuleCondition) at UWRuleComparisonPopup.pcf: line 117, column 54
    function visible_55 () : java.lang.Boolean {
      return controller.RuleConditionVisible
    }
    
    // 'visible' attribute on InputSetRef (id=RuleActions) at UWRuleComparisonPopup.pcf: line 121, column 48
    function visible_58 () : java.lang.Boolean {
      return controller.ActionsVisible
    }
    
    // 'visible' attribute on AlertBar (id=ExistingInDraftAlert) at UWRuleComparisonPopup.pcf: line 44, column 106
    function visible_6 () : java.lang.Boolean {
      return perm.Rule.edit(importEntry.ImportedVersion.Rule) and importEntry.ExistingVersionDraft
    }
    
    override property get CurrentLocation () : pcf.UWRuleComparisonPopup {
      return super.CurrentLocation as pcf.UWRuleComparisonPopup
    }
    
    property get controller () : gw.web.bizrules.UWRuleVersionComparisonHelper {
      return getVariableValue("controller", 0) as gw.web.bizrules.UWRuleVersionComparisonHelper
    }
    
    property set controller ($arg :  gw.web.bizrules.UWRuleVersionComparisonHelper) {
      setVariableValue("controller", 0, $arg)
    }
    
    property get importEntry () : RuleImportTaskEntry {
      return getVariableValue("importEntry", 0) as RuleImportTaskEntry
    }
    
    property set importEntry ($arg :  RuleImportTaskEntry) {
      setVariableValue("importEntry", 0, $arg)
    }
    
    property get importHelper () : gw.bizrules.pcf.RuleExportImportPageHelper {
      return getVariableValue("importHelper", 0) as gw.bizrules.pcf.RuleExportImportPageHelper
    }
    
    property set importHelper ($arg :  gw.bizrules.pcf.RuleExportImportPageHelper) {
      setVariableValue("importHelper", 0, $arg)
    }
    
    property get navSupport () : gw.bizrules.pcf.BizRulesPageNavigationSupport {
      return getVariableValue("navSupport", 0) as gw.bizrules.pcf.BizRulesPageNavigationSupport
    }
    
    property set navSupport ($arg :  gw.bizrules.pcf.BizRulesPageNavigationSupport) {
      setVariableValue("navSupport", 0, $arg)
    }
    
    property get version1 () : RuleVersion {
      return getVariableValue("version1", 0) as RuleVersion
    }
    
    property set version1 ($arg :  RuleVersion) {
      setVariableValue("version1", 0, $arg)
    }
    
    property get version2 () : RuleVersion {
      return getVariableValue("version2", 0) as RuleVersion
    }
    
    property set version2 ($arg :  RuleVersion) {
      setVariableValue("version2", 0, $arg)
    }
    
    
  }
  
  
}