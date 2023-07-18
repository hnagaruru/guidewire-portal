package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/LossHistoryTypeSelectDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossHistoryTypeSelectDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/LossHistoryTypeSelectDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossHistoryTypeSelectDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossHistoryType_Input) at LossHistoryTypeSelectDV.pcf: line 19, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      policy.LossHistoryType = (__VALUE_TO_SET as typekey.LossHistoryType)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossHistoryType_Input) at LossHistoryTypeSelectDV.pcf: line 19, column 45
    function valueRoot_2 () : java.lang.Object {
      return policy
    }
    
    // 'value' attribute on TypeKeyInput (id=LossHistoryType_Input) at LossHistoryTypeSelectDV.pcf: line 19, column 45
    function value_0 () : typekey.LossHistoryType {
      return policy.LossHistoryType
    }
    
    property get policy () : Policy {
      return getRequireValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setRequireValue("policy", 0, $arg)
    }
    
    
  }
  
  
}