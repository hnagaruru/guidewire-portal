package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDCoverableCovPricingLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverableCovPricingLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable, $costCodeHelper :  gw.apd.model.CostCodeHelper) : void {
    __widgetOf(this, pcf.APDCoverableCovPricingLV, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $costCodeHelper})
  }
  
  function refreshVariables ($coverable :  APDCoverable, $costCodeHelper :  gw.apd.model.CostCodeHelper) : void {
    __widgetOf(this, pcf.APDCoverableCovPricingLV, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $costCodeHelper})
  }
  
  
}