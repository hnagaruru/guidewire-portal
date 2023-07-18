package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Documents.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_DocumentsExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Documents.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_DocumentsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Documents) at AccountFile_Documents.pcf: line 12, column 35
    static function canVisit_2 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountdocs
    }
    
    // 'def' attribute on ScreenRef at AccountFile_Documents.pcf: line 19, column 71
    function def_onEnter_0 (def :  pcf.DocumentsScreen) : void {
      def.onEnter(account, not perm.Account.edit(account))
    }
    
    // 'def' attribute on ScreenRef at AccountFile_Documents.pcf: line 19, column 71
    function def_refreshVariables_1 (def :  pcf.DocumentsScreen) : void {
      def.refreshVariables(account, not perm.Account.edit(account))
    }
    
    // 'handlesValidationIssue' attribute on Page (id=AccountFile_Documents) at AccountFile_Documents.pcf: line 12, column 35
    static function handlesValidationIssue_3 (account :  Account, VALUE :  java.lang.Object) : java.lang.Boolean {
      return VALUE typeis entity.Document
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Documents) at AccountFile_Documents.pcf: line 12, column 35
    function infoBar_onEnter_4 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Documents) at AccountFile_Documents.pcf: line 12, column 35
    function infoBar_refreshVariables_5 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // Page (id=AccountFile_Documents) at AccountFile_Documents.pcf: line 12, column 35
    static function parent_6 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Documents {
      return super.CurrentLocation as pcf.AccountFile_Documents
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  
}