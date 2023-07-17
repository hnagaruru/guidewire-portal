package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropdownEntryPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (entry :  APDDropdownEntry) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropdownEntryPopup, {entry}, 0)
  }
  
  static function createDestination (entry :  APDDropdownEntry, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropdownEntryPopup, {entry, startInEditMode}, 1)
  }
  
  static function push (entry :  APDDropdownEntry) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropdownEntryPopup, {entry}, 0).push()
  }
  
  static function push (entry :  APDDropdownEntry, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropdownEntryPopup, {entry, startInEditMode}, 1).push()
  }
  
  
}