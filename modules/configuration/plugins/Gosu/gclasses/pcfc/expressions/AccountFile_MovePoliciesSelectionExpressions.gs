package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_MovePoliciesSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_MovePoliciesSelectionExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MovePoliciesSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_MovePoliciesSelectionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (srcAccount :  Account, targetAccount :  Account) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MovePoliciesButton) at AccountFile_MovePoliciesSelection.pcf: line 34, column 77
    function allCheckedRowsAction_1 (CheckedValues :  entity.PolicyPeriod[], CheckedValuesErrors :  java.util.Map) : void {
      movePolicies(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MovePoliciesSelection.pcf: line 51, column 67
    function def_onEnter_8 (def :  pcf.AccountFile_MovePoliciesSelectionLV) : void {
      def.onEnter(visiblePeriods)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MovePoliciesSelection.pcf: line 51, column 67
    function def_refreshVariables_9 (def :  pcf.AccountFile_MovePoliciesSelectionLV) : void {
      def.refreshVariables(visiblePeriods)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_MovePoliciesSelection.pcf: line 27, column 40
    function initialValue_0 () : List<PolicyPeriod> {
      return srcAccount.VisiblePolicies.map(\ p -> p.LatestPeriod).toList()
    }
    
    // 'parent' attribute on Page (id=AccountFile_MovePoliciesSelection) at AccountFile_MovePoliciesSelection.pcf: line 12, column 80
    static function parent_10 (srcAccount :  Account, targetAccount :  Account) : pcf.api.Destination {
      return pcf.AccountFile_AccountSearch.createDestination(targetAccount, gw.account.AccountSearchReason.MovePolicies)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountFile_MovePoliciesSelection.pcf: line 43, column 47
    function valueRoot_3 () : java.lang.Object {
      return srcAccount
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountFile_MovePoliciesSelection.pcf: line 47, column 66
    function valueRoot_6 () : java.lang.Object {
      return srcAccount.AccountHolderContact
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountFile_MovePoliciesSelection.pcf: line 43, column 47
    function value_2 () : java.lang.String {
      return srcAccount.AccountNumber
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountFile_MovePoliciesSelection.pcf: line 47, column 66
    function value_5 () : java.lang.String {
      return srcAccount.AccountHolderContact.DisplayName
    }
    
    override property get CurrentLocation () : pcf.AccountFile_MovePoliciesSelection {
      return super.CurrentLocation as pcf.AccountFile_MovePoliciesSelection
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
    
    property get visiblePeriods () : List<PolicyPeriod> {
      return getVariableValue("visiblePeriods", 0) as List<PolicyPeriod>
    }
    
    property set visiblePeriods ($arg :  List<PolicyPeriod>) {
      setVariableValue("visiblePeriods", 0, $arg)
    }
    
    function movePolicies(periodsToMove : entity.PolicyPeriod[]){
      gw.transaction.Transaction.runWithNewBundle(\ b ->{    
        var targetAcct = b.add(targetAccount)
        var srcAcct = b.add(srcAccount)
        targetAcct.movePoliciesFrom(srcAcct, periodsToMove)
      })
      AccountFile.go(targetAccount)
    }
    
    
  }
  
  
}