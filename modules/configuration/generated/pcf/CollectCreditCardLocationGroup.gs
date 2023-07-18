package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CollectCreditCardLocationGroup extends com.guidewire.pl.web.codegen.LocationGroupBase {
  static function createDestination (jobNumber :  String) : pcf.api.Destination {
    return __newDestinationForLocationGroup(pcf.CollectCreditCardLocationGroup, {jobNumber}, 0)
  }
  
  static function drilldown (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocationGroup(pcf.CollectCreditCardLocationGroup, {jobNumber}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocationGroup(pcf.CollectCreditCardLocationGroup, {jobNumber}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocationGroup(pcf.CollectCreditCardLocationGroup, {jobNumber}, 0).goInMain()
  }
  
  static function printPage (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocationGroup(pcf.CollectCreditCardLocationGroup, {jobNumber}, 0).printPage()
  }
  
  static function push (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocationGroup(pcf.CollectCreditCardLocationGroup, {jobNumber}, 0).push()
  }
  
  
}