package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/email/CreateEmailScreenRecipientInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateEmailScreenRecipientInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/email/CreateEmailScreenRecipientInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateEmailScreenRecipientInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreenRecipientInputSet.pcf: line 19, column 62
    function initialValue_0 () : gw.api.contact.ContactEmailAutocompleteHandler {
      return new gw.api.contact.ContactEmailAutocompleteHandler(account.AccountContacts.map(\contact -> contact.Contact))
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 66, column 38
    function sortValue_1 (recipient :  gw.api.email.EmailContact) : java.lang.Object {
      return recipient.Name
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 77, column 47
    function sortValue_2 (recipient :  gw.api.email.EmailContact) : java.lang.Object {
      return recipient.EmailAddress
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at CreateEmailScreenRecipientInputSet.pcf: line 48, column 51
    function toCreateAndAdd_14 () : gw.api.email.EmailContact {
      var newEmailContact = new gw.api.email.EmailContact(); contacts.add(newEmailContact); return newEmailContact;
    }
    
    // 'toRemove' attribute on RowIterator at CreateEmailScreenRecipientInputSet.pcf: line 48, column 51
    function toRemove_15 (recipient :  gw.api.email.EmailContact) : void {
      contacts.remove( recipient )
    }
    
    // 'validationLabel' attribute on RowIterator at CreateEmailScreenRecipientInputSet.pcf: line 48, column 51
    function validationLabel_16 () : java.lang.String {
      return title
    }
    
    // 'value' attribute on RowIterator at CreateEmailScreenRecipientInputSet.pcf: line 48, column 51
    function value_17 () : gw.api.email.EmailContact[] {
      return contacts?.toTypedArray()
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get autoCompleteHandler () : gw.api.contact.ContactEmailAutocompleteHandler {
      return getVariableValue("autoCompleteHandler", 0) as gw.api.contact.ContactEmailAutocompleteHandler
    }
    
    property set autoCompleteHandler ($arg :  gw.api.contact.ContactEmailAutocompleteHandler) {
      setVariableValue("autoCompleteHandler", 0, $arg)
    }
    
    property get contacts () : List<gw.api.email.EmailContact> {
      return getRequireValue("contacts", 0) as List<gw.api.email.EmailContact>
    }
    
    property set contacts ($arg :  List<gw.api.email.EmailContact>) {
      setRequireValue("contacts", 0, $arg)
    }
    
    property get title () : String {
      return getRequireValue("title", 0) as String
    }
    
    property set title ($arg :  String) {
      setRequireValue("title", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/email/CreateEmailScreenRecipientInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CreateEmailScreenRecipientInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextCell (id=Name_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 66, column 38
    function autoComplete_7 () : gw.api.contact.AutocompleteHandler {
      return autoCompleteHandler
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 77, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      recipient.EmailAddress = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 66, column 38
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      recipient.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onChange' attribute on PostOnChange at CreateEmailScreenRecipientInputSet.pcf: line 69, column 106
    function onChange_3 () : void {
      recipient.EmailAddress = autoCompleteHandler.getEmailForName(recipient.Name)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=Email_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 77, column 47
    function requestValidationExpression_9 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE == null ? DisplayKey.get("Web.Email.Error.AddressForRecipientRequried") : null
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 66, column 38
    function valueRoot_6 () : java.lang.Object {
      return recipient
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 77, column 47
    function value_10 () : java.lang.String {
      return recipient.EmailAddress
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CreateEmailScreenRecipientInputSet.pcf: line 66, column 38
    function value_4 () : java.lang.String {
      return recipient.Name
    }
    
    property get recipient () : gw.api.email.EmailContact {
      return getIteratedValue(1) as gw.api.email.EmailContact
    }
    
    
  }
  
  
}