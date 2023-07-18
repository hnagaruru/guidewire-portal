package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/line/common/LocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocationDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/LocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function action_40 () : void {
      TaxLocationSearchPopup.push(polLocation.Branch, gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'pickLocation' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function action_dest_41 () : pcf.api.Destination {
      return pcf.TaxLocationSearchPopup.createDestination(polLocation.Branch, gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'available' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function available_42 () : java.lang.Boolean {
      return gw.api.domain.StateSet.get("TaxLocation").contains(polLocation.State)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailInputSet.pcf: line 44, column 41
    function def_onEnter_22 (def :  pcf.TargetedAddressInputSet) : void {
      def.onEnter(new gw.pcf.policylocation.PolicyLocationAddressOwner(polLocation))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at LocationDetailInputSet.pcf: line 71, column 23
    function def_onEnter_38 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(polLocation.AccountLocation, AccountLocation#Phone), DisplayKey.get("Web.Policy.LocationContainer.Location.Phone"), openForEdit))
    }
    
    // 'def' attribute on InputSetRef at LocationDetailInputSet.pcf: line 83, column 49
    function def_onEnter_51 (def :  pcf.TerritoryCodeInputSet) : void {
      def.onEnter(polLocation)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailInputSet.pcf: line 44, column 41
    function def_refreshVariables_23 (def :  pcf.TargetedAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.policylocation.PolicyLocationAddressOwner(polLocation))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at LocationDetailInputSet.pcf: line 71, column 23
    function def_refreshVariables_39 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(polLocation.AccountLocation, AccountLocation#Phone), DisplayKey.get("Web.Policy.LocationContainer.Location.Phone"), openForEdit))
    }
    
    // 'def' attribute on InputSetRef at LocationDetailInputSet.pcf: line 83, column 49
    function def_refreshVariables_52 (def :  pcf.TerritoryCodeInputSet) : void {
      def.refreshVariables(polLocation)
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at LocationDetailInputSet.pcf: line 33, column 63
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.LocationCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at LocationDetailInputSet.pcf: line 39, column 63
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.LocationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at LocationDetailInputSet.pcf: line 56, column 37
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.County = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at LocationDetailInputSet.pcf: line 63, column 37
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at LocationDetailInputSet.pcf: line 25, column 84
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.NonSpecific = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.TaxLocation = (__VALUE_TO_SET as entity.TaxLocation)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at LocationDetailInputSet.pcf: line 25, column 84
    function editable_1 () : java.lang.Boolean {
      return polLocation.AccountLocation.New
    }
    
    // 'editable' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at LocationDetailInputSet.pcf: line 63, column 37
    function editable_31 () : java.lang.Boolean {
      return polLocation.canChangeState()
    }
    
    // 'initialValue' attribute on Variable at LocationDetailInputSet.pcf: line 19, column 46
    function initialValue_0 () : gw.api.spotlight.SpotlightURLs {
      return new gw.api.spotlight.SpotlightURLs()
    }
    
    // 'inputConversion' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function inputConversion_44 (VALUE :  java.lang.String) : java.lang.Object {
      return getTaxLocation(VALUE, polLocation)
    }
    
    // 'mode' attribute on InputSetRef at LocationDetailInputSet.pcf: line 44, column 41
    function mode_24 () : java.lang.Object {
      return polLocation.CountryCode
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at LocationDetailInputSet.pcf: line 56, column 37
    function valueRoot_29 () : java.lang.Object {
      return polLocation
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at LocationDetailInputSet.pcf: line 25, column 84
    function valueRoot_5 () : java.lang.Object {
      return polLocation.AccountLocation
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at LocationDetailInputSet.pcf: line 33, column 63
    function value_10 () : java.lang.String {
      return polLocation.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at LocationDetailInputSet.pcf: line 39, column 63
    function value_16 () : java.lang.String {
      return polLocation.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextInput (id=unsyncedAddressString_Input) at LocationDetailInputSet.pcf: line 51, column 74
    function value_25 () : java.lang.String {
      return polLocation.addressString("\n", false, false)
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at LocationDetailInputSet.pcf: line 56, column 37
    function value_27 () : java.lang.String {
      return polLocation.County
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at LocationDetailInputSet.pcf: line 25, column 84
    function value_3 () : java.lang.Boolean {
      return polLocation.AccountLocation.NonSpecific
    }
    
    // 'value' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at LocationDetailInputSet.pcf: line 63, column 37
    function value_32 () : typekey.Country {
      return polLocation.Country
    }
    
    // 'value' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function value_45 () : entity.TaxLocation {
      return polLocation.TaxLocation
    }
    
    // 'visible' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at LocationDetailInputSet.pcf: line 25, column 84
    function visible_2 () : java.lang.Boolean {
      return not polLocation.AccountLocation.New or supportsNonSpecificLocation
    }
    
    // 'visible' attribute on InputSetRef at LocationDetailInputSet.pcf: line 44, column 41
    function visible_21 () : java.lang.Boolean {
      return polLocation.SyncedToAccount
    }
    
    // 'visible' attribute on InputSet (id=UnsyncedAddressInputSet) at LocationDetailInputSet.pcf: line 47, column 49
    function visible_37 () : java.lang.Boolean {
      return not polLocation.SyncedToAccount
    }
    
    // 'visible' attribute on PickerInput (id=TaxLocation_Input) at LocationDetailInputSet.pcf: line 81, column 89
    function visible_43 () : java.lang.Boolean {
      return polLocation.Branch.Lines.hasMatch(\ l -> l.EmergencyServiceFunding)
    }
    
    // 'visible' attribute on TextInput (id=LocationCode_Input) at LocationDetailInputSet.pcf: line 33, column 63
    function visible_9 () : java.lang.Boolean {
      return polLocation.Branch.Policy.Product.Commercial
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
    }
    
    property get spotlight () : gw.api.spotlight.SpotlightURLs {
      return getVariableValue("spotlight", 0) as gw.api.spotlight.SpotlightURLs
    }
    
    property set spotlight ($arg :  gw.api.spotlight.SpotlightURLs) {
      setVariableValue("spotlight", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    
    function getTaxLocation(code: String, policyLocation: PolicyLocation): TaxLocation {
      if (code == null) {
        return null
      } else {
        var state = gw.api.util.JurisdictionMappingUtil.getJurisdiction(policyLocation)
        var locs = new gw.lob.common.TaxLocationQueryBuilder()
            .withCodeStarting(code)
            .withState(state)
            .withEffectiveOnDate(policyLocation.Branch.PeriodStart)
            .build().select() as gw.api.database.IQueryBeanResult<TaxLocation>
        if (locs.Count == 1) {
          return locs.FirstResult
        } else {
          throw new DisplayableException(DisplayKey.get("TaxLocation.Search.Error.InvalidCode", code, state.Description))
        }
      }
    }
    
    
  }
  
  
}