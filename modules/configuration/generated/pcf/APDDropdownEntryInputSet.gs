package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropdownEntryInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($entry :  APDDropdownEntry) : void {
    __widgetOf(this, pcf.APDDropdownEntryInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$entry})
  }
  
  function refreshVariables ($entry :  APDDropdownEntry) : void {
    __widgetOf(this, pcf.APDDropdownEntryInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$entry})
  }
  
  
}