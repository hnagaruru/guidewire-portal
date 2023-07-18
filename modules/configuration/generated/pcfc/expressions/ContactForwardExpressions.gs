package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 1
    }
    
    // 'action' attribute on ForwardCondition at ContactForward.pcf: line 21, column 36
    function action_2 () : void {
      ContactSearch.go(error)
    }
    
    // 'action' attribute on ForwardCondition at ContactForward.pcf: line 24, column 135
    function action_5 () : void {
      ContactFile_Summary.go(contact)
    }
    
    // 'action' attribute on ForwardCondition at ContactForward.pcf: line 26, column 49
    function action_8 () : void {
      ContactFile_Details.go(contact)
    }
    
    // 'action' attribute on ForwardCondition at ContactForward.pcf: line 21, column 36
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination(error)
    }
    
    // 'action' attribute on ForwardCondition at ContactForward.pcf: line 24, column 135
    function action_dest_6 () : pcf.api.Destination {
      return pcf.ContactFile_Summary.createDestination(contact)
    }
    
    // 'action' attribute on ForwardCondition at ContactForward.pcf: line 26, column 49
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ContactFile_Details.createDestination(contact)
    }
    
    // 'condition' attribute on ForwardCondition at ContactForward.pcf: line 21, column 36
    function condition_4 () : java.lang.Boolean {
      return contact == null
    }
    
    // 'condition' attribute on ForwardCondition at ContactForward.pcf: line 24, column 135
    function condition_7 () : java.lang.Boolean {
      return perm.System.viewaccountholderinfo and gw.pcf.contacts.ContactFileAccountHolderUIHelper.canViewAccountInfo(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactForward.pcf: line 14, column 23
    function initialValue_0 () : Contact {
      return gw.api.web.contact.ContactForwardUtil.getMostRecentContact()
    }
    
    // 'initialValue' attribute on Variable at ContactForward.pcf: line 18, column 22
    function initialValue_1 () : String {
      return gw.pcf.contacts.ContactFowardValidator.checkForError(contact)
    }
    
    override property get CurrentLocation () : pcf.ContactForward {
      return super.CurrentLocation as pcf.ContactForward
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get error () : String {
      return getVariableValue("error", 0) as String
    }
    
    property set error ($arg :  String) {
      setVariableValue("error", 0, $arg)
    }
    
    
  }
  
  
}