package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CreateUWRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateUWRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CreateUWRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateUWRuleExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (ruleToClone :  UWRule) : int {
      return 1
    }
    
    // 'action' attribute on AlertBar (id=DuplicatedNameAlertBar) at CreateUWRule.pcf: line 44, column 74
    function action_6 () : void {
      versionController.pushRulesWithSameNamePopup(head.HeadVersion)
    }
    
    // 'afterCancel' attribute on Page (id=CreateUWRule) at CreateUWRule.pcf: line 13, column 180
    function afterCancel_9 () : void {
      UWRules.go()
    }
    
    // 'afterCancel' attribute on Page (id=CreateUWRule) at CreateUWRule.pcf: line 13, column 180
    function afterCancel_dest_10 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=CreateUWRule) at CreateUWRule.pcf: line 13, column 180
    function afterCommit_11 (TopLocation :  pcf.api.Location) : void {
      UWRuleDetail.go(head)
    }
    
    // 'def' attribute on PanelRef at CreateUWRule.pcf: line 46, column 72
    function def_onEnter_7 (def :  pcf.UWRulePanelSet) : void {
      def.onEnter(head.HeadVersion, false, ruleController)
    }
    
    // 'def' attribute on PanelRef at CreateUWRule.pcf: line 46, column 72
    function def_refreshVariables_8 (def :  pcf.UWRulePanelSet) : void {
      def.refreshVariables(head.HeadVersion, false, ruleController)
    }
    
    // 'initialValue' attribute on Variable at CreateUWRule.pcf: line 24, column 133
    function initialValue_0 () : RuleHead {
      return new gw.web.bizrules.UWRuleFactory().createRuleHead(com.google.common.base.Optional.fromNullable(ruleToClone))
    }
    
    // 'initialValue' attribute on Variable at CreateUWRule.pcf: line 28, column 115
    function initialValue_1 () : gw.bizrules.pcf.RuleVersionController {
      return new gw.bizrules.pcf.RuleVersionController(gw.bizrules.PCBizRulesNavigationSupport.Instance)
    }
    
    // 'initialValue' attribute on Variable at CreateUWRule.pcf: line 32, column 204
    function initialValue_2 () : gw.bizrules.pcf.RulePageController {
      return new gw.bizrules.pcf.RulePageController(head.HeadVersion, gw.web.bizrules.UWRulesPageHelper.UIConfigs, CurrentLocation, gw.web.bizrules.PCBizRulesDetailsStateHolder.SwitchableModes)
    }
    
    // 'parent' attribute on Page (id=CreateUWRule) at CreateUWRule.pcf: line 13, column 180
    static function parent_12 (ruleToClone :  UWRule) : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'title' attribute on Page (id=CreateUWRule) at CreateUWRule.pcf: line 13, column 180
    static function title_13 (ruleToClone :  UWRule) : java.lang.Object {
      return ruleToClone == null ? DisplayKey.get("Web.BizRules.CreateUWRule.Title") : DisplayKey.get("Web.BizRules.CreateUWRule.CloneTitle", ruleToClone.Name)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CreateUWRule.pcf: line 37, column 102
    function toolbarButtonSet_onEnter_3 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(ruleController)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CreateUWRule.pcf: line 37, column 102
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(ruleController)
    }
    
    // 'visible' attribute on AlertBar (id=DuplicatedNameAlertBar) at CreateUWRule.pcf: line 44, column 74
    function visible_5 () : java.lang.Boolean {
      return !versionController.isRuleNameUnique(head.HeadVersion)
    }
    
    override property get CurrentLocation () : pcf.CreateUWRule {
      return super.CurrentLocation as pcf.CreateUWRule
    }
    
    property get head () : RuleHead {
      return getVariableValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setVariableValue("head", 0, $arg)
    }
    
    property get ruleController () : gw.bizrules.pcf.RulePageController {
      return getVariableValue("ruleController", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set ruleController ($arg :  gw.bizrules.pcf.RulePageController) {
      setVariableValue("ruleController", 0, $arg)
    }
    
    property get ruleToClone () : UWRule {
      return getVariableValue("ruleToClone", 0) as UWRule
    }
    
    property set ruleToClone ($arg :  UWRule) {
      setVariableValue("ruleToClone", 0, $arg)
    }
    
    property get versionController () : gw.bizrules.pcf.RuleVersionController {
      return getVariableValue("versionController", 0) as gw.bizrules.pcf.RuleVersionController
    }
    
    property set versionController ($arg :  gw.bizrules.pcf.RuleVersionController) {
      setVariableValue("versionController", 0, $arg)
    }
    
    
  }
  
  
}