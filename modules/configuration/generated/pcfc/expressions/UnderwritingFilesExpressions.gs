package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/renmgr/UnderwritingFiles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UnderwritingFilesExpressions {
  @javax.annotation.Generated("config/web/pcf/account/renmgr/UnderwritingFiles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UnderwritingFilesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=GroupName_Cell) at UnderwritingFiles.pcf: line 60, column 38
    function action_13 () : void {
      goToSpecificJobGroupDetail(jobGroup)
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at UnderwritingFiles.pcf: line 60, column 38
    function valueRoot_15 () : java.lang.Object {
      return jobGroup
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at UnderwritingFiles.pcf: line 60, column 38
    function value_14 () : java.lang.String {
      return jobGroup.Name
    }
    
    // 'value' attribute on DateCell (id=FirstRenewalDate_Cell) at UnderwritingFiles.pcf: line 64, column 46
    function value_17 () : java.util.Date {
      return jobGroup.FirstJobDate
    }
    
    // 'value' attribute on DateCell (id=LastRenewalDate_Cell) at UnderwritingFiles.pcf: line 68, column 45
    function value_20 () : java.util.Date {
      return jobGroup.LastJobDate
    }
    
    // 'value' attribute on TypeKeyCell (id=WorkOrderType_Cell) at UnderwritingFiles.pcf: line 73, column 45
    function value_23 () : typekey.JobGroup {
      return jobGroup.Subtype
    }
    
    // 'value' attribute on TextCell (id=NumJobs_Cell) at UnderwritingFiles.pcf: line 78, column 46
    function value_26 () : java.lang.Integer {
      return jobGroup.NumJobs
    }
    
    property get jobGroup () : entity.JobGroup {
      return getIteratedValue(1) as entity.JobGroup
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/renmgr/UnderwritingFiles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UnderwritingFilesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=UnderwritingFiles) at UnderwritingFiles.pcf: line 10, column 36
    static function canVisit_31 (account :  Account) : java.lang.Boolean {
      return perm.Account.viewRenewalGroup(account)
    }
    
    // 'filter' attribute on ToolbarFilterOption at UnderwritingFiles.pcf: line 40, column 141
    function filter_2 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.UnderwritingFiles.Filter.All"), \ x -> true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at UnderwritingFiles.pcf: line 42, column 194
    function filter_3 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.UnderwritingFiles.Filter.Open"), \ x -> (x as JobGroup).Jobs.hasMatch( \ r -> not r.Complete))
    }
    
    // 'filter' attribute on ToolbarFilterOption at UnderwritingFiles.pcf: line 44, column 202
    function filter_4 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.UnderwritingFiles.Filter.Complete"), \ x -> not (x as JobGroup).Jobs.hasMatch( \ r -> not r.Complete))
    }
    
    // 'filter' attribute on ToolbarFilterOption at UnderwritingFiles.pcf: line 49, column 158
    function filter_5 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.UnderwritingFiles.Filter.SubmissionAndRenewal"), \ x -> true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at UnderwritingFiles.pcf: line 51, column 174
    function filter_6 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.UnderwritingFiles.Filter.SubmissionOnly"), \ x -> (x typeis SubmissionGroup))
    }
    
    // 'filter' attribute on ToolbarFilterOption at UnderwritingFiles.pcf: line 53, column 168
    function filter_7 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.UnderwritingFiles.Filter.RenewalOnly"), \ x -> (x typeis RenewalGroup))
    }
    
    // 'initialValue' attribute on Variable at UnderwritingFiles.pcf: line 20, column 33
    function initialValue_0 () : entity.JobGroup[] {
      return account.JobGroups
    }
    
    // Page (id=UnderwritingFiles) at UnderwritingFiles.pcf: line 10, column 36
    static function parent_32 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'value' attribute on DateCell (id=LastRenewalDate_Cell) at UnderwritingFiles.pcf: line 68, column 45
    function sortValue_10 (jobGroup :  entity.JobGroup) : java.lang.Object {
      return jobGroup.LastJobDate
    }
    
    // 'value' attribute on TypeKeyCell (id=WorkOrderType_Cell) at UnderwritingFiles.pcf: line 73, column 45
    function sortValue_11 (jobGroup :  entity.JobGroup) : java.lang.Object {
      return jobGroup.Subtype
    }
    
    // 'value' attribute on TextCell (id=NumJobs_Cell) at UnderwritingFiles.pcf: line 78, column 46
    function sortValue_12 (jobGroup :  entity.JobGroup) : java.lang.Object {
      return jobGroup.NumJobs
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at UnderwritingFiles.pcf: line 60, column 38
    function sortValue_8 (jobGroup :  entity.JobGroup) : java.lang.Object {
      return jobGroup.Name
    }
    
    // 'value' attribute on DateCell (id=FirstRenewalDate_Cell) at UnderwritingFiles.pcf: line 64, column 46
    function sortValue_9 (jobGroup :  entity.JobGroup) : java.lang.Object {
      return jobGroup.FirstJobDate
    }
    
    // 'visible' attribute on Verbatim at UnderwritingFiles.pcf: line 28, column 41
    function visible_1 () : java.lang.Boolean {
      return jobGroups.Count == 0
    }
    
    // 'visible' attribute on ListViewPanel (id=RenewalManagerLV) at UnderwritingFiles.pcf: line 31, column 42
    function visible_30 () : java.lang.Boolean {
      return jobGroups.Count > 0
    }
    
    override property get CurrentLocation () : pcf.UnderwritingFiles {
      return super.CurrentLocation as pcf.UnderwritingFiles
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get jobGroups () : entity.JobGroup[] {
      return getVariableValue("jobGroups", 0) as entity.JobGroup[]
    }
    
    property set jobGroups ($arg :  entity.JobGroup[]) {
      setVariableValue("jobGroups", 0, $arg)
    }
    
    function goToSpecificJobGroupDetail(jobGroup : JobGroup) {
      if(jobGroup typeis RenewalGroup) {
        RenewalGroupDetail.go(jobGroup)
      }
      else if(jobGroup typeis SubmissionGroup) {
        SubmissionGroupDetail.go(jobGroup)
      }
      else {
        throw DisplayKey.get("Web.UnderwritingFiles.UnrecognizedJobGroup", typeof jobGroup)
      }
    }
    
    
  }
  
  
}