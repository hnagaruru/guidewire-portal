package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeSearchScreen.pcf: line 22, column 28
    function initialValue_0 () : Organization {
      return Organization.finder.findCarrierOrganization()
    }
    
    property get cacheEnabled () : boolean {
      return getRequireValue("cacheEnabled", 0) as java.lang.Boolean
    }
    
    property set cacheEnabled ($arg :  boolean) {
      setRequireValue("cacheEnabled", 0, $arg)
    }
    
    property get carrier () : Organization {
      return getVariableValue("carrier", 0) as Organization
    }
    
    property set carrier ($arg :  Organization) {
      setVariableValue("carrier", 0, $arg)
    }
    
    property get checkUserSecurityZone () : boolean {
      return getRequireValue("checkUserSecurityZone", 0) as java.lang.Boolean
    }
    
    property set checkUserSecurityZone ($arg :  boolean) {
      setRequireValue("checkUserSecurityZone", 0, $arg)
    }
    
    property get producer () : Organization {
      return getRequireValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setRequireValue("producer", 0, $arg)
    }
    
    property get usedFor () : ProducerStatusUse {
      return getRequireValue("usedFor", 0) as ProducerStatusUse
    }
    
    property set usedFor ($arg :  ProducerStatusUse) {
      setRequireValue("usedFor", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ProducerCodeSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at ProducerCodeSearchScreen.pcf: line 44, column 74
    function action_3 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "ProducerCodeSearchLV" )
    }
    
    // 'cachingEnabled' attribute on SearchPanel at ProducerCodeSearchScreen.pcf: line 32, column 80
    function cachingEnabled_6 () : java.lang.Boolean {
      return cacheEnabled
    }
    
    // 'def' attribute on PanelRef at ProducerCodeSearchScreen.pcf: line 34, column 53
    function def_onEnter_1 (def :  pcf.ProducerCodeSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeSearchScreen.pcf: line 37, column 26
    function def_onEnter_4 (def :  pcf.ProducerCodeSearchLV) : void {
      def.onEnter(producerCodes, carrier)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeSearchScreen.pcf: line 34, column 53
    function def_refreshVariables_2 (def :  pcf.ProducerCodeSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeSearchScreen.pcf: line 37, column 26
    function def_refreshVariables_5 (def :  pcf.ProducerCodeSearchLV) : void {
      def.refreshVariables(producerCodes, carrier)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at ProducerCodeSearchScreen.pcf: line 32, column 80
    function maxSearchResults_7 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at ProducerCodeSearchScreen.pcf: line 32, column 80
    function searchCriteria_9 () : gw.product.ProducerCodeSearchCriteria {
      return new gw.product.ProducerCodeSearchCriteria(producer, checkUserSecurityZone, usedFor, true)
    }
    
    // 'search' attribute on SearchPanel at ProducerCodeSearchScreen.pcf: line 32, column 80
    function search_8 () : java.lang.Object {
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