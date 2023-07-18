package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDEditionInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($edition :  APDEdition) : void {
    __widgetOf(this, pcf.APDEditionInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$edition})
  }
  
  function refreshVariables ($edition :  APDEdition) : void {
    __widgetOf(this, pcf.APDEditionInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$edition})
  }
  
  
}