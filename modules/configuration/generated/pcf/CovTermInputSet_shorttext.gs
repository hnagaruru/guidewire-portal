package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.shorttext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CovTermInputSet_shorttext extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($term :  gw.api.domain.covterm.CovTerm, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CovTermInputSet_shorttext, SECTION_WIDGET_CLASS).setVariables(false, {$term, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($term :  gw.api.domain.covterm.CovTerm, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CovTermInputSet_shorttext, SECTION_WIDGET_CLASS).setVariables(true, {$term, $openForEdit, $jobWizardHelper})
  }
  
  
}