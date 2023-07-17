package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamMenuTreeExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamMenuTreeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TeamMenuTree.pcf: line 10, column 44
    function initialValue_0 () : gw.api.web.team.TeamTreeNode {
      return new gw.api.web.team.TeamTreeNode()
    }
    
    property get rootModel () : gw.api.web.team.TeamTreeNode {
      return getVariableValue("rootModel", 0) as gw.api.web.team.TeamTreeNode
    }
    
    property set rootModel ($arg :  gw.api.web.team.TeamTreeNode) {
      setVariableValue("rootModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamTreeViewExpressionsImpl extends TeamMenuTreeExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'elementLabel' attribute on TreeView (id=TeamTreeView) at TeamMenuTree.pcf: line 17, column 26
    function elementLabel_1 () : java.lang.Object {
      return teamModel.Label
    }
    
    // 'elementName' attribute on TreeView (id=TeamTreeView) at TeamMenuTree.pcf: line 17, column 26
    function elementValueSetter_2 (__VALUE :  java.lang.Object) : void {
      teamModel =  (__VALUE as gw.api.team.TeamModel)
    }
    
    // 'onClickElement' attribute on TreeView (id=TeamTreeView) at TeamMenuTree.pcf: line 17, column 26
    function onClickElement_3 () : void {
      TeamForward.go(CurrentLocation.getId(), teamModel)
    }
    
    // 'onClickElement' attribute on TreeView (id=TeamTreeView) at TeamMenuTree.pcf: line 17, column 26
    function onClickElement_dest_4 () : pcf.api.Destination {
      return pcf.TeamForward.createDestination(CurrentLocation.getId(), teamModel)
    }
    
    // 'value' attribute on TreeView (id=TeamTreeView) at TeamMenuTree.pcf: line 17, column 26
    function value_5 () : gw.api.tree.TreeNode {
      return rootModel
    }
    
    property get teamModel () : gw.api.team.TeamModel {
      return getTreeViewValue(1) as gw.api.team.TeamModel
    }
    
    property set teamModel ($arg :  gw.api.team.TeamModel) {
      setTreeViewValue(1, $arg)
    }
    
    
  }
  
  
}