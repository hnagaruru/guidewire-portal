package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at GroupSearchDV.pcf: line 37, column 46
    function action_12 () : void {
      OrganizationSearchPopup.push(null)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at GroupSearchDV.pcf: line 37, column 46
    function action_dest_13 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null)
    }
    
    // 'def' attribute on InputSetRef at GroupSearchDV.pcf: line 50, column 41
    function def_onEnter_28 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at GroupSearchDV.pcf: line 26, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at GroupSearchDV.pcf: line 26, column 56
    function def_onEnter_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at GroupSearchDV.pcf: line 50, column 41
    function def_refreshVariables_29 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at GroupSearchDV.pcf: line 26, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at GroupSearchDV.pcf: line 26, column 56
    function def_refreshVariables_6 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at GroupSearchDV.pcf: line 37, column 46
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Organization = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.GroupType = (__VALUE_TO_SET as typekey.GroupType)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at GroupSearchDV.pcf: line 31, column 46
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at GroupSearchDV.pcf: line 37, column 46
    function editable_14 () : java.lang.Boolean {
      return (not isFullyRestrictedMode) or (not User.util.CurrentUser.ExternalUser) and (not orgFixed)
    }
    
    // 'filter' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function filter_23 (VALUE :  typekey.GroupType, VALUES :  typekey.GroupType[]) : java.lang.Boolean {
      return VALUE != TC_ROOT
    }
    
    // 'initialValue' attribute on Variable at GroupSearchDV.pcf: line 13, column 23
    function initialValue_0 () : boolean {
      return searchCriteria.Organization != null
    }
    
    // 'initialValue' attribute on Variable at GroupSearchDV.pcf: line 18, column 62
    function initialValue_1 () : gw.globalization.GroupNameToGroupSearchAdapter {
      return new gw.globalization.GroupNameToGroupSearchAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at GroupSearchDV.pcf: line 22, column 23
    function initialValue_2 () : boolean {
      return gw.api.system.ExternalUserAccessParameterKey.ExternalUserAccessIsFullyRestricted()
    }
    
    // 'mode' attribute on InputSetRef at GroupSearchDV.pcf: line 26, column 56
    function mode_7 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function valueRange_24 () : java.lang.Object {
      return GroupType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at GroupSearchDV.pcf: line 31, column 46
    function valueRoot_10 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at GroupSearchDV.pcf: line 37, column 46
    function value_15 () : entity.Organization {
      return searchCriteria.Organization
    }
    
    // 'value' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function value_20 () : typekey.GroupType {
      return searchCriteria.GroupType
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at GroupSearchDV.pcf: line 31, column 46
    function value_8 () : java.lang.String {
      return searchCriteria.ProducerCode
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function verifyValueRangeIsAllowedType_25 ($$arg :  typekey.GroupType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at GroupSearchDV.pcf: line 46, column 40
    function verifyValueRange_26 () : void {
      var __valueRangeArg = GroupType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    property get groupNameAdapter () : gw.globalization.GroupNameToGroupSearchAdapter {
      return getVariableValue("groupNameAdapter", 0) as gw.globalization.GroupNameToGroupSearchAdapter
    }
    
    property set groupNameAdapter ($arg :  gw.globalization.GroupNameToGroupSearchAdapter) {
      setVariableValue("groupNameAdapter", 0, $arg)
    }
    
    property get isFullyRestrictedMode () : boolean {
      return getVariableValue("isFullyRestrictedMode", 0) as java.lang.Boolean
    }
    
    property set isFullyRestrictedMode ($arg :  boolean) {
      setVariableValue("isFullyRestrictedMode", 0, $arg)
    }
    
    property get orgFixed () : boolean {
      return getVariableValue("orgFixed", 0) as java.lang.Boolean
    }
    
    property set orgFixed ($arg :  boolean) {
      setVariableValue("orgFixed", 0, $arg)
    }
    
    property get searchCriteria () : GroupSearchCriteria {
      return getRequireValue("searchCriteria", 0) as GroupSearchCriteria
    }
    
    property set searchCriteria ($arg :  GroupSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}