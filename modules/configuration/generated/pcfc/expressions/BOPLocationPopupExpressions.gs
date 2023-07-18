package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLocationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLocationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountLocation :  AccountLocation, bopLocation :  BOPLocation, policyPeriod :  PolicyPeriod, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=BOPLocationPopup) at BOPLocationPopup.pcf: line 14, column 105
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.PebblesUtil.invalidateIterators(TopLocation, BOPLocation); bopLocation.Location.syncQuestions()
    }
    
    // 'beforeCommit' attribute on Popup (id=BOPLocationPopup) at BOPLocationPopup.pcf: line 14, column 105
    function beforeCommit_7 (pickedValue :  BOPLocation) : void {
      gw.lob.bop.BOPLocationValidation.validateBOPLocation(bopLocation.Location)
    }
    
    // 'canEdit' attribute on Popup (id=BOPLocationPopup) at BOPLocationPopup.pcf: line 14, column 105
    function canEdit_8 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationPopup.pcf: line 46, column 54
    function def_onEnter_2 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(bopLocation, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLocationPopup.pcf: line 48, column 120
    function def_onEnter_4 (def :  pcf.LocationDetailCV) : void {
      def.onEnter(bopLocation.Location, openForEdit, bopLocation.BOPLine.SupportsNonSpecificLocations)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationPopup.pcf: line 46, column 54
    function def_refreshVariables_3 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(bopLocation, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLocationPopup.pcf: line 48, column 120
    function def_refreshVariables_5 (def :  pcf.LocationDetailCV) : void {
      def.refreshVariables(bopLocation.Location, openForEdit, bopLocation.BOPLine.SupportsNonSpecificLocations)
    }
    
    // EditButtons at BOPLocationPopup.pcf: line 40, column 36
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at BOPLocationPopup.pcf: line 40, column 36
    function pickValue_0 () : BOPLocation {
      return bopLocation
    }
    
    // 'startEditing' attribute on Popup (id=BOPLocationPopup) at BOPLocationPopup.pcf: line 14, column 105
    function startEditing_9 () : void {
      maybeCreateLocation()
    }
    
    // 'startInEditMode' attribute on Popup (id=BOPLocationPopup) at BOPLocationPopup.pcf: line 14, column 105
    function startInEditMode_10 () : java.lang.Boolean {
      return startInEdit
    }
    
    override property get CurrentLocation () : pcf.BOPLocationPopup {
      return super.CurrentLocation as pcf.BOPLocationPopup
    }
    
    property get accountLocation () : AccountLocation {
      return getVariableValue("accountLocation", 0) as AccountLocation
    }
    
    property set accountLocation ($arg :  AccountLocation) {
      setVariableValue("accountLocation", 0, $arg)
    }
    
    property get bopLocation () : BOPLocation {
      return getVariableValue("bopLocation", 0) as BOPLocation
    }
    
    property set bopLocation ($arg :  BOPLocation) {
      setVariableValue("bopLocation", 0, $arg)
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
    
    function maybeCreateLocation() {
      if (startInEdit and openForEdit) {
        if (bopLocation == null) {
          if (accountLocation != null) {
            bopLocation = policyPeriod.BOPLine.addToLineSpecificLocations(accountLocation) as BOPLocation
            for(var tc in bopLocation.Location.TerritoryCodes)
              tc.fillWithFirst()
          } else {
            bopLocation = policyPeriod.BOPLine.addNewLineSpecificLocation() as BOPLocation
          }
        }
      }
    }
    
    
  }
  
  
}