package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/ContactDetailsTileInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsTileInputSet_companyExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/ContactDetailsTileInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsTileInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsTileInputSet.company.pcf: line 14, column 23
    function initialValue_0 () : Account {
      return accountDetailsTileHelper.Account
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsTileInputSet.company.pcf: line 18, column 23
    function initialValue_1 () : Company {
      return (account.AccountHolderContact as Company)
    }
    
    // 'value' attribute on TextInput (id=BusinessDescription_Input) at ContactDetailsTileInputSet.company.pcf: line 34, column 35
    function valueRoot_12 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TextInput (id=FEIN_Input) at ContactDetailsTileInputSet.company.pcf: line 22, column 39
    function valueRoot_3 () : java.lang.Object {
      return company
    }
    
    // 'value' attribute on TextInput (id=OrganizationType_Input) at ContactDetailsTileInputSet.company.pcf: line 26, column 51
    function valueRoot_6 () : java.lang.Object {
      return account.AccountOrgType
    }
    
    // 'value' attribute on TextInput (id=IndustryCode_Input) at ContactDetailsTileInputSet.company.pcf: line 30, column 49
    function valueRoot_9 () : java.lang.Object {
      return account.IndustryCode
    }
    
    // 'value' attribute on TextInput (id=BusinessDescription_Input) at ContactDetailsTileInputSet.company.pcf: line 34, column 35
    function value_11 () : java.lang.String {
      return account.BusOpsDesc
    }
    
    // 'value' attribute on TextInput (id=FEIN_Input) at ContactDetailsTileInputSet.company.pcf: line 22, column 39
    function value_2 () : java.lang.String {
      return company.FEINOfficialID
    }
    
    // 'value' attribute on TextInput (id=OrganizationType_Input) at ContactDetailsTileInputSet.company.pcf: line 26, column 51
    function value_5 () : java.lang.String {
      return account.AccountOrgType.DisplayName
    }
    
    // 'value' attribute on TextInput (id=IndustryCode_Input) at ContactDetailsTileInputSet.company.pcf: line 30, column 49
    function value_8 () : java.lang.String {
      return account.IndustryCode.DisplayName
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get accountDetailsTileHelper () : gw.api.web.dashboard.ui.account.AccountDetailHelper {
      return getRequireValue("accountDetailsTileHelper", 0) as gw.api.web.dashboard.ui.account.AccountDetailHelper
    }
    
    property set accountDetailsTileHelper ($arg :  gw.api.web.dashboard.ui.account.AccountDetailHelper) {
      setRequireValue("accountDetailsTileHelper", 0, $arg)
    }
    
    property get company () : Company {
      return getVariableValue("company", 0) as Company
    }
    
    property set company ($arg :  Company) {
      setVariableValue("company", 0, $arg)
    }
    
    
  }
  
  
}