package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DemoPaymentGatewayPageExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DemoPaymentGatewayPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (amount :  java.math.BigDecimal, jobNumber :  String) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at DemoPaymentGatewayPage.pcf: line 19, column 58
    function def_onEnter_0 (def :  pcf.DemoPaymentGatewayScreen) : void {
      def.onEnter(amount, jobNumber)
    }
    
    // 'def' attribute on ScreenRef at DemoPaymentGatewayPage.pcf: line 19, column 58
    function def_refreshVariables_1 (def :  pcf.DemoPaymentGatewayScreen) : void {
      def.refreshVariables(amount, jobNumber)
    }
    
    // Page (id=DemoPaymentGatewayPage) at DemoPaymentGatewayPage.pcf: line 9, column 74
    static function parent_2 (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Destination {
      return pcf.DemoPaymentGatewayLocationGroup.createDestination(amount,jobNumber)
    }
    
    override property get CurrentLocation () : pcf.DemoPaymentGatewayPage {
      return super.CurrentLocation as pcf.DemoPaymentGatewayPage
    }
    
    property get amount () : java.math.BigDecimal {
      return getVariableValue("amount", 0) as java.math.BigDecimal
    }
    
    property set amount ($arg :  java.math.BigDecimal) {
      setVariableValue("amount", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    
  }
  
  
}