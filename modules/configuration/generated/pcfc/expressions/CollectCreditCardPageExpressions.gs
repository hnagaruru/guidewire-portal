package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CollectCreditCardPageExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CollectCreditCardPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobNumber :  String) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at CollectCreditCardPage.pcf: line 16, column 49
    function def_onEnter_0 (def :  pcf.CollectCreditCardScreen) : void {
      def.onEnter(jobNumber)
    }
    
    // 'def' attribute on ScreenRef at CollectCreditCardPage.pcf: line 16, column 49
    function def_refreshVariables_1 (def :  pcf.CollectCreditCardScreen) : void {
      def.refreshVariables(jobNumber)
    }
    
    // Page (id=CollectCreditCardPage) at CollectCreditCardPage.pcf: line 9, column 82
    static function parent_2 (jobNumber :  String) : pcf.api.Destination {
      return pcf.CollectCreditCardLocationGroup.createDestination(jobNumber)
    }
    
    override property get CurrentLocation () : pcf.CollectCreditCardPage {
      return super.CurrentLocation as pcf.CollectCreditCardPage
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    
  }
  
  
}