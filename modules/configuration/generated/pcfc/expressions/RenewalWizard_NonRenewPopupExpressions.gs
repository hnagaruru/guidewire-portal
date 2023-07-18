package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_NonRenewPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalWizard_NonRenewPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_NonRenewPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalWizard_NonRenewPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (renewal :  Renewal, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=RenewalWizard_NonRenewPopup) at RenewalWizard_NonRenewPopup.pcf: line 12, column 74
    function afterCommit_14 (TopLocation :  pcf.api.Location) : void {
       policyPeriod.RenewalProcess.pendingNonRenew(); TopLocation.commit(); JobComplete.go(renewal, policyPeriod)
    }
    
    // 'beforeCommit' attribute on Popup (id=RenewalWizard_NonRenewPopup) at RenewalWizard_NonRenewPopup.pcf: line 12, column 74
    function beforeCommit_15 (pickedValue :  java.lang.Object) : void {
      policyPeriod.Job.createCustomHistoryEvent(CustomHistoryType.TC_RENEWAL, \ -> DisplayKey.get("Job.Renewal.History.NonRenewPopup"))
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_NonRenewPopup.pcf: line 57, column 84
    function def_onEnter_12 (def :  pcf.SelectedNonRenewalExplanationsLV) : void {
      def.onEnter(policy, policyPeriod, descriptions)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_NonRenewPopup.pcf: line 57, column 84
    function def_refreshVariables_13 (def :  pcf.SelectedNonRenewalExplanationsLV) : void {
      def.refreshVariables(policy, policyPeriod, descriptions)
    }
    
    // 'value' attribute on TypeKeyInput (id=NonRenewReason_Input) at RenewalWizard_NonRenewPopup.pcf: line 47, column 49
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyTerm.NonRenewReason = (__VALUE_TO_SET as typekey.NonRenewalCode)
    }
    
    // 'value' attribute on TextAreaInput (id=NonRenewAddExpl_Input) at RenewalWizard_NonRenewPopup.pcf: line 53, column 56
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyTerm.NonRenewAddExplanation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard_NonRenewPopup.pcf: line 24, column 22
    function initialValue_0 () : Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard_NonRenewPopup.pcf: line 28, column 26
    function initialValue_1 () : PolicyTerm {
      return policyPeriod.PolicyTerm
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard_NonRenewPopup.pcf: line 32, column 24
    function initialValue_2 () : String[] {
      return new String[]{""}
    }
    
    // EditButtons at RenewalWizard_NonRenewPopup.pcf: line 37, column 102
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=NonRenewReason_Input) at RenewalWizard_NonRenewPopup.pcf: line 47, column 49
    function valueRoot_6 () : java.lang.Object {
      return policyTerm
    }
    
    // 'value' attribute on TypeKeyInput (id=NonRenewReason_Input) at RenewalWizard_NonRenewPopup.pcf: line 47, column 49
    function value_4 () : typekey.NonRenewalCode {
      return policyTerm.NonRenewReason
    }
    
    // 'value' attribute on TextAreaInput (id=NonRenewAddExpl_Input) at RenewalWizard_NonRenewPopup.pcf: line 53, column 56
    function value_8 () : java.lang.String {
      return policyTerm.NonRenewAddExplanation
    }
    
    override property get CurrentLocation () : pcf.RenewalWizard_NonRenewPopup {
      return super.CurrentLocation as pcf.RenewalWizard_NonRenewPopup
    }
    
    property get descriptions () : String[] {
      return getVariableValue("descriptions", 0) as String[]
    }
    
    property set descriptions ($arg :  String[]) {
      setVariableValue("descriptions", 0, $arg)
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get policyTerm () : PolicyTerm {
      return getVariableValue("policyTerm", 0) as PolicyTerm
    }
    
    property set policyTerm ($arg :  PolicyTerm) {
      setVariableValue("policyTerm", 0, $arg)
    }
    
    property get renewal () : Renewal {
      return getVariableValue("renewal", 0) as Renewal
    }
    
    property set renewal ($arg :  Renewal) {
      setVariableValue("renewal", 0, $arg)
    }
    
    
  }
  
  
}