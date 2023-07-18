package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskExposureLV_basis extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($riskCoverable :  APDRiskCoverable, $exposure :  APDExposure, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDRiskExposureLV_basis, SECTION_WIDGET_CLASS).setVariables(false, {$riskCoverable, $exposure, $edition})
  }
  
  function refreshVariables ($riskCoverable :  APDRiskCoverable, $exposure :  APDExposure, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDRiskExposureLV_basis, SECTION_WIDGET_CLASS).setVariables(true, {$riskCoverable, $exposure, $edition})
  }
  
  
}