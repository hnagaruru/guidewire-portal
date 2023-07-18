package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMLocationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMLocationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (imLocation :  IMLocation, openForEdit :  boolean, startInEdit :  boolean) : int {
      return 1
    }
    
    static function __constructorIndex (imLine :  InlandMarineLine, acctLocation :  AccountLocation, openForEdit :  boolean, startInEdit :  boolean) : int {
      return 2
    }
    
    static function __constructorIndex (imLine :  InlandMarineLine, openForEdit :  boolean, startInEdit :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at IMLocationPopup.pcf: line 85, column 101
    function action_11 () : void {
      AccountLocationPopup.push(imLocation.Location.AccountLocation, imLocation.IMLine.Branch.Policy.Account, false)
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at IMLocationPopup.pcf: line 85, column 101
    function action_dest_12 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(imLocation.Location.AccountLocation, imLocation.IMLine.Branch.Policy.Account, false)
    }
    
    // 'afterCommit' attribute on Popup (id=IMLocationPopup) at IMLocationPopup.pcf: line 13, column 105
    function afterCommit_14 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.PebblesUtil.invalidateIterators(TopLocation, entity.IMLocation)
    }
    
    // 'canEdit' attribute on Popup (id=IMLocationPopup) at IMLocationPopup.pcf: line 13, column 105
    function canEdit_15 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on InputSetRef at IMLocationPopup.pcf: line 60, column 114
    function def_onEnter_5 (def :  pcf.LocationDetailInputSet) : void {
      def.onEnter(imLocation.Location, imLine.SupportsNonSpecificLocations, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at IMLocationPopup.pcf: line 60, column 114
    function def_refreshVariables_6 (def :  pcf.LocationDetailInputSet) : void {
      def.refreshVariables(imLocation.Location, imLine.SupportsNonSpecificLocations, openForEdit)
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at IMLocationPopup.pcf: line 71, column 51
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      imLocation.Location.FireProtectClass = (__VALUE_TO_SET as typekey.FireProtectClass)
    }
    
    // 'initialValue' attribute on Variable at IMLocationPopup.pcf: line 41, column 57
    function initialValue_0 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("city","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at IMLocationPopup.pcf: line 45, column 57
    function initialValue_1 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("county","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at IMLocationPopup.pcf: line 49, column 57
    function initialValue_2 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("postalcode","Country,City,County,State,PostalCode",true)
    }
    
    // EditButtons at IMLocationPopup.pcf: line 54, column 35
    function label_4 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at IMLocationPopup.pcf: line 54, column 35
    function pickValue_3 () : IMLocation {
      return imLocation
    }
    
    // 'startEditing' attribute on Popup (id=IMLocationPopup) at IMLocationPopup.pcf: line 13, column 105
    function startEditing_16 () : void {
      initialize()
    }
    
    // 'startInEditMode' attribute on Popup (id=IMLocationPopup) at IMLocationPopup.pcf: line 13, column 105
    function startInEditMode_17 () : java.lang.Boolean {
      return startInEdit
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at IMLocationPopup.pcf: line 71, column 51
    function valueRoot_9 () : java.lang.Object {
      return imLocation.Location
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at IMLocationPopup.pcf: line 71, column 51
    function value_7 () : typekey.FireProtectClass {
      return imLocation.Location.FireProtectClass
    }
    
    // 'visible' attribute on DetailViewPanel (id=AccountLocationUpToDateDV) at IMLocationPopup.pcf: line 76, column 91
    function visible_13 () : java.lang.Boolean {
      return imLocation.IMLine.Branch.Promoted and !imLocation.Location.isUpToDate()
    }
    
    override property get CurrentLocation () : pcf.IMLocationPopup {
      return super.CurrentLocation as pcf.IMLocationPopup
    }
    
    property get acctLocation () : AccountLocation {
      return getVariableValue("acctLocation", 0) as AccountLocation
    }
    
    property set acctLocation ($arg :  AccountLocation) {
      setVariableValue("acctLocation", 0, $arg)
    }
    
    property get cityHandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("cityHandler", 0) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set cityHandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("cityHandler", 0, $arg)
    }
    
    property get countyHandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("countyHandler", 0) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set countyHandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("countyHandler", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getVariableValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setVariableValue("imLine", 0, $arg)
    }
    
    property get imLocation () : IMLocation {
      return getVariableValue("imLocation", 0) as IMLocation
    }
    
    property set imLocation ($arg :  IMLocation) {
      setVariableValue("imLocation", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get pchandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("pchandler", 0) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set pchandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("pchandler", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    function initialize() {
      if (imLine != null and imLocation == null and acctLocation == null) {  // brand new location
        imLocation = imLine.addNewLineSpecificLocation() as IMLocation
      } else if (imLocation != null) {  // existing IMLocation
        imLine = imLocation.IMLine
      } else if (acctLocation != null and imLine != null) {  // new IMLocation for given account location
        imLocation = imLine.addToLineSpecificLocations(acctLocation) as IMLocation
        imLocation.Location.TerritoryCodes.each( \ tc -> tc.fillWithFirst() )
      } else {
        throw "Do not pass null values into popup."
      }
    }
    
    
  }
  
  
}