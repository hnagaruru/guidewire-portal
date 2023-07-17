package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewDropdownEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewDropdownEntryPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (field :  APDDataField) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewDropdownEntryPopup, {field}, 0)
  }
  
  static function push (field :  APDDataField) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewDropdownEntryPopup, {field}, 0).push()
  }
  
  
}