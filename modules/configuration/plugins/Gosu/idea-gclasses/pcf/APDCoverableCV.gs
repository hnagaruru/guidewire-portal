package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverableCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable, $initialEdition :  APDProductLineEdition, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDCoverableCV, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $initialEdition, $openForEdit})
  }
  
  function refreshVariables ($coverable :  APDCoverable, $initialEdition :  APDProductLineEdition, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDCoverableCV, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $initialEdition, $openForEdit})
  }
  
  
}