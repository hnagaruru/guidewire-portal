package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskCoverable :  APDRiskCoverable, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDRiskPopup, {riskCoverable, openForEdit, jobWizardHelper, coverDefinitionHelper, edition}, 0)
  }
  
  static function push (riskCoverable :  APDRiskCoverable, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDRiskPopup, {riskCoverable, openForEdit, jobWizardHelper, coverDefinitionHelper, edition}, 0).push()
  }
  
  
}