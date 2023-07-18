package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/navigator/DisplayBeanPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DisplayBeanPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/navigator/DisplayBeanPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DisplayBeanPanelExpressionsImpl extends DisplayBeanPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DisplayBeanPopup.pcf: line 23, column 48
    function initialValue_0 () : gw.api.web.util.BeanTreeNode {
      return new gw.api.web.util.BeanTreeNode(bean, true)
    }
    
    property get rootBean () : gw.api.web.util.BeanTreeNode {
      return getVariableValue("rootBean", 1) as gw.api.web.util.BeanTreeNode
    }
    
    property set rootBean ($arg :  gw.api.web.util.BeanTreeNode) {
      setVariableValue("rootBean", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/navigator/DisplayBeanPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DisplayBeanPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bean :  KeyableBean) : int {
      return 0
    }
    
    // 'title' attribute on Popup (id=DisplayBeanPopup) at DisplayBeanPopup.pcf: line 9, column 78
    static function title_7 (bean :  KeyableBean) : java.lang.Object {
      return DisplayKey.get("Web.DisplayBean.Title", bean.PublicID)
    }
    
    override property get CurrentLocation () : pcf.DisplayBeanPopup {
      return super.CurrentLocation as pcf.DisplayBeanPopup
    }
    
    property get bean () : KeyableBean {
      return getVariableValue("bean", 0) as KeyableBean
    }
    
    property set bean ($arg :  KeyableBean) {
      setVariableValue("bean", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/navigator/DisplayBeanPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class treeExpressionsImpl extends DisplayBeanPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canClickElement' attribute on TreeView (id=tree) at DisplayBeanPopup.pcf: line 30, column 29
    function canClickElement_1 () : java.lang.Boolean {
      return element typeis gw.api.web.util.BeanTreeNode
    }
    
    // 'elementLabel' attribute on TreeView (id=tree) at DisplayBeanPopup.pcf: line 30, column 29
    function elementLabel_2 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=tree) at DisplayBeanPopup.pcf: line 30, column 29
    function elementValueSetter_3 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'onClickElement' attribute on TreeView (id=tree) at DisplayBeanPopup.pcf: line 30, column 29
    function onClickElement_4 () : void {
      DisplayBeanPopup.push((element as gw.api.web.util.BeanTreeNode).Bean)
    }
    
    // 'onClickElement' attribute on TreeView (id=tree) at DisplayBeanPopup.pcf: line 30, column 29
    function onClickElement_dest_5 () : pcf.api.Destination {
      return pcf.DisplayBeanPopup.createDestination((element as gw.api.web.util.BeanTreeNode).Bean)
    }
    
    // 'value' attribute on TreeView (id=tree) at DisplayBeanPopup.pcf: line 30, column 29
    function value_6 () : gw.api.tree.TreeNode {
      return rootBean
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(2) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(2, $arg)
    }
    
    
  }
  
  
}