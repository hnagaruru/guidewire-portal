package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/HVQSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HVQSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/search/HVQSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HVQSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HVQSearchScreen.pcf: line 12, column 55
    function def_onEnter_0 (def :  pcf.HVQPolicySearchPanelSet) : void {
      def.onEnter(defaultQuoteKey)
    }
    
    // 'def' attribute on PanelRef at HVQSearchScreen.pcf: line 12, column 55
    function def_refreshVariables_1 (def :  pcf.HVQPolicySearchPanelSet) : void {
      def.refreshVariables(defaultQuoteKey)
    }
    
    property get defaultQuoteKey () : gw.api.quoting.QuoteKey {
      return getRequireValue("defaultQuoteKey", 0) as gw.api.quoting.QuoteKey
    }
    
    property set defaultQuoteKey ($arg :  gw.api.quoting.QuoteKey) {
      setRequireValue("defaultQuoteKey", 0, $arg)
    }
    
    
  }
  
  
}