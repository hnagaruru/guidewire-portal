package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCoverablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskCoverablePanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($riskCoverable :  APDRiskCoverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDRiskCoverablePanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$riskCoverable, $openForEdit, $jobWizardHelper, $coverDefinitionHelper, $edition})
  }
  
  function refreshVariables ($riskCoverable :  APDRiskCoverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDRiskCoverablePanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$riskCoverable, $openForEdit, $jobWizardHelper, $coverDefinitionHelper, $edition})
  }
  
  
}