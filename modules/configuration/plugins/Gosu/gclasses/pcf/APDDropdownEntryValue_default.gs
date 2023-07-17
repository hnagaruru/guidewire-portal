package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryValue.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropdownEntryValue_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($value :  APDDropdownValue) : void {
    __widgetOf(this, pcf.APDDropdownEntryValue_default, SECTION_WIDGET_CLASS).setVariables(false, {$value})
  }
  
  function refreshVariables ($value :  APDDropdownValue) : void {
    __widgetOf(this, pcf.APDDropdownEntryValue_default, SECTION_WIDGET_CLASS).setVariables(true, {$value})
  }
  
  
}