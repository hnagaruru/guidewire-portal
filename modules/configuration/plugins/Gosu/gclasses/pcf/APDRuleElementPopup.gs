package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleElementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRuleElementPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (rule :  APDRule, element :  APDRuleElement, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDRuleElementPopup, {rule, element, startInEditMode}, 0)
  }
  
  static function push (rule :  APDRule, element :  APDRuleElement, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDRuleElementPopup, {rule, element, startInEditMode}, 0).push()
  }
  
  
}