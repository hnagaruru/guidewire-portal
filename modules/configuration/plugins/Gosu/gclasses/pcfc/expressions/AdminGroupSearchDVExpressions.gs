package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AdminGroupSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminGroupSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AdminGroupSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminGroupSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at AdminGroupSearchDV.pcf: line 29, column 46
    function action_10 () : void {
      OrganizationSearchPopup.push(null,true)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at AdminGroupSearchDV.pcf: line 29, column 46
    function action_dest_11 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null,true)
    }
    
    // 'def' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 18, column 56
    function def_onEnter_1 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 42, column 41
    function def_onEnter_26 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 18, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 18, column 56
    function def_refreshVariables_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 42, column 41
    function def_refreshVariables_27 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 18, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AdminGroupSearchDV.pcf: line 29, column 46
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Organization = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.GroupType = (__VALUE_TO_SET as typekey.GroupType)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at AdminGroupSearchDV.pcf: line 23, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at AdminGroupSearchDV.pcf: line 29, column 46
    function editable_12 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'filter' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function filter_21 (VALUE :  typekey.GroupType, VALUES :  typekey.GroupType[]) : java.lang.Boolean {
      return VALUE != TC_ROOT
    }
    
    // 'initialValue' attribute on Variable at AdminGroupSearchDV.pcf: line 14, column 62
    function initialValue_0 () : gw.globalization.GroupNameToGroupSearchAdapter {
      return new gw.globalization.GroupNameToGroupSearchAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at AdminGroupSearchDV.pcf: line 18, column 56
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function valueRange_22 () : java.lang.Object {
      return GroupType.getTypeKeys( false )
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at AdminGroupSearchDV.pcf: line 23, column 46
    function valueRoot_8 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AdminGroupSearchDV.pcf: line 29, column 46
    function value_13 () : entity.Organization {
      return searchCriteria.Organization
    }
    
    // 'value' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function value_18 () : typekey.GroupType {
      return searchCriteria.GroupType
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at AdminGroupSearchDV.pcf: line 23, column 46
    function value_6 () : java.lang.String {
      return searchCriteria.ProducerCode
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.GroupType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GroupType_Input) at AdminGroupSearchDV.pcf: line 38, column 40
    function verifyValueRange_24 () : void {
      var __valueRangeArg = GroupType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get groupNameAdapter () : gw.globalization.GroupNameToGroupSearchAdapter {
      return getVariableValue("groupNameAdapter", 0) as gw.globalization.GroupNameToGroupSearchAdapter
    }
    
    property set groupNameAdapter ($arg :  gw.globalization.GroupNameToGroupSearchAdapter) {
      setVariableValue("groupNameAdapter", 0, $arg)
    }
    
    property get searchCriteria () : GroupSearchCriteria {
      return getRequireValue("searchCriteria", 0) as GroupSearchCriteria
    }
    
    property set searchCriteria ($arg :  GroupSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}