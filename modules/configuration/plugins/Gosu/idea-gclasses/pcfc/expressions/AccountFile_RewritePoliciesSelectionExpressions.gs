package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_RewritePoliciesSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_RewritePoliciesSelectionExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_RewritePoliciesSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_RewritePoliciesSelectionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (srcAccount :  Account, targetAccount :  Account) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RewritePoliciesButton) at AccountFile_RewritePoliciesSelection.pcf: line 27, column 80
    function allCheckedRowsAction_0 (CheckedValues :  entity.PolicyPeriod[], CheckedValuesErrors :  java.util.Map) : void {
      RewriteNewAccount.startRewriteNewAccount(CheckedValues, targetAccount); AccountFile.go(targetAccount)
    }
    
    // 'def' attribute on PanelRef at AccountFile_RewritePoliciesSelection.pcf: line 44, column 86
    function def_onEnter_7 (def :  pcf.AccountFile_PolicySelectionLV) : void {
      def.onEnter(srcAccount.findPolicyPeriodsToRewrite())
    }
    
    // 'def' attribute on PanelRef at AccountFile_RewritePoliciesSelection.pcf: line 44, column 86
    function def_refreshVariables_8 (def :  pcf.AccountFile_PolicySelectionLV) : void {
      def.refreshVariables(srcAccount.findPolicyPeriodsToRewrite())
    }
    
    // 'parent' attribute on Page (id=AccountFile_RewritePoliciesSelection) at AccountFile_RewritePoliciesSelection.pcf: line 12, column 83
    static function parent_9 (srcAccount :  Account, targetAccount :  Account) : pcf.api.Destination {
      return pcf.AccountFile_AccountSearch.createDestination(targetAccount, gw.account.AccountSearchReason.RewritePolicies)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountFile_RewritePoliciesSelection.pcf: line 36, column 47
    function valueRoot_2 () : java.lang.Object {
      return srcAccount
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountFile_RewritePoliciesSelection.pcf: line 40, column 66
    function valueRoot_5 () : java.lang.Object {
      return srcAccount.AccountHolderContact
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountFile_RewritePoliciesSelection.pcf: line 36, column 47
    function value_1 () : java.lang.String {
      return srcAccount.AccountNumber
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountFile_RewritePoliciesSelection.pcf: line 40, column 66
    function value_4 () : java.lang.String {
      return srcAccount.AccountHolderContact.DisplayName
    }
    
    override property get CurrentLocation () : pcf.AccountFile_RewritePoliciesSelection {
      return super.CurrentLocation as pcf.AccountFile_RewritePoliciesSelection
    }
    
    property get srcAccount () : Account {
      return getVariableValue("srcAccount", 0) as Account
    }
    
    property set srcAccount ($arg :  Account) {
      setVariableValue("srcAccount", 0, $arg)
    }
    
    property get targetAccount () : Account {
      return getVariableValue("targetAccount", 0) as Account
    }
    
    property set targetAccount ($arg :  Account) {
      setVariableValue("targetAccount", 0, $arg)
    }
    
    
  }
  
  
}