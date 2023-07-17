package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at ProducerCodeDetailScreen.pcf: line 142, column 32
    function available_25 () : java.lang.Boolean {
      return producerCodeUIHelper.isCurrencyCheckboxAvailable(commissionPlan, planCurrency.Currency) and localInEditMode
    }
    
    // 'value' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at ProducerCodeDetailScreen.pcf: line 142, column 32
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      planCurrency.Configured = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at ProducerCodeDetailScreen.pcf: line 142, column 32
    function valueRoot_29 () : java.lang.Object {
      return planCurrency
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ProducerCodeDetailScreen.pcf: line 149, column 34
    function valueRoot_33 () : java.lang.Object {
      return planCurrency.Currency
    }
    
    // 'value' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at ProducerCodeDetailScreen.pcf: line 142, column 32
    function value_27 () : java.lang.Boolean {
      return planCurrency.Configured
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ProducerCodeDetailScreen.pcf: line 149, column 34
    function value_32 () : java.lang.String {
      return planCurrency.Currency.DisplayName
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=CurrencyCheckbox_Cell) at ProducerCodeDetailScreen.pcf: line 142, column 32
    function visible_26 () : java.lang.Boolean {
      return localInEditMode
    }
    
    // 'visible' attribute on Row at ProducerCodeDetailScreen.pcf: line 135, column 102
    function visible_35 () : java.lang.Boolean {
      return (planCurrency.Configured && !localInEditMode) || localInEditMode
    }
    
    property get planCurrency () : gw.web.admin.ProducerCodeUIHelper.CommissionPlanCurrency {
      return getIteratedValue(2) as gw.web.admin.ProducerCodeUIHelper.CommissionPlanCurrency
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducerCodeDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at ProducerCodeDetailScreen.pcf: line 117, column 111
    function checkBoxVisible_37 () : java.lang.Boolean {
      return commissionPlan.isPlanRemovable()
    }
    
    // 'value' attribute on TextCell (id=CommissionPlanName_Cell) at ProducerCodeDetailScreen.pcf: line 122, column 51
    function valueRoot_23 () : java.lang.Object {
      return commissionPlan
    }
    
    // 'value' attribute on TextCell (id=CommissionPlanName_Cell) at ProducerCodeDetailScreen.pcf: line 122, column 51
    function value_22 () : java.lang.String {
      return commissionPlan.PlanName
    }
    
    // 'value' attribute on RowIterator (id=CurrencyIterator) at ProducerCodeDetailScreen.pcf: line 133, column 108
    function value_36 () : java.util.List<gw.web.admin.ProducerCodeUIHelper.CommissionPlanCurrency> {
      return commissionPlan.Currencies
    }
    
    property get commissionPlan () : gw.web.admin.ProducerCodeUIHelper.MultiCurrencyCommissionPlan {
      return getIteratedValue(1) as gw.web.admin.ProducerCodeUIHelper.MultiCurrencyCommissionPlan
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=SelectPlanButton) at ProducerCodeDetailScreen.pcf: line 82, column 70
    function action_16 () : void {
      CommissionPlanSearchPopup.push(producerCode.OrganizationWithUpdate.Tier, producerCodeUIHelper.DisplayableCommissionPlans*.PlanName)
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteButton) at ProducerCodeDetailScreen.pcf: line 30, column 47
    function action_4 () : void {
      gw.api.admin.ProducerCodeUtil.deleteProducerCode(producerCode); AdminProducerCodeSearch.go()
    }
    
    // 'action' attribute on PickerToolbarButton (id=SelectPlanButton) at ProducerCodeDetailScreen.pcf: line 82, column 70
    function action_dest_17 () : pcf.api.Destination {
      return pcf.CommissionPlanSearchPopup.createDestination(producerCode.OrganizationWithUpdate.Tier, producerCodeUIHelper.DisplayableCommissionPlans*.PlanName)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveRoleButton) at ProducerCodeDetailScreen.pcf: line 57, column 66
    function allCheckedRowsAction_10 (CheckedValues :  entity.ProducerCodeRole[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each(\ p -> producerCodeUIHelper.removeProducerCodeRole(p)); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, ProducerCodeRole);
    }
    
    // 'available' attribute on ToolbarButton (id=DeleteButton) at ProducerCodeDetailScreen.pcf: line 30, column 47
    function available_2 () : java.lang.Boolean {
      return !gw.api.admin.ProducerCodeUtil.hasRelatedPolicies(producerCode) && !gw.api.admin.ProducerCodeUtil.hasRelatedPolicyPeriods(producerCode)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeDetailScreen.pcf: line 45, column 58
    function def_onEnter_11 (def :  pcf.ProducerCodeDetail_RolesLV) : void {
      def.onEnter(producerCode)
    }
    
    // 'def' attribute on PanelRef (id=groupPanel) at ProducerCodeDetailScreen.pcf: line 162, column 27
    function def_onEnter_43 (def :  pcf.ProducerCodeDetail_GroupsLV) : void {
      def.onEnter(producerCode)
    }
    
    // 'def' attribute on PanelRef (id=userPanel) at ProducerCodeDetailScreen.pcf: line 176, column 26
    function def_onEnter_45 (def :  pcf.ProducerCodeDetail_UsersLV) : void {
      def.onEnter(producerCode)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeDetailScreen.pcf: line 37, column 59
    function def_onEnter_6 (def :  pcf.ProducerCodeDetail_BasicDV) : void {
      def.onEnter(producerCode)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeDetailScreen.pcf: line 39, column 157
    function def_onEnter_8 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(producerCode, { "Description"}, { DisplayKey.get("Web.Admin.ProducerCodeLocalizedLV.Description") })
    }
    
    // 'def' attribute on PanelRef at ProducerCodeDetailScreen.pcf: line 45, column 58
    function def_refreshVariables_12 (def :  pcf.ProducerCodeDetail_RolesLV) : void {
      def.refreshVariables(producerCode)
    }
    
    // 'def' attribute on PanelRef (id=groupPanel) at ProducerCodeDetailScreen.pcf: line 162, column 27
    function def_refreshVariables_44 (def :  pcf.ProducerCodeDetail_GroupsLV) : void {
      def.refreshVariables(producerCode)
    }
    
    // 'def' attribute on PanelRef (id=userPanel) at ProducerCodeDetailScreen.pcf: line 176, column 26
    function def_refreshVariables_46 (def :  pcf.ProducerCodeDetail_UsersLV) : void {
      def.refreshVariables(producerCode)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeDetailScreen.pcf: line 37, column 59
    function def_refreshVariables_7 (def :  pcf.ProducerCodeDetail_BasicDV) : void {
      def.refreshVariables(producerCode)
    }
    
    // 'def' attribute on PanelRef at ProducerCodeDetailScreen.pcf: line 39, column 157
    function def_refreshVariables_9 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(producerCode, { "Description"}, { DisplayKey.get("Web.Admin.ProducerCodeLocalizedLV.Description") })
    }
    
    // 'initialValue' attribute on Variable at ProducerCodeDetailScreen.pcf: line 18, column 23
    function initialValue_0 () : Boolean {
      return CurrentLocation.InEditMode
    }
    
    // EditButtons at ProducerCodeDetailScreen.pcf: line 20, column 21
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Verbatim (id=CommissionPlanWarningMessage) at ProducerCodeDetailScreen.pcf: line 70, column 29
    function label_14 () : java.lang.String {
      return producerCodeUIHelper.CommissionPlansWarningMessage
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=SelectPlanButton) at ProducerCodeDetailScreen.pcf: line 82, column 70
    function onPick_18 (PickedValue :  java.lang.String) : void {
      producerCodeUIHelper.addCommissionPlanFromPicker(PickedValue)
    }
    
    // 'toRemove' attribute on RowIterator at ProducerCodeDetailScreen.pcf: line 117, column 111
    function toRemove_38 (commissionPlan :  gw.web.admin.ProducerCodeUIHelper.MultiCurrencyCommissionPlan) : void {
      producerCodeUIHelper.DisplayableCommissionPlans.remove(commissionPlan)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=DeleteButton) at ProducerCodeDetailScreen.pcf: line 30, column 47
    function tooltip_5 () : java.lang.String {
      if (gw.api.admin.ProducerCodeUtil.hasRelatedPolicies(producerCode) || gw.api.admin.ProducerCodeUtil.hasRelatedPolicyPeriods(producerCode)) {return (DisplayKey.get("Web.ProducerCode.Delete.InactiveButton"))} return ""
    }
    
    // 'value' attribute on RowIterator at ProducerCodeDetailScreen.pcf: line 117, column 111
    function value_39 () : java.util.List<gw.web.admin.ProducerCodeUIHelper.MultiCurrencyCommissionPlan> {
      return producerCodeUIHelper.DisplayableCommissionPlans
    }
    
    // 'visible' attribute on Verbatim (id=CommissionPlanWarningMessage) at ProducerCodeDetailScreen.pcf: line 70, column 29
    function visible_13 () : java.lang.Boolean {
      return producerCodeUIHelper.PlansNotExistingInBillingSystem.HasElements
    }
    
    // 'visible' attribute on PickerToolbarButton (id=SelectPlanButton) at ProducerCodeDetailScreen.pcf: line 82, column 70
    function visible_15 () : java.lang.Boolean {
      return producerCode.OrganizationWithUpdate != null
    }
    
    // 'visible' attribute on TextInput (id=NeedOrganizationMessage_Input) at ProducerCodeDetailScreen.pcf: line 90, column 72
    function visible_19 () : java.lang.Boolean {
      return producerCode.OrganizationWithUpdate == null
    }
    
    // 'visible' attribute on ToolbarButton (id=DeleteButton) at ProducerCodeDetailScreen.pcf: line 30, column 47
    function visible_3 () : java.lang.Boolean {
      return perm.System.prodcodedelete
    }
    
    // 'visible' attribute on ListViewPanel (id=ProducerCodeDetail_CommissionPlansLV) at ProducerCodeDetailScreen.pcf: line 108, column 78
    function visible_40 () : java.lang.Boolean {
      return !producerCodeUIHelper.DisplayableCommissionPlans.Empty
    }
    
    // 'visible' attribute on Card (id=ProducerCodeDetail_CommissionPlansCard) at ProducerCodeDetailScreen.pcf: line 64, column 66
    function visible_42 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get localInEditMode () : Boolean {
      return getVariableValue("localInEditMode", 0) as Boolean
    }
    
    property set localInEditMode ($arg :  Boolean) {
      setVariableValue("localInEditMode", 0, $arg)
    }
    
    property get producerCode () : ProducerCode {
      return getRequireValue("producerCode", 0) as ProducerCode
    }
    
    property set producerCode ($arg :  ProducerCode) {
      setRequireValue("producerCode", 0, $arg)
    }
    
    property get producerCodeUIHelper () : gw.web.admin.ProducerCodeUIHelper {
      return getRequireValue("producerCodeUIHelper", 0) as gw.web.admin.ProducerCodeUIHelper
    }
    
    property set producerCodeUIHelper ($arg :  gw.web.admin.ProducerCodeUIHelper) {
      setRequireValue("producerCodeUIHelper", 0, $arg)
    }
    
    
  }
  
  
}