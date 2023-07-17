package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
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
    
    static function __constructorIndex (producer :  Organization, forUse :  ProducerStatusUse) : int {
      return 2
    }
    
    // 'canVisit' attribute on Page (id=ProducerCodeSearch) at ProducerCodeSearch.pcf: line 8, column 70
    static function canVisit_2 (forUse :  ProducerStatusUse, producer :  Organization) : java.lang.Boolean {
      return perm.System.searchprodcodes
    }
    
    // 'def' attribute on ScreenRef at ProducerCodeSearch.pcf: line 22, column 69
    function def_onEnter_0 (def :  pcf.ProducerCodeSearchScreen) : void {
      def.onEnter(producer, forUse, true, true)
    }
    
    // 'def' attribute on ScreenRef at ProducerCodeSearch.pcf: line 22, column 69
    function def_refreshVariables_1 (def :  pcf.ProducerCodeSearchScreen) : void {
      def.refreshVariables(producer, forUse, true, true)
    }
    
    // Page (id=ProducerCodeSearch) at ProducerCodeSearch.pcf: line 8, column 70
    static function parent_3 (forUse :  ProducerStatusUse, producer :  Organization) : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ProducerCodeSearch {
      return super.CurrentLocation as pcf.ProducerCodeSearch
    }
    
    property get forUse () : ProducerStatusUse {
      return getVariableValue("forUse", 0) as ProducerStatusUse
    }
    
    property set forUse ($arg :  ProducerStatusUse) {
      setVariableValue("forUse", 0, $arg)
    }
    
    property get producer () : Organization {
      return getVariableValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setVariableValue("producer", 0, $arg)
    }
    
    
  }
  
  
}