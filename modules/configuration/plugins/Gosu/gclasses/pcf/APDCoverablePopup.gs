package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverablePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (coverable :  APDCoverable, edition :  APDProductLineEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDCoverablePopup, {coverable, edition}, 0)
  }
  
  static function createDestination (coverable :  APDCoverable, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDCoverablePopup, {coverable, edition, startInEditMode}, 1)
  }
  
  static function push (coverable :  APDCoverable, edition :  APDProductLineEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDCoverablePopup, {coverable, edition}, 0).push()
  }
  
  static function push (coverable :  APDCoverable, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDCoverablePopup, {coverable, edition, startInEditMode}, 1).push()
  }
  
  
}