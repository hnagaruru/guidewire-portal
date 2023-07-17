package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_BillingExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_BillingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=AccountFile_Billing) at AccountFile_Billing.pcf: line 12, column 35
    function canEdit_4 () : java.lang.Boolean {
      return perm.Account.edit( account )
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Billing) at AccountFile_Billing.pcf: line 12, column 35
    static function canVisit_5 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountbilling
    }
    
    // 'def' attribute on ScreenRef at AccountFile_Billing.pcf: line 27, column 76
    function def_onEnter_2 (def :  pcf.Account_BillingScreen) : void {
      def.onEnter(account, accountNumber, billingSummary)
    }
    
    // 'def' attribute on ScreenRef at AccountFile_Billing.pcf: line 27, column 76
    function def_refreshVariables_3 (def :  pcf.Account_BillingScreen) : void {
      def.refreshVariables(account, accountNumber, billingSummary)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Billing) at AccountFile_Billing.pcf: line 12, column 35
    function infoBar_onEnter_6 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Billing) at AccountFile_Billing.pcf: line 12, column 35
    function infoBar_refreshVariables_7 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Billing.pcf: line 21, column 32
    function initialValue_0 () : java.lang.String {
      return account.AccountNumber
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Billing.pcf: line 25, column 63
    function initialValue_1 () : gw.plugin.billing.BCAccountBillingDisplayTotals {
      return gw.web.account.AccountBillingUIHelper.retrieveBillingSummary({accountNumber}, account.PreferredSettlementCurrency)
    }
    
    // 'onResume' attribute on Page (id=AccountFile_Billing) at AccountFile_Billing.pcf: line 12, column 35
    function onResume_8 () : void {
      billingSummary = gw.web.account.AccountBillingUIHelper.retrieveBillingSummary({accountNumber}, account.PreferredSettlementCurrency)
    }
    
    // Page (id=AccountFile_Billing) at AccountFile_Billing.pcf: line 12, column 35
    static function parent_9 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Billing {
      return super.CurrentLocation as pcf.AccountFile_Billing
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get accountNumber () : java.lang.String {
      return getVariableValue("accountNumber", 0) as java.lang.String
    }
    
    property set accountNumber ($arg :  java.lang.String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get billingSummary () : gw.plugin.billing.BCAccountBillingDisplayTotals {
      return getVariableValue("billingSummary", 0) as gw.plugin.billing.BCAccountBillingDisplayTotals
    }
    
    property set billingSummary ($arg :  gw.plugin.billing.BCAccountBillingDisplayTotals) {
      setVariableValue("billingSummary", 0, $arg)
    }
    
    
  }
  
  
}