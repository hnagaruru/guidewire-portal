package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWIssueRowSet.issue.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWIssueRowSet_issueExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWIssueRowSet.issue.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWIssueRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Approve) at UWIssueRowSet.issue.pcf: line 54, column 78
    function action_15 () : void {
      RiskApprovalDetailsPopup.push(new UWIssue[]{issue}, true, false)
    }
    
    // 'action' attribute on Link (id=Reject) at UWIssueRowSet.issue.pcf: line 61, column 77
    function action_19 () : void {
      issue.reject(); issue.Bundle.commit()
    }
    
    // 'action' attribute on Link (id=Reopen) at UWIssueRowSet.issue.pcf: line 68, column 77
    function action_22 () : void {
      issue.reopen(); issue.Bundle.commit()
    }
    
    // 'action' attribute on Link (id=SpecialApprove) at UWIssueRowSet.issue.pcf: line 76, column 85
    function action_25 () : void {
      RiskApprovalDetailsPopup.push(new UWIssue[]{issue}, true, true)
    }
    
    // 'action' attribute on TextCell (id=ShortDescription_Cell) at UWIssueRowSet.issue.pcf: line 30, column 22
    function action_3 () : void {
      RiskApprovalDetailsPopup.push(new UWIssue[]{issue}, false, false)
    }
    
    // 'action' attribute on Link (id=Approve) at UWIssueRowSet.issue.pcf: line 54, column 78
    function action_dest_16 () : pcf.api.Destination {
      return pcf.RiskApprovalDetailsPopup.createDestination(new UWIssue[]{issue}, true, false)
    }
    
    // 'action' attribute on Link (id=SpecialApprove) at UWIssueRowSet.issue.pcf: line 76, column 85
    function action_dest_26 () : pcf.api.Destination {
      return pcf.RiskApprovalDetailsPopup.createDestination(new UWIssue[]{issue}, true, true)
    }
    
    // 'action' attribute on TextCell (id=ShortDescription_Cell) at UWIssueRowSet.issue.pcf: line 30, column 22
    function action_dest_4 () : pcf.api.Destination {
      return pcf.RiskApprovalDetailsPopup.createDestination(new UWIssue[]{issue}, false, false)
    }
    
    // 'available' attribute on Link (id=Approve) at UWIssueRowSet.issue.pcf: line 54, column 78
    function available_13 () : java.lang.Boolean {
      return wrapper.Approve.Available
    }
    
    // 'available' attribute on Link (id=Reject) at UWIssueRowSet.issue.pcf: line 61, column 77
    function available_17 () : java.lang.Boolean {
      return wrapper.Reject.Available
    }
    
    // 'available' attribute on TextCell (id=ShortDescription_Cell) at UWIssueRowSet.issue.pcf: line 30, column 22
    function available_2 () : java.lang.Boolean {
      return !gw.web.job.JobUIHelper.isQuoteRequestInProgress(issue.PolicyPeriod)
    }
    
    // 'available' attribute on Link (id=Reopen) at UWIssueRowSet.issue.pcf: line 68, column 77
    function available_20 () : java.lang.Boolean {
      return wrapper.Reopen.Available
    }
    
    // 'available' attribute on Link (id=SpecialApprove) at UWIssueRowSet.issue.pcf: line 76, column 85
    function available_23 () : java.lang.Boolean {
      return wrapper.SpecialApprove.Available
    }
    
    // 'editable' attribute on Row at UWIssueRowSet.issue.pcf: line 23, column 46
    function editable_27 () : java.lang.Boolean {
      return canApproveRejectReopenIssue
    }
    
    // 'initialValue' attribute on Variable at UWIssueRowSet.issue.pcf: line 17, column 30
    function initialValue_0 () : entity.UWIssue {
      return wrapper.Item
    }
    
    // 'initialValue' attribute on Variable at UWIssueRowSet.issue.pcf: line 21, column 19
    function initialValue_1 () : int {
      return gw.datatype.DataTypes.get(UWIssue.SHORTDESCRIPTION_PROP.get()).asPersistentDataType().getLength()
    }
    
    // 'label' attribute on Link (id=isAutoApprovable) at UWIssueRowSet.issue.pcf: line 36, column 97
    function label_10 () : java.lang.Object {
      return issue.IssueType.ActiveVersion.AutoApprovable? "*" : ""
    }
    
    // 'label' attribute on Link (id=issueValue) at UWIssueRowSet.issue.pcf: line 43, column 147
    function label_11 () : java.lang.Object {
      return wrapper.FormattedValue
    }
    
    // 'outputConversion' attribute on TextCell (id=ShortDescription_Cell) at UWIssueRowSet.issue.pcf: line 30, column 22
    function outputConversion_5 (VALUE :  java.lang.String) : java.lang.String {
      return (VALUE != null and VALUE.length() == shorttextLength) ? VALUE + DisplayKey.get("Web.Policy.EvaluationIssues.ShortDescription.Ellipsis") : VALUE
    }
    
    // 'tooltip' attribute on Link (id=issueValue) at UWIssueRowSet.issue.pcf: line 43, column 147
    function tooltip_12 () : java.lang.String {
      return issue.ValueVariesAcrossSlices ? DisplayKey.get("Web.Policy.EvaluationIssues.VariesOverTermTooltip") : ""
    }
    
    // 'value' attribute on TextCell (id=ShortDescription_Cell) at UWIssueRowSet.issue.pcf: line 30, column 22
    function valueRoot_7 () : java.lang.Object {
      return issue
    }
    
    // 'value' attribute on TextCell (id=ShortDescription_Cell) at UWIssueRowSet.issue.pcf: line 30, column 22
    function value_6 () : java.lang.String {
      return issue.ShortDescription
    }
    
    // 'visible' attribute on Link (id=Approve) at UWIssueRowSet.issue.pcf: line 54, column 78
    function visible_14 () : java.lang.Boolean {
      return canApproveRejectReopenIssue and wrapper.Approve.Visible
    }
    
    // 'visible' attribute on Link (id=Reject) at UWIssueRowSet.issue.pcf: line 61, column 77
    function visible_18 () : java.lang.Boolean {
      return canApproveRejectReopenIssue and wrapper.Reject.Visible
    }
    
    // 'visible' attribute on Link (id=Reopen) at UWIssueRowSet.issue.pcf: line 68, column 77
    function visible_21 () : java.lang.Boolean {
      return canApproveRejectReopenIssue and wrapper.Reopen.Visible
    }
    
    // 'visible' attribute on Link (id=SpecialApprove) at UWIssueRowSet.issue.pcf: line 76, column 85
    function visible_24 () : java.lang.Boolean {
      return canApproveRejectReopenIssue and wrapper.SpecialApprove.Visible
    }
    
    property get canApproveRejectReopenIssue () : boolean {
      return getRequireValue("canApproveRejectReopenIssue", 0) as java.lang.Boolean
    }
    
    property set canApproveRejectReopenIssue ($arg :  boolean) {
      setRequireValue("canApproveRejectReopenIssue", 0, $arg)
    }
    
    property get issue () : entity.UWIssue {
      return getVariableValue("issue", 0) as entity.UWIssue
    }
    
    property set issue ($arg :  entity.UWIssue) {
      setVariableValue("issue", 0, $arg)
    }
    
    property get shorttextLength () : int {
      return getVariableValue("shorttextLength", 0) as java.lang.Integer
    }
    
    property set shorttextLength ($arg :  int) {
      setVariableValue("shorttextLength", 0, $arg)
    }
    
    property get wrapper () : gw.web.policy.RiskEvaluationPanelSetModalRow {
      return getRequireValue("wrapper", 0) as gw.web.policy.RiskEvaluationPanelSetModalRow
    }
    
    property set wrapper ($arg :  gw.web.policy.RiskEvaluationPanelSetModalRow) {
      setRequireValue("wrapper", 0, $arg)
    }
    
    
  }
  
  
}