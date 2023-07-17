package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccountDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccountDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_52 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function action_67 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_53 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function action_dest_68 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 30, column 59
    function def_onEnter_10 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 25, column 54
    function def_onEnter_2 (def :  pcf.CreateAccountContactInputSet_default) : void {
      def.onEnter(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef (id=AccountCurrency) at CreateAccountDV.pcf: line 47, column 67
    function def_onEnter_26 (def :  pcf.AccountCurrencyInputSet) : void {
      def.onEnter(account, selectedAddress, true)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 66, column 54
    function def_onEnter_37 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 66, column 54
    function def_onEnter_39 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 25, column 54
    function def_onEnter_4 (def :  pcf.CreateAccountContactInputSet_person) : void {
      def.onEnter(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 27, column 128
    function def_onEnter_7 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(selectedAddress, account.AccountHolderContact, null, account, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 30, column 59
    function def_refreshVariables_11 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=AccountCurrency) at CreateAccountDV.pcf: line 47, column 67
    function def_refreshVariables_27 (def :  pcf.AccountCurrencyInputSet) : void {
      def.refreshVariables(account, selectedAddress, true)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 25, column 54
    function def_refreshVariables_3 (def :  pcf.CreateAccountContactInputSet_default) : void {
      def.refreshVariables(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 66, column 54
    function def_refreshVariables_38 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 66, column 54
    function def_refreshVariables_40 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 25, column 54
    function def_refreshVariables_5 (def :  pcf.CreateAccountContactInputSet_person) : void {
      def.refreshVariables(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountDV.pcf: line 27, column 128
    function def_refreshVariables_8 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(selectedAddress, account.AccountHolderContact, null, account, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at CreateAccountDV.pcf: line 37, column 42
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at CreateAccountDV.pcf: line 42, column 46
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at CreateAccountDV.pcf: line 55, column 47
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.AccountOrgType = (__VALUE_TO_SET as typekey.AccountOrgType)
    }
    
    // 'value' attribute on TextInput (id=DescriptionOfBusiness_Input) at CreateAccountDV.pcf: line 60, column 39
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.BusOpsDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Nickname_Input) at CreateAccountDV.pcf: line 72, column 35
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.Nickname = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at CreateAccountDV.pcf: line 80, column 75
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.PrimaryLanguage = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerSelection.Producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerSelection.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'editable' attribute on InputSetRef (id=AccountCurrency) at CreateAccountDV.pcf: line 47, column 67
    function editable_24 () : java.lang.Boolean {
      return account.Editable
    }
    
    // 'editable' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function editable_69 () : java.lang.Boolean {
      return gw.api.web.producer.ProducerUtil.canEditOrganization()
    }
    
    // 'editable' attribute on InputSetRef at CreateAccountDV.pcf: line 30, column 59
    function editable_9 () : java.lang.Boolean {
      return selectedAddress.LinkedAddress == null
    }
    
    // 'initialValue' attribute on Variable at CreateAccountDV.pcf: line 17, column 30
    function initialValue_0 () : entity.Address {
      return account.AccountHolderContact.PrimaryAddress
    }
    
    // 'initialValue' attribute on Variable at CreateAccountDV.pcf: line 21, column 57
    function initialValue_1 () : java.util.List<entity.ProducerCode> {
      return producerSelection.getRangeOfActiveProducerCodesForCurrentUser(true)
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_55 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'mode' attribute on InputSetRef at CreateAccountDV.pcf: line 25, column 54
    function mode_6 () : java.lang.Object {
      return account.AccountHolderContact.Subtype
    }
    
    // 'onChange' attribute on PostOnChange at CreateAccountDV.pcf: line 107, column 43
    function onChange_66 () : void {
      changedProducer()
    }
    
    // 'onPick' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function onPick_71 (PickedValue :  Organization) : void {
      changedProducer()
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function optionLabel_83 (VALUE :  entity.ProducerCode) : java.lang.String {
      return DisplayKey.get("Web.ProducerSelection.ProducerCode.OptionLabel", VALUE.Code, VALUE.Description  != null ? VALUE.Description : "" )
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_56 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_57 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, null)
    }
    
    // 'validationExpression' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function validationExpression_70 () : java.lang.Object {
      return producerSelection.validateProducer()
    }
    
    // 'validationExpression' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function validationExpression_78 () : java.lang.Object {
      return producerSelection.validateProducerCodeForAccount()
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function valueRange_84 () : java.lang.Object {
      return producerCodeRange
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at CreateAccountDV.pcf: line 37, column 42
    function valueRoot_15 () : java.lang.Object {
      return selectedAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at CreateAccountDV.pcf: line 55, column 47
    function valueRoot_30 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function valueRoot_74 () : java.lang.Object {
      return producerSelection
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at CreateAccountDV.pcf: line 37, column 42
    function value_13 () : typekey.AddressType {
      return selectedAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at CreateAccountDV.pcf: line 42, column 46
    function value_19 () : java.lang.String {
      return selectedAddress.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at CreateAccountDV.pcf: line 55, column 47
    function value_28 () : typekey.AccountOrgType {
      return account.AccountOrgType
    }
    
    // 'value' attribute on TextInput (id=DescriptionOfBusiness_Input) at CreateAccountDV.pcf: line 60, column 39
    function value_32 () : java.lang.String {
      return account.BusOpsDesc
    }
    
    // 'value' attribute on TextInput (id=Nickname_Input) at CreateAccountDV.pcf: line 72, column 35
    function value_42 () : java.lang.String {
      return account.Nickname
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at CreateAccountDV.pcf: line 80, column 75
    function value_47 () : typekey.LanguageType {
      return account.PrimaryLanguage
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_58 () : entity.IndustryCode {
      return account.IndustryCode
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at CreateAccountDV.pcf: line 104, column 46
    function value_72 () : entity.Organization {
      return producerSelection.Producer
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function value_80 () : entity.ProducerCode {
      return producerSelection.ProducerCode
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function verifyValueRangeIsAllowedType_85 ($$arg :  entity.ProducerCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function verifyValueRangeIsAllowedType_85 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProducerCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function verifyValueRangeIsAllowedType_85 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function verifyValueRange_86 () : void {
      var __valueRangeArg = producerCodeRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_85(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef (id=AccountCurrency) at CreateAccountDV.pcf: line 47, column 67
    function visible_25 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on InputSet at CreateAccountDV.pcf: line 49, column 63
    function visible_36 () : java.lang.Boolean {
      return account.AccountHolderContact typeis Company
    }
    
    // 'visible' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at CreateAccountDV.pcf: line 80, column 75
    function visible_46 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getAllLanguages().size() > 1
    }
    
    // 'visible' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function visible_54 () : java.lang.Boolean {
      return account.AccountHolder.AccountContact.Company
    }
    
    // 'visible' attribute on RangeInput (id=ProducerCode_Input) at CreateAccountDV.pcf: line 119, column 57
    function visible_79 () : java.lang.Boolean {
      return producerSelection.Producer != null
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get producerCodeRange () : java.util.List<entity.ProducerCode> {
      return getVariableValue("producerCodeRange", 0) as java.util.List<entity.ProducerCode>
    }
    
    property set producerCodeRange ($arg :  java.util.List<entity.ProducerCode>) {
      setVariableValue("producerCodeRange", 0, $arg)
    }
    
    property get producerSelection () : ProducerSelection {
      return getRequireValue("producerSelection", 0) as ProducerSelection
    }
    
    property set producerSelection ($arg :  ProducerSelection) {
      setRequireValue("producerSelection", 0, $arg)
    }
    
    property get selectedAddress () : entity.Address {
      return getVariableValue("selectedAddress", 0) as entity.Address
    }
    
    property set selectedAddress ($arg :  entity.Address) {
      setVariableValue("selectedAddress", 0, $arg)
    }
    
    function changedProducer() {
      producerCodeRange = producerSelection.getRangeOfActiveProducerCodesForCurrentUser(true)
    
      if (producerCodeRange.Count == 1) {
        producerSelection.ProducerCode = producerCodeRange[0]
      } else {
        producerSelection.ProducerCode = null
      }
    }
    
    
  }
  
  
}