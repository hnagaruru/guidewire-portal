package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/AccountDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountDetailsDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/AccountDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountDetailsDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=EditAccount) at AccountDetailsDetailViewTile.pcf: line 21, column 48
    function action_2 () : void {
      accountDetailsHelper.editAccount()
    }
    
    // 'action' attribute on TextInput (id=AccountHolder_Input) at AccountDetailsDetailViewTile.pcf: line 32, column 59
    function action_6 () : void {
      ContactForward.go(account.AccountHolderContact)
    }
    
    // 'action' attribute on TextInput (id=AccountHolder_Input) at AccountDetailsDetailViewTile.pcf: line 32, column 59
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(account.AccountHolderContact)
    }
    
    // 'def' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function def_onEnter_19 (def :  pcf.ContactDetailsTileInputSet_company) : void {
      def.onEnter(accountDetailsHelper)
    }
    
    // 'def' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function def_onEnter_21 (def :  pcf.ContactDetailsTileInputSet_default) : void {
      def.onEnter(accountDetailsHelper)
    }
    
    // 'def' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function def_onEnter_23 (def :  pcf.ContactDetailsTileInputSet_person) : void {
      def.onEnter(accountDetailsHelper)
    }
    
    // 'def' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function def_refreshVariables_20 (def :  pcf.ContactDetailsTileInputSet_company) : void {
      def.refreshVariables(accountDetailsHelper)
    }
    
    // 'def' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function def_refreshVariables_22 (def :  pcf.ContactDetailsTileInputSet_default) : void {
      def.refreshVariables(accountDetailsHelper)
    }
    
    // 'def' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function def_refreshVariables_24 (def :  pcf.ContactDetailsTileInputSet_person) : void {
      def.refreshVariables(accountDetailsHelper)
    }
    
    // 'initialValue' attribute on Variable at AccountDetailsDetailViewTile.pcf: line 14, column 67
    function initialValue_0 () : gw.api.web.dashboard.ui.account.AccountDetailHelper {
      return new gw.api.web.dashboard.ui.account.AccountDetailHelper(account)
    }
    
    // 'label' attribute on TextInput (id=Address_Input) at AccountDetailsDetailViewTile.pcf: line 36, column 47
    function label_11 () : java.lang.Object {
      return accountDetailsHelper.AddressLabel
    }
    
    // 'mode' attribute on TileInputSetRef at AccountDetailsDetailViewTile.pcf: line 45, column 54
    function mode_25 () : java.lang.Object {
      return account.AccountHolderContact.Subtype
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at AccountDetailsDetailViewTile.pcf: line 36, column 47
    function valueRoot_13 () : java.lang.Object {
      return accountDetailsHelper
    }
    
    // 'value' attribute on TextInput (id=AccountStatus_Input) at AccountDetailsDetailViewTile.pcf: line 49, column 52
    function valueRoot_27 () : java.lang.Object {
      return account.AccountStatus
    }
    
    // 'value' attribute on TextInput (id=SettlementCurrency_Input) at AccountDetailsDetailViewTile.pcf: line 60, column 67
    function valueRoot_36 () : java.lang.Object {
      return account.PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountDetailsDetailViewTile.pcf: line 27, column 40
    function valueRoot_4 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TextInput (id=CoverageCurrency_Input) at AccountDetailsDetailViewTile.pcf: line 65, column 67
    function valueRoot_41 () : java.lang.Object {
      return account.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextInput (id=AccountHolder_Input) at AccountDetailsDetailViewTile.pcf: line 32, column 59
    function valueRoot_9 () : java.lang.Object {
      return account.AccountHolderContact
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at AccountDetailsDetailViewTile.pcf: line 36, column 47
    function value_12 () : java.lang.String {
      return accountDetailsHelper.Address
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AccountDetailsDetailViewTile.pcf: line 40, column 58
    function value_16 () : java.lang.String {
      return accountDetailsHelper.AddressDescription
    }
    
    // 'value' attribute on TextInput (id=AccountStatus_Input) at AccountDetailsDetailViewTile.pcf: line 49, column 52
    function value_26 () : java.lang.String {
      return account.AccountStatus.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountDetailsDetailViewTile.pcf: line 27, column 40
    function value_3 () : java.lang.String {
      return account.AccountNumber
    }
    
    // 'value' attribute on DateInput (id=AccountStatusUpdateTime_Input) at AccountDetailsDetailViewTile.pcf: line 55, column 72
    function value_30 () : java.util.Date {
      return account.AccountStatusUpdateTime
    }
    
    // 'value' attribute on TextInput (id=SettlementCurrency_Input) at AccountDetailsDetailViewTile.pcf: line 60, column 67
    function value_35 () : java.lang.String {
      return account.PreferredSettlementCurrency.DisplayName
    }
    
    // 'value' attribute on TextInput (id=CoverageCurrency_Input) at AccountDetailsDetailViewTile.pcf: line 65, column 67
    function value_40 () : java.lang.String {
      return account.PreferredCoverageCurrency.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AccountHolder_Input) at AccountDetailsDetailViewTile.pcf: line 32, column 59
    function value_8 () : java.lang.String {
      return account.AccountHolderContact.DisplayName
    }
    
    // 'visible' attribute on TileAction (id=EditAccount) at AccountDetailsDetailViewTile.pcf: line 21, column 48
    function visible_1 () : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance.canEditAccount(account)
    }
    
    // 'visible' attribute on DateInput (id=AccountStatusUpdateTime_Input) at AccountDetailsDetailViewTile.pcf: line 55, column 72
    function visible_29 () : java.lang.Boolean {
      return account.AccountStatus == AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on TextInput (id=SettlementCurrency_Input) at AccountDetailsDetailViewTile.pcf: line 60, column 67
    function visible_34 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get accountDetailsHelper () : gw.api.web.dashboard.ui.account.AccountDetailHelper {
      return getVariableValue("accountDetailsHelper", 0) as gw.api.web.dashboard.ui.account.AccountDetailHelper
    }
    
    property set accountDetailsHelper ($arg :  gw.api.web.dashboard.ui.account.AccountDetailHelper) {
      setVariableValue("accountDetailsHelper", 0, $arg)
    }
    
    
  }
  
  
}