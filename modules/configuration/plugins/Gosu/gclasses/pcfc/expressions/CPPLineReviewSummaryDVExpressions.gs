package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineReviewSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPLineReviewSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineReviewSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPLineReviewSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at CPPLineReviewSummaryDV.pcf: line 22, column 29
    function def_onEnter_4 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.onEnter(policyPeriod, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at CPPLineReviewSummaryDV.pcf: line 22, column 29
    function def_refreshVariables_5 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.refreshVariables(policyPeriod, true)
    }
    
    // 'initialValue' attribute on Variable at CPPLineReviewSummaryDV.pcf: line 13, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return policyLine.Branch
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at CPPLineReviewSummaryDV.pcf: line 36, column 50
    function valueRoot_12 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on TextInput (id=PolicyLine_Input) at CPPLineReviewSummaryDV.pcf: line 41, column 41
    function valueRoot_15 () : java.lang.Object {
      return policyLine
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at CPPLineReviewSummaryDV.pcf: line 46, column 43
    function valueRoot_18 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at CPPLineReviewSummaryDV.pcf: line 19, column 63
    function valueRoot_2 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured
    }
    
    // 'value' attribute on DateInput (id=DateQuoteNeeded_Input) at CPPLineReviewSummaryDV.pcf: line 28, column 55
    function valueRoot_8 () : java.lang.Object {
      return policyPeriod.Submission
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at CPPLineReviewSummaryDV.pcf: line 19, column 63
    function value_1 () : java.lang.String {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at CPPLineReviewSummaryDV.pcf: line 36, column 50
    function value_11 () : gw.api.productmodel.Product {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextInput (id=PolicyLine_Input) at CPPLineReviewSummaryDV.pcf: line 41, column 41
    function value_14 () : java.lang.String {
      return policyLine.DisplayName
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at CPPLineReviewSummaryDV.pcf: line 46, column 43
    function value_17 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at CPPLineReviewSummaryDV.pcf: line 51, column 41
    function value_20 () : java.util.Date {
      return policyPeriod.PeriodEnd
    }
    
    // 'value' attribute on DateInput (id=DateQuoteNeeded_Input) at CPPLineReviewSummaryDV.pcf: line 28, column 55
    function value_7 () : java.util.Date {
      return policyPeriod.Submission.DateQuoteNeeded
    }
    
    // 'visible' attribute on DateInput (id=DateQuoteNeeded_Input) at CPPLineReviewSummaryDV.pcf: line 28, column 55
    function visible_6 () : java.lang.Boolean {
      return policyPeriod.Job typeis Submission
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}