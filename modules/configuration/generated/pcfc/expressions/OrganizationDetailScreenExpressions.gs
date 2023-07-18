package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at OrganizationDetailScreen.pcf: line 124, column 36
    function available_23 () : java.lang.Boolean {
      return orgHelper.isCurrencyCheckboxAvailable(agencyBillPlan, planCurrency.Currency) and InEditMode
    }
    
    // 'value' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at OrganizationDetailScreen.pcf: line 124, column 36
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      planCurrency.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at OrganizationDetailScreen.pcf: line 124, column 36
    function valueRoot_27 () : java.lang.Object {
      return planCurrency
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at OrganizationDetailScreen.pcf: line 131, column 38
    function valueRoot_31 () : java.lang.Object {
      return planCurrency.Currency
    }
    
    // 'value' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at OrganizationDetailScreen.pcf: line 124, column 36
    function value_25 () : java.lang.Boolean {
      return planCurrency.Selected
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at OrganizationDetailScreen.pcf: line 131, column 38
    function value_30 () : java.lang.String {
      return planCurrency.Currency.DisplayName
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at OrganizationDetailScreen.pcf: line 124, column 36
    function visible_24 () : java.lang.Boolean {
      return InEditMode
    }
    
    // 'visible' attribute on Row at OrganizationDetailScreen.pcf: line 117, column 90
    function visible_33 () : java.lang.Boolean {
      return (planCurrency.Selected and not InEditMode) or InEditMode
    }
    
    property get planCurrency () : gw.web.admin.OrganizationUIHelper.MultiCurrencyBillPlanCurrency {
      return getIteratedValue(2) as gw.web.admin.OrganizationUIHelper.MultiCurrencyBillPlanCurrency
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OrganizationDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at OrganizationDetailScreen.pcf: line 99, column 115
    function checkBoxVisible_35 () : java.lang.Boolean {
      return agencyBillPlan.IsPlanRemovable
    }
    
    // 'value' attribute on TextCell (id=PlanName_Cell) at OrganizationDetailScreen.pcf: line 104, column 55
    function valueRoot_21 () : java.lang.Object {
      return agencyBillPlan
    }
    
    // 'value' attribute on TextCell (id=PlanName_Cell) at OrganizationDetailScreen.pcf: line 104, column 55
    function value_20 () : java.lang.String {
      return agencyBillPlan.PlanName
    }
    
    // 'value' attribute on RowIterator (id=CurrencyIterator) at OrganizationDetailScreen.pcf: line 115, column 121
    function value_34 () : java.util.List<gw.web.admin.OrganizationUIHelper.MultiCurrencyBillPlanCurrency> {
      return agencyBillPlan.Currencies
    }
    
    property get agencyBillPlan () : gw.web.admin.OrganizationUIHelper.MultiCurrencyAgencyBillPlan {
      return getIteratedValue(1) as gw.web.admin.OrganizationUIHelper.MultiCurrencyAgencyBillPlan
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=SelectPlanButton) at OrganizationDetailScreen.pcf: line 75, column 37
    function action_17 () : void {
      AgencyBillPlanSearchPopup.push(orgHelper.DisplayableAgencyBillPlans*.PlanID)
    }
    
    // 'action' attribute on ToolbarButton (id=OrganizationDetailScreen_BasicCard_DeleteButton) at OrganizationDetailScreen.pcf: line 25, column 59
    function action_4 () : void {
      gw.api.admin.BaseAdminUtil.deleteOrganization(organization); OrganizationSearchPage.go()
    }
    
    // 'action' attribute on PickerToolbarButton (id=SelectPlanButton) at OrganizationDetailScreen.pcf: line 75, column 37
    function action_dest_18 () : pcf.api.Destination {
      return pcf.AgencyBillPlanSearchPopup.createDestination(orgHelper.DisplayableAgencyBillPlans*.PlanID)
    }
    
    // 'available' attribute on ToolbarButton (id=OrganizationDetailScreen_BasicCard_DeleteButton) at OrganizationDetailScreen.pcf: line 25, column 59
    function available_2 () : java.lang.Boolean {
      return organization.SafeToDelete
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 49, column 27
    function def_onEnter_11 (def :  pcf.OrganizationDetail_ProducerCodesLV) : void {
      def.onEnter(organization)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 144, column 55
    function def_onEnter_40 (def :  pcf.GroupQueuesLV) : void {
      def.onEnter(organization.RootGroup)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 156, column 55
    function def_onEnter_42 (def :  pcf.GroupRegionLV) : void {
      def.onEnter(organization.RootGroup)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 33, column 80
    function def_onEnter_6 (def :  pcf.OrganizationDetail_BasicDV) : void {
      def.onEnter(organization.RootGroup, orgHelper)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 39, column 51
    function def_onEnter_9 (def :  pcf.OrganizationUsersLV) : void {
      def.onEnter(organization)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 39, column 51
    function def_refreshVariables_10 (def :  pcf.OrganizationUsersLV) : void {
      def.refreshVariables(organization)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 49, column 27
    function def_refreshVariables_12 (def :  pcf.OrganizationDetail_ProducerCodesLV) : void {
      def.refreshVariables(organization)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 144, column 55
    function def_refreshVariables_41 (def :  pcf.GroupQueuesLV) : void {
      def.refreshVariables(organization.RootGroup)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 156, column 55
    function def_refreshVariables_43 (def :  pcf.GroupRegionLV) : void {
      def.refreshVariables(organization.RootGroup)
    }
    
    // 'def' attribute on PanelRef at OrganizationDetailScreen.pcf: line 33, column 80
    function def_refreshVariables_7 (def :  pcf.OrganizationDetail_BasicDV) : void {
      def.refreshVariables(organization.RootGroup, orgHelper)
    }
    
    // EditButtons at OrganizationDetailScreen.pcf: line 16, column 61
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Verbatim (id=AgencyBillPlanWarningMessage) at OrganizationDetailScreen.pcf: line 64, column 29
    function label_15 () : java.lang.String {
      return orgHelper.AgencyBillPlansWarningMessage
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=SelectPlanButton) at OrganizationDetailScreen.pcf: line 75, column 37
    function onPick_19 (PickedValue :  gw.plugin.billing.AgencyBillPlanSummary) : void {
      orgHelper.addToSelectedAgencyBillPlans(PickedValue)
    }
    
    // 'toRemove' attribute on RowIterator at OrganizationDetailScreen.pcf: line 99, column 115
    function toRemove_36 (agencyBillPlan :  gw.web.admin.OrganizationUIHelper.MultiCurrencyAgencyBillPlan) : void {
      orgHelper.DisplayableAgencyBillPlans.remove(agencyBillPlan)
    }
    
    // 'value' attribute on RowIterator at OrganizationDetailScreen.pcf: line 99, column 115
    function value_37 () : java.util.List<gw.web.admin.OrganizationUIHelper.MultiCurrencyAgencyBillPlan> {
      return orgHelper.DisplayableAgencyBillPlans
    }
    
    // 'editVisible' attribute on EditButtons at OrganizationDetailScreen.pcf: line 16, column 61
    function visible_0 () : java.lang.Boolean {
      return perm.Organization.edit(organization)
    }
    
    // 'visible' attribute on Card (id=OrganizationDetail_ProducerCodesCard) at OrganizationDetailScreen.pcf: line 46, column 75
    function visible_13 () : java.lang.Boolean {
      return organization.Producer and perm.System.prodcodeviewbasic
    }
    
    // 'visible' attribute on Verbatim (id=AgencyBillPlanWarningMessage) at OrganizationDetailScreen.pcf: line 64, column 29
    function visible_14 () : java.lang.Boolean {
      return orgHelper.PlansNotExistingInBillingSystem.HasElements
    }
    
    // 'visible' attribute on PickerToolbarButton (id=SelectPlanButton) at OrganizationDetailScreen.pcf: line 75, column 37
    function visible_16 () : java.lang.Boolean {
      return InEditMode
    }
    
    // 'visible' attribute on ToolbarButton (id=OrganizationDetailScreen_BasicCard_DeleteButton) at OrganizationDetailScreen.pcf: line 25, column 59
    function visible_3 () : java.lang.Boolean {
      return perm.Organization.delete(organization)
    }
    
    // 'visible' attribute on ListViewPanel (id=OrganizationDetail_AgencyBillPlansLV) at OrganizationDetailScreen.pcf: line 90, column 74
    function visible_38 () : java.lang.Boolean {
      return not orgHelper.DisplayableAgencyBillPlans.Empty
    }
    
    // 'visible' attribute on Card (id=OrganizationDetail_AgencyBillPlansCard) at OrganizationDetailScreen.pcf: line 58, column 50
    function visible_39 () : java.lang.Boolean {
      return orgHelper.AgencyBillTabVisible
    }
    
    // 'visible' attribute on Toolbar at OrganizationDetailScreen.pcf: line 14, column 101
    function visible_5 () : java.lang.Boolean {
      return perm.Organization.editbasic(organization) or perm.Organization.delete(organization)
    }
    
    // 'visible' attribute on Card (id=OrganizationDetail_BasicCard) at OrganizationDetailScreen.pcf: line 31, column 44
    function visible_8 () : java.lang.Boolean {
      return perm.System.orgviewbasic
    }
    
    property get orgHelper () : gw.web.admin.OrganizationUIHelper {
      return getRequireValue("orgHelper", 0) as gw.web.admin.OrganizationUIHelper
    }
    
    property set orgHelper ($arg :  gw.web.admin.OrganizationUIHelper) {
      setRequireValue("orgHelper", 0, $arg)
    }
    
    property get organization () : Organization {
      return getRequireValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setRequireValue("organization", 0, $arg)
    }
    
    
  }
  
  
}