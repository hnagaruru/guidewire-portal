package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleExecutionInfoBar.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleExecutionInfoBar_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleExecutionInfoBar.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleExecutionInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on InfoBarElement (id=Unknown) at RuleExecutionInfoBar.default.pcf: line 45, column 58
    function iconColor_11 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ACTION_NEUTRAL
    }
    
    // 'iconColor' attribute on InfoBarElement (id=Executing) at RuleExecutionInfoBar.default.pcf: line 24, column 58
    function iconColor_2 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_SUCCESS
    }
    
    // 'iconColor' attribute on InfoBarElement (id=NotExecuting) at RuleExecutionInfoBar.default.pcf: line 31, column 99
    function iconColor_5 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'iconColor' attribute on InfoBarElement (id=PrevExecuting) at RuleExecutionInfoBar.default.pcf: line 38, column 62
    function iconColor_8 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_WARNING
    }
    
    // 'value' attribute on InfoBarElement (id=Executing) at RuleExecutionInfoBar.default.pcf: line 24, column 58
    function value_1 () : java.lang.Object {
      return status != null ? status.Description : ""
    }
    
    // 'value' attribute on InfoBarElement (id=PrevExecuting) at RuleExecutionInfoBar.default.pcf: line 38, column 62
    function value_7 () : java.lang.Object {
      return head != null ? head.getPrevExecutionTooltip(versionController) : ""
    }
    
    // 'visible' attribute on InfoBarElement (id=Executing) at RuleExecutionInfoBar.default.pcf: line 24, column 58
    function visible_0 () : java.lang.Boolean {
      return status != null and status == TC_ENABLED
    }
    
    // 'visible' attribute on InfoBarElement (id=NotExecuting) at RuleExecutionInfoBar.default.pcf: line 31, column 99
    function visible_3 () : java.lang.Boolean {
      return status != null and RuleExecutionStatus.TF_NOTEXECUTING.TypeKeys.contains(status)
    }
    
    // 'visible' attribute on InfoBarElement (id=PrevExecuting) at RuleExecutionInfoBar.default.pcf: line 38, column 62
    function visible_6 () : java.lang.Boolean {
      return status != null and status == TC_PREVENABLED
    }
    
    // 'visible' attribute on InfoBarElement (id=Unknown) at RuleExecutionInfoBar.default.pcf: line 45, column 58
    function visible_9 () : java.lang.Boolean {
      return status != null and status == TC_UNKNOWN
    }
    
    property get head () : RuleHead {
      return getRequireValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setRequireValue("head", 0, $arg)
    }
    
    property get status () : RuleExecutionStatus {
      return getRequireValue("status", 0) as RuleExecutionStatus
    }
    
    property set status ($arg :  RuleExecutionStatus) {
      setRequireValue("status", 0, $arg)
    }
    
    property get versionController () : gw.bizrules.management.BizRulesVersionController {
      return getRequireValue("versionController", 0) as gw.bizrules.management.BizRulesVersionController
    }
    
    property set versionController ($arg :  gw.bizrules.management.BizRulesVersionController) {
      setRequireValue("versionController", 0, $arg)
    }
    
    
  }
  
  
}