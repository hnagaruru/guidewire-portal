package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/GenerateSourceCodePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GenerateSourceCodePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (product :  APDProduct, mode :  gw.apd.model.generate.ProductGeneratorHelper.GenerationMode) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GenerateSourceCodePopup, {product, mode}, 0)
  }
  
  static function push (product :  APDProduct, mode :  gw.apd.model.generate.ProductGeneratorHelper.GenerationMode) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GenerateSourceCodePopup, {product, mode}, 0).push()
  }
  
  
}