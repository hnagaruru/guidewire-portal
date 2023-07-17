package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDTagPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (container :  gw.apd.model.APDTagContainer, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDTagPopup, {container, startInEditMode}, 0)
  }
  
  static function push (container :  gw.apd.model.APDTagContainer, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDTagPopup, {container, startInEditMode}, 0).push()
  }
  
  
}