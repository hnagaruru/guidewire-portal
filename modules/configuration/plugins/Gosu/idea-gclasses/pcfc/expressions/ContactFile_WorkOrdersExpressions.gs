package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFile_WorkOrdersExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFile_WorkOrdersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_WorkOrders) at ContactFile_WorkOrders.pcf: line 9, column 74
    function infoBar_onEnter_63 (def :  pcf.ContactFileInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_WorkOrders) at ContactFile_WorkOrders.pcf: line 9, column 74
    function infoBar_refreshVariables_64 (def :  pcf.ContactFileInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactFile_WorkOrders.pcf: line 15, column 61
    function initialValue_0 () : gw.pcf.contacts.ContactFileWorkOrdersUIHelper {
      return new gw.pcf.contacts.ContactFileWorkOrdersUIHelper()
    }
    
    // Page (id=ContactFile_WorkOrders) at ContactFile_WorkOrders.pcf: line 9, column 74
    static function parent_65 (contact :  Contact) : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.ContactFile_WorkOrders {
      return super.CurrentLocation as pcf.ContactFile_WorkOrders
    }
    
    property get UIHelper () : gw.pcf.contacts.ContactFileWorkOrdersUIHelper {
      return getVariableValue("UIHelper", 0) as gw.pcf.contacts.ContactFileWorkOrdersUIHelper
    }
    
    property set UIHelper ($arg :  gw.pcf.contacts.ContactFileWorkOrdersUIHelper) {
      setVariableValue("UIHelper", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_WorkOrders.pcf: line 87, column 80
    function action_32 () : void {
      AccountFileDoRetrievalForward.go(item.SelectedVersion.Policy.Account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_WorkOrders.pcf: line 95, column 73
    function action_37 () : void {
      PolicyFileForward.go(item.SelectedVersion.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at ContactFile_WorkOrders.pcf: line 106, column 41
    function action_46 () : void {
      JobNumberForward.go(item.JobNumber)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_WorkOrders.pcf: line 87, column 80
    function action_dest_33 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(item.SelectedVersion.Policy.Account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_WorkOrders.pcf: line 95, column 73
    function action_dest_38 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(item.SelectedVersion.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at ContactFile_WorkOrders.pcf: line 106, column 41
    function action_dest_47 () : pcf.api.Destination {
      return pcf.JobNumberForward.createDestination(item.JobNumber)
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_WorkOrders.pcf: line 95, column 73
    function available_36 () : java.lang.Boolean {
      return not item?.createsNewPolicy()
    }
    
    // 'label' attribute on Link (id=PolicyAccount) at ContactFile_WorkOrders.pcf: line 87, column 80
    function label_34 () : java.lang.Object {
      return item.SelectedVersion.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'tooltip' attribute on Link (id=PolicyAccount) at ContactFile_WorkOrders.pcf: line 87, column 80
    function tooltip_35 () : java.lang.String {
      return item.SelectedVersion.Policy.Account.AccountNumber
    }
    
    // 'useArchivedStyle' attribute on Row at ContactFile_WorkOrders.pcf: line 75, column 77
    function useArchivedStyle_60 () : java.lang.Boolean {
      return item.LatestPeriod.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at ContactFile_WorkOrders.pcf: line 80, column 42
    function valueRoot_30 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_WorkOrders.pcf: line 95, column 73
    function valueRoot_40 () : java.lang.Object {
      return item.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at ContactFile_WorkOrders.pcf: line 101, column 58
    function valueRoot_44 () : java.lang.Object {
      return item.SelectedVersion.Policy
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at ContactFile_WorkOrders.pcf: line 80, column 42
    function value_29 () : java.util.Date {
      return item.CreateTime
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_WorkOrders.pcf: line 95, column 73
    function value_39 () : java.lang.String {
      return item.SelectedVersion.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at ContactFile_WorkOrders.pcf: line 101, column 58
    function value_43 () : gw.api.productmodel.Product {
      return item.SelectedVersion.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at ContactFile_WorkOrders.pcf: line 106, column 41
    function value_48 () : java.lang.String {
      return item.JobNumber
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at ContactFile_WorkOrders.pcf: line 110, column 43
    function value_51 () : java.lang.String {
      return item.DisplayType
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ContactFile_WorkOrders.pcf: line 116, column 57
    function value_54 () : typekey.PolicyPeriodStatus {
      return item.SelectedVersion.Status
    }
    
    // 'value' attribute on DateCell (id=DateCompleted_Cell) at ContactFile_WorkOrders.pcf: line 121, column 41
    function value_57 () : java.util.Date {
      return item.CloseDate
    }
    
    property get item () : entity.Job {
      return getIteratedValue(2) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_WorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ContactFile_WorkOrdersExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at ContactFile_WorkOrders.pcf: line 51, column 70
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      workOrderTypeChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<typekey.Job>)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=ProductFilter_Input) at ContactFile_WorkOrders.pcf: line 62, column 86
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      productFilterChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<gw.api.productmodel.Product>)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at ContactFile_WorkOrders.pcf: line 40, column 76
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      statusFilterChoice = (__VALUE_TO_SET as gw.api.ui.DisplayedObject<java.lang.Boolean>)
    }
    
    // 'initialValue' attribute on Variable at ContactFile_WorkOrders.pcf: line 23, column 58
    function initialValue_1 () : gw.api.ui.DisplayedObject<Boolean> {
      return UIHelper.getStatusFilterInitialValue()
    }
    
    // 'initialValue' attribute on Variable at ContactFile_WorkOrders.pcf: line 27, column 62
    function initialValue_2 () : gw.api.ui.DisplayedObject<typekey.Job> {
      return UIHelper.getWorkOrderInitialValue()
    }
    
    // 'initialValue' attribute on Variable at ContactFile_WorkOrders.pcf: line 31, column 78
    function initialValue_3 () : gw.api.ui.DisplayedObject<gw.api.productmodel.Product> {
      return UIHelper.getProductFilterInitialValue(contact)
    }
    
    // 'onChange' attribute on PostOnChange at ContactFile_WorkOrders.pcf: line 53, column 91
    function onChange_11 () : void {
      UIHelper.setWorkOrderFilterValue( workOrderTypeChoice.display )
    }
    
    // 'onChange' attribute on PostOnChange at ContactFile_WorkOrders.pcf: line 64, column 89
    function onChange_18 () : void {
      UIHelper.setProductFilterValue( productFilterChoice.display )
    }
    
    // 'onChange' attribute on PostOnChange at ContactFile_WorkOrders.pcf: line 42, column 87
    function onChange_4 () : void {
      UIHelper.setStatusFilterValue( statusFilterChoice.display )
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at ContactFile_WorkOrders.pcf: line 80, column 42
    function sortValue_25 (item :  entity.Job) : java.lang.Object {
      return item.CreateTime
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at ContactFile_WorkOrders.pcf: line 106, column 41
    function sortValue_26 (item :  entity.Job) : java.lang.Object {
      return item.JobNumber
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at ContactFile_WorkOrders.pcf: line 110, column 43
    function sortValue_27 (item :  entity.Job) : java.lang.Object {
      return item.DisplayType
    }
    
    // 'value' attribute on DateCell (id=DateCompleted_Cell) at ContactFile_WorkOrders.pcf: line 121, column 41
    function sortValue_28 (item :  entity.Job) : java.lang.Object {
      return item.CloseDate
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at ContactFile_WorkOrders.pcf: line 51, column 70
    function valueRange_14 () : java.lang.Object {
      return gw.job.JobFilters.JobTypeFilterSet
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at ContactFile_WorkOrders.pcf: line 62, column 86
    function valueRange_21 () : java.lang.Object {
      return gw.job.JobFilters.createProductFilterOptions(contact)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at ContactFile_WorkOrders.pcf: line 40, column 76
    function valueRange_7 () : java.lang.Object {
      return gw.job.JobFilters.StatusFilterSet
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at ContactFile_WorkOrders.pcf: line 51, column 70
    function value_12 () : gw.api.ui.DisplayedObject<typekey.Job> {
      return workOrderTypeChoice
    }
    
    // 'value' attribute on ToolbarRangeInput (id=ProductFilter_Input) at ContactFile_WorkOrders.pcf: line 62, column 86
    function value_19 () : gw.api.ui.DisplayedObject<gw.api.productmodel.Product> {
      return productFilterChoice
    }
    
    // 'value' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at ContactFile_WorkOrders.pcf: line 40, column 76
    function value_5 () : gw.api.ui.DisplayedObject<java.lang.Boolean> {
      return statusFilterChoice
    }
    
    // 'value' attribute on RowIterator at ContactFile_WorkOrders.pcf: line 73, column 38
    function value_61 () : entity.Job[] {
      return contact.AssociationFinder.findWorkOrders(statusFilterChoice.value, workOrderTypeChoice.value, productFilterChoice.value, User.util.CurrentUser)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at ContactFile_WorkOrders.pcf: line 51, column 70
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.ui.DisplayedObject<typekey.Job>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at ContactFile_WorkOrders.pcf: line 51, column 70
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at ContactFile_WorkOrders.pcf: line 62, column 86
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.ui.DisplayedObject<gw.api.productmodel.Product>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at ContactFile_WorkOrders.pcf: line 62, column 86
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at ContactFile_WorkOrders.pcf: line 40, column 76
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.ui.DisplayedObject<java.lang.Boolean>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at ContactFile_WorkOrders.pcf: line 40, column 76
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrderTypeFilter_Input) at ContactFile_WorkOrders.pcf: line 51, column 70
    function verifyValueRange_16 () : void {
      var __valueRangeArg = gw.job.JobFilters.JobTypeFilterSet
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ProductFilter_Input) at ContactFile_WorkOrders.pcf: line 62, column 86
    function verifyValueRange_23 () : void {
      var __valueRangeArg = gw.job.JobFilters.createProductFilterOptions(contact)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=WorkOrdersCompletenessFilter_Input) at ContactFile_WorkOrders.pcf: line 40, column 76
    function verifyValueRange_9 () : void {
      var __valueRangeArg = gw.job.JobFilters.StatusFilterSet
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on DetailViewPanel at ContactFile_WorkOrders.pcf: line 127, column 69
    function visible_62 () : java.lang.Boolean {
      return gw.api.archive.PCArchivingUtil.isArchiveEnabled()
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
  
  
}