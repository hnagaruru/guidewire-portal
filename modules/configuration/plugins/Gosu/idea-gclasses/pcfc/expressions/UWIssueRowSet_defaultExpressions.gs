package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWIssueRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWIssueRowSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWIssueRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWIssueRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=oops_Cell) at UWIssueRowSet.default.pcf: line 17, column 83
    function value_0 () : java.lang.String {
      return "Oops" + wrapper.IsItem + ":" + wrapper.Mode
    }
    
    property get canApproveRejectReopenIssue () : boolean {
      return getRequireValue("canApproveRejectReopenIssue", 0) as java.lang.Boolean
    }
    
    property set canApproveRejectReopenIssue ($arg :  boolean) {
      setRequireValue("canApproveRejectReopenIssue", 0, $arg)
    }
    
    property get wrapper () : gw.web.policy.RiskEvaluationPanelSetModalRow {
      return getRequireValue("wrapper", 0) as gw.web.policy.RiskEvaluationPanelSetModalRow
    }
    
    property set wrapper ($arg :  gw.web.policy.RiskEvaluationPanelSetModalRow) {
      setRequireValue("wrapper", 0, $arg)
    }
    
    
  }
  
  
}