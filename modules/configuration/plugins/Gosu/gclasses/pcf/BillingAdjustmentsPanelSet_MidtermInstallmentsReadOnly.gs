package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $policyPeriodBillingInstructionsManager :  gw.billing.PolicyPeriodBillingInstructionsManager) : void {
    __widgetOf(this, pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $policyPeriodBillingInstructionsManager})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $policyPeriodBillingInstructionsManager :  gw.billing.PolicyPeriodBillingInstructionsManager) : void {
    __widgetOf(this, pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $policyPeriodBillingInstructionsManager})
  }
  
  
}