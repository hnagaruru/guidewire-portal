package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at VehicleScreen.pcf: line 26, column 50
    function def_onEnter_2 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(vehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at VehicleScreen.pcf: line 28, column 79
    function def_onEnter_4 (def :  pcf.BAVehicleCV) : void {
      def.onEnter(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at VehicleScreen.pcf: line 26, column 50
    function def_refreshVariables_3 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(vehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at VehicleScreen.pcf: line 28, column 79
    function def_refreshVariables_5 (def :  pcf.BAVehicleCV) : void {
      def.refreshVariables(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=VehicleScreen) at VehicleScreen.pcf: line 7, column 24
    function editable_6 () : java.lang.Boolean {
      return openForEdit
    }
    
    // EditButtons at VehicleScreen.pcf: line 22, column 30
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at VehicleScreen.pcf: line 22, column 30
    function pickValue_0 () : BusinessVehicle {
      return vehicle
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get vehicle () : BusinessVehicle {
      return getRequireValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}