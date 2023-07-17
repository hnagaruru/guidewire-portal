package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CollectCreditCardScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($jobNumber :  String) : void {
    __widgetOf(this, pcf.CollectCreditCardScreen, SECTION_WIDGET_CLASS).setVariables(false, {$jobNumber})
  }
  
  function refreshVariables ($jobNumber :  String) : void {
    __widgetOf(this, pcf.CollectCreditCardScreen, SECTION_WIDGET_CLASS).setVariables(true, {$jobNumber})
  }
  
  
}