package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailToolbarButtonSet.approval.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ActivityDetailToolbarButtonSet_approval extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($activity :  Activity, $note :  Note, $policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.ActivityDetailToolbarButtonSet_approval, SECTION_WIDGET_CLASS).setVariables(false, {$activity, $note, $policyPeriod})
  }
  
  function refreshVariables ($activity :  Activity, $note :  Note, $policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.ActivityDetailToolbarButtonSet_approval, SECTION_WIDGET_CLASS).setVariables(true, {$activity, $note, $policyPeriod})
  }
  
  
}