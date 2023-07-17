package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWReferralReasonRowSet.issue.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWReferralReasonRowSet_issueExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWReferralReasonRowSet.issue.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWReferralReasonRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ShortDescription_Cell) at UWReferralReasonRowSet.issue.pcf: line 19, column 42
    function action_1 () : void {
      ReferralReasonDetailsPopup.push(new UWReferralReason[]{reason})
    }
    
    // 'action' attribute on Link (id=Close) at UWReferralReasonRowSet.issue.pcf: line 40, column 45
    function action_15 () : void {
      modalRow.closeReferralReasonAndCommit()
    }
    
    // 'action' attribute on Link (id=SpecialClose) at UWReferralReasonRowSet.issue.pcf: line 48, column 52
    function action_18 () : void {
      modalRow.closeReferralReasonAndCommit()
    }
    
    // 'action' attribute on Link (id=Open) at UWReferralReasonRowSet.issue.pcf: line 55, column 44
    function action_21 () : void {
      modalRow.openReferralReasonAndCommit()
    }
    
    // 'action' attribute on TextCell (id=ShortDescription_Cell) at UWReferralReasonRowSet.issue.pcf: line 19, column 42
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ReferralReasonDetailsPopup.createDestination(new UWReferralReason[]{reason})
    }
    
    // 'available' attribute on Link (id=Close) at UWReferralReasonRowSet.issue.pcf: line 40, column 45
    function available_13 () : java.lang.Boolean {
      return modalRow.Close.Available
    }
    
    // 'available' attribute on Link (id=SpecialClose) at UWReferralReasonRowSet.issue.pcf: line 48, column 52
    function available_16 () : java.lang.Boolean {
      return modalRow.SpecialClose.Available
    }
    
    // 'available' attribute on Link (id=Open) at UWReferralReasonRowSet.issue.pcf: line 55, column 44
    function available_19 () : java.lang.Boolean {
      return modalRow.Open.Available
    }
    
    // 'initialValue' attribute on Variable at UWReferralReasonRowSet.issue.pcf: line 14, column 32
    function initialValue_0 () : UWReferralReason {
      return modalRow.Item
    }
    
    // 'label' attribute on Link (id=AutoApprovable) at UWReferralReasonRowSet.issue.pcf: line 24, column 97
    function label_6 () : java.lang.Object {
      return reason.IssueType.ActiveVersion.AutoApprovable? "*" : ""
    }
    
    // 'value' attribute on TextCell (id=ShortDescription_Cell) at UWReferralReasonRowSet.issue.pcf: line 19, column 42
    function valueRoot_4 () : java.lang.Object {
      return reason
    }
    
    // 'value' attribute on TypeKeyCell (id=BlockingPoint_Cell) at UWReferralReasonRowSet.issue.pcf: line 29, column 51
    function valueRoot_8 () : java.lang.Object {
      return modalRow
    }
    
    // 'value' attribute on TextCell (id=ReferralReasonValue_Cell) at UWReferralReasonRowSet.issue.pcf: line 32, column 42
    function value_10 () : java.lang.String {
      return modalRow.FormattedValue
    }
    
    // 'value' attribute on TextCell (id=ShortDescription_Cell) at UWReferralReasonRowSet.issue.pcf: line 19, column 42
    function value_3 () : java.lang.String {
      return reason.ShortDescription
    }
    
    // 'value' attribute on TypeKeyCell (id=BlockingPoint_Cell) at UWReferralReasonRowSet.issue.pcf: line 29, column 51
    function value_7 () : typekey.UWIssueBlockingPoint {
      return modalRow.BlockingPoint
    }
    
    // 'visible' attribute on Link (id=Close) at UWReferralReasonRowSet.issue.pcf: line 40, column 45
    function visible_14 () : java.lang.Boolean {
      return modalRow.Close.Visible
    }
    
    // 'visible' attribute on Link (id=SpecialClose) at UWReferralReasonRowSet.issue.pcf: line 48, column 52
    function visible_17 () : java.lang.Boolean {
      return modalRow.SpecialClose.Visible
    }
    
    // 'visible' attribute on Link (id=Open) at UWReferralReasonRowSet.issue.pcf: line 55, column 44
    function visible_20 () : java.lang.Boolean {
      return modalRow.Open.Visible
    }
    
    property get modalRow () : gw.web.policy.UWReferralReasonModalRow {
      return getRequireValue("modalRow", 0) as gw.web.policy.UWReferralReasonModalRow
    }
    
    property set modalRow ($arg :  gw.web.policy.UWReferralReasonModalRow) {
      setRequireValue("modalRow", 0, $arg)
    }
    
    property get reason () : UWReferralReason {
      return getVariableValue("reason", 0) as UWReferralReason
    }
    
    property set reason ($arg :  UWReferralReason) {
      setVariableValue("reason", 0, $arg)
    }
    
    
  }
  
  
}