package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewProductPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewProductPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (account :  Account, selectionOfProducer :  ProducerSelection) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewProductPopup, {account, selectionOfProducer}, 0)
  }
  
  static function push (account :  Account, selectionOfProducer :  ProducerSelection) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewProductPopup, {account, selectionOfProducer}, 0).push()
  }
  
  
}