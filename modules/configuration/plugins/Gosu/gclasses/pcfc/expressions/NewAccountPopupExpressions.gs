package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/NewAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (forNewSubmission :  boolean) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at NewAccountPopup.pcf: line 15, column 49
    function def_onEnter_0 (def :  pcf.NewAccountScreen) : void {
      def.onEnter(forNewSubmission)
    }
    
    // 'def' attribute on ScreenRef at NewAccountPopup.pcf: line 15, column 49
    function def_refreshVariables_1 (def :  pcf.NewAccountScreen) : void {
      def.refreshVariables(forNewSubmission)
    }
    
    override property get CurrentLocation () : pcf.NewAccountPopup {
      return super.CurrentLocation as pcf.NewAccountPopup
    }
    
    property get forNewSubmission () : boolean {
      return getVariableValue("forNewSubmission", 0) as java.lang.Boolean
    }
    
    property set forNewSubmission ($arg :  boolean) {
      setVariableValue("forNewSubmission", 0, $arg)
    }
    
    
  }
  
  
}