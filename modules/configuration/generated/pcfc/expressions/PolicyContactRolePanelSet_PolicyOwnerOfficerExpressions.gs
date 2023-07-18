package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyOwnerOfficerExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=Include_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 28, column 43
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.Included = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on TextInput (id=Ownership_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 55, column 44
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.OwnershipPct = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 61, column 47
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.RelationshipTitle = (__VALUE_TO_SET as typekey.Relationship)
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 39, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'editable' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function editable_12 () : java.lang.Boolean {
      return (policyOwnerOfficer.Included == Inclusion.TC_INCL) and (policyOwnerOfficer.State != null) and policyOwnerOfficer.Branch.WorkersCompLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State)).Count > 0
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 14, column 41
    function initialValue_0 () : entity.PolicyOwnerOfficer {
      return policyContactRole as PolicyOwnerOfficer
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function valueRange_16 () : java.lang.Object {
      return policyOwnerOfficer.Branch.WorkersCompLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State))
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 39, column 46
    function valueRange_8 () : java.lang.Object {
      return policyOwnerOfficer.Branch.WorkersCompLine.Jurisdictions.map(\j -> j.State)
    }
    
    // 'value' attribute on TypeKeyInput (id=Include_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 28, column 43
    function valueRoot_3 () : java.lang.Object {
      return policyOwnerOfficer
    }
    
    // 'value' attribute on TypeKeyInput (id=Include_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 28, column 43
    function value_1 () : typekey.Inclusion {
      return policyOwnerOfficer.Included
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function value_13 () : entity.WCClassCode {
      return policyOwnerOfficer.ClassCode
    }
    
    // 'value' attribute on TextInput (id=Ownership_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 55, column 44
    function value_21 () : java.lang.Integer {
      return policyOwnerOfficer.OwnershipPct
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 61, column 47
    function value_25 () : typekey.Relationship {
      return policyOwnerOfficer.RelationshipTitle
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 39, column 46
    function value_5 () : typekey.Jurisdiction {
      return policyOwnerOfficer.State
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.WCClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.WCClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 39, column 46
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 39, column 46
    function verifyValueRangeIsAllowedType_9 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 39, column 46
    function verifyValueRange_10 () : void {
      var __valueRangeArg = policyOwnerOfficer.Branch.WorkersCompLine.Jurisdictions.map(\j -> j.State)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at PolicyContactRolePanelSet.PolicyOwnerOfficer.pcf: line 49, column 45
    function verifyValueRange_18 () : void {
      var __valueRangeArg = policyOwnerOfficer.Branch.WorkersCompLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyOwnerOfficer () : entity.PolicyOwnerOfficer {
      return getVariableValue("policyOwnerOfficer", 0) as entity.PolicyOwnerOfficer
    }
    
    property set policyOwnerOfficer ($arg :  entity.PolicyOwnerOfficer) {
      setVariableValue("policyOwnerOfficer", 0, $arg)
    }
    
    
  }
  
  
}