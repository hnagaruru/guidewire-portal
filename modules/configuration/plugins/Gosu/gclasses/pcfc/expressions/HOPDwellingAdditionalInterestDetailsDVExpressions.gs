package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAdditionalInterestDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingAdditionalInterestDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAdditionalInterestDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingAdditionalInterestDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 64, column 78
    function conversionExpression_8 (PickedValue :  Contact) : entity.AddlInterestDetail {
      return interestContainer.addAdditionalInterestDetail(PickedValue)
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingAdditionalInterestDetailsDV.pcf: line 19, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return interestContainer.PolicyPeriod
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingAdditionalInterestDetailsDV.pcf: line 24, column 39
    function initialValue_1 () : entity.AccountContact[] {
      return interestContainer.AdditionalInterestCandidates
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingAdditionalInterestDetailsDV.pcf: line 29, column 39
    function initialValue_2 () : entity.AccountContact[] {
      return interestContainer.AdditionalInterestOtherCandidates
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingAdditionalInterestDetailsDV.pcf: line 33, column 54
    function initialValue_3 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 69, column 30
    function label_14 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyAddlInterest.Type.TypeInfo.DisplayName)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 64, column 78
    function pickLocation_9 () : void {
      ContactSearchPopup.push(TC_ADDITIONALINTEREST)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingAdditionalInterestDetailsDV.pcf: line 77, column 34
    function sortBy_10 (additionalInterest :  entity.AccountContact) : java.lang.Object {
      return additionalInterest.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingAdditionalInterestDetailsDV.pcf: line 97, column 34
    function sortBy_15 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingAdditionalInterestDetailsDV.pcf: line 129, column 30
    function sortBy_21 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return addlInterestDetail.PolicyAddlInterest.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingAdditionalInterestDetailsDV.pcf: line 132, column 30
    function sortBy_22 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return addlInterestDetail.AdditionalInterestType.Code
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingAdditionalInterestDetailsDV.pcf: line 135, column 30
    function sortBy_23 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return addlInterestDetail.ContractNumber
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingAdditionalInterestDetailsDV.pcf: line 52, column 32
    function sortBy_4 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 143, column 56
    function sortValue_24 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      var policyAddlInterest : entity.PolicyAddlInterest = (addlInterestDetail.PolicyAddlInterest)
return addlInterestDetail.PolicyAddlInterest
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 150, column 61
    function sortValue_25 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 155, column 86
    function sortValue_26 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return (addlInterestDetail as HOPDwellAddlInterest).AddlIntEffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 160, column 86
    function sortValue_27 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return (addlInterestDetail as HOPDwellAddlInterest).AddlIntExpDate
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 165, column 83
    function sortValue_28 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return (addlInterestDetail as HOPDwellAddlInterest).Description
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 170, column 58
    function sortValue_29 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 175, column 60
    function sortValue_30 (addlInterestDetail :  entity.AddlInterestDetail) : java.lang.Object {
      return addlInterestDetail.ContractNumber
    }
    
    // 'toRemove' attribute on RowIterator at HOPDwellingAdditionalInterestDetailsDV.pcf: line 122, column 53
    function toRemove_63 (addlInterestDetail :  entity.AddlInterestDetail) : void {
      interestContainer.removeFromAdditionalInterestDetails(addlInterestDetail)
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 74, column 53
    function value_13 () : entity.AccountContact[] {
      return existingAdditionalInterests
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfOtherType) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 94, column 53
    function value_18 () : entity.AccountContact[] {
      return otherContacts
    }
    
    // 'value' attribute on RowIterator at HOPDwellingAdditionalInterestDetailsDV.pcf: line 122, column 53
    function value_64 () : entity.AddlInterestDetail[] {
      return interestContainer.AdditionalInterestDetails
    }
    
    // 'value' attribute on AddMenuItemIterator at HOPDwellingAdditionalInterestDetailsDV.pcf: line 49, column 49
    function value_7 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYADDLINTEREST)
    }
    
    // 'visible' attribute on AddMenuItem (id=AddOtherContact) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 89, column 52
    function visible_19 () : java.lang.Boolean {
      return otherContacts.Count > 0
    }
    
    // 'visible' attribute on AddButton (id=AddContactsButton) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 45, column 35
    function visible_20 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on DetailViewPanel (id=HOPDwellingAdditionalInterestDetailsDV) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 8, column 83
    function visible_66 () : java.lang.Boolean {
      return !(policyPeriod.Job typeis Submission) or perm.System.viewsubmission
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get existingAdditionalInterests () : entity.AccountContact[] {
      return getVariableValue("existingAdditionalInterests", 0) as entity.AccountContact[]
    }
    
    property set existingAdditionalInterests ($arg :  entity.AccountContact[]) {
      setVariableValue("existingAdditionalInterests", 0, $arg)
    }
    
    property get interestContainer () : gw.api.contact.AdditionalInterestContainer {
      return getRequireValue("interestContainer", 0) as gw.api.contact.AdditionalInterestContainer
    }
    
    property set interestContainer ($arg :  gw.api.contact.AdditionalInterestContainer) {
      setRequireValue("interestContainer", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get otherContacts () : entity.AccountContact[] {
      return getVariableValue("otherContacts", 0) as entity.AccountContact[]
    }
    
    property set otherContacts ($arg :  entity.AccountContact[]) {
      setVariableValue("otherContacts", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAdditionalInterestDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends HOPDwellingAdditionalInterestDetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ExistingAdditionalInterest) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 82, column 111
    function label_11 () : java.lang.Object {
      return additionalInterest
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=ExistingAdditionalInterest) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 82, column 111
    function toCreateAndAdd_12 (CheckedValues :  Object[]) : java.lang.Object {
      return interestContainer.addAdditionalInterestDetail(additionalInterest.Contact)
    }
    
    property get additionalInterest () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAdditionalInterestDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends HOPDwellingAdditionalInterestDetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=acctContact) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 102, column 104
    function label_16 () : java.lang.Object {
      return acctContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=acctContact) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 102, column 104
    function toCreateAndAdd_17 (CheckedValues :  Object[]) : java.lang.Object {
      return interestContainer.addAdditionalInterestDetail(acctContact.Contact)
    }
    
    property get acctContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAdditionalInterestDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends HOPDwellingAdditionalInterestDetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 143, column 56
    function action_32 () : void {
      EditPolicyContactRolePopup.push(addlInterestDetail.PolicyAddlInterest, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 143, column 56
    function action_dest_33 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(addlInterestDetail.PolicyAddlInterest, openForEdit)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at HOPDwellingAdditionalInterestDetailsDV.pcf: line 122, column 53
    function checkBoxVisible_61 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 150, column 61
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.AdditionalInterestType = (__VALUE_TO_SET as typekey.AdditionalInterestType)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 155, column 86
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      (addlInterestDetail as HOPDwellAddlInterest).AddlIntEffDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 160, column 86
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      (addlInterestDetail as HOPDwellAddlInterest).AddlIntExpDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 165, column 83
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      (addlInterestDetail as HOPDwellAddlInterest).Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 170, column 58
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.CertRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 175, column 60
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.ContractNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingAdditionalInterestDetailsDV.pcf: line 126, column 49
    function initialValue_31 () : entity.PolicyAddlInterest {
      return addlInterestDetail.PolicyAddlInterest
    }
    
    // RowIterator at HOPDwellingAdditionalInterestDetailsDV.pcf: line 122, column 53
    function initializeVariables_62 () : void {
        policyAddlInterest = addlInterestDetail.PolicyAddlInterest;

    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 143, column 56
    function valueRoot_35 () : java.lang.Object {
      return addlInterestDetail
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 155, column 86
    function valueRoot_43 () : java.lang.Object {
      return (addlInterestDetail as HOPDwellAddlInterest)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 150, column 61
    function value_37 () : typekey.AdditionalInterestType {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 155, column 86
    function value_41 () : java.util.Date {
      return (addlInterestDetail as HOPDwellAddlInterest).AddlIntEffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 160, column 86
    function value_45 () : java.util.Date {
      return (addlInterestDetail as HOPDwellAddlInterest).AddlIntExpDate
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 165, column 83
    function value_49 () : java.lang.String {
      return (addlInterestDetail as HOPDwellAddlInterest).Description
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 170, column 58
    function value_53 () : java.lang.Boolean {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 175, column 60
    function value_57 () : java.lang.String {
      return addlInterestDetail.ContractNumber
    }
    
    property get addlInterestDetail () : entity.AddlInterestDetail {
      return getIteratedValue(1) as entity.AddlInterestDetail
    }
    
    property get policyAddlInterest () : entity.PolicyAddlInterest {
      return getVariableValue("policyAddlInterest", 1) as entity.PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  entity.PolicyAddlInterest) {
      setVariableValue("policyAddlInterest", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAdditionalInterestDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPDwellingAdditionalInterestDetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 57, column 97
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at HOPDwellingAdditionalInterestDetailsDV.pcf: line 57, column 97
    function pickLocation_6 () : void {
      NewAdditionalInterestPopup.push(interestContainer, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  
}