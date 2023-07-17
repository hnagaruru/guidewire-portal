package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LocalizedRuleComparisonInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocalizedRuleComparisonInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LocalizedRuleComparisonInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocalizedRuleComparisonInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LocalizedRuleComparisonInputSet.pcf: line 25, column 103
    function def_onEnter_2 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(langParam.ParameterName))
    }
    
    // 'def' attribute on InputSetRef at LocalizedRuleComparisonInputSet.pcf: line 25, column 103
    function def_refreshVariables_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(langParam.ParameterName))
    }
    
    property get langParam () : gw.bizrules.provisioning.LocalizedRuleActionParameter.LangParam {
      return getIteratedValue(1) as gw.bizrules.provisioning.LocalizedRuleActionParameter.LangParam
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LocalizedRuleComparisonInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocalizedRuleComparisonInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=ParamSectionLabel) at LocalizedRuleComparisonInputSet.pcf: line 18, column 31
    function def_onEnter_0 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, parameter.Label)
    }
    
    // 'def' attribute on InputSetRef (id=ParamSectionLabel) at LocalizedRuleComparisonInputSet.pcf: line 18, column 31
    function def_refreshVariables_1 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, parameter.Label)
    }
    
    // 'value' attribute on InputIterator (id=additionalLanguages) at LocalizedRuleComparisonInputSet.pcf: line 23, column 85
    function value_4 () : gw.bizrules.provisioning.LocalizedRuleActionParameter.LangParam[] {
      return parameter.AllLangParams
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
    
    property get parameter () : gw.bizrules.provisioning.LocalizedRuleActionParameter {
      return getRequireValue("parameter", 0) as gw.bizrules.provisioning.LocalizedRuleActionParameter
    }
    
    property set parameter ($arg :  gw.bizrules.provisioning.LocalizedRuleActionParameter) {
      setRequireValue("parameter", 0, $arg)
    }
    
    
  }
  
  
}