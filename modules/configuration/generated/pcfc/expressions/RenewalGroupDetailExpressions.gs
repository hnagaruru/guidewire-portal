package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/renmgr/RenewalGroupDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalGroupDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/account/renmgr/RenewalGroupDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalGroupDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (renewalGroup :  RenewalGroup) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=RenewalGroupDetail) at RenewalGroupDetail.pcf: line 11, column 83
    static function canVisit_21 (renewalGroup :  RenewalGroup) : java.lang.Boolean {
      return perm.Account.viewRenewalGroup(renewalGroup.Account)
    }
    
    // 'def' attribute on PanelRef at RenewalGroupDetail.pcf: line 52, column 52
    function def_onEnter_15 (def :  pcf.RenewalGroupJobsLV) : void {
      def.onEnter(renewalGroup)
    }
    
    // 'def' attribute on PanelRef at RenewalGroupDetail.pcf: line 60, column 58
    function def_onEnter_17 (def :  pcf.JobGroupRiskAnalysisLV) : void {
      def.onEnter( renewalGroup )
    }
    
    // 'def' attribute on PanelRef at RenewalGroupDetail.pcf: line 68, column 151
    function def_onEnter_19 (def :  pcf.DesktopActivitiesLV) : void {
      def.onEnter( Activity.finder.findActivitiesByJobGroup( renewalGroup ) as gw.api.database.IQueryBeanResult<Activity> )
    }
    
    // 'def' attribute on PanelRef at RenewalGroupDetail.pcf: line 52, column 52
    function def_refreshVariables_16 (def :  pcf.RenewalGroupJobsLV) : void {
      def.refreshVariables(renewalGroup)
    }
    
    // 'def' attribute on PanelRef at RenewalGroupDetail.pcf: line 60, column 58
    function def_refreshVariables_18 (def :  pcf.JobGroupRiskAnalysisLV) : void {
      def.refreshVariables( renewalGroup )
    }
    
    // 'def' attribute on PanelRef at RenewalGroupDetail.pcf: line 68, column 151
    function def_refreshVariables_20 (def :  pcf.DesktopActivitiesLV) : void {
      def.refreshVariables( Activity.finder.findActivitiesByJobGroup( renewalGroup ) as gw.api.database.IQueryBeanResult<Activity> )
    }
    
    // 'parent' attribute on Page (id=RenewalGroupDetail) at RenewalGroupDetail.pcf: line 11, column 83
    static function parent_22 (renewalGroup :  RenewalGroup) : pcf.api.Destination {
      return pcf.UnderwritingFiles.createDestination(renewalGroup.Account)
    }
    
    // 'title' attribute on Page (id=RenewalGroupDetail) at RenewalGroupDetail.pcf: line 11, column 83
    static function title_23 (renewalGroup :  RenewalGroup) : java.lang.Object {
      return DisplayKey.get("Web.RenewalGroup.Title", renewalGroup.Name)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RenewalGroupDetail.pcf: line 26, column 40
    function valueRoot_1 () : java.lang.Object {
      return renewalGroup
    }
    
    // 'value' attribute on DateInput (id=FirstEffDate_Input) at RenewalGroupDetail.pcf: line 40, column 123
    function valueRoot_10 () : java.lang.Object {
      return renewalGroup.Jobs.minBy( \ j -> j.LatestPeriod.EditEffectiveDate ).LatestPeriod
    }
    
    // 'value' attribute on DateInput (id=LastExpDate_Input) at RenewalGroupDetail.pcf: line 44, column 107
    function valueRoot_13 () : java.lang.Object {
      return renewalGroup.Jobs.maxBy( \ j -> j.LatestPeriod.PeriodEnd ).LatestPeriod
    }
    
    // 'value' attribute on TextInput (id=NumJobs_Input) at RenewalGroupDetail.pcf: line 31, column 44
    function valueRoot_4 () : java.lang.Object {
      return renewalGroup.Renewals
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RenewalGroupDetail.pcf: line 26, column 40
    function value_0 () : java.lang.String {
      return renewalGroup.Name
    }
    
    // 'value' attribute on DateInput (id=LastExpDate_Input) at RenewalGroupDetail.pcf: line 44, column 107
    function value_12 () : java.util.Date {
      return renewalGroup.Jobs.maxBy( \ j -> j.LatestPeriod.PeriodEnd ).LatestPeriod.PeriodEnd
    }
    
    // 'value' attribute on TextInput (id=NumJobs_Input) at RenewalGroupDetail.pcf: line 31, column 44
    function value_3 () : java.lang.Integer {
      return renewalGroup.Renewals.length
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at RenewalGroupDetail.pcf: line 36, column 45
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return renewalGroup.AmountSum
    }
    
    // 'value' attribute on DateInput (id=FirstEffDate_Input) at RenewalGroupDetail.pcf: line 40, column 123
    function value_9 () : java.util.Date {
      return renewalGroup.Jobs.minBy( \ j -> j.LatestPeriod.EditEffectiveDate ).LatestPeriod.EditEffectiveDate
    }
    
    override property get CurrentLocation () : pcf.RenewalGroupDetail {
      return super.CurrentLocation as pcf.RenewalGroupDetail
    }
    
    property get renewalGroup () : RenewalGroup {
      return getVariableValue("renewalGroup", 0) as RenewalGroup
    }
    
    property set renewalGroup ($arg :  RenewalGroup) {
      setVariableValue("renewalGroup", 0, $arg)
    }
    
    
  }
  
  
}