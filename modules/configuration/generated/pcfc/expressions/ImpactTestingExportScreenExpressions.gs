package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.Query
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingExportScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingExportScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingExportScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingExportScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=ExportButton_Input) at ImpactTestingExportScreen.pcf: line 232, column 48
    function action_51 () : void {
      helper.exportPeriodsToExcel()
    }
    
    // 'action' attribute on ButtonInput (id=DownloadResultButton_Input) at ImpactTestingExportScreen.pcf: line 245, column 37
    function action_57 () : void {
      helper.downloadExportFile()
    }
    
    // 'action' attribute on ButtonInput (id=CancelJob_Input) at ImpactTestingExportScreen.pcf: line 252, column 60
    function action_60 () : void {
      helper.cancelCreateExportFileJob(); getResultStatus()
    }
    
    // 'action' attribute on ToolbarButton (id=BackButton) at ImpactTestingExportScreen.pcf: line 46, column 83
    function action_8 () : void {
      (CurrentLocation as pcf.api.Wizard).previous()
    }
    
    // 'cacheKey' attribute on ToolbarFilter (id=tbFilter_Input) at ImpactTestingExportScreen.pcf: line 271, column 28
    function cacheKey_72 () : java.lang.String {
      return testCase?.UpdateTime.Time as String
    }
    
    // 'categoryLabel' attribute on DataSeries at ImpactTestingExportScreen.pcf: line 80, column 43
    function categoryLabel_10 (value :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.String {
      return value.ShortLabel
    }
    
    // 'dataValues' attribute on DataSeries at ImpactTestingExportScreen.pcf: line 80, column 43
    function dataValues_11 () : java.lang.Object {
      return impactTestingResultBuckets
    }
    
    // 'dataValues' attribute on DataSeries at ImpactTestingExportScreen.pcf: line 181, column 42
    function dataValues_40 () : java.lang.Object {
      return impactTestingStatistics.Buckets
    }
    
    // 'filter' attribute on ToolbarFilterOption at ImpactTestingExportScreen.pcf: line 275, column 35
    function filter_67 () : gw.api.filters.IFilter {
      return filter.AllFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ImpactTestingExportScreen.pcf: line 279, column 34
    function filter_68 () : gw.api.filters.IFilter {
      return filter.SuccessFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ImpactTestingExportScreen.pcf: line 283, column 34
    function filter_70 () : gw.api.filters.IFilter {
      return filter.FailureFilter
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 13, column 65
    function initialValue_0 () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return new gw.pcf.rating.impact.ImpactTestingPrepareUIHelper(testCase)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 17, column 56
    function initialValue_1 () : gw.rating.impact.ImpactTestingStatistics {
      return new gw.rating.impact.RatingExportUtil().generateIAStatistics(testCase)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 21, column 70
    function initialValue_2 () : List<gw.rating.impact.ImpactTestingResultBucket> {
      return impactTestingStatistics.Buckets
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 25, column 19
    function initialValue_3 () : int {
      return impactTestingStatistics.TotalNumberDataPoints
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 29, column 23
    function initialValue_4 () : boolean {
      return getResultStatus() == 0
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 33, column 23
    function initialValue_5 () : boolean {
      return (not waiting) and getResultStatus() == 100
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 37, column 55
    function initialValue_6 () : gw.rating.impact.ImpactTestRunFilterSet {
      return new gw.rating.impact.ImpactTestRunFilterSet()
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 41, column 23
    function initialValue_7 () : boolean {
      return testCase.TestPrepErrorCount > 0 or testCase.TestRunErrorCount > 0
    }
    
    // 'label' attribute on RangeAxis at ImpactTestingExportScreen.pcf: line 175, column 200
    function label_38 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.Results.TotalAmountOfDifference", DisplayKey.get("Web.Rating.ImpactTesting.Results.CurrencyDifferentialHeader"))
    }
    
    // 'percentage' attribute on ProgressInput (id=ExportProgressBar_Input) at ImpactTestingExportScreen.pcf: line 238, column 60
    function percentage_54 () : java.lang.Double {
      return getResultStatus()
    }
    
    // 'sortBy' attribute on IteratorSort at ImpactTestingExportScreen.pcf: line 199, column 36
    function sortBy_44 (impactTestingRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return impactTestingRateBook.RateBook.BookName
    }
    
    // 'sortBy' attribute on IteratorSort at ImpactTestingExportScreen.pcf: line 202, column 36
    function sortBy_45 (impactTestingRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return impactTestingRateBook.RateBook.BookCode
    }
    
    // 'sortBy' attribute on IteratorSort at ImpactTestingExportScreen.pcf: line 205, column 36
    function sortBy_46 (impactTestingRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return impactTestingRateBook.RateBook.BookEdition
    }
    
    // 'value' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingExportScreen.pcf: line 317, column 29
    function sortValue_73 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=originalPeriodTermCol_Cell) at ImpactTestingExportScreen.pcf: line 323, column 29
    function sortValue_74 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.TermNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProductCol_Cell) at ImpactTestingExportScreen.pcf: line 328, column 123
    function sortValue_75 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.lineStyleProductDisplay(period.OriginalPeriod.Policy.Product)
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProducerCol_Cell) at ImpactTestingExportScreen.pcf: line 335, column 29
    function sortValue_76 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.Policy.ProducerCodeOfService
    }
    
    // 'value' attribute on TypeKeyCell (id=originalPeriodJurisdictionCol_Cell) at ImpactTestingExportScreen.pcf: line 342, column 29
    function sortValue_77 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.BaseState
    }
    
    // 'value' attribute on DateCell (id=originalPeriodEffectiveCol_Cell) at ImpactTestingExportScreen.pcf: line 348, column 29
    function sortValue_78 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=originalPeriodExpirationCol_Cell) at ImpactTestingExportScreen.pcf: line 354, column 29
    function sortValue_79 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.OriginalPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 362, column 29
    function sortValue_80 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.BaselinePeriod?.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=testPeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 370, column 29
    function sortValue_81 (period :  entity.ImpactTestingPolicyPeriod) : java.lang.Object {
      return period.TestPeriod?.Job.JobNumber
    }
    
    // 'value' attribute on DateInput (id=ExportFileDateTimeStamp_Input) at ImpactTestingExportScreen.pcf: line 259, column 37
    function valueRoot_64 () : java.lang.Object {
      return testCase.Result
    }
    
    // 'value' attribute on DataSeries at ImpactTestingExportScreen.pcf: line 80, column 43
    function value_12 (value :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.Object {
      return value.Data.Count
    }
    
    // 'value' attribute on RowIterator (id=periodList) at ImpactTestingExportScreen.pcf: line 296, column 58
    function value_121 () : entity.ImpactTestingPolicyPeriod[] {
      return testCase.Periods
    }
    
    // 'value' attribute on DataSeries at ImpactTestingExportScreen.pcf: line 181, column 42
    function value_42 (value :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.Object {
      return value.DiffTotal
    }
    
    // 'value' attribute on RowIterator (id=SelectedRateBookRowIterator) at ImpactTestingExportScreen.pcf: line 196, column 88
    function value_49 () : gw.util.IOrderedList<entity.ImpactTestingRateBook> {
      return helper.SelectedRateBooks.orderBy(\ i -> i.RateBook.UpdateTime)
    }
    
    // 'value' attribute on DateInput (id=ExportFileDateTimeStamp_Input) at ImpactTestingExportScreen.pcf: line 259, column 37
    function value_63 () : java.util.Date {
      return testCase.Result.UpdateTime
    }
    
    // 'visible' attribute on PanelColumn at ImpactTestingExportScreen.pcf: line 62, column 54
    function visible_13 () : java.lang.Boolean {
      return numberOfValidDataPoints > 0
    }
    
    // 'visible' attribute on ButtonInput (id=ExportButton_Input) at ImpactTestingExportScreen.pcf: line 232, column 48
    function visible_50 () : java.lang.Boolean {
      return testCase.Result == null
    }
    
    // 'visible' attribute on ProgressInput (id=ExportProgressBar_Input) at ImpactTestingExportScreen.pcf: line 238, column 60
    function visible_53 () : java.lang.Boolean {
      return testCase.Result != null and waiting
    }
    
    // 'visible' attribute on ButtonInput (id=DownloadResultButton_Input) at ImpactTestingExportScreen.pcf: line 245, column 37
    function visible_56 () : java.lang.Boolean {
      return showDownload
    }
    
    // 'visible' attribute on ToolbarFilterOption at ImpactTestingExportScreen.pcf: line 279, column 34
    function visible_69 () : java.lang.Boolean {
      return hasErrors
    }
    
    // 'visible' attribute on ListViewPanel at ImpactTestingExportScreen.pcf: line 53, column 50
    function visible_9 () : java.lang.Boolean {
      return numberOfValidDataPoints == 0
    }
    
    property get filter () : gw.rating.impact.ImpactTestRunFilterSet {
      return getVariableValue("filter", 0) as gw.rating.impact.ImpactTestRunFilterSet
    }
    
    property set filter ($arg :  gw.rating.impact.ImpactTestRunFilterSet) {
      setVariableValue("filter", 0, $arg)
    }
    
    property get hasErrors () : boolean {
      return getVariableValue("hasErrors", 0) as java.lang.Boolean
    }
    
    property set hasErrors ($arg :  boolean) {
      setVariableValue("hasErrors", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.impact.ImpactTestingPrepareUIHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.impact.ImpactTestingPrepareUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get impactTestingResultBuckets () : List<gw.rating.impact.ImpactTestingResultBucket> {
      return getVariableValue("impactTestingResultBuckets", 0) as List<gw.rating.impact.ImpactTestingResultBucket>
    }
    
    property set impactTestingResultBuckets ($arg :  List<gw.rating.impact.ImpactTestingResultBucket>) {
      setVariableValue("impactTestingResultBuckets", 0, $arg)
    }
    
    property get impactTestingStatistics () : gw.rating.impact.ImpactTestingStatistics {
      return getVariableValue("impactTestingStatistics", 0) as gw.rating.impact.ImpactTestingStatistics
    }
    
    property set impactTestingStatistics ($arg :  gw.rating.impact.ImpactTestingStatistics) {
      setVariableValue("impactTestingStatistics", 0, $arg)
    }
    
    property get numberOfValidDataPoints () : int {
      return getVariableValue("numberOfValidDataPoints", 0) as java.lang.Integer
    }
    
    property set numberOfValidDataPoints ($arg :  int) {
      setVariableValue("numberOfValidDataPoints", 0, $arg)
    }
    
    property get showDownload () : boolean {
      return getVariableValue("showDownload", 0) as java.lang.Boolean
    }
    
    property set showDownload ($arg :  boolean) {
      setVariableValue("showDownload", 0, $arg)
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
    
    
    function getResultStatus() : int {
      var localTestCase = Query.make(ImpactTestingTestCase).select().first()
    
      if (localTestCase.Result.Complete) {
        showDownload = true
        waiting = false
        return 100
      } else {
        print("getResultStatus:  " + localTestCase.Result.CompletionPercentage + "%")
        return localTestCase.Result.CompletionPercentage
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingExportScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ImpactTestingExportScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=SelectedRateBook_Cell) at ImpactTestingExportScreen.pcf: line 211, column 37
    function value_47 () : java.lang.String {
      return DisplayKey.get("Web.Rating.ImpactTesting.Prepare.SelectedRateBookLabel", impactTestingRateBook.RateBook.BookName,impactTestingRateBook.RateBook.BookEdition)
    }
    
    property get impactTestingRateBook () : entity.ImpactTestingRateBook {
      return getIteratedValue(1) as entity.ImpactTestingRateBook
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingExportScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ImpactTestingExportScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 362, column 29
    function actionAvailable_111 () : java.lang.Boolean {
      return period.TestPrepResult == ImpactTestingPrepResult.TC_SUCCESS
    }
    
    // 'actionAvailable' attribute on TextCell (id=testPeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 370, column 29
    function actionAvailable_117 () : java.lang.Boolean {
      return period.TestRunResult == TC_SUCCESS
    }
    
    // 'action' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 362, column 29
    function action_109 () : void {
      ImpactTestingPolicyPeriodOverviewPopup.push(period, period.BaselinePeriod)
    }
    
    // 'action' attribute on TextCell (id=testPeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 370, column 29
    function action_115 () : void {
      ImpactTestingPolicyPeriodOverviewPopup.push(period, period.TestPeriod)
    }
    
    // 'action' attribute on BooleanRadioCell (id=IconCol_Cell) at ImpactTestingExportScreen.pcf: line 308, column 36
    function action_82 () : void {
      ImpactTestingPolicyPeriodPopup.push(period)
    }
    
    // 'action' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingExportScreen.pcf: line 317, column 29
    function action_87 () : void {
      JobForward.go(period.OriginalPeriod.Job)
    }
    
    // 'action' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 362, column 29
    function action_dest_110 () : pcf.api.Destination {
      return pcf.ImpactTestingPolicyPeriodOverviewPopup.createDestination(period, period.BaselinePeriod)
    }
    
    // 'action' attribute on TextCell (id=testPeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 370, column 29
    function action_dest_116 () : pcf.api.Destination {
      return pcf.ImpactTestingPolicyPeriodOverviewPopup.createDestination(period, period.TestPeriod)
    }
    
    // 'action' attribute on BooleanRadioCell (id=IconCol_Cell) at ImpactTestingExportScreen.pcf: line 308, column 36
    function action_dest_83 () : pcf.api.Destination {
      return pcf.ImpactTestingPolicyPeriodPopup.createDestination(period)
    }
    
    // 'action' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingExportScreen.pcf: line 317, column 29
    function action_dest_88 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(period.OriginalPeriod.Job)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=IconCol_Cell) at ImpactTestingExportScreen.pcf: line 308, column 36
    function iconColor_86 () : gw.api.web.color.GWColor {
      return period.Success ? gw.api.web.color.GWColor.THEME_ALERT_SUCCESS : gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=IconCol_Cell) at ImpactTestingExportScreen.pcf: line 308, column 36
    function iconLabel_84 () : java.lang.String {
      return period.HasFailures ? DisplayKey.get("Web.Rating.ImpactTesting.Prepare.ErrorHoverText", period.FailureMessage) : ""
    }
    
    // 'icon' attribute on BooleanRadioCell (id=IconCol_Cell) at ImpactTestingExportScreen.pcf: line 308, column 36
    function icon_85 () : java.lang.String {
      return period.Success ? "circle_checkmark" : "circle_x"
    }
    
    // 'value' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 362, column 29
    function valueRoot_113 () : java.lang.Object {
      return period.BaselinePeriod?.Job
    }
    
    // 'value' attribute on TextCell (id=testPeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 370, column 29
    function valueRoot_119 () : java.lang.Object {
      return period.TestPeriod?.Job
    }
    
    // 'value' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingExportScreen.pcf: line 317, column 29
    function valueRoot_90 () : java.lang.Object {
      return period.OriginalPeriod
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProducerCol_Cell) at ImpactTestingExportScreen.pcf: line 335, column 29
    function valueRoot_98 () : java.lang.Object {
      return period.OriginalPeriod.Policy
    }
    
    // 'value' attribute on TypeKeyCell (id=originalPeriodJurisdictionCol_Cell) at ImpactTestingExportScreen.pcf: line 342, column 29
    function value_100 () : typekey.Jurisdiction {
      return period.OriginalPeriod.BaseState
    }
    
    // 'value' attribute on DateCell (id=originalPeriodEffectiveCol_Cell) at ImpactTestingExportScreen.pcf: line 348, column 29
    function value_103 () : java.util.Date {
      return period.OriginalPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=originalPeriodExpirationCol_Cell) at ImpactTestingExportScreen.pcf: line 354, column 29
    function value_106 () : java.util.Date {
      return period.OriginalPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=baselinePeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 362, column 29
    function value_112 () : java.lang.String {
      return period.BaselinePeriod?.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=testPeriodCol_Cell) at ImpactTestingExportScreen.pcf: line 370, column 29
    function value_118 () : java.lang.String {
      return period.TestPeriod?.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodPolicyNumberCol_Cell) at ImpactTestingExportScreen.pcf: line 317, column 29
    function value_89 () : java.lang.String {
      return period.OriginalPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=originalPeriodTermCol_Cell) at ImpactTestingExportScreen.pcf: line 323, column 29
    function value_92 () : java.lang.Integer {
      return period.OriginalPeriod.TermNumber
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProductCol_Cell) at ImpactTestingExportScreen.pcf: line 328, column 123
    function value_95 () : java.lang.String {
      return gw.rating.rtm.util.ProductModelUtils.lineStyleProductDisplay(period.OriginalPeriod.Policy.Product)
    }
    
    // 'value' attribute on TextCell (id=originalPeriodProducerCol_Cell) at ImpactTestingExportScreen.pcf: line 335, column 29
    function value_97 () : entity.ProducerCode {
      return period.OriginalPeriod.Policy.ProducerCodeOfService
    }
    
    property get period () : entity.ImpactTestingPolicyPeriod {
      return getIteratedValue(1) as entity.ImpactTestingPolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingExportScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Range_Cell) at ImpactTestingExportScreen.pcf: line 105, column 35
    function valueRoot_20 () : java.lang.Object {
      return impactTestResultBucket
    }
    
    // 'value' attribute on TextCell (id=Count_Cell) at ImpactTestingExportScreen.pcf: line 113, column 35
    function valueRoot_23 () : java.lang.Object {
      return impactTestResultBucket.Data
    }
    
    // 'value' attribute on TextCell (id=Range_Cell) at ImpactTestingExportScreen.pcf: line 105, column 35
    function value_19 () : java.lang.String {
      return impactTestResultBucket.Category
    }
    
    // 'value' attribute on TextCell (id=Count_Cell) at ImpactTestingExportScreen.pcf: line 113, column 35
    function value_22 () : java.lang.Integer {
      return impactTestResultBucket.Data.Count
    }
    
    // 'value' attribute on TextCell (id=PercentOfTotal_Cell) at ImpactTestingExportScreen.pcf: line 121, column 35
    function value_25 () : java.math.BigDecimal {
      return (TotalNumDataPoints > 0) ? ((impactTestResultBucket.Data.Count as java.math.BigDecimal)/TotalNumDataPoints * 100) : 0
    }
    
    // 'value' attribute on TextCell (id=AvgDiff_Cell) at ImpactTestingExportScreen.pcf: line 130, column 35
    function value_27 () : java.math.BigDecimal {
      return impactTestResultBucket.Data.sum(\d -> d.DiffInValue)
    }
    
    property get impactTestResultBucket () : gw.rating.impact.ImpactTestingResultBucket {
      return getIteratedValue(2) as gw.rating.impact.ImpactTestingResultBucket
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingExportScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends ImpactTestingExportScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingExportScreen.pcf: line 91, column 29
    function initialValue_14 () : int {
      return impactTestingStatistics.Buckets.sum(\b -> b.Data.Count)
    }
    
    // 'value' attribute on TextCell (id=Range_Cell) at ImpactTestingExportScreen.pcf: line 105, column 35
    function sortValue_15 (impactTestResultBucket :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.Object {
      return impactTestResultBucket.Category
    }
    
    // 'value' attribute on TextCell (id=Count_Cell) at ImpactTestingExportScreen.pcf: line 113, column 35
    function sortValue_16 (impactTestResultBucket :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.Object {
      return impactTestResultBucket.Data.Count
    }
    
    // 'value' attribute on TextCell (id=PercentOfTotal_Cell) at ImpactTestingExportScreen.pcf: line 121, column 35
    function sortValue_17 (impactTestResultBucket :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.Object {
      return (TotalNumDataPoints > 0) ? ((impactTestResultBucket.Data.Count as java.math.BigDecimal)/TotalNumDataPoints * 100) : 0
    }
    
    // 'value' attribute on TextCell (id=AvgDiff_Cell) at ImpactTestingExportScreen.pcf: line 130, column 35
    function sortValue_18 (impactTestResultBucket :  gw.rating.impact.ImpactTestingResultBucket) : java.lang.Object {
      return impactTestResultBucket.Data.sum(\d -> d.DiffInValue)
    }
    
    // 'value' attribute on TextCell (id=AvgDiff_Cell) at ImpactTestingExportScreen.pcf: line 159, column 33
    function valueRoot_35 () : java.lang.Object {
      return impactTestingStatistics
    }
    
    // 'value' attribute on RowIterator at ImpactTestingExportScreen.pcf: line 96, column 94
    function value_29 () : java.util.List<gw.rating.impact.ImpactTestingResultBucket> {
      return impactTestingStatistics.Buckets
    }
    
    // 'value' attribute on TextCell (id=Count_Cell) at ImpactTestingExportScreen.pcf: line 146, column 33
    function value_30 () : java.lang.Integer {
      return TotalNumDataPoints
    }
    
    // 'value' attribute on TextCell (id=TotalPercent_Cell) at ImpactTestingExportScreen.pcf: line 151, column 33
    function value_32 () : java.lang.String {
      return ((TotalNumDataPoints > 0) ? "100%" : "-")
    }
    
    // 'value' attribute on TextCell (id=AvgDiff_Cell) at ImpactTestingExportScreen.pcf: line 159, column 33
    function value_34 () : java.math.BigDecimal {
      return impactTestingStatistics.TotalDiffValues
    }
    
    property get TotalNumDataPoints () : int {
      return getVariableValue("TotalNumDataPoints", 1) as java.lang.Integer
    }
    
    property set TotalNumDataPoints ($arg :  int) {
      setVariableValue("TotalNumDataPoints", 1, $arg)
    }
    
    
  }
  
  
}