package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/ReferralReasonDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReferralReasonDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/ReferralReasonDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReferralReasonDetailsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextInput (id=ReasonLongDescription_Input) at ReferralReasonDetailsPopup.pcf: line 32, column 57
    function label_0 () : java.lang.Object {
      return referralReason.ShortDescription
    }
    
    // 'value' attribute on TextInput (id=ReasonLongDescription_Input) at ReferralReasonDetailsPopup.pcf: line 32, column 57
    function valueRoot_2 () : java.lang.Object {
      return referralReason
    }
    
    // 'value' attribute on TextInput (id=ReasonLongDescription_Input) at ReferralReasonDetailsPopup.pcf: line 32, column 57
    function value_1 () : java.lang.String {
      return referralReason.LongDescription
    }
    
    // 'value' attribute on TextInput (id=ReasonCurrentValue_Input) at ReferralReasonDetailsPopup.pcf: line 37, column 57
    function value_6 () : java.lang.String {
      return DisplayKey.get("Web.UWIssue.RiskApprovalDetailsPopup.ReferenceValue", referralReason.Value)
    }
    
    // 'visible' attribute on TextInput (id=ReasonCurrentValue_Input) at ReferralReasonDetailsPopup.pcf: line 37, column 57
    function visible_5 () : java.lang.Boolean {
      return referralReason.Value != null
    }
    
    property get referralReason () : entity.UWReferralReason {
      return getIteratedValue(1) as entity.UWReferralReason
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ReferralReasonDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReferralReasonDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (referralReasons :  UWReferralReason[]) : int {
      return 0
    }
    
    // 'value' attribute on RowIterator (id=ReferralReasonIterator) at ReferralReasonDetailsPopup.pcf: line 23, column 49
    function value_9 () : entity.UWReferralReason[] {
      return referralReasons
    }
    
    override property get CurrentLocation () : pcf.ReferralReasonDetailsPopup {
      return super.CurrentLocation as pcf.ReferralReasonDetailsPopup
    }
    
    property get referralReasons () : UWReferralReason[] {
      return getVariableValue("referralReasons", 0) as UWReferralReason[]
    }
    
    property set referralReasons ($arg :  UWReferralReason[]) {
      setVariableValue("referralReasons", 0, $arg)
    }
    
    
  }
  
  
}