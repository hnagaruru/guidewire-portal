package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/StartRewriteMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartRewriteMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/StartRewriteMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartRewriteMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RewriteFullTerm) at StartRewriteMenuItemSet.pcf: line 29, column 61
    function action_3 () : void {
      UIHelper.startRewrite(TC_REWRITEFULLTERM, inForcePeriod, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=RewriteRemainderOfTerm) at StartRewriteMenuItemSet.pcf: line 35, column 72
    function action_6 () : void {
      UIHelper.startRewrite(TC_REWRITEREMAINDEROFTERM, inForcePeriod, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=RewriteNewTerm) at StartRewriteMenuItemSet.pcf: line 41, column 60
    function action_9 () : void {
      UIHelper.startRewrite(TC_REWRITENEWTERM, inForcePeriod, CurrentLocation)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RewriteFullTerm) at StartRewriteMenuItemSet.pcf: line 29, column 61
    function confirmMessage_4 () : java.lang.String {
      return UIHelper.getRewriteMessage(inForcePeriod)
    }
    
    // 'initialValue' attribute on Variable at StartRewriteMenuItemSet.pcf: line 13, column 65
    function initialValue_0 () : gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper {
      return new gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper(period)
    }
    
    // 'initialValue' attribute on Variable at StartRewriteMenuItemSet.pcf: line 18, column 28
    function initialValue_1 () : PolicyPeriod {
      return UIHelper.getInForcePeriod()
    }
    
    // 'visible' attribute on MenuItem (id=RewriteFullTerm) at StartRewriteMenuItemSet.pcf: line 29, column 61
    function visible_2 () : java.lang.Boolean {
      return UIHelper.CanRewriteFullTerm(inForcePeriod)
    }
    
    // 'visible' attribute on MenuItem (id=RewriteRemainderOfTerm) at StartRewriteMenuItemSet.pcf: line 35, column 72
    function visible_5 () : java.lang.Boolean {
      return UIHelper.CanRewriteRemainderOfTermTerm(inForcePeriod)
    }
    
    // 'visible' attribute on MenuItem (id=RewriteNewTerm) at StartRewriteMenuItemSet.pcf: line 41, column 60
    function visible_8 () : java.lang.Boolean {
      return UIHelper.canRewriteNewTerm(inForcePeriod)
    }
    
    property get UIHelper () : gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper {
      return getVariableValue("UIHelper", 0) as gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper
    }
    
    property set UIHelper ($arg :  gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper) {
      setVariableValue("UIHelper", 0, $arg)
    }
    
    property get canRewrite () : boolean {
      return getVariableValue("canRewrite", 0) as java.lang.Boolean
    }
    
    property set canRewrite ($arg :  boolean) {
      setVariableValue("canRewrite", 0, $arg)
    }
    
    property get inForcePeriod () : PolicyPeriod {
      return getVariableValue("inForcePeriod", 0) as PolicyPeriod
    }
    
    property set inForcePeriod ($arg :  PolicyPeriod) {
      setVariableValue("inForcePeriod", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}