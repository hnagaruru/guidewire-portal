package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseTermsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clause :  APDClause, edition :  APDProductLineEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause, edition}, 0)
  }
  
  static function createDestination (clause :  APDClause, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause, edition, startInEditMode}, 1)
  }
  
  static function push (clause :  APDClause, edition :  APDProductLineEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause, edition}, 0).push()
  }
  
  static function push (clause :  APDClause, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause, edition, startInEditMode}, 1).push()
  }
  
  
}