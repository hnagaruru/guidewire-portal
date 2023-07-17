package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminProducerCodeSearchLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminProducerCodeSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at AdminProducerCodeSearchLV.pcf: line 34, column 25
    function sortValue_0 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AdminProducerCodeSearchLV.pcf: line 40, column 24
    function sortValue_1 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at AdminProducerCodeSearchLV.pcf: line 46, column 25
    function sortValue_2 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on TextCell (id=Org_Cell) at AdminProducerCodeSearchLV.pcf: line 53, column 25
    function sortValue_3 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at AdminProducerCodeSearchLV.pcf: line 58, column 25
    function sortValue_4 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Branch.BranchCode
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function sortValue_5 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Branch
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at AdminProducerCodeSearchLV.pcf: line 72, column 25
    function sortValue_6 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.Parent.Code
    }
    
    // 'value' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function sortValue_7 (producerCode :  entity.ProducerCode) : java.lang.Object {
      return producerCode.PreferredUnderwriter
    }
    
    // 'value' attribute on RowIterator at AdminProducerCodeSearchLV.pcf: line 27, column 79
    function value_58 () : gw.api.database.IQueryBeanResult<entity.ProducerCode> {
      return producerCodes
    }
    
    // 'visible' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function visible_8 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw
    }
    
    property get carrier () : Organization {
      return getRequireValue("carrier", 0) as Organization
    }
    
    property set carrier ($arg :  Organization) {
      setRequireValue("carrier", 0, $arg)
    }
    
    property get filter () : java.util.Set {
      return getRequireValue("filter", 0) as java.util.Set
    }
    
    property set filter ($arg :  java.util.Set) {
      setRequireValue("filter", 0, $arg)
    }
    
    property get havingRoles () : boolean {
      return getRequireValue("havingRoles", 0) as java.lang.Boolean
    }
    
    property set havingRoles ($arg :  boolean) {
      setRequireValue("havingRoles", 0, $arg)
    }
    
    property get producerCodes () : gw.api.database.IQueryBeanResult<ProducerCode> {
      return getRequireValue("producerCodes", 0) as gw.api.database.IQueryBeanResult<ProducerCode>
    }
    
    property set producerCodes ($arg :  gw.api.database.IQueryBeanResult<ProducerCode>) {
      setRequireValue("producerCodes", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdminProducerCodeSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Org_Cell) at AdminProducerCodeSearchLV.pcf: line 53, column 25
    function action_20 () : void {
      OrganizationDetail.go(producerCode.Organization)
    }
    
    // AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function action_28 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function action_30 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function action_33 () : void {
      GroupDetailPage.go(producerCode.Branch)
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at AdminProducerCodeSearchLV.pcf: line 72, column 25
    function action_40 () : void {
      AdminProducerCodeDetail.go(producerCode.Parent)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function action_46 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function action_49 () : void {
      UserDetailPage.go(producerCode.PreferredUnderwriter)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at AdminProducerCodeSearchLV.pcf: line 34, column 25
    function action_9 () : void {
      AdminProducerCodeDetail.go(producerCode)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at AdminProducerCodeSearchLV.pcf: line 34, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(producerCode)
    }
    
    // 'action' attribute on TextCell (id=Org_Cell) at AdminProducerCodeSearchLV.pcf: line 53, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(producerCode.Organization)
    }
    
    // AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function action_dest_29 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function action_dest_31 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function action_dest_34 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(producerCode.Branch)
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at AdminProducerCodeSearchLV.pcf: line 72, column 25
    function action_dest_41 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(producerCode.Parent)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function action_dest_47 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function action_dest_50 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(producerCode.PreferredUnderwriter)
    }
    
    // 'available' attribute on AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function available_32 () : java.lang.Boolean {
      return producerCode.Branch != null and producerCode.Branch.GroupType != TC_ROOT
    }
    
    // 'available' attribute on TextCell (id=Parent_Cell) at AdminProducerCodeSearchLV.pcf: line 72, column 25
    function available_39 () : java.lang.Boolean {
      return producerCode.Parent != null
    }
    
    // 'available' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function available_48 () : java.lang.Boolean {
      return producerCode.PreferredUnderwriter != null
    }
    
    // 'canPick' attribute on RowIterator at AdminProducerCodeSearchLV.pcf: line 27, column 79
    function canPick_56 () : java.lang.Boolean {
      return !filter.contains(producerCode) and (!havingRoles or producerCode.ProducerCodeRoles.Count != 0)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at AdminProducerCodeSearchLV.pcf: line 34, column 25
    function valueRoot_12 () : java.lang.Object {
      return producerCode
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at AdminProducerCodeSearchLV.pcf: line 58, column 25
    function valueRoot_26 () : java.lang.Object {
      return producerCode.Branch
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at AdminProducerCodeSearchLV.pcf: line 72, column 25
    function valueRoot_43 () : java.lang.Object {
      return producerCode.Parent
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at AdminProducerCodeSearchLV.pcf: line 34, column 25
    function value_11 () : java.lang.String {
      return producerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AdminProducerCodeSearchLV.pcf: line 40, column 24
    function value_14 () : java.lang.String {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at AdminProducerCodeSearchLV.pcf: line 46, column 25
    function value_17 () : typekey.ProducerStatus {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on TextCell (id=Org_Cell) at AdminProducerCodeSearchLV.pcf: line 53, column 25
    function value_22 () : entity.Organization {
      return producerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at AdminProducerCodeSearchLV.pcf: line 58, column 25
    function value_25 () : java.lang.String {
      return producerCode.Branch.BranchCode
    }
    
    // 'value' attribute on AltGroupCell (id=Branch_Cell) at AdminProducerCodeSearchLV.pcf: line 65, column 25
    function value_35 () : entity.Group {
      return producerCode.Branch
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at AdminProducerCodeSearchLV.pcf: line 72, column 25
    function value_42 () : java.lang.String {
      return producerCode.Parent.Code
    }
    
    // 'value' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function value_51 () : entity.User {
      return producerCode.PreferredUnderwriter
    }
    
    // 'visible' attribute on AltUserCell (id=PrefUW_Cell) at AdminProducerCodeSearchLV.pcf: line 81, column 24
    function visible_54 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw
    }
    
    property get producerCode () : entity.ProducerCode {
      return getIteratedValue(1) as entity.ProducerCode
    }
    
    
  }
  
  
}