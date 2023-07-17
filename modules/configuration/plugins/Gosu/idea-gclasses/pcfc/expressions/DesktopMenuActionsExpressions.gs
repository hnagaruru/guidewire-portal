package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewSubmission) at DesktopMenuActions.pcf: line 17, column 112
    function action_1 () : void {
      NewSubmission.go()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_FederatedNewAccount) at DesktopMenuActions.pcf: line 33, column 69
    function action_10 () : void {
      FederatedClusterForNewAccountForward.push()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_LoadAndVacation) at DesktopMenuActions.pcf: line 38, column 23
    function action_12 () : void {
      LoadFactorsPopup.push()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_FederatedNewSubmission) at DesktopMenuActions.pcf: line 23, column 111
    function action_4 () : void {
      FederatedClusterForNewSubmissionForward.push()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewAccount) at DesktopMenuActions.pcf: line 28, column 69
    function action_7 () : void {
      NewAccount.go()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_FederatedNewAccount) at DesktopMenuActions.pcf: line 33, column 69
    function action_dest_11 () : pcf.api.Destination {
      return pcf.FederatedClusterForNewAccountForward.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_LoadAndVacation) at DesktopMenuActions.pcf: line 38, column 23
    function action_dest_13 () : pcf.api.Destination {
      return pcf.LoadFactorsPopup.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewSubmission) at DesktopMenuActions.pcf: line 17, column 112
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_FederatedNewSubmission) at DesktopMenuActions.pcf: line 23, column 111
    function action_dest_5 () : pcf.api.Destination {
      return pcf.FederatedClusterForNewSubmissionForward.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewAccount) at DesktopMenuActions.pcf: line 28, column 69
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    // 'available' attribute on MenuItem (id=DesktopMenuActions_NewAccount) at DesktopMenuActions.pcf: line 28, column 69
    function available_6 () : java.lang.Boolean {
      return gw.api.web.desktop.data.FederatedDataUIHelper.IsDefault and perm.Account.create
    }
    
    // 'available' attribute on MenuItem (id=DesktopMenuActions_FederatedNewAccount) at DesktopMenuActions.pcf: line 33, column 69
    function available_9 () : java.lang.Boolean {
      return gw.api.web.desktop.data.FederatedDataUIHelper.IsFederated and perm.Account.create
    }
    
    // 'visible' attribute on MenuItem (id=DesktopMenuActions_NewSubmission) at DesktopMenuActions.pcf: line 17, column 112
    function visible_0 () : java.lang.Boolean {
      return perm.System.createsubmission and !gw.api.web.desktop.data.FederatedDataUIHelper.IsFederated
    }
    
    // 'visible' attribute on MenuItem (id=DesktopMenuActions_FederatedNewSubmission) at DesktopMenuActions.pcf: line 23, column 111
    function visible_3 () : java.lang.Boolean {
      return perm.System.createsubmission and gw.api.web.desktop.data.FederatedDataUIHelper.IsFederated
    }
    
    
  }
  
  
}