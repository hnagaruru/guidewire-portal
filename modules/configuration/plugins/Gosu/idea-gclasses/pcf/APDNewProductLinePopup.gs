package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewProductLinePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewProductLinePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (product :  APDProduct) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewProductLinePopup, {product}, 0)
  }
  
  static function push (product :  APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewProductLinePopup, {product}, 0).push()
  }
  
  
}