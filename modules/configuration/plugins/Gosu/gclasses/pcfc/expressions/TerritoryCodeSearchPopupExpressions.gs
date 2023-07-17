package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TerritoryCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends TerritoryCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TerritoryCodeSearchPopup.pcf: line 64, column 61
    function def_onEnter_14 (def :  pcf.TerritoryCodeSearchResultsLV) : void {
      def.onEnter(searchResults)
    }
    
    // 'def' attribute on PanelRef at TerritoryCodeSearchPopup.pcf: line 64, column 61
    function def_refreshVariables_15 (def :  pcf.TerritoryCodeSearchResultsLV) : void {
      def.refreshVariables(searchResults)
    }
    
    // 'searchCriteria' attribute on SearchPanel at TerritoryCodeSearchPopup.pcf: line 31, column 41
    function searchCriteria_17 () : gw.lob.common.TerritoryLookupCriteria {
      return territoryCode.createLookupCriteria()
    }
    
    // 'search' attribute on SearchPanel at TerritoryCodeSearchPopup.pcf: line 31, column 41
    function search_16 () : java.lang.Object {
      return territoryCode.getTerritoryCodes(searchCriteria)
    }
    
    property get searchCriteria () : gw.lob.common.TerritoryLookupCriteria {
      return getCriteriaValue(1) as gw.lob.common.TerritoryLookupCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.common.TerritoryLookupCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : Territory[] {
      return getResultsValue(1) as Territory[]
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TerritoryCodeSearchDVExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at TerritoryCodeSearchPopup.pcf: line 60, column 47
    function def_onEnter_12 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at TerritoryCodeSearchPopup.pcf: line 46, column 66
    function def_onEnter_2 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(territoryOwner)
    }
    
    // 'def' attribute on InputSetRef at TerritoryCodeSearchPopup.pcf: line 60, column 47
    function def_refreshVariables_13 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at TerritoryCodeSearchPopup.pcf: line 46, column 66
    function def_refreshVariables_3 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(territoryOwner)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at TerritoryCodeSearchPopup.pcf: line 51, column 44
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at TerritoryCodeSearchPopup.pcf: line 56, column 51
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at TerritoryCodeSearchPopup.pcf: line 38, column 65
    function initialValue_0 () : gw.globalization.TerritoryCodeSearchAdapter {
      return new gw.globalization.TerritoryCodeSearchAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at TerritoryCodeSearchPopup.pcf: line 43, column 69
    function initialValue_1 () : gw.pcf.contacts.TerritoryCodeAddressSearchOwner {
      return new gw.pcf.contacts.TerritoryCodeAddressSearchOwner(territoryCodeSearchAdapter)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at TerritoryCodeSearchPopup.pcf: line 51, column 44
    function valueRoot_6 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at TerritoryCodeSearchPopup.pcf: line 51, column 44
    function value_4 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at TerritoryCodeSearchPopup.pcf: line 56, column 51
    function value_8 () : java.lang.String {
      return searchCriteria.Description
    }
    
    property get territoryCodeSearchAdapter () : gw.globalization.TerritoryCodeSearchAdapter {
      return getVariableValue("territoryCodeSearchAdapter", 2) as gw.globalization.TerritoryCodeSearchAdapter
    }
    
    property set territoryCodeSearchAdapter ($arg :  gw.globalization.TerritoryCodeSearchAdapter) {
      setVariableValue("territoryCodeSearchAdapter", 2, $arg)
    }
    
    property get territoryOwner () : gw.pcf.contacts.TerritoryCodeAddressSearchOwner {
      return getVariableValue("territoryOwner", 2) as gw.pcf.contacts.TerritoryCodeAddressSearchOwner
    }
    
    property set territoryOwner ($arg :  gw.pcf.contacts.TerritoryCodeAddressSearchOwner) {
      setVariableValue("territoryOwner", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TerritoryCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TerritoryCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, territoryCode :  TerritoryCode) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.TerritoryCodeSearchPopup {
      return super.CurrentLocation as pcf.TerritoryCodeSearchPopup
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get territoryCode () : TerritoryCode {
      return getVariableValue("territoryCode", 0) as TerritoryCode
    }
    
    property set territoryCode ($arg :  TerritoryCode) {
      setVariableValue("territoryCode", 0, $arg)
    }
    
    
  }
  
  
}