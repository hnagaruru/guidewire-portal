package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyLaborContractor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyLaborContractorExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyLaborContractor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyContactRolePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=LaborContractorEffectiveDate_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 48, column 74
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborContractorDetail.ContractEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=LaborContractorExpirationDate_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 54, column 75
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborContractorDetail.ContractExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 36, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborContractorDetail.Inclusion = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorState_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 42, column 42
    function valueRoot_10 () : java.lang.Object {
      return policyLaborContractorDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 36, column 46
    function valueRoot_7 () : java.lang.Object {
      return policyLaborContractorDetail
    }
    
    // 'value' attribute on DateCell (id=LaborContractorEffectiveDate_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 48, column 74
    function value_12 () : java.util.Date {
      return policyLaborContractorDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=LaborContractorExpirationDate_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 54, column 75
    function value_16 () : java.util.Date {
      return policyLaborContractorDetail.ContractExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 36, column 46
    function value_5 () : typekey.Inclusion {
      return policyLaborContractorDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorState_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 42, column 42
    function value_9 () : typekey.State {
      return policyLaborContractorDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    property get policyLaborContractorDetail () : entity.WCLaborContactDetail {
      return getIteratedValue(1) as entity.WCLaborContactDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyLaborContractor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 14, column 44
    function initialValue_0 () : entity.PolicyLaborContractor {
      return policyContactRole as PolicyLaborContractor
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 36, column 46
    function sortValue_1 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborContractorState_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 42, column 42
    function sortValue_2 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateCell (id=LaborContractorEffectiveDate_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 48, column 74
    function sortValue_3 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=LaborContractorExpirationDate_Cell) at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 54, column 75
    function sortValue_4 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.ContractExpirationDate
    }
    
    // 'value' attribute on RowIterator at PolicyContactRolePanelSet.PolicyLaborContractor.pcf: line 28, column 53
    function value_20 () : entity.WCLaborContactDetail[] {
      return policyLaborContractor.Details
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyLaborContractor () : entity.PolicyLaborContractor {
      return getVariableValue("policyLaborContractor", 0) as entity.PolicyLaborContractor
    }
    
    property set policyLaborContractor ($arg :  entity.PolicyLaborContractor) {
      setVariableValue("policyLaborContractor", 0, $arg)
    }
    
    
  }
  
  
}