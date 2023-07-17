package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalableinteger.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDataFieldValue_scalableinteger extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($dataField :  APDDataField, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDDataFieldValue_scalableinteger, SECTION_WIDGET_CLASS).setVariables(false, {$dataField, $edition})
  }
  
  function refreshVariables ($dataField :  APDDataField, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDDataFieldValue_scalableinteger, SECTION_WIDGET_CLASS).setVariables(true, {$dataField, $edition})
  }
  
  
}