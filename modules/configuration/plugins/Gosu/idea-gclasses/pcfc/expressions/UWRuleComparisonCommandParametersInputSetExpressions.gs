package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleComparisonCommandParametersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRuleComparisonCommandParametersInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRuleComparisonCommandParametersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRuleComparisonCommandParametersInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=IssueKey) at UWRuleComparisonCommandParametersInputSet.pcf: line 15, column 22
    function def_onEnter_0 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_ISSUE_KEY))
    }
    
    // 'def' attribute on InputSetRef (id=Value) at UWRuleComparisonCommandParametersInputSet.pcf: line 18, column 19
    function def_onEnter_2 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_VALUE))
    }
    
    // 'def' attribute on InputSetRef (id=ShortDesc) at UWRuleComparisonCommandParametersInputSet.pcf: line 21, column 23
    function def_onEnter_4 (def :  pcf.LocalizedRuleComparisonInputSet) : void {
      def.onEnter(controller, commandDefinitionDiff, gw.bizrules.provisioning.AddUWIssueRuleAction.SHORT_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=LongDesc) at UWRuleComparisonCommandParametersInputSet.pcf: line 24, column 22
    function def_onEnter_6 (def :  pcf.LocalizedRuleComparisonInputSet) : void {
      def.onEnter(controller, commandDefinitionDiff, gw.bizrules.provisioning.AddUWIssueRuleAction.LONG_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=EvalContext) at UWRuleComparisonCommandParametersInputSet.pcf: line 27, column 25
    function def_onEnter_8 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_EVAL_CONTEXT))
    }
    
    // 'def' attribute on InputSetRef (id=IssueKey) at UWRuleComparisonCommandParametersInputSet.pcf: line 15, column 22
    function def_refreshVariables_1 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_ISSUE_KEY))
    }
    
    // 'def' attribute on InputSetRef (id=Value) at UWRuleComparisonCommandParametersInputSet.pcf: line 18, column 19
    function def_refreshVariables_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_VALUE))
    }
    
    // 'def' attribute on InputSetRef (id=ShortDesc) at UWRuleComparisonCommandParametersInputSet.pcf: line 21, column 23
    function def_refreshVariables_5 (def :  pcf.LocalizedRuleComparisonInputSet) : void {
      def.refreshVariables(controller, commandDefinitionDiff, gw.bizrules.provisioning.AddUWIssueRuleAction.SHORT_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=LongDesc) at UWRuleComparisonCommandParametersInputSet.pcf: line 24, column 22
    function def_refreshVariables_7 (def :  pcf.LocalizedRuleComparisonInputSet) : void {
      def.refreshVariables(controller, commandDefinitionDiff, gw.bizrules.provisioning.AddUWIssueRuleAction.LONG_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=EvalContext) at UWRuleComparisonCommandParametersInputSet.pcf: line 27, column 25
    function def_refreshVariables_9 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_EVAL_CONTEXT))
    }
    
    property get commandDefinitionDiff () : gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition> {
      return getRequireValue("commandDefinitionDiff", 0) as gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>
    }
    
    property set commandDefinitionDiff ($arg :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>) {
      setRequireValue("commandDefinitionDiff", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}