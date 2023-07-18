package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFileForwardWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileForwardWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFileForwardWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileForwardWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account, conditionType :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 19, column 57
    function action_0 () : void {
      NewAccountNoteWorksheet.goInWorkspace(account)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 22, column 66
    function action_3 () : void {
      AccountNewDocumentsLinkedWorksheet.goInWorkspace(account)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 25, column 67
    function action_6 () : void {
      gw.document.DocumentsActionsUIHelper.goInAccountNewDocumentFromTemplateWorksheet(account)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 19, column 57
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewAccountNoteWorksheet.createDestination(account)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 22, column 66
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AccountNewDocumentsLinkedWorksheet.createDestination(account)
    }
    
    // 'canVisit' attribute on Forward (id=AccountFileForwardWorksheet) at AccountFileForwardWorksheet.pcf: line 8, column 31
    static function canVisit_8 (account :  Account, conditionType :  String) : java.lang.Boolean {
      return perm.Account.view(account)
    }
    
    // 'condition' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 19, column 57
    function condition_2 () : java.lang.Boolean {
      return conditionType == "NewNote"
    }
    
    // 'condition' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 22, column 66
    function condition_5 () : java.lang.Boolean {
      return conditionType == "NewDocumentsLink"
    }
    
    // 'condition' attribute on ForwardCondition at AccountFileForwardWorksheet.pcf: line 25, column 67
    function condition_7 () : java.lang.Boolean {
      return conditionType == "NewDocumentCreate"
    }
    
    // 'parent' attribute on Forward (id=AccountFileForwardWorksheet) at AccountFileForwardWorksheet.pcf: line 8, column 31
    static function parent_9 (account :  Account, conditionType :  String) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AccountFileForwardWorksheet {
      return super.CurrentLocation as pcf.AccountFileForwardWorksheet
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get conditionType () : String {
      return getVariableValue("conditionType", 0) as String
    }
    
    property set conditionType ($arg :  String) {
      setVariableValue("conditionType", 0, $arg)
    }
    
    
  }
  
  
}