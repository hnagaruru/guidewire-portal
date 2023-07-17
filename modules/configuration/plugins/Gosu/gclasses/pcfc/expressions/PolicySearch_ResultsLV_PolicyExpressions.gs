package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearch_ResultsLV_PolicyExpressions {
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicySearch_ResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 48, column 25
    function action_14 () : void {
      AccountFileDoRetrievalForward.go(policyPeriodSummary.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 36, column 25
    function action_6 () : void {
      if (policyPeriodSummary.PolicyNumberAssigned) { PolicyFileForward.go(policyPeriodSummary.PolicyNumber, policyPeriodSummary.EditEffectiveDate) }
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 48, column 25
    function action_dest_15 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(policyPeriodSummary.AccountNumber)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 48, column 25
    function available_13 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'useArchivedStyle' attribute on Row at PolicySearch_ResultsLV.Policy.pcf: line 29, column 61
    function useArchivedStyle_35 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 36, column 25
    function valueRoot_8 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=PrimaryNamedInsured_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 41, column 59
    function value_10 () : java.lang.String {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 48, column 25
    function value_16 () : java.lang.String {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 55, column 25
    function value_20 () : gw.api.productmodel.Product {
      return policyPeriodSummary.Product
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriodStatus_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 61, column 25
    function value_23 () : java.lang.String {
      return policyPeriodSummary.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 66, column 25
    function value_26 () : java.util.Date {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 71, column 25
    function value_29 () : java.util.Date {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 76, column 53
    function value_32 () : java.lang.String {
      return policyPeriodSummary.ProducerName
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 36, column 25
    function value_7 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearch_ResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 36, column 25
    function sortValue_0 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryNamedInsured_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 41, column 59
    function sortValue_1 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 48, column 25
    function sortValue_2 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 66, column 25
    function sortValue_3 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 71, column 25
    function sortValue_4 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at PolicySearch_ResultsLV.Policy.pcf: line 76, column 53
    function sortValue_5 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.ProducerName
    }
    
    // 'value' attribute on RowIterator (id=PolicyPeriodSummaryIterator) at PolicySearch_ResultsLV.Policy.pcf: line 25, column 86
    function value_37 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
      return searchResults
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return getRequireValue("searchResults", 0) as gw.api.database.IQueryBeanResult<PolicyPeriodSummary>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<PolicyPeriodSummary>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  
}