package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($product :  APDProduct, $policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.APDProductScreen, SECTION_WIDGET_CLASS).setVariables(false, {$product, $policyPeriod})
  }
  
  function refreshVariables ($product :  APDProduct, $policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.APDProductScreen, SECTION_WIDGET_CLASS).setVariables(true, {$product, $policyPeriod})
  }
  
  
}