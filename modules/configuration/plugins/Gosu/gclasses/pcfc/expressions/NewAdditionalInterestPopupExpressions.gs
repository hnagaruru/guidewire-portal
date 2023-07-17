package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewAdditionalInterestPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAdditionalInterestPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewAdditionalInterestPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAdditionalInterestPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (interestContainer :  gw.api.contact.AdditionalInterestContainer, acctContact :  AccountContact) : int {
      return 1
    }
    
    static function __constructorIndex (interestContainer :  gw.api.contact.AdditionalInterestContainer, contactType :  ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewAdditionalInterestPopup.pcf: line 59, column 62
    function action_10 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAdditionalInterestPopup.pcf: line 51, column 62
    function action_5 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(addlInterestDetail))
    }
    
    // 'beforeCommit' attribute on Popup (id=NewAdditionalInterestPopup) at NewAdditionalInterestPopup.pcf: line 12, column 154
    function beforeCommit_25 (pickedValue :  AddlInterestDetail) : void {
      policyAddlInterest.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewAdditionalInterestPopup.pcf: line 84, column 73
    function def_onEnter_23 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyAddlInterest, false)
    }
    
    // 'def' attribute on PanelRef at NewAdditionalInterestPopup.pcf: line 84, column 73
    function def_refreshVariables_24 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyAddlInterest, false)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewAdditionalInterestPopup.pcf: line 70, column 57
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.AdditionalInterestType = (__VALUE_TO_SET as typekey.AdditionalInterestType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CertRequired_Input) at NewAdditionalInterestPopup.pcf: line 75, column 54
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.CertRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ContractNumber_Input) at NewAdditionalInterestPopup.pcf: line 80, column 56
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.ContractNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInterestPopup.pcf: line 30, column 41
    function initialValue_0 () : entity.PolicyAddlInterest {
      return acctContact == null ? interestContainer.createAndAddAdditionalInterestDetail(contactType).PolicyAddlInterest : interestContainer.addAdditionalInterestDetail(acctContact.Contact).PolicyAddlInterest
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInterestPopup.pcf: line 34, column 41
    function initialValue_1 () : entity.AddlInterestDetail {
      return policyAddlInterest.AdditionalInterestDetails.first()
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInterestPopup.pcf: line 38, column 25
    function initialValue_2 () : Contact[] {
      return interestContainer.AdditionalInterestCandidates.NewAccountContacts.map(\pd -> pd.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewAdditionalInterestPopup.pcf: line 42, column 69
    function initialValue_3 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyAddlInterest.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // EditButtons at NewAdditionalInterestPopup.pcf: line 54, column 72
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewAdditionalInterestPopup.pcf: line 54, column 72
    function pickValue_6 () : AddlInterestDetail {
      return addlInterestDetail
    }
    
    // 'title' attribute on Popup (id=NewAdditionalInterestPopup) at NewAdditionalInterestPopup.pcf: line 12, column 154
    static function title_26 (acctContact :  AccountContact, contactType :  ContactType, interestContainer :  gw.api.contact.AdditionalInterestContainer) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact2", entity.PolicyAddlInterest.Type.TypeInfo.DisplayName, interestContainer.OwnerDisplayName)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewAdditionalInterestPopup.pcf: line 70, column 57
    function valueRoot_13 () : java.lang.Object {
      return addlInterestDetail
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewAdditionalInterestPopup.pcf: line 70, column 57
    function value_11 () : typekey.AdditionalInterestType {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioInput (id=CertRequired_Input) at NewAdditionalInterestPopup.pcf: line 75, column 54
    function value_15 () : java.lang.Boolean {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextInput (id=ContractNumber_Input) at NewAdditionalInterestPopup.pcf: line 80, column 56
    function value_19 () : java.lang.String {
      return addlInterestDetail.ContractNumber
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAdditionalInterestPopup.pcf: line 51, column 62
    function visible_4 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewAdditionalInterestPopup.pcf: line 54, column 72
    function visible_7 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewAdditionalInterestPopup {
      return super.CurrentLocation as pcf.NewAdditionalInterestPopup
    }
    
    property get acctContact () : AccountContact {
      return getVariableValue("acctContact", 0) as AccountContact
    }
    
    property set acctContact ($arg :  AccountContact) {
      setVariableValue("acctContact", 0, $arg)
    }
    
    property get addlInterestDetail () : entity.AddlInterestDetail {
      return getVariableValue("addlInterestDetail", 0) as entity.AddlInterestDetail
    }
    
    property set addlInterestDetail ($arg :  entity.AddlInterestDetail) {
      setVariableValue("addlInterestDetail", 0, $arg)
    }
    
    property get contactType () : ContactType {
      return getVariableValue("contactType", 0) as ContactType
    }
    
    property set contactType ($arg :  ContactType) {
      setVariableValue("contactType", 0, $arg)
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
    
    property get interestContainer () : gw.api.contact.AdditionalInterestContainer {
      return getVariableValue("interestContainer", 0) as gw.api.contact.AdditionalInterestContainer
    }
    
    property set interestContainer ($arg :  gw.api.contact.AdditionalInterestContainer) {
      setVariableValue("interestContainer", 0, $arg)
    }
    
    property get policyAddlInterest () : entity.PolicyAddlInterest {
      return getVariableValue("policyAddlInterest", 0) as entity.PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  entity.PolicyAddlInterest) {
      setVariableValue("policyAddlInterest", 0, $arg)
    }
    
    
  }
  
  
}