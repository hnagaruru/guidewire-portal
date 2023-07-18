package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDSubConditionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDSubConditionsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clause :  APDClause, edition :  APDProductLineEdition, openForEdit :  boolean, inDevelopMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDSubConditionsPopup, {clause, edition, openForEdit, inDevelopMode}, 0)
  }
  
  static function push (clause :  APDClause, edition :  APDProductLineEdition, openForEdit :  boolean, inDevelopMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDSubConditionsPopup, {clause, edition, openForEdit, inDevelopMode}, 0).push()
  }
  
  
}