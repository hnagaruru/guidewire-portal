package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactClusterForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedContactClusterForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactClusterForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedContactClusterForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactPublicId :  java.lang.String, shardId :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactClusterForward.pcf: line 22, column 42
    function action_1 () : void {
      ContactFile_Details.go(contactEntity)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactClusterForward.pcf: line 25, column 42
    function action_4 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.contactClusterForward(contactPublicId, shardId)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactClusterForward.pcf: line 22, column 42
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ContactFile_Details.createDestination(contactEntity)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactClusterForward.pcf: line 22, column 42
    function condition_3 () : java.lang.Boolean {
      return contactEntity != null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactClusterForward.pcf: line 25, column 42
    function condition_5 () : java.lang.Boolean {
      return contactEntity == null
    }
    
    // 'initialValue' attribute on Variable at FederatedContactClusterForward.pcf: line 16, column 23
    function initialValue_0 () : Contact {
      return Contact.findContactByPublicId(contactPublicId)
    }
    
    override property get CurrentLocation () : pcf.FederatedContactClusterForward {
      return super.CurrentLocation as pcf.FederatedContactClusterForward
    }
    
    property get contactEntity () : Contact {
      return getVariableValue("contactEntity", 0) as Contact
    }
    
    property set contactEntity ($arg :  Contact) {
      setVariableValue("contactEntity", 0, $arg)
    }
    
    property get contactPublicId () : java.lang.String {
      return getVariableValue("contactPublicId", 0) as java.lang.String
    }
    
    property set contactPublicId ($arg :  java.lang.String) {
      setVariableValue("contactPublicId", 0, $arg)
    }
    
    property get shardId () : java.lang.String {
      return getVariableValue("shardId", 0) as java.lang.String
    }
    
    property set shardId ($arg :  java.lang.String) {
      setVariableValue("shardId", 0, $arg)
    }
    
    
  }
  
  
}