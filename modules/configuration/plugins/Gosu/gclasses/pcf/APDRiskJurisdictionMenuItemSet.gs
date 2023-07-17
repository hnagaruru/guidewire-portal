package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskJurisdictionMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskJurisdictionMenuItemSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($exposureHeading :  APDExposureField, $canDesign :  Boolean) : void {
    __widgetOf(this, pcf.APDRiskJurisdictionMenuItemSet, SECTION_WIDGET_CLASS).setVariables(false, {$exposureHeading, $canDesign})
  }
  
  function refreshVariables ($exposureHeading :  APDExposureField, $canDesign :  Boolean) : void {
    __widgetOf(this, pcf.APDRiskJurisdictionMenuItemSet, SECTION_WIDGET_CLASS).setVariables(true, {$exposureHeading, $canDesign})
  }
  
  
}