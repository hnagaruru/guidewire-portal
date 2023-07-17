package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/CloneUWAuthorityProfile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CloneUWAuthorityProfileExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/CloneUWAuthorityProfile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CloneUWAuthorityProfileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (profileToClone :  UWAuthorityProfile) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=CloneUWAuthorityProfile) at CloneUWAuthorityProfile.pcf: line 13, column 79
    function afterCancel_3 () : void {
      UWAuthorityProfiles.go()
    }
    
    // 'afterCancel' attribute on Page (id=CloneUWAuthorityProfile) at CloneUWAuthorityProfile.pcf: line 13, column 79
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=CloneUWAuthorityProfile) at CloneUWAuthorityProfile.pcf: line 13, column 79
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      UWAuthorityProfiles.go()
    }
    
    // 'def' attribute on ScreenRef at CloneUWAuthorityProfile.pcf: line 24, column 60
    function def_onEnter_1 (def :  pcf.UWAuthorityProfileDetailScreen) : void {
      def.onEnter(clonedProfile)
    }
    
    // 'def' attribute on ScreenRef at CloneUWAuthorityProfile.pcf: line 24, column 60
    function def_refreshVariables_2 (def :  pcf.UWAuthorityProfileDetailScreen) : void {
      def.refreshVariables(clonedProfile)
    }
    
    // 'initialValue' attribute on Variable at CloneUWAuthorityProfile.pcf: line 22, column 34
    function initialValue_0 () : UWAuthorityProfile {
      return profileToClone.cloneProfile()
    }
    
    // 'parent' attribute on Page (id=CloneUWAuthorityProfile) at CloneUWAuthorityProfile.pcf: line 13, column 79
    static function parent_6 (profileToClone :  UWAuthorityProfile) : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    override property get CurrentLocation () : pcf.CloneUWAuthorityProfile {
      return super.CurrentLocation as pcf.CloneUWAuthorityProfile
    }
    
    property get clonedProfile () : UWAuthorityProfile {
      return getVariableValue("clonedProfile", 0) as UWAuthorityProfile
    }
    
    property set clonedProfile ($arg :  UWAuthorityProfile) {
      setVariableValue("clonedProfile", 0, $arg)
    }
    
    property get profileToClone () : UWAuthorityProfile {
      return getVariableValue("profileToClone", 0) as UWAuthorityProfile
    }
    
    property set profileToClone ($arg :  UWAuthorityProfile) {
      setVariableValue("profileToClone", 0, $arg)
    }
    
    
  }
  
  
}