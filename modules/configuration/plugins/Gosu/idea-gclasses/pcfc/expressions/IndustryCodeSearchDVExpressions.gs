package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IndustryCodeSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IndustryCodeSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at IndustryCodeSearchDV.pcf: line 35, column 41
    function def_onEnter_8 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at IndustryCodeSearchDV.pcf: line 35, column 41
    function def_refreshVariables_9 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at IndustryCodeSearchDV.pcf: line 16, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at IndustryCodeSearchDV.pcf: line 22, column 48
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Classification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at IndustryCodeSearchDV.pcf: line 16, column 38
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at IndustryCodeSearchDV.pcf: line 16, column 38
    function value_0 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at IndustryCodeSearchDV.pcf: line 22, column 48
    function value_4 () : java.lang.String {
      return searchCriteria.Classification
    }
    
    property get searchCriteria () : gw.product.IndustryCodeSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.product.IndustryCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.product.IndustryCodeSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}