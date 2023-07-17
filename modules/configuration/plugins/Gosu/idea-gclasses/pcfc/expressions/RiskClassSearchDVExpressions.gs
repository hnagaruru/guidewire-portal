package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/RiskClassSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RiskClassSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/RiskClassSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RiskClassSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RiskClassSearchDV.pcf: line 20, column 41
    function def_onEnter_4 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at RiskClassSearchDV.pcf: line 20, column 41
    function def_refreshVariables_5 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RiskClassSearchDV.pcf: line 16, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RiskClassSearchDV.pcf: line 16, column 45
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RiskClassSearchDV.pcf: line 16, column 45
    function value_0 () : java.lang.String {
      return searchCriteria.Description
    }
    
    property get searchCriteria () : gw.lob.common.RiskClassSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.lob.common.RiskClassSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.common.RiskClassSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}