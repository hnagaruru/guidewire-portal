package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleListMoreButtonMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleListMoreButtonMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleListMoreButtonMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleListMoreButtonMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Import) at RuleListMoreButtonMenuItemSet.pcf: line 30, column 96
    function action_1 () : void {
      StartRuleImportPopup.push(navigationSupport)
    }
    
    // 'action' attribute on MenuItem (id=ExportSelected) at RuleListMoreButtonMenuItemSet.pcf: line 35, column 95
    function action_3 () : void {
      gw.bizrules.pcf.RuleExportPageHelper.exportSelected(navigationSupport, ruleTypeReference, checkedValuesAccessor.RuleVersions)
    }
    
    // 'action' attribute on MenuItem (id=ExportAll) at RuleListMoreButtonMenuItemSet.pcf: line 40, column 90
    function action_4 () : void {
      gw.bizrules.pcf.RuleExportPageHelper.exportAll(navigationSupport, ruleTypeReference, allQuery)
    }
    
    // 'action' attribute on MenuItem (id=EnableSelectedRules) at RuleListMoreButtonMenuItemSet.pcf: line 48, column 151
    function action_6 () : void {
      pageHelper.toggleEnableDisableSelectedRules(navigationSupport, uiConfig, CurrentLocation, checkedValuesAccessor.RuleVersions, true);
    }
    
    // 'action' attribute on MenuItem (id=DisableSelectedRules) at RuleListMoreButtonMenuItemSet.pcf: line 55, column 151
    function action_9 () : void {
      pageHelper.toggleEnableDisableSelectedRules(navigationSupport, uiConfig, CurrentLocation, checkedValuesAccessor.RuleVersions, false);
    }
    
    // 'action' attribute on MenuItem (id=Import) at RuleListMoreButtonMenuItemSet.pcf: line 30, column 96
    function action_dest_2 () : pcf.api.Destination {
      return pcf.StartRuleImportPopup.createDestination(navigationSupport)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=DisableSelectedRules) at RuleListMoreButtonMenuItemSet.pcf: line 55, column 151
    function confirmMessage_10 () : java.lang.String {
      return pageHelper.getConfirmationMessageToEnableDisableMultipleRules(false)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=EnableSelectedRules) at RuleListMoreButtonMenuItemSet.pcf: line 48, column 151
    function confirmMessage_7 () : java.lang.String {
      return pageHelper.getConfirmationMessageToEnableDisableMultipleRules(true)
    }
    
    // 'visible' attribute on MenuItem (id=Import) at RuleListMoreButtonMenuItemSet.pcf: line 30, column 96
    function visible_0 () : java.lang.Boolean {
      return gw.bizrules.pcf.RulePermissionUIHelper.canImportRule(ruleTypeReference.get())
    }
    
    // 'visible' attribute on MenuItem (id=EnableSelectedRules) at RuleListMoreButtonMenuItemSet.pcf: line 48, column 151
    function visible_5 () : java.lang.Boolean {
      return (not pageHelper.VersionController.DeploymentEnabled) and gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(ruleTypeReference.get())
    }
    
    property get allQuery () : gw.api.database.Query<RuleVersion> {
      return getRequireValue("allQuery", 0) as gw.api.database.Query<RuleVersion>
    }
    
    property set allQuery ($arg :  gw.api.database.Query<RuleVersion>) {
      setRequireValue("allQuery", 0, $arg)
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
    
    property get ruleTypeReference () : gw.pl.persistence.type.EntityTypeReference<Rule> {
      return getRequireValue("ruleTypeReference", 0) as gw.pl.persistence.type.EntityTypeReference<Rule>
    }
    
    property set ruleTypeReference ($arg :  gw.pl.persistence.type.EntityTypeReference<Rule>) {
      setRequireValue("ruleTypeReference", 0, $arg)
    }
    
    property get uiConfig () : Map<RuleActionKey, gw.bizrules.pcf.CommandDefinitionUIConfig> {
      return getRequireValue("uiConfig", 0) as Map<RuleActionKey, gw.bizrules.pcf.CommandDefinitionUIConfig>
    }
    
    property set uiConfig ($arg :  Map<RuleActionKey, gw.bizrules.pcf.CommandDefinitionUIConfig>) {
      setRequireValue("uiConfig", 0, $arg)
    }
    
    
  }
  
  
}