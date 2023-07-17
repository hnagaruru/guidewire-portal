package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductAndLineInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductAndLineInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($product :  APDProduct) : void {
    __widgetOf(this, pcf.APDProductAndLineInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$product})
  }
  
  function refreshVariables ($product :  APDProduct) : void {
    __widgetOf(this, pcf.APDProductAndLineInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$product})
  }
  
  
}