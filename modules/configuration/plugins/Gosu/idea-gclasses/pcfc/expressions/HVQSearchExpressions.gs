package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/HVQSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HVQSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/HVQSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HVQSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (errorMessage :  String) : int {
      return 1
    }
    
    static function __constructorIndex (defaultQuoteKey :  gw.api.quoting.QuoteKey) : int {
      return 2
    }
    
    // 'canVisit' attribute on Page (id=HVQSearch) at HVQSearch.pcf: line 10, column 61
    static function canVisit_3 (defaultQuoteKey :  gw.api.quoting.QuoteKey, errorMessage :  String) : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.HVQEnabled.getValue()
    }
    
    // 'def' attribute on ScreenRef at HVQSearch.pcf: line 29, column 47
    function def_onEnter_1 (def :  pcf.HVQSearchScreen) : void {
      def.onEnter(defaultQuoteKey)
    }
    
    // 'def' attribute on ScreenRef at HVQSearch.pcf: line 29, column 47
    function def_refreshVariables_2 (def :  pcf.HVQSearchScreen) : void {
      def.refreshVariables(defaultQuoteKey)
    }
    
    // 'initialValue' attribute on Variable at HVQSearch.pcf: line 24, column 22
    function initialValue_0 () : String {
      return gw.web.ErrorConduit.addRequestScopedErrorMessagePassThrough(errorMessage)
    }
    
    // Page (id=HVQSearch) at HVQSearch.pcf: line 10, column 61
    static function parent_4 (defaultQuoteKey :  gw.api.quoting.QuoteKey, errorMessage :  String) : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    override property get CurrentLocation () : pcf.HVQSearch {
      return super.CurrentLocation as pcf.HVQSearch
    }
    
    property get defaultQuoteKey () : gw.api.quoting.QuoteKey {
      return getVariableValue("defaultQuoteKey", 0) as gw.api.quoting.QuoteKey
    }
    
    property set defaultQuoteKey ($arg :  gw.api.quoting.QuoteKey) {
      setVariableValue("defaultQuoteKey", 0, $arg)
    }
    
    property get errorMessage () : String {
      return getVariableValue("errorMessage", 0) as String
    }
    
    property set errorMessage ($arg :  String) {
      setVariableValue("errorMessage", 0, $arg)
    }
    
    property get placeholderUsedToTriggerPassThroughMethod () : String {
      return getVariableValue("placeholderUsedToTriggerPassThroughMethod", 0) as String
    }
    
    property set placeholderUsedToTriggerPassThroughMethod ($arg :  String) {
      setVariableValue("placeholderUsedToTriggerPassThroughMethod", 0, $arg)
    }
    
    
  }
  
  
}