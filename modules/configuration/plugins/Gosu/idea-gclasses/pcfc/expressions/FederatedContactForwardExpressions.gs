package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedContactForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedContactForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountPublicId :  java.lang.String, contactPublicId :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 22, column 167
    function action_1 () : void {
      ContactFile_Summary.go(contactEntity)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 25, column 42
    function action_4 () : void {
      ContactFile_Details.go(contactEntity)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 28, column 42
    function action_7 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.contactForward(accountPublicId, contactPublicId)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 22, column 167
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ContactFile_Summary.createDestination(contactEntity)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 25, column 42
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ContactFile_Details.createDestination(contactEntity)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactForward.pcf: line 22, column 167
    function condition_3 () : java.lang.Boolean {
      return contactEntity != null and perm.System.viewaccountholderinfo and gw.pcf.contacts.ContactFileAccountHolderUIHelper.canViewAccountInfo(contactEntity)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactForward.pcf: line 25, column 42
    function condition_6 () : java.lang.Boolean {
      return contactEntity != null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactForward.pcf: line 28, column 42
    function condition_8 () : java.lang.Boolean {
      return contactEntity == null
    }
    
    // 'initialValue' attribute on Variable at FederatedContactForward.pcf: line 19, column 23
    function initialValue_0 () : Contact {
      return Contact.findContactByPublicId(contactPublicId)
    }
    
    override property get CurrentLocation () : pcf.FederatedContactForward {
      return super.CurrentLocation as pcf.FederatedContactForward
    }
    
    property get accountPublicId () : java.lang.String {
      return getVariableValue("accountPublicId", 0) as java.lang.String
    }
    
    property set accountPublicId ($arg :  java.lang.String) {
      setVariableValue("accountPublicId", 0, $arg)
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
    
    
  }
  
  
}