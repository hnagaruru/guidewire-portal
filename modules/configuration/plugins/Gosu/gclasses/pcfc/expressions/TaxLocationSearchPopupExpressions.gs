package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TaxLocationSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends TaxLocationSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TaxLocationSearchPopup.pcf: line 32, column 28
    function def_onEnter_0 (def :  pcf.TaxLocationSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at TaxLocationSearchPopup.pcf: line 34, column 75
    function def_onEnter_2 (def :  pcf.TaxLocationSearchResultsLV) : void {
      def.onEnter(searchResults?.toTypedArray())
    }
    
    // 'def' attribute on PanelRef at TaxLocationSearchPopup.pcf: line 32, column 28
    function def_refreshVariables_1 (def :  pcf.TaxLocationSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at TaxLocationSearchPopup.pcf: line 34, column 75
    function def_refreshVariables_3 (def :  pcf.TaxLocationSearchResultsLV) : void {
      def.refreshVariables(searchResults?.toTypedArray())
    }
    
    // 'searchCriteria' attribute on SearchPanel at TaxLocationSearchPopup.pcf: line 29, column 81
    function searchCriteria_5 () : gw.lob.common.TaxLocationSearchCriteria {
      return new gw.lob.common.TaxLocationSearchCriteria() { :State = state, :EffectiveOnDate = policyPeriod.PeriodStart }
    }
    
    // 'search' attribute on SearchPanel at TaxLocationSearchPopup.pcf: line 29, column 81
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get searchCriteria () : gw.lob.common.TaxLocationSearchCriteria {
      return getCriteriaValue(1) as gw.lob.common.TaxLocationSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.common.TaxLocationSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<TaxLocation> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<TaxLocation>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TaxLocationSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, state :  Jurisdiction) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.TaxLocationSearchPopup {
      return super.CurrentLocation as pcf.TaxLocationSearchPopup
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get state () : Jurisdiction {
      return getVariableValue("state", 0) as Jurisdiction
    }
    
    property set state ($arg :  Jurisdiction) {
      setVariableValue("state", 0, $arg)
    }
    
    
  }
  
  
}