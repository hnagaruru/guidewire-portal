package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearch_ResultsLV.Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDataSearch_ResultsLV_PolicyExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearch_ResultsLV.Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDataSearch_ResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 33, column 66
    function sortValue_0 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryNamedInsured_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 37, column 59
    function sortValue_1 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 42, column 54
    function sortValue_2 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 51, column 52
    function sortValue_3 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 55, column 50
    function sortValue_4 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on RowIterator at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 20, column 86
    function value_31 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
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
    
    function goToPolicyPeriod (policyPeriodSummary : PolicyPeriodSummary) {
      var period = policyPeriodSummary.fetchPolicyPeriod()
      if (policyPeriodSummary.PolicyNumberAssigned) {
        PolicyFileForward.go(period, policyPeriodSummary.EditEffectiveDate)
      }
    }
    
    function selectPolicyPeriod(policyPeriodSummary : PolicyPeriodSummary) {
      var latestPeriod = policyPeriodSummary.Job.LatestPeriod
      var sliceDate = latestPeriod.PeriodEnd.addSeconds(-1)
      CopyPolicyDataDetailPopup.push(destPeriod, latestPeriod.getSlice(sliceDate), sliceDate, false) 
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearch_ResultsLV.Policy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyPolicyDataSearch_ResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=SelectButtonCell_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 27, column 99
    function action_6 () : void {
      selectPolicyPeriod(policyPeriodSummary)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 33, column 66
    function action_8 () : void {
      goToPolicyPeriod(policyPeriodSummary)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 42, column 54
    function available_15 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'available' attribute on ButtonCell (id=SelectButtonCell_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 27, column 99
    function available_5 () : java.lang.Boolean {
      return !policyPeriodSummary.TermArchived
    }
    
    // 'useArchivedStyle' attribute on Row at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 22, column 61
    function useArchivedStyle_29 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 33, column 66
    function valueRoot_10 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=PrimaryNamedInsured_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 37, column 59
    function value_12 () : java.lang.String {
      return policyPeriodSummary.InsuredDisplayName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 42, column 54
    function value_16 () : java.lang.String {
      return policyPeriodSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyPeriodStatus_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 47, column 60
    function value_20 () : java.lang.String {
      return policyPeriodSummary.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 51, column 52
    function value_23 () : java.util.Date {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 55, column 50
    function value_26 () : java.util.Date {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at CopyPolicyDataSearch_ResultsLV.Policy.pcf: line 33, column 66
    function value_9 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  
}