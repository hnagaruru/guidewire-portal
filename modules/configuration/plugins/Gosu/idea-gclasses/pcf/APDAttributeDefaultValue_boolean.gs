package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeDefaultValue.boolean.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDAttributeDefaultValue_boolean extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($attribute :  APDAttribute, $ruleType :  APDRuleType, $dataField :  APDDataField, $edition :  APDProductLineEdition, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDAttributeDefaultValue_boolean, SECTION_WIDGET_CLASS).setVariables(false, {$attribute, $ruleType, $dataField, $edition, $openForEdit})
  }
  
  function refreshVariables ($attribute :  APDAttribute, $ruleType :  APDRuleType, $dataField :  APDDataField, $edition :  APDProductLineEdition, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDAttributeDefaultValue_boolean, SECTION_WIDGET_CLASS).setVariables(true, {$attribute, $ruleType, $dataField, $edition, $openForEdit})
  }
  
  
}