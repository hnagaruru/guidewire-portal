package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_BasicDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeDetail_BasicDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_BasicDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeDetail_BasicDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function actionAvailable_17 () : java.lang.Boolean {
      return producerCode.Organization != null and not User.util.CurrentUser.ExternalUser
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function actionAvailable_74 () : java.lang.Boolean {
      return producerCode.PreferredUnderwriter != null and not User.util.CurrentUser.ExternalUser
    }
    
    // 'actionAvailable' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function actionAvailable_86 () : java.lang.Boolean {
      return producerCode.Branch != null and producerCode.Branch.GroupType != TC_ROOT and not User.util.CurrentUser.ExternalUser
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function action_11 () : void {
      OrganizationSearchPopup.push(null,true)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function action_14 () : void {
      OrganizationDetail.go(producerCode.Organization)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=ParentCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_38 () : void {
      AdminProducerCodeSearchPopup.push(producerCode.Organization)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function action_68 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function action_72 () : void {
      UserDetailPage.go(producerCode.PreferredUnderwriter)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function action_81 () : void {
      OrganizationBranchSearchPopup.push()
    }
    
    // 'action' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function action_84 () : void {
      GroupDetailPage.go(producerCode.Branch)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function action_dest_12 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null,true)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function action_dest_15 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(producerCode.Organization)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=ParentCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_dest_39 () : pcf.api.Destination {
      return pcf.AdminProducerCodeSearchPopup.createDestination(producerCode.Organization)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function action_dest_69 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function action_dest_73 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(producerCode.PreferredUnderwriter)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function action_dest_82 () : pcf.api.Destination {
      return pcf.OrganizationBranchSearchPopup.createDestination()
    }
    
    // 'action' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function action_dest_85 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(producerCode.Branch)
    }
    
    // 'available' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function available_24 () : java.lang.Boolean {
      return producerCode.Organization != null
    }
    
    // 'def' attribute on InputSetRef at ProducerCodeDetail_BasicDV.pcf: line 90, column 69
    function def_onEnter_61 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(addrAutoFillSearchOwner)
    }
    
    // 'def' attribute on InputSetRef at ProducerCodeDetail_BasicDV.pcf: line 90, column 69
    function def_refreshVariables_62 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(addrAutoFillSearchOwner)
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.OrganizationWithUpdate = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.SingleCurrencyCommissionPlanID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ProducerCodeDetail_BasicDV.pcf: line 26, column 36
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ProducerCodeInput (id=ParentCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.Parent = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on DateInput (id=AppointmentDate_Input) at ProducerCodeDetail_BasicDV.pcf: line 71, column 46
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.AppointmentDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProducerCodeDetail_BasicDV.pcf: line 80, column 44
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.ProducerStatus = (__VALUE_TO_SET as typekey.ProducerStatus)
    }
    
    // 'value' attribute on DateInput (id=TerminationDate_Input) at ProducerCodeDetail_BasicDV.pcf: line 88, column 142
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.TerminationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ProducerCodeDetail_BasicDV.pcf: line 32, column 43
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.PreferredUnderwriter = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCode.Branch = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function editable_13 () : java.lang.Boolean {
      return producerCode.New and not User.util.CurrentUser.ExternalUser
    }
    
    // 'editable' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function editable_25 () : java.lang.Boolean {
      return producerCode.New
    }
    
    // 'editable' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function editable_70 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeDetail_BasicDV.pcf: line 15, column 57
    function initialValue_0 () : gw.plugin.billing.CommissionPlanSummary[] {
      return gw.plugin.billing.CommissionPlanSearchCriteria.getCommissionPlans(producerCode.Organization.Tier)
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeDetail_BasicDV.pcf: line 19, column 58
    function initialValue_1 () : gw.pcf.contacts.AddressAutoFillSearchOwner {
      return new gw.pcf.contacts.AddressAutoFillSearchOwner(producerCode.Address, true)
    }
    
    // 'inputConversion' attribute on ProducerCodeInput (id=ParentCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function inputConversion_40 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.ProducerCodePickerUtil.convertValueFromString(VALUE, producerCode.Parent)
    }
    
    // 'inputConversion' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function inputConversion_87 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.web.admin.ProducerCodeUIHelper.performBranchSearch(VALUE)
    }
    
    // 'onChange' attribute on PostOnChange at ProducerCodeDetail_BasicDV.pcf: line 46, column 211
    function onChange_10 () : void {
      gw.web.admin.ProducerCodeUIHelper.initializeCommissionPlans(producerCode, producerCode.OrganizationWithUpdate); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, CommissionPlan)
    }
    
    // 'onPick' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function onPick_16 (PickedValue :  Organization) : void {
      gw.web.admin.ProducerCodeUIHelper.initializeCommissionPlans(producerCode, producerCode.OrganizationWithUpdate); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, CommissionPlan) 
    }
    
    // 'optionLabel' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function optionLabel_30 (VALUE :  java.lang.String) : java.lang.String {
      return commissionPlans.firstWhere( \ c -> c.Id == VALUE ).Name
    }
    
    // 'requestValidationExpression' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function requestValidationExpression_18 (VALUE :  entity.Organization) : java.lang.Object {
      return VALUE.ProducerStatus != TC_ACTIVE ? DisplayKey.get("Web.Admin.ProducerCodeDetail.IncorrectProducerStatus", VALUE.Type.DisplayName) : null
    }
    
    // 'valueRange' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function valueRange_31 () : java.lang.Object {
      return commissionPlans*.Id
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ProducerCodeDetail_BasicDV.pcf: line 26, column 36
    function valueRoot_4 () : java.lang.Object {
      return producerCode
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at ProducerCodeDetail_BasicDV.pcf: line 43, column 53
    function value_19 () : entity.Organization {
      return producerCode.OrganizationWithUpdate
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ProducerCodeDetail_BasicDV.pcf: line 26, column 36
    function value_2 () : java.lang.String {
      return producerCode.Code
    }
    
    // 'value' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function value_27 () : java.lang.String {
      return producerCode.SingleCurrencyCommissionPlanID
    }
    
    // 'value' attribute on ProducerCodeInput (id=ParentCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function value_41 () : entity.ProducerCode {
      return producerCode.Parent
    }
    
    // 'value' attribute on DateInput (id=AppointmentDate_Input) at ProducerCodeDetail_BasicDV.pcf: line 71, column 46
    function value_47 () : java.util.Date {
      return producerCode.AppointmentDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProducerCodeDetail_BasicDV.pcf: line 80, column 44
    function value_51 () : typekey.ProducerStatus {
      return producerCode.ProducerStatus
    }
    
    // 'value' attribute on DateInput (id=TerminationDate_Input) at ProducerCodeDetail_BasicDV.pcf: line 88, column 142
    function value_56 () : java.util.Date {
      return producerCode.TerminationDate
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ProducerCodeDetail_BasicDV.pcf: line 32, column 43
    function value_6 () : java.lang.String {
      return producerCode.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProducerCodeDetail_BasicDV.pcf: line 97, column 71
    function value_64 () : typekey.Currency {
      return producerCode.SingleCurrencyCommissionPlanCurrency
    }
    
    // 'value' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function value_75 () : entity.User {
      return producerCode.PreferredUnderwriter
    }
    
    // 'value' attribute on PickerInput (id=Branch_Input) at ProducerCodeDetail_BasicDV.pcf: line 117, column 34
    function value_88 () : entity.Group {
      return producerCode.Branch
    }
    
    // 'valueRange' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function verifyValueRange_33 () : void {
      var __valueRangeArg = commissionPlans*.Id
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=CommissionPlan_Input) at ProducerCodeDetail_BasicDV.pcf: line 58, column 71
    function visible_26 () : java.lang.Boolean {
      return not gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on DateInput (id=TerminationDate_Input) at ProducerCodeDetail_BasicDV.pcf: line 88, column 142
    function visible_55 () : java.lang.Boolean {
      return producerCode.ProducerStatus == TC_TERMINATING ||                             producerCode.ProducerStatus == TC_TERMINATED
    }
    
    // 'visible' attribute on AltUserInput (id=PreferredUnderwriter_Input) at ProducerCodeDetail_BasicDV.pcf: line 107, column 51
    function visible_71 () : java.lang.Boolean {
      return perm.System.prodcodeviewprefuw
    }
    
    property get addrAutoFillSearchOwner () : gw.pcf.contacts.AddressAutoFillSearchOwner {
      return getVariableValue("addrAutoFillSearchOwner", 0) as gw.pcf.contacts.AddressAutoFillSearchOwner
    }
    
    property set addrAutoFillSearchOwner ($arg :  gw.pcf.contacts.AddressAutoFillSearchOwner) {
      setVariableValue("addrAutoFillSearchOwner", 0, $arg)
    }
    
    property get commissionPlans () : gw.plugin.billing.CommissionPlanSummary[] {
      return getVariableValue("commissionPlans", 0) as gw.plugin.billing.CommissionPlanSummary[]
    }
    
    property set commissionPlans ($arg :  gw.plugin.billing.CommissionPlanSummary[]) {
      setVariableValue("commissionPlans", 0, $arg)
    }
    
    property get producerCode () : ProducerCode {
      return getRequireValue("producerCode", 0) as ProducerCode
    }
    
    property set producerCode ($arg :  ProducerCode) {
      setRequireValue("producerCode", 0, $arg)
    }
    
    
  }
  
  
}