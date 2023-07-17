package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCostCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCostCodesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (costCodeHelper :  gw.apd.model.CostCodeHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDCostCodesPopup, {costCodeHelper}, 0)
  }
  
  static function push (costCodeHelper :  gw.apd.model.CostCodeHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDCostCodesPopup, {costCodeHelper}, 0).push()
  }
  
  
}