package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewUWAuthorityProfile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewUWAuthorityProfileExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewUWAuthorityProfile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewUWAuthorityProfileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewUWAuthorityProfile) at NewUWAuthorityProfile.pcf: line 13, column 79
    function afterCancel_3 () : void {
      UWAuthorityProfiles.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewUWAuthorityProfile) at NewUWAuthorityProfile.pcf: line 13, column 79
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewUWAuthorityProfile) at NewUWAuthorityProfile.pcf: line 13, column 79
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      UWAuthorityProfiles.go()
    }
    
    // 'def' attribute on ScreenRef at NewUWAuthorityProfile.pcf: line 21, column 54
    function def_onEnter_1 (def :  pcf.UWAuthorityProfileDetailScreen) : void {
      def.onEnter(profile)
    }
    
    // 'def' attribute on ScreenRef at NewUWAuthorityProfile.pcf: line 21, column 54
    function def_refreshVariables_2 (def :  pcf.UWAuthorityProfileDetailScreen) : void {
      def.refreshVariables(profile)
    }
    
    // 'initialValue' attribute on Variable at NewUWAuthorityProfile.pcf: line 19, column 34
    function initialValue_0 () : UWAuthorityProfile {
      return new UWAuthorityProfile()
    }
    
    // 'parent' attribute on Page (id=NewUWAuthorityProfile) at NewUWAuthorityProfile.pcf: line 13, column 79
    static function parent_6 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewUWAuthorityProfile {
      return super.CurrentLocation as pcf.NewUWAuthorityProfile
    }
    
    property get profile () : UWAuthorityProfile {
      return getVariableValue("profile", 0) as UWAuthorityProfile
    }
    
    property set profile ($arg :  UWAuthorityProfile) {
      setVariableValue("profile", 0, $arg)
    }
    
    
  }
  
  
}