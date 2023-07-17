package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWIssueRowSet.label.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWIssueRowSet_labelExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWIssueRowSet.label.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWIssueRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=testTitle_Cell) at UWIssueRowSet.label.pcf: line 20, column 32
    function valueRoot_1 () : java.lang.Object {
      return wrapper
    }
    
    // 'value' attribute on TextCell (id=testTitle_Cell) at UWIssueRowSet.label.pcf: line 20, column 32
    function value_0 () : java.lang.String {
      return wrapper.Title
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