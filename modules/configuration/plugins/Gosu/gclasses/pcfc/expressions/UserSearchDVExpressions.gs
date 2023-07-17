package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/UserSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/UserSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at UserSearchDV.pcf: line 62, column 46
    function action_36 () : void {
      OrganizationSearchPopup.push(null,true)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at UserSearchDV.pcf: line 62, column 46
    function action_dest_37 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null,true)
    }
    
    // 'def' attribute on InputSetRef (id=GroupNameInputSet) at UserSearchDV.pcf: line 33, column 56
    function def_onEnter_10 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.GroupNameOwner(new gw.globalization.GroupNameToUserSearchAdapter(searchCriteria)))
    }
    
    // 'def' attribute on InputSetRef (id=GroupNameInputSet) at UserSearchDV.pcf: line 33, column 56
    function def_onEnter_12 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.GroupNameOwner(new gw.globalization.GroupNameToUserSearchAdapter(searchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at UserSearchDV.pcf: line 66, column 41
    function def_onEnter_44 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef (id=ContactInputSet) at UserSearchDV.pcf: line 29, column 56
    function def_onEnter_5 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef (id=ContactInputSet) at UserSearchDV.pcf: line 29, column 56
    function def_onEnter_7 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef (id=GroupNameInputSet) at UserSearchDV.pcf: line 33, column 56
    function def_refreshVariables_11 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(new gw.globalization.GroupNameToUserSearchAdapter(searchCriteria)))
    }
    
    // 'def' attribute on InputSetRef (id=GroupNameInputSet) at UserSearchDV.pcf: line 33, column 56
    function def_refreshVariables_13 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(new gw.globalization.GroupNameToUserSearchAdapter(searchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at UserSearchDV.pcf: line 66, column 41
    function def_refreshVariables_45 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef (id=ContactInputSet) at UserSearchDV.pcf: line 29, column 56
    function def_refreshVariables_6 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef (id=ContactInputSet) at UserSearchDV.pcf: line 29, column 56
    function def_refreshVariables_8 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.Contact)))
    }
    
    // 'value' attribute on CheckBoxInput (id=NotInAnyGroup_Input) at UserSearchDV.pcf: line 38, column 47
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.NotInAnyGroup = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserSearchDV.pcf: line 25, column 42
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=UserType_Input) at UserSearchDV.pcf: line 44, column 39
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UserType = (__VALUE_TO_SET as typekey.UserType)
    }
    
    // 'value' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Role = (__VALUE_TO_SET as entity.Role)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at UserSearchDV.pcf: line 56, column 46
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at UserSearchDV.pcf: line 62, column 46
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Organization = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'editable' attribute on TypeKeyInput (id=UserType_Input) at UserSearchDV.pcf: line 44, column 39
    function editable_19 () : java.lang.Boolean {
      return not userTypeFixed
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at UserSearchDV.pcf: line 62, column 46
    function editable_38 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser and not organizationFixed
    }
    
    // 'initialValue' attribute on Variable at UserSearchDV.pcf: line 19, column 29
    function initialValue_0 () : entity.Role[] {
      return User.util.CurrentUser.listAvailableRoles()
    }
    
    // 'mode' attribute on InputSetRef (id=ContactInputSet) at UserSearchDV.pcf: line 29, column 56
    function mode_9 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function valueRange_28 () : java.lang.Object {
      return roles
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserSearchDV.pcf: line 25, column 42
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserSearchDV.pcf: line 25, column 42
    function value_1 () : java.lang.String {
      return searchCriteria.Username
    }
    
    // 'value' attribute on CheckBoxInput (id=NotInAnyGroup_Input) at UserSearchDV.pcf: line 38, column 47
    function value_15 () : java.lang.Boolean {
      return searchCriteria.NotInAnyGroup
    }
    
    // 'value' attribute on TypeKeyInput (id=UserType_Input) at UserSearchDV.pcf: line 44, column 39
    function value_20 () : typekey.UserType {
      return searchCriteria.UserType
    }
    
    // 'value' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function value_25 () : entity.Role {
      return searchCriteria.Role
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at UserSearchDV.pcf: line 56, column 46
    function value_32 () : java.lang.String {
      return searchCriteria.ProducerCode
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at UserSearchDV.pcf: line 62, column 46
    function value_39 () : entity.Organization {
      return searchCriteria.Organization
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function verifyValueRangeIsAllowedType_29 ($$arg :  entity.Role[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function verifyValueRangeIsAllowedType_29 ($$arg :  gw.api.database.IQueryBeanResult<entity.Role>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 51, column 34
    function verifyValueRange_30 () : void {
      var __valueRangeArg = roles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    property get organizationFixed () : Boolean {
      return getRequireValue("organizationFixed", 0) as Boolean
    }
    
    property set organizationFixed ($arg :  Boolean) {
      setRequireValue("organizationFixed", 0, $arg)
    }
    
    property get roles () : entity.Role[] {
      return getVariableValue("roles", 0) as entity.Role[]
    }
    
    property set roles ($arg :  entity.Role[]) {
      setVariableValue("roles", 0, $arg)
    }
    
    property get searchCriteria () : UserSearchCriteria {
      return getRequireValue("searchCriteria", 0) as UserSearchCriteria
    }
    
    property set searchCriteria ($arg :  UserSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get userTypeFixed () : boolean {
      return getRequireValue("userTypeFixed", 0) as java.lang.Boolean
    }
    
    property set userTypeFixed ($arg :  boolean) {
      setRequireValue("userTypeFixed", 0, $arg)
    }
    
    
  }
  
  
}