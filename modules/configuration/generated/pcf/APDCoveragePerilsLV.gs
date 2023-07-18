package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePerilsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoveragePerilsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverage :  APDCoverage) : void {
    __widgetOf(this, pcf.APDCoveragePerilsLV, SECTION_WIDGET_CLASS).setVariables(false, {$coverage})
  }
  
  function refreshVariables ($coverage :  APDCoverage) : void {
    __widgetOf(this, pcf.APDCoveragePerilsLV, SECTION_WIDGET_CLASS).setVariables(true, {$coverage})
  }
  
  
}