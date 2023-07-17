package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ruleVersion :  RuleVersion, importing :  boolean) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at UWRulePopup.pcf: line 22, column 67
    function def_onEnter_1 (def :  pcf.UWRulePanelSet) : void {
      def.onEnter(ruleVersion, importing, controller)
    }
    
    // 'def' attribute on PanelRef at UWRulePopup.pcf: line 22, column 67
    function def_refreshVariables_2 (def :  pcf.UWRulePanelSet) : void {
      def.refreshVariables(ruleVersion, importing, controller)
    }
    
    // 'initialValue' attribute on Variable at UWRulePopup.pcf: line 19, column 50
    function initialValue_0 () : gw.bizrules.pcf.RulePageController {
      return new gw.bizrules.pcf.RulePageController(ruleVersion, gw.web.bizrules.UWRulesPageHelper.UIConfigs, CurrentLocation, gw.web.bizrules.PCBizRulesDetailsStateHolder.SwitchableModes)
    }
    
    // 'title' attribute on Popup (id=UWRulePopup) at UWRulePopup.pcf: line 7, column 85
    static function title_3 (importing :  boolean, ruleVersion :  RuleVersion) : java.lang.Object {
      return DisplayKey.get('Web.BizRules.UWRulePopup.Title', ruleVersion.Rule.Name)
    }
    
    override property get CurrentLocation () : pcf.UWRulePopup {
      return super.CurrentLocation as pcf.UWRulePopup
    }
    
    property get controller () : gw.bizrules.pcf.RulePageController {
      return getVariableValue("controller", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RulePageController) {
      setVariableValue("controller", 0, $arg)
    }
    
    property get importing () : boolean {
      return getVariableValue("importing", 0) as java.lang.Boolean
    }
    
    property set importing ($arg :  boolean) {
      setVariableValue("importing", 0, $arg)
    }
    
    property get ruleVersion () : RuleVersion {
      return getVariableValue("ruleVersion", 0) as RuleVersion
    }
    
    property set ruleVersion ($arg :  RuleVersion) {
      setVariableValue("ruleVersion", 0, $arg)
    }
    
    
  }
  
  
}