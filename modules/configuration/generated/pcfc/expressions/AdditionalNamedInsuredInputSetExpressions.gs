package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/AdditionalNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalNamedInsuredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalNamedInsuredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at AdditionalNamedInsuredInputSet.pcf: line 59, column 70
    function conversionExpression_7 (PickedValue :  Contact) : entity.PolicyAddlNamedInsured {
      return period.addNewPolicyAddlNamedInsuredForContact(PickedValue)
    }
    
    // 'initialValue' attribute on Variable at AdditionalNamedInsuredInputSet.pcf: line 17, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at AdditionalNamedInsuredInputSet.pcf: line 22, column 36
    function initialValue_1 () : AccountContactView[] {
      return null
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at AdditionalNamedInsuredInputSet.pcf: line 64, column 28
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyAddlNamedInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at AdditionalNamedInsuredInputSet.pcf: line 59, column 70
    function pickLocation_8 () : void {
      ContactSearchPopup.push(TC_NAMEDINSURED)
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalNamedInsuredInputSet.pcf: line 98, column 32
    function sortBy_16 (otherContact :  entity.AccountContactView) : java.lang.Object {
      return otherContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalNamedInsuredInputSet.pcf: line 135, column 28
    function sortBy_22 (additionalNamedInsured :  entity.PolicyAddlNamedInsured) : java.lang.Object {
      return additionalNamedInsured
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalNamedInsuredInputSet.pcf: line 47, column 30
    function sortBy_3 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalNamedInsuredInputSet.pcf: line 72, column 32
    function sortBy_9 (namedInsured :  entity.AccountContactView) : java.lang.Object {
      return namedInsured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AdditionalNamedInsuredInputSet.pcf: line 143, column 58
    function sortValue_23 (additionalNamedInsured :  entity.PolicyAddlNamedInsured) : java.lang.Object {
      return additionalNamedInsured
    }
    
    // 'value' attribute on TextCell (id=Relationship_Cell) at AdditionalNamedInsuredInputSet.pcf: line 149, column 28
    function sortValue_24 (additionalNamedInsured :  entity.PolicyAddlNamedInsured) : java.lang.Object {
      return additionalNamedInsured.Relationship
    }
    
    // 'value' attribute on IndustryCodeCell (id=IndustryCode_Cell) at AdditionalNamedInsuredInputSet.pcf: line 160, column 100
    function sortValue_25 (additionalNamedInsured :  entity.PolicyAddlNamedInsured) : java.lang.Object {
      return (additionalNamedInsured.AccountContactRole as NamedInsured).IndustryCode
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AddAll) at AdditionalNamedInsuredInputSet.pcf: line 84, column 74
    function toCreateAndAdd_14 (CheckedValues :  Object[]) : java.lang.Object {
      return period.addAllExistingAdditionalNamedInsureds()
    }
    
    // 'toRemove' attribute on RowIterator at AdditionalNamedInsuredInputSet.pcf: line 120, column 55
    function toRemove_55 (additionalNamedInsured :  entity.PolicyAddlNamedInsured) : void {
      period.removePolicyNamedInsured(additionalNamedInsured)
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at AdditionalNamedInsuredInputSet.pcf: line 69, column 55
    function value_12 () : entity.AccountContactView[] {
      return getUnassignedAdditionalNamedInsureds()
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfOtherType) at AdditionalNamedInsuredInputSet.pcf: line 95, column 55
    function value_19 () : entity.AccountContactView[] {
      return getOtherContacts()
    }
    
    // 'value' attribute on RowIterator at AdditionalNamedInsuredInputSet.pcf: line 120, column 55
    function value_56 () : entity.PolicyAddlNamedInsured[] {
      return period.PolicyContactRoles.whereTypeIs(PolicyAddlNamedInsured)
    }
    
    // 'value' attribute on AddMenuItemIterator at AdditionalNamedInsuredInputSet.pcf: line 44, column 47
    function value_6 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(TC_POLICYADDLNAMEDINSURED)
    }
    
    // 'visible' attribute on AddMenuItem (id=AddAll) at AdditionalNamedInsuredInputSet.pcf: line 84, column 74
    function visible_13 () : java.lang.Boolean {
      return unassignedAdditionalNamedInsureds.length > 0
    }
    
    // 'visible' attribute on AddMenuItem (id=AddOtherContact) at AdditionalNamedInsuredInputSet.pcf: line 90, column 55
    function visible_20 () : java.lang.Boolean {
      return getOtherContacts().Count > 0
    }
    
    // 'visible' attribute on AddButton (id=AddContactsButton) at AdditionalNamedInsuredInputSet.pcf: line 40, column 33
    function visible_21 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on IndustryCodeCell (id=IndustryCode_Cell) at AdditionalNamedInsuredInputSet.pcf: line 160, column 100
    function visible_26 () : java.lang.Boolean {
      return period.Policy.Product.isContactTypeSuitableForProductAccountType(Company)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get otherContacts () : AccountContactView[] {
      return getVariableValue("otherContacts", 0) as AccountContactView[]
    }
    
    property set otherContacts ($arg :  AccountContactView[]) {
      setVariableValue("otherContacts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get unassignedAdditionalNamedInsureds () : AccountContactView[] {
      return getVariableValue("unassignedAdditionalNamedInsureds", 0) as AccountContactView[]
    }
    
    property set unassignedAdditionalNamedInsureds ($arg :  AccountContactView[]) {
      setVariableValue("unassignedAdditionalNamedInsureds", 0, $arg)
    }
    
    function getUnassignedAdditionalNamedInsureds() : AccountContactView[] {
      if (unassignedAdditionalNamedInsureds == null) {
        unassignedAdditionalNamedInsureds = period.UnassignedAdditionalNamedInsureds.asViews()
      }
      return unassignedAdditionalNamedInsureds
    }
    function getOtherContacts() : AccountContactView[] {
      if (otherContacts == null) {
        otherContacts = period.AdditionalNamedInsuredOtherCandidates.asViews()
      }
        return otherContacts
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AdditionalNamedInsuredInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ExistingAdditionalNamedInsured) at AdditionalNamedInsuredInputSet.pcf: line 77, column 118
    function label_10 () : java.lang.Object {
      return namedInsured
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=ExistingAdditionalNamedInsured) at AdditionalNamedInsuredInputSet.pcf: line 77, column 118
    function toCreateAndAdd_11 (CheckedValues :  Object[]) : java.lang.Object {
      return period.addNewPolicyAddlNamedInsuredForContact(namedInsured.AccountContact.Contact)
    }
    
    property get namedInsured () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends AdditionalNamedInsuredInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=OtherContact) at AdditionalNamedInsuredInputSet.pcf: line 103, column 118
    function label_17 () : java.lang.Object {
      return otherContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=OtherContact) at AdditionalNamedInsuredInputSet.pcf: line 103, column 118
    function toCreateAndAdd_18 (CheckedValues :  Object[]) : java.lang.Object {
      return period.addNewPolicyAddlNamedInsuredForContact(otherContact.AccountContact.Contact)
    }
    
    property get otherContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends AdditionalNamedInsuredInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AdditionalNamedInsuredInputSet.pcf: line 143, column 58
    function action_31 () : void {
      EditPolicyContactRolePopup.push(additionalNamedInsured, openForEdit)
    }
    
    // 'pickLocation' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function action_39 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AdditionalNamedInsuredInputSet.pcf: line 143, column 58
    function action_dest_32 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(additionalNamedInsured, openForEdit)
    }
    
    // 'pickLocation' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_40 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, referenceDate, previousIndustryCode)
    }
    
    // 'value' attribute on TextCell (id=Relationship_Cell) at AdditionalNamedInsuredInputSet.pcf: line 149, column 28
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      additionalNamedInsured.Relationship = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      (additionalNamedInsured.AccountContactRole as NamedInsured).IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'editable' attribute on Row at AdditionalNamedInsuredInputSet.pcf: line 137, column 36
    function editable_53 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at AdditionalNamedInsuredInputSet.pcf: line 124, column 34
    function initialValue_28 () : Jurisdiction {
      return gw.api.util.JurisdictionMappingUtil.getJurisdiction(additionalNamedInsured.AccountContactRole.AccountContact.Contact.PrimaryAddress)
    }
    
    // 'initialValue' attribute on Variable at AdditionalNamedInsuredInputSet.pcf: line 128, column 36
    function initialValue_29 () : java.util.Date {
      return referenceState == null ? period.EditEffectiveDate : period.getReferenceDateForCurrentJob(referenceState)
    }
    
    // 'initialValue' attribute on Variable at AdditionalNamedInsuredInputSet.pcf: line 132, column 34
    function initialValue_30 () : IndustryCode {
      return period.Job.NewTerm ? null : additionalNamedInsured.IndustryCode
    }
    
    // RowIterator at AdditionalNamedInsuredInputSet.pcf: line 120, column 55
    function initializeVariables_54 () : void {
        referenceState = gw.api.util.JurisdictionMappingUtil.getJurisdiction(additionalNamedInsured.AccountContactRole.AccountContact.Contact.PrimaryAddress);
  referenceDate = referenceState == null ? period.EditEffectiveDate : period.getReferenceDateForCurrentJob(referenceState);
  previousIndustryCode = period.Job.NewTerm ? null : additionalNamedInsured.IndustryCode;

    }
    
    // 'inputConversion' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_42 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'outputConversion' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_43 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_44 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, referenceDate)
    }
    
    // 'value' attribute on TextCell (id=Relationship_Cell) at AdditionalNamedInsuredInputSet.pcf: line 149, column 28
    function valueRoot_37 () : java.lang.Object {
      return additionalNamedInsured
    }
    
    // 'value' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function valueRoot_47 () : java.lang.Object {
      return (additionalNamedInsured.AccountContactRole as NamedInsured)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AdditionalNamedInsuredInputSet.pcf: line 143, column 58
    function value_33 () : entity.PolicyAddlNamedInsured {
      return additionalNamedInsured
    }
    
    // 'value' attribute on TextCell (id=Relationship_Cell) at AdditionalNamedInsuredInputSet.pcf: line 149, column 28
    function value_35 () : java.lang.String {
      return additionalNamedInsured.Relationship
    }
    
    // 'value' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function value_45 () : entity.IndustryCode {
      return (additionalNamedInsured.AccountContactRole as NamedInsured).IndustryCode
    }
    
    // 'visible' attribute on IndustryCodeCell (id=IndustryCode_Cell) at IndustryCodeWidget.xml: line 5, column 47
    function visible_41 () : java.lang.Boolean {
      return additionalNamedInsured.AccountContactRole.AccountContact.Company
    }
    
    // 'visible' attribute on IndustryCodeCell (id=IndustryCode_Cell) at AdditionalNamedInsuredInputSet.pcf: line 160, column 100
    function visible_51 () : java.lang.Boolean {
      return period.Policy.Product.isContactTypeSuitableForProductAccountType(Company)
    }
    
    property get additionalNamedInsured () : entity.PolicyAddlNamedInsured {
      return getIteratedValue(1) as entity.PolicyAddlNamedInsured
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 1) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 1, $arg)
    }
    
    property get referenceDate () : java.util.Date {
      return getVariableValue("referenceDate", 1) as java.util.Date
    }
    
    property set referenceDate ($arg :  java.util.Date) {
      setVariableValue("referenceDate", 1, $arg)
    }
    
    property get referenceState () : Jurisdiction {
      return getVariableValue("referenceState", 1) as Jurisdiction
    }
    
    property set referenceState ($arg :  Jurisdiction) {
      setVariableValue("referenceState", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalNamedInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdditionalNamedInsuredInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at AdditionalNamedInsuredInputSet.pcf: line 52, column 88
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at AdditionalNamedInsuredInputSet.pcf: line 52, column 88
    function pickLocation_5 () : void {
      NewAdditionalNamedInsuredPopup.push(period, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  
}