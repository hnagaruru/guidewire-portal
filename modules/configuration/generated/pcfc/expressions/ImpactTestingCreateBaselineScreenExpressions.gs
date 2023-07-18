package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingCreateBaselineScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingCreateBaselineScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingCreateBaselineScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingCreateBaselineScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=CreateBaselineButton_Input) at ImpactTestingCreateBaselineScreen.pcf: line 76, column 46
    function action_17 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestPrepBatchProcess(testCase); waiting = true; completed = false; 
    }
    
    // 'action' attribute on ButtonInput (id=ContinueCreateBaselineButton_Input) at ImpactTestingCreateBaselineScreen.pcf: line 94, column 47
    function action_24 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestPrepBatchProcess(testCase, false, true); waiting = true; completed = false; 
    }
    
    // 'action' attribute on ButtonInput (id=CancelBatchJobButton_Input) at ImpactTestingCreateBaselineScreen.pcf: line 102, column 30
    function action_27 () : void {
      gw.rating.impact.ImpactBatchUtil.cancelTestPrepBatchProcess(); waiting = false; completed = false; inProgress = true
    }
    
    // 'action' attribute on ToolbarButton (id=tbReprocessErrors) at ImpactTestingCreateBaselineScreen.pcf: line 143, column 92
    function action_41 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestPrepBatchProcess(testCase, true); waiting = true; completed = false;
    }
    
    // 'action' attribute on ToolbarButton (id=tbRecreateBaseline) at ImpactTestingCreateBaselineScreen.pcf: line 148, column 94
    function action_42 () : void {
      gw.rating.impact.ImpactBatchUtil.startTestPrepBatchProcess(testCase); waiting = true; completed = false;
    }
    
    // 'action' attribute on ToolbarButton (id=BackButton) at ImpactTestingCreateBaselineScreen.pcf: line 35, column 104
    function action_6 () : void {
      (CurrentLocation as pcf.api.Wizard).previous()
    }
    
    // 'action' attribute on ToolbarButton (id=CompleteButton) at ImpactTestingCreateBaselineScreen.pcf: line 40, column 30
    function action_8 () : void {
      (CurrentLocation as pcf.api.Wizard).next()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ImpactTestingCreateBaselineScreen.pcf: line 127, column 35
    function filter_35 () : gw.api.filters.IFilter {
      return filter.AllFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ImpactTestingCreateBaselineScreen.pcf: line 131, column 59
    function filter_36 () : gw.api.filters.IFilter {
      return filter.SuccessFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ImpactTestingCreateBaselineScreen.pcf: line 135, column 59
    function filter_38 () : gw.api.filters.IFilter {
      return filter.FailureFilter
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingCreateBaselineScreen.pcf: line 13, column 65
    function initialValue_0 () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return new gw.pcf.rating.impact.ImpactTestingPrepareUIHelper(testCase)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingCreateBaselineScreen.pcf: line 17, column 56
    function initialValue_1 () : gw.rating.impact.ImpactTestPrepFilterSet {
      return new gw.rating.impact.ImpactTestPrepFilterSet()
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingCreateBaselineScreen.pcf: line 21, column 23
    function initialValue_2 () : boolean {
      return testCase.TestPrepProcessedCount < testCase.Periods.Count and testCase.TestPrepProcessedCount > 0
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingCreateBaselineScreen.pcf: line 25, column 23
    function initialValue_3 () : boolean {
      return gw.rating.impact.ImpactBatchUtil.isTestPrepJobBeingProcessed()
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingCreateBaselineScreen.pcf: line 29, column 23
    function initialValue_4 () : boolean {
      return testCase.TestPrepUnprocessedCount==0 and !waiting
    }
    
    // 'label' attribute on Label at ImpactTestingCreateBaselineScreen.pcf: line 46, column 46
    function label_10 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.CreateBaselineLabel")  
    }
    
    // 'percentage' attribute on ProgressInput (id=BaselinesProgressBar_Input) at ImpactTestingCreateBaselineScreen.pcf: line 82, column 30
    function percentage_20 () : java.lang.Double {
      return getPercentageAndUpdateWaitFlag()
    }
    
    // 'value' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 180, column 29
    function sortValue_43 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodTermCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 186, column 29
    function sortValue_44 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.TermNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProductCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 192, column 29
    function sortValue_45 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.lineStyleProductDisplay(period.OriginalPeriod.Policy.Product)
    }
    
    // 'sortBy' attribute on TextCell (id=originalPeriodProducerCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 199, column 48
    function sortValue_46 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.Policy.ProducerCodeOfService.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=originalPeriodJurisdictionCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 206, column 29
    function sortValue_47 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.BaseState
    }
    
    // 'value' attribute on DateCell (id=originalPeriodEffectiveCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 212, column 29
    function sortValue_48 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=originalPeriodExpirationCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 218, column 29
    function sortValue_49 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 226, column 29
    function sortValue_50 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.BaselinePeriod?.Job.JobNumber
    }
    
    // 'status' attribute on ProgressInput (id=BaselinesProgressBar_Input) at ImpactTestingCreateBaselineScreen.pcf: line 82, column 30
    function status_21 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.Prepare.ProgressBarStatus", testCase.TestPrepProcessedCount, testCase.Periods.Count, testCase.TestPrepErrorCount)
    }
    
    // 'value' attribute on TextInput (id=CompletetedMessage_Input) at ImpactTestingCreateBaselineScreen.pcf: line 108, column 32
    function value_30 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.Prepare.CompletedLabel", testCase.TestPrepProcessedCount, testCase.Periods.Count, testCase.TestPrepErrorCount)
    }
    
    // 'value' attribute on RowIterator (id=periodList) at ImpactTestingCreateBaselineScreen.pcf: line 159, column 58
    function value_84 () : entity.ImpactTestingPolicyPeriod[] {
      return testCase.Periods
    }
    
    // 'visible' attribute on Label at ImpactTestingCreateBaselineScreen.pcf: line 53, column 46
    function visible_11 () : java.lang.Boolean {
      return inProgress and !waiting
    }
    
    // 'visible' attribute on TextInput (id=BaselinesConfirmationMessage_Input) at ImpactTestingCreateBaselineScreen.pcf: line 66, column 30
    function visible_13 () : java.lang.Boolean {
      return waiting
    }
    
    // 'visible' attribute on ButtonInput (id=ContinueCreateBaselineButton_Input) at ImpactTestingCreateBaselineScreen.pcf: line 94, column 47
    function visible_23 () : java.lang.Boolean {
      return inProgress and !waiting 
    }
    
    // 'visible' attribute on ToolbarFilterOption at ImpactTestingCreateBaselineScreen.pcf: line 131, column 59
    function visible_37 () : java.lang.Boolean {
      return testCase.TestPrepErrorCount > 0
    }
    
    // 'visible' attribute on ToolbarButton (id=BackButton) at ImpactTestingCreateBaselineScreen.pcf: line 35, column 104
    function visible_5 () : java.lang.Boolean {
      return (CurrentLocation as pcf.api.Wizard).CurrentStepId != "ChoosePoliciesStep"
    }
    
    // 'visible' attribute on ToolbarButton (id=CompleteButton) at ImpactTestingCreateBaselineScreen.pcf: line 40, column 30
    function visible_7 () : java.lang.Boolean {
      return completed
    }
    
    // 'visible' attribute on Label at ImpactTestingCreateBaselineScreen.pcf: line 46, column 46
    function visible_9 () : java.lang.Boolean {
      return !waiting and !completed
    }
    
    property get completed () : boolean {
      return getVariableValue("completed", 0) as java.lang.Boolean
    }
    
    property set completed ($arg :  boolean) {
      setVariableValue("completed", 0, $arg)
    }
    
    property get filter () : gw.rating.impact.ImpactTestPrepFilterSet {
      return getVariableValue("filter", 0) as gw.rating.impact.ImpactTestPrepFilterSet
    }
    
    property set filter ($arg :  gw.rating.impact.ImpactTestPrepFilterSet) {
      setVariableValue("filter", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.impact.ImpactTestingPrepareUIHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.impact.ImpactTestingPrepareUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get inProgress () : boolean {
      return getVariableValue("inProgress", 0) as java.lang.Boolean
    }
    
    property set inProgress ($arg :  boolean) {
      setVariableValue("inProgress", 0, $arg)
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
      
      var percentage = testCase.TestPrepPercentComplete
      if (percentage == 100) {
        // Reload the test case here coz Impact Testing is asynchronous, it will cause CDCE
        testCase = gw.api.database.Query.make(ImpactTestingTestCase).compare(ImpactTestingTestCase#ID, Equals, testCase.ID).select().single()
        waiting = false
        completed = true
        inProgress = false
      } else {
        // must check this so that we detect the case where the batch job is no longer processing.
        waiting = gw.rating.impact.ImpactBatchUtil.isTestPrepJobBeingProcessed()
      }
        
      return percentage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingCreateBaselineScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ImpactTestingCreateBaselineScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 226, column 29
    function actionAvailable_80 () : java.lang.Boolean {
      return period.TestPrepResult == ImpactTestingPrepResult.TC_SUCCESS
    }
    
    // 'action' attribute on BooleanRadioCell (id=baselineIconCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 171, column 36
    function action_51 () : void {
      ImpactTestingPolicyPeriodPopup.push(period)
    }
    
    // 'action' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 180, column 29
    function action_56 () : void {
      JobForward.go(period.OriginalPeriod.Job)
    }
    
    // 'action' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 226, column 29
    function action_78 () : void {
      ImpactTestingPolicyPeriodOverviewPopup.push(period, period.BaselinePeriod)
    }
    
    // 'action' attribute on BooleanRadioCell (id=baselineIconCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 171, column 36
    function action_dest_52 () : pcf.api.Destination {
      return pcf.ImpactTestingPolicyPeriodPopup.createDestination(period)
    }
    
    // 'action' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 180, column 29
    function action_dest_57 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(period.OriginalPeriod.Job)
    }
    
    // 'action' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 226, column 29
    function action_dest_79 () : pcf.api.Destination {
      return pcf.ImpactTestingPolicyPeriodOverviewPopup.createDestination(period, period.BaselinePeriod)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=baselineIconCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 171, column 36
    function iconColor_55 () : gw.api.web.color.GWColor {
      return period.TestPrepResult == ImpactTestingPrepResult.TC_SUCCESS ? gw.api.web.color.GWColor.THEME_ALERT_SUCCESS : gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=baselineIconCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 171, column 36
    function iconLabel_53 () : java.lang.String {
      return period.TestPrepErrorMessage != null ? DisplayKey.get("Web.Rating.ImpactTesting.Prepare.ErrorHoverText", period.TestPrepResult.DisplayName) : ""
    }
    
    // 'icon' attribute on BooleanRadioCell (id=baselineIconCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 171, column 36
    function icon_54 () : java.lang.String {
      return period.TestPrepResult == ImpactTestingPrepResult.TC_SUCCESS ? "circle_checkmark" : "circle_x"
    }
    
    // 'value' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 180, column 29
    function valueRoot_59 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TextCell (id=originalPeriodTermCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 186, column 29
    function valueRoot_62 () : java.lang.Object {
      return period.OriginalPeriod
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProducerCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 199, column 48
    function valueRoot_67 () : java.lang.Object {
      return period.OriginalPeriod.Policy
    }
    
    // 'value' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 226, column 29
    function valueRoot_82 () : java.lang.Object {
      return period.BaselinePeriod?.Job
    }
    
    // 'value' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 180, column 29
    function value_58 () : java.lang.String {
      return period.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodTermCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 186, column 29
    function value_61 () : java.lang.Integer {
      return period.OriginalPeriod.TermNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProductCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 192, column 29
    function value_64 () : java.lang.String {
      return gw.rating.rtm.util.ProductModelUtils.lineStyleProductDisplay(period.OriginalPeriod.Policy.Product)
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProducerCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 199, column 48
    function value_66 () : entity.ProducerCode {
      return period.OriginalPeriod.Policy.ProducerCodeOfService
    }
    
    // 'value' attribute on TypeKeyCell (id=originalPeriodJurisdictionCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 206, column 29
    function value_69 () : typekey.Jurisdiction {
      return period.OriginalPeriod.BaseState
    }
    
    // 'value' attribute on DateCell (id=originalPeriodEffectiveCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 212, column 29
    function value_72 () : java.util.Date {
      return period.OriginalPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=originalPeriodExpirationCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 218, column 29
    function value_75 () : java.util.Date {
      return period.OriginalPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingCreateBaselineScreen.pcf: line 226, column 29
    function value_81 () : java.lang.String {
      return period.BaselinePeriod?.Job.JobNumber
    }
    
    property get period () : entity.ImpactTestingPolicyPeriod {
      return getIteratedValue(1) as entity.ImpactTestingPolicyPeriod
    }
    
    
  }
  
  
}