package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail_ProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationDetail_ProducerCodesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail_ProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OrganizationDetail_ProducerCodesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function action_18 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function action_20 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function action_23 () : void {
      GroupDetailPage.go(producerCode.Branch)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function action_29 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserCell (id=PreferredUnderwriter_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function action_32 () : void {
      UserDetailPage.go(producerCode.PreferredUnderwriter)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 29, column 38
    function action_7 () : void {
      AdminProducerCodeDetail.go(producerCode)
    }
    
    // AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function action_dest_19 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function action_dest_21 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function action_dest_24 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(producerCode.Branch)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function action_dest_30 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=PreferredUnderwriter_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function action_dest_33 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(producerCode.PreferredUnderwriter)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 29, column 38
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(producerCode)
    }
    
    // 'available' attribute on AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function available_22 () : java.lang.Boolean {
      return producerCode.Branch != null and producerCode.Branch.GroupType != TC_ROOT
    }
    
    // 'available' attribute on AltUserCell (id=PreferredUnderwriter_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function available_31 () : java.lang.Boolean {
      return producerCode.PreferredUnderwriter != null
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_ProducerCodesLV.pcf: line 23, column 25
    function initialValue_6 () : boolean {
      return group.hasProducerCode(producerCode)
    }
    
    // RowIterator at OrganizationDetail_ProducerCodesLV.pcf: line 19, column 41
    function initializeVariables_38 () : void {
        avail = group.hasProducerCode(producerCode);

    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 29, column 38
    function valueRoot_10 () : java.lang.Object {
      return producerCode
    }
    
    // 'value' attribute on TextCell (id=Desc_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 33, column 45
    function value_12 () : java.lang.String {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 38, column 47
    function value_15 () : typekey.ProducerStatus {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function value_25 () : entity.Group {
      return producerCode.Branch
    }
    
    // 'value' attribute on AltUserCell (id=PreferredUnderwriter_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function value_34 () : entity.User {
      return producerCode.PreferredUnderwriter
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 29, column 38
    function value_9 () : java.lang.String {
      return producerCode.Code
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
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail_ProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationDetail_ProducerCodesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_ProducerCodesLV.pcf: line 13, column 21
    function initialValue_0 () : Group {
      return organization.RootGroup
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 29, column 38
    function sortValue_1 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Desc_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 33, column 45
    function sortValue_2 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 38, column 47
    function sortValue_3 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 44, column 40
    function sortValue_4 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Branch
    }
    
    // 'value' attribute on AltUserCell (id=PreferredUnderwriter_Cell) at OrganizationDetail_ProducerCodesLV.pcf: line 50, column 54
    function sortValue_5 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.PreferredUnderwriter
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at OrganizationDetail_ProducerCodesLV.pcf: line 19, column 41
    function toCreateAndAdd_39 () : entity.ProducerCode {
      return group.createAndAttachProducerCode()
    }
    
    // 'value' attribute on RowIterator at OrganizationDetail_ProducerCodesLV.pcf: line 19, column 41
    function value_40 () : entity.ProducerCode[] {
      return group.ProducerCodes
    }
    
    property get group () : Group {
      return getVariableValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 0, $arg)
    }
    
    property get organization () : Organization {
      return getRequireValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setRequireValue("organization", 0, $arg)
    }
    
    
  }
  
  
}