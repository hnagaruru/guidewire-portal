package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_BasicInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Summary_BasicInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_BasicInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Summary_BasicInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_58 () : void {
      IndustryCodeSearchPopup.push(TC_SIC)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_59 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(TC_SIC)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 64, column 32
    function def_onEnter_33 (def :  pcf.AddressShortInputSet) : void {
      def.onEnter(address)
    }
    
    // 'def' attribute on InputSetRef (id=AccountCurrency) at AccountFile_Summary_BasicInfoDV.pcf: line 69, column 67
    function def_onEnter_37 (def :  pcf.AccountCurrencyInputSet) : void {
      def.onEnter(account, address, false)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 76, column 54
    function def_onEnter_39 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 76, column 54
    function def_onEnter_41 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 64, column 32
    function def_refreshVariables_34 (def :  pcf.AddressShortInputSet) : void {
      def.refreshVariables(address)
    }
    
    // 'def' attribute on InputSetRef (id=AccountCurrency) at AccountFile_Summary_BasicInfoDV.pcf: line 69, column 67
    function def_refreshVariables_38 (def :  pcf.AccountCurrencyInputSet) : void {
      def.refreshVariables(account, address, false)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 76, column 54
    function def_refreshVariables_40 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(account.AccountHolderContact)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 76, column 54
    function def_refreshVariables_42 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(account.AccountHolderContact)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 41, column 75
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.PrimaryLanguage = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 95, column 47
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.AccountOrgType = (__VALUE_TO_SET as typekey.AccountOrgType)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'value' attribute on TextInput (id=DescriptionOfBusiness_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 107, column 39
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.BusOpsDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on InputSetRef (id=AccountCurrency) at AccountFile_Summary_BasicInfoDV.pcf: line 69, column 67
    function editable_35 () : java.lang.Boolean {
      return account.Editable
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Summary_BasicInfoDV.pcf: line 13, column 30
    function initialValue_0 () : entity.Address {
      return account.AccountHolderContact.PrimaryAddress
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_60 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'mode' attribute on InputSetRef at AccountFile_Summary_BasicInfoDV.pcf: line 76, column 54
    function mode_43 () : java.lang.Object {
      return account.AccountHolderContact.Subtype
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_61 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_62 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, null)
    }
    
    // 'value' attribute on TextCell (id=code_Cell) at AccountFile_Summary_BasicInfoDV.pcf: line 126, column 48
    function sortValue_75 (apc :  entity.AccountProducerCode) : java.lang.Object {
      return apc.ProducerCode.Code
    }
    
    // 'value' attribute on TextCell (id=desc_Cell) at AccountFile_Summary_BasicInfoDV.pcf: line 131, column 30
    function sortValue_76 (apc :  entity.AccountProducerCode) : java.lang.Object {
      return apc.ProducerCode.Description
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 18, column 40
    function valueRoot_2 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 22, column 59
    function valueRoot_5 () : java.lang.Object {
      return account.AccountHolderContact
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 18, column 40
    function value_1 () : java.lang.String {
      return account.AccountNumber
    }
    
    // 'value' attribute on DateInput (id=AccountStatusUpdateTime_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 34, column 72
    function value_11 () : java.util.Date {
      return account.AccountStatusUpdateTime
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 41, column 75
    function value_16 () : typekey.LanguageType {
      return account.PrimaryLanguage
    }
    
    // 'value' attribute on TypeKeyInput (id=ServiceTier_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 46, column 50
    function value_21 () : typekey.CustomerServiceTier {
      return account.ServiceTier
    }
    
    // 'value' attribute on TextInput (id=PhoneNumber_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 50, column 65
    function value_24 () : java.lang.String {
      return account.AccountHolderContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 54, column 61
    function value_27 () : java.lang.String {
      return account.AccountHolderContact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Nickname_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 58, column 35
    function value_30 () : java.lang.String {
      return account.Nickname
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 22, column 59
    function value_4 () : java.lang.String {
      return account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DUNS_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 81, column 72
    function value_45 () : java.lang.String {
      return account.AccountHolderContact.DUNSOfficialID
    }
    
    // 'value' attribute on TextInput (id=TUNS_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 86, column 72
    function value_50 () : java.lang.String {
      return account.AccountHolderContact.TUNSOfficialID
    }
    
    // 'value' attribute on TypeKeyInput (id=OrgType_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 95, column 47
    function value_54 () : typekey.AccountOrgType {
      return account.AccountOrgType
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_63 () : entity.IndustryCode {
      return account.IndustryCode
    }
    
    // 'value' attribute on TextInput (id=DescriptionOfBusiness_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 107, column 39
    function value_69 () : java.lang.String {
      return account.BusOpsDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=AccountStatus_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 27, column 44
    function value_7 () : typekey.AccountStatus {
      return account.AccountStatus
    }
    
    // 'value' attribute on RowIterator at AccountFile_Summary_BasicInfoDV.pcf: line 121, column 54
    function value_83 () : entity.AccountProducerCode[] {
      return account.ProducerCodes
    }
    
    // 'visible' attribute on DateInput (id=AccountStatusUpdateTime_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 34, column 72
    function visible_10 () : java.lang.Boolean {
      return account.AccountStatus == AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 41, column 75
    function visible_15 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getAllLanguages().size() > 1
    }
    
    // 'visible' attribute on InputSetRef (id=AccountCurrency) at AccountFile_Summary_BasicInfoDV.pcf: line 69, column 67
    function visible_36 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on TextInput (id=DUNS_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 81, column 72
    function visible_44 () : java.lang.Boolean {
      return account.AccountHolderContact.DUNSOfficialID != null
    }
    
    // 'visible' attribute on TextInput (id=TUNS_Input) at AccountFile_Summary_BasicInfoDV.pcf: line 86, column 72
    function visible_49 () : java.lang.Boolean {
      return account.AccountHolderContact.TUNSOfficialID != null
    }
    
    // 'visible' attribute on InputDivider at AccountFile_Summary_BasicInfoDV.pcf: line 109, column 55
    function visible_73 () : java.lang.Boolean {
      return account.ProducerCodes.Count != 0
    }
    
    // 'visible' attribute on InputSet at AccountFile_Summary_BasicInfoDV.pcf: line 89, column 63
    function visible_74 () : java.lang.Boolean {
      return account.AccountHolderContact typeis Company
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get address () : entity.Address {
      return getVariableValue("address", 0) as entity.Address
    }
    
    property set address ($arg :  entity.Address) {
      setVariableValue("address", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Summary_BasicInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Summary_BasicInfoDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=code_Cell) at AccountFile_Summary_BasicInfoDV.pcf: line 126, column 48
    function valueRoot_78 () : java.lang.Object {
      return apc.ProducerCode
    }
    
    // 'value' attribute on TextCell (id=code_Cell) at AccountFile_Summary_BasicInfoDV.pcf: line 126, column 48
    function value_77 () : java.lang.String {
      return apc.ProducerCode.Code
    }
    
    // 'value' attribute on TextCell (id=desc_Cell) at AccountFile_Summary_BasicInfoDV.pcf: line 131, column 30
    function value_80 () : java.lang.String {
      return apc.ProducerCode.Description
    }
    
    property get apc () : entity.AccountProducerCode {
      return getIteratedValue(1) as entity.AccountProducerCode
    }
    
    
  }
  
  
}