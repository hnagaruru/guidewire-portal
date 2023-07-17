package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleVariableBuilderExpressionMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleVariableBuilderExpressionMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleVariableBuilderExpressionMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleVariableBuilderExpressionMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=modeItem) at RuleVariableBuilderExpressionMenuItemSet.pcf: line 25, column 76
    function action_2 () : void {
      lineHolder.updateModeForFragment(fragHolder, mode)
    }
    
    // 'icon' attribute on MenuItem (id=modeItem) at RuleVariableBuilderExpressionMenuItemSet.pcf: line 25, column 76
    function icon_4 () : java.lang.String {
      return fragHolder.getIconForCurrentlySelectedMenuItem(mode)
    }
    
    // 'label' attribute on MenuItem (id=modeItem) at RuleVariableBuilderExpressionMenuItemSet.pcf: line 25, column 76
    function label_3 () : java.lang.Object {
      return fragHolder.getMenuItemDisplayForMode(mode)
    }
    
    // 'visible' attribute on MenuItem (id=modeItem) at RuleVariableBuilderExpressionMenuItemSet.pcf: line 25, column 76
    function visible_1 () : java.lang.Boolean {
      return lineHolder.SwitchableLineExpressionModes.contains(mode)
    }
    
    property get mode () : gw.bizrules.pcf.ExpressionInputMode {
      return getIteratedValue(1) as gw.bizrules.pcf.ExpressionInputMode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleVariableBuilderExpressionMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleVariableBuilderExpressionMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MenuItemIterator at RuleVariableBuilderExpressionMenuItemSet.pcf: line 18, column 105
    function value_5 () : gw.bizrules.pcf.ExpressionInputMode[] {
      return gw.bizrules.pcf.ExpressionInputMode.values()
    }
    
    // 'visible' attribute on MenuItemIterator at RuleVariableBuilderExpressionMenuItemSet.pcf: line 18, column 105
    function visible_0 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and (lineHolder.SwitchableLineExpressionModes.size() > 1)
    }
    
    property get fragHolder () : gw.bizrules.pcf.ExpressionFragmentHolder {
      return getRequireValue("fragHolder", 0) as gw.bizrules.pcf.ExpressionFragmentHolder
    }
    
    property set fragHolder ($arg :  gw.bizrules.pcf.ExpressionFragmentHolder) {
      setRequireValue("fragHolder", 0, $arg)
    }
    
    property get lineHolder () : gw.bizrules.pcf.RuleVariableHolder {
      return getRequireValue("lineHolder", 0) as gw.bizrules.pcf.RuleVariableHolder
    }
    
    property set lineHolder ($arg :  gw.bizrules.pcf.RuleVariableHolder) {
      setRequireValue("lineHolder", 0, $arg)
    }
    
    
  }
  
  
}