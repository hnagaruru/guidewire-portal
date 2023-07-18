package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AssignableQueueDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignableQueueDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AssignableQueueDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignableQueueDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AssignableQueueDetailDV.pcf: line 18, column 39
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignableQueue.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at AssignableQueueDetailDV.pcf: line 23, column 46
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignableQueue.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SubGroupVisible_Input) at AssignableQueueDetailDV.pcf: line 29, column 50
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignableQueue.SubGroupVisible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AssignableQueueDetailDV.pcf: line 18, column 39
    function valueRoot_2 () : java.lang.Object {
      return assignableQueue
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AssignableQueueDetailDV.pcf: line 18, column 39
    function value_0 () : java.lang.String {
      return assignableQueue.Name
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at AssignableQueueDetailDV.pcf: line 23, column 46
    function value_4 () : java.lang.String {
      return assignableQueue.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=SubGroupVisible_Input) at AssignableQueueDetailDV.pcf: line 29, column 50
    function value_8 () : java.lang.Boolean {
      return assignableQueue.SubGroupVisible
    }
    
    property get assignableQueue () : AssignableQueue {
      return getRequireValue("assignableQueue", 0) as AssignableQueue
    }
    
    property set assignableQueue ($arg :  AssignableQueue) {
      setRequireValue("assignableQueue", 0, $arg)
    }
    
    
  }
  
  
}