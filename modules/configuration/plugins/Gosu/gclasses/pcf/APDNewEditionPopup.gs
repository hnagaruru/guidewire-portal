package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewEditionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewEditionPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (productLine :  APDProductLine, currentEdition :  APDEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewEditionPopup, {productLine, currentEdition}, 0)
  }
  
  function pickValueAndCommit (value :  APDEdition) : void {
    __widgetOf(this, pcf.APDNewEditionPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (productLine :  APDProductLine, currentEdition :  APDEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewEditionPopup, {productLine, currentEdition}, 0).push()
  }
  
  
}