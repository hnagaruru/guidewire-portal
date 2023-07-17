package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationContactForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationContactForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at OrganizationContactForward.pcf: line 14, column 53
    function action_0 () : void {
      EditContactPopup.push( contact )
    }
    
    // 'action' attribute on ForwardCondition at OrganizationContactForward.pcf: line 17, column 47
    function action_3 () : void {
      EditOrganizationUserPopup.push( gw.web.admin.OrganizationUIHelper.getUser(contact) )
    }
    
    // 'action' attribute on ForwardCondition at OrganizationContactForward.pcf: line 14, column 53
    function action_dest_1 () : pcf.api.Destination {
      return pcf.EditContactPopup.createDestination( contact )
    }
    
    // 'action' attribute on ForwardCondition at OrganizationContactForward.pcf: line 17, column 47
    function action_dest_4 () : pcf.api.Destination {
      return pcf.EditOrganizationUserPopup.createDestination( gw.web.admin.OrganizationUIHelper.getUser(contact) )
    }
    
    // 'condition' attribute on ForwardCondition at OrganizationContactForward.pcf: line 14, column 53
    function condition_2 () : java.lang.Boolean {
      return not (contact typeis UserContact)
    }
    
    // 'condition' attribute on ForwardCondition at OrganizationContactForward.pcf: line 17, column 47
    function condition_5 () : java.lang.Boolean {
      return contact typeis UserContact
    }
    
    override property get CurrentLocation () : pcf.OrganizationContactForward {
      return super.CurrentLocation as pcf.OrganizationContactForward
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  
}