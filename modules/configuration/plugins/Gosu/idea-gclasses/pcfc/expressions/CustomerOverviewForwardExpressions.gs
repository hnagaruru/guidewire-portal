package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/CustomerOverviewForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CustomerOverviewForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/CustomerOverviewForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CustomerOverviewForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (PublicID :  String, Phone :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 40, column 130
    function action_10 () : void {
      ContactFile_Summary.go(contacts.first())
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 43, column 40
    function action_13 () : void {
      ContactFile_Details.go(contacts.first())
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 46, column 42
    function action_16 () : void {
      ContactSearch.go(searchCriteria, true)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 48, column 57
    function action_19 () : void {
      ContactSearch.go(searchCriteria, false)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 34, column 117
    function action_4 () : void {
      ContactFile_Summary.go(contact)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 37, column 36
    function action_7 () : void {
      ContactFile_Details.go(contact)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 40, column 130
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ContactFile_Summary.createDestination(contacts.first())
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 43, column 40
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ContactFile_Details.createDestination(contacts.first())
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 46, column 42
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination(searchCriteria, true)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 48, column 57
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination(searchCriteria, false)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 34, column 117
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ContactFile_Summary.createDestination(contact)
    }
    
    // 'action' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 37, column 36
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ContactFile_Details.createDestination(contact)
    }
    
    // 'condition' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 40, column 130
    function condition_12 () : java.lang.Boolean {
      return contacts.Count == 1 and gw.pcf.contacts.ContactFileAccountHolderUIHelper.canViewAccountInfo(contacts.first())
    }
    
    // 'condition' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 43, column 40
    function condition_15 () : java.lang.Boolean {
      return contacts.Count == 1
    }
    
    // 'condition' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 46, column 42
    function condition_18 () : java.lang.Boolean {
      return contacts.Count > 1
    }
    
    // 'condition' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 34, column 117
    function condition_6 () : java.lang.Boolean {
      return contact != null and gw.pcf.contacts.ContactFileAccountHolderUIHelper.canViewAccountInfo(contact)
    }
    
    // 'condition' attribute on ForwardCondition at CustomerOverviewForward.pcf: line 37, column 36
    function condition_9 () : java.lang.Boolean {
      return contact != null
    }
    
    // 'initialValue' attribute on Variable at CustomerOverviewForward.pcf: line 19, column 42
    function initialValue_0 () : gw.api.contact.ContactUtil {
      return new gw.api.contact.ContactUtil()
    }
    
    // 'initialValue' attribute on Variable at CustomerOverviewForward.pcf: line 23, column 59
    function initialValue_1 () : Contact {
      return util.getContactByPublicID(PublicID)
    }
    
    // 'initialValue' attribute on Variable at CustomerOverviewForward.pcf: line 27, column 37
    function initialValue_2 () : ContactSearchCriteria {
      return util.getContactsSearchCriteria(Phone)
    }
    
    // 'initialValue' attribute on Variable at CustomerOverviewForward.pcf: line 31, column 60
    function initialValue_3 () : Collection<Contact> {
      return util.getContactsByPhoneNumber(Phone)
    }
    
    override property get CurrentLocation () : pcf.CustomerOverviewForward {
      return super.CurrentLocation as pcf.CustomerOverviewForward
    }
    
    property get Phone () : String {
      return getVariableValue("Phone", 0) as String
    }
    
    property set Phone ($arg :  String) {
      setVariableValue("Phone", 0, $arg)
    }
    
    property get PublicID () : String {
      return getVariableValue("PublicID", 0) as String
    }
    
    property set PublicID ($arg :  String) {
      setVariableValue("PublicID", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get contacts () : Collection<Contact> {
      return getVariableValue("contacts", 0) as Collection<Contact>
    }
    
    property set contacts ($arg :  Collection<Contact>) {
      setVariableValue("contacts", 0, $arg)
    }
    
    property get searchCriteria () : ContactSearchCriteria {
      return getVariableValue("searchCriteria", 0) as ContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  ContactSearchCriteria) {
      setVariableValue("searchCriteria", 0, $arg)
    }
    
    property get util () : gw.api.contact.ContactUtil {
      return getVariableValue("util", 0) as gw.api.contact.ContactUtil
    }
    
    property set util ($arg :  gw.api.contact.ContactUtil) {
      setVariableValue("util", 0, $arg)
    }
    
    
  }
  
  
}