package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehiclePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAVehiclePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehiclePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAVehiclePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (vehicle :  BusinessVehicle, policyPeriod :  PolicyPeriod, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=BAVehiclePopup) at BAVehiclePopup.pcf: line 13, column 76
    function afterEnter_2 () : void {
      if (vehicle == null and startInEdit == true and openForEdit) {vehicle = policyPeriod.BusinessAutoLine.createAndAddBusinessVehicle()}
    }
    
    // 'beforeCommit' attribute on Popup (id=BAVehiclePopup) at BAVehiclePopup.pcf: line 13, column 76
    function beforeCommit_3 (pickedValue :  BusinessVehicle) : void {
      gw.lob.ba.BusinessVehicleValidation.validateVehicle(vehicle)
    }
    
    // 'canEdit' attribute on Popup (id=BAVehiclePopup) at BAVehiclePopup.pcf: line 13, column 76
    function canEdit_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on ScreenRef at BAVehiclePopup.pcf: line 32, column 81
    function def_onEnter_0 (def :  pcf.VehicleScreen) : void {
      def.onEnter(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on ScreenRef at BAVehiclePopup.pcf: line 32, column 81
    function def_refreshVariables_1 (def :  pcf.VehicleScreen) : void {
      def.refreshVariables(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'startInEditMode' attribute on Popup (id=BAVehiclePopup) at BAVehiclePopup.pcf: line 13, column 76
    function startInEditMode_5 () : java.lang.Boolean {
      return startInEdit
    }
    
    override property get CurrentLocation () : pcf.BAVehiclePopup {
      return super.CurrentLocation as pcf.BAVehiclePopup
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    property get vehicle () : BusinessVehicle {
      return getVariableValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setVariableValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}