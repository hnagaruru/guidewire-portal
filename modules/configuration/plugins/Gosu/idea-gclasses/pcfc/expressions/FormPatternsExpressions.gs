package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatterns.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatterns.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=FormPatterns) at FormPatterns.pcf: line 10, column 64
    function canEdit_2 () : java.lang.Boolean {
      return perm.System.formpatedit
    }
    
    // 'canVisit' attribute on Page (id=FormPatterns) at FormPatterns.pcf: line 10, column 64
    static function canVisit_3 () : java.lang.Boolean {
      return perm.System.formpatview
    }
    
    // 'def' attribute on ScreenRef at FormPatterns.pcf: line 12, column 40
    function def_onEnter_0 (def :  pcf.FormPatternSearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at FormPatterns.pcf: line 12, column 40
    function def_refreshVariables_1 (def :  pcf.FormPatternSearchScreen) : void {
      def.refreshVariables()
    }
    
    // Page (id=FormPatterns) at FormPatterns.pcf: line 10, column 64
    static function parent_4 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    override property get CurrentLocation () : pcf.FormPatterns {
      return super.CurrentLocation as pcf.FormPatterns
    }
    
    
  }
  
  
}