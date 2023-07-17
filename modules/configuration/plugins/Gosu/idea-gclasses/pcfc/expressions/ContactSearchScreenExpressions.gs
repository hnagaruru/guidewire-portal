package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get availableSubtypes () : typekey.Contact[] {
      return getRequireValue("availableSubtypes", 0) as typekey.Contact[]
    }
    
    property set availableSubtypes ($arg :  typekey.Contact[]) {
      setRequireValue("availableSubtypes", 0, $arg)
    }
    
    property get initialSearchCriteria () : ContactSearchCriteria {
      return getRequireValue("initialSearchCriteria", 0) as ContactSearchCriteria
    }
    
    property set initialSearchCriteria ($arg :  ContactSearchCriteria) {
      setRequireValue("initialSearchCriteria", 0, $arg)
    }
    
    property get isFromContactSearchTab () : boolean {
      return getRequireValue("isFromContactSearchTab", 0) as java.lang.Boolean
    }
    
    property set isFromContactSearchTab ($arg :  boolean) {
      setRequireValue("isFromContactSearchTab", 0, $arg)
    }
    
    property get searchOnEnter () : Boolean {
      return getRequireValue("searchOnEnter", 0) as Boolean
    }
    
    property set searchOnEnter ($arg :  Boolean) {
      setRequireValue("searchOnEnter", 0, $arg)
    }
    
    
        function pushToContactSearchDetail(contactSearchResultEntry: gw.plugin.contact.ContactResult) {
          if (contactSearchResultEntry.External) {
            ExternalContactFile.go(contactSearchResultEntry)
          } else {
            var contact = contactSearchResultEntry.convertToContact(gw.plugin.contact.ContactCreator.createNonPersistentContactCreator())
            ContactForward.go(contact)
          }
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Name_Cell) at ContactSearchScreen.pcf: line 94, column 31
    function actionAvailable_26 () : java.lang.Boolean {
      return isFromContactSearchTab
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at ContactSearchScreen.pcf: line 94, column 31
    function action_25 () : void {
      pushToContactSearchDetail(contactSearchResultEntry)
    }
    
    // 'canPick' attribute on RowIterator at ContactSearchScreen.pcf: line 86, column 59
    function canPick_42 () : java.lang.Boolean {
      return (not isFromContactSearchTab) and contactSearchResultEntry.hasAllRequiredFields()
    }
    
    // 'pickValue' attribute on RowIterator at ContactSearchScreen.pcf: line 86, column 59
    function pickValue_43 () : java.lang.Object {
      return contactSearchResultEntry.convertToContact(new gw.plugin.contact.ContactCreator(gw.transaction.Transaction.getCurrent()))
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ContactSearchScreen.pcf: line 94, column 31
    function valueRoot_28 () : java.lang.Object {
      return contactSearchResultEntry
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ContactSearchScreen.pcf: line 94, column 31
    function value_27 () : java.lang.String {
      return contactSearchResultEntry.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ContactSearchScreen.pcf: line 100, column 30
    function value_30 () : java.lang.String {
      return contactSearchResultEntry.DisplayAddress
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at ContactSearchScreen.pcf: line 105, column 31
    function value_33 () : java.lang.String {
      return contactSearchResultEntry.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at ContactSearchScreen.pcf: line 110, column 31
    function value_36 () : java.lang.String {
      return contactSearchResultEntry.EmailAddress1
    }
    
    // 'value' attribute on BooleanRadioCell (id=External_Cell) at ContactSearchScreen.pcf: line 114, column 60
    function value_39 () : java.lang.Boolean {
      return contactSearchResultEntry.External
    }
    
    property get contactSearchResultEntry () : gw.plugin.contact.ContactResult {
      return getIteratedValue(2) as gw.plugin.contact.ContactResult
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ContactSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at ContactSearchScreen.pcf: line 68, column 74
    function action_18 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "ContactSearchResultsLV" )
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 50, column 51
    function def_onEnter_11 (def :  pcf.BasicContactInfoInputSet_person) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 54, column 118
    function def_onEnter_14 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressAutoFillableOwner(searchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 58, column 45
    function def_onEnter_16 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 50, column 51
    function def_onEnter_9 (def :  pcf.BasicContactInfoInputSet_company) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 50, column 51
    function def_refreshVariables_10 (def :  pcf.BasicContactInfoInputSet_company) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 50, column 51
    function def_refreshVariables_12 (def :  pcf.BasicContactInfoInputSet_person) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 54, column 118
    function def_refreshVariables_15 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressAutoFillableOwner(searchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchScreen.pcf: line 58, column 45
    function def_refreshVariables_17 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ContactSubtype = (__VALUE_TO_SET as typekey.Contact)
    }
    
    // 'label' attribute on Verbatim (id=SearchWarningMessage) at ContactSearchScreen.pcf: line 34, column 27
    function label_1 () : java.lang.String {
      return contactSearchResult.warningMessage
    }
    
    // 'mode' attribute on InputSetRef at ContactSearchScreen.pcf: line 50, column 51
    function mode_13 () : java.lang.Object {
      return searchCriteria.ContactSubtype
    }
    
    // 'searchCriteria' attribute on SearchPanel at ContactSearchScreen.pcf: line 27, column 71
    function searchCriteria_46 () : entity.ContactSearchCriteria {
      return gw.web.admin.shared.SharedUIHelper.createSearchCriteria(initialSearchCriteria, availableSubtypes)
    }
    
    // 'searchOnEnter' attribute on SearchPanel at ContactSearchScreen.pcf: line 27, column 71
    function searchOnEnter_47 () : java.lang.Boolean {
      return searchOnEnter
    }
    
    // 'search' attribute on SearchPanel at ContactSearchScreen.pcf: line 27, column 71
    function search_45 () : java.lang.Object {
      return gw.web.admin.shared.SharedUIHelper.doSearch(searchCriteria)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ContactSearchScreen.pcf: line 94, column 31
    function sortValue_20 (contactSearchResultEntry :  gw.plugin.contact.ContactResult) : java.lang.Object {
      return contactSearchResultEntry.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ContactSearchScreen.pcf: line 100, column 30
    function sortValue_21 (contactSearchResultEntry :  gw.plugin.contact.ContactResult) : java.lang.Object {
      return contactSearchResultEntry.DisplayAddress
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at ContactSearchScreen.pcf: line 105, column 31
    function sortValue_22 (contactSearchResultEntry :  gw.plugin.contact.ContactResult) : java.lang.Object {
      return contactSearchResultEntry.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at ContactSearchScreen.pcf: line 110, column 31
    function sortValue_23 (contactSearchResultEntry :  gw.plugin.contact.ContactResult) : java.lang.Object {
      return contactSearchResultEntry.EmailAddress1
    }
    
    // 'value' attribute on BooleanRadioCell (id=External_Cell) at ContactSearchScreen.pcf: line 114, column 60
    function sortValue_24 (contactSearchResultEntry :  gw.plugin.contact.ContactResult) : java.lang.Object {
      return contactSearchResultEntry.External
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function valueRange_5 () : java.lang.Object {
      return availableSubtypes
    }
    
    // 'value' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function valueRoot_4 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function value_2 () : typekey.Contact {
      return searchCriteria.ContactSubtype
    }
    
    // 'value' attribute on RowIterator at ContactSearchScreen.pcf: line 86, column 59
    function value_44 () : gw.plugin.contact.ContactResult[] {
      return contactSearchResult.contactResults
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function verifyValueRangeIsAllowedType_6 ($$arg :  typekey.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactType_Input) at ContactSearchScreen.pcf: line 45, column 41
    function verifyValueRange_7 () : void {
      var __valueRangeArg = availableSubtypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on Verbatim (id=SearchWarningMessage) at ContactSearchScreen.pcf: line 34, column 27
    function visible_0 () : java.lang.Boolean {
      return contactSearchResult != null and contactSearchResult.warningMessage != null
    }
    
    // 'visible' attribute on Verbatim (id=UnselectableMessage) at ContactSearchScreen.pcf: line 74, column 27
    function visible_19 () : java.lang.Boolean {
      return (not isFromContactSearchTab) and contactSearchResult.contactResults != null  and contactSearchResult.contactResults.hasMatch(\ c -> c.hasAllRequiredFields() == false )
    }
    
    property get contactSearchResult () : gw.plugin.contact.impl.ContactResultWrapper {
      return getResultsValue(1) as gw.plugin.contact.impl.ContactResultWrapper
    }
    
    property get searchCriteria () : entity.ContactSearchCriteria {
      return getCriteriaValue(1) as entity.ContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.ContactSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}