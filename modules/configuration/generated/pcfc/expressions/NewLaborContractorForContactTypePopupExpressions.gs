package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewLaborContractorForContactTypePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewLaborContractorForContactTypePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewLaborContractorForContactTypePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewLaborContractorForContactTypePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (line :  WorkersCompLine, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewLaborContractorForContactTypePopup.pcf: line 41, column 62
    function action_4 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(detail))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewLaborContractorForContactTypePopup.pcf: line 49, column 62
    function action_9 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'beforeCommit' attribute on Popup (id=NewLaborContractorForContactTypePopup) at NewLaborContractorForContactTypePopup.pcf: line 12, column 120
    function beforeCommit_27 (pickedValue :  WCLaborContactDetail) : void {
      detail.WCLaborContact.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewLaborContractorForContactTypePopup.pcf: line 81, column 76
    function def_onEnter_25 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(detail.WCLaborContact, false)
    }
    
    // 'def' attribute on PanelRef at NewLaborContractorForContactTypePopup.pcf: line 81, column 76
    function def_refreshVariables_26 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(detail.WCLaborContact, false)
    }
    
    // 'value' attribute on TypeKeyInput (id=Inclusion_Input) at NewLaborContractorForContactTypePopup.pcf: line 60, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      detail.Inclusion = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at NewLaborContractorForContactTypePopup.pcf: line 71, column 51
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      detail.ContractEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at NewLaborContractorForContactTypePopup.pcf: line 77, column 52
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      detail.ContractExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at NewLaborContractorForContactTypePopup.pcf: line 24, column 43
    function initialValue_0 () : entity.WCLaborContactDetail {
      return line.addNewLaborContractorDetailForContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewLaborContractorForContactTypePopup.pcf: line 28, column 25
    function initialValue_1 () : Contact[] {
      return line.PolicyLaborContractors.map(\ p -> p.AccountContactRole.AccountContact.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewLaborContractorForContactTypePopup.pcf: line 32, column 69
    function initialValue_2 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(detail.WCLaborContact.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // EditButtons at NewLaborContractorForContactTypePopup.pcf: line 44, column 72
    function label_7 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewLaborContractorForContactTypePopup.pcf: line 44, column 72
    function pickValue_5 () : WCLaborContactDetail {
      return detail
    }
    
    // 'title' attribute on Popup (id=NewLaborContractorForContactTypePopup) at NewLaborContractorForContactTypePopup.pcf: line 12, column 120
    static function title_28 (contactType :  typekey.ContactType, line :  WorkersCompLine) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicyLaborContractor.Type.TypeInfo.DisplayName)
    }
    
    // 'value' attribute on TypeKeyInput (id=Inclusion_Input) at NewLaborContractorForContactTypePopup.pcf: line 60, column 44
    function valueRoot_12 () : java.lang.Object {
      return detail
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at NewLaborContractorForContactTypePopup.pcf: line 65, column 40
    function valueRoot_15 () : java.lang.Object {
      return detail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=Inclusion_Input) at NewLaborContractorForContactTypePopup.pcf: line 60, column 44
    function value_10 () : typekey.Inclusion {
      return detail.Inclusion
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at NewLaborContractorForContactTypePopup.pcf: line 65, column 40
    function value_14 () : typekey.State {
      return detail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at NewLaborContractorForContactTypePopup.pcf: line 71, column 51
    function value_17 () : java.util.Date {
      return detail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at NewLaborContractorForContactTypePopup.pcf: line 77, column 52
    function value_21 () : java.util.Date {
      return detail.ContractExpirationDate
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewLaborContractorForContactTypePopup.pcf: line 41, column 62
    function visible_3 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewLaborContractorForContactTypePopup.pcf: line 44, column 72
    function visible_6 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewLaborContractorForContactTypePopup {
      return super.CurrentLocation as pcf.NewLaborContractorForContactTypePopup
    }
    
    property get contactType () : typekey.ContactType {
      return getVariableValue("contactType", 0) as typekey.ContactType
    }
    
    property set contactType ($arg :  typekey.ContactType) {
      setVariableValue("contactType", 0, $arg)
    }
    
    property get detail () : entity.WCLaborContactDetail {
      return getVariableValue("detail", 0) as entity.WCLaborContactDetail
    }
    
    property set detail ($arg :  entity.WCLaborContactDetail) {
      setVariableValue("detail", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get existingContacts () : Contact[] {
      return getVariableValue("existingContacts", 0) as Contact[]
    }
    
    property set existingContacts ($arg :  Contact[]) {
      setVariableValue("existingContacts", 0, $arg)
    }
    
    property get line () : WorkersCompLine {
      return getVariableValue("line", 0) as WorkersCompLine
    }
    
    property set line ($arg :  WorkersCompLine) {
      setVariableValue("line", 0, $arg)
    }
    
    
  }
  
  
}