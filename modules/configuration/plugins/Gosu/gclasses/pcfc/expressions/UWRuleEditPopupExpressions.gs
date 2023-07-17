package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRuleEditPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRuleEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRuleEditPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper, chosenSide :  RuleImportSide) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=UWRuleEditPopup) at UWRuleEditPopup.pcf: line 12, column 117
    static function canVisit_8 (chosenSide :  RuleImportSide, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : java.lang.Boolean {
      return perm.Rule.edit(importEntry.ImportedVersion.Rule)
    }
    
    // 'def' attribute on PanelRef at UWRuleEditPopup.pcf: line 40, column 71
    function def_onEnter_6 (def :  pcf.UWRulePanelSet) : void {
      def.onEnter(ruleVersion, false, rulePageController)
    }
    
    // 'def' attribute on PanelRef at UWRuleEditPopup.pcf: line 40, column 71
    function def_refreshVariables_7 (def :  pcf.UWRulePanelSet) : void {
      def.refreshVariables(ruleVersion, false, rulePageController)
    }
    
    // 'initialValue' attribute on Variable at UWRuleEditPopup.pcf: line 27, column 27
    function initialValue_0 () : RuleVersion {
      return importHelper.getNewDraftVersionFrom(importEntry, chosenSide)
    }
    
    // 'initialValue' attribute on Variable at UWRuleEditPopup.pcf: line 31, column 50
    function initialValue_1 () : gw.bizrules.pcf.RulePageController {
      return new gw.bizrules.pcf.RulePageController(ruleVersion, {}, CurrentLocation, gw.bizrules.pcf.RuleConditionLineHolder.SWITCHABLE_LINE_EXPRESSION_MODES_SUPERSET)
    }
    
    // 'title' attribute on Popup (id=UWRuleEditPopup) at UWRuleEditPopup.pcf: line 12, column 117
    static function title_9 (chosenSide :  RuleImportSide, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : java.lang.Object {
      return DisplayKey.get("BizRules.Import.Comparison.Edit.Title", importEntry.NewHeadVersion.Rule.Name)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleEditPopup.pcf: line 35, column 63
    function toolbarButtonSet_onEnter_2 (def :  pcf.RuleEditPopupToolbarButtonSet) : void {
      def.onEnter()
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleEditPopup.pcf: line 37, column 87
    function toolbarButtonSet_onEnter_4 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(rulePageController)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleEditPopup.pcf: line 35, column 63
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.RuleEditPopupToolbarButtonSet) : void {
      def.refreshVariables()
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleEditPopup.pcf: line 37, column 87
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(rulePageController)
    }
    
    override property get CurrentLocation () : pcf.UWRuleEditPopup {
      return super.CurrentLocation as pcf.UWRuleEditPopup
    }
    
    property get chosenSide () : RuleImportSide {
      return getVariableValue("chosenSide", 0) as RuleImportSide
    }
    
    property set chosenSide ($arg :  RuleImportSide) {
      setVariableValue("chosenSide", 0, $arg)
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
    
    property get rulePageController () : gw.bizrules.pcf.RulePageController {
      return getVariableValue("rulePageController", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set rulePageController ($arg :  gw.bizrules.pcf.RulePageController) {
      setVariableValue("rulePageController", 0, $arg)
    }
    
    property get ruleVersion () : RuleVersion {
      return getVariableValue("ruleVersion", 0) as RuleVersion
    }
    
    property set ruleVersion ($arg :  RuleVersion) {
      setVariableValue("ruleVersion", 0, $arg)
    }
    
    
  }
  
  
}