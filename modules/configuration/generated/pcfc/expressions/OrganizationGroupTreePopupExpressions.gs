package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/organizationselect/OrganizationGroupTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationGroupTreePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/organizationselect/OrganizationGroupTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationGroupTreePopup2ExpressionsImpl extends OrganizationGroupTreePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at OrganizationGroupTreePopup.pcf: line 55, column 52
    function initialValue_7 () : gw.api.admin.GroupPickerTreeNode {
      return gw.api.admin.GroupPickerTreeNode.createNode(organizationSelection.Organization)
    }
    
    property get rootGroup () : gw.api.admin.GroupPickerTreeNode {
      return getVariableValue("rootGroup", 1) as gw.api.admin.GroupPickerTreeNode
    }
    
    property set rootGroup ($arg :  gw.api.admin.GroupPickerTreeNode) {
      setVariableValue("rootGroup", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/organizationselect/OrganizationGroupTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationGroupTreePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (organizationSelection :  OrganizationSelection) : int {
      return 1
    }
    
    static function __constructorIndex (organizationSelection :  OrganizationSelection, showOrganizationSelection :  Boolean) : int {
      return 2
    }
    
    static function __constructorIndex (organizationSelection :  OrganizationSelection, showOrganizationSelection :  Boolean, canSelectRootGroup :  Boolean) : int {
      return 3
    }
    
    // 'value' attribute on TextInput (id=ChooseOrganization_Input) at OrganizationGroupTreePopup.pcf: line 45, column 49
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      organizationSelection.Organization = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'initialValue' attribute on Variable at OrganizationGroupTreePopup.pcf: line 33, column 27
    function initialValue_0 () : entity.User {
      return User.util.CurrentUser
    }
    
    // 'value' attribute on TextInput (id=ChooseOrganization_Input) at OrganizationGroupTreePopup.pcf: line 45, column 49
    function valueRoot_4 () : java.lang.Object {
      return organizationSelection
    }
    
    // 'value' attribute on TextInput (id=ChooseOrganization_Input) at OrganizationGroupTreePopup.pcf: line 45, column 49
    function value_2 () : entity.Organization {
      return organizationSelection.Organization
    }
    
    // 'visible' attribute on TextInput (id=ChooseOrganization_Input) at OrganizationGroupTreePopup.pcf: line 45, column 49
    function visible_1 () : java.lang.Boolean {
      return showOrganizationSelection
    }
    
    override property get CurrentLocation () : pcf.OrganizationGroupTreePopup {
      return super.CurrentLocation as pcf.OrganizationGroupTreePopup
    }
    
    property get canSelectRootGroup () : Boolean {
      return getVariableValue("canSelectRootGroup", 0) as Boolean
    }
    
    property set canSelectRootGroup ($arg :  Boolean) {
      setVariableValue("canSelectRootGroup", 0, $arg)
    }
    
    property get currentUser () : entity.User {
      return getVariableValue("currentUser", 0) as entity.User
    }
    
    property set currentUser ($arg :  entity.User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    property get organizationSelection () : OrganizationSelection {
      return getVariableValue("organizationSelection", 0) as OrganizationSelection
    }
    
    property set organizationSelection ($arg :  OrganizationSelection) {
      setVariableValue("organizationSelection", 0, $arg)
    }
    
    property get showOrganizationSelection () : Boolean {
      return getVariableValue("showOrganizationSelection", 0) as Boolean
    }
    
    property set showOrganizationSelection ($arg :  Boolean) {
      setVariableValue("showOrganizationSelection", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/organizationselect/OrganizationGroupTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationGroupTreePopupPickerExpressionsImpl extends OrganizationGroupTreePopup2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canClickElement' attribute on TreeView (id=OrganizationGroupTreePopupPicker) at OrganizationGroupTreePopup.pcf: line 63, column 30
    function canClickElement_8 () : java.lang.Boolean {
      return canSelectRootGroup or group != rootGroup.Data
    }
    
    // 'elementLabel' attribute on TreeView (id=OrganizationGroupTreePopupPicker) at OrganizationGroupTreePopup.pcf: line 63, column 30
    function elementLabel_9 () : java.lang.Object {
      return group
    }
    
    // 'elementName' attribute on TreeView (id=OrganizationGroupTreePopupPicker) at OrganizationGroupTreePopup.pcf: line 63, column 30
    function elementValueSetter_10 (__VALUE :  java.lang.Object) : void {
      group =  (__VALUE as Group)
    }
    
    // 'onClickElement' attribute on TreeView (id=OrganizationGroupTreePopupPicker) at OrganizationGroupTreePopup.pcf: line 63, column 30
    function onClickElement_11 () : void {
      CurrentLocation.pickValueAndCommit(group)
    }
    
    // 'value' attribute on TreeView (id=OrganizationGroupTreePopupPicker) at OrganizationGroupTreePopup.pcf: line 63, column 30
    function value_12 () : gw.api.tree.TreeNode {
      return rootGroup
    }
    
    property get group () : Group {
      return getTreeViewValue(2) as Group
    }
    
    property set group ($arg :  Group) {
      setTreeViewValue(2, $arg)
    }
    
    
  }
  
  
}