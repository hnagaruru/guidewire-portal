package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/ParameterSetsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ParameterSetsPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/ParameterSetsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ParameterSetsPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at ParameterSetsPage.pcf: line 10, column 41
    function def_onEnter_0 (def :  pcf.RatingParameterSetScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at ParameterSetsPage.pcf: line 10, column 41
    function def_refreshVariables_1 (def :  pcf.RatingParameterSetScreen) : void {
      def.refreshVariables()
    }
    
    // Page (id=ParameterSetsPage) at ParameterSetsPage.pcf: line 8, column 72
    static function parent_2 () : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ParameterSetsPage {
      return super.CurrentLocation as pcf.ParameterSetsPage
    }
    
    
  }
  
  
}