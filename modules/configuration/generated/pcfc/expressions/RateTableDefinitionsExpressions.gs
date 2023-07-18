package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=RateTableDefinitions) at RateTableDefinitions.pcf: line 10, column 78
    static function canVisit_2 () : java.lang.Boolean {
      return perm.System.ratebookview
    }
    
    // 'def' attribute on ScreenRef at RateTableDefinitions.pcf: line 14, column 48
    function def_onEnter_0 (def :  pcf.RateTableDefinitionSearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at RateTableDefinitions.pcf: line 14, column 48
    function def_refreshVariables_1 (def :  pcf.RateTableDefinitionSearchScreen) : void {
      def.refreshVariables()
    }
    
    // Page (id=RateTableDefinitions) at RateTableDefinitions.pcf: line 10, column 78
    static function parent_3 () : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    override property get CurrentLocation () : pcf.RateTableDefinitions {
      return super.CurrentLocation as pcf.RateTableDefinitions
    }
    
    
  }
  
  
}