package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/VariableExpressionFragCell.nested.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VariableExpressionFragCell_nestedExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/VariableExpressionFragCell.nested.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VariableExpressionFragCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PopupLink) at VariableExpressionFragCell.nested.pcf: line 30, column 27
    function action_5 () : void {
      inputConfig.pushPopup()
    }
    
    // 'def' attribute on MenuItemSetRef at VariableExpressionFragCell.nested.pcf: line 23, column 110
    function def_onEnter_1 (def :  pcf.RuleVariableBuilderExpressionMenuItemSet) : void {
      def.onEnter(ruleVarHolder.ExpressionFragHolder, ruleVarHolder)
    }
    
    // 'def' attribute on MenuItemSetRef at VariableExpressionFragCell.nested.pcf: line 23, column 110
    function def_refreshVariables_2 (def :  pcf.RuleVariableBuilderExpressionMenuItemSet) : void {
      def.refreshVariables(ruleVarHolder.ExpressionFragHolder, ruleVarHolder)
    }
    
    // 'initialValue' attribute on Variable at VariableExpressionFragCell.nested.pcf: line 15, column 49
    function initialValue_0 () : gw.bizrules.pcf.NestedInputConfig {
      return ruleVarHolder.ExpressionFragHolder as gw.bizrules.pcf.NestedInputConfig
    }
    
    // 'label' attribute on Link (id=PopupLink) at VariableExpressionFragCell.nested.pcf: line 30, column 27
    function label_6 () : java.lang.Object {
      return inputConfig.PopupLinkLabel
    }
    
    // 'value' attribute on TextInput (id=DisplayText_Input) at VariableExpressionFragCell.nested.pcf: line 21, column 53
    function value_3 () : java.lang.String {
      return inputConfig.getLabelandNestedText()
    }
    
    property get inputConfig () : gw.bizrules.pcf.NestedInputConfig {
      return getVariableValue("inputConfig", 0) as gw.bizrules.pcf.NestedInputConfig
    }
    
    property set inputConfig ($arg :  gw.bizrules.pcf.NestedInputConfig) {
      setVariableValue("inputConfig", 0, $arg)
    }
    
    property get ruleVarHolder () : gw.bizrules.pcf.RuleVariableHolder {
      return getRequireValue("ruleVarHolder", 0) as gw.bizrules.pcf.RuleVariableHolder
    }
    
    property set ruleVarHolder ($arg :  gw.bizrules.pcf.RuleVariableHolder) {
      setRequireValue("ruleVarHolder", 0, $arg)
    }
    
    
  }
  
  
}