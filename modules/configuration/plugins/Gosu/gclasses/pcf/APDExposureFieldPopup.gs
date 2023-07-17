package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDExposureFieldPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (field :  APDExposureField, edition :  APDProductLineEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDExposureFieldPopup, {field, edition}, 0)
  }
  
  static function createDestination (field :  APDExposureField, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDExposureFieldPopup, {field, edition, startInEditMode}, 1)
  }
  
  static function push (field :  APDExposureField, edition :  APDProductLineEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDExposureFieldPopup, {field, edition}, 0).push()
  }
  
  static function push (field :  APDExposureField, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDExposureFieldPopup, {field, edition, startInEditMode}, 1).push()
  }
  
  
}