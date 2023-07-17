package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionConfirmLetter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionConfirmLetterExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionConfirmLetter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionConfirmLetterExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=SubmissionConfirmLetter) at SubmissionConfirmLetter.pcf: line 16, column 36
    function afterCancel_5 () : void {
      SubmissionManager.go(account)
    }
    
    // 'afterCancel' attribute on Page (id=SubmissionConfirmLetter) at SubmissionConfirmLetter.pcf: line 16, column 36
    function afterCancel_dest_6 () : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    // 'afterCommit' attribute on Page (id=SubmissionConfirmLetter) at SubmissionConfirmLetter.pcf: line 16, column 36
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      SubmissionLetterSuccess.go(account)
    }
    
    // 'beforeCommit' attribute on Page (id=SubmissionConfirmLetter) at SubmissionConfirmLetter.pcf: line 16, column 36
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      letter.addJobs( gw.job.SubmissionLetterHelper.getCheckedSubmissions() ); letter.createAndAttachDocument()
    }
    
    // 'canVisit' attribute on Page (id=SubmissionConfirmLetter) at SubmissionConfirmLetter.pcf: line 16, column 36
    static function canVisit_9 (account :  Account) : java.lang.Boolean {
      return perm.Account.newSubmission(account)
    }
    
    // 'initialValue' attribute on Variable at SubmissionConfirmLetter.pcf: line 25, column 22
    function initialValue_0 () : Letter {
      return initLetter()
    }
    
    // 'parent' attribute on Page (id=SubmissionConfirmLetter) at SubmissionConfirmLetter.pcf: line 16, column 36
    static function parent_10 (account :  Account) : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.SubmissionConfirmLetter {
      return super.CurrentLocation as pcf.SubmissionConfirmLetter
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get letter () : Letter {
      return getVariableValue("letter", 0) as Letter
    }
    
    property set letter ($arg :  Letter) {
      setVariableValue("letter", 0, $arg)
    }
    
    function initLetter() : Letter {
      var result = new Letter()
      result.Type = TC_CONFIRMATION
      return result
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionConfirmLetter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionConfirmLetterScreenExpressionsImpl extends SubmissionConfirmLetterExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at SubmissionConfirmLetter.pcf: line 43, column 59
    function def_onEnter_3 (def :  pcf.SubmissionConfirmLetterDV) : void {
      def.onEnter(letter, account)
    }
    
    // 'def' attribute on PanelRef at SubmissionConfirmLetter.pcf: line 43, column 59
    function def_refreshVariables_4 (def :  pcf.SubmissionConfirmLetterDV) : void {
      def.refreshVariables(letter, account)
    }
    
    // 'updateVisible' attribute on EditButtons (id=SubmissionConfirmLetterScreen_EditButtons) at SubmissionConfirmLetter.pcf: line 36, column 78
    function visible_1 () : java.lang.Boolean {
      return docActionsHelper.DocumentTemplateActionsAvailable
    }
    
    // 'visible' attribute on AlertBar (id=SubmissionConfirmLetterScreen_GenerateLetterUnavailable) at SubmissionConfirmLetter.pcf: line 41, column 74
    function visible_2 () : java.lang.Boolean {
      return not docActionsHelper.DocumentTemplateActionsAvailable
    }
    
    property get docActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("docActionsHelper", 1) as gw.document.DocumentsActionsUIHelper
    }
    
    property set docActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("docActionsHelper", 1, $arg)
    }
    
    
  }
  
  
}