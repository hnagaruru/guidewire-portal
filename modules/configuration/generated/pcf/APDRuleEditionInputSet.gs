package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleEditionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRuleEditionInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($rule :  APDRule, $edition :  APDEdition) : void {
    __widgetOf(this, pcf.APDRuleEditionInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$rule, $edition})
  }
  
  function refreshVariables ($rule :  APDRule, $edition :  APDEdition) : void {
    __widgetOf(this, pcf.APDRuleEditionInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$rule, $edition})
  }
  
  
}