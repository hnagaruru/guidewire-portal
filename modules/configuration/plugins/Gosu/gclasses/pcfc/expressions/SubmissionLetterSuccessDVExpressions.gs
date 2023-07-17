package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionLetterSuccessDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionLetterSuccessDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BulletPointTextInput (id=SubmissionManager_Input) at SubmissionLetterSuccessDV.pcf: line 14, column 92
    function action_0 () : void {
      SubmissionManager.go(account)
    }
    
    // 'action' attribute on BulletPointTextInput (id=SubmissionManager_Input) at SubmissionLetterSuccessDV.pcf: line 14, column 92
    function action_dest_1 () : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    
  }
  
  
}