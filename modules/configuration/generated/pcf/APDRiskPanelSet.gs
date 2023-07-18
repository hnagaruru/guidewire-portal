package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($riskCoverable :  APDRiskCoverable, $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, $edition :  APDProductLineEdition, $openForEdit :  Boolean) : void {
    __widgetOf(this, pcf.APDRiskPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$riskCoverable, $coverDefinitionHelper, $edition, $openForEdit})
  }
  
  function refreshVariables ($riskCoverable :  APDRiskCoverable, $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, $edition :  APDProductLineEdition, $openForEdit :  Boolean) : void {
    __widgetOf(this, pcf.APDRiskPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$riskCoverable, $coverDefinitionHelper, $edition, $openForEdit})
  }
  
  
}