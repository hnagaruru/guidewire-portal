package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/NewFormPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewFormPatternExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/NewFormPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewFormPatternExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (dupFormPattern :  FormPattern) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=NewFormPattern) at NewFormPattern.pcf: line 14, column 66
    function afterCancel_4 () : void {
      FormPatterns.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewFormPattern) at NewFormPattern.pcf: line 14, column 66
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewFormPattern) at NewFormPattern.pcf: line 14, column 66
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      FormPatternDetail.go(formPattern)
    }
    
    // 'beforeCommit' attribute on Page (id=NewFormPattern) at NewFormPattern.pcf: line 14, column 66
    function beforeCommit_7 (pickedValue :  java.lang.Object) : void {
      formPattern.clearHiddenFieldsBeforeCommit(); gw.admin.FormPatternValidation.validateFormPattern(formPattern)
    }
    
    // 'canEdit' attribute on Page (id=NewFormPattern) at NewFormPattern.pcf: line 14, column 66
    function canEdit_8 () : java.lang.Boolean {
      return perm.System.formpatcreate
    }
    
    // 'def' attribute on ScreenRef at NewFormPattern.pcf: line 28, column 51
    function def_onEnter_2 (def :  pcf.FormPatternDetailScreen) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on ScreenRef at NewFormPattern.pcf: line 28, column 51
    function def_refreshVariables_3 (def :  pcf.FormPatternDetailScreen) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'initialValue' attribute on Variable at NewFormPattern.pcf: line 22, column 27
    function initialValue_0 () : FormPattern {
      return null
    }
    
    // 'initialValue' attribute on Variable at NewFormPattern.pcf: line 26, column 27
    function initialValue_1 () : FormPattern {
      return formPattern.createOrDuplicateFormPattern(dupFormPattern)
    }
    
    // 'parent' attribute on Page (id=NewFormPattern) at NewFormPattern.pcf: line 14, column 66
    static function parent_9 (dupFormPattern :  FormPattern) : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewFormPattern {
      return super.CurrentLocation as pcf.NewFormPattern
    }
    
    property get dupFormPattern () : FormPattern {
      return getVariableValue("dupFormPattern", 0) as FormPattern
    }
    
    property set dupFormPattern ($arg :  FormPattern) {
      setVariableValue("dupFormPattern", 0, $arg)
    }
    
    property get formPattern () : FormPattern {
      return getVariableValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setVariableValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}