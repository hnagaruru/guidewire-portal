package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyLaborClient.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyLaborClientExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyLaborClient.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyContactRolePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=LaborClientEffectiveDate_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 48, column 70
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborClientDetail.ContractEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=LaborClientExpirationDate_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 54, column 71
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborClientDetail.ContractExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 36, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborClientDetail.Inclusion = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientState_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 42, column 42
    function valueRoot_10 () : java.lang.Object {
      return policyLaborClientDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 36, column 46
    function valueRoot_7 () : java.lang.Object {
      return policyLaborClientDetail
    }
    
    // 'value' attribute on DateCell (id=LaborClientEffectiveDate_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 48, column 70
    function value_12 () : java.util.Date {
      return policyLaborClientDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=LaborClientExpirationDate_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 54, column 71
    function value_16 () : java.util.Date {
      return policyLaborClientDetail.ContractExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 36, column 46
    function value_5 () : typekey.Inclusion {
      return policyLaborClientDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientState_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 42, column 42
    function value_9 () : typekey.State {
      return policyLaborClientDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    property get policyLaborClientDetail () : entity.WCLaborContactDetail {
      return getIteratedValue(1) as entity.WCLaborContactDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyLaborClient.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 14, column 40
    function initialValue_0 () : entity.PolicyLaborClient {
      return policyContactRole as PolicyLaborClient
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientInclusion_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 36, column 46
    function sortValue_1 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=LaborClientState_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 42, column 42
    function sortValue_2 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateCell (id=LaborClientEffectiveDate_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 48, column 70
    function sortValue_3 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=LaborClientExpirationDate_Cell) at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 54, column 71
    function sortValue_4 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.ContractExpirationDate
    }
    
    // 'value' attribute on RowIterator at PolicyContactRolePanelSet.PolicyLaborClient.pcf: line 28, column 53
    function value_20 () : entity.WCLaborContactDetail[] {
      return policyLaborClient.Details
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyLaborClient () : entity.PolicyLaborClient {
      return getVariableValue("policyLaborClient", 0) as entity.PolicyLaborClient
    }
    
    property set policyLaborClient ($arg :  entity.PolicyLaborClient) {
      setVariableValue("policyLaborClient", 0, $arg)
    }
    
    
  }
  
  
}