package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/AccountSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/AccountSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 1
    }
    
    static function __constructorIndex (errorMessage :  String) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AccountSearch) at AccountSearch.pcf: line 9, column 65
    static function canVisit_4 (errorMessage :  String) : java.lang.Boolean {
      return perm.System.searchaccounts
    }
    
    // 'def' attribute on ScreenRef at AccountSearch.pcf: line 24, column 40
    function def_onEnter_2 (def :  pcf.AccountSearchScreen) : void {
      def.onEnter(null)
    }
    
    // 'def' attribute on ScreenRef at AccountSearch.pcf: line 24, column 40
    function def_refreshVariables_3 (def :  pcf.AccountSearchScreen) : void {
      def.refreshVariables(null)
    }
    
    // 'initialValue' attribute on Variable at AccountSearch.pcf: line 17, column 22
    function initialValue_0 () : String {
      return null
    }
    
    // 'initialValue' attribute on Variable at AccountSearch.pcf: line 22, column 22
    function initialValue_1 () : String {
      return gw.web.ErrorConduit.addRequestScopedErrorMessagePassThrough(errorMessage)
    }
    
    // Page (id=AccountSearch) at AccountSearch.pcf: line 9, column 65
    static function parent_5 (errorMessage :  String) : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AccountSearch {
      return super.CurrentLocation as pcf.AccountSearch
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