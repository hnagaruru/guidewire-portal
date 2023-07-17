package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DemoPaymentGatewayLocationGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DemoPaymentGatewayLocationGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (amount :  java.math.BigDecimal, jobNumber :  String) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=DemoPaymentGatewayLocationGroup) at DemoPaymentGatewayLocationGroup.pcf: line 17, column 61
    function action_0 () : void {
      pcf.DemoPaymentGatewayPage.go(amount, jobNumber)
    }
    
    // 'location' attribute on LocationGroup (id=DemoPaymentGatewayLocationGroup) at DemoPaymentGatewayLocationGroup.pcf: line 17, column 61
    function action_dest_1 () : pcf.api.Destination {
      return pcf.DemoPaymentGatewayPage.createDestination(amount, jobNumber)
    }
    
    // LocationGroup (id=DemoPaymentGatewayLocationGroup) at DemoPaymentGatewayLocationGroup.pcf: line 7, column 74
    static function firstVisitableChildDestinationMethod_4 (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.DemoPaymentGatewayPage.createDestination(amount, jobNumber)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=DemoPaymentGatewayLocationGroup) at DemoPaymentGatewayLocationGroup.pcf: line 7, column 74
    function tabBar_onEnter_2 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=DemoPaymentGatewayLocationGroup) at DemoPaymentGatewayLocationGroup.pcf: line 7, column 74
    function tabBar_refreshVariables_3 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.DemoPaymentGatewayLocationGroup {
      return super.CurrentLocation as pcf.DemoPaymentGatewayLocationGroup
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