package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function actionAvailable_19 () : java.lang.Boolean {
      return user.Organization != null
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function action_13 () : void {
      OrganizationSearchPopup.push(false)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function action_17 () : void {
      OrganizationDetail.go(user.Organization)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function action_dest_14 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(false)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function action_dest_18 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(user.Organization)
    }
    
    // 'def' attribute on InputSetRef (id=UserDetailCommons) at UserDetailDV.pcf: line 23, column 33
    function def_onEnter_2 (def :  pcf.UserDetailInputSet) : void {
      def.onEnter(user, new gw.contact.ContactNameNoSummaryOwner(new gw.api.name.PersonNameDelegate(user.Contact)))
    }
    
    // 'def' attribute on InputSetRef at UserDetailDV.pcf: line 74, column 68
    function def_onEnter_43 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(user.Contact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at UserDetailDV.pcf: line 102, column 57
    function def_onEnter_62 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#HomePhone), DisplayKey.get("Web.Admin.UserProfileDV.HomePhone"), user.Contact.PrimaryPhone == TC_HOME))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at UserDetailDV.pcf: line 107, column 57
    function def_onEnter_65 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#WorkPhone), DisplayKey.get("Web.Admin.UserProfileDV.WorkPhone"), user.Contact.PrimaryPhone == TC_WORK))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at UserDetailDV.pcf: line 112, column 59
    function def_onEnter_68 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Person#CellPhone), DisplayKey.get("Web.Admin.UserProfileDV.CellPhone"), user.Contact.PrimaryPhone == TC_MOBILE))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at UserDetailDV.pcf: line 116, column 19
    function def_onEnter_70 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#FaxPhone), DisplayKey.get("Web.Admin.ContactDetailDV.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef (id=UserDetailCommons) at UserDetailDV.pcf: line 23, column 33
    function def_refreshVariables_3 (def :  pcf.UserDetailInputSet) : void {
      def.refreshVariables(user, new gw.contact.ContactNameNoSummaryOwner(new gw.api.name.PersonNameDelegate(user.Contact)))
    }
    
    // 'def' attribute on InputSetRef at UserDetailDV.pcf: line 74, column 68
    function def_refreshVariables_44 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(user.Contact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at UserDetailDV.pcf: line 102, column 57
    function def_refreshVariables_63 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#HomePhone), DisplayKey.get("Web.Admin.UserProfileDV.HomePhone"), user.Contact.PrimaryPhone == TC_HOME))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at UserDetailDV.pcf: line 107, column 57
    function def_refreshVariables_66 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#WorkPhone), DisplayKey.get("Web.Admin.UserProfileDV.WorkPhone"), user.Contact.PrimaryPhone == TC_WORK))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at UserDetailDV.pcf: line 112, column 59
    function def_refreshVariables_69 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Person#CellPhone), DisplayKey.get("Web.Admin.UserProfileDV.CellPhone"), user.Contact.PrimaryPhone == TC_MOBILE))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at UserDetailDV.pcf: line 116, column 19
    function def_refreshVariables_71 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#FaxPhone), DisplayKey.get("Web.Admin.ContactDetailDV.Fax"), false))
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.OrganizationWithUpdate = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=UserType_Input) at UserDetailDV.pcf: line 53, column 38
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.UserType = (__VALUE_TO_SET as typekey.UserType)
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at UserDetailDV.pcf: line 62, column 46
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.EmployeeNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseOrganizationAddress_Input) at UserDetailDV.pcf: line 68, column 36
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.UseOrgAddress = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at UserDetailDV.pcf: line 82, column 68
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.PrimaryAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at UserDetailDV.pcf: line 88, column 68
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.PrimaryAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at UserDetailDV.pcf: line 95, column 46
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at UserDetailDV.pcf: line 122, column 45
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserDetailDV.pcf: line 31, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.ExternalUser = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function editable_15 () : java.lang.Boolean {
      return not currentUser.ExternalUser
    }
    
    // 'editable' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserDetailDV.pcf: line 31, column 44
    function editable_4 () : java.lang.Boolean {
      return not currentUser.ExternalUser and canChangeOrganization
    }
    
    // 'initialValue' attribute on Variable at UserDetailDV.pcf: line 16, column 27
    function initialValue_0 () : entity.User {
      return entity.User.util.CurrentUser
    }
    
    // 'onChange' attribute on PostOnChange at UserDetailDV.pcf: line 70, column 50
    function onChange_37 () : void {
      user.maybeSetContactInfo()
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserDetailDV.pcf: line 31, column 44
    function showConfirmMessage_6 () : java.lang.Boolean {
      return user.AllGroupUsersAsArray.HasElements or user.Producer != null
    }
    
    // 'valueRange' attribute on RangeInput (id=UserType_Input) at UserDetailDV.pcf: line 53, column 38
    function valueRange_29 () : java.lang.Object {
      return user.AvailableTypes
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at UserDetailDV.pcf: line 62, column 46
    function valueRoot_35 () : java.lang.Object {
      return user.Contact
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at UserDetailDV.pcf: line 82, column 68
    function valueRoot_48 () : java.lang.Object {
      return user.Contact.PrimaryAddress
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserDetailDV.pcf: line 31, column 44
    function valueRoot_9 () : java.lang.Object {
      return user
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function value_20 () : entity.Organization {
      return user.OrganizationWithUpdate
    }
    
    // 'value' attribute on RangeInput (id=UserType_Input) at UserDetailDV.pcf: line 53, column 38
    function value_26 () : typekey.UserType {
      return user.UserType
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at UserDetailDV.pcf: line 62, column 46
    function value_33 () : java.lang.String {
      return user.Contact.EmployeeNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseOrganizationAddress_Input) at UserDetailDV.pcf: line 68, column 36
    function value_38 () : java.lang.Boolean {
      return user.UseOrgAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at UserDetailDV.pcf: line 82, column 68
    function value_46 () : typekey.AddressType {
      return user.Contact.PrimaryAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at UserDetailDV.pcf: line 88, column 68
    function value_52 () : java.lang.String {
      return user.Contact.PrimaryAddress.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at UserDetailDV.pcf: line 95, column 46
    function value_57 () : typekey.PrimaryPhoneType {
      return user.Contact.PrimaryPhone
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserDetailDV.pcf: line 31, column 44
    function value_7 () : java.lang.Boolean {
      return user.ExternalUser
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at UserDetailDV.pcf: line 122, column 45
    function value_72 () : java.lang.String {
      return user.Contact.EmailAddress1
    }
    
    // 'valueRange' attribute on RangeInput (id=UserType_Input) at UserDetailDV.pcf: line 53, column 38
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UserType_Input) at UserDetailDV.pcf: line 53, column 38
    function verifyValueRangeIsAllowedType_30 ($$arg :  typekey.UserType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UserType_Input) at UserDetailDV.pcf: line 53, column 38
    function verifyValueRange_31 () : void {
      var __valueRangeArg = user.AvailableTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at UserDetailDV.pcf: line 20, column 53
    function visible_1 () : java.lang.Boolean {
      return user.Credential.LockDate != null
    }
    
    // 'visible' attribute on OrgInput (id=Organization_Input) at UserDetailDV.pcf: line 43, column 63
    function visible_16 () : java.lang.Boolean {
      return user.ExternalUser and canChangeOrganization
    }
    
    // 'visible' attribute on InputSetRef at UserDetailDV.pcf: line 74, column 68
    function visible_42 () : java.lang.Boolean {
      return not user.UseOrgAddress and user.Contact != null
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserDetailDV.pcf: line 31, column 44
    function visible_5 () : java.lang.Boolean {
      return perm.System.useredittype
    }
    
    // 'visible' attribute on InputSetRef (id=HomePhone) at UserDetailDV.pcf: line 102, column 57
    function visible_61 () : java.lang.Boolean {
      return user.Contact.PrimaryPhone == TC_HOME
    }
    
    // 'visible' attribute on InputSetRef (id=WorkPhone) at UserDetailDV.pcf: line 107, column 57
    function visible_64 () : java.lang.Boolean {
      return user.Contact.PrimaryPhone == TC_WORK
    }
    
    // 'visible' attribute on InputSetRef (id=CellPhone) at UserDetailDV.pcf: line 112, column 59
    function visible_67 () : java.lang.Boolean {
      return user.Contact.PrimaryPhone == TC_MOBILE
    }
    
    property get canChangeOrganization () : boolean {
      return getRequireValue("canChangeOrganization", 0) as java.lang.Boolean
    }
    
    property set canChangeOrganization ($arg :  boolean) {
      setRequireValue("canChangeOrganization", 0, $arg)
    }
    
    property get currentUser () : entity.User {
      return getVariableValue("currentUser", 0) as entity.User
    }
    
    property set currentUser ($arg :  entity.User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}