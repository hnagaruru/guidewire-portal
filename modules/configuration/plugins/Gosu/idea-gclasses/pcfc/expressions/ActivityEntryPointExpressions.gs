package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on EntryPointParameter at Activity.pcf: line 12, column 24
    function conversionExpression_0 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.EntityParamUtil.convertStringParam(VALUE, entity.Activity) as entity.Activity
    }
    
    // 'location' attribute on EntryPoint (id=Activity) at Activity.pcf: line 8, column 42
    function location_1 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(Activity)
    }
    
    property get Activity () : Activity {
      return getVariableValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setVariableValue("Activity", 0, $arg)
    }
    
    
  }
  
  
}