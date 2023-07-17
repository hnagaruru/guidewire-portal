package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedChangeRequestsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedChangeRequestsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedChangeRequestsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedChangeRequestsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedChangeRequestsListViewTile) at FederatedChangeRequestsListViewTile.pcf: line 11, column 56
    function action_53 () : void {
      DesktopOtherWorkOrders.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedChangeRequestsListViewTile) at FederatedChangeRequestsListViewTile.pcf: line 11, column 56
    function action_dest_54 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedChangeRequestsListViewTile.pcf: line 24, column 79
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.activityFilters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedChangeRequestsListViewTile.pcf: line 27, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedChangeRequestsListViewTile.pcf: line 31, column 24
    function sortBy_3 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 71, column 25
    function sortValue_10 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.PolicyNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedChangeRequestsListViewTile.pcf: line 83, column 38
    function sortValue_11 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedChangeRequestsListViewTile.pcf: line 89, column 41
    function sortValue_12 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.ProducerDisplayName
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 39, column 25
    function sortValue_4 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at FederatedChangeRequestsListViewTile.pcf: line 46, column 25
    function sortValue_5 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedChangeRequestsListViewTile.pcf: line 52, column 36
    function sortValue_6 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedChangeRequestsListViewTile.pcf: line 57, column 25
    function sortValue_7 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedChangeRequestsListViewTile.pcf: line 64, column 25
    function sortValue_8 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedChangeRequestsListViewTile.pcf: line 64, column 25
    function sortValue_9 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return  job.StatusCode
    }
    
    // 'value' attribute on RowIterator at FederatedChangeRequestsListViewTile.pcf: line 20, column 76
    function value_50 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersFederatedData(typekey.Job.TC_POLICYCHANGE)
    }
    
    // 'valueType' attribute on RowIterator at FederatedChangeRequestsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedChangeRequestsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedChangeRequestsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedChangeRequestsListViewTile.pcf: line 20, column 76
    function verifyValueType_52 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_51(__valueTypeArg)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at FederatedChangeRequestsListViewTile.pcf: line 27, column 66
    function visible_2 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedChangeRequestsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedChangeRequestsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 39, column 25
    function action_14 () : void {
      FederatedJobForward.push(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at FederatedChangeRequestsListViewTile.pcf: line 46, column 25
    function action_21 () : void {
      FederatedJobForward.push(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at FederatedChangeRequestsListViewTile.pcf: line 52, column 36
    function action_27 () : void {
      FederatedContactForward.push(job.AccountPublicId, job.ContactPublicId)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 71, column 25
    function action_37 () : void {
      FederatedPolicyForward.push(job.PolicyPublicId, job.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 39, column 25
    function action_dest_15 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at FederatedChangeRequestsListViewTile.pcf: line 46, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at FederatedChangeRequestsListViewTile.pcf: line 52, column 36
    function action_dest_28 () : pcf.api.Destination {
      return pcf.FederatedContactForward.createDestination(job.AccountPublicId, job.ContactPublicId)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 71, column 25
    function action_dest_38 () : pcf.api.Destination {
      return pcf.FederatedPolicyForward.createDestination(job.PolicyPublicId, job.PolicyNumber)
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 39, column 25
    function available_13 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 39, column 25
    function valueRoot_17 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 39, column 25
    function value_16 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at FederatedChangeRequestsListViewTile.pcf: line 46, column 25
    function value_23 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedChangeRequestsListViewTile.pcf: line 52, column 36
    function value_29 () : java.lang.String {
      return job.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedChangeRequestsListViewTile.pcf: line 57, column 25
    function value_32 () : java.util.Date {
      return job.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedChangeRequestsListViewTile.pcf: line 64, column 25
    function value_35 () : typekey.PolicyPeriodStatus {
      return typekey.PolicyPeriodStatus.get(job.StatusCode)
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at FederatedChangeRequestsListViewTile.pcf: line 71, column 25
    function value_39 () : String {
      return job.PolicyNumber
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at FederatedChangeRequestsListViewTile.pcf: line 77, column 25
    function value_42 () : gw.pl.currency.MonetaryAmount {
      return job.TotalPremiumRPT?.to()
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedChangeRequestsListViewTile.pcf: line 83, column 38
    function value_44 () : java.lang.String {
      return job.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedChangeRequestsListViewTile.pcf: line 89, column 41
    function value_47 () : java.lang.String {
      return job.ProducerDisplayName
    }
    
    property get job () : gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO
    }
    
    
  }
  
  
}