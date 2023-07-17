package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RatingCostDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RatingCostDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (period :  PolicyPeriod, costs :  List<Cost>) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RatingCostDetailPopup, {period, costs}, 0)
  }
  
  static function push (period :  PolicyPeriod, costs :  List<Cost>) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RatingCostDetailPopup, {period, costs}, 0).push()
  }
  
  
}