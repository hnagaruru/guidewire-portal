package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDScheduleTermPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (field :  APDTerm, edition :  APDProductLineEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field, edition}, 0)
  }
  
  static function createDestination (field :  APDTerm, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field, edition, startInEditMode}, 1)
  }
  
  static function push (field :  APDTerm, edition :  APDProductLineEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field, edition}, 0).push()
  }
  
  static function push (field :  APDTerm, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field, edition, startInEditMode}, 1).push()
  }
  
  
}