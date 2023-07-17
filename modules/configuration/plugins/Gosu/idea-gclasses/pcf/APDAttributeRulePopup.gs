package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDAttributeRulePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (currentRule :  APDAttributeRule, attribute :  APDAttribute, ruleType :  APDRuleType, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDAttributeRulePopup, {currentRule, attribute, ruleType, edition, openForEdit}, 0)
  }
  
  static function push (currentRule :  APDAttributeRule, attribute :  APDAttribute, ruleType :  APDRuleType, edition :  APDProductLineEdition, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDAttributeRulePopup, {currentRule, attribute, ruleType, edition, openForEdit}, 0).push()
  }
  
  
}