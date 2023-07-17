package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingQuoteTestPeriodsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingQuoteTestPeriodsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingQuoteTestPeriodsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingQuoteTestPeriodsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=QuoteTestPeriodsButton_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 76, column 45
    function action_19 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestRunBatchProcess(testCase); waiting = true; complete = false
    }
    
    // 'action' attribute on ButtonInput (id=ContinueQuoteTestPeriodsButton_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 88, column 46
    function action_22 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestRunBatchProcess(testCase, true); waiting = true; complete = false
    }
    
    // 'action' attribute on ButtonInput (id=CancelBatchJob_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 96, column 30
    function action_25 () : void {
      gw.rating.impact.ImpactBatchUtil.cancelTestRunBatchProcess(); waiting = false;complete = false; inprogress = true
    }
    
    // 'action' attribute on ButtonInput (id=RequoteTestPeriodsButton_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 112, column 31
    function action_33 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestRunBatchProcess(testCase); waiting = true;complete = false; 
    }
    
    // 'action' attribute on ToolbarButton (id=BackButton) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 31, column 104
    function action_5 () : void {
      (CurrentLocation as pcf.api.Wizard).previous()
    }
    
    // 'action' attribute on ToolbarButton (id=NextButton) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 36, column 29
    function action_7 () : void {
      (CurrentLocation as pcf.api.Wizard).next()
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingQuoteTestPeriodsScreen.pcf: line 13, column 65
    function initialValue_0 () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return new gw.pcf.rating.impact.ImpactTestingPrepareUIHelper(testCase)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingQuoteTestPeriodsScreen.pcf: line 17, column 23
    function initialValue_1 () : boolean {
      return gw.rating.impact.ImpactBatchUtil.isTestRunJobBeingProcessed()
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingQuoteTestPeriodsScreen.pcf: line 21, column 23
    function initialValue_2 () : boolean {
      return testCase.TestRunProcessedCount < testCase.Periods.Count and testCase.TestRunProcessedCount > 0
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingQuoteTestPeriodsScreen.pcf: line 25, column 23
    function initialValue_3 () : boolean {
      return testCase.TestRunUnprocessedCount == 0 and !waiting
    }
    
    // 'label' attribute on Label at ImpactTestingQuoteTestPeriodsScreen.pcf: line 48, column 97
    function label_9 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.QuoteTestPeriodsLabel")  
    }
    
    // 'percentage' attribute on ProgressInput (id=TestQuoteProgressBar_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 68, column 30
    function percentage_15 () : java.lang.Double {
      return getPercentageAndUpdateWaitFlag()
    }
    
    // 'status' attribute on ProgressInput (id=TestQuoteProgressBar_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 68, column 30
    function status_16 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.Prepare.ProgressBarStatus", testCase.TestRunProcessedCount, testCase.Periods.Count, testCase.TestRunErrorCount)
    }
    
    // 'value' attribute on TextInput (id=ProgressStatusMessage_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 102, column 62
    function value_28 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.QuoteTestCase.TestQuoteComplete", testCase.TestRunProcessedCount, testCase.Periods.Count, testCase.TestRunErrorCount)
    }
    
    // 'visible' attribute on DetailViewPanel at ImpactTestingQuoteTestPeriodsScreen.pcf: line 45, column 58
    function visible_10 () : java.lang.Boolean {
      return !waiting and !testCase.IsTestRunComplete
    }
    
    // 'visible' attribute on TextInput (id=TestQuotesBeingCreatedLabel_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 60, column 30
    function visible_11 () : java.lang.Boolean {
      return waiting
    }
    
    // 'visible' attribute on ButtonInput (id=QuoteTestPeriodsButton_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 76, column 45
    function visible_18 () : java.lang.Boolean {
      return !waiting and !complete
    }
    
    // 'visible' attribute on ButtonInput (id=ContinueQuoteTestPeriodsButton_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 88, column 46
    function visible_21 () : java.lang.Boolean {
      return inprogress and !waiting
    }
    
    // 'visible' attribute on TextInput (id=ProgressStatusMessage_Input) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 102, column 62
    function visible_27 () : java.lang.Boolean {
      return !waiting and testCase.IsTestRunComplete
    }
    
    // 'visible' attribute on ToolbarButton (id=BackButton) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 31, column 104
    function visible_4 () : java.lang.Boolean {
      return (CurrentLocation as pcf.api.Wizard).CurrentStepId != "ChoosePoliciesStep"
    }
    
    // 'visible' attribute on ToolbarButton (id=NextButton) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 36, column 29
    function visible_6 () : java.lang.Boolean {
      return complete
    }
    
    // 'visible' attribute on AlertBar (id=ExportJobRunningMessage) at ImpactTestingQuoteTestPeriodsScreen.pcf: line 43, column 114
    function visible_8 () : java.lang.Boolean {
      return gw.rating.impact.ImpactBatchUtil.jobBeingProcessed() == BatchProcessType.TC_IMPACTTESTINGEXPORT
    }
    
    property get complete () : boolean {
      return getVariableValue("complete", 0) as java.lang.Boolean
    }
    
    property set complete ($arg :  boolean) {
      setVariableValue("complete", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.impact.ImpactTestingPrepareUIHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.impact.ImpactTestingPrepareUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get inprogress () : boolean {
      return getVariableValue("inprogress", 0) as java.lang.Boolean
    }
    
    property set inprogress ($arg :  boolean) {
      setVariableValue("inprogress", 0, $arg)
    }
    
    property get testCase () : ImpactTestingTestCase {
      return getRequireValue("testCase", 0) as ImpactTestingTestCase
    }
    
    property set testCase ($arg :  ImpactTestingTestCase) {
      setRequireValue("testCase", 0, $arg)
    }
    
    property get waiting () : boolean {
      return getVariableValue("waiting", 0) as java.lang.Boolean
    }
    
    property set waiting ($arg :  boolean) {
      setVariableValue("waiting", 0, $arg)
    }
    
    function getPercentageAndUpdateWaitFlag() : int{
    
      var percentage = testCase.TestRunPercentComplete
      if (percentage == 100) {
        waiting = false
    	  inprogress = false
        complete = true
      } else {
        waiting = gw.rating.impact.ImpactBatchUtil.isTestRunJobBeingProcessed()
      }
      return percentage
    }
    
    
  }
  
  
}