package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDependantPricePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDependantPricePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (costDefinition :  APDCostDefinition, openForEdit :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDependantPricePopup, {costDefinition, openForEdit}, 0)
  }
  
  static function push (costDefinition :  APDCostDefinition, openForEdit :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDependantPricePopup, {costDefinition, openForEdit}, 0).push()
  }
  
  
}