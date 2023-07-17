package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRulePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRulePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRulePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRulePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UWRulePanelSet.pcf: line 85, column 55
    function def_onEnter_31 (def :  pcf.AvailableToRunInputSet) : void {
      def.onEnter(version)
    }
    
    // 'def' attribute on InputSetRef at UWRulePanelSet.pcf: line 90, column 55
    function def_onEnter_34 (def :  pcf.RuleManagementAuditLinkInputSet) : void {
      def.onEnter(gw.bizrules.PCBizRulesNavigationSupport.Instance.VersionController, importingVersion, version)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyLines) at UWRulePanelSet.pcf: line 128, column 35
    function def_onEnter_61 (def :  pcf.ApplicabilityCriteriaInputSet) : void {
      def.onEnter(helper.LinesOfBusinessBundle)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at UWRulePanelSet.pcf: line 131, column 37
    function def_onEnter_63 (def :  pcf.ApplicabilityCriteriaInputSet) : void {
      def.onEnter(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTransactions) at UWRulePanelSet.pcf: line 134, column 42
    function def_onEnter_65 (def :  pcf.ApplicabilityCriteriaInputSet) : void {
      def.onEnter(helper.PolicyTransactionsBundle)
    }
    
    // 'def' attribute on PanelRef at UWRulePanelSet.pcf: line 163, column 50
    function def_onEnter_78 (def :  pcf.RuleVariablesPanelSet) : void {
      def.onEnter(controller.RuleVariableController)
    }
    
    // 'def' attribute on PanelRef at UWRulePanelSet.pcf: line 170, column 50
    function def_onEnter_81 (def :  pcf.ConditionBuilderPanelSet) : void {
      def.onEnter(controller.ConditionBuilderController)
    }
    
    // 'def' attribute on PanelRef at UWRulePanelSet.pcf: line 176, column 50
    function def_onEnter_84 (def :  pcf.UWIssueCommandDefinitionDV) : void {
      def.onEnter(controller, helper, interactiveWidgets)
    }
    
    // 'def' attribute on InputSetRef at UWRulePanelSet.pcf: line 85, column 55
    function def_refreshVariables_32 (def :  pcf.AvailableToRunInputSet) : void {
      def.refreshVariables(version)
    }
    
    // 'def' attribute on InputSetRef at UWRulePanelSet.pcf: line 90, column 55
    function def_refreshVariables_35 (def :  pcf.RuleManagementAuditLinkInputSet) : void {
      def.refreshVariables(gw.bizrules.PCBizRulesNavigationSupport.Instance.VersionController, importingVersion, version)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyLines) at UWRulePanelSet.pcf: line 128, column 35
    function def_refreshVariables_62 (def :  pcf.ApplicabilityCriteriaInputSet) : void {
      def.refreshVariables(helper.LinesOfBusinessBundle)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at UWRulePanelSet.pcf: line 131, column 37
    function def_refreshVariables_64 (def :  pcf.ApplicabilityCriteriaInputSet) : void {
      def.refreshVariables(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTransactions) at UWRulePanelSet.pcf: line 134, column 42
    function def_refreshVariables_66 (def :  pcf.ApplicabilityCriteriaInputSet) : void {
      def.refreshVariables(helper.PolicyTransactionsBundle)
    }
    
    // 'def' attribute on PanelRef at UWRulePanelSet.pcf: line 163, column 50
    function def_refreshVariables_79 (def :  pcf.RuleVariablesPanelSet) : void {
      def.refreshVariables(controller.RuleVariableController)
    }
    
    // 'def' attribute on PanelRef at UWRulePanelSet.pcf: line 170, column 50
    function def_refreshVariables_82 (def :  pcf.ConditionBuilderPanelSet) : void {
      def.refreshVariables(controller.ConditionBuilderController)
    }
    
    // 'def' attribute on PanelRef at UWRulePanelSet.pcf: line 176, column 50
    function def_refreshVariables_85 (def :  pcf.UWIssueCommandDefinitionDV) : void {
      def.refreshVariables(controller, helper, interactiveWidgets)
    }
    
    // 'value' attribute on TypeKeyInput (id=Comparator_Input) at UWRulePanelSet.pcf: line 209, column 63
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      interactiveWidgets.Comparator.Value = (__VALUE_TO_SET as typekey.ValueComparator)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at UWRulePanelSet.pcf: line 56, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.UWIssueType.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValueFormatterType_Input) at UWRulePanelSet.pcf: line 221, column 63
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      interactiveWidgets.Formatter.Value = (__VALUE_TO_SET as typekey.ValueFormatterType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultValueAssignmentType_Input) at UWRulePanelSet.pcf: line 228, column 67
    function defaultSetter_119 (__VALUE_TO_SET :  java.lang.Object) : void {
      interactiveWidgets.AssignmenType.Value = (__VALUE_TO_SET as typekey.UWValueAssignmentType)
    }
    
    // 'value' attribute on TextInput (id=DefaultValueOffsetAmount_Input) at UWRulePanelSet.pcf: line 235, column 66
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      interactiveWidgets.OffsetAmount.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultValueOffsetCurrency_Input) at UWRulePanelSet.pcf: line 242, column 68
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      interactiveWidgets.OffsetCurrency.Value = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=TriggeringPointKey_Input) at UWRulePanelSet.pcf: line 66, column 54
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.TriggeringPointKey = (__VALUE_TO_SET as typekey.TriggeringPointKey)
    }
    
    // 'value' attribute on TypeKeyInput (id=BlockingPoint_Input) at UWRulePanelSet.pcf: line 76, column 57
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.UWIssueType.BlockingPoint = (__VALUE_TO_SET as typekey.UWIssueBlockingPoint)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultDurationType_Input) at UWRulePanelSet.pcf: line 82, column 59
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.UWIssueType.DefaultDurationType = (__VALUE_TO_SET as typekey.UWApprovalDurationType)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at UWRulePanelSet.pcf: line 103, column 55
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=RuleStartDate_Input) at UWRulePanelSet.pcf: line 109, column 55
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      helper.RuleStartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWRulePanelSet.pcf: line 47, column 35
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      helper.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=RuleEndDate_Input) at UWRulePanelSet.pcf: line 116, column 55
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      helper.RuleEndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=RuleContextDefinitionKey_Input) at UWRulePanelSet.pcf: line 152, column 62
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      controller.RuleContextDefinitionKey = (__VALUE_TO_SET as typekey.RuleContextDefinitionKey)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AutoApprovable_Input) at UWRulePanelSet.pcf: line 190, column 58
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.UWIssueType.AutoApprovable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DefaultEditBeforeBind_Input) at UWRulePanelSet.pcf: line 195, column 65
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.UWIssueType.DefaultEditBeforeBind = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultApprovalBlockingPoint_Input) at UWRulePanelSet.pcf: line 201, column 57
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      uwRule.UWIssueType.DefaultApprovalBlockingPoint = (__VALUE_TO_SET as typekey.UWIssueBlockingPoint)
    }
    
    // 'editable' attribute on TypeKeyInput (id=ValueFormatterType_Input) at UWRulePanelSet.pcf: line 221, column 63
    function editable_107 () : java.lang.Boolean {
      return interactiveWidgets.Formatter.Editable
    }
    
    // 'editable' attribute on TypeKeyInput (id=DefaultValueAssignmentType_Input) at UWRulePanelSet.pcf: line 228, column 67
    function editable_116 () : java.lang.Boolean {
      return interactiveWidgets.AssignmenType.Editable
    }
    
    // 'editable' attribute on TextInput (id=DefaultValueOffsetAmount_Input) at UWRulePanelSet.pcf: line 235, column 66
    function editable_124 () : java.lang.Boolean {
      return interactiveWidgets.OffsetAmount.Editable
    }
    
    // 'editable' attribute on TypeKeyInput (id=DefaultValueOffsetCurrency_Input) at UWRulePanelSet.pcf: line 242, column 68
    function editable_132 () : java.lang.Boolean {
      return interactiveWidgets.OffsetCurrency.Editable
    }
    
    // 'editable' attribute on PanelSet (id=UWRulePanelSet) at UWRulePanelSet.pcf: line 7, column 25
    function editable_140 () : java.lang.Boolean {
      return version.Rule.Editable
    }
    
    // 'editable' attribute on TextInput (id=Code_Input) at UWRulePanelSet.pcf: line 56, column 47
    function editable_8 () : java.lang.Boolean {
      return uwRule.isFirstVersion()
    }
    
    // 'editable' attribute on TypeKeyInput (id=Comparator_Input) at UWRulePanelSet.pcf: line 209, column 63
    function editable_99 () : java.lang.Boolean {
      return interactiveWidgets.Comparator.Editable
    }
    
    // 'filter' attribute on TypeKeyInput (id=ValueFormatterType_Input) at UWRulePanelSet.pcf: line 221, column 63
    function filter_112 (VALUE :  typekey.ValueFormatterType, VALUES :  typekey.ValueFormatterType[]) : java.util.List<typekey.ValueFormatterType> {
      return interactiveWidgets.Formatter.filter(VALUES)
    }
    
    // 'filter' attribute on TypeKeyInput (id=TriggeringPointKey_Input) at UWRulePanelSet.pcf: line 66, column 54
    function filter_20 (VALUE :  typekey.TriggeringPointKey, VALUES :  typekey.TriggeringPointKey[]) : java.lang.Boolean {
      return TriggeringPointKey.TF_UWRULECHECKINGSETFILTER.TypeKeys.contains(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=RuleContextDefinitionKey_Input) at UWRulePanelSet.pcf: line 152, column 62
    function filter_71 (VALUE :  typekey.RuleContextDefinitionKey, VALUES :  typekey.RuleContextDefinitionKey[]) : java.lang.Boolean {
      return helper.isContextDefinitionsAvailable(VALUE)
    }
    
    // 'initialValue' attribute on Variable at UWRulePanelSet.pcf: line 21, column 52
    function initialValue_0 () : gw.web.bizrules.UWRulePanelSetHelper {
      return new gw.web.bizrules.UWRulePanelSetHelper(version, controller, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at UWRulePanelSet.pcf: line 26, column 22
    function initialValue_1 () : UWRule {
      return version.Rule as UWRule
    }
    
    // 'initialValue' attribute on Variable at UWRulePanelSet.pcf: line 31, column 58
    function initialValue_2 () : gw.web.bizrules.UWRuleInteractiveWidgetSet {
      return new gw.web.bizrules.UWRuleInteractiveWidgetSet(uwRule, controller)
    }
    
    // 'initialValue' attribute on Variable at UWRulePanelSet.pcf: line 35, column 78
    function initialValue_3 () : gw.web.bizrules.UWRuleInteractiveWidgetSet.ValueParameterCache {
      return interactiveWidgets.createParameterCache()
    }
    
    // 'onChange' attribute on PostOnChange at UWRulePanelSet.pcf: line 69, column 231
    function onChange_16 () : void {
      if (!gw.bizrules.BizRulesComponentMapper.getInstance().isSupportedContextForTriggeringPoint(uwRule.TriggeringPointKey, controller.RuleContextDefinitionKey)) {controller.RuleContextDefinitionKey = null}
    }
    
    // 'onChange' attribute on PostOnChange at UWRulePanelSet.pcf: line 211, column 99
    function onChange_98 () : void {
      interactiveWidgets.ValueParameter.onComparatorChange(valueParamCache)
    }
    
    // 'validationExpression' attribute on DateInput (id=RuleEndDate_Input) at UWRulePanelSet.pcf: line 116, column 55
    function validationExpression_53 () : java.lang.Object {
      return helper.validateRuleEnd()
    }
    
    // 'validationExpression' attribute on TextInput (id=Code_Input) at UWRulePanelSet.pcf: line 56, column 47
    function validationExpression_9 () : java.lang.Object {
      return uwRule.UWIssueType.CodeUnique ? null : DisplayKey.get("Web.BizRules.UWRulePanelSet.CodeIsNotUnique")
    }
    
    // 'value' attribute on TypeKeyInput (id=Comparator_Input) at UWRulePanelSet.pcf: line 209, column 63
    function valueRoot_103 () : java.lang.Object {
      return interactiveWidgets.Comparator
    }
    
    // 'value' attribute on TypeKeyInput (id=ValueFormatterType_Input) at UWRulePanelSet.pcf: line 221, column 63
    function valueRoot_111 () : java.lang.Object {
      return interactiveWidgets.Formatter
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at UWRulePanelSet.pcf: line 56, column 47
    function valueRoot_12 () : java.lang.Object {
      return uwRule.UWIssueType
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultValueAssignmentType_Input) at UWRulePanelSet.pcf: line 228, column 67
    function valueRoot_120 () : java.lang.Object {
      return interactiveWidgets.AssignmenType
    }
    
    // 'value' attribute on TextInput (id=DefaultValueOffsetAmount_Input) at UWRulePanelSet.pcf: line 235, column 66
    function valueRoot_128 () : java.lang.Object {
      return interactiveWidgets.OffsetAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultValueOffsetCurrency_Input) at UWRulePanelSet.pcf: line 242, column 68
    function valueRoot_136 () : java.lang.Object {
      return interactiveWidgets.OffsetCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=TriggeringPointKey_Input) at UWRulePanelSet.pcf: line 66, column 54
    function valueRoot_19 () : java.lang.Object {
      return uwRule
    }
    
    // 'value' attribute on TextInput (id=VersionId_Input) at UWRulePanelSet.pcf: line 95, column 55
    function valueRoot_38 () : java.lang.Object {
      return version
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWRulePanelSet.pcf: line 47, column 35
    function valueRoot_6 () : java.lang.Object {
      return helper
    }
    
    // 'value' attribute on TypeKeyInput (id=RuleContextDefinitionKey_Input) at UWRulePanelSet.pcf: line 152, column 62
    function valueRoot_70 () : java.lang.Object {
      return controller
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at UWRulePanelSet.pcf: line 56, column 47
    function value_10 () : java.lang.String {
      return uwRule.UWIssueType.Code
    }
    
    // 'value' attribute on TypeKeyInput (id=Comparator_Input) at UWRulePanelSet.pcf: line 209, column 63
    function value_101 () : typekey.ValueComparator {
      return interactiveWidgets.Comparator.Value
    }
    
    // 'value' attribute on TypeKeyInput (id=ValueFormatterType_Input) at UWRulePanelSet.pcf: line 221, column 63
    function value_109 () : typekey.ValueFormatterType {
      return interactiveWidgets.Formatter.Value
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultValueAssignmentType_Input) at UWRulePanelSet.pcf: line 228, column 67
    function value_118 () : typekey.UWValueAssignmentType {
      return interactiveWidgets.AssignmenType.Value
    }
    
    // 'value' attribute on TextInput (id=DefaultValueOffsetAmount_Input) at UWRulePanelSet.pcf: line 235, column 66
    function value_126 () : java.math.BigDecimal {
      return interactiveWidgets.OffsetAmount.Value
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultValueOffsetCurrency_Input) at UWRulePanelSet.pcf: line 242, column 68
    function value_134 () : typekey.Currency {
      return interactiveWidgets.OffsetCurrency.Value
    }
    
    // 'value' attribute on TypeKeyInput (id=TriggeringPointKey_Input) at UWRulePanelSet.pcf: line 66, column 54
    function value_17 () : typekey.TriggeringPointKey {
      return uwRule.TriggeringPointKey
    }
    
    // 'value' attribute on TypeKeyInput (id=BlockingPoint_Input) at UWRulePanelSet.pcf: line 76, column 57
    function value_22 () : typekey.UWIssueBlockingPoint {
      return uwRule.UWIssueType.BlockingPoint
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultDurationType_Input) at UWRulePanelSet.pcf: line 82, column 59
    function value_26 () : typekey.UWApprovalDurationType {
      return uwRule.UWIssueType.DefaultDurationType
    }
    
    // 'value' attribute on TextInput (id=VersionId_Input) at UWRulePanelSet.pcf: line 95, column 55
    function value_37 () : java.lang.String {
      return version.GlobalVersionID
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWRulePanelSet.pcf: line 47, column 35
    function value_4 () : java.lang.String {
      return helper.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at UWRulePanelSet.pcf: line 103, column 55
    function value_42 () : java.lang.String {
      return uwRule.Description
    }
    
    // 'value' attribute on DateInput (id=RuleStartDate_Input) at UWRulePanelSet.pcf: line 109, column 55
    function value_48 () : java.util.Date {
      return helper.RuleStartDate
    }
    
    // 'value' attribute on DateInput (id=RuleEndDate_Input) at UWRulePanelSet.pcf: line 116, column 55
    function value_55 () : java.util.Date {
      return helper.RuleEndDate
    }
    
    // 'value' attribute on TypeKeyInput (id=RuleContextDefinitionKey_Input) at UWRulePanelSet.pcf: line 152, column 62
    function value_68 () : typekey.RuleContextDefinitionKey {
      return controller.RuleContextDefinitionKey
    }
    
    // 'value' attribute on TextInput (id=ContextDescription_Input) at UWRulePanelSet.pcf: line 157, column 73
    function value_73 () : java.lang.String {
      return controller.RuleContextDefinitionKeyDescription
    }
    
    // 'value' attribute on BooleanRadioInput (id=AutoApprovable_Input) at UWRulePanelSet.pcf: line 190, column 58
    function value_86 () : java.lang.Boolean {
      return uwRule.UWIssueType.AutoApprovable
    }
    
    // 'value' attribute on BooleanRadioInput (id=DefaultEditBeforeBind_Input) at UWRulePanelSet.pcf: line 195, column 65
    function value_90 () : java.lang.Boolean {
      return uwRule.UWIssueType.DefaultEditBeforeBind
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultApprovalBlockingPoint_Input) at UWRulePanelSet.pcf: line 201, column 57
    function value_94 () : typekey.UWIssueBlockingPoint {
      return uwRule.UWIssueType.DefaultApprovalBlockingPoint
    }
    
    // 'visible' attribute on TypeKeyInput (id=Comparator_Input) at UWRulePanelSet.pcf: line 209, column 63
    function visible_100 () : java.lang.Boolean {
      return interactiveWidgets.Comparator.Visible
    }
    
    // 'visible' attribute on TypeKeyInput (id=ValueFormatterType_Input) at UWRulePanelSet.pcf: line 221, column 63
    function visible_108 () : java.lang.Boolean {
      return interactiveWidgets.Formatter.Visible
    }
    
    // 'visible' attribute on TypeKeyInput (id=DefaultValueAssignmentType_Input) at UWRulePanelSet.pcf: line 228, column 67
    function visible_117 () : java.lang.Boolean {
      return interactiveWidgets.AssignmenType.Visible
    }
    
    // 'visible' attribute on TextInput (id=DefaultValueOffsetAmount_Input) at UWRulePanelSet.pcf: line 235, column 66
    function visible_125 () : java.lang.Boolean {
      return interactiveWidgets.OffsetAmount.Visible
    }
    
    // 'visible' attribute on TypeKeyInput (id=DefaultValueOffsetCurrency_Input) at UWRulePanelSet.pcf: line 242, column 68
    function visible_133 () : java.lang.Boolean {
      return interactiveWidgets.OffsetCurrency.Visible
    }
    
    // 'visible' attribute on InputSetRef at UWRulePanelSet.pcf: line 85, column 55
    function visible_30 () : java.lang.Boolean {
      return not uwRule.ExternallyManaged
    }
    
    property get controller () : gw.bizrules.pcf.RulePageController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RulePageController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get helper () : gw.web.bizrules.UWRulePanelSetHelper {
      return getVariableValue("helper", 0) as gw.web.bizrules.UWRulePanelSetHelper
    }
    
    property set helper ($arg :  gw.web.bizrules.UWRulePanelSetHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get importingVersion () : boolean {
      return getRequireValue("importingVersion", 0) as java.lang.Boolean
    }
    
    property set importingVersion ($arg :  boolean) {
      setRequireValue("importingVersion", 0, $arg)
    }
    
    property get interactiveWidgets () : gw.web.bizrules.UWRuleInteractiveWidgetSet {
      return getVariableValue("interactiveWidgets", 0) as gw.web.bizrules.UWRuleInteractiveWidgetSet
    }
    
    property set interactiveWidgets ($arg :  gw.web.bizrules.UWRuleInteractiveWidgetSet) {
      setVariableValue("interactiveWidgets", 0, $arg)
    }
    
    property get uwRule () : UWRule {
      return getVariableValue("uwRule", 0) as UWRule
    }
    
    property set uwRule ($arg :  UWRule) {
      setVariableValue("uwRule", 0, $arg)
    }
    
    property get valueParamCache () : gw.web.bizrules.UWRuleInteractiveWidgetSet.ValueParameterCache {
      return getVariableValue("valueParamCache", 0) as gw.web.bizrules.UWRuleInteractiveWidgetSet.ValueParameterCache
    }
    
    property set valueParamCache ($arg :  gw.web.bizrules.UWRuleInteractiveWidgetSet.ValueParameterCache) {
      setVariableValue("valueParamCache", 0, $arg)
    }
    
    property get version () : RuleVersion {
      return getRequireValue("version", 0) as RuleVersion
    }
    
    property set version ($arg :  RuleVersion) {
      setRequireValue("version", 0, $arg)
    }
    
    
  }
  
  
}