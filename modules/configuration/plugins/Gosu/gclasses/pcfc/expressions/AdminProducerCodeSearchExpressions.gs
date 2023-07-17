package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminProducerCodeSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminProducerCodeSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (producer :  Organization) : int {
      return 1
    }
    
    // 'canVisit' attribute on Page (id=AdminProducerCodeSearch) at AdminProducerCodeSearch.pcf: line 8, column 64
    static function canVisit_4 (producer :  Organization) : java.lang.Boolean {
      return perm.System.searchprodcodes
    }
    
    // 'def' attribute on ScreenRef at AdminProducerCodeSearch.pcf: line 23, column 75
    function def_onEnter_2 (def :  pcf.AdminProducerCodeSearchScreen) : void {
      def.onEnter(producer, filter, false, true)
    }
    
    // 'def' attribute on ScreenRef at AdminProducerCodeSearch.pcf: line 23, column 75
    function def_refreshVariables_3 (def :  pcf.AdminProducerCodeSearchScreen) : void {
      def.refreshVariables(producer, filter, false, true)
    }
    
    // 'initialValue' attribute on Variable at AdminProducerCodeSearch.pcf: line 17, column 28
    function initialValue_0 () : Organization {
      return User.util.CurrentUser.Organization
    }
    
    // 'initialValue' attribute on Variable at AdminProducerCodeSearch.pcf: line 21, column 29
    function initialValue_1 () : java.util.Set {
      return new java.util.TreeSet()
    }
    
    // Page (id=AdminProducerCodeSearch) at AdminProducerCodeSearch.pcf: line 8, column 64
    static function parent_5 (producer :  Organization) : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AdminProducerCodeSearch {
      return super.CurrentLocation as pcf.AdminProducerCodeSearch
    }
    
    property get filter () : java.util.Set {
      return getVariableValue("filter", 0) as java.util.Set
    }
    
    property set filter ($arg :  java.util.Set) {
      setVariableValue("filter", 0, $arg)
    }
    
    property get producer () : Organization {
      return getVariableValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setVariableValue("producer", 0, $arg)
    }
    
    
  }
  
  
}