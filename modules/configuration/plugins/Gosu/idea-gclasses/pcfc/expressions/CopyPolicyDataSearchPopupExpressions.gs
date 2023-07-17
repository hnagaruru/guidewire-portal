package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDataSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDataSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (destPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'afterReturnFromPopup' attribute on Popup (id=CopyPolicyDataSearchPopup) at CopyPolicyDataSearchPopup.pcf: line 8, column 73
    function afterReturnFromPopup_2 (popupCommitted :  boolean) : void {
      if (popupCommitted) { CurrentLocation.commit() }
    }
    
    // 'def' attribute on ScreenRef at CopyPolicyDataSearchPopup.pcf: line 15, column 53
    function def_onEnter_0 (def :  pcf.CopyPolicyDataSearchScreen) : void {
      def.onEnter(destPeriod)
    }
    
    // 'def' attribute on ScreenRef at CopyPolicyDataSearchPopup.pcf: line 15, column 53
    function def_refreshVariables_1 (def :  pcf.CopyPolicyDataSearchScreen) : void {
      def.refreshVariables(destPeriod)
    }
    
    override property get CurrentLocation () : pcf.CopyPolicyDataSearchPopup {
      return super.CurrentLocation as pcf.CopyPolicyDataSearchPopup
    }
    
    property get destPeriod () : PolicyPeriod {
      return getVariableValue("destPeriod", 0) as PolicyPeriod
    }
    
    property set destPeriod ($arg :  PolicyPeriod) {
      setVariableValue("destPeriod", 0, $arg)
    }
    
    
  }
  
  
}