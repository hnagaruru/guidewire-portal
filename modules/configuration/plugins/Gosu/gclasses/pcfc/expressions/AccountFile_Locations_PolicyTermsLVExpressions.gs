package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations_PolicyTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Locations_PolicyTermsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations_PolicyTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Locations_PolicyTermsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Locations_PolicyTermsLV.pcf: line 24, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return new gw.api.web.policy.ViewablePolicyPeriodQueryFilter()
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Locations_PolicyTermsLV.pcf: line 14, column 75
    function initialValue_0 () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return accountLocation.BoundPeriods
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 35, column 66
    function sortValue_2 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 40, column 60
    function sortValue_3 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.Product.Description
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 49, column 52
    function sortValue_4 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 53, column 50
    function sortValue_5 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 62, column 54
    function sortValue_6 (policyPeriodSummary :  entity.PolicyPeriodSummary) : java.lang.Object {
      return policyPeriodSummary.Job.JobNumber
    }
    
    // 'value' attribute on RowIterator at AccountFile_Locations_PolicyTermsLV.pcf: line 19, column 86
    function value_32 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> {
      return issuedPolicies
    }
    
    property get accountLocation () : AccountLocation {
      return getRequireValue("accountLocation", 0) as AccountLocation
    }
    
    property set accountLocation ($arg :  AccountLocation) {
      setRequireValue("accountLocation", 0, $arg)
    }
    
    property get issuedPolicies () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return getVariableValue("issuedPolicies", 0) as gw.api.database.IQueryBeanResult<PolicyPeriodSummary>
    }
    
    property set issuedPolicies ($arg :  gw.api.database.IQueryBeanResult<PolicyPeriodSummary>) {
      setVariableValue("issuedPolicies", 0, $arg)
    }
    
    function retrievePolicy(policyPeriodSummary : PolicyPeriodSummary){
            PolicyFileForward.go(policyPeriodSummary.PolicyNumber, policyPeriodSummary.EditEffectiveDate)
    }
    
    function availablePolicyPeriod(policyPeriodSummary : PolicyPeriodSummary) : boolean {
      return (perm.PolicyPeriod.view(policyPeriodSummary) && (!policyPeriodSummary.TermArchived))
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations_PolicyTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Locations_PolicyTermsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 35, column 66
    function action_8 () : void {
      retrievePolicy(policyPeriodSummary)
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 35, column 66
    function available_7 () : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriodSummary) 
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_Locations_PolicyTermsLV.pcf: line 27, column 61
    function useArchivedStyle_31 () : java.lang.Boolean {
      return policyPeriodSummary.TermArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 35, column 66
    function valueRoot_10 () : java.lang.Object {
      return policyPeriodSummary
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 40, column 60
    function valueRoot_14 () : java.lang.Object {
      return policyPeriodSummary.Product
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 58, column 56
    function valueRoot_26 () : java.lang.Object {
      return policyPeriodSummary.Job
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 40, column 60
    function value_13 () : java.lang.String {
      return policyPeriodSummary.Product.Description
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 45, column 60
    function value_16 () : java.lang.String {
      return policyPeriodSummary.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 49, column 52
    function value_19 () : java.util.Date {
      return policyPeriodSummary.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 53, column 50
    function value_22 () : java.util.Date {
      return policyPeriodSummary.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 58, column 56
    function value_25 () : java.lang.String {
      return policyPeriodSummary.Job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 62, column 54
    function value_28 () : java.lang.String {
      return policyPeriodSummary.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_PolicyTermsLV.pcf: line 35, column 66
    function value_9 () : java.lang.String {
      return policyPeriodSummary.PolicyNumberDisplayString
    }
    
    property get policyPeriodSummary () : entity.PolicyPeriodSummary {
      return getIteratedValue(1) as entity.PolicyPeriodSummary
    }
    
    
  }
  
  
}