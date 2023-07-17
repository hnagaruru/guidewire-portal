package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/RoleDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/RoleDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 41, column 43
    function def_onEnter_10 (def :  pcf.RoleProducerCodesLV) : void {
      def.onEnter(role)
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 19, column 37
    function def_onEnter_2 (def :  pcf.RoleDetailDV) : void {
      def.onEnter(role)
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 21, column 212
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(role, { "Name", "Description"}, { DisplayKey.get("Web.Admin.RoleDetailDV.Name"), DisplayKey.get("Web.Admin.RoleDetailDV.Description")})
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 29, column 43
    function def_onEnter_7 (def :  pcf.RoleUsersLV) : void {
      def.onEnter(role)
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 41, column 43
    function def_refreshVariables_11 (def :  pcf.RoleProducerCodesLV) : void {
      def.refreshVariables(role)
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 19, column 37
    function def_refreshVariables_3 (def :  pcf.RoleDetailDV) : void {
      def.refreshVariables(role)
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 21, column 212
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(role, { "Name", "Description"}, { DisplayKey.get("Web.Admin.RoleDetailDV.Name"), DisplayKey.get("Web.Admin.RoleDetailDV.Description")})
    }
    
    // 'def' attribute on PanelRef at RoleDetailScreen.pcf: line 29, column 43
    function def_refreshVariables_8 (def :  pcf.RoleUsersLV) : void {
      def.refreshVariables(role)
    }
    
    // 'editable' attribute on PanelRef at RoleDetailScreen.pcf: line 29, column 43
    function editable_6 () : java.lang.Boolean {
      return perm.User.grantroles
    }
    
    // EditButtons at RoleDetailScreen.pcf: line 12, column 39
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at RoleDetailScreen.pcf: line 12, column 39
    function visible_0 () : java.lang.Boolean {
      return perm.Role.edit
    }
    
    // 'visible' attribute on Card (id=RoleDetail_ProducerCodesCard) at RoleDetailScreen.pcf: line 39, column 117
    function visible_12 () : java.lang.Boolean {
      return role.RoleType == null or role.RoleType == TC_PRODUCERCODE or role.RoleType == TC_USERPRODUCERCODE
    }
    
    // 'visible' attribute on Card (id=RoleDetail_UsersCard) at RoleDetailScreen.pcf: line 26, column 109
    function visible_9 () : java.lang.Boolean {
      return role.RoleType == null or role.RoleType == TC_USER or role.RoleType == TC_USERPRODUCERCODE
    }
    
    property get role () : Role {
      return getRequireValue("role", 0) as Role
    }
    
    property set role ($arg :  Role) {
      setRequireValue("role", 0, $arg)
    }
    
    
  }
  
  
}