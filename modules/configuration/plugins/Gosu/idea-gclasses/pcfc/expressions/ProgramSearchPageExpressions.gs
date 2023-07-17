package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProgramSearchPageExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProgramSearchPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=ProgramSearchPage) at ProgramSearchPage.pcf: line 8, column 77
    function canEdit_2 () : java.lang.Boolean {
      return perm.System.viewreinsuranceprogram
    }
    
    // 'def' attribute on ScreenRef at ProgramSearchPage.pcf: line 10, column 36
    function def_onEnter_0 (def :  pcf.ProgramSearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at ProgramSearchPage.pcf: line 10, column 36
    function def_refreshVariables_1 (def :  pcf.ProgramSearchScreen) : void {
      def.refreshVariables()
    }
    
    // Page (id=ProgramSearchPage) at ProgramSearchPage.pcf: line 8, column 77
    static function parent_3 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ProgramSearchPage {
      return super.CurrentLocation as pcf.ProgramSearchPage
    }
    
    
  }
  
  
}