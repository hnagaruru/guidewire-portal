package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UWAuthorityProfileDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWAuthorityProfileDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UWAuthorityProfileDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWAuthorityProfileDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (profile :  UWAuthorityProfile) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=UWAuthorityProfileDetailPage) at UWAuthorityProfileDetailPage.pcf: line 12, column 107
    function afterCancel_2 () : void {
      UWAuthorityProfiles.go()
    }
    
    // 'afterCancel' attribute on Page (id=UWAuthorityProfileDetailPage) at UWAuthorityProfileDetailPage.pcf: line 12, column 107
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=UWAuthorityProfileDetailPage) at UWAuthorityProfileDetailPage.pcf: line 12, column 107
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      UWAuthorityProfileDetailPage.go(profile)
    }
    
    // 'canEdit' attribute on Page (id=UWAuthorityProfileDetailPage) at UWAuthorityProfileDetailPage.pcf: line 12, column 107
    function canEdit_5 () : java.lang.Boolean {
      return perm.System.authprofileedit
    }
    
    // 'def' attribute on ScreenRef at UWAuthorityProfileDetailPage.pcf: line 19, column 54
    function def_onEnter_0 (def :  pcf.UWAuthorityProfileDetailScreen) : void {
      def.onEnter(profile)
    }
    
    // 'def' attribute on ScreenRef at UWAuthorityProfileDetailPage.pcf: line 19, column 54
    function def_refreshVariables_1 (def :  pcf.UWAuthorityProfileDetailScreen) : void {
      def.refreshVariables(profile)
    }
    
    // 'parent' attribute on Page (id=UWAuthorityProfileDetailPage) at UWAuthorityProfileDetailPage.pcf: line 12, column 107
    static function parent_6 (profile :  UWAuthorityProfile) : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'title' attribute on Page (id=UWAuthorityProfileDetailPage) at UWAuthorityProfileDetailPage.pcf: line 12, column 107
    static function title_7 (profile :  UWAuthorityProfile) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UWAuthorityProfileDetailPage.Title", profile.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.UWAuthorityProfileDetailPage {
      return super.CurrentLocation as pcf.UWAuthorityProfileDetailPage
    }
    
    property get profile () : UWAuthorityProfile {
      return getVariableValue("profile", 0) as UWAuthorityProfile
    }
    
    property set profile ($arg :  UWAuthorityProfile) {
      setVariableValue("profile", 0, $arg)
    }
    
    
  }
  
  
}