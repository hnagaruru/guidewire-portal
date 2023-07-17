package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskSubClausePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskSubClausePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskCoverable :  APDRiskCoverable, clause :  APDClause, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDRiskSubClausePopup, {riskCoverable, clause, coverDefinitionHelper, edition, openForEdit}, 0)
  }
  
  static function push (riskCoverable :  APDRiskCoverable, clause :  APDClause, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDRiskSubClausePopup, {riskCoverable, clause, coverDefinitionHelper, edition, openForEdit}, 0).push()
  }
  
  
}