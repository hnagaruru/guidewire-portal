package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($product :  APDProduct, $inDevelopMode :  Boolean) : void {
    __widgetOf(this, pcf.APDProductInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$product, $inDevelopMode})
  }
  
  function refreshVariables ($product :  APDProduct, $inDevelopMode :  Boolean) : void {
    __widgetOf(this, pcf.APDProductInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$product, $inDevelopMode})
  }
  
  
}