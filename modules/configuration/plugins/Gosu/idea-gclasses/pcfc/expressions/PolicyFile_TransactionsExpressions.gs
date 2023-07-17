package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_TransactionsExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_TransactionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'action' attribute on BulletPointTextInput (id=AllTransactions_Input) at PolicyFile_Transactions.pcf: line 24, column 94
    function action_0 () : void {
      PolicyFile_Transactions_AllPopup.push(period, asOfDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ByJob_Input) at PolicyFile_Transactions.pcf: line 28, column 96
    function action_2 () : void {
      PolicyFile_Transactions_ByJobPopup.push(period, asOfDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ByPeriod_Input) at PolicyFile_Transactions.pcf: line 32, column 99
    function action_4 () : void {
      PolicyFile_Transactions_ByPeriodPopup.push(period, asOfDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=AllTransactions_Input) at PolicyFile_Transactions.pcf: line 24, column 94
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_Transactions_AllPopup.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ByJob_Input) at PolicyFile_Transactions.pcf: line 28, column 96
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_Transactions_ByJobPopup.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ByPeriod_Input) at PolicyFile_Transactions.pcf: line 32, column 99
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_Transactions_ByPeriodPopup.createDestination(period, asOfDate)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Transactions) at PolicyFile_Transactions.pcf: line 9, column 91
    static function canVisit_6 (asOfDate :  java.util.Date, period :  PolicyPeriod) : java.lang.Boolean {
      return (perm.User.DevAllAccess or perm.System.internaltools)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_Transactions) at PolicyFile_Transactions.pcf: line 9, column 91
    static function parent_7 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Transactions {
      return super.CurrentLocation as pcf.PolicyFile_Transactions
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}