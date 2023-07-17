package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Notes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_NotesExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Notes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_NotesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    static function __constructorIndex (account :  Account, activity :  Activity) : int {
      return 1
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Notes) at AccountFile_Notes.pcf: line 12, column 35
    static function canVisit_2 (account :  Account, activity :  Activity) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountnotes and perm.System.noteview
    }
    
    // 'def' attribute on ScreenRef at AccountFile_Notes.pcf: line 24, column 83
    function def_onEnter_0 (def :  pcf.NotesScreen) : void {
      def.onEnter(account, null, not perm.Account.edit(account), activity)
    }
    
    // 'def' attribute on ScreenRef at AccountFile_Notes.pcf: line 24, column 83
    function def_refreshVariables_1 (def :  pcf.NotesScreen) : void {
      def.refreshVariables(account, null, not perm.Account.edit(account), activity)
    }
    
    // 'handlesValidationIssue' attribute on Page (id=AccountFile_Notes) at AccountFile_Notes.pcf: line 12, column 35
    static function handlesValidationIssue_3 (account :  Account, activity :  Activity, VALUE :  java.lang.Object) : java.lang.Boolean {
      return VALUE typeis entity.Note
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Notes) at AccountFile_Notes.pcf: line 12, column 35
    function infoBar_onEnter_4 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Notes) at AccountFile_Notes.pcf: line 12, column 35
    function infoBar_refreshVariables_5 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // Page (id=AccountFile_Notes) at AccountFile_Notes.pcf: line 12, column 35
    static function parent_6 (account :  Account, activity :  Activity) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Notes {
      return super.CurrentLocation as pcf.AccountFile_Notes
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    
  }
  
  
}