package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CollectCreditCardLocationGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CollectCreditCardLocationGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobNumber :  String) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=CollectCreditCardLocationGroup) at CollectCreditCardLocationGroup.pcf: line 14, column 52
    function action_0 () : void {
      pcf.CollectCreditCardPage.go(jobNumber)
    }
    
    // 'location' attribute on LocationGroup (id=CollectCreditCardLocationGroup) at CollectCreditCardLocationGroup.pcf: line 14, column 52
    function action_dest_1 () : pcf.api.Destination {
      return pcf.CollectCreditCardPage.createDestination(jobNumber)
    }
    
    // LocationGroup (id=CollectCreditCardLocationGroup) at CollectCreditCardLocationGroup.pcf: line 7, column 82
    static function firstVisitableChildDestinationMethod_4 (jobNumber :  String) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.CollectCreditCardPage.createDestination(jobNumber)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=CollectCreditCardLocationGroup) at CollectCreditCardLocationGroup.pcf: line 7, column 82
    function tabBar_onEnter_2 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=CollectCreditCardLocationGroup) at CollectCreditCardLocationGroup.pcf: line 7, column 82
    function tabBar_refreshVariables_3 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.CollectCreditCardLocationGroup {
      return super.CurrentLocation as pcf.CollectCreditCardLocationGroup
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    
  }
  
  
}