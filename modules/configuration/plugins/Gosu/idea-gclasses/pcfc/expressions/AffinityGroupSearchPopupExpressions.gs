package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupSearchDVExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 51, column 47
    function def_onEnter_11 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 41, column 62
    function def_onEnter_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 41, column 62
    function def_onEnter_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 51, column 47
    function def_refreshVariables_12 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 41, column 62
    function def_refreshVariables_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 41, column 62
    function def_refreshVariables_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.AffinityGroupNameOwner(groupSearchAdapter))
    }
    
    // 'value' attribute on TypeKeyInput (id=GroupType_Input) at AffinityGroupSearchPopup.pcf: line 47, column 54
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AffinityGroupType = (__VALUE_TO_SET as typekey.AffinityGroupType)
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupSearchPopup.pcf: line 32, column 51
    function initialValue_0 () : gw.api.productmodel.Product[] {
      return gw.api.system.PCDependenciesGateway.getProductModel().getAllInstances(gw.api.productmodel.Product)?.toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupSearchPopup.pcf: line 37, column 79
    function initialValue_1 () : gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter {
      return new gw.admin.affinitygroup.AffinityGroupSearchCriteriaAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at AffinityGroupSearchPopup.pcf: line 41, column 62
    function mode_6 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=GroupType_Input) at AffinityGroupSearchPopup.pcf: line 47, column 54
    function valueRoot_9 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=GroupType_Input) at AffinityGroupSearchPopup.pcf: line 47, column 54
    function value_7 () : typekey.AffinityGroupType {
      return searchCriteria.AffinityGroupType
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
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.AffinityGroupSearchPopup {
      return super.CurrentLocation as pcf.AffinityGroupSearchPopup
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchPopup.pcf: line 78, column 53
    function action_18 () : void {
      AffinityGroupDetailPage.go(group)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchPopup.pcf: line 91, column 52
    function action_25 () : void {
      OrganizationDetail.go(group.Organization)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchPopup.pcf: line 78, column 53
    function action_dest_19 () : pcf.api.Destination {
      return pcf.AffinityGroupDetailPage.createDestination(group)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchPopup.pcf: line 91, column 52
    function action_dest_26 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(group.Organization)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AffinityGroupSearchPopup.pcf: line 84, column 33
    function valueRoot_23 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchPopup.pcf: line 78, column 53
    function value_20 () : entity.AffinityGroup {
      return group
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AffinityGroupSearchPopup.pcf: line 84, column 33
    function value_22 () : typekey.AffinityGroupType {
      return group.AffinityGroupType
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchPopup.pcf: line 91, column 52
    function value_27 () : entity.Organization {
      return group.Organization
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at AffinityGroupSearchPopup.pcf: line 96, column 33
    function value_30 () : java.util.Date {
      return group.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at AffinityGroupSearchPopup.pcf: line 101, column 33
    function value_33 () : java.util.Date {
      return group.EndDate
    }
    
    property get group () : entity.AffinityGroup {
      return getIteratedValue(2) as entity.AffinityGroup
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AffinityGroupSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AffinityGroupSearchPopup.pcf: line 24, column 83
    function searchCriteria_39 () : gw.admin.affinitygroup.AffinityGroupSearchCriteria {
      return gw.admin.affinitygroup.AffinityGroupUIHelper.createAffinityGroupSearchCriteria(period)
    }
    
    // 'search' attribute on SearchPanel at AffinityGroupSearchPopup.pcf: line 24, column 83
    function search_38 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AffinityGroupSearchPopup.pcf: line 78, column 53
    function sortValue_13 (group :  entity.AffinityGroup) : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AffinityGroupSearchPopup.pcf: line 84, column 33
    function sortValue_14 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.AffinityGroupType
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AffinityGroupSearchPopup.pcf: line 91, column 52
    function sortValue_15 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.Organization
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at AffinityGroupSearchPopup.pcf: line 96, column 33
    function sortValue_16 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at AffinityGroupSearchPopup.pcf: line 101, column 33
    function sortValue_17 (group :  entity.AffinityGroup) : java.lang.Object {
      return group.EndDate
    }
    
    // 'value' attribute on RowIterator at AffinityGroupSearchPopup.pcf: line 69, column 88
    function value_37 () : gw.api.database.IQueryBeanResult<entity.AffinityGroup> {
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