package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDExposurePricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDExposurePricePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (pricing :  APDRiskCovPricing, openForEdit :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDExposurePricePopup, {pricing, openForEdit}, 0)
  }
  
  static function push (pricing :  APDRiskCovPricing, openForEdit :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDExposurePricePopup, {pricing, openForEdit}, 0).push()
  }
  
  
}