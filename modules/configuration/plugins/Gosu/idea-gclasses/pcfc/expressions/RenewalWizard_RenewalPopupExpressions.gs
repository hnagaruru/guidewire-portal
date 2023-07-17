package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_RenewalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalWizard_RenewalPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_RenewalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalWizard_RenewalPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (renewal :  Renewal, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=RenewalWizard_RenewalPopup) at RenewalWizard_RenewalPopup.pcf: line 11, column 71
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      policyPeriod.RenewalProcess.pendingRenew(); TopLocation.commit(); JobComplete.go(renewal, policyPeriod)
    }
    
    // 'value' attribute on TypeKeyInput (id=RenewalCode_Input) at RenewalWizard_RenewalPopup.pcf: line 34, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      renewal.RenewalCode = (__VALUE_TO_SET as typekey.RenewalCode)
    }
    
    // EditButtons at RenewalWizard_RenewalPopup.pcf: line 24, column 99
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=RenewalCode_Input) at RenewalWizard_RenewalPopup.pcf: line 34, column 46
    function valueRoot_3 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TypeKeyInput (id=RenewalCode_Input) at RenewalWizard_RenewalPopup.pcf: line 34, column 46
    function value_1 () : typekey.RenewalCode {
      return renewal.RenewalCode
    }
    
    override property get CurrentLocation () : pcf.RenewalWizard_RenewalPopup {
      return super.CurrentLocation as pcf.RenewalWizard_RenewalPopup
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get renewal () : Renewal {
      return getVariableValue("renewal", 0) as Renewal
    }
    
    property set renewal ($arg :  Renewal) {
      setVariableValue("renewal", 0, $arg)
    }
    
    
  }
  
  
}