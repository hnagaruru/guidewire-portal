package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_PolicyTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Summary_PolicyTermsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_PolicyTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Summary_PolicyTermsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Summary_PolicyTermsLV.pcf: line 26, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return new gw.api.web.policy.ViewablePolicyPeriodQueryFilter()
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Summary_PolicyTermsLV.pcf: line 14, column 75
    function initialValue_0 () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return account.IssuedPolicies
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 35, column 66
    function sortValue_2 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 51, column 52
    function sortValue_3 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 55, column 50
    function sortValue_4 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on RowIterator at AccountFile_Summary_PolicyTermsLV.pcf: line 19, column 86
    function value_22 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
      return issuedPolicies
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get issuedPolicies () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return getVariableValue("issuedPolicies", 0) as gw.api.database.IQueryBeanResult<PolicyPeriodSummary>
    }
    
    property set issuedPolicies ($arg :  gw.api.database.IQueryBeanResult<PolicyPeriodSummary>) {
      setVariableValue("issuedPolicies", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_PolicyTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Summary_PolicyTermsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 35, column 66
    function action_5 () : void {
      gw.web.account.AccountFileUIHelper.retrievePolicy(policyPeriodSummary)
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_Summary_PolicyTermsLV.pcf: line 29, column 61
    function useArchivedStyle_21 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 42, column 31
    function valueRoot_10 () : java.lang.Object {
      return policyPeriodSummary.fetchPolicyPeriod().Policy
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 35, column 66
    function valueRoot_7 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 47, column 60
    function value_12 () : java.lang.String {
      return policyPeriodSummary.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 51, column 52
    function value_15 () : java.util.Date {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 55, column 50
    function value_18 () : java.util.Date {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 35, column 66
    function value_6 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Summary_PolicyTermsLV.pcf: line 42, column 31
    function value_9 () : String {
      return policyPeriodSummary.fetchPolicyPeriod().Policy.ProductDisplayName
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  
}