package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopSubmissionsLV_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopSubmissionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopSubmissionsLV.federated.pcf: line 27, column 93
    function filter_2 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.data.submission.IssuanceDataFilters.openIssuance()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.federated.pcf: line 24, column 79
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.activityFilters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.federated.pcf: line 30, column 66
    function filters_3 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopSubmissionsLV.federated.pcf: line 13, column 72
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.submission.SubmissionFederatedData()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopSubmissionsLV.federated.pcf: line 34, column 24
    function sortBy_5 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.federated.pcf: line 42, column 43
    function sortValue_6 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.federated.pcf: line 48, column 25
    function sortValue_7 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.federated.pcf: line 60, column 25
    function sortValue_8 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopSubmissionsLV.federated.pcf: line 84, column 25
    function sortValue_9 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopSubmissionsLV.federated.pcf: line 20, column 76
    function value_50 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedDataSubmissions
    }
    
    // 'valueType' attribute on RowIterator at DesktopSubmissionsLV.federated.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopSubmissionsLV.federated.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopSubmissionsLV.federated.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopSubmissionsLV.federated.pcf: line 20, column 76
    function verifyValueType_52 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_51(__valueTypeArg)
    }
    
    // 'visible' attribute on TextCell (id=Producer_Cell) at DesktopSubmissionsLV.federated.pcf: line 92, column 67
    function visible_10 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.federated.pcf: line 30, column 66
    function visible_4 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get federatedDataSubmissions () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return getVariableValue("federatedDataSubmissions", 0) as gw.api.web.desktop.data.FederatedDataIteratorBackingData
    }
    
    property set federatedDataSubmissions ($arg :  gw.api.web.desktop.data.FederatedDataIteratorBackingData) {
      setVariableValue("federatedDataSubmissions", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopSubmissionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.federated.pcf: line 42, column 43
    function action_13 () : void {
      FederatedJobForward.push(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.federated.pcf: line 60, column 25
    function action_25 () : void {
      FederatedJobForward.push(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.federated.pcf: line 42, column 43
    function action_dest_14 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.federated.pcf: line 60, column 25
    function action_dest_26 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'available' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.federated.pcf: line 42, column 43
    function available_12 () : java.lang.Boolean {
      return submission.Viewable
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.federated.pcf: line 42, column 43
    function valueRoot_16 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.federated.pcf: line 42, column 43
    function value_15 () : java.lang.String {
      return submission.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.federated.pcf: line 48, column 25
    function value_19 () : java.util.Date {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at DesktopSubmissionsLV.federated.pcf: line 54, column 25
    function value_22 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.federated.pcf: line 60, column 25
    function value_27 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopSubmissionsLV.federated.pcf: line 66, column 25
    function value_30 () : java.lang.String {
      return submission.DisplayType
    }
    
    // 'value' attribute on TextCell (id=SubmissionStatus_Cell) at DesktopSubmissionsLV.federated.pcf: line 72, column 25
    function value_33 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on BooleanRadioCell (id=Issued_Cell) at DesktopSubmissionsLV.federated.pcf: line 78, column 25
    function value_36 () : java.lang.Boolean {
      return submission.PolicyIssued
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopSubmissionsLV.federated.pcf: line 84, column 25
    function value_39 () : java.lang.String {
      return submission.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at DesktopSubmissionsLV.federated.pcf: line 92, column 67
    function value_42 () : java.lang.String {
      return submission.ProducerDisplayName
    }
    
    // 'value' attribute on TextCell (id=Underwriter_Cell) at DesktopSubmissionsLV.federated.pcf: line 100, column 66
    function value_46 () : java.lang.String {
      return submission.UnderwriterDisplayName
    }
    
    // 'visible' attribute on TextCell (id=Producer_Cell) at DesktopSubmissionsLV.federated.pcf: line 92, column 67
    function visible_44 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on TextCell (id=Underwriter_Cell) at DesktopSubmissionsLV.federated.pcf: line 100, column 66
    function visible_48 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get submission () : gw.api.web.desktop.data.submission.SubmissionDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.submission.SubmissionDTO
    }
    
    
  }
  
  
}