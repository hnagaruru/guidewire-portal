package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 52, column 49
    function def_onEnter_13 (def :  pcf.UserRolesLV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 63, column 37
    function def_onEnter_15 (def :  pcf.UserProfileDV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 71, column 36
    function def_onEnter_17 (def :  pcf.UserRegionLV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 19, column 42
    function def_onEnter_2 (def :  pcf.UserDetailDV) : void {
      def.onEnter(user, true)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 84, column 56
    function def_onEnter_20 (def :  pcf.UserAuthorityLV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 28, column 40
    function def_onEnter_6 (def :  pcf.UserAttributesLV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 43, column 27
    function def_onEnter_9 (def :  pcf.UserDetail_AccessDV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 43, column 27
    function def_refreshVariables_10 (def :  pcf.UserDetail_AccessDV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 52, column 49
    function def_refreshVariables_14 (def :  pcf.UserRolesLV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 63, column 37
    function def_refreshVariables_16 (def :  pcf.UserProfileDV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 71, column 36
    function def_refreshVariables_18 (def :  pcf.UserRegionLV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 84, column 56
    function def_refreshVariables_21 (def :  pcf.UserAuthorityLV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 19, column 42
    function def_refreshVariables_3 (def :  pcf.UserDetailDV) : void {
      def.refreshVariables(user, true)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 28, column 40
    function def_refreshVariables_7 (def :  pcf.UserAttributesLV) : void {
      def.refreshVariables(user)
    }
    
    // 'editable' attribute on PanelRef at UserDetailScreen.pcf: line 52, column 49
    function editable_12 () : java.lang.Boolean {
      return perm.System.usergrantroles
    }
    
    // 'editable' attribute on PanelRef at UserDetailScreen.pcf: line 84, column 56
    function editable_19 () : java.lang.Boolean {
      return perm.System.authprofileassignedit
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailScreen.pcf: line 12, column 62
    function toolbarButtonSet_onEnter_0 (def :  pcf.UserDetailToolbarButtonSet) : void {
      def.onEnter(user)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailScreen.pcf: line 12, column 62
    function toolbarButtonSet_refreshVariables_1 (def :  pcf.UserDetailToolbarButtonSet) : void {
      def.refreshVariables(user)
    }
    
    // 'visible' attribute on Card (id=UserDetail_AccessCard) at UserDetailScreen.pcf: line 40, column 45
    function visible_11 () : java.lang.Boolean {
      return user.Organization != null
    }
    
    // 'visible' attribute on Card (id=UserDetail_AuthorityCard) at UserDetailScreen.pcf: line 81, column 53
    function visible_22 () : java.lang.Boolean {
      return perm.System.authprofileassignview
    }
    
    // 'addVisible' attribute on IteratorButtons at UserDetailScreen.pcf: line 33, column 59
    function visible_4 () : java.lang.Boolean {
      return perm.User.manageattributes
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}