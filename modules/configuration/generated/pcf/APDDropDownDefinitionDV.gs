package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropDownDefinitionDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($attribute :  APDAttribute, $isTerm :  Boolean) : void {
    __widgetOf(this, pcf.APDDropDownDefinitionDV, SECTION_WIDGET_CLASS).setVariables(false, {$attribute, $isTerm})
  }
  
  function refreshVariables ($attribute :  APDAttribute, $isTerm :  Boolean) : void {
    __widgetOf(this, pcf.APDDropDownDefinitionDV, SECTION_WIDGET_CLASS).setVariables(true, {$attribute, $isTerm})
  }
  
  
}