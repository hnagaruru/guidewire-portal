package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountInfoInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AdditionalNamedCompanyAdder) at AccountInfoInputSet.pcf: line 61, column 94
    function action_10 () : void {
      if ( gw.web.account.AccountInfoInputSetUIHelper .canChangePrimaryNamedInsured(period, primaryNamedInsured)){ NewPrimaryNamedInsuredPopup.push(period, typekey.ContactType.TC_COMPANY) }
    }
    
    // 'action' attribute on MenuItem (id=AdditionalNamedPersonAdder) at AccountInfoInputSet.pcf: line 66, column 93
    function action_13 () : void {
      if( gw.web.account.AccountInfoInputSetUIHelper .canChangePrimaryNamedInsured(period, primaryNamedInsured)){ NewPrimaryNamedInsuredPopup.push(period, typekey.ContactType.TC_PERSON) }
    }
    
    // 'action' attribute on PickerMenuItem (id=PrimaryNamedInsuredABContactAdder) at AccountInfoInputSet.pcf: line 72, column 40
    function action_16 () : void {
      ContactSearchPopup.push(TC_NAMEDINSURED, period.Policy.Product)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at AccountInfoInputSet.pcf: line 96, column 48
    function action_25 () : void {
      EditPolicyContactRolePopup.push(primaryNamedInsured, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=AddAddressMenuItem) at AccountInfoInputSet.pcf: line 128, column 68
    function action_36 () : void {
      EditPolicyAddressPopup.push(period, true)
    }
    
    // 'action' attribute on MenuItem (id=EditPolicyAddressMenuItem) at AccountInfoInputSet.pcf: line 132, column 76
    function action_38 () : void {
      gw.web.account.AccountInfoInputSetUIHelper .openEditAddressPopup(period)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_48 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'action' attribute on PickerMenuItem (id=PrimaryNamedInsuredABContactAdder) at AccountInfoInputSet.pcf: line 72, column 40
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_NAMEDINSURED, period.Policy.Product)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at AccountInfoInputSet.pcf: line 96, column 48
    function action_dest_26 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(primaryNamedInsured, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=AddAddressMenuItem) at AccountInfoInputSet.pcf: line 128, column 68
    function action_dest_37 () : pcf.api.Destination {
      return pcf.EditPolicyAddressPopup.createDestination(period, true)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_49 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at AccountInfoInputSet.pcf: line 100, column 19
    function def_onEnter_30 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(primaryNamedInsured.AccountContactRole.AccountContact.Contact, Contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone") , false))
    }
    
    // 'def' attribute on InputSetRef at AccountInfoInputSet.pcf: line 136, column 25
    function def_onEnter_41 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.onEnter(period, not openForEdit)
    }
    
    // 'def' attribute on InputSetRef at AccountInfoInputSet.pcf: line 142, column 86
    function def_onEnter_43 (def :  pcf.PolicyOfficialIDInputSet_Company) : void {
      def.onEnter(primaryNamedInsured)
    }
    
    // 'def' attribute on InputSetRef at AccountInfoInputSet.pcf: line 142, column 86
    function def_onEnter_45 (def :  pcf.PolicyOfficialIDInputSet_Person) : void {
      def.onEnter(primaryNamedInsured)
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at AccountInfoInputSet.pcf: line 100, column 19
    function def_refreshVariables_31 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(primaryNamedInsured.AccountContactRole.AccountContact.Contact, Contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone") , false))
    }
    
    // 'def' attribute on InputSetRef at AccountInfoInputSet.pcf: line 136, column 25
    function def_refreshVariables_42 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.refreshVariables(period, not openForEdit)
    }
    
    // 'def' attribute on InputSetRef at AccountInfoInputSet.pcf: line 142, column 86
    function def_refreshVariables_44 (def :  pcf.PolicyOfficialIDInputSet_Company) : void {
      def.refreshVariables(primaryNamedInsured)
    }
    
    // 'def' attribute on InputSetRef at AccountInfoInputSet.pcf: line 142, column 86
    function def_refreshVariables_46 (def :  pcf.PolicyOfficialIDInputSet_Person) : void {
      def.refreshVariables(primaryNamedInsured)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      primaryNamedInsured.IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at AccountInfoInputSet.pcf: line 166, column 42
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=YearBusinessStarted_Input) at AccountInfoInputSet.pcf: line 172, column 40
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.Policy.Account.YearBusinessStarted = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextAreaInput (id=BusOps_Input) at AccountInfoInputSet.pcf: line 178, column 51
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.Policy.Account.BusOpsDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=OrganizationType_Input) at AccountInfoInputSet.pcf: line 190, column 45
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.Policy.Account.AccountOrgType = (__VALUE_TO_SET as typekey.AccountOrgType)
    }
    
    // 'value' attribute on TextInput (id=OrganizationTypeOtherDescription_Input) at AccountInfoInputSet.pcf: line 197, column 69
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.Policy.Account.OtherOrgTypeDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=YearBusinessStarted_Input) at AccountInfoInputSet.pcf: line 172, column 40
    function editable_70 () : java.lang.Boolean {
      return period.Policy.Account.Editable
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 14, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> period.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 19, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 23, column 23
    function initialValue_2 () : boolean {
      return gw.web.account.AccountInfoInputSetUIHelper .getInitialValueForOfficalIDsUpdated(period,  CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 28, column 37
    function initialValue_3 () : PolicyPriNamedInsured {
      return period.PrimaryNamedInsured
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 33, column 28
    function initialValue_4 () : Jurisdiction {
      return gw.api.util.JurisdictionMappingUtil.getJurisdiction(period.PolicyAddress.Address)
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 38, column 30
    function initialValue_5 () : java.util.Date {
      return referenceState != null ? period.getReferenceDateForCurrentJob(referenceState) : period.EditEffectiveDate
    }
    
    // 'initialValue' attribute on Variable at AccountInfoInputSet.pcf: line 42, column 28
    function initialValue_6 () : IndustryCode {
      return period.Job.NewTerm ? null : primaryNamedInsured.BasedOn.IndustryCode
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_51 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'label' attribute on MenuItem (id=AdditionalNamedCompanyAdder) at AccountInfoInputSet.pcf: line 61, column 94
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", typekey.ContactType.TC_COMPANY)
    }
    
    // 'label' attribute on MenuItem (id=AdditionalNamedPersonAdder) at AccountInfoInputSet.pcf: line 66, column 93
    function label_14 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", typekey.ContactType.TC_PERSON)
    }
    
    // 'mode' attribute on InputSetRef at AccountInfoInputSet.pcf: line 142, column 86
    function mode_47 () : java.lang.Object {
      return primaryNamedInsured.AccountContactRole.AccountContact.ContactType.Code
    }
    
    // 'onPick' attribute on PickerMenuItem (id=PrimaryNamedInsuredABContactAdder) at AccountInfoInputSet.pcf: line 72, column 40
    function onPick_18 (PickedValue :  Contact) : void {
      gw.web.account.AccountInfoInputSetUIHelper .changePrimaryNamedInsured(period, primaryNamedInsured, PickedValue)
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_52 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_53 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, previousIndustryCode.Code, referenceDate)
    }
    
    // 'required' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function required_54 () : java.lang.Boolean {
      return primaryNamedInsured.Branch.HasWorkersComp
    }
    
    // 'sortBy' attribute on IteratorSort at AccountInfoInputSet.pcf: line 84, column 28
    function sortBy_19 (unassignedContact :  entity.AccountContactView) : java.lang.Object {
      return unassignedContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AccountInfoInputSet.pcf: line 118, column 28
    function sortBy_32 (pniAddress :  entity.Address) : java.lang.Object {
      return pniAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountInfoInputSet.pcf: line 96, column 48
    function valueRoot_28 () : java.lang.Object {
      return primaryNamedInsured
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at AccountInfoInputSet.pcf: line 166, column 42
    function valueRoot_67 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TextInput (id=YearBusinessStarted_Input) at AccountInfoInputSet.pcf: line 172, column 40
    function valueRoot_73 () : java.lang.Object {
      return period.Policy.Account
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedContactIterator) at AccountInfoInputSet.pcf: line 81, column 51
    function value_22 () : entity.AccountContactView[] {
      return gw.web.account.AccountInfoInputSetUIHelper.getOtherContacts(period)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AccountInfoInputSet.pcf: line 96, column 48
    function value_27 () : java.lang.String {
      return primaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=pniAddressMenuItemIterator) at AccountInfoInputSet.pcf: line 115, column 40
    function value_35 () : entity.Address[] {
      return period.PolicyAddressCandidates
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_55 () : entity.IndustryCode {
      return primaryNamedInsured.IndustryCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at AccountInfoInputSet.pcf: line 166, column 42
    function value_65 () : java.lang.Boolean {
      return period.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=YearBusinessStarted_Input) at AccountInfoInputSet.pcf: line 172, column 40
    function value_71 () : java.lang.Integer {
      return period.Policy.Account.YearBusinessStarted
    }
    
    // 'value' attribute on TextAreaInput (id=BusOps_Input) at AccountInfoInputSet.pcf: line 178, column 51
    function value_77 () : java.lang.String {
      return period.Policy.Account.BusOpsDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=OrganizationType_Input) at AccountInfoInputSet.pcf: line 190, column 45
    function value_84 () : typekey.AccountOrgType {
      return period.Policy.Account.AccountOrgType
    }
    
    // 'value' attribute on TextInput (id=OrganizationTypeOtherDescription_Input) at AccountInfoInputSet.pcf: line 197, column 69
    function value_91 () : java.lang.String {
      return period.Policy.Account.OtherOrgTypeDescription
    }
    
    // 'visible' attribute on MenuItem (id=AdditionalNamedPersonAdder) at AccountInfoInputSet.pcf: line 66, column 93
    function visible_12 () : java.lang.Boolean {
      return period.Policy.Product.isContactTypeSuitableForProductAccountType(Person)
    }
    
    // 'visible' attribute on PickerMenuItem (id=PrimaryNamedInsuredABContactAdder) at AccountInfoInputSet.pcf: line 72, column 40
    function visible_15 () : java.lang.Boolean {
      return not period.Promoted
    }
    
    // 'visible' attribute on TextInput (id=ChangePrimaryNamedInsuredButton_Input) at AccountInfoInputSet.pcf: line 56, column 29
    function visible_23 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function visible_50 () : java.lang.Boolean {
      return primaryNamedInsured.Branch.Policy.Product.isContactTypeSuitableForProductAccountType(Company)
    }
    
    // 'visible' attribute on BooleanRadioInput (id=AssignedRisk_Input) at AccountInfoInputSet.pcf: line 166, column 42
    function visible_64 () : java.lang.Boolean {
      return period.HasWorkersComp
    }
    
    // 'visible' attribute on TextInput (id=PrimaryNamedInsuredLabel_Input) at AccountInfoInputSet.pcf: line 49, column 34
    function visible_7 () : java.lang.Boolean {
      return not openForEdit
    }
    
    // 'visible' attribute on InputSet (id=CommercialInputSet) at AccountInfoInputSet.pcf: line 157, column 50
    function visible_82 () : java.lang.Boolean {
      return period.Policy.Product.Commercial
    }
    
    // 'visible' attribute on MenuItem (id=AdditionalNamedCompanyAdder) at AccountInfoInputSet.pcf: line 61, column 94
    function visible_9 () : java.lang.Boolean {
      return period.Policy.Product.isContactTypeSuitableForProductAccountType(Company)
    }
    
    // 'visible' attribute on TextInput (id=OrganizationTypeOtherDescription_Input) at AccountInfoInputSet.pcf: line 197, column 69
    function visible_90 () : java.lang.Boolean {
      return period.Policy.Account.AccountOrgType == TC_OTHER
    }
    
    property get officialIDsUpdated () : boolean {
      return getVariableValue("officialIDsUpdated", 0) as java.lang.Boolean
    }
    
    property set officialIDsUpdated ($arg :  boolean) {
      setVariableValue("officialIDsUpdated", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 0) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 0, $arg)
    }
    
    property get primaryNamedInsured () : PolicyPriNamedInsured {
      return getVariableValue("primaryNamedInsured", 0) as PolicyPriNamedInsured
    }
    
    property set primaryNamedInsured ($arg :  PolicyPriNamedInsured) {
      setVariableValue("primaryNamedInsured", 0, $arg)
    }
    
    property get referenceDate () : java.util.Date {
      return getVariableValue("referenceDate", 0) as java.util.Date
    }
    
    property set referenceDate ($arg :  java.util.Date) {
      setVariableValue("referenceDate", 0, $arg)
    }
    
    property get referenceState () : Jurisdiction {
      return getVariableValue("referenceState", 0) as Jurisdiction
    }
    
    property set referenceState ($arg :  Jurisdiction) {
      setVariableValue("referenceState", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AccountInfoInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=pniAddressMenuItem) at AccountInfoInputSet.pcf: line 122, column 33
    function action_33 () : void {
      period.changePolicyAddressTo(pniAddress)
    }
    
    // 'label' attribute on MenuItem (id=pniAddressMenuItem) at AccountInfoInputSet.pcf: line 122, column 33
    function label_34 () : java.lang.Object {
      return pniAddress
    }
    
    property get pniAddress () : entity.Address {
      return getIteratedValue(1) as entity.Address
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountInfoInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedContact) at AccountInfoInputSet.pcf: line 88, column 40
    function action_20 () : void {
      gw.web.account.AccountInfoInputSetUIHelper .changeToExistingContact(period, primaryNamedInsured, unassignedContact.AccountContact.Contact); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.PolicyAddlNamedInsured)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedContact) at AccountInfoInputSet.pcf: line 88, column 40
    function label_21 () : java.lang.Object {
      return unassignedContact
    }
    
    property get unassignedContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  
}