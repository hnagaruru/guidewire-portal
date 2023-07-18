package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/DuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DuplicateContactsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/DuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DuplicateContactsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactHelper :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=DuplicateContactsPopup) at DuplicateContactsPopup.pcf: line 8, column 74
    function afterCancel_51 () : void {
      UIHelper.checkForNoSelection(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 58, column 45
    function def_onEnter_15 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 58, column 45
    function def_onEnter_17 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 33, column 50
    function def_onEnter_2 (def :  pcf.ContactNameInputSet_company) : void {
      def.onEnter(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 33, column 50
    function def_onEnter_4 (def :  pcf.ContactNameInputSet_person) : void {
      def.onEnter(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 39, column 130
    function def_onEnter_7 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(originalContact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 58, column 45
    function def_refreshVariables_16 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 58, column 45
    function def_refreshVariables_18 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 33, column 50
    function def_refreshVariables_3 (def :  pcf.ContactNameInputSet_company) : void {
      def.refreshVariables(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 33, column 50
    function def_refreshVariables_5 (def :  pcf.ContactNameInputSet_person) : void {
      def.refreshVariables(originalContact)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 39, column 130
    function def_refreshVariables_8 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(originalContact.PrimaryAddress, false, true))
    }
    
    // 'initialValue' attribute on Variable at DuplicateContactsPopup.pcf: line 17, column 62
    function initialValue_0 () : gw.pcf.contacts.DuplicateContactsPopupUIHelper {
      return new gw.pcf.contacts.DuplicateContactsPopupUIHelper(contactHelper)
    }
    
    // 'initialValue' attribute on Variable at DuplicateContactsPopup.pcf: line 21, column 23
    function initialValue_1 () : Contact {
      return contactHelper.originalContact
    }
    
    // 'mode' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 58, column 45
    function mode_19 () : java.lang.Object {
      return originalContact.Subtype
    }
    
    // 'mode' attribute on InputSetRef at DuplicateContactsPopup.pcf: line 33, column 50
    function mode_6 () : java.lang.Object {
      return originalContact.Subtype.Code
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DuplicateContactsPopup.pcf: line 98, column 52
    function sortValue_21 (duplicateResult :  gw.plugin.contact.DuplicateContactResult) : java.lang.Object {
      return duplicateResult.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Exact_Cell) at DuplicateContactsPopup.pcf: line 104, column 50
    function sortValue_22 (duplicateResult :  gw.plugin.contact.DuplicateContactResult) : java.lang.Object {
      return duplicateResult.MatchType
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at DuplicateContactsPopup.pcf: line 108, column 55
    function sortValue_23 (duplicateResult :  gw.plugin.contact.DuplicateContactResult) : java.lang.Object {
      return duplicateResult.DisplayAddress
    }
    
    // 'value' attribute on TextCell (id=TaxID_Cell) at DuplicateContactsPopup.pcf: line 112, column 46
    function sortValue_24 (duplicateResult :  gw.plugin.contact.DuplicateContactResult) : java.lang.Object {
      return duplicateResult.TaxID
    }
    
    // 'value' attribute on TextCell (id=PrimaryPhone_Cell) at DuplicateContactsPopup.pcf: line 116, column 58
    function sortValue_25 (duplicateResult :  gw.plugin.contact.DuplicateContactResult) : java.lang.Object {
      return duplicateResult.PrimaryPhoneValue
    }
    
    // 'value' attribute on DateCell (id=DOB_Cell) at DuplicateContactsPopup.pcf: line 121, column 60
    function sortValue_26 (duplicateResult :  gw.plugin.contact.DuplicateContactResult) : java.lang.Object {
      return duplicateResult.DateOfBirth
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at DuplicateContactsPopup.pcf: line 46, column 46
    function valueRoot_10 () : java.lang.Object {
      return originalContact.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at DuplicateContactsPopup.pcf: line 51, column 65
    function value_12 () : java.lang.String {
      return originalContact.PrimaryAddress.Description
    }
    
    // 'value' attribute on RowIterator (id=ResultsList) at DuplicateContactsPopup.pcf: line 86, column 86
    function value_50 () : java.util.List<gw.plugin.contact.DuplicateContactResult> {
      return contactHelper.duplicateResultsContainer.Results
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at DuplicateContactsPopup.pcf: line 46, column 46
    function value_9 () : typekey.AddressType {
      return originalContact.PrimaryAddress.AddressType
    }
    
    // 'visible' attribute on Verbatim (id=UnselectableMessage) at DuplicateContactsPopup.pcf: line 76, column 27
    function visible_20 () : java.lang.Boolean {
      return contactHelper.duplicateResultsContainer.Results != null  and contactHelper.duplicateResultsContainer.Results.hasMatch(\ c -> c.hasAllRequiredFields() == false )
    }
    
    // 'visible' attribute on DateCell (id=DOB_Cell) at DuplicateContactsPopup.pcf: line 121, column 60
    function visible_27 () : java.lang.Boolean {
      return typeof(originalContact) == Person
    }
    
    override property get CurrentLocation () : pcf.DuplicateContactsPopup {
      return super.CurrentLocation as pcf.DuplicateContactsPopup
    }
    
    property get UIHelper () : gw.pcf.contacts.DuplicateContactsPopupUIHelper {
      return getVariableValue("UIHelper", 0) as gw.pcf.contacts.DuplicateContactsPopupUIHelper
    }
    
    property set UIHelper ($arg :  gw.pcf.contacts.DuplicateContactsPopupUIHelper) {
      setVariableValue("UIHelper", 0, $arg)
    }
    
    property get contactHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("contactHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set contactHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("contactHelper", 0, $arg)
    }
    
    property get originalContact () : Contact {
      return getVariableValue("originalContact", 0) as Contact
    }
    
    property set originalContact ($arg :  Contact) {
      setVariableValue("originalContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/DuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DuplicateContactsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Select_Cell) at DuplicateContactsPopup.pcf: line 93, column 70
    function action_29 () : void {
      UIHelper.importContactData(duplicateResult, CurrentLocation)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DuplicateContactsPopup.pcf: line 98, column 52
    function valueRoot_31 () : java.lang.Object {
      return duplicateResult
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DuplicateContactsPopup.pcf: line 98, column 52
    function value_30 () : java.lang.String {
      return duplicateResult.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Exact_Cell) at DuplicateContactsPopup.pcf: line 104, column 50
    function value_33 () : java.lang.String {
      return duplicateResult.MatchType
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at DuplicateContactsPopup.pcf: line 108, column 55
    function value_36 () : java.lang.String {
      return duplicateResult.DisplayAddress
    }
    
    // 'value' attribute on TextCell (id=TaxID_Cell) at DuplicateContactsPopup.pcf: line 112, column 46
    function value_39 () : java.lang.String {
      return duplicateResult.TaxID
    }
    
    // 'value' attribute on TextCell (id=PrimaryPhone_Cell) at DuplicateContactsPopup.pcf: line 116, column 58
    function value_42 () : java.lang.String {
      return duplicateResult.PrimaryPhoneValue
    }
    
    // 'value' attribute on DateCell (id=DOB_Cell) at DuplicateContactsPopup.pcf: line 121, column 60
    function value_45 () : java.util.Date {
      return duplicateResult.DateOfBirth
    }
    
    // 'valueVisible' attribute on TextCell (id=Select_Cell) at DuplicateContactsPopup.pcf: line 93, column 70
    function visible_28 () : java.lang.Boolean {
      return duplicateResult.hasAllRequiredFields()
    }
    
    // 'visible' attribute on DateCell (id=DOB_Cell) at DuplicateContactsPopup.pcf: line 121, column 60
    function visible_47 () : java.lang.Boolean {
      return typeof(originalContact) == Person
    }
    
    property get duplicateResult () : gw.plugin.contact.DuplicateContactResult {
      return getIteratedValue(1) as gw.plugin.contact.DuplicateContactResult
    }
    
    
  }
  
  
}