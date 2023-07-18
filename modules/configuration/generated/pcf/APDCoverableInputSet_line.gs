package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableInputSet.line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverableInputSet_line extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable) : void {
    __widgetOf(this, pcf.APDCoverableInputSet_line, SECTION_WIDGET_CLASS).setVariables(false, {$coverable})
  }
  
  function refreshVariables ($coverable :  APDCoverable) : void {
    __widgetOf(this, pcf.APDCoverableInputSet_line, SECTION_WIDGET_CLASS).setVariables(true, {$coverable})
  }
  
  
}