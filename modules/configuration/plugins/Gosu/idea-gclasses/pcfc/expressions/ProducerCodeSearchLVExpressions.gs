package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeSearchLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducerCodeSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Branch_Cell) at ProducerCodeSearchLV.pcf: line 56, column 25
    function action_26 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Branch_Cell) at ProducerCodeSearchLV.pcf: line 56, column 25
    function action_28 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at ProducerCodeSearchLV.pcf: line 63, column 25
    function action_34 () : void {
      AdminProducerCodeDetail.go(producerCode.Parent)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeSearchLV.pcf: line 71, column 25
    function action_40 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function action_43 () : void {
      UserDetailPage.go(producerCode.PreferredUnderwriter)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at ProducerCodeSearchLV.pcf: line 27, column 25
    function action_9 () : void {
      AdminProducerCodeDetail.go(producerCode)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at ProducerCodeSearchLV.pcf: line 27, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(producerCode)
    }
    
    // AltGroupCell (id=Branch_Cell) at ProducerCodeSearchLV.pcf: line 56, column 25
    function action_dest_27 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Branch_Cell) at ProducerCodeSearchLV.pcf: line 56, column 25
    function action_dest_29 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at ProducerCodeSearchLV.pcf: line 63, column 25
    function action_dest_35 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(producerCode.Parent)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeSearchLV.pcf: line 71, column 25
    function action_dest_41 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function action_dest_44 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(producerCode.PreferredUnderwriter)
    }
    
    // 'available' attribute on TextCell (id=Parent_Cell) at ProducerCodeSearchLV.pcf: line 63, column 25
    function available_33 () : java.lang.Boolean {
      return producerCode.Parent != null
    }
    
    // 'available' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function available_42 () : java.lang.Boolean {
      return producerCode.PreferredUnderwriter != null
    }
    
    // 'pickValue' attribute on RowIterator at ProducerCodeSearchLV.pcf: line 20, column 79
    function pickValue_50 () : ProducerCode {
      return producerCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducerCodeSearchLV.pcf: line 27, column 25
    function valueRoot_12 () : java.lang.Object {
      return producerCode
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at ProducerCodeSearchLV.pcf: line 51, column 25
    function valueRoot_24 () : java.lang.Object {
      return producerCode.Branch
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at ProducerCodeSearchLV.pcf: line 63, column 25
    function valueRoot_37 () : java.lang.Object {
      return producerCode.Parent
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducerCodeSearchLV.pcf: line 27, column 25
    function value_11 () : java.lang.String {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ProducerCodeSearchLV.pcf: line 33, column 24
    function value_14 () : java.lang.String {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ProducerCodeSearchLV.pcf: line 39, column 25
    function value_17 () : typekey.ProducerStatus {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on TextCell (id=Org_Cell) at ProducerCodeSearchLV.pcf: line 46, column 24
    function value_20 () : entity.Organization {
      return producerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at ProducerCodeSearchLV.pcf: line 51, column 25
    function value_23 () : java.lang.String {
      return producerCode.Branch.BranchCode
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at ProducerCodeSearchLV.pcf: line 56, column 25
    function value_30 () : entity.Group {
      return producerCode.Branch
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at ProducerCodeSearchLV.pcf: line 63, column 25
    function value_36 () : java.lang.String {
      return producerCode.Parent.Code
    }
    
    // 'value' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function value_45 () : entity.User {
      return producerCode.PreferredUnderwriter
    }
    
    // 'visible' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function visible_48 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw
    }
    
    property get producerCode () : entity.ProducerCode {
      return getIteratedValue(1) as entity.ProducerCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducerCodeSearchLV.pcf: line 27, column 25
    function sortValue_0 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ProducerCodeSearchLV.pcf: line 33, column 24
    function sortValue_1 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ProducerCodeSearchLV.pcf: line 39, column 25
    function sortValue_2 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on TextCell (id=Org_Cell) at ProducerCodeSearchLV.pcf: line 46, column 24
    function sortValue_3 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at ProducerCodeSearchLV.pcf: line 51, column 25
    function sortValue_4 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Branch.BranchCode
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at ProducerCodeSearchLV.pcf: line 56, column 25
    function sortValue_5 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Branch
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at ProducerCodeSearchLV.pcf: line 63, column 25
    function sortValue_6 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Parent.Code
    }
    
    // 'value' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function sortValue_7 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.PreferredUnderwriter
    }
    
    // 'value' attribute on RowIterator at ProducerCodeSearchLV.pcf: line 20, column 79
    function value_51 () : gw.api.database.IQueryBeanResult<entity.ProducerCode> {
      return producerCodes
    }
    
    // 'visible' attribute on AltUserCell (id=PrefUW_Cell) at ProducerCodeSearchLV.pcf: line 71, column 25
    function visible_8 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw
    }
    
    property get carrier () : Organization {
      return getRequireValue("carrier", 0) as Organization
    }
    
    property set carrier ($arg :  Organization) {
      setRequireValue("carrier", 0, $arg)
    }
    
    property get producerCodes () : gw.api.database.IQueryBeanResult<ProducerCode> {
      return getRequireValue("producerCodes", 0) as gw.api.database.IQueryBeanResult<ProducerCode>
    }
    
    property set producerCodes ($arg :  gw.api.database.IQueryBeanResult<ProducerCode>) {
      setRequireValue("producerCodes", 0, $arg)
    }
    
    
  }
  
  
}