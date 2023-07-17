package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationSearchPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at OrganizationSearchPage.pcf: line 49, column 32
    function action_11 () : void {
      OrganizationDetail.go(organization)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at OrganizationSearchPage.pcf: line 49, column 32
    function action_dest_12 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(organization)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationSearchPage.pcf: line 49, column 32
    function valueRoot_14 () : java.lang.Object {
      return organization
    }
    
    // 'value' attribute on TextCell (id=ContactCity_Cell) at OrganizationSearchPage.pcf: line 74, column 33
    function valueRoot_28 () : java.lang.Object {
      return organization.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationSearchPage.pcf: line 49, column 32
    function value_13 () : java.lang.String {
      return organization.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationSearchPage.pcf: line 55, column 33
    function value_16 () : typekey.BusinessType {
      return organization.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPage.pcf: line 62, column 33
    function value_19 () : typekey.ProducerStatus {
      return organization.ProducerStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=Tier_Cell) at OrganizationSearchPage.pcf: line 69, column 33
    function value_23 () : typekey.Tier {
      return organization.Tier
    }
    
    // 'value' attribute on TextCell (id=ContactCity_Cell) at OrganizationSearchPage.pcf: line 74, column 33
    function value_27 () : java.lang.String {
      return organization.Contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactState_Cell) at OrganizationSearchPage.pcf: line 80, column 33
    function value_30 () : typekey.State {
      return organization.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=ContactPostal_Cell) at OrganizationSearchPage.pcf: line 85, column 33
    function value_33 () : java.lang.String {
      return organization.Contact.PrimaryAddress.PostalCode
    }
    
    // 'visible' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPage.pcf: line 62, column 33
    function visible_21 () : java.lang.Boolean {
      return perm.System.orgviewagency
    }
    
    property get organization () : entity.Organization {
      return getIteratedValue(2) as entity.Organization
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationSearchPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=OrganizationSearchPage) at OrganizationSearchPage.pcf: line 10, column 70
    static function canVisit_40 () : java.lang.Boolean {
      return perm.Organization.search
    }
    
    // Page (id=OrganizationSearchPage) at OrganizationSearchPage.pcf: line 10, column 70
    static function parent_41 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.OrganizationSearchPage {
      return super.CurrentLocation as pcf.OrganizationSearchPage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends OrganizationSearchPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at OrganizationSearchPage.pcf: line 24, column 62
    function def_onEnter_0 (def :  pcf.OrganizationSearchDV) : void {
      def.onEnter(searchCriteria, false)
    }
    
    // 'def' attribute on PanelRef at OrganizationSearchPage.pcf: line 24, column 62
    function def_refreshVariables_1 (def :  pcf.OrganizationSearchDV) : void {
      def.refreshVariables(searchCriteria, false)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at OrganizationSearchPage.pcf: line 22, column 82
    function maxSearchResults_37 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at OrganizationSearchPage.pcf: line 22, column 82
    function searchCriteria_39 () : entity.OrganizationSearchCriteria {
      return new OrganizationSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at OrganizationSearchPage.pcf: line 22, column 82
    function search_38 () : java.lang.Object {
      return searchCriteria.validateAndSearch()
    }
    
    // 'value' attribute on TextCell (id=ContactPostal_Cell) at OrganizationSearchPage.pcf: line 85, column 33
    function sortValue_10 (organization :  entity.Organization) : java.lang.Object {
      return organization.Contact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationSearchPage.pcf: line 49, column 32
    function sortValue_2 (organization :  entity.Organization) : java.lang.Object {
      return organization.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationSearchPage.pcf: line 55, column 33
    function sortValue_3 (organization :  entity.Organization) : java.lang.Object {
      return organization.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPage.pcf: line 62, column 33
    function sortValue_4 (organization :  entity.Organization) : java.lang.Object {
      return organization.ProducerStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=Tier_Cell) at OrganizationSearchPage.pcf: line 69, column 33
    function sortValue_6 (organization :  entity.Organization) : java.lang.Object {
      return organization.Tier
    }
    
    // 'value' attribute on TextCell (id=ContactCity_Cell) at OrganizationSearchPage.pcf: line 74, column 33
    function sortValue_8 (organization :  entity.Organization) : java.lang.Object {
      return organization.Contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactState_Cell) at OrganizationSearchPage.pcf: line 80, column 33
    function sortValue_9 (organization :  entity.Organization) : java.lang.Object {
      return organization.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on RowIterator (id=OrganizationSearchResultsIterator) at OrganizationSearchPage.pcf: line 38, column 87
    function value_36 () : gw.api.database.IQueryBeanResult<entity.Organization> {
      return organizations
    }
    
    // 'visible' attribute on TypeKeyCell (id=ProducerStatus_Cell) at OrganizationSearchPage.pcf: line 62, column 33
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