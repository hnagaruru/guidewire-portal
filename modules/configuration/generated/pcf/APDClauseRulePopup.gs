package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseRulePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (currentRule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {currentRule, clause, ruleType, edition, openForEdit}, 0)
  }
  
  static function createDestination (currentRule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, riskCoverable :  APDRiskCoverable, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {currentRule, clause, ruleType, riskCoverable, edition, openForEdit}, 1)
  }
  
  static function push (currentRule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {currentRule, clause, ruleType, edition, openForEdit}, 0).push()
  }
  
  static function push (currentRule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, riskCoverable :  APDRiskCoverable, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {currentRule, clause, ruleType, riskCoverable, edition, openForEdit}, 1).push()
  }
  
  
}