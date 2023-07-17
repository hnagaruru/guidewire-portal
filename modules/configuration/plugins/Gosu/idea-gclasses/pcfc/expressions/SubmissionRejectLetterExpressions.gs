package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionRejectLetter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionRejectLetterExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionRejectLetter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionRejectLetterExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (letterType :  LetterType, account :  Account) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=SubmissionRejectLetter) at SubmissionRejectLetter.pcf: line 16, column 36
    function afterCancel_5 () : void {
      SubmissionManager.go(account)
    }
    
    // 'afterCancel' attribute on Page (id=SubmissionRejectLetter) at SubmissionRejectLetter.pcf: line 16, column 36
    function afterCancel_dest_6 () : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    // 'afterCommit' attribute on Page (id=SubmissionRejectLetter) at SubmissionRejectLetter.pcf: line 16, column 36
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      SubmissionLetterSuccess.go(account)
    }
    
    // 'beforeCommit' attribute on Page (id=SubmissionRejectLetter) at SubmissionRejectLetter.pcf: line 16, column 36
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      letter.addJobs( gw.job.SubmissionLetterHelper.getCheckedSubmissions() ); letter.createAndAttachDocument()
    }
    
    // 'canVisit' attribute on Page (id=SubmissionRejectLetter) at SubmissionRejectLetter.pcf: line 16, column 36
    static function canVisit_9 (account :  Account, letterType :  LetterType) : java.lang.Boolean {
      return perm.Account.newSubmission(account)
    }
    
    // 'initialValue' attribute on Variable at SubmissionRejectLetter.pcf: line 28, column 22
    function initialValue_0 () : Letter {
      return initLetter()
    }
    
    // 'parent' attribute on Page (id=SubmissionRejectLetter) at SubmissionRejectLetter.pcf: line 16, column 36
    static function parent_10 (account :  Account, letterType :  LetterType) : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.SubmissionRejectLetter {
      return super.CurrentLocation as pcf.SubmissionRejectLetter
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
    
    property get letterType () : LetterType {
      return getVariableValue("letterType", 0) as LetterType
    }
    
    property set letterType ($arg :  LetterType) {
      setVariableValue("letterType", 0, $arg)
    }
    
    function initLetter() : Letter {
            var result = new Letter()
            result.Type = letterType
            return result
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionRejectLetter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionRejectLetterScreenExpressionsImpl extends SubmissionRejectLetterExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at SubmissionRejectLetter.pcf: line 44, column 58
    function def_onEnter_3 (def :  pcf.SubmissionRejectLetterDV) : void {
      def.onEnter(account, letter)
    }
    
    // 'def' attribute on PanelRef at SubmissionRejectLetter.pcf: line 44, column 58
    function def_refreshVariables_4 (def :  pcf.SubmissionRejectLetterDV) : void {
      def.refreshVariables(account, letter)
    }
    
    // 'updateVisible' attribute on EditButtons at SubmissionRejectLetter.pcf: line 37, column 78
    function visible_1 () : java.lang.Boolean {
      return docActionsHelper.DocumentTemplateActionsAvailable
    }
    
    // 'visible' attribute on AlertBar (id=SubmissionConfirmLetterScreen_GenerateLetterUnavailable) at SubmissionRejectLetter.pcf: line 42, column 74
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