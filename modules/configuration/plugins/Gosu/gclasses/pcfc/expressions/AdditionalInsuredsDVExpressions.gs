package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalInsuredsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalInsuredsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at AdditionalInsuredsDV.pcf: line 69, column 77
    function conversionExpression_9 (PickedValue :  Contact) : entity.PolicyAddlInsuredDetail {
      return policyLine.addNewAdditionalInsuredDetailForContact(PickedValue)
    }
    
    // 'editable' attribute on ListViewInput at AdditionalInsuredsDV.pcf: line 43, column 27
    function editable_52 () : java.lang.Boolean {
      return !(policyLine.Branch.Job typeis Submission) or perm.System.editsubmission
    }
    
    // 'initialValue' attribute on Variable at AdditionalInsuredsDV.pcf: line 23, column 36
    function initialValue_0 () : AccountContactView[] {
      return null
    }
    
    // 'initialValue' attribute on Variable at AdditionalInsuredsDV.pcf: line 32, column 54
    function initialValue_2 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at AdditionalInsuredsDV.pcf: line 36, column 60
    function initialValue_3 () : gw.pcf.contacts.AdditionalInsuredsDVUIHelper {
      return new gw.pcf.contacts.AdditionalInsuredsDVUIHelper()
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at AdditionalInsuredsDV.pcf: line 74, column 30
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyAddlInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at AdditionalInsuredsDV.pcf: line 69, column 77
    function pickLocation_10 () : void {
      ContactSearchPopup.push(TC_ADDITIONALINSURED)
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalInsuredsDV.pcf: line 82, column 34
    function sortBy_11 (additionalInsured :  entity.AccountContactView) : java.lang.Object {
      return additionalInsured.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalInsuredsDV.pcf: line 102, column 34
    function sortBy_16 (otherContact :  entity.AccountContactView) : java.lang.Object {
      return otherContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalInsuredsDV.pcf: line 129, column 30
    function sortBy_21 (additionalInsuredDetail :  entity.PolicyAddlInsuredDetail) : java.lang.Object {
      return additionalInsuredDetail.PolicyAddlInsured
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalInsuredsDV.pcf: line 57, column 32
    function sortBy_5 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AdditionalInsuredsDV.pcf: line 136, column 55
    function sortValue_22 (additionalInsuredDetail :  entity.PolicyAddlInsuredDetail) : java.lang.Object {
      return additionalInsuredDetail.PolicyAddlInsured
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AdditionalInsuredsDV.pcf: line 143, column 59
    function sortValue_23 (additionalInsuredDetail :  entity.PolicyAddlInsuredDetail) : java.lang.Object {
      return additionalInsuredDetail.AdditionalInsuredType
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInformationType_Cell) at AdditionalInsuredsDV.pcf: line 153, column 57
    function sortValue_24 (additionalInsuredDetail :  entity.PolicyAddlInsuredDetail) : java.lang.Object {
      return additionalInsuredDetail.additionalInformationType(additionalInsuredDetail.AdditionalInsuredType)
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at AdditionalInsuredsDV.pcf: line 160, column 56
    function sortValue_26 (additionalInsuredDetail :  entity.PolicyAddlInsuredDetail) : java.lang.Object {
      return additionalInsuredDetail.AdditionalInformation
    }
    
    // 'toRemove' attribute on RowIterator at AdditionalInsuredsDV.pcf: line 126, column 58
    function toRemove_50 (additionalInsuredDetail :  entity.PolicyAddlInsuredDetail) : void {
      additionalInsuredDetail.PolicyAddlInsured.removeDetail(additionalInsuredDetail)
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at AdditionalInsuredsDV.pcf: line 79, column 57
    function value_14 () : entity.AccountContactView[] {
      return getExistingAdditionalInsureds()
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfOtherType) at AdditionalInsuredsDV.pcf: line 99, column 57
    function value_19 () : entity.AccountContactView[] {
      return getOtherContacts()
    }
    
    // 'value' attribute on RowIterator at AdditionalInsuredsDV.pcf: line 126, column 58
    function value_51 () : entity.PolicyAddlInsuredDetail[] {
      return policyLine.AdditionalInsureds.arrays("PolicyAdditionalInsuredDetails").toArray(new entity.PolicyAddlInsuredDetail[0])
    }
    
    // 'value' attribute on AddMenuItemIterator at AdditionalInsuredsDV.pcf: line 54, column 49
    function value_8 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYADDLINSURED)
    }
    
    // 'visible' attribute on AddMenuItem (id=AddOtherContact) at AdditionalInsuredsDV.pcf: line 94, column 57
    function visible_20 () : java.lang.Boolean {
      return getOtherContacts().Count > 0
    }
    
    // 'visible' attribute on TypeKeyCell (id=AdditionalInformationType_Cell) at AdditionalInsuredsDV.pcf: line 153, column 57
    function visible_25 () : java.lang.Boolean {
      return additionalInformationVisible
    }
    
    // 'visible' attribute on Label at AdditionalInsuredsDV.pcf: line 40, column 33
    function visible_4 () : java.lang.Boolean {
      return displayLabel
    }
    
    property get additionalInformationVisible () : boolean {
      return getRequireValue("additionalInformationVisible", 0) as java.lang.Boolean
    }
    
    property set additionalInformationVisible ($arg :  boolean) {
      setRequireValue("additionalInformationVisible", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get displayLabel () : boolean {
      return getRequireValue("displayLabel", 0) as java.lang.Boolean
    }
    
    property set displayLabel ($arg :  boolean) {
      setRequireValue("displayLabel", 0, $arg)
    }
    
    property get existingAdditionalInsureds () : AccountContactView[] {
      return getVariableValue("existingAdditionalInsureds", 0) as AccountContactView[]
    }
    
    property set existingAdditionalInsureds ($arg :  AccountContactView[]) {
      setVariableValue("existingAdditionalInsureds", 0, $arg)
    }
    
    property get helper () : gw.pcf.contacts.AdditionalInsuredsDVUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.contacts.AdditionalInsuredsDVUIHelper
    }
    
    property set helper ($arg :  gw.pcf.contacts.AdditionalInsuredsDVUIHelper) {
      setVariableValue("helper", 0, $arg)
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
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    function getExistingAdditionalInsureds() : AccountContactView[] {
      if (existingAdditionalInsureds == null) {
        existingAdditionalInsureds = policyLine.ExistingAdditionalInsureds.asViews()
      }
      return existingAdditionalInsureds
    }
    
    function getOtherContacts() : AccountContactView[] {
      if (otherContacts == null) {
        otherContacts = policyLine.AdditionalInsuredOtherCandidates.asViews()
      }
      return otherContacts
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AdditionalInsuredsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ExistingAdditionalInsured) at AdditionalInsuredsDV.pcf: line 87, column 130
    function label_12 () : java.lang.Object {
      return additionalInsured
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=ExistingAdditionalInsured) at AdditionalInsuredsDV.pcf: line 87, column 130
    function toCreateAndAdd_13 (CheckedValues :  Object[]) : java.lang.Object {
      return policyLine.addNewAdditionalInsuredDetailForContact(additionalInsured.AccountContact.Contact)
    }
    
    property get additionalInsured () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends AdditionalInsuredsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=OtherContact) at AdditionalInsuredsDV.pcf: line 107, column 125
    function label_17 () : java.lang.Object {
      return otherContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=OtherContact) at AdditionalInsuredsDV.pcf: line 107, column 125
    function toCreateAndAdd_18 (CheckedValues :  Object[]) : java.lang.Object {
      return policyLine.addNewAdditionalInsuredDetailForContact(otherContact.AccountContact.Contact)
    }
    
    property get otherContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends AdditionalInsuredsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AdditionalInsuredsDV.pcf: line 136, column 55
    function action_28 () : void {
      EditPolicyContactRolePopup.push(additionalInsuredDetail.PolicyAddlInsured, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AdditionalInsuredsDV.pcf: line 136, column 55
    function action_dest_29 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(additionalInsuredDetail.PolicyAddlInsured, openForEdit)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at AdditionalInsuredsDV.pcf: line 126, column 58
    function checkBoxVisible_49 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AdditionalInsuredsDV.pcf: line 143, column 59
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      additionalInsuredDetail.AdditionalInsuredType = (__VALUE_TO_SET as typekey.AdditionalInsuredType)
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at AdditionalInsuredsDV.pcf: line 160, column 56
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      additionalInsuredDetail.AdditionalInformation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=AdditionalInformation_Cell) at AdditionalInsuredsDV.pcf: line 160, column 56
    function editable_42 () : java.lang.Boolean {
      return helper.additionalInformationRequired(additionalInsuredDetail)
    }
    
    // 'onChange' attribute on PostOnChange at AdditionalInsuredsDV.pcf: line 146, column 93
    function onChange_33 () : void {
      helper.onAdditionalInsuredTypeChange(additionalInsuredDetail)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AdditionalInsuredsDV.pcf: line 136, column 55
    function valueRoot_31 () : java.lang.Object {
      return additionalInsuredDetail
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AdditionalInsuredsDV.pcf: line 136, column 55
    function value_30 () : entity.PolicyAddlInsured {
      return additionalInsuredDetail.PolicyAddlInsured
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AdditionalInsuredsDV.pcf: line 143, column 59
    function value_34 () : typekey.AdditionalInsuredType {
      return additionalInsuredDetail.AdditionalInsuredType
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInformationType_Cell) at AdditionalInsuredsDV.pcf: line 153, column 57
    function value_38 () : AdditionalInformationType {
      return additionalInsuredDetail.additionalInformationType(additionalInsuredDetail.AdditionalInsuredType)
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at AdditionalInsuredsDV.pcf: line 160, column 56
    function value_43 () : java.lang.String {
      return additionalInsuredDetail.AdditionalInformation
    }
    
    // 'valueType' attribute on TypeKeyCell (id=AdditionalInformationType_Cell) at AdditionalInsuredsDV.pcf: line 153, column 57
    function verifyValueType_41 () : void {
      var __valueTypeArg : AdditionalInformationType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyCell (id=AdditionalInformationType_Cell) at AdditionalInsuredsDV.pcf: line 153, column 57
    function visible_39 () : java.lang.Boolean {
      return additionalInformationVisible
    }
    
    property get additionalInsuredDetail () : entity.PolicyAddlInsuredDetail {
      return getIteratedValue(1) as entity.PolicyAddlInsuredDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdditionalInsuredsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at AdditionalInsuredsDV.pcf: line 62, column 89
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at AdditionalInsuredsDV.pcf: line 62, column 89
    function pickLocation_7 () : void {
      NewAdditionalInsuredPopup.push(policyLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  
}