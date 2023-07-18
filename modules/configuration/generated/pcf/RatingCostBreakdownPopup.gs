package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RatingCostBreakdownPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RatingCostBreakdownPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (period :  PolicyPeriod, quoteLine :  gw.apd.policy.QuoteHelperLine) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RatingCostBreakdownPopup, {period, quoteLine}, 0)
  }
  
  static function push (period :  PolicyPeriod, quoteLine :  gw.apd.policy.QuoteHelperLine) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RatingCostBreakdownPopup, {period, quoteLine}, 0).push()
  }
  
  
}