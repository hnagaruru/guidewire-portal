package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/PolicySearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
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
    
    // 'canVisit' attribute on Page (id=PolicySearch) at PolicySearch.pcf: line 9, column 64
    static function canVisit_3 (errorMessage :  String) : java.lang.Boolean {
      return perm.System.searchpols
    }
    
    // 'def' attribute on ScreenRef at PolicySearch.pcf: line 23, column 35
    function def_onEnter_1 (def :  pcf.PolicySearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at PolicySearch.pcf: line 23, column 35
    function def_refreshVariables_2 (def :  pcf.PolicySearchScreen) : void {
      def.refreshVariables()
    }
    
    // 'initialValue' attribute on Variable at PolicySearch.pcf: line 21, column 22
    function initialValue_0 () : String {
      return gw.web.ErrorConduit.addRequestScopedErrorMessagePassThrough(errorMessage)
    }
    
    // Page (id=PolicySearch) at PolicySearch.pcf: line 9, column 64
    static function parent_4 (errorMessage :  String) : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PolicySearch {
      return super.CurrentLocation as pcf.PolicySearch
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