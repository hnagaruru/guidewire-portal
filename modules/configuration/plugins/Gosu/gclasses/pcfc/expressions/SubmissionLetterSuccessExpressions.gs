package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccess.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionLetterSuccessExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccess.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionLetterSuccessExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendDeclineLetterButton) at SubmissionLetterSuccess.pcf: line 50, column 135
    function action_10 () : void {
      SubmissionRejectLetter.go(TC_DECLINATION, account)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendNotTakenLetterButton) at SubmissionLetterSuccess.pcf: line 55, column 135
    function action_13 () : void {
      SubmissionRejectLetter.go(TC_NOTTAKENACK, account)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_RefreshButton) at SubmissionLetterSuccess.pcf: line 59, column 65
    function action_15 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendConfirmLetterButton) at SubmissionLetterSuccess.pcf: line 45, column 136
    function action_7 () : void {
      SubmissionConfirmLetter.go(account)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendDeclineLetterButton) at SubmissionLetterSuccess.pcf: line 50, column 135
    function action_dest_11 () : pcf.api.Destination {
      return pcf.SubmissionRejectLetter.createDestination(TC_DECLINATION, account)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendNotTakenLetterButton) at SubmissionLetterSuccess.pcf: line 55, column 135
    function action_dest_14 () : pcf.api.Destination {
      return pcf.SubmissionRejectLetter.createDestination(TC_NOTTAKENACK, account)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendConfirmLetterButton) at SubmissionLetterSuccess.pcf: line 45, column 136
    function action_dest_8 () : pcf.api.Destination {
      return pcf.SubmissionConfirmLetter.createDestination(account)
    }
    
    // 'canVisit' attribute on Page (id=SubmissionLetterSuccess) at SubmissionLetterSuccess.pcf: line 9, column 69
    static function canVisit_20 (account :  Account) : java.lang.Boolean {
      return perm.Account.newSubmission(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionLetterSuccess.pcf: line 37, column 50
    function def_onEnter_16 (def :  pcf.SubmissionLetterSuccessLV) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionLetterSuccess.pcf: line 63, column 55
    function def_onEnter_18 (def :  pcf.SubmissionLetterSuccessEmailLV) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionLetterSuccess.pcf: line 35, column 51
    function def_onEnter_4 (def :  pcf.SubmissionLetterSuccessDV) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionLetterSuccess.pcf: line 37, column 50
    function def_refreshVariables_17 (def :  pcf.SubmissionLetterSuccessLV) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionLetterSuccess.pcf: line 63, column 55
    function def_refreshVariables_19 (def :  pcf.SubmissionLetterSuccessEmailLV) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionLetterSuccess.pcf: line 35, column 51
    function def_refreshVariables_5 (def :  pcf.SubmissionLetterSuccessDV) : void {
      def.refreshVariables(account)
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccess.pcf: line 19, column 28
    function initialValue_0 () : Submission[] {
      return Job.finder.findSelectedSubmissionsByAccount(account).toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccess.pcf: line 23, column 23
    function initialValue_1 () : boolean {
      return not submissions.toList().hasMatch(\ Sub -> (Sub.hasUnsentLetter()))
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccess.pcf: line 27, column 43
    function initialValue_2 () : java.util.Set<String> {
      return gw.job.SubmissionLetterHelper.getSubmissionLettertypes(submissions)
    }
    
    // 'label' attribute on Verbatim (id=resultText) at SubmissionLetterSuccess.pcf: line 33, column 161
    function label_3 () : java.lang.String {
      return lettersSent ? DisplayKey.get("Web.SubmissionLetterSuccess.Success") : DisplayKey.get("Web.SubmissionLetterSuccess.Unsure")
    }
    
    // 'parent' attribute on Page (id=SubmissionLetterSuccess) at SubmissionLetterSuccess.pcf: line 9, column 69
    static function parent_21 (account :  Account) : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendNotTakenLetterButton) at SubmissionLetterSuccess.pcf: line 55, column 135
    function visible_12 () : java.lang.Boolean {
      return gw.job.SubmissionLetterHelper.canSendLetterType(submissionLettertypes, LetterType.TC_NOTTAKENACK, submissions)
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendConfirmLetterButton) at SubmissionLetterSuccess.pcf: line 45, column 136
    function visible_6 () : java.lang.Boolean {
      return gw.job.SubmissionLetterHelper.canSendLetterType(submissionLettertypes, LetterType.TC_CONFIRMATION, submissions)
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmissionLetterSuccess_SendDeclineLetterButton) at SubmissionLetterSuccess.pcf: line 50, column 135
    function visible_9 () : java.lang.Boolean {
      return gw.job.SubmissionLetterHelper.canSendLetterType(submissionLettertypes, LetterType.TC_DECLINATION, submissions)
    }
    
    override property get CurrentLocation () : pcf.SubmissionLetterSuccess {
      return super.CurrentLocation as pcf.SubmissionLetterSuccess
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get lettersSent () : boolean {
      return getVariableValue("lettersSent", 0) as java.lang.Boolean
    }
    
    property set lettersSent ($arg :  boolean) {
      setVariableValue("lettersSent", 0, $arg)
    }
    
    property get submissionLettertypes () : java.util.Set<String> {
      return getVariableValue("submissionLettertypes", 0) as java.util.Set<String>
    }
    
    property set submissionLettertypes ($arg :  java.util.Set<String>) {
      setVariableValue("submissionLettertypes", 0, $arg)
    }
    
    property get submissions () : Submission[] {
      return getVariableValue("submissions", 0) as Submission[]
    }
    
    property set submissions ($arg :  Submission[]) {
      setVariableValue("submissions", 0, $arg)
    }
    
    
  }
  
  
}