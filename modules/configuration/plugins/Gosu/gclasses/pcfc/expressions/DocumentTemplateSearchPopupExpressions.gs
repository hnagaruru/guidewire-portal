package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentTemplateSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentTemplateSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, account :  Account, documentCreationInfo :  gw.document.DocumentCreationInfo) : int {
      return 0
    }
    
    static function __constructorIndex (symbolProvider :  gw.document.SymbolProvider) : int {
      return 1
    }
    
    override property get CurrentLocation () : pcf.DocumentTemplateSearchPopup {
      return super.CurrentLocation as pcf.DocumentTemplateSearchPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get documentCreationInfo () : gw.document.DocumentCreationInfo {
      return getVariableValue("documentCreationInfo", 0) as gw.document.DocumentCreationInfo
    }
    
    property set documentCreationInfo ($arg :  gw.document.DocumentCreationInfo) {
      setVariableValue("documentCreationInfo", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get symbolProvider () : gw.document.SymbolProvider {
      return getVariableValue("symbolProvider", 0) as gw.document.SymbolProvider
    }
    
    property set symbolProvider ($arg :  gw.document.SymbolProvider) {
      setVariableValue("symbolProvider", 0, $arg)
    }
    
    function createSearchCriteria() : DocumentTemplateSearchCriteria {
          var sc = new DocumentTemplateSearchCriteria()
          if (documentCreationInfo != null && documentCreationInfo.DocumentTemplateDescriptor != null) {
            sc.Language = gw.api.util.LocaleUtil.toLanguageType(documentCreationInfo.DocumentTemplateDescriptor.Language)
          }
          return sc
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends DocumentTemplateSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at DocumentTemplateSearchPopup.pcf: line 41, column 59
    function def_onEnter_0 (def :  pcf.DocumentTemplateSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at DocumentTemplateSearchPopup.pcf: line 43, column 84
    function def_onEnter_2 (def :  pcf.DocumentTemplateSearchResultsLV) : void {
      def.onEnter(documentTemplateSearchResultsList)
    }
    
    // 'def' attribute on PanelRef at DocumentTemplateSearchPopup.pcf: line 41, column 59
    function def_refreshVariables_1 (def :  pcf.DocumentTemplateSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at DocumentTemplateSearchPopup.pcf: line 43, column 84
    function def_refreshVariables_3 (def :  pcf.DocumentTemplateSearchResultsLV) : void {
      def.refreshVariables(documentTemplateSearchResultsList)
    }
    
    // 'searchCriteria' attribute on SearchPanel at DocumentTemplateSearchPopup.pcf: line 39, column 68
    function searchCriteria_5 () : entity.DocumentTemplateSearchCriteria {
      return createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at DocumentTemplateSearchPopup.pcf: line 39, column 68
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch(symbolProvider != null ? symbolProvider : documentCreationInfo)
    }
    
    property get documentTemplateSearchResultsList () : entity.DocumentTemplateSearchResults[] {
      return getResultsValue(1) as entity.DocumentTemplateSearchResults[]
    }
    
    property get searchCriteria () : entity.DocumentTemplateSearchCriteria {
      return getCriteriaValue(1) as entity.DocumentTemplateSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.DocumentTemplateSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}