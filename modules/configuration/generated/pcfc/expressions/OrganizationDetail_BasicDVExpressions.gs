package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail_BasicDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationDetail_BasicDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail_BasicDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OrganizationDetail_BasicDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedContact) at OrganizationDetail_BasicDV.pcf: line 106, column 44
    function action_49 () : void {
      organization.Contact = contact
    }
    
    // 'label' attribute on MenuItem (id=UnassignedContact) at OrganizationDetail_BasicDV.pcf: line 106, column 44
    function label_50 () : java.lang.Object {
      return contact.DisplayName
    }
    
    property get contact () : entity.UserContact {
      return getIteratedValue(1) as entity.UserContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail_BasicDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationDetail_BasicDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=MoreUser) at OrganizationDetail_BasicDV.pcf: line 113, column 60
    function action_53 () : void {
      UserSearchPopup.push(organization)
    }
    
    // 'action' attribute on MenuItem (id=NewUser) at OrganizationDetail_BasicDV.pcf: line 119, column 39
    function action_57 () : void {
      NewOrganizationUserPopup.push(organization)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewCompany) at OrganizationDetail_BasicDV.pcf: line 124, column 56
    function action_59 () : void {
      NewContactPopup.push(typekey.ContactType.TC_COMPANY)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewPerson) at OrganizationDetail_BasicDV.pcf: line 129, column 56
    function action_62 () : void {
      NewContactPopup.push(typekey.ContactType.TC_PERSON)
    }
    
    // 'action' attribute on TextInput (id=ContactName_Input) at OrganizationDetail_BasicDV.pcf: line 138, column 39
    function action_67 () : void {
      OrganizationContactForward.push( organization.Contact )
    }
    
    // 'action' attribute on PickerMenuItem (id=MoreUser) at OrganizationDetail_BasicDV.pcf: line 113, column 60
    function action_dest_54 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination(organization)
    }
    
    // 'action' attribute on MenuItem (id=NewUser) at OrganizationDetail_BasicDV.pcf: line 119, column 39
    function action_dest_58 () : pcf.api.Destination {
      return pcf.NewOrganizationUserPopup.createDestination(organization)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewCompany) at OrganizationDetail_BasicDV.pcf: line 124, column 56
    function action_dest_60 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(typekey.ContactType.TC_COMPANY)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewPerson) at OrganizationDetail_BasicDV.pcf: line 129, column 56
    function action_dest_63 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(typekey.ContactType.TC_PERSON)
    }
    
    // 'action' attribute on TextInput (id=ContactName_Input) at OrganizationDetail_BasicDV.pcf: line 138, column 39
    function action_dest_68 () : pcf.api.Destination {
      return pcf.OrganizationContactForward.createDestination( organization.Contact )
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 43, column 56
    function def_onEnter_6 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.OrganizationNameOwner(orgNameAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at OrganizationDetail_BasicDV.pcf: line 142, column 27
    function def_onEnter_72 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(organization.Contact, Contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone")))
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 147, column 51
    function def_onEnter_75 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(organization.Contact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 43, column 56
    function def_onEnter_8 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.OrganizationNameOwner(orgNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 165, column 94
    function def_onEnter_90 (def :  pcf.GroupDetailInputSet) : void {
      def.onEnter(organization.RootGroup, true, organizationUsers.toList())
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 43, column 56
    function def_refreshVariables_7 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.OrganizationNameOwner(orgNameAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at OrganizationDetail_BasicDV.pcf: line 142, column 27
    function def_refreshVariables_73 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(organization.Contact, Contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone")))
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 147, column 51
    function def_refreshVariables_76 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(organization.Contact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 43, column 56
    function def_refreshVariables_9 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.OrganizationNameOwner(orgNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 165, column 94
    function def_refreshVariables_91 (def :  pcf.GroupDetailInputSet) : void {
      def.refreshVariables(organization.RootGroup, true, organizationUsers.toList())
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at OrganizationDetail_BasicDV.pcf: line 51, column 42
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      organization.Type = (__VALUE_TO_SET as typekey.BusinessType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationDetail_BasicDV.pcf: line 61, column 72
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      organization.ProducerStatus = (__VALUE_TO_SET as typekey.ProducerStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=Tier_Input) at OrganizationDetail_BasicDV.pcf: line 68, column 72
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      organization.Tier = (__VALUE_TO_SET as typekey.Tier)
    }
    
    // 'value' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      planSelector.AgencyBillPlan = (__VALUE_TO_SET as gw.plugin.billing.AgencyBillPlanSummary)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at OrganizationDetail_BasicDV.pcf: line 156, column 49
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      organization.Contact.PrimaryAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at OrganizationDetail_BasicDV.pcf: line 162, column 49
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      organization.Contact.PrimaryAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Type_Input) at OrganizationDetail_BasicDV.pcf: line 51, column 42
    function editable_11 () : java.lang.Boolean {
      return (organization.New and !organization.Carrier) and perm.Organization.editbasic(organization)
    }
    
    // 'editable' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationDetail_BasicDV.pcf: line 61, column 72
    function editable_18 () : java.lang.Boolean {
      return perm.Organization.editagency(organization)
    }
    
    // 'editable' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function editable_34 () : java.lang.Boolean {
      return planSelector.Editable
    }
    
    // 'filter' attribute on TypeKeyInput (id=Type_Input) at OrganizationDetail_BasicDV.pcf: line 51, column 42
    function filter_15 (VALUE :  typekey.BusinessType, VALUES :  typekey.BusinessType[]) : java.lang.Boolean {
      return !VALUE.hasCategory(BusinessTypeCategory.TC_CARRIER)
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_BasicDV.pcf: line 17, column 35
    function initialValue_0 () : entity.Organization {
      return orgHelper.Organization
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_BasicDV.pcf: line 21, column 32
    function initialValue_1 () : java.lang.String {
      return organization.Name
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_BasicDV.pcf: line 26, column 49
    function initialValue_2 () : java.util.List<entity.User> {
      return orgHelper.AllOrganizationUsers
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_BasicDV.pcf: line 31, column 36
    function initialValue_3 () : entity.UserContact[] {
      return organizationUsers.where(\u -> u.Contact != organization.Contact).map(\u -> u.Contact).toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_BasicDV.pcf: line 35, column 56
    function initialValue_4 () : gw.globalization.OrganizationNameAdapter {
      return new gw.globalization.OrganizationNameAdapter(organization)
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail_BasicDV.pcf: line 39, column 78
    function initialValue_5 () : gw.web.admin.OrganizationUIHelper.SingleCurrencyAgencyBillPlan {
      return orgHelper.newDefaultCurrencyAgencyBillPlan()
    }
    
    // 'mode' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 43, column 56
    function mode_10 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onPick' attribute on PickerMenuItem (id=MoreUser) at OrganizationDetail_BasicDV.pcf: line 113, column 60
    function onPick_55 (PickedValue :  User) : void {
      organization.Contact = PickedValue.Contact
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewCompany) at OrganizationDetail_BasicDV.pcf: line 124, column 56
    function onPick_61 (PickedValue :  Contact) : void {
      organization.Contact = PickedValue
    }
    
    // 'optionLabel' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function optionLabel_39 (VALUE :  gw.plugin.billing.AgencyBillPlanSummary) : java.lang.String {
      return VALUE.Name
    }
    
    // 'sortBy' attribute on IteratorSort at OrganizationDetail_BasicDV.pcf: line 102, column 30
    function sortBy_48 (contact :  entity.UserContact) : java.lang.Object {
      return contact.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function valueRange_40 () : java.lang.Object {
      return planSelector.AvailableBillPlans
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at OrganizationDetail_BasicDV.pcf: line 51, column 42
    function valueRoot_14 () : java.lang.Object {
      return organization
    }
    
    // 'value' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function valueRoot_38 () : java.lang.Object {
      return planSelector
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at OrganizationDetail_BasicDV.pcf: line 156, column 49
    function valueRoot_81 () : java.lang.Object {
      return organization.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at OrganizationDetail_BasicDV.pcf: line 51, column 42
    function value_12 () : typekey.BusinessType {
      return organization.Type
    }
    
    // 'value' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationDetail_BasicDV.pcf: line 61, column 72
    function value_20 () : typekey.ProducerStatus {
      return organization.ProducerStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=Tier_Input) at OrganizationDetail_BasicDV.pcf: line 68, column 72
    function value_28 () : typekey.Tier {
      return organization.Tier
    }
    
    // 'value' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function value_36 () : gw.plugin.billing.AgencyBillPlanSummary {
      return planSelector.AgencyBillPlan
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedContactIterator) at OrganizationDetail_BasicDV.pcf: line 99, column 46
    function value_51 () : entity.UserContact[] {
      return userContacts
    }
    
    // 'value' attribute on TextInput (id=ContactName_Input) at OrganizationDetail_BasicDV.pcf: line 138, column 39
    function value_69 () : entity.Contact {
      return organization.Contact
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at OrganizationDetail_BasicDV.pcf: line 156, column 49
    function value_79 () : typekey.AddressType {
      return organization.Contact.PrimaryAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at OrganizationDetail_BasicDV.pcf: line 162, column 49
    function value_85 () : java.lang.String {
      return organization.Contact.PrimaryAddress.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function verifyValueRangeIsAllowedType_41 ($$arg :  gw.plugin.billing.AgencyBillPlanSummary[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function verifyValueRange_42 () : void {
      var __valueRangeArg = planSelector.AvailableBillPlans
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationDetail_BasicDV.pcf: line 61, column 72
    function visible_19 () : java.lang.Boolean {
      return organization.Producer and perm.System.orgviewagency
    }
    
    // 'visible' attribute on RangeInput (id=AgencyBillPlan_Input) at OrganizationDetail_BasicDV.pcf: line 77, column 52
    function visible_35 () : java.lang.Boolean {
      return orgHelper.SingleBillPlanVisible
    }
    
    // 'visible' attribute on TextInput (id=PrimaryContactLabel_Input) at OrganizationDetail_BasicDV.pcf: line 84, column 51
    function visible_46 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on PickerMenuItem (id=MoreUser) at OrganizationDetail_BasicDV.pcf: line 113, column 60
    function visible_52 () : java.lang.Boolean {
      return organization.AllUsers.Count > 10
    }
    
    // 'visible' attribute on MenuItem (id=NewUser) at OrganizationDetail_BasicDV.pcf: line 119, column 39
    function visible_56 () : java.lang.Boolean {
      return perm.User.create
    }
    
    // 'visible' attribute on TextInput (id=ChangePrimaryContactButton_Input) at OrganizationDetail_BasicDV.pcf: line 91, column 46
    function visible_65 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on InputSetRef at OrganizationDetail_BasicDV.pcf: line 147, column 51
    function visible_74 () : java.lang.Boolean {
      return organization.Contact != null
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    property get name () : java.lang.String {
      return getVariableValue("name", 0) as java.lang.String
    }
    
    property set name ($arg :  java.lang.String) {
      setVariableValue("name", 0, $arg)
    }
    
    property get orgHelper () : gw.web.admin.OrganizationUIHelper {
      return getRequireValue("orgHelper", 0) as gw.web.admin.OrganizationUIHelper
    }
    
    property set orgHelper ($arg :  gw.web.admin.OrganizationUIHelper) {
      setRequireValue("orgHelper", 0, $arg)
    }
    
    property get orgNameAdapter () : gw.globalization.OrganizationNameAdapter {
      return getVariableValue("orgNameAdapter", 0) as gw.globalization.OrganizationNameAdapter
    }
    
    property set orgNameAdapter ($arg :  gw.globalization.OrganizationNameAdapter) {
      setVariableValue("orgNameAdapter", 0, $arg)
    }
    
    property get organization () : entity.Organization {
      return getVariableValue("organization", 0) as entity.Organization
    }
    
    property set organization ($arg :  entity.Organization) {
      setVariableValue("organization", 0, $arg)
    }
    
    property get organizationUsers () : java.util.List<entity.User> {
      return getVariableValue("organizationUsers", 0) as java.util.List<entity.User>
    }
    
    property set organizationUsers ($arg :  java.util.List<entity.User>) {
      setVariableValue("organizationUsers", 0, $arg)
    }
    
    property get planSelector () : gw.web.admin.OrganizationUIHelper.SingleCurrencyAgencyBillPlan {
      return getVariableValue("planSelector", 0) as gw.web.admin.OrganizationUIHelper.SingleCurrencyAgencyBillPlan
    }
    
    property set planSelector ($arg :  gw.web.admin.OrganizationUIHelper.SingleCurrencyAgencyBillPlan) {
      setVariableValue("planSelector", 0, $arg)
    }
    
    property get userContacts () : entity.UserContact[] {
      return getVariableValue("userContacts", 0) as entity.UserContact[]
    }
    
    property set userContacts ($arg :  entity.UserContact[]) {
      setVariableValue("userContacts", 0, $arg)
    }
    
    
  }
  
  
}