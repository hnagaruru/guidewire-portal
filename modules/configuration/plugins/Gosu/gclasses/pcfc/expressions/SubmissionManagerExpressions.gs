package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionManager.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionManagerExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionManager.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionManagerExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionManager_NewSubmission) at SubmissionManager.pcf: line 29, column 51
    function action_2 () : void {
      NewSubmission.push(account)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionManager_RefreshButton) at SubmissionManager.pcf: line 33, column 63
    function action_4 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=SubmissionManager_NewSubmission) at SubmissionManager.pcf: line 29, column 51
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination(account)
    }
    
    // 'canVisit' attribute on Page (id=SubmissionManager) at SubmissionManager.pcf: line 9, column 69
    static function canVisit_8 (account :  Account) : java.lang.Boolean {
      return perm.Account.viewSubmissionGroup(account)
    }
    
    // 'def' attribute on PanelRef at SubmissionManager.pcf: line 39, column 58
    function def_onEnter_6 (def :  pcf.SubmissionManagerLV) : void {
      def.onEnter(account, submissions)
    }
    
    // 'def' attribute on PanelRef at SubmissionManager.pcf: line 39, column 58
    function def_refreshVariables_7 (def :  pcf.SubmissionManagerLV) : void {
      def.refreshVariables(account, submissions)
    }
    
    // 'initialValue' attribute on Variable at SubmissionManager.pcf: line 18, column 28
    function initialValue_0 () : Submission[] {
      return Job.finder.findSelectedSubmissionsByAccount(account).toTypedArray()
    }
    
    // Page (id=SubmissionManager) at SubmissionManager.pcf: line 9, column 69
    static function parent_9 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmissionManager_NewSubmission) at SubmissionManager.pcf: line 29, column 51
    function visible_1 () : java.lang.Boolean {
      return account.NewSubmissionVisible
    }
    
    // 'visible' attribute on Verbatim at SubmissionManager.pcf: line 37, column 44
    function visible_5 () : java.lang.Boolean {
      return submissions.length == 0
    }
    
    override property get CurrentLocation () : pcf.SubmissionManager {
      return super.CurrentLocation as pcf.SubmissionManager
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get submissions () : Submission[] {
      return getVariableValue("submissions", 0) as Submission[]
    }
    
    property set submissions ($arg :  Submission[]) {
      setVariableValue("submissions", 0, $arg)
    }
    
    
  }
  
  
}