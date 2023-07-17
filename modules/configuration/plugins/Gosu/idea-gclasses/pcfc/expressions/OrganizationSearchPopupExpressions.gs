package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationSearchPopup.pcf: line 67, column 33
    function valueRoot_14 () : java.lang.Object {
      return organization
    }
    
    // 'value' attribute on TextCell (id=ContactCity_Cell) at OrganizationSearchPopup.pcf: line 86, column 33
    function valueRoot_25 () : java.lang.Object {
      return organization.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationSearchPopup.pcf: line 61, column 52
    function value_11 () : entity.Organization {
      return organization
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationSearchPopup.pcf: line 67, column 33
    function value_13 () : typekey.BusinessType {
      return organization.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPopup.pcf: line 74, column 33
    function value_16 () : typekey.ProducerStatus {
      return organization.ProducerStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=Tier_Cell) at OrganizationSearchPopup.pcf: line 81, column 33
    function value_20 () : typekey.Tier {
      return organization.Tier
    }
    
    // 'value' attribute on TextCell (id=ContactCity_Cell) at OrganizationSearchPopup.pcf: line 86, column 33
    function value_24 () : java.lang.String {
      return organization.Contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactState_Cell) at OrganizationSearchPopup.pcf: line 92, column 33
    function value_27 () : typekey.State {
      return organization.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=ContactPostal_Cell) at OrganizationSearchPopup.pcf: line 97, column 33
    function value_30 () : java.lang.String {
      return organization.Contact.PrimaryAddress.PostalCode
    }
    
    // 'visible' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPopup.pcf: line 74, column 33
    function visible_18 () : java.lang.Boolean {
      return perm.System.orgviewagency
    }
    
    property get organization () : entity.Organization {
      return getIteratedValue(2) as entity.Organization
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (includesCarrier :  Boolean) : int {
      return 1
    }
    
    static function __constructorIndex (includesCarrier :  Boolean, activeProducersOnly :  Boolean) : int {
      return 2
    }
    
    override property get CurrentLocation () : pcf.OrganizationSearchPopup {
      return super.CurrentLocation as pcf.OrganizationSearchPopup
    }
    
    property get activeProducersOnly () : Boolean {
      return getVariableValue("activeProducersOnly", 0) as Boolean
    }
    
    property set activeProducersOnly ($arg :  Boolean) {
      setVariableValue("activeProducersOnly", 0, $arg)
    }
    
    property get includesCarrier () : Boolean {
      return getVariableValue("includesCarrier", 0) as Boolean
    }
    
    property set includesCarrier ($arg :  Boolean) {
      setVariableValue("includesCarrier", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends OrganizationSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at OrganizationSearchPopup.pcf: line 37, column 76
    function def_onEnter_0 (def :  pcf.OrganizationSearchDV) : void {
      def.onEnter(searchCriteria, activeProducersOnly)
    }
    
    // 'def' attribute on PanelRef at OrganizationSearchPopup.pcf: line 37, column 76
    function def_refreshVariables_1 (def :  pcf.OrganizationSearchDV) : void {
      def.refreshVariables(searchCriteria, activeProducersOnly)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at OrganizationSearchPopup.pcf: line 35, column 82
    function maxSearchResults_35 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at OrganizationSearchPopup.pcf: line 35, column 82
    function searchCriteria_37 () : entity.OrganizationSearchCriteria {
      return gw.web.admin.OrganizationUIHelper.createCriteria(activeProducersOnly, includesCarrier)
    }
    
    // 'search' attribute on SearchPanel at OrganizationSearchPopup.pcf: line 35, column 82
    function search_36 () : java.lang.Object {
      return searchCriteria.validateAndSearch()
    }
    
    // 'value' attribute on TextCell (id=ContactPostal_Cell) at OrganizationSearchPopup.pcf: line 97, column 33
    function sortValue_10 (organization :  entity.Organization) : java.lang.Object {
      return organization.Contact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationSearchPopup.pcf: line 61, column 52
    function sortValue_2 (organization :  entity.Organization) : java.lang.Object {
      return organization
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationSearchPopup.pcf: line 67, column 33
    function sortValue_3 (organization :  entity.Organization) : java.lang.Object {
      return organization.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPopup.pcf: line 74, column 33
    function sortValue_4 (organization :  entity.Organization) : java.lang.Object {
      return organization.ProducerStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=Tier_Cell) at OrganizationSearchPopup.pcf: line 81, column 33
    function sortValue_6 (organization :  entity.Organization) : java.lang.Object {
      return organization.Tier
    }
    
    // 'value' attribute on TextCell (id=ContactCity_Cell) at OrganizationSearchPopup.pcf: line 86, column 33
    function sortValue_8 (organization :  entity.Organization) : java.lang.Object {
      return organization.Contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactState_Cell) at OrganizationSearchPopup.pcf: line 92, column 33
    function sortValue_9 (organization :  entity.Organization) : java.lang.Object {
      return organization.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on RowIterator at OrganizationSearchPopup.pcf: line 51, column 87
    function value_34 () : gw.api.database.IQueryBeanResult<entity.Organization> {
      return organizations
    }
    
    // 'visible' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPopup.pcf: line 74, column 33
    function visible_5 () : java.lang.Boolean {
      return perm.System.orgviewagency
    }
    
    property get organizations () : gw.api.database.IQueryBeanResult<Organization> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Organization>
    }
    
    property get searchCriteria () : entity.OrganizationSearchCriteria {
      return getCriteriaValue(1) as entity.OrganizationSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.OrganizationSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}