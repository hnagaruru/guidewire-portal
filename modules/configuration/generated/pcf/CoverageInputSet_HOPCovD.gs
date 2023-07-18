package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovD.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CoverageInputSet_HOPCovD extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coveragePattern :  gw.api.productmodel.ClausePattern, $coverable :  Coverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CoverageInputSet_HOPCovD, SECTION_WIDGET_CLASS).setVariables(false, {$coveragePattern, $coverable, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($coveragePattern :  gw.api.productmodel.ClausePattern, $coverable :  Coverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.CoverageInputSet_HOPCovD, SECTION_WIDGET_CLASS).setVariables(true, {$coveragePattern, $coverable, $openForEdit, $jobWizardHelper})
  }
  
  
}