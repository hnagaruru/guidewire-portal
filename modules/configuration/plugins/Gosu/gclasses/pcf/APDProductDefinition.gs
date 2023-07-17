package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductDefinition.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductDefinition extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (apdProduct :  entity.APDProduct) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDProductDefinition, {apdProduct}, 0)
  }
  
  static function drilldown (apdProduct :  entity.APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDProductDefinition, {apdProduct}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (apdProduct :  entity.APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDProductDefinition, {apdProduct}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (apdProduct :  entity.APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDProductDefinition, {apdProduct}, 0).goInMain()
  }
  
  static function printPage (apdProduct :  entity.APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDProductDefinition, {apdProduct}, 0).printPage()
  }
  
  static function push (apdProduct :  entity.APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDProductDefinition, {apdProduct}, 0).push()
  }
  
  
}