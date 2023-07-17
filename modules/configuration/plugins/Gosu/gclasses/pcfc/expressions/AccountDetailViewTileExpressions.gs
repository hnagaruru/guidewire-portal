package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/AccountDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/AccountDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at AccountDetailViewTile.pcf: line 39, column 37
    function action_4 () : void {
      AccountFile.go(account)
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at AccountDetailViewTile.pcf: line 39, column 37
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'backgroundColor' attribute on DetailViewTile (id=AccountDetailViewTile) at AccountDetailViewTile.pcf: line 9, column 54
    function backgroundColor_26 () : gw.api.web.color.GWColor {
      return customerSummaryHelper.BadgeColor
    }
    
    // 'initialValue' attribute on Variable at AccountDetailViewTile.pcf: line 16, column 30
    function initialValue_0 () : entity.Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at AccountDetailViewTile.pcf: line 20, column 61
    function initialValue_1 () : gw.api.web.dashboard.ui.contact.ContactHelper {
      return gw.api.web.dashboard.ui.contact.ContactHelper.forPolicyPeriod(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at AccountDetailViewTile.pcf: line 24, column 70
    function initialValue_2 () : gw.api.web.dashboard.ui.overview.AccountOverviewHelper {
      return gw.api.web.dashboard.ui.overview.AccountOverviewHelper.forPolicyPeriod(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at AccountDetailViewTile.pcf: line 28, column 67
    function initialValue_3 () : gw.api.web.dashboard.ui.contact.ContactDetailHelper {
      return new gw.api.web.dashboard.ui.contact.ContactDetailHelper(account.AccountHolderContact)
    }
    
    // 'label' attribute on TextInput (id=Address_Input) at AccountDetailViewTile.pcf: line 47, column 46
    function label_12 () : java.lang.Object {
      return contactDetailHelper.AddressLabel
    }
    
    // 'text' attribute on DetailViewTile (id=AccountDetailViewTile) at AccountDetailViewTile.pcf: line 9, column 54
    function text_25 () : java.lang.String {
      return customerSummaryHelper.BadgeText
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at AccountDetailViewTile.pcf: line 47, column 46
    function valueRoot_14 () : java.lang.Object {
      return contactDetailHelper
    }
    
    // 'value' attribute on MonetaryAmountInput (id=InForcePremium_Input) at AccountDetailViewTile.pcf: line 52, column 71
    function valueRoot_18 () : java.lang.Object {
      return customerSummaryHelper.AccountOverview
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at AccountDetailViewTile.pcf: line 39, column 37
    function valueRoot_7 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at AccountDetailViewTile.pcf: line 47, column 46
    function value_13 () : java.lang.String {
      return contactDetailHelper.Address
    }
    
    // 'value' attribute on MonetaryAmountInput (id=InForcePremium_Input) at AccountDetailViewTile.pcf: line 52, column 71
    function value_17 () : gw.pl.currency.MonetaryAmount {
      return customerSummaryHelper.AccountOverview.InForcePremium
    }
    
    // 'value' attribute on TextInput (id=InForcePoliciesCount_Input) at AccountDetailViewTile.pcf: line 58, column 26
    function value_20 () : int {
      return customerSummaryHelper.AccountOverview.InForcePolicies
    }
    
    // 'value' attribute on TextInput (id=OpenClaimsCount_Input) at AccountDetailViewTile.pcf: line 64, column 39
    function value_23 () : java.lang.String {
      return customerSummaryHelper.formattedOpenClaims()
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at AccountDetailViewTile.pcf: line 39, column 37
    function value_6 () : entity.Contact {
      return account.AccountHolderContact
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountDetailViewTile.pcf: line 43, column 40
    function value_9 () : java.lang.String {
      return account.AccountNumber
    }
    
    // 'visible' attribute on DetailViewTile (id=AccountDetailViewTile) at AccountDetailViewTile.pcf: line 9, column 54
    function visible_27 () : java.lang.Boolean {
      return customerSummaryHelper.DisplayBadge
    }
    
    property get account () : entity.Account {
      return getVariableValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get contactDetailHelper () : gw.api.web.dashboard.ui.contact.ContactDetailHelper {
      return getVariableValue("contactDetailHelper", 0) as gw.api.web.dashboard.ui.contact.ContactDetailHelper
    }
    
    property set contactDetailHelper ($arg :  gw.api.web.dashboard.ui.contact.ContactDetailHelper) {
      setVariableValue("contactDetailHelper", 0, $arg)
    }
    
    property get contactsHelper () : gw.api.web.dashboard.ui.contact.ContactHelper {
      return getVariableValue("contactsHelper", 0) as gw.api.web.dashboard.ui.contact.ContactHelper
    }
    
    property set contactsHelper ($arg :  gw.api.web.dashboard.ui.contact.ContactHelper) {
      setVariableValue("contactsHelper", 0, $arg)
    }
    
    property get customerSummaryHelper () : gw.api.web.dashboard.ui.overview.AccountOverviewHelper {
      return getVariableValue("customerSummaryHelper", 0) as gw.api.web.dashboard.ui.overview.AccountOverviewHelper
    }
    
    property set customerSummaryHelper ($arg :  gw.api.web.dashboard.ui.overview.AccountOverviewHelper) {
      setVariableValue("customerSummaryHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}