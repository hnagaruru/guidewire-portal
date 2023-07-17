package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/RejectReasonDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RejectReasonDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/RejectReasonDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RejectReasonDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at RejectReasonDV.pcf: line 21, column 41
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      submission.RejectReason = (__VALUE_TO_SET as typekey.ReasonCode)
    }
    
    // 'value' attribute on TextAreaInput (id=RejectReasonText_Input) at RejectReasonDV.pcf: line 27, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      submission.RejectReasonText = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=RejectReason_Input) at RejectReasonDV.pcf: line 21, column 41
    function filter_3 (VALUE :  typekey.ReasonCode, VALUES :  typekey.ReasonCode[]) : java.lang.Boolean {
      return VALUE.hasCategory(type)
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at RejectReasonDV.pcf: line 21, column 41
    function valueRoot_2 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at RejectReasonDV.pcf: line 21, column 41
    function value_0 () : typekey.ReasonCode {
      return submission.RejectReason
    }
    
    // 'value' attribute on TextAreaInput (id=RejectReasonText_Input) at RejectReasonDV.pcf: line 27, column 46
    function value_5 () : java.lang.String {
      return submission.RejectReasonText
    }
    
    property get submission () : Submission {
      return getRequireValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setRequireValue("submission", 0, $arg)
    }
    
    property get type () : LetterType {
      return getRequireValue("type", 0) as LetterType
    }
    
    property set type ($arg :  LetterType) {
      setRequireValue("type", 0, $arg)
    }
    
    
  }
  
  
}