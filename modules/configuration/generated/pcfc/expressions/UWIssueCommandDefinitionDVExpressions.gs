package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWIssueCommandDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWIssueCommandDefinitionDVExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWIssueCommandDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWIssueCommandDefinitionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=IssueKey) at UWIssueCommandDefinitionDV.pcf: line 24, column 24
    function def_onEnter_1 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_ISSUE_KEY))
    }
    
    // 'def' attribute on InputSetRef (id=EvalContext) at UWIssueCommandDefinitionDV.pcf: line 40, column 140
    function def_onEnter_11 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_EVAL_CONTEXT))
    }
    
    // 'def' attribute on InputSetRef (id=Value) at UWIssueCommandDefinitionDV.pcf: line 28, column 62
    function def_onEnter_4 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_VALUE))
    }
    
    // 'def' attribute on InputSetRef (id=ShortDesc) at UWIssueCommandDefinitionDV.pcf: line 32, column 25
    function def_onEnter_6 (def :  pcf.LocalizedCommandParameterInputSet) : void {
      def.onEnter(commandDefinition, gw.bizrules.provisioning.AddUWIssueRuleAction.SHORT_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=LongDesc) at UWIssueCommandDefinitionDV.pcf: line 36, column 24
    function def_onEnter_8 (def :  pcf.LocalizedCommandParameterInputSet) : void {
      def.onEnter(commandDefinition, gw.bizrules.provisioning.AddUWIssueRuleAction.LONG_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=EvalContext) at UWIssueCommandDefinitionDV.pcf: line 40, column 140
    function def_refreshVariables_12 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_EVAL_CONTEXT))
    }
    
    // 'def' attribute on InputSetRef (id=IssueKey) at UWIssueCommandDefinitionDV.pcf: line 24, column 24
    function def_refreshVariables_2 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_ISSUE_KEY))
    }
    
    // 'def' attribute on InputSetRef (id=Value) at UWIssueCommandDefinitionDV.pcf: line 28, column 62
    function def_refreshVariables_5 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_VALUE))
    }
    
    // 'def' attribute on InputSetRef (id=ShortDesc) at UWIssueCommandDefinitionDV.pcf: line 32, column 25
    function def_refreshVariables_7 (def :  pcf.LocalizedCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition, gw.bizrules.provisioning.AddUWIssueRuleAction.SHORT_DESC_PARAMS)
    }
    
    // 'def' attribute on InputSetRef (id=LongDesc) at UWIssueCommandDefinitionDV.pcf: line 36, column 24
    function def_refreshVariables_9 (def :  pcf.LocalizedCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition, gw.bizrules.provisioning.AddUWIssueRuleAction.LONG_DESC_PARAMS)
    }
    
    // 'initialValue' attribute on Variable at UWIssueCommandDefinitionDV.pcf: line 20, column 59
    function initialValue_0 () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return controller.FirstCommandDefinitionHolder
    }
    
    // 'visible' attribute on InputSetRef (id=EvalContext) at UWIssueCommandDefinitionDV.pcf: line 40, column 140
    function visible_10 () : java.lang.Boolean {
      return commandDefinition.getParameterHolder(gw.bizrules.provisioning.AddUWIssueRuleAction.PARAM_EVAL_CONTEXT).UIConfig.Visible
    }
    
    // 'visible' attribute on InputSetRef (id=Value) at UWIssueCommandDefinitionDV.pcf: line 28, column 62
    function visible_3 () : java.lang.Boolean {
      return interactiveWidgets.ValueParameter.Visible
    }
    
    property get commandDefinition () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getVariableValue("commandDefinition", 0) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    property set commandDefinition ($arg :  gw.bizrules.pcf.RuleCommandDefinitionHolder) {
      setVariableValue("commandDefinition", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RulePageController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RulePageController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get helper () : gw.web.bizrules.UWRulePanelSetHelper {
      return getRequireValue("helper", 0) as gw.web.bizrules.UWRulePanelSetHelper
    }
    
    property set helper ($arg :  gw.web.bizrules.UWRulePanelSetHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get interactiveWidgets () : gw.web.bizrules.UWRuleInteractiveWidgetSet {
      return getRequireValue("interactiveWidgets", 0) as gw.web.bizrules.UWRuleInteractiveWidgetSet
    }
    
    property set interactiveWidgets ($arg :  gw.web.bizrules.UWRuleInteractiveWidgetSet) {
      setRequireValue("interactiveWidgets", 0, $arg)
    }
    
    
  }
  
  
}