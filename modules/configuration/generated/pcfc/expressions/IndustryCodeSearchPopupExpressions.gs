package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IndustryCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IndustryCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (domain :  IndustryCodeType) : int {
      return 0
    }
    
    static function __constructorIndex (domain :  IndustryCodeType, referenceDate :  java.util.Date) : int {
      return 1
    }
    
    static function __constructorIndex (domain :  IndustryCodeType, referenceDate :  java.util.Date, previousIndustryCode :  IndustryCode) : int {
      return 2
    }
    
    // 'initialValue' attribute on Variable at IndustryCodeSearchPopup.pcf: line 24, column 30
    function initialValue_0 () : java.util.Date {
      return null
    }
    
    // 'initialValue' attribute on Variable at IndustryCodeSearchPopup.pcf: line 28, column 28
    function initialValue_1 () : IndustryCode {
      return null
    }
    
    // EditButtons at IndustryCodeSearchPopup.pcf: line 34, column 34
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.IndustryCodeSearchPopup {
      return super.CurrentLocation as pcf.IndustryCodeSearchPopup
    }
    
    property get domain () : IndustryCodeType {
      return getVariableValue("domain", 0) as IndustryCodeType
    }
    
    property set domain ($arg :  IndustryCodeType) {
      setVariableValue("domain", 0, $arg)
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 0) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 0, $arg)
    }
    
    property get referenceDate () : java.util.Date {
      return getVariableValue("referenceDate", 0) as java.util.Date
    }
    
    property set referenceDate ($arg :  java.util.Date) {
      setVariableValue("referenceDate", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends IndustryCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IndustryCodeSearchPopup.pcf: line 46, column 55
    function def_onEnter_3 (def :  pcf.IndustryCodeSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at IndustryCodeSearchPopup.pcf: line 48, column 60
    function def_onEnter_5 (def :  pcf.IndustryCodeSearchResultsLV) : void {
      def.onEnter(industryCodes)
    }
    
    // 'def' attribute on PanelRef at IndustryCodeSearchPopup.pcf: line 46, column 55
    function def_refreshVariables_4 (def :  pcf.IndustryCodeSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at IndustryCodeSearchPopup.pcf: line 48, column 60
    function def_refreshVariables_6 (def :  pcf.IndustryCodeSearchResultsLV) : void {
      def.refreshVariables(industryCodes)
    }
    
    // 'searchCriteria' attribute on SearchPanel at IndustryCodeSearchPopup.pcf: line 44, column 82
    function searchCriteria_8 () : gw.product.IndustryCodeSearchCriteria {
      return new gw.product.IndustryCodeSearchCriteria(domain, referenceDate, previousIndustryCode)
    }
    
    // 'search' attribute on SearchPanel at IndustryCodeSearchPopup.pcf: line 44, column 82
    function search_7 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get industryCodes () : gw.api.database.IQueryBeanResult<IndustryCode> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<IndustryCode>
    }
    
    property get searchCriteria () : gw.product.IndustryCodeSearchCriteria {
      return getCriteriaValue(1) as gw.product.IndustryCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.product.IndustryCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}