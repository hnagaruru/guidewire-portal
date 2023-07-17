package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingPolicyPeriodSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingPolicyPeriodSummaryPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingPolicyPeriodSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingPolicyPeriodSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=policyNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 21, column 76
    function action_0 () : void {
      JobForward.go(impactPeriod.OriginalPeriod.Job)
    }
    
    // 'action' attribute on TextInput (id=baselinePeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 51, column 64
    function action_16 () : void {
      JobForward.go(impactPeriod.BaselinePeriod.Job, impactPeriod.BaselinePeriod)
    }
    
    // 'action' attribute on TextInput (id=testPeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 58, column 60
    function action_21 () : void {
      JobForward.go(impactPeriod.TestPeriod.Job, impactPeriod.TestPeriod)
    }
    
    // 'action' attribute on TextInput (id=policyNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 21, column 76
    function action_dest_1 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(impactPeriod.OriginalPeriod.Job)
    }
    
    // 'action' attribute on TextInput (id=baselinePeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 51, column 64
    function action_dest_17 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(impactPeriod.BaselinePeriod.Job, impactPeriod.BaselinePeriod)
    }
    
    // 'action' attribute on TextInput (id=testPeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 58, column 60
    function action_dest_22 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(impactPeriod.TestPeriod.Job, impactPeriod.TestPeriod)
    }
    
    // 'value' attribute on TextInput (id=producer_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 39, column 46
    function valueRoot_14 () : java.lang.Object {
      return impactPeriod.OriginalPeriod.Policy
    }
    
    // 'value' attribute on TextInput (id=baselinePeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 51, column 64
    function valueRoot_19 () : java.lang.Object {
      return impactPeriod.BaselinePeriod.Job
    }
    
    // 'value' attribute on TextInput (id=testPeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 58, column 60
    function valueRoot_24 () : java.lang.Object {
      return impactPeriod.TestPeriod.Job
    }
    
    // 'value' attribute on TextInput (id=policyNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 21, column 76
    function valueRoot_3 () : java.lang.Object {
      return impactPeriod.OriginalPeriod
    }
    
    // 'value' attribute on TextInput (id=accountNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 30, column 49
    function valueRoot_9 () : java.lang.Object {
      return impactPeriod
    }
    
    // 'value' attribute on TextInput (id=product_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 34, column 127
    function value_11 () : java.lang.String {
      return gw.rating.rtm.util.ProductModelUtils.lineStyleProductDisplay(impactPeriod.OriginalPeriod.Policy.Product)
    }
    
    // 'value' attribute on TextInput (id=producer_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 39, column 46
    function value_13 () : entity.ProducerCode {
      return impactPeriod.OriginalPeriod.Policy.ProducerCodeOfService
    }
    
    // 'value' attribute on TextInput (id=baselinePeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 51, column 64
    function value_18 () : java.lang.String {
      return impactPeriod.BaselinePeriod.Job.JobNumber
    }
    
    // 'value' attribute on TextInput (id=policyNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 21, column 76
    function value_2 () : java.lang.String {
      return impactPeriod.OriginalPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextInput (id=testPeriod_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 58, column 60
    function value_23 () : java.lang.String {
      return impactPeriod.TestPeriod.Job.JobNumber
    }
    
    // 'value' attribute on TextInput (id=testPrepProgress_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 69, column 59
    function value_26 () : typekey.ImpactTestingJobProgress {
      return impactPeriod.TestPrepProgress
    }
    
    // 'value' attribute on TextInput (id=testPrepResult_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 74, column 58
    function value_29 () : typekey.ImpactTestingPrepResult {
      return impactPeriod.TestPrepResult
    }
    
    // 'value' attribute on TextInput (id=testPrepErrorMessage_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 78, column 56
    function value_32 () : java.lang.String {
      return impactPeriod.TestPrepErrorMessage
    }
    
    // 'value' attribute on TextInput (id=testRunProgress_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 88, column 59
    function value_35 () : typekey.ImpactTestingJobProgress {
      return impactPeriod.TestRunProgress
    }
    
    // 'value' attribute on TextInput (id=testRunResult_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 93, column 57
    function value_38 () : typekey.ImpactTestingRunResult {
      return impactPeriod.TestRunResult
    }
    
    // 'value' attribute on TextInput (id=testRunErrorMessage_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 97, column 55
    function value_41 () : java.lang.String {
      return impactPeriod.TestRunErrorMessage
    }
    
    // 'value' attribute on TextInput (id=termNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 26, column 44
    function value_5 () : java.lang.Integer {
      return impactPeriod.OriginalPeriod.TermNumber
    }
    
    // 'value' attribute on TextInput (id=accountNumber_Input) at ImpactTestingPolicyPeriodSummaryPanelSet.pcf: line 30, column 49
    function value_8 () : java.lang.String {
      return impactPeriod.AccountNumber
    }
    
    property get impactPeriod () : ImpactTestingPolicyPeriod {
      return getRequireValue("impactPeriod", 0) as ImpactTestingPolicyPeriod
    }
    
    property set impactPeriod ($arg :  ImpactTestingPolicyPeriod) {
      setRequireValue("impactPeriod", 0, $arg)
    }
    
    
  }
  
  
}