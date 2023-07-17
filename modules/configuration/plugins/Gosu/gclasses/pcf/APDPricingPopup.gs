package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDPricingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDPricingPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskCoverable :  APDRiskCoverable, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  Boolean, costCodeHelper :  gw.apd.model.CostCodeHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDPricingPopup, {riskCoverable, jobWizardHelper, openForEdit, costCodeHelper}, 0)
  }
  
  static function push (riskCoverable :  APDRiskCoverable, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  Boolean, costCodeHelper :  gw.apd.model.CostCodeHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDPricingPopup, {riskCoverable, jobWizardHelper, openForEdit, costCodeHelper}, 0).push()
  }
  
  
}