package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopRenewalsLV_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopRenewalsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.federated.pcf: line 23, column 79
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.activityFilters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.federated.pcf: line 26, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.JobDataFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopRenewalsLV.federated.pcf: line 12, column 72
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.renewal.RenewalFederatedData()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopRenewalsLV.federated.pcf: line 30, column 24
    function sortBy_4 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.federated.pcf: line 36, column 40
    function sortValue_5 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.federated.pcf: line 42, column 25
    function sortValue_6 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.federated.pcf: line 64, column 25
    function sortValue_7 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopRenewalsLV.federated.pcf: line 19, column 76
    function value_41 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedDataRenewals
    }
    
    // 'valueType' attribute on RowIterator at DesktopRenewalsLV.federated.pcf: line 19, column 76
    function verifyValueTypeIsAllowedType_42 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopRenewalsLV.federated.pcf: line 19, column 76
    function verifyValueTypeIsAllowedType_42 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopRenewalsLV.federated.pcf: line 19, column 76
    function verifyValueTypeIsAllowedType_42 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopRenewalsLV.federated.pcf: line 19, column 76
    function verifyValueType_43 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_42(__valueTypeArg)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.federated.pcf: line 26, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on TextCell (id=Producer_Cell) at DesktopRenewalsLV.federated.pcf: line 72, column 67
    function visible_8 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get federatedDataRenewals () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return getVariableValue("federatedDataRenewals", 0) as gw.api.web.desktop.data.FederatedDataIteratorBackingData
    }
    
    property set federatedDataRenewals ($arg :  gw.api.web.desktop.data.FederatedDataIteratorBackingData) {
      setVariableValue("federatedDataRenewals", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopRenewalsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.federated.pcf: line 50, column 25
    function action_17 () : void {
      FederatedJobForward.push(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.federated.pcf: line 64, column 25
    function action_27 () : void {
      FederatedJobForward.push(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.federated.pcf: line 50, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.federated.pcf: line 64, column 25
    function action_dest_28 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.federated.pcf: line 50, column 25
    function available_16 () : java.lang.Boolean {
      return renewal.Viewable
    }
    
    // 'available' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.federated.pcf: line 64, column 25
    function available_26 () : java.lang.Boolean {
      return gw.api.web.desktop.data.FederatedJobPermissionHandler.canViewJob(User.util.getCurrentUser(), renewal, SystemPermissionType.TC_VIEWRENEWAL)
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.federated.pcf: line 36, column 40
    function valueRoot_11 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.federated.pcf: line 36, column 40
    function value_10 () : java.lang.String {
      return renewal.ContactName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.federated.pcf: line 42, column 25
    function value_13 () : java.util.Date {
      return renewal.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.federated.pcf: line 50, column 25
    function value_19 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at DesktopRenewalsLV.federated.pcf: line 56, column 25
    function value_23 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.federated.pcf: line 64, column 25
    function value_29 () : java.lang.String {
      return renewal.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at DesktopRenewalsLV.federated.pcf: line 72, column 67
    function value_33 () : java.lang.String {
      return renewal.ProducerDisplayName
    }
    
    // 'value' attribute on TextCell (id=Underwriter_Cell) at DesktopRenewalsLV.federated.pcf: line 80, column 66
    function value_37 () : java.lang.String {
      return renewal.UnderwriterDisplayName
    }
    
    // 'visible' attribute on TextCell (id=Producer_Cell) at DesktopRenewalsLV.federated.pcf: line 72, column 67
    function visible_35 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on TextCell (id=Underwriter_Cell) at DesktopRenewalsLV.federated.pcf: line 80, column 66
    function visible_39 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get renewal () : gw.api.web.desktop.data.renewal.RenewalDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.renewal.RenewalDTO
    }
    
    
  }
  
  
}