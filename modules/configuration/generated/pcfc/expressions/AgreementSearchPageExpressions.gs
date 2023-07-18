package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementSearchPageExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementSearchPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AgreementSearchPage) at AgreementSearchPage.pcf: line 8, column 79
    static function canVisit_2 () : java.lang.Boolean {
      return perm.System.viewreinsuranceprogram
    }
    
    // 'def' attribute on ScreenRef at AgreementSearchPage.pcf: line 10, column 38
    function def_onEnter_0 (def :  pcf.AgreementSearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at AgreementSearchPage.pcf: line 10, column 38
    function def_refreshVariables_1 (def :  pcf.AgreementSearchScreen) : void {
      def.refreshVariables()
    }
    
    // Page (id=AgreementSearchPage) at AgreementSearchPage.pcf: line 8, column 79
    static function parent_3 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AgreementSearchPage {
      return super.CurrentLocation as pcf.AgreementSearchPage
    }
    
    
  }
  
  
}