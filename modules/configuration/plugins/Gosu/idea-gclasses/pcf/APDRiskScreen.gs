package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($apdLine :  APDRiskPolicyLine, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.APDRiskScreen, SECTION_WIDGET_CLASS).setVariables(false, {$apdLine, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($apdLine :  APDRiskPolicyLine, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.APDRiskScreen, SECTION_WIDGET_CLASS).setVariables(true, {$apdLine, $openForEdit, $jobWizardHelper})
  }
  
  
}