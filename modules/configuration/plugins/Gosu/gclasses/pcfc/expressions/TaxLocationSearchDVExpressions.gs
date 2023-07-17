package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TaxLocationSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/TaxLocationSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TaxLocationSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at TaxLocationSearchDV.pcf: line 36, column 41
    function def_onEnter_15 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at TaxLocationSearchDV.pcf: line 22, column 116
    function def_onEnter_5 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.TaxLocationAddressSearchOwner(taxLocSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at TaxLocationSearchDV.pcf: line 36, column 41
    function def_refreshVariables_16 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at TaxLocationSearchDV.pcf: line 22, column 116
    function def_refreshVariables_6 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.TaxLocationAddressSearchOwner(taxLocSearchAdapter))
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at TaxLocationSearchDV.pcf: line 32, column 45
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at TaxLocationSearchDV.pcf: line 20, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TLPrefix_Input) at TaxLocationSearchDV.pcf: line 27, column 51
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.TaxLocationPrefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at TaxLocationSearchDV.pcf: line 14, column 57
    function initialValue_0 () : gw.globalization.TaxLocationSearchAdapter {
      return new gw.globalization.TaxLocationSearchAdapter(searchCriteria)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at TaxLocationSearchDV.pcf: line 20, column 38
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at TaxLocationSearchDV.pcf: line 20, column 38
    function value_1 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at TaxLocationSearchDV.pcf: line 32, column 45
    function value_11 () : java.lang.String {
      return searchCriteria.Description
    }
    
    // 'value' attribute on TextInput (id=TLPrefix_Input) at TaxLocationSearchDV.pcf: line 27, column 51
    function value_7 () : java.lang.String {
      return searchCriteria.TaxLocationPrefix
    }
    
    property get searchCriteria () : gw.lob.common.TaxLocationSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.lob.common.TaxLocationSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.common.TaxLocationSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get taxLocSearchAdapter () : gw.globalization.TaxLocationSearchAdapter {
      return getVariableValue("taxLocSearchAdapter", 0) as gw.globalization.TaxLocationSearchAdapter
    }
    
    property set taxLocSearchAdapter ($arg :  gw.globalization.TaxLocationSearchAdapter) {
      setVariableValue("taxLocSearchAdapter", 0, $arg)
    }
    
    
  }
  
  
}