package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ProducerTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerTreePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ProducerTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerTreePopup2ExpressionsImpl extends ProducerTreePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ProducerTreePopup.pcf: line 22, column 67
    function initialValue_0 () : gw.api.admin.ProducerPickerOrganizationTreeNode {
      return gw.api.admin.ProducerPickerOrganizationTreeNode.createNode(organizationView)
    }
    
    property get organization () : gw.api.admin.ProducerPickerOrganizationTreeNode {
      return getVariableValue("organization", 1) as gw.api.admin.ProducerPickerOrganizationTreeNode
    }
    
    property set organization ($arg :  gw.api.admin.ProducerPickerOrganizationTreeNode) {
      setVariableValue("organization", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerTreePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (organizationView :  Organization) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.ProducerTreePopup {
      return super.CurrentLocation as pcf.ProducerTreePopup
    }
    
    property get organizationView () : Organization {
      return getVariableValue("organizationView", 0) as Organization
    }
    
    property set organizationView ($arg :  Organization) {
      setVariableValue("organizationView", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerTreePopupPickerExpressionsImpl extends ProducerTreePopup2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canClickElement' attribute on TreeView (id=ProducerTreePopupPicker) at ProducerTreePopup.pcf: line 29, column 33
    function canClickElement_1 () : java.lang.Boolean {
      return element typeis User
    }
    
    // 'elementLabel' attribute on TreeView (id=ProducerTreePopupPicker) at ProducerTreePopup.pcf: line 29, column 33
    function elementLabel_2 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=ProducerTreePopupPicker) at ProducerTreePopup.pcf: line 29, column 33
    function elementValueSetter_3 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'onClickElement' attribute on TreeView (id=ProducerTreePopupPicker) at ProducerTreePopup.pcf: line 29, column 33
    function onClickElement_4 () : void {
      CurrentLocation.pickValueAndCommit(element as User)
    }
    
    // 'value' attribute on TreeView (id=ProducerTreePopupPicker) at ProducerTreePopup.pcf: line 29, column 33
    function value_5 () : gw.api.tree.TreeNode {
      return organization
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(2) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(2, $arg)
    }
    
    
  }
  
  
}