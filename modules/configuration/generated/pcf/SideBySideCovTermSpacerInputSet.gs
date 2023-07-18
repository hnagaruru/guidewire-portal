package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermSpacerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SideBySideCovTermSpacerInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($covTermInfo :  gw.job.sxs.SideBySideCovTermInfo) : void {
    __widgetOf(this, pcf.SideBySideCovTermSpacerInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$covTermInfo})
  }
  
  function refreshVariables ($covTermInfo :  gw.job.sxs.SideBySideCovTermInfo) : void {
    __widgetOf(this, pcf.SideBySideCovTermSpacerInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$covTermInfo})
  }
  
  
}