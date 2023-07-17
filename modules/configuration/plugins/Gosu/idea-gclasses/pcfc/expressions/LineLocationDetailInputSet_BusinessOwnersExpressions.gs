package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/LineLocationDetailInputSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineLocationDetailInputSet_BusinessOwnersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/LineLocationDetailInputSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineLocationDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=PrincipleOps_Input) at LineLocationDetailInputSet.BusinessOwners.pcf: line 26, column 45
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      bopLocation.PrincipalOpsDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at LineLocationDetailInputSet.BusinessOwners.pcf: line 35, column 45
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      bopLocation.Location.FireProtectClass = (__VALUE_TO_SET as typekey.FireProtectClass)
    }
    
    // 'initialValue' attribute on Variable at LineLocationDetailInputSet.BusinessOwners.pcf: line 18, column 27
    function initialValue_0 () : BOPLocation {
      return polLocation.Branch.BOPLine.getBOPLocationForPolicyLocation(polLocation)
    }
    
    // 'value' attribute on TextAreaInput (id=PrincipleOps_Input) at LineLocationDetailInputSet.BusinessOwners.pcf: line 26, column 45
    function valueRoot_3 () : java.lang.Object {
      return bopLocation
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at LineLocationDetailInputSet.BusinessOwners.pcf: line 35, column 45
    function valueRoot_7 () : java.lang.Object {
      return bopLocation.Location
    }
    
    // 'value' attribute on TextAreaInput (id=PrincipleOps_Input) at LineLocationDetailInputSet.BusinessOwners.pcf: line 26, column 45
    function value_1 () : java.lang.String {
      return bopLocation.PrincipalOpsDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at LineLocationDetailInputSet.BusinessOwners.pcf: line 35, column 45
    function value_5 () : typekey.FireProtectClass {
      return bopLocation.Location.FireProtectClass
    }
    
    property get bopLocation () : BOPLocation {
      return getVariableValue("bopLocation", 0) as BOPLocation
    }
    
    property set bopLocation ($arg :  BOPLocation) {
      setVariableValue("bopLocation", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
    }
    
    
  }
  
  
}