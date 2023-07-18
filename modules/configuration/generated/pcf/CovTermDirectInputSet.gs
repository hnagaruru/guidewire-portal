package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermDirectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CovTermDirectInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($term :  gw.api.domain.covterm.DirectCovTerm, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CovTermDirectInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$term, $jobWizardHelper})
  }
  
  function refreshVariables ($term :  gw.api.domain.covterm.DirectCovTerm, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CovTermDirectInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$term, $jobWizardHelper})
  }
  
  
}