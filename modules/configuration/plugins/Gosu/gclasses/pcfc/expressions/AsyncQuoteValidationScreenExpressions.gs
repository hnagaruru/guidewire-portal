package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/AsyncQuoteValidationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AsyncQuoteValidationScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/AsyncQuoteValidationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AsyncQuoteValidationScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AsyncQuoteValidationScreen_ClearButton) at AsyncQuoteValidationScreen.pcf: line 11, column 57
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    
  }
  
  
}