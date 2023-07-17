package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropdownEntryRulePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, edition :  APDProductLineEdition) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {currentRule, dropdownEntry, ruleType, edition}, 0)
  }
  
  static function createDestination (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {currentRule, dropdownEntry, ruleType, edition, startInEditMode}, 1)
  }
  
  static function push (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, edition :  APDProductLineEdition) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {currentRule, dropdownEntry, ruleType, edition}, 0).push()
  }
  
  static function push (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, edition :  APDProductLineEdition, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {currentRule, dropdownEntry, ruleType, edition, startInEditMode}, 1).push()
  }
  
  
}