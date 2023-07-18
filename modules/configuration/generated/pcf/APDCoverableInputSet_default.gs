package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverableInputSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable) : void {
    __widgetOf(this, pcf.APDCoverableInputSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$coverable})
  }
  
  function refreshVariables ($coverable :  APDCoverable) : void {
    __widgetOf(this, pcf.APDCoverableInputSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$coverable})
  }
  
  
}