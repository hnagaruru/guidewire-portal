package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ContactSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ContactSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 1
    }
    
    static function __constructorIndex (initialSearchCriteria :  ContactSearchCriteria, searchOnEnter :  Boolean) : int {
      return 2
    }
    
    static function __constructorIndex (errorMessage :  String) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at ContactSearch.pcf: line 31, column 135
    function def_onEnter_2 (def :  pcf.ContactSearchScreen) : void {
      def.onEnter({typekey.Contact.TC_COMPANY, typekey.Contact.TC_PERSON}, initialSearchCriteria, true, searchOnEnter)
    }
    
    // 'def' attribute on ScreenRef at ContactSearch.pcf: line 31, column 135
    function def_refreshVariables_3 (def :  pcf.ContactSearchScreen) : void {
      def.refreshVariables({typekey.Contact.TC_COMPANY, typekey.Contact.TC_PERSON}, initialSearchCriteria, true, searchOnEnter)
    }
    
    // 'initialValue' attribute on Variable at ContactSearch.pcf: line 17, column 22
    function initialValue_0 () : String {
      return null
    }
    
    // 'initialValue' attribute on Variable at ContactSearch.pcf: line 22, column 22
    function initialValue_1 () : String {
      return gw.web.ErrorConduit.addRequestScopedErrorMessagePassThrough(errorMessage)
    }
    
    // Page (id=ContactSearch) at ContactSearch.pcf: line 7, column 65
    static function parent_4 (errorMessage :  String, initialSearchCriteria :  ContactSearchCriteria, searchOnEnter :  Boolean) : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ContactSearch {
      return super.CurrentLocation as pcf.ContactSearch
    }
    
    property get errorMessage () : String {
      return getVariableValue("errorMessage", 0) as String
    }
    
    property set errorMessage ($arg :  String) {
      setVariableValue("errorMessage", 0, $arg)
    }
    
    property get initialSearchCriteria () : ContactSearchCriteria {
      return getVariableValue("initialSearchCriteria", 0) as ContactSearchCriteria
    }
    
    property set initialSearchCriteria ($arg :  ContactSearchCriteria) {
      setVariableValue("initialSearchCriteria", 0, $arg)
    }
    
    property get placeholderUsedToTriggerPassThroughMethod () : String {
      return getVariableValue("placeholderUsedToTriggerPassThroughMethod", 0) as String
    }
    
    property set placeholderUsedToTriggerPassThroughMethod ($arg :  String) {
      setVariableValue("placeholderUsedToTriggerPassThroughMethod", 0, $arg)
    }
    
    property get searchOnEnter () : Boolean {
      return getVariableValue("searchOnEnter", 0) as Boolean
    }
    
    property set searchOnEnter ($arg :  Boolean) {
      setVariableValue("searchOnEnter", 0, $arg)
    }
    
    
  }
  
  
}