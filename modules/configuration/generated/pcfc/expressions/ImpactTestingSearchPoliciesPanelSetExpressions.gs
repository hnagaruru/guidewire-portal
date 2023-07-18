package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSearchPoliciesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingSearchPoliciesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSearchPoliciesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingSearchPoliciesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=resultPolicyNumber_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 29, column 29
    function sortValue_0 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=resultPolicyTerm_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 35, column 29
    function sortValue_1 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.TermNumber
    }
    
    // 'value' attribute on TextCell (id=resultProducerCode_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 47, column 29
    function sortValue_2 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.ProducerCodeOfRecord
    }
    
    // 'value' attribute on TypeKeyCell (id=resultJurisdiction_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 53, column 29
    function sortValue_3 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.BaseState
    }
    
    // 'value' attribute on DateCell (id=resultExpirationDate_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 65, column 29
    function sortValue_4 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=resultEffectiveDate_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 70, column 29
    function sortValue_5 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodEnd
    }
    
    // 'value' attribute on RowIterator at ImpactTestingSearchPoliciesPanelSet.pcf: line 23, column 83
    function value_29 () : gw.api.database.IQueryBeanResult<entity.PolicyPeriod> {
      return allPolicyPeriods
    }
    
    property get allPolicyPeriods () : gw.api.database.IQueryBeanResult<entity.PolicyPeriod> {
      return getRequireValue("allPolicyPeriods", 0) as gw.api.database.IQueryBeanResult<entity.PolicyPeriod>
    }
    
    property set allPolicyPeriods ($arg :  gw.api.database.IQueryBeanResult<entity.PolicyPeriod>) {
      setRequireValue("allPolicyPeriods", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSearchPoliciesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ImpactTestingSearchPoliciesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=resultPostalCode_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 60, column 29
    function valueRoot_21 () : java.lang.Object {
      return policyPeriod.getSlice(policyPeriod.EditEffectiveDate).PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=resultPolicyNumber_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 29, column 29
    function valueRoot_7 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextCell (id=resultProduct_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 41, column 114
    function value_12 () : java.lang.String {
      return gw.rating.rtm.util.ProductModelUtils.lineStyleProductDisplay(policyPeriod.Policy.Product)
    }
    
    // 'value' attribute on TextCell (id=resultProducerCode_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 47, column 29
    function value_14 () : entity.ProducerCode {
      return policyPeriod.ProducerCodeOfRecord
    }
    
    // 'value' attribute on TypeKeyCell (id=resultJurisdiction_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 53, column 29
    function value_17 () : typekey.Jurisdiction {
      return policyPeriod.BaseState
    }
    
    // 'value' attribute on TextCell (id=resultPostalCode_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 60, column 29
    function value_20 () : java.lang.String {
      return policyPeriod.getSlice(policyPeriod.EditEffectiveDate).PrimaryLocation.PostalCode
    }
    
    // 'value' attribute on DateCell (id=resultExpirationDate_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 65, column 29
    function value_23 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=resultEffectiveDate_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 70, column 29
    function value_26 () : java.util.Date {
      return policyPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=resultPolicyNumber_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 29, column 29
    function value_6 () : java.lang.String {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=resultPolicyTerm_Cell) at ImpactTestingSearchPoliciesPanelSet.pcf: line 35, column 29
    function value_9 () : java.lang.Integer {
      return policyPeriod.TermNumber
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}