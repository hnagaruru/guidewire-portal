package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupSearchDVExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at AffinityGroupSearchScreen.pcf: line 37, column 43
    function action_7 () : void {
      OrganizationSearchPopup.push(null,true)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at AffinityGroupSearchScreen.pcf: line 37, column 43
    function action_dest_8 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null,true)
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 30, column 60
    function def_onEnter_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 65, column 45
    function def_onEnter_35 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 30, column 60
    function def_onEnter_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 30, column 60
    function def_refreshVariables_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 65, column 45
    function def_refreshVariables_36 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 30, column 60
    function def_refreshVariables_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AffinityGroupSearchScreen.pcf: line 37, column 43
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Organization = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=GroupType_Input) at AffinityGroupSearchScreen.pcf: line 43, column 52
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AffinityGroupType = (__VALUE_TO_SET as typekey.AffinityGroupType)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at AffinityGroupSearchScreen.pcf: line 48, column 50
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Product = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on CheckBoxInput (id=SearchOnlyAvailableGroups_Input) at AffinityGroupSearchScreen.pcf: line 61, column 57
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.OnlyAvailableGroups = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at AffinityGroupSearchScreen.pcf: line 37, column 43
    function editable_9 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupSearchScreen.pcf: line 21, column 49
    function initialValue_0 () : gw.api.productmodel.Product[] {
      return gw.api.system.PCDependenciesGateway.getProductModel().getAllInstances(gw.api.productmodel.Product)?.toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupSearchScreen.pcf: line 26, column 77
    function initialValue_1 () : gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter {
      return new gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at AffinityGroupSearchScreen.pcf: line 30, column 60
    function mode_6 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'optionLabel' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function optionLabel_26 (VALUE :  gw.api.productmodel.Product) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function valueRange_27 () : java.lang.Object {
      return products
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AffinityGroupSearchScreen.pcf: line 37, column 43
    function valueRoot_12 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AffinityGroupSearchScreen.pcf: line 37, column 43
    function value_10 () : java.lang.String {
      return searchCriteria.Organization
    }
    
    // 'value' attribute on TypeKeyInput (id=GroupType_Input) at AffinityGroupSearchScreen.pcf: line 43, column 52
    function value_15 () : typekey.AffinityGroupType {
      return searchCriteria.AffinityGroupType
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at AffinityGroupSearchScreen.pcf: line 48, column 50
    function value_19 () : java.lang.String {
      return searchCriteria.ProducerCode
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function value_23 () : gw.api.productmodel.Product {
      return searchCriteria.Product
    }
    
    // 'value' attribute on CheckBoxInput (id=SearchOnlyAvailableGroups_Input) at AffinityGroupSearchScreen.pcf: line 61, column 57
    function value_31 () : java.lang.Boolean {
      return searchCriteria.OnlyAvailableGroups
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at AffinityGroupSearchScreen.pcf: line 56, column 54
    function verifyValueRange_29 () : void {
      var __valueRangeArg = products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    property get groupSearchAdapter () : gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter {
      return getVariableValue("groupSearchAdapter", 2) as gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter
    }
    
    property set groupSearchAdapter ($arg :  gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter) {
      setVariableValue("groupSearchAdapter", 2, $arg)
    }
    
    property get products () : gw.api.productmodel.Product[] {
      return getVariableValue("products", 2) as gw.api.productmodel.Product[]
    }
    
    property set products ($arg :  gw.api.productmodel.Product[]) {
      setVariableValue("products", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchScreen.pcf: line 91, column 51
    function action_42 () : void {
      AffinityGroupDetailPage.go(group)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchScreen.pcf: line 105, column 31
    function action_49 () : void {
      OrganizationDetail.go(group.Organization)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchScreen.pcf: line 91, column 51
    function action_dest_43 () : pcf.api.Destination {
      return pcf.AffinityGroupDetailPage.createDestination(group)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchScreen.pcf: line 105, column 31
    function action_dest_50 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(group.Organization)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AffinityGroupSearchScreen.pcf: line 97, column 31
    function valueRoot_47 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchScreen.pcf: line 91, column 51
    function value_44 () : entity.AffinityGroup {
      return group
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AffinityGroupSearchScreen.pcf: line 97, column 31
    function value_46 () : typekey.AffinityGroupType {
      return group.AffinityGroupType
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchScreen.pcf: line 105, column 31
    function value_51 () : entity.Organization {
      return group.Organization
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at AffinityGroupSearchScreen.pcf: line 110, column 31
    function value_54 () : java.util.Date {
      return group.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at AffinityGroupSearchScreen.pcf: line 115, column 31
    function value_57 () : java.util.Date {
      return group.EndDate
    }
    
    property get group () : entity.AffinityGroup {
      return getIteratedValue(2) as entity.AffinityGroup
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AffinityGroupSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AffinityGroupSearchScreen.pcf: line 13, column 81
    function searchCriteria_62 () : gw.admin.affinitygroup.AffinityGroupSearchCriteria {
      return new gw.admin.affinitygroup.AffinityGroupSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at AffinityGroupSearchScreen.pcf: line 13, column 81
    function search_61 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchScreen.pcf: line 91, column 51
    function sortValue_37 (group :  entity.AffinityGroup) : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AffinityGroupSearchScreen.pcf: line 97, column 31
    function sortValue_38 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.AffinityGroupType
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchScreen.pcf: line 105, column 31
    function sortValue_39 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.Organization
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at AffinityGroupSearchScreen.pcf: line 110, column 31
    function sortValue_40 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at AffinityGroupSearchScreen.pcf: line 115, column 31
    function sortValue_41 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.EndDate
    }
    
    // 'value' attribute on RowIterator at AffinityGroupSearchScreen.pcf: line 82, column 86
    function value_60 () : gw.api.database.IQueryBeanResult<entity.AffinityGroup> {
      return affinityGroups
    }
    
    property get affinityGroups () : gw.api.database.IQueryBeanResult<AffinityGroup> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<AffinityGroup>
    }
    
    property get searchCriteria () : gw.admin.affinitygroup.AffinityGroupSearchCriteria {
      return getCriteriaValue(1) as gw.admin.affinitygroup.AffinityGroupSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.admin.affinitygroup.AffinityGroupSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}