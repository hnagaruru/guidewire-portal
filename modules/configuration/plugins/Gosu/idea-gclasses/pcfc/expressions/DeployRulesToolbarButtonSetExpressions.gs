package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/DeployRulesToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DeployRulesToolbarButtonSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/DeployRulesToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DeployRulesToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DeploySelected) at DeployRulesToolbarButtonSet.pcf: line 37, column 92
    function action_1 () : void {
      gw.bizrules.pcf.RuleDeploymentPageHelper.deployFromList(navigationSupport, ruleTypeRef, checkedValuesAccessor.RuleVersions)
    }
    
    // 'action' attribute on MenuItem (id=DeployAll) at DeployRulesToolbarButtonSet.pcf: line 43, column 92
    function action_3 () : void {
      gw.bizrules.pcf.RuleDeploymentPageHelper.deployFromQuery(navigationSupport, ruleTypeRef, visibleRulesQuery)
    }
    
    // 'available' attribute on ToolbarButton (id=DeployButton) at DeployRulesToolbarButtonSet.pcf: line 31, column 140
    function available_4 () : java.lang.Boolean {
      return not gw.bizrules.management.BizRulesRollingUpgradeManager.Instance.RollingUpgradeProcessStartedInDB
    }
    
    // 'visible' attribute on MenuItem (id=DeploySelected) at DeployRulesToolbarButtonSet.pcf: line 37, column 92
    function visible_0 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(ruleTypeRef.get())
    }
    
    // 'visible' attribute on ToolbarButton (id=DeployButton) at DeployRulesToolbarButtonSet.pcf: line 31, column 140
    function visible_5 () : java.lang.Boolean {
      return pageHelper.VersionController.DeploymentEnabled and gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(ruleTypeRef.get())
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
    
    property get pageHelper () : gw.bizrules.pcf.RuleListPageHelper {
      return getRequireValue("pageHelper", 0) as gw.bizrules.pcf.RuleListPageHelper
    }
    
    property set pageHelper ($arg :  gw.bizrules.pcf.RuleListPageHelper) {
      setRequireValue("pageHelper", 0, $arg)
    }
    
    property get ruleTypeRef () : gw.pl.persistence.type.EntityTypeReference<Rule> {
      return getRequireValue("ruleTypeRef", 0) as gw.pl.persistence.type.EntityTypeReference<Rule>
    }
    
    property set ruleTypeRef ($arg :  gw.pl.persistence.type.EntityTypeReference<Rule>) {
      setRequireValue("ruleTypeRef", 0, $arg)
    }
    
    property get visibleRulesQuery () : gw.api.database.Query<RuleVersion> {
      return getRequireValue("visibleRulesQuery", 0) as gw.api.database.Query<RuleVersion>
    }
    
    property set visibleRulesQuery ($arg :  gw.api.database.Query<RuleVersion>) {
      setRequireValue("visibleRulesQuery", 0, $arg)
    }
    
    
  }
  
  
}