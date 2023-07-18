package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocalizedCommandParameterInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocalizedCommandParameterInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LocalizedCommandParameterInputSet.pcf: line 21, column 114
    function def_onEnter_1 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(langParam.ParameterName))
    }
    
    // 'def' attribute on InputSetRef at LocalizedCommandParameterInputSet.pcf: line 21, column 114
    function def_refreshVariables_2 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(langParam.ParameterName))
    }
    
    property get langParam () : gw.bizrules.provisioning.LocalizedRuleActionParameter.LangParam {
      return getIteratedValue(1) as gw.bizrules.provisioning.LocalizedRuleActionParameter.LangParam
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocalizedCommandParameterInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at LocalizedCommandParameterInputSet.pcf: line 14, column 32
    function label_0 () : java.lang.String {
      return parameter.Label
    }
    
    // 'value' attribute on InputIterator (id=additionalLanguages) at LocalizedCommandParameterInputSet.pcf: line 19, column 85
    function value_3 () : gw.bizrules.provisioning.LocalizedRuleActionParameter.LangParam[] {
      return parameter.AllLangParams
    }
    
    property get commandDefinition () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getRequireValue("commandDefinition", 0) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    property set commandDefinition ($arg :  gw.bizrules.pcf.RuleCommandDefinitionHolder) {
      setRequireValue("commandDefinition", 0, $arg)
    }
    
    property get parameter () : gw.bizrules.provisioning.LocalizedRuleActionParameter {
      return getRequireValue("parameter", 0) as gw.bizrules.provisioning.LocalizedRuleActionParameter
    }
    
    property set parameter ($arg :  gw.bizrules.provisioning.LocalizedRuleActionParameter) {
      setRequireValue("parameter", 0, $arg)
    }
    
    
  }
  
  
}