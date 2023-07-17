package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_WorkOrdersExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_WorkOrdersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_WorkOrders) at AccountFile_WorkOrders.pcf: line 12, column 35
    static function canVisit_58 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountworkorders
    }
    
    // 'handlesValidationIssue' attribute on Page (id=AccountFile_WorkOrders) at AccountFile_WorkOrders.pcf: line 12, column 35
    static function handlesValidationIssue_59 (account :  Account, VALUE :  java.lang.Object) : java.lang.Boolean {
      return VALUE typeis entity.Job
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_WorkOrders) at AccountFile_WorkOrders.pcf: line 12, column 35
    function infoBar_onEnter_60 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_WorkOrders) at AccountFile_WorkOrders.pcf: line 12, column 35
    function infoBar_refreshVariables_61 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // Page (id=AccountFile_WorkOrders) at AccountFile_WorkOrders.pcf: line 12, column 35
    static function parent_62 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_WorkOrders {
      return super.CurrentLocation as pcf.AccountFile_WorkOrders
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_WorkOrdersScreenExpressionsImpl extends AccountFile_WorkOrdersExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at AccountFile_WorkOrders.pcf: line 52, column 68
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      workOrderTypeChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<typekey.Job>)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=ProductFilter_Input) at AccountFile_WorkOrders.pcf: line 64, column 84
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      productFilterChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<gw.api.productmodel.Product>)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_WorkOrders.pcf: line 40, column 74
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      statusFilterChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<java.lang.Boolean>)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_WorkOrders.pcf: line 23, column 58
    function initialValue_0 () : gw.api.ui.DisplayedObject<Boolean> {
      return gw.web.account.AccountFileWorkOrdersUIHelper.StatusFilterInitialValue
    }
    
    // 'initialValue' attribute on Variable at AccountFile_WorkOrders.pcf: line 27, column 62
    function initialValue_1 () : gw.api.ui.DisplayedObject<typekey.Job> {
      return gw.web.account.AccountFileWorkOrdersUIHelper.WorkOrderInitialValue
    }
    
    // 'initialValue' attribute on Variable at AccountFile_WorkOrders.pcf: line 31, column 78
    function initialValue_2 () : gw.api.ui.DisplayedObject<gw.api.productmodel.Product> {
      return gw.web.account.AccountFileWorkOrdersUIHelper.getProductFilterInitialValue(account)
    }
    
    // 'onChange' attribute on PostOnChange at AccountFile_WorkOrders.pcf: line 54, column 121
    function onChange_10 () : void {
      gw.web.account.AccountFileWorkOrdersUIHelper.WorkOrderFilterValue = workOrderTypeChoice.display
    }
    
    // 'onChange' attribute on PostOnChange at AccountFile_WorkOrders.pcf: line 66, column 119
    function onChange_17 () : void {
      gw.web.account.AccountFileWorkOrdersUIHelper.ProductFilterValue = productFilterChoice.display
    }
    
    // 'onChange' attribute on PostOnChange at AccountFile_WorkOrders.pcf: line 42, column 117
    function onChange_3 () : void {
      gw.web.account.AccountFileWorkOrdersUIHelper.StatusFilterValue = statusFilterChoice.display
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_WorkOrders.pcf: line 81, column 39
    function sortValue_24 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at AccountFile_WorkOrders.pcf: line 94, column 35
    function sortValue_25 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_WorkOrders.pcf: line 100, column 38
    function sortValue_26 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at AccountFile_WorkOrders.pcf: line 114, column 38
    function sortValue_27 (job :  entity.Job) : java.lang.Object {
      return job.CloseDate
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at AccountFile_WorkOrders.pcf: line 52, column 68
    function valueRange_13 () : java.lang.Object {
      return gw.job.JobFilters.JobTypeFilterSet
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at AccountFile_WorkOrders.pcf: line 64, column 84
    function valueRange_20 () : java.lang.Object {
      return gw.job.JobFilters.createProductFilterOptions( account )
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_WorkOrders.pcf: line 40, column 74
    function valueRange_6 () : java.lang.Object {
      return gw.job.JobFilters.StatusFilterSet
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at AccountFile_WorkOrders.pcf: line 52, column 68
    function value_11 () : gw.api.ui.DisplayedObject<typekey.Job> {
      return workOrderTypeChoice
    }
    
    // 'value' attribute on ToolbarRangeInput (id=ProductFilter_Input) at AccountFile_WorkOrders.pcf: line 64, column 84
    function value_18 () : gw.api.ui.DisplayedObject<gw.api.productmodel.Product> {
      return productFilterChoice
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_WorkOrders.pcf: line 40, column 74
    function value_4 () : gw.api.ui.DisplayedObject<java.lang.Boolean> {
      return statusFilterChoice
    }
    
    // 'value' attribute on RowIterator at AccountFile_WorkOrders.pcf: line 75, column 74
    function value_57 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return account.getAllJobs(statusFilterChoice.value, workOrderTypeChoice.value, productFilterChoice.value, User.util.CurrentUser)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at AccountFile_WorkOrders.pcf: line 52, column 68
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.ui.DisplayedObject<typekey.Job>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at AccountFile_WorkOrders.pcf: line 52, column 68
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at AccountFile_WorkOrders.pcf: line 64, column 84
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.ui.DisplayedObject<gw.api.productmodel.Product>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at AccountFile_WorkOrders.pcf: line 64, column 84
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_WorkOrders.pcf: line 40, column 74
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.ui.DisplayedObject<java.lang.Boolean>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_WorkOrders.pcf: line 40, column 74
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at AccountFile_WorkOrders.pcf: line 52, column 68
    function verifyValueRange_15 () : void {
      var __valueRangeArg = gw.job.JobFilters.JobTypeFilterSet
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at AccountFile_WorkOrders.pcf: line 64, column 84
    function verifyValueRange_22 () : void {
      var __valueRangeArg = gw.job.JobFilters.createProductFilterOptions( account )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at AccountFile_WorkOrders.pcf: line 40, column 74
    function verifyValueRange_8 () : void {
      var __valueRangeArg = gw.job.JobFilters.StatusFilterSet
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get productFilterChoice () : gw.api.ui.DisplayedObject<gw.api.productmodel.Product> {
      return getVariableValue("productFilterChoice", 1) as gw.api.ui.DisplayedObject<gw.api.productmodel.Product>
    }
    
    property set productFilterChoice ($arg :  gw.api.ui.DisplayedObject<gw.api.productmodel.Product>) {
      setVariableValue("productFilterChoice", 1, $arg)
    }
    
    property get statusFilterChoice () : gw.api.ui.DisplayedObject<Boolean> {
      return getVariableValue("statusFilterChoice", 1) as gw.api.ui.DisplayedObject<Boolean>
    }
    
    property set statusFilterChoice ($arg :  gw.api.ui.DisplayedObject<Boolean>) {
      setVariableValue("statusFilterChoice", 1, $arg)
    }
    
    property get workOrderTypeChoice () : gw.api.ui.DisplayedObject<typekey.Job> {
      return getVariableValue("workOrderTypeChoice", 1) as gw.api.ui.DisplayedObject<typekey.Job>
    }
    
    property set workOrderTypeChoice ($arg :  gw.api.ui.DisplayedObject<typekey.Job>) {
      setVariableValue("workOrderTypeChoice", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_WorkOrdersScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_WorkOrders.pcf: line 88, column 64
    function action_32 () : void {
      PolicyFileForward.go(job.ResultingBoundPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_WorkOrders.pcf: line 100, column 38
    function action_41 () : void {
      AccountJobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_WorkOrders.pcf: line 88, column 64
    function action_dest_33 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.ResultingBoundPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_WorkOrders.pcf: line 100, column 38
    function action_dest_42 () : pcf.api.Destination {
      return pcf.AccountJobForward.createDestination(job)
    }
    
    // 'available' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_WorkOrders.pcf: line 100, column 38
    function available_40 () : java.lang.Boolean {
      return not (job typeis Audit and job.AuditInformation.IsReversal) and job.Viewable
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_WorkOrders.pcf: line 77, column 75
    function useArchivedStyle_56 () : java.lang.Boolean {
      return gw.pcf.ArchiveHelper.getArchivedStyle(job)
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_WorkOrders.pcf: line 81, column 39
    function valueRoot_29 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_WorkOrders.pcf: line 88, column 64
    function valueRoot_35 () : java.lang.Object {
      return job.ResultingBoundPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_WorkOrders.pcf: line 94, column 35
    function valueRoot_38 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_WorkOrders.pcf: line 81, column 39
    function value_28 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_WorkOrders.pcf: line 88, column 64
    function value_34 () : java.lang.String {
      return job.ResultingBoundPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_WorkOrders.pcf: line 94, column 35
    function value_37 () : String {
      return job.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_WorkOrders.pcf: line 100, column 38
    function value_43 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_WorkOrders.pcf: line 105, column 40
    function value_47 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at AccountFile_WorkOrders.pcf: line 110, column 42
    function value_50 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at AccountFile_WorkOrders.pcf: line 114, column 38
    function value_53 () : java.util.Date {
      return job.CloseDate
    }
    
    // 'valueVisible' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_WorkOrders.pcf: line 88, column 64
    function visible_31 () : java.lang.Boolean {
      return job.ResultingBoundPeriod != null
    }
    
    property get job () : entity.Job {
      return getIteratedValue(2) as entity.Job
    }
    
    
  }
  
  
}