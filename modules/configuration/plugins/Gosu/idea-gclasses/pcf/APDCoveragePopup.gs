package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoveragePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (coverage :  APDCoverage) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDCoveragePopup, {coverage}, 0)
  }
  
  static function createDestination (coverage :  APDCoverage, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDCoveragePopup, {coverage, startInEditMode}, 1)
  }
  
  static function push (coverage :  APDCoverage) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDCoveragePopup, {coverage}, 0).push()
  }
  
  static function push (coverage :  APDCoverage, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDCoveragePopup, {coverage, startInEditMode}, 1).push()
  }
  
  
}