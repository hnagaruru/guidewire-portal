package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CoverageCategoryInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clausePatterns :  gw.api.productmodel.ClausePattern[], $coverable :  Coverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CoverageCategoryInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$clausePatterns, $coverable, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($clausePatterns :  gw.api.productmodel.ClausePattern[], $coverable :  Coverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CoverageCategoryInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$clausePatterns, $coverable, $openForEdit, $jobWizardHelper})
  }
  
  
}