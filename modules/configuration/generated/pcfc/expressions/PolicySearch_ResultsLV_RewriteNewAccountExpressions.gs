package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearch_ResultsLV_RewriteNewAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicySearch_ResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 56, column 25
    function action_18 () : void {
      AccountFileDoRetrievalForward.go(policyPeriodSummary.AccountNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 93, column 56
    function action_39 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 37, column 25
    function action_4 () : void {
      JobForward.go(policyPeriodSummary.Job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 43, column 25
    function action_9 () : void {
      JobForward.go(policyPeriodSummary.Job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 43, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyPeriodSummary.Job)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 56, column 25
    function action_dest_19 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(policyPeriodSummary.AccountNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 93, column 56
    function action_dest_40 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 37, column 25
    function action_dest_5 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyPeriodSummary.Job)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 56, column 25
    function available_17 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'condition' attribute on ToolbarFlag at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 28, column 35
    function condition_3 () : java.lang.Boolean {
      return policyPeriodSummary.Job.CloseDate == null
    }
    
    // 'useArchivedStyle' attribute on Row at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 30, column 61
    function useArchivedStyle_44 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 43, column 25
    function valueRoot_12 () : java.lang.Object {
      return policyPeriodSummary.Job
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 37, column 25
    function valueRoot_7 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 43, column 25
    function value_11 () : java.lang.String {
      return policyPeriodSummary.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=MainContact_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 49, column 59
    function value_14 () : java.lang.String {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 56, column 25
    function value_20 () : java.lang.String {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 63, column 25
    function value_24 () : gw.api.productmodel.Product {
      return policyPeriodSummary.Product
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 69, column 25
    function value_27 () : java.util.Date {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 75, column 25
    function value_30 () : java.util.Date {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriodStatus_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 81, column 25
    function value_33 () : java.lang.String {
      return policyPeriodSummary.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 87, column 53
    function value_36 () : java.lang.String {
      return policyPeriodSummary.ProducerName
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 93, column 56
    function value_41 () : entity.User {
      return policyPeriodSummary.Job.Underwriter
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 37, column 25
    function value_6 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearch_ResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 37, column 25
    function sortValue_0 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 43, column 25
    function sortValue_1 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 56, column 25
    function sortValue_2 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on RowIterator (id=PolicyPeriodSummaryIterator) at PolicySearch_ResultsLV.RewriteNewAccount.pcf: line 25, column 86
    function value_46 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
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