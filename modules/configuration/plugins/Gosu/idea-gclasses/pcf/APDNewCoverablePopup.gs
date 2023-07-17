package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewCoverablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewCoverablePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (lineContainer :  APDManualPolicyLine) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewCoverablePopup, {lineContainer}, 1)
  }
  
  static function createDestination (parent :  APDRiskCoverable) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewCoverablePopup, {parent}, 0)
  }
  
  static function push (lineContainer :  APDManualPolicyLine) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewCoverablePopup, {lineContainer}, 1).push()
  }
  
  static function push (parent :  APDRiskCoverable) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewCoverablePopup, {parent}, 0).push()
  }
  
  
}