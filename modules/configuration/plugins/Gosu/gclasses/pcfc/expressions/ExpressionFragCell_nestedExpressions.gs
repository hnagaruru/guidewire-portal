package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExpressionFragCell.nested.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExpressionFragCell_nestedExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ExpressionFragCell.nested.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExpressionFragCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PopupLink) at ExpressionFragCell.nested.pcf: line 33, column 27
    function action_5 () : void {
      inputConfig.pushPopup()
    }
    
    // 'def' attribute on MenuItemSetRef at ExpressionFragCell.nested.pcf: line 26, column 80
    function def_onEnter_1 (def :  pcf.ConditionBuilderExpressionMenuItemSet) : void {
      def.onEnter(fragHolder, lineHolder)
    }
    
    // 'def' attribute on MenuItemSetRef at ExpressionFragCell.nested.pcf: line 26, column 80
    function def_refreshVariables_2 (def :  pcf.ConditionBuilderExpressionMenuItemSet) : void {
      def.refreshVariables(fragHolder, lineHolder)
    }
    
    // 'initialValue' attribute on Variable at ExpressionFragCell.nested.pcf: line 18, column 49
    function initialValue_0 () : gw.bizrules.pcf.NestedInputConfig {
      return fragHolder as gw.bizrules.pcf.NestedInputConfig
    }
    
    // 'label' attribute on Link (id=PopupLink) at ExpressionFragCell.nested.pcf: line 33, column 27
    function label_6 () : java.lang.Object {
      return inputConfig.PopupLinkLabel
    }
    
    // 'value' attribute on TextInput (id=DisplayText_Input) at ExpressionFragCell.nested.pcf: line 24, column 53
    function value_3 () : java.lang.String {
      return inputConfig.getLabelandNestedText()
    }
    
    property get fragHolder () : gw.bizrules.pcf.ExpressionFragmentHolder {
      return getRequireValue("fragHolder", 0) as gw.bizrules.pcf.ExpressionFragmentHolder
    }
    
    property set fragHolder ($arg :  gw.bizrules.pcf.ExpressionFragmentHolder) {
      setRequireValue("fragHolder", 0, $arg)
    }
    
    property get inputConfig () : gw.bizrules.pcf.NestedInputConfig {
      return getVariableValue("inputConfig", 0) as gw.bizrules.pcf.NestedInputConfig
    }
    
    property set inputConfig ($arg :  gw.bizrules.pcf.NestedInputConfig) {
      setVariableValue("inputConfig", 0, $arg)
    }
    
    property get lineHolder () : gw.bizrules.pcf.RuleConditionLineHolder {
      return getRequireValue("lineHolder", 0) as gw.bizrules.pcf.RuleConditionLineHolder
    }
    
    property set lineHolder ($arg :  gw.bizrules.pcf.RuleConditionLineHolder) {
      setRequireValue("lineHolder", 0, $arg)
    }
    
    
  }
  
  
}