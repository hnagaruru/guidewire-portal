package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWReferralReasonRowSet.label.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWReferralReasonRowSet_labelExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWReferralReasonRowSet.label.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWReferralReasonRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Title_Cell) at UWReferralReasonRowSet.label.pcf: line 16, column 33
    function valueRoot_1 () : java.lang.Object {
      return modalRow
    }
    
    // 'value' attribute on TextCell (id=Title_Cell) at UWReferralReasonRowSet.label.pcf: line 16, column 33
    function value_0 () : java.lang.String {
      return modalRow.Title
    }
    
    property get modalRow () : gw.web.policy.UWReferralReasonModalRow {
      return getRequireValue("modalRow", 0) as gw.web.policy.UWReferralReasonModalRow
    }
    
    property set modalRow ($arg :  gw.web.policy.UWReferralReasonModalRow) {
      setRequireValue("modalRow", 0, $arg)
    }
    
    
  }
  
  
}