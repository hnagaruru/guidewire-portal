package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadProductTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDLoadProductTemplatePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {}, 3)
  }
  
  static function createDestination (existingVisualizedProduct :  APDProduct) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {existingVisualizedProduct}, 1)
  }
  
  static function createDestination (account :  Account, selectionOfProducer :  ProducerSelection) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {account, selectionOfProducer}, 0)
  }
  
  static function createDestination (existingInstalledProduct :  gw.api.productmodel.Product) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {existingInstalledProduct}, 2)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {}, 3).push()
  }
  
  static function push (existingVisualizedProduct :  APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {existingVisualizedProduct}, 1).push()
  }
  
  static function push (account :  Account, selectionOfProducer :  ProducerSelection) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {account, selectionOfProducer}, 0).push()
  }
  
  static function push (existingInstalledProduct :  gw.api.productmodel.Product) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {existingInstalledProduct}, 2).push()
  }
  
  
}