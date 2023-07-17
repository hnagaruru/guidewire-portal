package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriverPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BADriverPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriverPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BADriverPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (thisDriver :  CommercialDriver, policyPeriod :  PolicyPeriod, openForEdit :  boolean, startInEdit :  boolean) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=BADriverPopup) at BADriverPopup.pcf: line 12, column 77
    function afterEnter_2 () : void {
      if (thisDriver == null and startInEdit == true and openForEdit)                       { thisDriver = policyPeriod.BusinessAutoLine.createAndAddDriverContact(); }
    }
    
    // 'canEdit' attribute on Popup (id=BADriverPopup) at BADriverPopup.pcf: line 12, column 77
    function canEdit_3 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on ScreenRef at BADriverPopup.pcf: line 28, column 68
    function def_onEnter_0 (def :  pcf.BADriverScreen) : void {
      def.onEnter(thisDriver, policyPeriod, openForEdit)
    }
    
    // 'def' attribute on ScreenRef at BADriverPopup.pcf: line 28, column 68
    function def_refreshVariables_1 (def :  pcf.BADriverScreen) : void {
      def.refreshVariables(thisDriver, policyPeriod, openForEdit)
    }
    
    // 'startInEditMode' attribute on Popup (id=BADriverPopup) at BADriverPopup.pcf: line 12, column 77
    function startInEditMode_4 () : java.lang.Boolean {
      return startInEdit
    }
    
    override property get CurrentLocation () : pcf.BADriverPopup {
      return super.CurrentLocation as pcf.BADriverPopup
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    property get thisDriver () : CommercialDriver {
      return getVariableValue("thisDriver", 0) as CommercialDriver
    }
    
    property set thisDriver ($arg :  CommercialDriver) {
      setVariableValue("thisDriver", 0, $arg)
    }
    
    
  }
  
  
}