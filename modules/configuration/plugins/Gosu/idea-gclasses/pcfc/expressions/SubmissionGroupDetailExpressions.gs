package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/renmgr/SubmissionGroupDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionGroupDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/account/renmgr/SubmissionGroupDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionGroupDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (submissionGroup :  SubmissionGroup) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=SubmissionGroupDetail) at SubmissionGroupDetail.pcf: line 11, column 89
    static function canVisit_21 (submissionGroup :  SubmissionGroup) : java.lang.Boolean {
      return perm.Account.viewSubmissionGroup(submissionGroup.Account)
    }
    
    // 'def' attribute on PanelRef at SubmissionGroupDetail.pcf: line 53, column 58
    function def_onEnter_15 (def :  pcf.SubmissionGroupJobsLV) : void {
      def.onEnter(submissionGroup)
    }
    
    // 'def' attribute on PanelRef at SubmissionGroupDetail.pcf: line 61, column 61
    function def_onEnter_17 (def :  pcf.JobGroupRiskAnalysisLV) : void {
      def.onEnter( submissionGroup )
    }
    
    // 'def' attribute on PanelRef at SubmissionGroupDetail.pcf: line 69, column 154
    function def_onEnter_19 (def :  pcf.DesktopActivitiesLV) : void {
      def.onEnter( Activity.finder.findActivitiesByJobGroup( submissionGroup ) as gw.api.database.IQueryBeanResult<Activity> )
    }
    
    // 'def' attribute on PanelRef at SubmissionGroupDetail.pcf: line 53, column 58
    function def_refreshVariables_16 (def :  pcf.SubmissionGroupJobsLV) : void {
      def.refreshVariables(submissionGroup)
    }
    
    // 'def' attribute on PanelRef at SubmissionGroupDetail.pcf: line 61, column 61
    function def_refreshVariables_18 (def :  pcf.JobGroupRiskAnalysisLV) : void {
      def.refreshVariables( submissionGroup )
    }
    
    // 'def' attribute on PanelRef at SubmissionGroupDetail.pcf: line 69, column 154
    function def_refreshVariables_20 (def :  pcf.DesktopActivitiesLV) : void {
      def.refreshVariables( Activity.finder.findActivitiesByJobGroup( submissionGroup ) as gw.api.database.IQueryBeanResult<Activity> )
    }
    
    // 'parent' attribute on Page (id=SubmissionGroupDetail) at SubmissionGroupDetail.pcf: line 11, column 89
    static function parent_22 (submissionGroup :  SubmissionGroup) : pcf.api.Destination {
      return pcf.UnderwritingFiles.createDestination(submissionGroup.Account)
    }
    
    // 'title' attribute on Page (id=SubmissionGroupDetail) at SubmissionGroupDetail.pcf: line 11, column 89
    static function title_23 (submissionGroup :  SubmissionGroup) : java.lang.Object {
      return DisplayKey.get("Web.SubmissionGroup.Title", submissionGroup.Name)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at SubmissionGroupDetail.pcf: line 26, column 43
    function valueRoot_1 () : java.lang.Object {
      return submissionGroup
    }
    
    // 'value' attribute on DateInput (id=FirstEffDate_Input) at SubmissionGroupDetail.pcf: line 41, column 126
    function valueRoot_10 () : java.lang.Object {
      return submissionGroup.Jobs.minBy( \ j -> j.LatestPeriod.EditEffectiveDate ).LatestPeriod
    }
    
    // 'value' attribute on DateInput (id=LastExpDate_Input) at SubmissionGroupDetail.pcf: line 45, column 110
    function valueRoot_13 () : java.lang.Object {
      return submissionGroup.Jobs.maxBy( \ j -> j.LatestPeriod.PeriodEnd ).LatestPeriod
    }
    
    // 'value' attribute on TextInput (id=NumJobs_Input) at SubmissionGroupDetail.pcf: line 31, column 44
    function valueRoot_4 () : java.lang.Object {
      return submissionGroup.Submissions
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at SubmissionGroupDetail.pcf: line 26, column 43
    function value_0 () : java.lang.String {
      return submissionGroup.Name
    }
    
    // 'value' attribute on DateInput (id=LastExpDate_Input) at SubmissionGroupDetail.pcf: line 45, column 110
    function value_12 () : java.util.Date {
      return submissionGroup.Jobs.maxBy( \ j -> j.LatestPeriod.PeriodEnd ).LatestPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextInput (id=NumJobs_Input) at SubmissionGroupDetail.pcf: line 31, column 44
    function value_3 () : java.lang.Integer {
      return submissionGroup.Submissions.length
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at SubmissionGroupDetail.pcf: line 36, column 48
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return submissionGroup.AmountSum
    }
    
    // 'value' attribute on DateInput (id=FirstEffDate_Input) at SubmissionGroupDetail.pcf: line 41, column 126
    function value_9 () : java.util.Date {
      return submissionGroup.Jobs.minBy( \ j -> j.LatestPeriod.EditEffectiveDate ).LatestPeriod.EditEffectiveDate
    }
    
    override property get CurrentLocation () : pcf.SubmissionGroupDetail {
      return super.CurrentLocation as pcf.SubmissionGroupDetail
    }
    
    property get submissionGroup () : SubmissionGroup {
      return getVariableValue("submissionGroup", 0) as SubmissionGroup
    }
    
    property set submissionGroup ($arg :  SubmissionGroup) {
      setVariableValue("submissionGroup", 0, $arg)
    }
    
    
  }
  
  
}