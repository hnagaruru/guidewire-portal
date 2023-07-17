package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewCoverageCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewCoverageCategoryPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskCoverable :  APDRiskCoverable) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewCoverageCategoryPopup, {riskCoverable}, 0)
  }
  
  static function push (riskCoverable :  APDRiskCoverable) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewCoverageCategoryPopup, {riskCoverable}, 0).push()
  }
  
  
}