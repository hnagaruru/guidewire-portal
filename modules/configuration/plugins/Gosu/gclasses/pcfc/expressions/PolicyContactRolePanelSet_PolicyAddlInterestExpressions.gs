package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyAddlInterestExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyContactRolePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_onEnter_10 (def :  pcf.PolicyAddlInterestPanelSet_IMSchEquipAddlInterest) : void {
      def.onEnter(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_onEnter_12 (def :  pcf.PolicyAddlInterestPanelSet_PAVhcleAddlInterest) : void {
      def.onEnter(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_onEnter_14 (def :  pcf.PolicyAddlInterestPanelSet_default) : void {
      def.onEnter(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_onEnter_4 (def :  pcf.PolicyAddlInterestPanelSet_BAVhcleAddlInterest) : void {
      def.onEnter(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_onEnter_6 (def :  pcf.PolicyAddlInterestPanelSet_BOPBldgAddlInterest) : void {
      def.onEnter(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_onEnter_8 (def :  pcf.PolicyAddlInterestPanelSet_CPBldgAddlInterest) : void {
      def.onEnter(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_refreshVariables_11 (def :  pcf.PolicyAddlInterestPanelSet_IMSchEquipAddlInterest) : void {
      def.refreshVariables(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_refreshVariables_13 (def :  pcf.PolicyAddlInterestPanelSet_PAVhcleAddlInterest) : void {
      def.refreshVariables(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_refreshVariables_15 (def :  pcf.PolicyAddlInterestPanelSet_default) : void {
      def.refreshVariables(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_refreshVariables_5 (def :  pcf.PolicyAddlInterestPanelSet_BAVhcleAddlInterest) : void {
      def.refreshVariables(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_refreshVariables_7 (def :  pcf.PolicyAddlInterestPanelSet_BOPBldgAddlInterest) : void {
      def.refreshVariables(policyAddlInterest)
    }
    
    // 'def' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function def_refreshVariables_9 (def :  pcf.PolicyAddlInterestPanelSet_CPBldgAddlInterest) : void {
      def.refreshVariables(policyAddlInterest)
    }
    
    // 'mode' attribute on PanelRef at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 29, column 46
    function mode_16 () : java.lang.Object {
      return addlInterestType.RelativeName
    }
    
    // 'title' attribute on TitleBar (id=AdditionalInterestTitle) at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 32, column 58
    function title_3 () : java.lang.String {
      return addlInterestType.TypeInfo.DisplayName
    }
    
    property get addlInterestType () : Type {
      return getIteratedValue(1) as Type
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 14, column 41
    function initialValue_0 () : entity.PolicyAddlInterest {
      return policyContactRole as PolicyAddlInterest
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 18, column 22
    function initialValue_1 () : Type[] {
      return policyAddlInterest.AdditionalInterestDetails.map(\ a ->typeof a ).toSet().toTypedArray()
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 26, column 24
    function sortBy_2 (addlInterestType :  Type) : java.lang.Object {
      return addlInterestType.RelativeName
    }
    
    // 'value' attribute on PanelIterator at PolicyContactRolePanelSet.PolicyAddlInterest.pcf: line 23, column 26
    function value_17 () : Type[] {
      return addlInterestTypes
    }
    
    property get addlInterestTypes () : Type[] {
      return getVariableValue("addlInterestTypes", 0) as Type[]
    }
    
    property set addlInterestTypes ($arg :  Type[]) {
      setVariableValue("addlInterestTypes", 0, $arg)
    }
    
    property get policyAddlInterest () : entity.PolicyAddlInterest {
      return getVariableValue("policyAddlInterest", 0) as entity.PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  entity.PolicyAddlInterest) {
      setVariableValue("policyAddlInterest", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    
  }
  
  
}