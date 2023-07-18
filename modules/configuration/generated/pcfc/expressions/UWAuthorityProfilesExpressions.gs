package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.DBFunction
uses gw.api.path.Paths
uses gw.api.database.QuerySelectColumns
@javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/UWAuthorityProfiles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWAuthorityProfilesExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/UWAuthorityProfiles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UWAuthorityProfilesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Name_Cell) at UWAuthorityProfiles.pcf: line 65, column 37
    function actionAvailable_13 () : java.lang.Boolean {
      return perm.System.authprofileedit
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at UWAuthorityProfiles.pcf: line 65, column 37
    function action_11 () : void {
      UWAuthorityProfileDetailPage.push(profile)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at UWAuthorityProfiles.pcf: line 65, column 37
    function action_dest_12 () : pcf.api.Destination {
      return pcf.UWAuthorityProfileDetailPage.createDestination(profile)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWAuthorityProfiles.pcf: line 65, column 37
    function valueRoot_15 () : java.lang.Object {
      return profile
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWAuthorityProfiles.pcf: line 65, column 37
    function value_14 () : java.lang.String {
      return profile.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWAuthorityProfiles.pcf: line 69, column 44
    function value_17 () : java.lang.String {
      return profile.Description
    }
    
    // 'value' attribute on TextCell (id=UserCount_Cell) at UWAuthorityProfiles.pcf: line 73, column 66
    function value_21 () : java.lang.String {
      return DisplayKey.get("Web.UWAuthorityProfile.Profile.InUseBy", profileCountMap[profile.ID])
    }
    
    // 'valueVisible' attribute on TextCell (id=UserCount_Cell) at UWAuthorityProfiles.pcf: line 73, column 66
    function visible_20 () : java.lang.Boolean {
      return profileCountMap[profile.ID] > 0
    }
    
    property get profile () : entity.UWAuthorityProfile {
      return getIteratedValue(1) as entity.UWAuthorityProfile
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/UWAuthorityProfiles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWAuthorityProfilesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=NewButton) at UWAuthorityProfiles.pcf: line 29, column 52
    function action_3 () : void {
      NewUWAuthorityProfile.go()
    }
    
    // 'action' attribute on ToolbarButton (id=NewButton) at UWAuthorityProfiles.pcf: line 29, column 52
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewUWAuthorityProfile.createDestination()
    }
    
    // 'afterCancel' attribute on Page (id=UWAuthorityProfiles) at UWAuthorityProfiles.pcf: line 12, column 70
    function afterCancel_24 () : void {
      UWAuthorityProfiles.go()
    }
    
    // 'afterCancel' attribute on Page (id=UWAuthorityProfiles) at UWAuthorityProfiles.pcf: line 12, column 70
    function afterCancel_dest_25 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=UWAuthorityProfiles) at UWAuthorityProfiles.pcf: line 12, column 70
    function afterCommit_26 (TopLocation :  pcf.api.Location) : void {
      UWAuthorityProfiles.go()
    }
    
    // 'canEdit' attribute on Page (id=UWAuthorityProfiles) at UWAuthorityProfiles.pcf: line 12, column 70
    function canEdit_27 () : java.lang.Boolean {
      return perm.System.authprofileedit
    }
    
    // 'canVisit' attribute on Page (id=UWAuthorityProfiles) at UWAuthorityProfiles.pcf: line 12, column 70
    static function canVisit_28 () : java.lang.Boolean {
      return perm.System.authprofileview
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=CloneButton) at UWAuthorityProfiles.pcf: line 37, column 52
    function checkedRowAction_6 (profile :  entity.UWAuthorityProfile, CheckedValue :  entity.UWAuthorityProfile) : void {
      CloneUWAuthorityProfile.go(CheckedValue)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteButton) at UWAuthorityProfiles.pcf: line 46, column 52
    function checkedRowAction_8 (profile :  entity.UWAuthorityProfile, CheckedValue :  entity.UWAuthorityProfile) : void {
      CheckedValue.delete()
    }
    
    // 'initialValue' attribute on Variable at UWAuthorityProfiles.pcf: line 16, column 74
    function initialValue_0 () : gw.api.database.IQueryBeanResult<UWAuthorityProfile> {
      return UWAuthorityProfile.finder.findUWAuthorityProfilesOrderedByName()
    }
    
    // 'initialValue' attribute on Variable at UWAuthorityProfiles.pcf: line 20, column 82
    function initialValue_1 () : java.util.Map<gw.pl.persistence.core.Key, java.lang.Integer> {
      return profileUserCount()
    }
    
    // Page (id=UWAuthorityProfiles) at UWAuthorityProfiles.pcf: line 12, column 70
    static function parent_29 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWAuthorityProfiles.pcf: line 69, column 44
    function sortValue_10 (profile :  entity.UWAuthorityProfile) : java.lang.Object {
      return profile.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWAuthorityProfiles.pcf: line 65, column 37
    function sortValue_9 (profile :  entity.UWAuthorityProfile) : java.lang.Object {
      return profile.Name
    }
    
    // 'value' attribute on RowIterator at UWAuthorityProfiles.pcf: line 55, column 89
    function value_23 () : gw.api.database.IQueryBeanResult<entity.UWAuthorityProfile> {
      return allProfiles
    }
    
    // 'visible' attribute on ToolbarButton (id=NewButton) at UWAuthorityProfiles.pcf: line 29, column 52
    function visible_2 () : java.lang.Boolean {
      return perm.System.authprofilecreate
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=DeleteButton) at UWAuthorityProfiles.pcf: line 46, column 52
    function visible_7 () : java.lang.Boolean {
      return perm.System.authprofiledelete
    }
    
    override property get CurrentLocation () : pcf.UWAuthorityProfiles {
      return super.CurrentLocation as pcf.UWAuthorityProfiles
    }
    
    property get allProfiles () : gw.api.database.IQueryBeanResult<UWAuthorityProfile> {
      return getVariableValue("allProfiles", 0) as gw.api.database.IQueryBeanResult<UWAuthorityProfile>
    }
    
    property set allProfiles ($arg :  gw.api.database.IQueryBeanResult<UWAuthorityProfile>) {
      setVariableValue("allProfiles", 0, $arg)
    }
    
    property get profileCountMap () : java.util.Map<gw.pl.persistence.core.Key, java.lang.Integer> {
      return getVariableValue("profileCountMap", 0) as java.util.Map<gw.pl.persistence.core.Key, java.lang.Integer>
    }
    
    property set profileCountMap ($arg :  java.util.Map<gw.pl.persistence.core.Key, java.lang.Integer>) {
      setVariableValue("profileCountMap", 0, $arg)
    }
    
    
          function profileUserCount(): java.util.Map<gw.pl.persistence.core.Key, java.lang.Integer> {
            final var USER_AUTHORITY_PROFILE_COUNT = "UserAuthorityProfileCount"
            final var UW_AUTHORITY_PROFILE_ID = "UWAuthorityProfileID"
    
            var queryResult = gw.api.database.Query.make(UserAuthorityProfile).select({
              QuerySelectColumns.pathWithAlias(UW_AUTHORITY_PROFILE_ID, Paths.make(UserAuthorityProfile#UWAuthorityProfile)),
              QuerySelectColumns.dbFunctionWithAlias(USER_AUTHORITY_PROFILE_COUNT, DBFunction.Count(Paths.make(UserAuthorityProfile#PublicID)))
            })
            .transformQueryRow(\ profile -> {
              return new java.util.HashMap<String, Object>() {
                "UWAuthProfile" -> profile.getColumn(UW_AUTHORITY_PROFILE_ID),
                "Count" -> profile.getColumn(USER_AUTHORITY_PROFILE_COUNT)
              }
            })
            return queryResult.toList()
              .partitionUniquely(\columns -> columns["UWAuthProfile"] as gw.pl.persistence.core.Key)
              .mapValues(\columns -> gw.api.upgrade.Coercions.makeIntFrom(columns["Count"]))
              .toAutoMap(\k -> 0)
          }
    
    
  }
  
  
}