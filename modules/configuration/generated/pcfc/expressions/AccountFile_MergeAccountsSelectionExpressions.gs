package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_MergeAccountsSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_MergeAccountsSelectionExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MergeAccountsSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_MergeAccountsSelectionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (victimAccount :  Account, survivingAccount :  Account) : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=AccountFile_MergeAccountsSelection) at AccountFile_MergeAccountsSelection.pcf: line 9, column 149
    static function parent_54 (survivingAccount :  Account, victimAccount :  Account) : pcf.api.Destination {
      return pcf.AccountFile_Summary.createDestination(survivingAccount)
    }
    
    // 'title' attribute on Page (id=AccountFile_MergeAccountsSelection) at AccountFile_MergeAccountsSelection.pcf: line 9, column 149
    static function title_55 (survivingAccount :  Account, victimAccount :  Account) : java.lang.Object {
      return DisplayKey.get("Web.AccountFile.MergeAccounts.AccountSelection", victimAccount.AccountNumber, survivingAccount.AccountNumber)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_MergeAccountsSelection {
      return super.CurrentLocation as pcf.AccountFile_MergeAccountsSelection
    }
    
    property get survivingAccount () : Account {
      return getVariableValue("survivingAccount", 0) as Account
    }
    
    property set survivingAccount ($arg :  Account) {
      setVariableValue("survivingAccount", 0, $arg)
    }
    
    property get victimAccount () : Account {
      return getVariableValue("victimAccount", 0) as Account
    }
    
    property set victimAccount ($arg :  Account) {
      setVariableValue("victimAccount", 0, $arg)
    }
    
    function mergeAccounts(){
      try{
        var policies = Policy.finder.findLocalPoliciesByAccount(victimAccount)
        policies.each(\ p -> {
          var period = p.LatestBoundPeriod
          if(period != null and not perm.PolicyPeriod.change(p.LatestBoundPeriod)){
            throw new gw.api.util.DisplayableException(DisplayKey.get("Account.MergeAccounts.InsufficientPermissionsOnPolicies"))
          }
        })
        survivingAccount.mergeWithAccount(victimAccount)
        //history event not added to the surviving account in the base code
        var _victimAccount = victimAccount
        survivingAccount.createCustomHistoryEvent(CustomHistoryType.TC_ACCT_MERGED , \ -> DisplayKey.get("Account.History.AccountMerged", _victimAccount.AccountNumber,
          _victimAccount.AccountHolder.DisplayName))
      }
      catch(e: java.lang.Exception){
        throw new gw.api.util.DisplayableException(e.Message)
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MergeAccountsSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Summary_WorkOrdersLVExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_MergeAccountsSelection.pcf: line 88, column 69
    function initialValue_19 () : gw.api.database.IQueryBeanResult<Job> {
      return victimAccount.getAllJobs(statusFilterChoice.value, null, null, User.util.CurrentUser)
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_MergeAccountsSelection.pcf: line 100, column 45
    function sortValue_20 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 105, column 44
    function sortValue_21 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at AccountFile_MergeAccountsSelection.pcf: line 123, column 62
    function sortValue_22 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at AccountFile_MergeAccountsSelection.pcf: line 93, column 42
    function value_53 () : entity.Job[] {
      return jobs.toCollection().where(\ j -> not (j typeis Audit and j.AuditInformation.IsReversal))?.toTypedArray()
    }
    
    property get jobs () : gw.api.database.IQueryBeanResult<Job> {
      return getVariableValue("jobs", 2) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set jobs ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setVariableValue("jobs", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MergeAccountsSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Summary_WorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 105, column 44
    function action_26 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 117, column 73
    function action_35 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_MergeAccountsSelection.pcf: line 133, column 46
    function action_47 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 105, column 44
    function action_dest_27 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 117, column 73
    function action_dest_36 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_MergeAccountsSelection.pcf: line 133, column 46
    function action_dest_48 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 117, column 73
    function available_34 () : java.lang.Boolean {
      return not job?.createsNewPolicy()
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_MergeAccountsSelection.pcf: line 95, column 81
    function useArchivedStyle_52 () : java.lang.Boolean {
      return gw.pcf.ArchiveHelper.getArchivedStyle(job)
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_MergeAccountsSelection.pcf: line 100, column 45
    function valueRoot_24 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 117, column 73
    function valueRoot_38 () : java.lang.Object {
      return job.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_MergeAccountsSelection.pcf: line 123, column 62
    function valueRoot_42 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_MergeAccountsSelection.pcf: line 100, column 45
    function value_23 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 105, column 44
    function value_28 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=JobStatus_Cell) at AccountFile_MergeAccountsSelection.pcf: line 110, column 48
    function value_31 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_MergeAccountsSelection.pcf: line 117, column 73
    function value_37 () : java.lang.String {
      return job.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_MergeAccountsSelection.pcf: line 123, column 62
    function value_41 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_MergeAccountsSelection.pcf: line 128, column 46
    function value_44 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at AccountFile_MergeAccountsSelection.pcf: line 133, column 46
    function value_49 () : entity.User {
      return job.Underwriter
    }
    
    property get job () : entity.Job {
      return getIteratedValue(3) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_MergeAccountsSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends AccountFile_MergeAccountsSelectionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=MergeAccounts) at AccountFile_MergeAccountsSelection.pcf: line 32, column 78
    function action_2 () : void {
      survivingAccount.mergeWithAccountAndCreateHistoryEvent(victimAccount); AccountFile.go(survivingAccount)
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at AccountFile_MergeAccountsSelection.pcf: line 36, column 85
    function action_4 () : void {
      CurrentLocation.cancel(); pcf.AccountFile_AccountSearch.go(survivingAccount, gw.account.AccountSearchReason.MergeAccounts)
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=MergeAccounts) at AccountFile_MergeAccountsSelection.pcf: line 32, column 78
    function confirmMessage_3 () : java.lang.String {
      return DisplayKey.get("Web.AccountFile.MergeAccounts.Confirmation", victimAccount.AccountNumber, survivingAccount.AccountNumber)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MergeAccountsSelection.pcf: line 59, column 68
    function def_onEnter_11 (def :  pcf.AccountFile_Summary_PolicyTermsLV) : void {
      def.onEnter(victimAccount)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MergeAccountsSelection.pcf: line 49, column 63
    function def_onEnter_7 (def :  pcf.AccountFile_Summary_BasicInfoDV) : void {
      def.onEnter(victimAccount)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MergeAccountsSelection.pcf: line 53, column 67
    function def_onEnter_9 (def :  pcf.AccountFile_Summary_ActivitiesLV) : void {
      def.onEnter(victimAccount)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MergeAccountsSelection.pcf: line 53, column 67
    function def_refreshVariables_10 (def :  pcf.AccountFile_Summary_ActivitiesLV) : void {
      def.refreshVariables(victimAccount)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MergeAccountsSelection.pcf: line 59, column 68
    function def_refreshVariables_12 (def :  pcf.AccountFile_Summary_PolicyTermsLV) : void {
      def.refreshVariables(victimAccount)
    }
    
    // 'def' attribute on PanelRef at AccountFile_MergeAccountsSelection.pcf: line 49, column 63
    function def_refreshVariables_8 (def :  pcf.AccountFile_Summary_BasicInfoDV) : void {
      def.refreshVariables(victimAccount)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_MergeAccountsSelection.pcf: line 77, column 80
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      statusFilterChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<java.lang.Boolean>)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_MergeAccountsSelection.pcf: line 22, column 90
    function initialValue_0 () : java.util.List<gw.api.ui.DisplayedObject<java.lang.Boolean>> {
      return gw.job.JobFilters.StatusFilterSet
    }
    
    // 'initialValue' attribute on Variable at AccountFile_MergeAccountsSelection.pcf: line 26, column 68
    function initialValue_1 () : gw.api.ui.DisplayedObject<java.lang.Boolean> {
      return gw.job.JobFilters.OpenStatusFilter
    }
    
    // 'label' attribute on AlertBar (id=mergeAccountsAlert) at AccountFile_MergeAccountsSelection.pcf: line 42, column 37
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.AccountFile.MergeAccounts.Warning", victimAccount.AccountNumber, survivingAccount.AccountNumber)
    }
    
    // 'label' attribute on AlertBar (id=mergeAccountRemovalAlert) at AccountFile_MergeAccountsSelection.pcf: line 47, column 37
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.AccountFile.MergeAccounts.RemovalWarning", victimAccount.AccountNumber)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_MergeAccountsSelection.pcf: line 77, column 80
    function valueRange_15 () : java.lang.Object {
      return statusFilterSet
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_MergeAccountsSelection.pcf: line 77, column 80
    function value_13 () : gw.api.ui.DisplayedObject<java.lang.Boolean> {
      return statusFilterChoice
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_MergeAccountsSelection.pcf: line 77, column 80
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.ui.DisplayedObject<java.lang.Boolean>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_MergeAccountsSelection.pcf: line 77, column 80
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_MergeAccountsSelection.pcf: line 77, column 80
    function verifyValueRange_17 () : void {
      var __valueRangeArg = statusFilterSet
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    property get statusFilterChoice () : gw.api.ui.DisplayedObject<java.lang.Boolean> {
      return getVariableValue("statusFilterChoice", 1) as gw.api.ui.DisplayedObject<java.lang.Boolean>
    }
    
    property set statusFilterChoice ($arg :  gw.api.ui.DisplayedObject<java.lang.Boolean>) {
      setVariableValue("statusFilterChoice", 1, $arg)
    }
    
    property get statusFilterSet () : java.util.List<gw.api.ui.DisplayedObject<java.lang.Boolean>> {
      return getVariableValue("statusFilterSet", 1) as java.util.List<gw.api.ui.DisplayedObject<java.lang.Boolean>>
    }
    
    property set statusFilterSet ($arg :  java.util.List<gw.api.ui.DisplayedObject<java.lang.Boolean>>) {
      setVariableValue("statusFilterSet", 1, $arg)
    }
    
    
  }
  
  
}