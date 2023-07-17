package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CollectCreditCardPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (jobNumber :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CollectCreditCardPage, {jobNumber}, 0)
  }
  
  static function drilldown (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CollectCreditCardPage, {jobNumber}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CollectCreditCardPage, {jobNumber}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CollectCreditCardPage, {jobNumber}, 0).goInMain()
  }
  
  static function printPage (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CollectCreditCardPage, {jobNumber}, 0).printPage()
  }
  
  static function push (jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CollectCreditCardPage, {jobNumber}, 0).push()
  }
  
  
}