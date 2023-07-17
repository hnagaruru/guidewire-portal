package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleComparisonActionsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRuleComparisonActionsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRuleComparisonActionsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRuleComparisonActionsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=RuleActionsSectionLabel) at UWRuleComparisonActionsInputSet.pcf: line 18, column 37
    function def_onEnter_1 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("Web.BizRules.UWRulePanelSet.UWIssueTitle"))
    }
    
    // 'def' attribute on InputSetRef at UWRuleComparisonActionsInputSet.pcf: line 20, column 91
    function def_onEnter_3 (def :  pcf.UWRuleComparisonCommandParametersInputSet) : void {
      def.onEnter(controller, commandDefinitionDiff)
    }
    
    // 'def' attribute on InputSetRef (id=RuleActionsSectionLabel) at UWRuleComparisonActionsInputSet.pcf: line 18, column 37
    function def_refreshVariables_2 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("Web.BizRules.UWRulePanelSet.UWIssueTitle"))
    }
    
    // 'def' attribute on InputSetRef at UWRuleComparisonActionsInputSet.pcf: line 20, column 91
    function def_refreshVariables_4 (def :  pcf.UWRuleComparisonCommandParametersInputSet) : void {
      def.refreshVariables(controller, commandDefinitionDiff)
    }
    
    // 'initialValue' attribute on Variable at UWRuleComparisonActionsInputSet.pcf: line 15, column 83
    function initialValue_0 () : gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition> {
      return controller.CommandDefinitionDiffs.first()
    }
    
    property get commandDefinitionDiff () : gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition> {
      return getVariableValue("commandDefinitionDiff", 0) as gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>
    }
    
    property set commandDefinitionDiff ($arg :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>) {
      setVariableValue("commandDefinitionDiff", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}