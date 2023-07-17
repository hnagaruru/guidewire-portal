package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/LocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/LocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (theAccountLocation :  AccountLocation, thePolicyLocation :  PolicyLocation, policyPeriod :  PolicyPeriod, openForEdit :  boolean, startInEdit :  boolean, supportsNonSpecificLocation :  boolean) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=LocationPopup) at LocationPopup.pcf: line 14, column 105
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.PebblesUtil.invalidateIterators(TopLocation, PolicyLocation);
    }
    
    // 'afterEnter' attribute on Popup (id=LocationPopup) at LocationPopup.pcf: line 14, column 105
    function afterEnter_7 () : void {
      maybeCreateLocation()
    }
    
    // 'beforeCommit' attribute on Popup (id=LocationPopup) at LocationPopup.pcf: line 14, column 105
    function beforeCommit_8 (pickedValue :  PolicyLocation) : void {
      checkChangeableState(); handleBeforeCommitForProduct()
    }
    
    // 'canEdit' attribute on Popup (id=LocationPopup) at LocationPopup.pcf: line 14, column 105
    function canEdit_9 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at LocationPopup.pcf: line 53, column 96
    function def_onEnter_4 (def :  pcf.LocationDetailCV) : void {
      def.onEnter(thePolicyLocation, openForEdit, supportsNonSpecificLocation)
    }
    
    // 'def' attribute on PanelRef at LocationPopup.pcf: line 53, column 96
    function def_refreshVariables_5 (def :  pcf.LocationDetailCV) : void {
      def.refreshVariables(thePolicyLocation, openForEdit, supportsNonSpecificLocation)
    }
    
    // 'initialValue' attribute on Variable at LocationPopup.pcf: line 35, column 29
    function initialValue_0 () : typekey.State {
      return thePolicyLocation.State
    }
    
    // 'initialValue' attribute on Variable at LocationPopup.pcf: line 39, column 31
    function initialValue_1 () : typekey.Country {
      return thePolicyLocation.Country
    }
    
    // EditButtons at LocationPopup.pcf: line 48, column 42
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at LocationPopup.pcf: line 48, column 42
    function pickValue_2 () : PolicyLocation {
      return thePolicyLocation
    }
    
    // 'startInEditMode' attribute on Popup (id=LocationPopup) at LocationPopup.pcf: line 14, column 105
    function startInEditMode_10 () : java.lang.Boolean {
      return startInEdit
    }
    
    override property get CurrentLocation () : pcf.LocationPopup {
      return super.CurrentLocation as pcf.LocationPopup
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
    
    property get startCountry () : typekey.Country {
      return getVariableValue("startCountry", 0) as typekey.Country
    }
    
    property set startCountry ($arg :  typekey.Country) {
      setVariableValue("startCountry", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    property get startState () : typekey.State {
      return getVariableValue("startState", 0) as typekey.State
    }
    
    property set startState ($arg :  typekey.State) {
      setVariableValue("startState", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getVariableValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setVariableValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    property get theAccountLocation () : AccountLocation {
      return getVariableValue("theAccountLocation", 0) as AccountLocation
    }
    
    property set theAccountLocation ($arg :  AccountLocation) {
      setVariableValue("theAccountLocation", 0, $arg)
    }
    
    property get thePolicyLocation () : PolicyLocation {
      return getVariableValue("thePolicyLocation", 0) as PolicyLocation
    }
    
    property set thePolicyLocation ($arg :  PolicyLocation) {
      setVariableValue("thePolicyLocation", 0, $arg)
    }
    
    function checkChangeableState() {
      if(startState != null and not thePolicyLocation.canChangeState()){
        // the state cannot be changed
        if(thePolicyLocation.State != startState or thePolicyLocation.Country != startCountry){
            throw new gw.api.util.DisplayableException(DisplayKey.get("Web.Policy.Address.Validation.StateNotChangeable"))
        }
      }
    }
    
    function handleBeforeCommitForProduct() {
      if (policyPeriod.HasWorkersComp) {
        maybeCreateWCJurisdiction(thePolicyLocation)
      }
      policyPeriod.Lines.each(\ p -> p.validateLocations(thePolicyLocation))
    }
    
    function maybeCreateLocation() {
      if (startInEdit and openForEdit) {
        if (thePolicyLocation == null) {
          if (theAccountLocation != null) {
            thePolicyLocation = policyPeriod.newLocation(theAccountLocation)
            for(var tc in thePolicyLocation.TerritoryCodes)
              tc.fillWithFirst()
          } else {
            thePolicyLocation = policyPeriod.newLocation()
            thePolicyLocation.State = gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyPeriod.BaseState)
          }
        }
      }
    }
    
    function maybeCreateWCJurisdiction(location : PolicyLocation) {
      var loc = gw.api.util.JurisdictionMappingUtil.getJurisdiction(location)
      if (policyPeriod.WorkersCompLine.getJurisdiction(loc) == null) {
        policyPeriod.WorkersCompLine.addJurisdiction(loc)
      }
    }
    
    
  }
  
  
}