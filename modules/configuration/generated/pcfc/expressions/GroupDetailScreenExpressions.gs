package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=GroupDetailScreen_BasicCard_DeleteButton) at GroupDetailScreen.pcf: line 23, column 38
    function action_4 () : void {
      gw.api.admin.BaseAdminUtil.deleteGroup(group); Admin.go()
    }
    
    // 'available' attribute on ToolbarButton (id=GroupDetailScreen_BasicCard_DeleteButton) at GroupDetailScreen.pcf: line 23, column 38
    function available_2 () : java.lang.Boolean {
      return group.SafeToDelete
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 39, column 37
    function def_onEnter_11 (def :  pcf.GroupUsersLV) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 54, column 27
    function def_onEnter_14 (def :  pcf.GroupDetail_ProducerCodesLV) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 64, column 38
    function def_onEnter_17 (def :  pcf.GroupQueuesLV) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 77, column 38
    function def_onEnter_19 (def :  pcf.GroupRegionLV) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 30, column 39
    function def_onEnter_5 (def :  pcf.GroupDetailDV) : void {
      def.onEnter(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 32, column 228
    function def_onEnter_7 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(group, { "Name", "Description" }, { DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name"),DisplayKey.get("Web.Admin.GroupDetailInputSet.Description") })
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 39, column 37
    function def_refreshVariables_12 (def :  pcf.GroupUsersLV) : void {
      def.refreshVariables(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 54, column 27
    function def_refreshVariables_15 (def :  pcf.GroupDetail_ProducerCodesLV) : void {
      def.refreshVariables(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 64, column 38
    function def_refreshVariables_18 (def :  pcf.GroupQueuesLV) : void {
      def.refreshVariables(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 77, column 38
    function def_refreshVariables_20 (def :  pcf.GroupRegionLV) : void {
      def.refreshVariables(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 30, column 39
    function def_refreshVariables_6 (def :  pcf.GroupDetailDV) : void {
      def.refreshVariables(group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 32, column 228
    function def_refreshVariables_8 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(group, { "Name", "Description" }, { DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name"),DisplayKey.get("Web.Admin.GroupDetailInputSet.Description") })
    }
    
    // 'initialValue' attribute on Variable at GroupDetailScreen.pcf: line 13, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<AssignableQueue> {
      return AssignableQueue.finder.findVisibleQueuesForUser(User.util.CurrentUser) as gw.api.database.IQueryBeanResult<AssignableQueue>
    }
    
    // EditButtons at GroupDetailScreen.pcf: line 15, column 21
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'removeVisible' attribute on IteratorButtons at GroupDetailScreen.pcf: line 44, column 54
    function visible_10 () : java.lang.Boolean {
      return perm.GroupUser.delete
    }
    
    // 'visible' attribute on Card (id=GroupDetail_UserCard) at GroupDetailScreen.pcf: line 37, column 48
    function visible_13 () : java.lang.Boolean {
      return (null != group.Organization)
    }
    
    // 'visible' attribute on Card (id=GroupDetail_ProducerCodesCard) at GroupDetailScreen.pcf: line 51, column 82
    function visible_16 () : java.lang.Boolean {
      return (null != group.Organization) and (group.Organization.Producer)
    }
    
    // 'visible' attribute on ToolbarButton (id=GroupDetailScreen_BasicCard_DeleteButton) at GroupDetailScreen.pcf: line 23, column 38
    function visible_3 () : java.lang.Boolean {
      return perm.Group.delete
    }
    
    // 'addVisible' attribute on IteratorButtons at GroupDetailScreen.pcf: line 44, column 54
    function visible_9 () : java.lang.Boolean {
      return perm.GroupUser.create
    }
    
    property get assignableQueues () : gw.api.database.IQueryBeanResult<AssignableQueue> {
      return getVariableValue("assignableQueues", 0) as gw.api.database.IQueryBeanResult<AssignableQueue>
    }
    
    property set assignableQueues ($arg :  gw.api.database.IQueryBeanResult<AssignableQueue>) {
      setVariableValue("assignableQueues", 0, $arg)
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    
  }
  
  
}