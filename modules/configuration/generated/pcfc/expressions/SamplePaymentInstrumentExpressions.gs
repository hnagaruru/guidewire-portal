package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/demopaymentsystem/SamplePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SamplePaymentInstrumentExpressions {
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/SamplePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SamplePaymentInstrumentExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // LocationGroup (id=SamplePaymentInstrument) at SamplePaymentInstrument.pcf: line 9, column 45
    static function firstVisitableChildDestinationMethod_4 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.CreateSamplePaymentInstrument.createDestination(null, null, null, null, null, null, null, null, null)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuLinks' attribute on LocationGroup (id=SamplePaymentInstrument) at SamplePaymentInstrument.pcf: line 9, column 45
    function menuLinks_onEnter_0 (def :  pcf.PaymentInstrumentMenuLinks) : void {
      def.onEnter()
    }
    
    // 'menuLinks' attribute on LocationGroup (id=SamplePaymentInstrument) at SamplePaymentInstrument.pcf: line 9, column 45
    function menuLinks_refreshVariables_1 (def :  pcf.PaymentInstrumentMenuLinks) : void {
      def.refreshVariables()
    }
    
    // 'tabBar' attribute on LocationGroup (id=SamplePaymentInstrument) at SamplePaymentInstrument.pcf: line 9, column 45
    function tabBar_onEnter_2 (def :  pcf.PaymentInstrumentTabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=SamplePaymentInstrument) at SamplePaymentInstrument.pcf: line 9, column 45
    function tabBar_refreshVariables_3 (def :  pcf.PaymentInstrumentTabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.SamplePaymentInstrument {
      return super.CurrentLocation as pcf.SamplePaymentInstrument
    }
    
    
  }
  
  
}