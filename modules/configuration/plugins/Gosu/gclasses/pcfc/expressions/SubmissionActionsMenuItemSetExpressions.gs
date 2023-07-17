package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionActionsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionActionsMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionActionsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionActionsMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Withdraw) at SubmissionActionsMenuItemSet.pcf: line 18, column 71
    function action_1 () : void {
      policyPeriod.SubmissionProcess.withdrawJob(); policyPeriod.Bundle.commit()
    }
    
    // 'action' attribute on MenuItem (id=Decline) at SubmissionActionsMenuItemSet.pcf: line 23, column 70
    function action_3 () : void {
      DeclineReasonPopup.push(submission, policyPeriod, null)
    }
    
    // 'action' attribute on MenuItem (id=NotTakenJob) at SubmissionActionsMenuItemSet.pcf: line 28, column 70
    function action_6 () : void {
      NotTakenReasonPopup.push(submission, policyPeriod, null)
    }
    
    // 'action' attribute on MenuItem (id=Decline) at SubmissionActionsMenuItemSet.pcf: line 23, column 70
    function action_dest_4 () : pcf.api.Destination {
      return pcf.DeclineReasonPopup.createDestination(submission, policyPeriod, null)
    }
    
    // 'action' attribute on MenuItem (id=NotTakenJob) at SubmissionActionsMenuItemSet.pcf: line 28, column 70
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NotTakenReasonPopup.createDestination(submission, policyPeriod, null)
    }
    
    // 'visible' attribute on MenuItem (id=Withdraw) at SubmissionActionsMenuItemSet.pcf: line 18, column 71
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.SubmissionProcess.canWithdrawJob().Okay
    }
    
    // 'visible' attribute on MenuItem (id=Decline) at SubmissionActionsMenuItemSet.pcf: line 23, column 70
    function visible_2 () : java.lang.Boolean {
      return policyPeriod.SubmissionProcess.canDeclineJob().Okay
    }
    
    // 'visible' attribute on MenuItem (id=NotTakenJob) at SubmissionActionsMenuItemSet.pcf: line 28, column 70
    function visible_5 () : java.lang.Boolean {
      return policyPeriod.SubmissionProcess.canNotTakeJob().Okay
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get submission () : Submission {
      return getRequireValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setRequireValue("submission", 0, $arg)
    }
    
    
  }
  
  
}