package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoTransactionConfirmationLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DemoTransactionConfirmationLocationGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/DemoTransactionConfirmationLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DemoTransactionConfirmationLocationGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (reference :  String, address :  String, amount :  java.math.BigDecimal) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=DemoTransactionConfirmationLocationGroup) at DemoTransactionConfirmationLocationGroup.pcf: line 20, column 79
    function action_0 () : void {
      pcf.DemoTransactionConfirmationPage.go(reference, address, amount)
    }
    
    // 'location' attribute on LocationGroup (id=DemoTransactionConfirmationLocationGroup) at DemoTransactionConfirmationLocationGroup.pcf: line 20, column 79
    function action_dest_1 () : pcf.api.Destination {
      return pcf.DemoTransactionConfirmationPage.createDestination(reference, address, amount)
    }
    
    // LocationGroup (id=DemoTransactionConfirmationLocationGroup) at DemoTransactionConfirmationLocationGroup.pcf: line 7, column 88
    static function firstVisitableChildDestinationMethod_4 (address :  String, amount :  java.math.BigDecimal, reference :  String) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.DemoTransactionConfirmationPage.createDestination(reference, address, amount)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=DemoTransactionConfirmationLocationGroup) at DemoTransactionConfirmationLocationGroup.pcf: line 7, column 88
    function tabBar_onEnter_2 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=DemoTransactionConfirmationLocationGroup) at DemoTransactionConfirmationLocationGroup.pcf: line 7, column 88
    function tabBar_refreshVariables_3 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.DemoTransactionConfirmationLocationGroup {
      return super.CurrentLocation as pcf.DemoTransactionConfirmationLocationGroup
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