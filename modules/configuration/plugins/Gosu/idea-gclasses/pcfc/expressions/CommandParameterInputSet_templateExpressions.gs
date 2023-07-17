package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandParameterInputSet.template.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommandParameterInputSet_templateExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CommandParameterInputSet.template.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommandParameterInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function autoComplete_9 () : gw.api.contact.AutocompleteHandler {
      return fragHolder.AutocompleteHandler
    }
    
    // 'def' attribute on MenuItemSetRef at CommandParameterInputSet.template.pcf: line 28, column 61
    function def_onEnter_1 (def :  pcf.CommandParameterMenuItemSet) : void {
      def.onEnter(parameterHolder)
    }
    
    // 'def' attribute on MenuItemSetRef at CommandParameterInputSet.template.pcf: line 28, column 61
    function def_refreshVariables_2 (def :  pcf.CommandParameterMenuItemSet) : void {
      def.refreshVariables(parameterHolder)
    }
    
    // 'value' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      fragHolder.Fragment = (__VALUE_TO_SET as entity.ExpressionFragment)
    }
    
    // 'initialValue' attribute on Variable at CommandParameterInputSet.template.pcf: line 15, column 60
    function initialValue_0 () : gw.bizrules.pcf.TextExpressionFragmentHolder {
      return parameterHolder.FragHolder as gw.bizrules.pcf.TextExpressionFragmentHolder
    }
    
    // 'inputConversion' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function inputConversion_4 (VALUE :  java.lang.String) : java.lang.Object {
      return fragHolder.inputConversion(VALUE)
    }
    
    // 'label' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function label_3 () : java.lang.Object {
      return parameterHolder.ParameterLabel
    }
    
    // 'outputConversion' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function outputConversion_5 (VALUE :  entity.ExpressionFragment) : java.lang.String {
      return fragHolder.outputConversion()
    }
    
    // 'value' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function valueRoot_8 () : java.lang.Object {
      return fragHolder
    }
    
    // 'value' attribute on TextInput (id=TemplateExpression_Input) at CommandParameterInputSet.template.pcf: line 25, column 45
    function value_6 () : entity.ExpressionFragment {
      return fragHolder.Fragment
    }
    
    property get fragHolder () : gw.bizrules.pcf.TextExpressionFragmentHolder {
      return getVariableValue("fragHolder", 0) as gw.bizrules.pcf.TextExpressionFragmentHolder
    }
    
    property set fragHolder ($arg :  gw.bizrules.pcf.TextExpressionFragmentHolder) {
      setVariableValue("fragHolder", 0, $arg)
    }
    
    property get parameterHolder () : gw.bizrules.pcf.RuleCommandParameterHolder {
      return getRequireValue("parameterHolder", 0) as gw.bizrules.pcf.RuleCommandParameterHolder
    }
    
    property set parameterHolder ($arg :  gw.bizrules.pcf.RuleCommandParameterHolder) {
      setRequireValue("parameterHolder", 0, $arg)
    }
    
    
  }
  
  
}