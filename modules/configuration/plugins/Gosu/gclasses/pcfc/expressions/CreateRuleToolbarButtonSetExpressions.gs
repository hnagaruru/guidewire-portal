package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CreateRuleToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateRuleToolbarButtonSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CreateRuleToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateRuleToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Add) at CreateRuleToolbarButtonSet.pcf: line 25, column 88
    function action_1 () : void {
      navigationSupport.goToCreateRulePage(ruleTypeRef.get().getSubtypeTypeKey() as typekey.Rule)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Clone) at CreateRuleToolbarButtonSet.pcf: line 33, column 88
    function allCheckedRowsAction_3 (CheckedValues :  Object[], CheckedValuesErrors :  java.util.Map) : void {
      navigationSupport.goToCloneRulePage(checkedValuesAccessor.SingleRule)
    }
    
    // 'visible' attribute on ToolbarButton (id=Add) at CreateRuleToolbarButtonSet.pcf: line 25, column 88
    function visible_0 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(ruleTypeRef.get())
    }
    
    property get checkedValuesAccessor () : gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor {
      return getRequireValue("checkedValuesAccessor", 0) as gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor
    }
    
    property set checkedValuesAccessor ($arg :  gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor) {
      setRequireValue("checkedValuesAccessor", 0, $arg)
    }
    
    property get navigationSupport () : gw.bizrules.pcf.BizRulesPageNavigationSupport {
      return getRequireValue("navigationSupport", 0) as gw.bizrules.pcf.BizRulesPageNavigationSupport
    }
    
    property set navigationSupport ($arg :  gw.bizrules.pcf.BizRulesPageNavigationSupport) {
      setRequireValue("navigationSupport", 0, $arg)
    }
    
    property get ruleTypeRef () : gw.pl.persistence.type.EntityTypeReference<Rule> {
      return getRequireValue("ruleTypeRef", 0) as gw.pl.persistence.type.EntityTypeReference<Rule>
    }
    
    property set ruleTypeRef ($arg :  gw.pl.persistence.type.EntityTypeReference<Rule>) {
      setRequireValue("ruleTypeRef", 0, $arg)
    }
    
    
  }
  
  
}