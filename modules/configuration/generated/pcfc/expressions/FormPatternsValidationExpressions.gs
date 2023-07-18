package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/FormPatternsValidation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternsValidationExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/FormPatternsValidation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternsValidationExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=FormPatternsValidation) at FormPatternsValidation.pcf: line 10, column 79
    static function canVisit_0 () : java.lang.Boolean {
      return perm.System.formpatedit
    }
    
    // 'parent' attribute on Page (id=FormPatternsValidation) at FormPatternsValidation.pcf: line 10, column 79
    static function parent_1 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.FormPatternsValidation {
      return super.CurrentLocation as pcf.FormPatternsValidation
    }
    
    
  }
  
  
}