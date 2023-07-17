package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserAuthorityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserAuthorityLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserAuthorityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserAuthorityLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function actionAvailable_4 () : java.lang.Boolean {
      return perm.System.authprofileview
    }
    
    // 'action' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function action_2 () : void {
      UWAuthorityProfileDetailPage.go(userAuthorityProfile.UWAuthorityProfile)
    }
    
    // 'action' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function action_dest_3 () : pcf.api.Destination {
      return pcf.UWAuthorityProfileDetailPage.createDestination(userAuthorityProfile.UWAuthorityProfile)
    }
    
    // 'value' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      userAuthorityProfile.UWAuthorityProfile = (__VALUE_TO_SET as entity.UWAuthorityProfile)
    }
    
    // 'optionLabel' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function optionLabel_8 (VALUE :  entity.UWAuthorityProfile) : java.lang.String {
      return VALUE.Name
    }
    
    // 'valueRange' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function valueRange_9 () : java.lang.Object {
      return UWAuthorityProfile.finder.findUWAuthorityProfilesOrderedByName()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAuthorityLV.pcf: line 40, column 72
    function valueRoot_14 () : java.lang.Object {
      return userAuthorityProfile.UWAuthorityProfile
    }
    
    // 'value' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function valueRoot_7 () : java.lang.Object {
      return userAuthorityProfile
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAuthorityLV.pcf: line 40, column 72
    function value_13 () : java.lang.String {
      return userAuthorityProfile.UWAuthorityProfile.Description
    }
    
    // 'value' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function value_5 () : entity.UWAuthorityProfile {
      return userAuthorityProfile.UWAuthorityProfile
    }
    
    // 'valueRange' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function verifyValueRangeIsAllowedType_10 ($$arg :  entity.UWAuthorityProfile[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWAuthorityProfile>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function verifyValueRange_11 () : void {
      var __valueRangeArg = UWAuthorityProfile.finder.findUWAuthorityProfilesOrderedByName()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get userAuthorityProfile () : entity.UserAuthorityProfile {
      return getIteratedValue(1) as entity.UserAuthorityProfile
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserAuthorityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserAuthorityLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on ListViewPanel (id=UserAuthorityLV) at UserAuthorityLV.pcf: line 8, column 49
    function editable_19 () : java.lang.Boolean {
      return perm.System.authprofileassignedit
    }
    
    // 'value' attribute on RangeCell (id=Name_Cell) at UserAuthorityLV.pcf: line 36, column 50
    function sortValue_0 (userAuthorityProfile :  entity.UserAuthorityProfile) : java.lang.Object {
      return userAuthorityProfile.UWAuthorityProfile
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAuthorityLV.pcf: line 40, column 72
    function sortValue_1 (userAuthorityProfile :  entity.UserAuthorityProfile) : java.lang.Object {
      return userAuthorityProfile.UWAuthorityProfile.Description
    }
    
    // 'toAdd' attribute on RowIterator at UserAuthorityLV.pcf: line 23, column 49
    function toAdd_16 (userAuthorityProfile :  entity.UserAuthorityProfile) : void {
      user.addToUserAuthorityProfiles( userAuthorityProfile)
    }
    
    // 'toRemove' attribute on RowIterator at UserAuthorityLV.pcf: line 23, column 49
    function toRemove_17 (userAuthorityProfile :  entity.UserAuthorityProfile) : void {
      user.removeFromUserAuthorityProfiles( userAuthorityProfile)
    }
    
    // 'value' attribute on RowIterator at UserAuthorityLV.pcf: line 23, column 49
    function value_18 () : entity.UserAuthorityProfile[] {
      return user.UserAuthorityProfiles
    }
    
    // 'visible' attribute on ListViewPanel (id=UserAuthorityLV) at UserAuthorityLV.pcf: line 8, column 49
    function visible_20 () : java.lang.Boolean {
      return perm.System.authprofileassignview
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}