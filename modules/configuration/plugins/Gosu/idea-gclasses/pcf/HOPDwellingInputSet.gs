package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class HOPDwellingInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($openForEdit :  java.lang.Boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $dwelling :  entity.HOPDwelling) : void {
    __widgetOf(this, pcf.HOPDwellingInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$openForEdit, $jobWizardHelper, $dwelling})
  }
  
  function refreshVariables ($openForEdit :  java.lang.Boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $dwelling :  entity.HOPDwelling) : void {
    __widgetOf(this, pcf.HOPDwellingInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$openForEdit, $jobWizardHelper, $dwelling})
  }
  
  
}