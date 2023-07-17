package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoveragesPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable, $parentClause :  APDClause, $edition :  APDProductLineEdition, $openForEdit :  boolean, $inDevelopMode :  boolean) : void {
    __widgetOf(this, pcf.APDCoveragesPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $parentClause, $edition, $openForEdit, $inDevelopMode})
  }
  
  function refreshVariables ($coverable :  APDCoverable, $parentClause :  APDClause, $edition :  APDProductLineEdition, $openForEdit :  boolean, $inDevelopMode :  boolean) : void {
    __widgetOf(this, pcf.APDCoveragesPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $parentClause, $edition, $openForEdit, $inDevelopMode})
  }
  
  
}