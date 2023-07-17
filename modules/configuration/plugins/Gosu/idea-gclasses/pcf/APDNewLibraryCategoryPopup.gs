package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewLibraryCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewLibraryCategoryPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (coverable :  APDCoverable) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewLibraryCategoryPopup, {coverable}, 0)
  }
  
  function pickValueAndCommit (value :  APDClauseCategory) : void {
    __widgetOf(this, pcf.APDNewLibraryCategoryPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (coverable :  APDCoverable) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewLibraryCategoryPopup, {coverable}, 0).push()
  }
  
  
}