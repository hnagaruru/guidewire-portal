package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.date.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRuleConditionValue_date extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($condition :  APDRuleCondition) : void {
    __widgetOf(this, pcf.APDRuleConditionValue_date, SECTION_WIDGET_CLASS).setVariables(false, {$condition})
  }
  
  function refreshVariables ($condition :  APDRuleCondition) : void {
    __widgetOf(this, pcf.APDRuleConditionValue_date, SECTION_WIDGET_CLASS).setVariables(true, {$condition})
  }
  
  
}