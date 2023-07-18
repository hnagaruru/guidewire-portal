package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDataSearch_ResultsLV_PolicyChangeExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDataSearch_ResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 32, column 66
    function sortValue_0 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 37, column 54
    function sortValue_1 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 41, column 51
    function sortValue_2 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.BranchName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 51, column 54
    function sortValue_3 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on DateCell (id=CreationDate_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 61, column 55
    function sortValue_4 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.Job.CreateTime
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 65, column 58
    function sortValue_5 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.EditEffectiveDate
    }
    
    // 'value' attribute on RowIterator at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 20, column 86
    function value_40 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
      return searchResults
    }
    
    property get destPeriod () : PolicyPeriod {
      return getRequireValue("destPeriod", 0) as PolicyPeriod
    }
    
    property set destPeriod ($arg :  PolicyPeriod) {
      setRequireValue("destPeriod", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return getRequireValue("searchResults", 0) as gw.api.database.IQueryBeanResult<PolicyPeriodSummary>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<PolicyPeriodSummary>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyPolicyDataSearch_ResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 37, column 54
    function action_13 () : void {
      JobForward.go(policyPeriodSummary.Job)
    }
    
    // 'action' attribute on ButtonCell (id=SelectButtonCell_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 27, column 99
    function action_7 () : void {
      CopyPolicyDataDetailPopup.push(destPeriod, policyPeriodSummary.fetchPolicyPeriod(), policyPeriodSummary.EditEffectiveDate, true)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 37, column 54
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyPeriodSummary.Job)
    }
    
    // 'action' attribute on ButtonCell (id=SelectButtonCell_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 27, column 99
    function action_dest_8 () : pcf.api.Destination {
      return pcf.CopyPolicyDataDetailPopup.createDestination(destPeriod, policyPeriodSummary.fetchPolicyPeriod(), policyPeriodSummary.EditEffectiveDate, true)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 51, column 54
    function available_24 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'available' attribute on ButtonCell (id=SelectButtonCell_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 27, column 99
    function available_6 () : java.lang.Boolean {
      return !policyPeriodSummary.TermArchived
    }
    
    // 'useArchivedStyle' attribute on Row at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 22, column 61
    function useArchivedStyle_38 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 32, column 66
    function valueRoot_11 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 37, column 54
    function valueRoot_16 () : java.lang.Object {
      return policyPeriodSummary.Job
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 32, column 66
    function value_10 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 37, column 54
    function value_15 () : java.lang.String {
      return policyPeriodSummary.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 41, column 51
    function value_18 () : java.lang.String {
      return policyPeriodSummary.BranchName
    }
    
    // 'value' attribute on TextCell (id=PrimaryNamedInsured_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 46, column 59
    function value_21 () : java.lang.String {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 51, column 54
    function value_25 () : java.lang.String {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyPeriodStatus_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 57, column 51
    function value_29 () : typekey.PolicyPeriodStatus {
      return policyPeriodSummary.Status
    }
    
    // 'value' attribute on DateCell (id=CreationDate_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 61, column 55
    function value_32 () : java.util.Date {
      return policyPeriodSummary.Job.CreateTime
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CopyPolicyDataSearch_ResultsLV.PolicyChange.pcf: line 65, column 58
    function value_35 () : java.util.Date {
      return policyPeriodSummary.EditEffectiveDate
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  
}