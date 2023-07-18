package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/EditAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditAccountPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/EditAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditAccountPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_56 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_57 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'canVisit' attribute on Popup (id=EditAccountPopup) at EditAccountPopup.pcf: line 11, column 57
    static function canVisit_72 (account :  Account) : java.lang.Boolean {
      return account.Editable and perm.Account.edit(account)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 58, column 111
    function def_onEnter_23 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(selectedAddress, contact, null, account, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 62, column 40
    function def_onEnter_27 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 37, column 40
    function def_onEnter_4 (def :  pcf.ContactNameInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef (id=AccountCurrency) at EditAccountPopup.pcf: line 80, column 71
    function def_onEnter_43 (def :  pcf.AccountCurrencyInputSet) : void {
      def.onEnter(account, selectedAddress, false)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 88, column 40
    function def_onEnter_47 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 88, column 40
    function def_onEnter_49 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 37, column 40
    function def_onEnter_6 (def :  pcf.ContactNameInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 58, column 111
    function def_refreshVariables_24 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(selectedAddress, contact, null, account, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 62, column 40
    function def_refreshVariables_28 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=AccountCurrency) at EditAccountPopup.pcf: line 80, column 71
    function def_refreshVariables_44 (def :  pcf.AccountCurrencyInputSet) : void {
      def.refreshVariables(account, selectedAddress, false)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 88, column 40
    function def_refreshVariables_48 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 37, column 40
    function def_refreshVariables_5 (def :  pcf.ContactNameInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 88, column 40
    function def_refreshVariables_50 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at EditAccountPopup.pcf: line 37, column 40
    function def_refreshVariables_7 (def :  pcf.ContactNameInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'value' attribute on TextInput (id=Nickname_Input) at EditAccountPopup.pcf: line 42, column 39
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.Nickname = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at EditAccountPopup.pcf: line 49, column 79
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.PrimaryLanguage = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ServiceTier_Input) at EditAccountPopup.pcf: line 55, column 54
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.ServiceTier = (__VALUE_TO_SET as typekey.CustomerServiceTier)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at EditAccountPopup.pcf: line 69, column 46
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at EditAccountPopup.pcf: line 74, column 50
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at EditAccountPopup.pcf: line 96, column 51
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.AccountOrgType = (__VALUE_TO_SET as typekey.AccountOrgType)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'value' attribute on TextInput (id=DescriptionOfBusiness_Input) at EditAccountPopup.pcf: line 108, column 43
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.BusOpsDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on InputSetRef at EditAccountPopup.pcf: line 62, column 40
    function editable_25 () : java.lang.Boolean {
      return selectedAddress.LinkedAddress == null
    }
    
    // 'editable' attribute on InputSetRef (id=AccountCurrency) at EditAccountPopup.pcf: line 80, column 71
    function editable_41 () : java.lang.Boolean {
      return account.Editable
    }
    
    // 'initialValue' attribute on Variable at EditAccountPopup.pcf: line 21, column 30
    function initialValue_0 () : entity.Contact {
      return account.AccountHolderContact
    }
    
    // 'initialValue' attribute on Variable at EditAccountPopup.pcf: line 26, column 30
    function initialValue_1 () : entity.Address {
      return contact.PrimaryAddress
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_58 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // EditButtons at EditAccountPopup.pcf: line 30, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on InputSetRef at EditAccountPopup.pcf: line 88, column 40
    function mode_51 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'mode' attribute on InputSetRef at EditAccountPopup.pcf: line 37, column 40
    function mode_8 () : java.lang.Object {
      return contact.Subtype.Code
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_59 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'parent' attribute on Popup (id=EditAccountPopup) at EditAccountPopup.pcf: line 11, column 57
    static function parent_73 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile_Summary.createDestination(account)
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_60 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, null)
    }
    
    // 'value' attribute on TextInput (id=Nickname_Input) at EditAccountPopup.pcf: line 42, column 39
    function valueRoot_11 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at EditAccountPopup.pcf: line 69, column 46
    function valueRoot_32 () : java.lang.Object {
      return selectedAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at EditAccountPopup.pcf: line 49, column 79
    function value_14 () : typekey.LanguageType {
      return account.PrimaryLanguage
    }
    
    // 'value' attribute on TypeKeyInput (id=ServiceTier_Input) at EditAccountPopup.pcf: line 55, column 54
    function value_19 () : typekey.CustomerServiceTier {
      return account.ServiceTier
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at EditAccountPopup.pcf: line 69, column 46
    function value_30 () : typekey.AddressType {
      return selectedAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at EditAccountPopup.pcf: line 74, column 50
    function value_36 () : java.lang.String {
      return selectedAddress.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at EditAccountPopup.pcf: line 96, column 51
    function value_52 () : typekey.AccountOrgType {
      return account.AccountOrgType
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_61 () : entity.IndustryCode {
      return account.IndustryCode
    }
    
    // 'value' attribute on TextInput (id=DescriptionOfBusiness_Input) at EditAccountPopup.pcf: line 108, column 43
    function value_67 () : java.lang.String {
      return account.BusOpsDesc
    }
    
    // 'value' attribute on TextInput (id=Nickname_Input) at EditAccountPopup.pcf: line 42, column 39
    function value_9 () : java.lang.String {
      return account.Nickname
    }
    
    // 'visible' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at EditAccountPopup.pcf: line 49, column 79
    function visible_13 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getAllLanguages().size() > 1
    }
    
    // 'visible' attribute on InputSetRef at EditAccountPopup.pcf: line 37, column 40
    function visible_3 () : java.lang.Boolean {
      return contact != null
    }
    
    // 'visible' attribute on InputSetRef (id=AccountCurrency) at EditAccountPopup.pcf: line 80, column 71
    function visible_42 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on InputSet at EditAccountPopup.pcf: line 90, column 67
    function visible_71 () : java.lang.Boolean {
      return account.AccountHolderContact typeis Company
    }
    
    override property get CurrentLocation () : pcf.EditAccountPopup {
      return super.CurrentLocation as pcf.EditAccountPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get contact () : entity.Contact {
      return getVariableValue("contact", 0) as entity.Contact
    }
    
    property set contact ($arg :  entity.Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get selectedAddress () : entity.Address {
      return getVariableValue("selectedAddress", 0) as entity.Address
    }
    
    property set selectedAddress ($arg :  entity.Address) {
      setVariableValue("selectedAddress", 0, $arg)
    }
    
    
  }
  
  
}