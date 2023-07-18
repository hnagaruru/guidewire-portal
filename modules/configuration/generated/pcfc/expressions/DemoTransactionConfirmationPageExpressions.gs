package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoTransactionConfirmationPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DemoTransactionConfirmationPageExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/DemoTransactionConfirmationPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DemoTransactionConfirmationPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (reference :  String, address :  String, amount :  java.math.BigDecimal) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at DemoTransactionConfirmationPage.pcf: line 20, column 76
    function def_onEnter_0 (def :  pcf.DemoTransactionConfirmationScreen) : void {
      def.onEnter(reference, amount, address)
    }
    
    // 'def' attribute on ScreenRef at DemoTransactionConfirmationPage.pcf: line 20, column 76
    function def_refreshVariables_1 (def :  pcf.DemoTransactionConfirmationScreen) : void {
      def.refreshVariables(reference, amount, address)
    }
    
    // Page (id=DemoTransactionConfirmationPage) at DemoTransactionConfirmationPage.pcf: line 7, column 88
    static function parent_2 (address :  String, amount :  java.math.BigDecimal, reference :  String) : pcf.api.Destination {
      return pcf.DemoTransactionConfirmationLocationGroup.createDestination(reference,address,amount)
    }
    
    override property get CurrentLocation () : pcf.DemoTransactionConfirmationPage {
      return super.CurrentLocation as pcf.DemoTransactionConfirmationPage
    }
    
    property get address () : String {
      return getVariableValue("address", 0) as String
    }
    
    property set address ($arg :  String) {
      setVariableValue("address", 0, $arg)
    }
    
    property get amount () : java.math.BigDecimal {
      return getVariableValue("amount", 0) as java.math.BigDecimal
    }
    
    property set amount ($arg :  java.math.BigDecimal) {
      setVariableValue("amount", 0, $arg)
    }
    
    property get reference () : String {
      return getVariableValue("reference", 0) as String
    }
    
    property set reference ($arg :  String) {
      setVariableValue("reference", 0, $arg)
    }
    
    
  }
  
  
}