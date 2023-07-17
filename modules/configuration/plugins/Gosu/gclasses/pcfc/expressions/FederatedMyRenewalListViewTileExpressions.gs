package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedMyRenewalListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedMyRenewalListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMyRenewalListViewTile) at FederatedMyRenewalListViewTile.pcf: line 11, column 56
    function action_41 () : void {
      DesktopRenewals.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMyRenewalListViewTile) at FederatedMyRenewalListViewTile.pcf: line 11, column 56
    function action_dest_42 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedMyRenewalListViewTile.pcf: line 24, column 79
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.activityFilters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedMyRenewalListViewTile.pcf: line 27, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMyRenewalListViewTile.pcf: line 31, column 24
    function sortBy_3 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedMyRenewalListViewTile.pcf: line 76, column 41
    function sortValue_10 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.ProducerDisplayName
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedMyRenewalListViewTile.pcf: line 39, column 25
    function sortValue_4 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedMyRenewalListViewTile.pcf: line 45, column 40
    function sortValue_5 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedMyRenewalListViewTile.pcf: line 50, column 25
    function sortValue_6 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyRenewalListViewTile.pcf: line 57, column 25
    function sortValue_7 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyRenewalListViewTile.pcf: line 57, column 25
    function sortValue_8 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return  renewal.StatusCode
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedMyRenewalListViewTile.pcf: line 70, column 42
    function sortValue_9 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator at FederatedMyRenewalListViewTile.pcf: line 20, column 76
    function value_38 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.renewal.RenewalFederatedData()
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyRenewalListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_39 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyRenewalListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_39 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyRenewalListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyRenewalListViewTile.pcf: line 20, column 76
    function verifyValueType_40 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_39(__valueTypeArg)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at FederatedMyRenewalListViewTile.pcf: line 27, column 66
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
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedMyRenewalListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at FederatedMyRenewalListViewTile.pcf: line 39, column 25
    function action_12 () : void {
      FederatedJobForward.push(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at FederatedMyRenewalListViewTile.pcf: line 45, column 40
    function action_18 () : void {
      FederatedContactForward.push(renewal.AccountPublicId, renewal.ContactPublicId)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at FederatedMyRenewalListViewTile.pcf: line 39, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at FederatedMyRenewalListViewTile.pcf: line 45, column 40
    function action_dest_19 () : pcf.api.Destination {
      return pcf.FederatedContactForward.createDestination(renewal.AccountPublicId, renewal.ContactPublicId)
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at FederatedMyRenewalListViewTile.pcf: line 39, column 25
    function available_11 () : java.lang.Boolean {
      return renewal.Viewable
    }
    
    // 'available' attribute on TextCell (id=Product_Cell) at FederatedMyRenewalListViewTile.pcf: line 70, column 42
    function available_30 () : java.lang.Boolean {
      return gw.api.web.desktop.data.FederatedJobPermissionHandler.canViewJob(User.util.getCurrentUser(), renewal, SystemPermissionType.TC_VIEWRENEWAL)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedMyRenewalListViewTile.pcf: line 39, column 25
    function valueRoot_15 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedMyRenewalListViewTile.pcf: line 39, column 25
    function value_14 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedMyRenewalListViewTile.pcf: line 45, column 40
    function value_20 () : java.lang.String {
      return renewal.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedMyRenewalListViewTile.pcf: line 50, column 25
    function value_23 () : java.util.Date {
      return renewal.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyRenewalListViewTile.pcf: line 57, column 25
    function value_26 () : typekey.PolicyPeriodStatus {
      return typekey.PolicyPeriodStatus.get(renewal.StatusCode)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at FederatedMyRenewalListViewTile.pcf: line 63, column 25
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return renewal.TotalPremiumRPT.to()
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedMyRenewalListViewTile.pcf: line 70, column 42
    function value_31 () : java.lang.String {
      return renewal.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedMyRenewalListViewTile.pcf: line 76, column 41
    function value_35 () : java.lang.String {
      return renewal.ProducerDisplayName
    }
    
    property get renewal () : gw.api.web.desktop.data.renewal.RenewalDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.renewal.RenewalDTO
    }
    
    
  }
  
  
}