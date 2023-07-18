package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDEditionRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($history :  gw.apd.web.APDEditionDisplay[], $currentEdition :  APDEdition) : void {
    __widgetOf(this, pcf.APDEditionRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$history, $currentEdition})
  }
  
  function refreshVariables ($history :  gw.apd.web.APDEditionDisplay[], $currentEdition :  APDEdition) : void {
    __widgetOf(this, pcf.APDEditionRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$history, $currentEdition})
  }
  
  
}