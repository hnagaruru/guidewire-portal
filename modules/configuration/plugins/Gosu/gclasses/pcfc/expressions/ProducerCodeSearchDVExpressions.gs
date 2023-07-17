package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at ProducerCodeSearchDV.pcf: line 58, column 41
    function action_27 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeSearchDV.pcf: line 65, column 46
    function action_35 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeSearchDV.pcf: line 79, column 92
    function action_49 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at ProducerCodeSearchDV.pcf: line 58, column 41
    function action_dest_28 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeSearchDV.pcf: line 65, column 46
    function action_dest_36 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeSearchDV.pcf: line 79, column 92
    function action_dest_50 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at ProducerCodeSearchDV.pcf: line 89, column 53
    function def_onEnter_65 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressAreaOwner(addrAreaAdapter))
    }
    
    // 'def' attribute on InputSetRef at ProducerCodeSearchDV.pcf: line 93, column 41
    function def_onEnter_68 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at ProducerCodeSearchDV.pcf: line 89, column 53
    function def_refreshVariables_66 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressAreaOwner(addrAreaAdapter))
    }
    
    // 'def' attribute on InputSetRef at ProducerCodeSearchDV.pcf: line 93, column 41
    function def_refreshVariables_69 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=ParentCode_Input) at ProducerCodeSearchDV.pcf: line 38, column 44
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ParentCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProducerCodeSearchDV.pcf: line 44, column 45
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Status = (__VALUE_TO_SET as typekey.ProducerStatus)
    }
    
    // 'value' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Branch = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at ProducerCodeSearchDV.pcf: line 58, column 41
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on AltUserInput (id=User_Input) at ProducerCodeSearchDV.pcf: line 65, column 46
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ProducerCodeSearchDV.pcf: line 28, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=MissingPrefUW_Input) at ProducerCodeSearchDV.pcf: line 71, column 50
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.MissingPrefUW = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on AltUserInput (id=PrefUW_Input) at ProducerCodeSearchDV.pcf: line 79, column 92
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PrefUW = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProducerCodeSearchDV.pcf: line 86, column 67
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ProducerCodeSearchDV.pcf: line 33, column 45
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at ProducerCodeSearchDV.pcf: line 58, column 41
    function editable_29 () : java.lang.Boolean {
      return (not isFullyRestrictedMode) or (not User.util.CurrentUser.ExternalUser)
    }
    
    // 'editable' attribute on CheckBoxInput (id=MissingPrefUW_Input) at ProducerCodeSearchDV.pcf: line 71, column 50
    function editable_41 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeSearchDV.pcf: line 13, column 50
    function initialValue_0 () : java.util.List<entity.Group> {
      return gw.api.system.PCDependenciesGateway.getPCGroupFinder().findBranchGroups().toList()
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeSearchDV.pcf: line 18, column 51
    function initialValue_1 () : gw.globalization.AddressAreaAdapter {
      return new gw.globalization.AddressAreaAdapter(searchCriteria.Address)
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeSearchDV.pcf: line 22, column 23
    function initialValue_2 () : boolean {
      return gw.api.system.ExternalUserAccessParameterKey.ExternalUserAccessIsFullyRestricted()
    }
    
    // 'mode' attribute on InputSetRef at ProducerCodeSearchDV.pcf: line 89, column 53
    function mode_67 () : java.lang.Object {
      return searchCriteria.Address.Country.Code
    }
    
    // 'optionLabel' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function optionLabel_22 (VALUE :  entity.Group) : java.lang.String {
      return VALUE.BranchCode + " -- " + VALUE
    }
    
    // 'valueRange' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function valueRange_23 () : java.lang.Object {
      return allBranches
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ProducerCodeSearchDV.pcf: line 28, column 38
    function valueRoot_5 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=ParentCode_Input) at ProducerCodeSearchDV.pcf: line 38, column 44
    function value_11 () : java.lang.String {
      return searchCriteria.ParentCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProducerCodeSearchDV.pcf: line 44, column 45
    function value_15 () : typekey.ProducerStatus {
      return searchCriteria.Status
    }
    
    // 'value' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function value_19 () : entity.Group {
      return searchCriteria.Branch
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ProducerCodeSearchDV.pcf: line 28, column 38
    function value_3 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at ProducerCodeSearchDV.pcf: line 58, column 41
    function value_30 () : entity.Organization {
      return searchCriteria.Producer
    }
    
    // 'value' attribute on AltUserInput (id=User_Input) at ProducerCodeSearchDV.pcf: line 65, column 46
    function value_37 () : entity.User {
      return searchCriteria.ProducerUser
    }
    
    // 'value' attribute on CheckBoxInput (id=MissingPrefUW_Input) at ProducerCodeSearchDV.pcf: line 71, column 50
    function value_43 () : java.lang.Boolean {
      return searchCriteria.MissingPrefUW
    }
    
    // 'value' attribute on AltUserInput (id=PrefUW_Input) at ProducerCodeSearchDV.pcf: line 79, column 92
    function value_53 () : entity.User {
      return searchCriteria.PrefUW
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProducerCodeSearchDV.pcf: line 86, column 67
    function value_60 () : typekey.Currency {
      return searchCriteria.Currency
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ProducerCodeSearchDV.pcf: line 33, column 45
    function value_7 () : java.lang.String {
      return searchCriteria.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BranchCode_Input) at ProducerCodeSearchDV.pcf: line 52, column 35
    function verifyValueRange_25 () : void {
      var __valueRangeArg = allBranches
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on AltUserInput (id=PrefUW_Input) at ProducerCodeSearchDV.pcf: line 79, column 92
    function visible_52 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw and searchCriteria.MissingPrefUW != true
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at ProducerCodeSearchDV.pcf: line 86, column 67
    function visible_59 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get addrAreaAdapter () : gw.globalization.AddressAreaAdapter {
      return getVariableValue("addrAreaAdapter", 0) as gw.globalization.AddressAreaAdapter
    }
    
    property set addrAreaAdapter ($arg :  gw.globalization.AddressAreaAdapter) {
      setVariableValue("addrAreaAdapter", 0, $arg)
    }
    
    property get allBranches () : java.util.List<entity.Group> {
      return getVariableValue("allBranches", 0) as java.util.List<entity.Group>
    }
    
    property set allBranches ($arg :  java.util.List<entity.Group>) {
      setVariableValue("allBranches", 0, $arg)
    }
    
    property get isFullyRestrictedMode () : boolean {
      return getVariableValue("isFullyRestrictedMode", 0) as java.lang.Boolean
    }
    
    property set isFullyRestrictedMode ($arg :  boolean) {
      setVariableValue("isFullyRestrictedMode", 0, $arg)
    }
    
    property get searchCriteria () : gw.product.ProducerCodeSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.product.ProducerCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.product.ProducerCodeSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}