package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDValidationResultsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDValidationResultsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (helper :  gw.apd.model.generate.ProductGeneratorHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDValidationResultsPopup, {helper}, 0)
  }
  
  static function push (helper :  gw.apd.model.generate.ProductGeneratorHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDValidationResultsPopup, {helper}, 0).push()
  }
  
  
}