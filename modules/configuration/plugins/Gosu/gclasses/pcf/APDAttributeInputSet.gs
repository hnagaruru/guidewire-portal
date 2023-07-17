package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDAttributeInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($attribute :  APDAttribute, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDAttributeInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$attribute, $edition})
  }
  
  function refreshVariables ($attribute :  APDAttribute, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDAttributeInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$attribute, $edition})
  }
  
  
}