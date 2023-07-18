package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableFieldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverableFieldsPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable, $edition :  APDProductLineEdition, $openForEdit :  boolean, $inDevelopMode :  boolean) : void {
    __widgetOf(this, pcf.APDCoverableFieldsPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $edition, $openForEdit, $inDevelopMode})
  }
  
  function refreshVariables ($coverable :  APDCoverable, $edition :  APDProductLineEdition, $openForEdit :  boolean, $inDevelopMode :  boolean) : void {
    __widgetOf(this, pcf.APDCoverableFieldsPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $edition, $openForEdit, $inDevelopMode})
  }
  
  
}