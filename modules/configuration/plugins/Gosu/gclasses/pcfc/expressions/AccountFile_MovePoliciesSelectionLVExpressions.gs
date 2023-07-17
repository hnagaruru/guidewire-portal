package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_MovePoliciesSelectionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_MovePoliciesSelectionLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MovePoliciesSelectionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_MovePoliciesSelectionLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 27, column 54
    function sortValue_0 (aPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return aPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on DateCell (id=PolicyStart_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 44, column 61
    function sortValue_1 (aPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return aPeriod.Policy.findEarliestPeriodStart()
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 49, column 40
    function sortValue_2 (aPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return aPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 54, column 38
    function sortValue_3 (aPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return aPeriod.PeriodEnd
    }
    
    // 'value' attribute on RowIterator at AccountFile_MovePoliciesSelectionLV.pcf: line 19, column 61
    function value_23 () : java.util.List<entity.PolicyPeriod> {
      return visiblePolicies
    }
    
    property get visiblePolicies () : List<PolicyPeriod> {
      return getRequireValue("visiblePolicies", 0) as List<PolicyPeriod>
    }
    
    property set visiblePolicies ($arg :  List<PolicyPeriod>) {
      setRequireValue("visiblePolicies", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MovePoliciesSelectionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_MovePoliciesSelectionLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 27, column 54
    function action_4 () : void {
      gw.web.account.AccountFileUIHelper.retrievePolicy(aPeriod)
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_MovePoliciesSelectionLV.pcf: line 21, column 61
    function useArchivedStyle_22 () : java.lang.Boolean {
      return aPeriod.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 27, column 54
    function valueRoot_6 () : java.lang.Object {
      return aPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 34, column 52
    function valueRoot_9 () : java.lang.Object {
      return aPeriod.Policy
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 39, column 48
    function value_11 () : java.lang.String {
      return aPeriod.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=PolicyStart_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 44, column 61
    function value_14 () : java.util.Date {
      return aPeriod.Policy.findEarliestPeriodStart()
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 49, column 40
    function value_16 () : java.util.Date {
      return aPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 54, column 38
    function value_19 () : java.util.Date {
      return aPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 27, column 54
    function value_5 () : java.lang.String {
      return aPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_MovePoliciesSelectionLV.pcf: line 34, column 52
    function value_8 () : gw.api.productmodel.Product {
      return aPeriod.Policy.Product
    }
    
    property get aPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}