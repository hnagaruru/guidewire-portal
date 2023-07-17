package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedMySubmissionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedMySubmissionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMySubmissionsListViewTile) at FederatedMySubmissionsListViewTile.pcf: line 11, column 56
    function action_42 () : void {
      DesktopSubmissions.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMySubmissionsListViewTile) at FederatedMySubmissionsListViewTile.pcf: line 11, column 56
    function action_dest_43 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'filter' attribute on ToolbarFilterOption at FederatedMySubmissionsListViewTile.pcf: line 27, column 93
    function filter_1 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.data.submission.IssuanceDataFilters.openIssuance()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedMySubmissionsListViewTile.pcf: line 24, column 79
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.activityFilters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedMySubmissionsListViewTile.pcf: line 30, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMySubmissionsListViewTile.pcf: line 34, column 24
    function sortBy_4 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at FederatedMySubmissionsListViewTile.pcf: line 65, column 25
    function sortValue_10 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.DateQuoteNeeded
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedMySubmissionsListViewTile.pcf: line 77, column 45
    function sortValue_11 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedMySubmissionsListViewTile.pcf: line 83, column 41
    function sortValue_12 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.ProducerDisplayName
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 41, column 25
    function sortValue_5 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 47, column 43
    function sortValue_6 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedMySubmissionsListViewTile.pcf: line 53, column 25
    function sortValue_7 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedMySubmissionsListViewTile.pcf: line 60, column 25
    function sortValue_8 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.StatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at FederatedMySubmissionsListViewTile.pcf: line 60, column 25
    function sortValue_9 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return  submission.StatusPriority
    }
    
    // 'value' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function value_39 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.submission.SubmissionFederatedData()
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_40 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_40 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueType_41 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_40(__valueTypeArg)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at FederatedMySubmissionsListViewTile.pcf: line 30, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedMySubmissionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 41, column 25
    function action_13 () : void {
      FederatedJobForward.push(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 47, column 43
    function action_18 () : void {
      FederatedContactForward.push(submission.AccountPublicId, submission.ContactPublicId)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 41, column 25
    function action_dest_14 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 47, column 43
    function action_dest_19 () : pcf.api.Destination {
      return pcf.FederatedContactForward.createDestination(submission.AccountPublicId, submission.ContactPublicId)
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 41, column 25
    function valueRoot_16 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 41, column 25
    function value_15 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 47, column 43
    function value_20 () : java.lang.String {
      return submission.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedMySubmissionsListViewTile.pcf: line 53, column 25
    function value_23 () : java.util.Date {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMySubmissionsListViewTile.pcf: line 60, column 25
    function value_26 () : typekey.PolicyPeriodStatus {
      return typekey.PolicyPeriodStatus.get(submission.StatusCode)
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at FederatedMySubmissionsListViewTile.pcf: line 65, column 25
    function value_28 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at FederatedMySubmissionsListViewTile.pcf: line 71, column 25
    function value_31 () : gw.pl.currency.MonetaryAmount {
      return submission.TotalPremiumRPT?.to()
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedMySubmissionsListViewTile.pcf: line 77, column 45
    function value_33 () : java.lang.String {
      return submission.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedMySubmissionsListViewTile.pcf: line 83, column 41
    function value_36 () : java.lang.String {
      return submission.ProducerDisplayName
    }
    
    property get submission () : gw.api.web.desktop.data.submission.SubmissionDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.submission.SubmissionDTO
    }
    
    
  }
  
  
}