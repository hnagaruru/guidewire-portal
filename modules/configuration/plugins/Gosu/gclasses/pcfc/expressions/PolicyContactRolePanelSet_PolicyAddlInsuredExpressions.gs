package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyAddlInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyAddlInsuredExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyAddlInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyContactRolePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInsuredType_Cell) at PolicyContactRolePanelSet.PolicyAddlInsured.pcf: line 36, column 58
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyAddlInsuredDetail.AdditionalInsuredType = (__VALUE_TO_SET as typekey.AdditionalInsuredType)
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInsuredType_Cell) at PolicyContactRolePanelSet.PolicyAddlInsured.pcf: line 36, column 58
    function valueRoot_4 () : java.lang.Object {
      return policyAddlInsuredDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInsuredType_Cell) at PolicyContactRolePanelSet.PolicyAddlInsured.pcf: line 36, column 58
    function value_2 () : typekey.AdditionalInsuredType {
      return policyAddlInsuredDetail.AdditionalInsuredType
    }
    
    property get policyAddlInsuredDetail () : entity.PolicyAddlInsuredDetail {
      return getIteratedValue(1) as entity.PolicyAddlInsuredDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyAddlInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyAddlInsured.pcf: line 14, column 40
    function initialValue_0 () : entity.PolicyAddlInsured {
      return policyContactRole as PolicyAddlInsured
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInsuredType_Cell) at PolicyContactRolePanelSet.PolicyAddlInsured.pcf: line 36, column 58
    function sortValue_1 (policyAddlInsuredDetail :  entity.PolicyAddlInsuredDetail) : java.lang.Object {
      return policyAddlInsuredDetail.AdditionalInsuredType
    }
    
    // 'value' attribute on RowIterator at PolicyContactRolePanelSet.PolicyAddlInsured.pcf: line 28, column 56
    function value_6 () : entity.PolicyAddlInsuredDetail[] {
      return policyAddlInsured.PolicyAdditionalInsuredDetails
    }
    
    property get policyAddlInsured () : entity.PolicyAddlInsured {
      return getVariableValue("policyAddlInsured", 0) as entity.PolicyAddlInsured
    }
    
    property set policyAddlInsured ($arg :  entity.PolicyAddlInsured) {
      setVariableValue("policyAddlInsured", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    
  }
  
  
}