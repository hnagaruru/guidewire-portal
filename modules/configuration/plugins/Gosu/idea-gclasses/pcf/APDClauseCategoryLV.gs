package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseCategoryLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable) : void {
    __widgetOf(this, pcf.APDClauseCategoryLV, SECTION_WIDGET_CLASS).setVariables(false, {$coverable})
  }
  
  function refreshVariables ($coverable :  APDCoverable) : void {
    __widgetOf(this, pcf.APDClauseCategoryLV, SECTION_WIDGET_CLASS).setVariables(true, {$coverable})
  }
  
  
}