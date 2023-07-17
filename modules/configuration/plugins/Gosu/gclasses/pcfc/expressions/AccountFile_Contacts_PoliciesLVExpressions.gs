package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts_PoliciesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Contacts_PoliciesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts_PoliciesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Contacts_PoliciesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Contacts_PoliciesLV.pcf: line 26, column 33
    function filter_0 () : gw.api.filters.IFilter {
      return new gw.api.web.policy.ViewablePolicyPeriodQueryFilter()
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 35, column 54
    function sortValue_1 (summary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return summary.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 50, column 40
    function sortValue_2 (summary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return summary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 54, column 38
    function sortValue_3 (summary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return summary.PeriodEnd
    }
    
    // 'value' attribute on RowIterator at AccountFile_Contacts_PoliciesLV.pcf: line 14, column 86
    function value_23 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
      return acctContact.AssociatedPolicies
    }
    
    property get acctContact () : AccountContact {
      return getRequireValue("acctContact", 0) as AccountContact
    }
    
    property set acctContact ($arg :  AccountContact) {
      setRequireValue("acctContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts_PoliciesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Contacts_PoliciesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 35, column 54
    function action_5 () : void {
      PolicyFileForward.go(summary.PolicyNumber, summary.EditEffectiveDate)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 35, column 54
    function action_dest_6 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(summary.PolicyNumber, summary.EditEffectiveDate)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Contacts_PoliciesLV.pcf: line 19, column 45
    function initialValue_4 () : gw.api.productmodel.Product {
      return summary.Product
    }
    
    // RowIterator at AccountFile_Contacts_PoliciesLV.pcf: line 14, column 86
    function initializeVariables_22 () : void {
        product = summary.Product;

    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_Contacts_PoliciesLV.pcf: line 29, column 49
    function useArchivedStyle_21 () : java.lang.Boolean {
      return summary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 35, column 54
    function valueRoot_8 () : java.lang.Object {
      return summary
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 41, column 52
    function value_10 () : gw.api.productmodel.Product {
      return product
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 46, column 48
    function value_12 () : java.lang.String {
      return summary.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 50, column 40
    function value_15 () : java.util.Date {
      return summary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 54, column 38
    function value_18 () : java.util.Date {
      return summary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_PoliciesLV.pcf: line 35, column 54
    function value_7 () : java.lang.String {
      return summary.PolicyNumberDisplayString
    }
    
    property get product () : gw.api.productmodel.Product {
      return getVariableValue("product", 1) as gw.api.productmodel.Product
    }
    
    property set product ($arg :  gw.api.productmodel.Product) {
      setVariableValue("product", 1, $arg)
    }
    
    property get summary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  
}