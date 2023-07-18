package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/RiskClassSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RiskClassSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/RiskClassSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RiskClassSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyLinePattern :  gw.api.productmodel.PolicyLinePattern, coveragePattern :  gw.api.productmodel.CoveragePattern) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.RiskClassSearchPopup {
      return super.CurrentLocation as pcf.RiskClassSearchPopup
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getVariableValue("coveragePattern", 0) as gw.api.productmodel.CoveragePattern
    }
    
    property set coveragePattern ($arg :  gw.api.productmodel.CoveragePattern) {
      setVariableValue("coveragePattern", 0, $arg)
    }
    
    property get policyLinePattern () : gw.api.productmodel.PolicyLinePattern {
      return getVariableValue("policyLinePattern", 0) as gw.api.productmodel.PolicyLinePattern
    }
    
    property set policyLinePattern ($arg :  gw.api.productmodel.PolicyLinePattern) {
      setVariableValue("policyLinePattern", 0, $arg)
    }
    
    function createCriteria() : gw.lob.common.RiskClassSearchCriteria {
          var criteria = new gw.lob.common.RiskClassSearchCriteria()
          criteria.PolicyLinePatternCode = policyLinePattern.PublicID
          criteria.CoveragePatternCode = coveragePattern.PublicID
          return criteria
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/RiskClassSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RiskClassSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RiskClassSearchPopup.pcf: line 29, column 52
    function def_onEnter_0 (def :  pcf.RiskClassSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RiskClassSearchPopup.pcf: line 31, column 74
    function def_onEnter_2 (def :  pcf.RiskClassSearchResultsLV) : void {
      def.onEnter(riskClasses, policyLinePattern)
    }
    
    // 'def' attribute on PanelRef at RiskClassSearchPopup.pcf: line 29, column 52
    function def_refreshVariables_1 (def :  pcf.RiskClassSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RiskClassSearchPopup.pcf: line 31, column 74
    function def_refreshVariables_3 (def :  pcf.RiskClassSearchResultsLV) : void {
      def.refreshVariables(riskClasses, policyLinePattern)
    }
    
    // 'searchCriteria' attribute on SearchPanel at RiskClassSearchPopup.pcf: line 27, column 79
    function searchCriteria_5 () : gw.lob.common.RiskClassSearchCriteria {
      return createCriteria()
    }
    
    // 'search' attribute on SearchPanel at RiskClassSearchPopup.pcf: line 27, column 79
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get riskClasses () : gw.api.database.IQueryBeanResult<RiskClass> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<RiskClass>
    }
    
    property get searchCriteria () : gw.lob.common.RiskClassSearchCriteria {
      return getCriteriaValue(1) as gw.lob.common.RiskClassSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.common.RiskClassSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}