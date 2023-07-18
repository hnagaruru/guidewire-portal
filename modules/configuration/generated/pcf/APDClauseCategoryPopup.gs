package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseCategoryPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (category :  APDClauseCategory) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseCategoryPopup, {category}, 0)
  }
  
  static function createDestination (category :  APDClauseCategory, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseCategoryPopup, {category, startInEditMode}, 1)
  }
  
  static function push (category :  APDClauseCategory) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseCategoryPopup, {category}, 0).push()
  }
  
  static function push (category :  APDClauseCategory, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseCategoryPopup, {category, startInEditMode}, 1).push()
  }
  
  
}