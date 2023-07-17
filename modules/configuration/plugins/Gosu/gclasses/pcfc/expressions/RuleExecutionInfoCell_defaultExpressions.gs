package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleExecutionInfoCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleExecutionInfoCell_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleExecutionInfoCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleExecutionInfoCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=PrevExecuting) at RuleExecutionInfoCell.default.pcf: line 49, column 45
    function iconColor_10 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_WARNING
    }
    
    // 'iconColor' attribute on Link (id=Unknown) at RuleExecutionInfoCell.default.pcf: line 56, column 43
    function iconColor_13 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ACTION_NEUTRAL
    }
    
    // 'iconColor' attribute on Link (id=Executing) at RuleExecutionInfoCell.default.pcf: line 35, column 43
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_SUCCESS
    }
    
    // 'iconColor' attribute on Link (id=NotExecuting) at RuleExecutionInfoCell.default.pcf: line 42, column 84
    function iconColor_7 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at RuleExecutionInfoCell.default.pcf: line 17, column 24
    function initialValue_0 () : RuleHead {
      return versionController.getRuleHead(version)
    }
    
    // 'initialValue' attribute on Variable at RuleExecutionInfoCell.default.pcf: line 22, column 35
    function initialValue_1 () : RuleExecutionStatus {
      return head.getExecutionStatus(versionController)
    }
    
    // 'tooltip' attribute on Link (id=Executing) at RuleExecutionInfoCell.default.pcf: line 35, column 43
    function tooltip_3 () : java.lang.String {
      return status.Description
    }
    
    // 'tooltip' attribute on Link (id=PrevExecuting) at RuleExecutionInfoCell.default.pcf: line 49, column 45
    function tooltip_9 () : java.lang.String {
      return head.getPrevExecutionTooltip(versionController)
    }
    
    // 'visible' attribute on Link (id=Unknown) at RuleExecutionInfoCell.default.pcf: line 56, column 43
    function visible_11 () : java.lang.Boolean {
      return status == TC_UNKNOWN
    }
    
    // 'visible' attribute on ContentInput at RuleExecutionInfoCell.default.pcf: line 28, column 49
    function visible_14 () : java.lang.Boolean {
      return head.HeadVersion.Rule != null
    }
    
    // 'visible' attribute on Link (id=Executing) at RuleExecutionInfoCell.default.pcf: line 35, column 43
    function visible_2 () : java.lang.Boolean {
      return status == TC_ENABLED
    }
    
    // 'visible' attribute on Link (id=NotExecuting) at RuleExecutionInfoCell.default.pcf: line 42, column 84
    function visible_5 () : java.lang.Boolean {
      return RuleExecutionStatus.TF_NOTEXECUTING.TypeKeys.contains(status)
    }
    
    // 'visible' attribute on Link (id=PrevExecuting) at RuleExecutionInfoCell.default.pcf: line 49, column 45
    function visible_8 () : java.lang.Boolean {
      return status == TC_PREVENABLED
    }
    
    property get head () : RuleHead {
      return getVariableValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setVariableValue("head", 0, $arg)
    }
    
    property get status () : RuleExecutionStatus {
      return getVariableValue("status", 0) as RuleExecutionStatus
    }
    
    property set status ($arg :  RuleExecutionStatus) {
      setVariableValue("status", 0, $arg)
    }
    
    property get version () : RuleVersion {
      return getRequireValue("version", 0) as RuleVersion
    }
    
    property set version ($arg :  RuleVersion) {
      setRequireValue("version", 0, $arg)
    }
    
    property get versionController () : gw.bizrules.management.BizRulesVersionController {
      return getRequireValue("versionController", 0) as gw.bizrules.management.BizRulesVersionController
    }
    
    property set versionController ($arg :  gw.bizrules.management.BizRulesVersionController) {
      setRequireValue("versionController", 0, $arg)
    }
    
    
  }
  
  
}