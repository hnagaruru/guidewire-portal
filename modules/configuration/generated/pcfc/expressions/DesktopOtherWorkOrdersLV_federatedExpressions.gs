package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopOtherWorkOrdersLV_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopOtherWorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.federated.pcf: line 25, column 79
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.activityFilters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.federated.pcf: line 28, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopOtherWorkOrdersLV.federated.pcf: line 14, column 72
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersFederatedData()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopOtherWorkOrdersLV.federated.pcf: line 32, column 24
    function sortBy_4 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 46, column 36
    function sortValue_5 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 52, column 25
    function sortValue_6 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 59, column 25
    function sortValue_7 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 71, column 25
    function sortValue_8 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopOtherWorkOrdersLV.federated.pcf: line 21, column 76
    function value_45 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedWorkOrders
    }
    
    // 'valueType' attribute on RowIterator at DesktopOtherWorkOrdersLV.federated.pcf: line 21, column 76
    function verifyValueTypeIsAllowedType_46 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopOtherWorkOrdersLV.federated.pcf: line 21, column 76
    function verifyValueTypeIsAllowedType_46 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopOtherWorkOrdersLV.federated.pcf: line 21, column 76
    function verifyValueTypeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopOtherWorkOrdersLV.federated.pcf: line 21, column 76
    function verifyValueType_47 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_46(__valueTypeArg)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.federated.pcf: line 28, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on TextCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 79, column 67
    function visible_9 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get federatedWorkOrders () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return getVariableValue("federatedWorkOrders", 0) as gw.api.web.desktop.data.FederatedDataIteratorBackingData
    }
    
    property set federatedWorkOrders ($arg :  gw.api.web.desktop.data.FederatedDataIteratorBackingData) {
      setVariableValue("federatedWorkOrders", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopOtherWorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 41, column 25
    function action_12 () : void {
      FederatedJobForward.push(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 59, column 25
    function action_25 () : void {
      FederatedJobForward.push(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 41, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 59, column 25
    function action_dest_26 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(job.JobNumber, job.AccountPublicId)
    }
    
    // 'available' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 41, column 25
    function available_11 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 41, column 25
    function valueRoot_15 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 41, column 25
    function value_14 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 46, column 36
    function value_18 () : java.lang.String {
      return job.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 52, column 25
    function value_21 () : java.util.Date {
      return job.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 59, column 25
    function value_27 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 65, column 25
    function value_31 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 71, column 25
    function value_34 () : java.lang.String {
      return job.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 79, column 67
    function value_37 () : java.lang.String {
      return job.ProducerDisplayName
    }
    
    // 'value' attribute on TextCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 86, column 66
    function value_41 () : java.lang.String {
      return job.UnderwriterDisplayName
    }
    
    // 'visible' attribute on TextCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 79, column 67
    function visible_39 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on TextCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.federated.pcf: line 86, column 66
    function visible_43 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get job () : gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO
    }
    
    
  }
  
  
}