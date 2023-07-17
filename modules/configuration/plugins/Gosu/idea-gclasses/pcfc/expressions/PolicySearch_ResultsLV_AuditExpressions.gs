package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearch_ResultsLV_AuditExpressions {
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicySearch_ResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 50, column 25
    function action_12 () : void {
      AccountFileDoRetrievalForward.go(policyPeriodSummary.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 37, column 25
    function action_3 () : void {
      JobForward.go(policyPeriodSummary.Job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicySearch_ResultsLV.Audit.pcf: line 81, column 56
    function action_30 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 50, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(policyPeriodSummary.AccountNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicySearch_ResultsLV.Audit.pcf: line 81, column 56
    function action_dest_31 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 37, column 25
    function action_dest_4 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyPeriodSummary.Job)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 50, column 25
    function available_11 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'condition' attribute on ToolbarFlag at PolicySearch_ResultsLV.Audit.pcf: line 28, column 35
    function condition_2 () : java.lang.Boolean {
      return policyPeriodSummary.Job.CloseDate == null
    }
    
    // 'useArchivedStyle' attribute on Row at PolicySearch_ResultsLV.Audit.pcf: line 30, column 61
    function useArchivedStyle_35 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 81, column 56
    function valueRoot_33 () : java.lang.Object {
      return policyPeriodSummary.Job
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 37, column 25
    function valueRoot_6 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 50, column 25
    function value_14 () : java.lang.String {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 57, column 25
    function value_18 () : gw.api.productmodel.Product {
      return policyPeriodSummary.Product
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 63, column 25
    function value_21 () : java.util.Date {
      return policyPeriodSummary.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriodStatus_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 69, column 25
    function value_24 () : java.lang.String {
      return policyPeriodSummary.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 75, column 53
    function value_27 () : java.lang.String {
      return policyPeriodSummary.ProducerName
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 81, column 56
    function value_32 () : entity.User {
      return policyPeriodSummary.Job.Underwriter
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 37, column 25
    function value_5 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=MainContact_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 43, column 59
    function value_8 () : java.lang.String {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearch_ResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 37, column 25
    function sortValue_0 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.Audit.pcf: line 50, column 25
    function sortValue_1 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on RowIterator (id=PolicyPeriodSummaryIterator) at PolicySearch_ResultsLV.Audit.pcf: line 25, column 86
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