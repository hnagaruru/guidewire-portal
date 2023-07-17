package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropDownDefinitionListDetail extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($attribute :  APDAttribute, $isTerm :  Boolean, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDDropDownDefinitionListDetail, SECTION_WIDGET_CLASS).setVariables(false, {$attribute, $isTerm, $edition})
  }
  
  function refreshVariables ($attribute :  APDAttribute, $isTerm :  Boolean, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDDropDownDefinitionListDetail, SECTION_WIDGET_CLASS).setVariables(true, {$attribute, $isTerm, $edition})
  }
  
  
}