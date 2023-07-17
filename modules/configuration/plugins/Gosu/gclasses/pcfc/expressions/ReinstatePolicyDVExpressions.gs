package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatePolicyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinstatePolicyDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatePolicyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinstatePolicyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ReinstatePolicyDV.pcf: line 18, column 38
    function def_onEnter_1 (def :  pcf.PolicyInfoInputSet) : void {
      def.onEnter(policyPeriod, true, false, false)
    }
    
    // 'def' attribute on InputSetRef at ReinstatePolicyDV.pcf: line 18, column 38
    function def_refreshVariables_2 (def :  pcf.PolicyInfoInputSet) : void {
      def.refreshVariables(policyPeriod, true, false, false)
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonDescription_Input) at ReinstatePolicyDV.pcf: line 41, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      reinstatement.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonCode_Input) at ReinstatePolicyDV.pcf: line 35, column 44
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      reinstatement.ReinstateCode = (__VALUE_TO_SET as typekey.ReinstateCode)
    }
    
    // 'initialValue' attribute on Variable at ReinstatePolicyDV.pcf: line 13, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return reinstatement.PolicyPeriod
    }
    
    // 'value' attribute on DateInput (id=ReinstatementDate_Input) at ReinstatePolicyDV.pcf: line 26, column 48
    function valueRoot_4 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonCode_Input) at ReinstatePolicyDV.pcf: line 35, column 44
    function valueRoot_8 () : java.lang.Object {
      return reinstatement
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonDescription_Input) at ReinstatePolicyDV.pcf: line 41, column 44
    function value_10 () : java.lang.String {
      return reinstatement.Description
    }
    
    // 'value' attribute on DateInput (id=ReinstatementDate_Input) at ReinstatePolicyDV.pcf: line 26, column 48
    function value_3 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonCode_Input) at ReinstatePolicyDV.pcf: line 35, column 44
    function value_6 () : typekey.ReinstateCode {
      return reinstatement.ReinstateCode
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get reinstatement () : Reinstatement {
      return getRequireValue("reinstatement", 0) as Reinstatement
    }
    
    property set reinstatement ($arg :  Reinstatement) {
      setRequireValue("reinstatement", 0, $arg)
    }
    
    
  }
  
  
}