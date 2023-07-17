package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriverScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BADriverScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriverScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BADriverScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BADriverScreen.pcf: line 22, column 38
    function def_onEnter_2 (def :  pcf.BADriversDV) : void {
      def.onEnter(thisDriver)
    }
    
    // 'def' attribute on PanelRef at BADriverScreen.pcf: line 22, column 38
    function def_refreshVariables_3 (def :  pcf.BADriversDV) : void {
      def.refreshVariables(thisDriver)
    }
    
    // 'editable' attribute on Screen (id=BADriverScreen) at BADriverScreen.pcf: line 7, column 25
    function editable_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // EditButtons at BADriverScreen.pcf: line 19, column 33
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at BADriverScreen.pcf: line 19, column 33
    function pickValue_0 () : CommercialDriver {
      return thisDriver
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get thisDriver () : CommercialDriver {
      return getRequireValue("thisDriver", 0) as CommercialDriver
    }
    
    property set thisDriver ($arg :  CommercialDriver) {
      setRequireValue("thisDriver", 0, $arg)
    }
    
    
  }
  
  
}