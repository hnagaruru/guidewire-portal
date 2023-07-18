package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=FormPatternDetailScreen_DeleteButton) at FormPatternDetailScreen.pcf: line 18, column 73
    function action_2 () : void {
      gw.api.admin.FormPatternUtil.deleteFormPattern(formPattern); FormPatterns.go()
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailScreen.pcf: line 21, column 47
    function def_onEnter_3 (def :  pcf.FormPatternDetailCV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailScreen.pcf: line 21, column 47
    function def_refreshVariables_4 (def :  pcf.FormPatternDetailCV) : void {
      def.refreshVariables(formPattern)
    }
    
    // EditButtons at FormPatternDetailScreen.pcf: line 11, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=FormPatternDetailScreen_DeleteButton) at FormPatternDetailScreen.pcf: line 18, column 73
    function visible_1 () : java.lang.Boolean {
      return perm.System.formpatdelete and not isProductionMode()
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    function isProductionMode() : boolean {
      return not gw.api.system.PLDependenciesGateway.getServerMode().isDev()
    }
    
    
  }
  
  
}