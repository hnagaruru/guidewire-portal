package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupDetail_ProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetail_ProducerCodesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetail_ProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetail_ProducerCodesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=Available_Cell) at GroupDetail_ProducerCodesLV.pcf: line 24, column 25
    function sortValue_0 (producerCode :  entity.ProducerCode) : java.lang.Object {
      var avail : boolean = (group.hasProducerCode(producerCode))
return avail
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at GroupDetail_ProducerCodesLV.pcf: line 32, column 38
    function sortValue_1 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Desc_Cell) at GroupDetail_ProducerCodesLV.pcf: line 36, column 45
    function sortValue_2 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at GroupDetail_ProducerCodesLV.pcf: line 41, column 47
    function sortValue_3 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function sortValue_4 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Branch
    }
    
    // 'value' attribute on RowIterator at GroupDetail_ProducerCodesLV.pcf: line 14, column 41
    function value_33 () : entity.ProducerCode[] {
      return group.InheritedProducerCodes
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetail_ProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupDetail_ProducerCodesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at GroupDetail_ProducerCodesLV.pcf: line 32, column 38
    function action_10 () : void {
      AdminProducerCodeDetail.go(producerCode)
    }
    
    // AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function action_21 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function action_23 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function action_26 () : void {
      GroupDetailPage.go(producerCode.Branch)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at GroupDetail_ProducerCodesLV.pcf: line 32, column 38
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(producerCode)
    }
    
    // AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function action_dest_22 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function action_dest_24 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function action_dest_27 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(producerCode.Branch)
    }
    
    // 'available' attribute on AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function available_25 () : java.lang.Boolean {
      return producerCode.Branch != null and producerCode.Branch.GroupType != TC_ROOT
    }
    
    // 'value' attribute on CheckBoxCell (id=Available_Cell) at GroupDetail_ProducerCodesLV.pcf: line 24, column 25
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      avail = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at GroupDetail_ProducerCodesLV.pcf: line 18, column 25
    function initialValue_5 () : boolean {
      return group.hasProducerCode(producerCode)
    }
    
    // RowIterator at GroupDetail_ProducerCodesLV.pcf: line 14, column 41
    function initializeVariables_32 () : void {
        avail = group.hasProducerCode(producerCode);

    }
    
    // 'onChange' attribute on PostOnChange at GroupDetail_ProducerCodesLV.pcf: line 26, column 80
    function onChange_6 () : void {
      group.setProducerCodeAvailability(producerCode, avail)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at GroupDetail_ProducerCodesLV.pcf: line 32, column 38
    function valueRoot_13 () : java.lang.Object {
      return producerCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at GroupDetail_ProducerCodesLV.pcf: line 32, column 38
    function value_12 () : java.lang.String {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Desc_Cell) at GroupDetail_ProducerCodesLV.pcf: line 36, column 45
    function value_15 () : java.lang.String {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at GroupDetail_ProducerCodesLV.pcf: line 41, column 47
    function value_18 () : typekey.ProducerStatus {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at GroupDetail_ProducerCodesLV.pcf: line 47, column 40
    function value_28 () : entity.Group {
      return producerCode.Branch
    }
    
    // 'value' attribute on CheckBoxCell (id=Available_Cell) at GroupDetail_ProducerCodesLV.pcf: line 24, column 25
    function value_7 () : java.lang.Boolean {
      return avail
    }
    
    property get avail () : boolean {
      return getVariableValue("avail", 1) as java.lang.Boolean
    }
    
    property set avail ($arg :  boolean) {
      setVariableValue("avail", 1, $arg)
    }
    
    property get producerCode () : entity.ProducerCode {
      return getIteratedValue(1) as entity.ProducerCode
    }
    
    
  }
  
  
}