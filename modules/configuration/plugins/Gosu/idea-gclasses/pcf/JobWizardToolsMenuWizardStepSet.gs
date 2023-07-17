package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/JobWizardToolsMenuWizardStepSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class JobWizardToolsMenuWizardStepSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($jobWizardHelper :  gw.api.web.job.JobWizardHelper, $policyPeriod :  PolicyPeriod, $sxsCache :  gw.pcf.sidebyside.SideBySideScreenCache) : void {
    __widgetOf(this, pcf.JobWizardToolsMenuWizardStepSet, SECTION_WIDGET_CLASS).setVariables(false, {$jobWizardHelper, $policyPeriod, $sxsCache})
  }
  
  function refreshVariables ($jobWizardHelper :  gw.api.web.job.JobWizardHelper, $policyPeriod :  PolicyPeriod, $sxsCache :  gw.pcf.sidebyside.SideBySideScreenCache) : void {
    __widgetOf(this, pcf.JobWizardToolsMenuWizardStepSet, SECTION_WIDGET_CLASS).setVariables(true, {$jobWizardHelper, $policyPeriod, $sxsCache})
  }
  
  
}