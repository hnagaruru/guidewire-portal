package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminProducerCodeSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminProducerCodeSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AdminProducerCodeSearchScreen.pcf: line 22, column 28
    function initialValue_0 () : Organization {
      return Organization.finder.findCarrierOrganization()
    }
    
    property get carrier () : Organization {
      return getVariableValue("carrier", 0) as Organization
    }
    
    property set carrier ($arg :  Organization) {
      setVariableValue("carrier", 0, $arg)
    }
    
    property get filter () : java.util.Set {
      return getRequireValue("filter", 0) as java.util.Set
    }
    
    property set filter ($arg :  java.util.Set) {
      setRequireValue("filter", 0, $arg)
    }
    
    property get havingRoles () : boolean {
      return getRequireValue("havingRoles", 0) as java.lang.Boolean
    }
    
    property set havingRoles ($arg :  boolean) {
      setRequireValue("havingRoles", 0, $arg)
    }
    
    property get producer () : Organization {
      return getRequireValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setRequireValue("producer", 0, $arg)
    }
    
    property get shouldCache () : boolean {
      return getRequireValue("shouldCache", 0) as java.lang.Boolean
    }
    
    property set shouldCache ($arg :  boolean) {
      setRequireValue("shouldCache", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AdminProducerCodeSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'cachingEnabled' attribute on SearchPanel at AdminProducerCodeSearchScreen.pcf: line 32, column 80
    function cachingEnabled_5 () : java.lang.Boolean {
      return shouldCache
    }
    
    // 'def' attribute on PanelRef at AdminProducerCodeSearchScreen.pcf: line 34, column 53
    function def_onEnter_1 (def :  pcf.ProducerCodeSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at AdminProducerCodeSearchScreen.pcf: line 37, column 26
    function def_onEnter_3 (def :  pcf.AdminProducerCodeSearchLV) : void {
      def.onEnter(producerCodes, carrier, filter, havingRoles)
    }
    
    // 'def' attribute on PanelRef at AdminProducerCodeSearchScreen.pcf: line 34, column 53
    function def_refreshVariables_2 (def :  pcf.ProducerCodeSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at AdminProducerCodeSearchScreen.pcf: line 37, column 26
    function def_refreshVariables_4 (def :  pcf.AdminProducerCodeSearchLV) : void {
      def.refreshVariables(producerCodes, carrier, filter, havingRoles)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at AdminProducerCodeSearchScreen.pcf: line 32, column 80
    function maxSearchResults_6 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at AdminProducerCodeSearchScreen.pcf: line 32, column 80
    function searchCriteria_8 () : gw.product.ProducerCodeSearchCriteria {
      return new gw.product.ProducerCodeSearchCriteria(producer)
    }
    
    // 'search' attribute on SearchPanel at AdminProducerCodeSearchScreen.pcf: line 32, column 80
    function search_7 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get producerCodes () : gw.api.database.IQueryBeanResult<ProducerCode> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<ProducerCode>
    }
    
    property get searchCriteria () : gw.product.ProducerCodeSearchCriteria {
      return getCriteriaValue(1) as gw.product.ProducerCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.product.ProducerCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}