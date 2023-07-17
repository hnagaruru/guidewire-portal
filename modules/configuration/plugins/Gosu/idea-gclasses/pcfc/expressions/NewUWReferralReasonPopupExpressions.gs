package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/NewUWReferralReasonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewUWReferralReasonPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/NewUWReferralReasonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewUWReferralReasonPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policy :  Policy) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=NewUWReferralReasonPopup) at NewUWReferralReasonPopup.pcf: line 11, column 73
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      uwReferralReason.Bundle.commit()
    }
    
    // 'beforeCommit' attribute on Popup (id=NewUWReferralReasonPopup) at NewUWReferralReasonPopup.pcf: line 11, column 73
    function beforeCommit_5 (pickedValue :  java.lang.Object) : void {
      uwReferralReason.Policy = policy; uwReferralReason.IssueKey = uwReferralReason.ID as java.lang.String
    }
    
    // 'def' attribute on PanelRef at NewUWReferralReasonPopup.pcf: line 30, column 177
    function def_onEnter_2 (def :  pcf.NewUWIssueDelegateDV) : void {
      def.onEnter(uwReferralReason, UWIssueType.finder.findUWIssueTypeByCheckingSet(TC_REFERRAL).where(\ u -> u.Code != "LegacyReferralReason"))
    }
    
    // 'def' attribute on PanelRef at NewUWReferralReasonPopup.pcf: line 30, column 177
    function def_refreshVariables_3 (def :  pcf.NewUWIssueDelegateDV) : void {
      def.refreshVariables(uwReferralReason, UWIssueType.finder.findUWIssueTypeByCheckingSet(TC_REFERRAL).where(\ u -> u.Code != "LegacyReferralReason"))
    }
    
    // 'initialValue' attribute on Variable at NewUWReferralReasonPopup.pcf: line 20, column 39
    function initialValue_0 () : entity.UWReferralReason {
      return new UWReferralReason(policy)
    }
    
    // EditButtons at NewUWReferralReasonPopup.pcf: line 27, column 33
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.NewUWReferralReasonPopup {
      return super.CurrentLocation as pcf.NewUWReferralReasonPopup
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get uwReferralReason () : entity.UWReferralReason {
      return getVariableValue("uwReferralReason", 0) as entity.UWReferralReason
    }
    
    property set uwReferralReason ($arg :  entity.UWReferralReason) {
      setVariableValue("uwReferralReason", 0, $arg)
    }
    
    
  }
  
  
}