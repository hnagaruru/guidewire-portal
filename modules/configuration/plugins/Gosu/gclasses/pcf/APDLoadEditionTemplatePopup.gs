package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadEditionTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDLoadEditionTemplatePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (entryLocation :  pcf.api.Location, product :  gw.api.productmodel.Product) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadEditionTemplatePopup, {entryLocation, product}, 0)
  }
  
  static function push (entryLocation :  pcf.api.Location, product :  gw.api.productmodel.Product) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadEditionTemplatePopup, {entryLocation, product}, 0).push()
  }
  
  
}