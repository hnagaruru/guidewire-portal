package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminMenuTreeExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuTree2ExpressionsImpl extends AdminMenuTreeExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canClickElement' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 23, column 35
    function canClickElement_0 () : java.lang.Boolean {
      return treeModel.isClickable(element)
    }
    
    // 'elementLabel' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 23, column 35
    function elementLabel_1 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 23, column 35
    function elementValueSetter_2 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'onClickElement' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 23, column 35
    function onClickElement_3 () : void {
      gw.pcf.AdminMenuTreeHelper.goToPageBasedOnElementType(element)
    }
    
    // 'selectElementOnEnter' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 23, column 35
    function selectElementOnEnter_4 () : java.lang.Boolean {
      return (group != null and element == group) or (group == null and element == org)
    }
    
    // 'value' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 23, column 35
    function value_5 () : gw.api.tree.TreeNode {
      return treeModel.RootNode
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(1) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuTreeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    property get org () : Organization {
      return getRequireValue("org", 0) as Organization
    }
    
    property set org ($arg :  Organization) {
      setRequireValue("org", 0, $arg)
    }
    
    property get treeModel () : gw.api.admin.PCOrganizationTreeModel {
      return getRequireValue("treeModel", 0) as gw.api.admin.PCOrganizationTreeModel
    }
    
    property set treeModel ($arg :  gw.api.admin.PCOrganizationTreeModel) {
      setRequireValue("treeModel", 0, $arg)
    }
    
    
  }
  
  
}