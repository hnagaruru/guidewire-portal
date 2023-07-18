package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formPattern :  FormPattern) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=FormPatternDetail) at FormPatternDetail.pcf: line 11, column 94
    function beforeCommit_2 (pickedValue :  java.lang.Object) : void {
      formPattern.clearHiddenFieldsBeforeCommit(); gw.admin.FormPatternValidation.validateFormPattern(formPattern)
    }
    
    // 'canEdit' attribute on Page (id=FormPatternDetail) at FormPatternDetail.pcf: line 11, column 94
    function canEdit_3 () : java.lang.Boolean {
      return perm.System.formpatedit
    }
    
    // 'def' attribute on ScreenRef at FormPatternDetail.pcf: line 18, column 51
    function def_onEnter_0 (def :  pcf.FormPatternDetailScreen) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on ScreenRef at FormPatternDetail.pcf: line 18, column 51
    function def_refreshVariables_1 (def :  pcf.FormPatternDetailScreen) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'parent' attribute on Page (id=FormPatternDetail) at FormPatternDetail.pcf: line 11, column 94
    static function parent_4 (formPattern :  FormPattern) : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    // 'title' attribute on Page (id=FormPatternDetail) at FormPatternDetail.pcf: line 11, column 94
    static function title_5 (formPattern :  FormPattern) : java.lang.Object {
      return DisplayKey.get("Web.Admin.FormPatternDetail", formPattern.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.FormPatternDetail {
      return super.CurrentLocation as pcf.FormPatternDetail
    }
    
    property get formPattern () : FormPattern {
      return getVariableValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setVariableValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}