package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_ReviewSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IssuanceWizard_ReviewSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_ReviewSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IssuanceWizard_ReviewSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at IssuanceWizard_ReviewSummaryDV.pcf: line 21, column 29
    function def_onEnter_3 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.onEnter(policyPeriod, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at IssuanceWizard_ReviewSummaryDV.pcf: line 21, column 29
    function def_refreshVariables_4 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.refreshVariables(policyPeriod, true)
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 18, column 63
    function valueRoot_1 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 29, column 50
    function valueRoot_6 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 34, column 43
    function valueRoot_9 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 18, column 63
    function value_0 () : java.lang.String {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 39, column 41
    function value_11 () : java.util.Date {
      return policyPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 29, column 50
    function value_5 () : gw.api.productmodel.Product {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at IssuanceWizard_ReviewSummaryDV.pcf: line 34, column 43
    function value_8 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    property get issuance () : Issuance {
      return getRequireValue("issuance", 0) as Issuance
    }
    
    property set issuance ($arg :  Issuance) {
      setRequireValue("issuance", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}