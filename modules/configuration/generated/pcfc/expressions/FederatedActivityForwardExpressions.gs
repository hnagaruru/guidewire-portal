package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedActivityForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedActivityForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedActivityForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedActivityForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String, activityId :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedActivityForward.pcf: line 25, column 41
    function action_1 () : void {
      ActivityForward.go(activityEntity, activityEntity.PolicyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at FederatedActivityForward.pcf: line 28, column 41
    function action_4 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.activityForward(accountPublicId, activityId)
    }
    
    // 'action' attribute on ForwardCondition at FederatedActivityForward.pcf: line 25, column 41
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activityEntity, activityEntity.PolicyPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedActivityForward.pcf: line 25, column 41
    function condition_3 () : java.lang.Boolean {
      return activityEntity!=null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedActivityForward.pcf: line 28, column 41
    function condition_5 () : java.lang.Boolean {
      return activityEntity==null
    }
    
    // 'initialValue' attribute on Variable at FederatedActivityForward.pcf: line 16, column 31
    function initialValue_0 () : entity.Activity {
      return Activity.finder.findActivityByPublicId(activityPublicId)
    }
    
    override property get CurrentLocation () : pcf.FederatedActivityForward {
      return super.CurrentLocation as pcf.FederatedActivityForward
    }
    
    property get accountPublicId () : java.lang.String {
      return getVariableValue("accountPublicId", 0) as java.lang.String
    }
    
    property set accountPublicId ($arg :  java.lang.String) {
      setVariableValue("accountPublicId", 0, $arg)
    }
    
    property get activityEntity () : entity.Activity {
      return getVariableValue("activityEntity", 0) as entity.Activity
    }
    
    property set activityEntity ($arg :  entity.Activity) {
      setVariableValue("activityEntity", 0, $arg)
    }
    
    property get activityId () : String {
      return getVariableValue("activityId", 0) as String
    }
    
    property set activityId ($arg :  String) {
      setVariableValue("activityId", 0, $arg)
    }
    
    property get activityPublicId () : java.lang.String {
      return getVariableValue("activityPublicId", 0) as java.lang.String
    }
    
    property set activityPublicId ($arg :  java.lang.String) {
      setVariableValue("activityPublicId", 0, $arg)
    }
    
    
  }
  
  
}