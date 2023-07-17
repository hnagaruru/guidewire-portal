package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPLocationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPLocationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cpLocation :  CPLocation, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 1
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, acctLocation :  AccountLocation, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 2
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'action' attribute on Link (id=RefreshThumbnailMapLink) at CPLocationPopup.pcf: line 86, column 115
    function action_13 () : void {
      return // Action required for button to be clicked.
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at CPLocationPopup.pcf: line 126, column 91
    function action_26 () : void {
      AccountLocationPopup.push(cpLocation.Location.AccountLocation, cpLocation.CPLine.Branch.Policy.Account, false)
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at CPLocationPopup.pcf: line 126, column 91
    function action_dest_27 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(cpLocation.Location.AccountLocation, cpLocation.CPLine.Branch.Policy.Account, false)
    }
    
    // 'afterCommit' attribute on Popup (id=CPLocationPopup) at CPLocationPopup.pcf: line 14, column 105
    function afterCommit_29 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.PebblesUtil.invalidateIterators(TopLocation, entity.CPLocation)
    }
    
    // 'beforeCommit' attribute on Popup (id=CPLocationPopup) at CPLocationPopup.pcf: line 14, column 105
    function beforeCommit_30 (pickedValue :  CPLocation) : void {
      riskAssessmentBroker?.acceptRiskAssessmentChanges(cpLocation.Location)
    }
    
    // 'canEdit' attribute on Popup (id=CPLocationPopup) at CPLocationPopup.pcf: line 14, column 105
    function canEdit_31 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on InputSetRef at CPLocationPopup.pcf: line 78, column 118
    function def_onEnter_10 (def :  pcf.LocationDetailInputSet) : void {
      def.onEnter(cpLocation.Location, cpLine.SupportsNonSpecificLocations, openForEdit)
    }
    
    // 'def' attribute on PanelRef at CPLocationPopup.pcf: line 112, column 86
    function def_onEnter_23 (def :  pcf.RiskAssessmentPanelSet) : void {
      def.onEnter(cpLocation.Location, riskAssessmentBroker)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPLocationPopup.pcf: line 71, column 52
    function def_onEnter_8 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(cpLocation, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CPLocationPopup.pcf: line 78, column 118
    function def_refreshVariables_11 (def :  pcf.LocationDetailInputSet) : void {
      def.refreshVariables(cpLocation.Location, cpLine.SupportsNonSpecificLocations, openForEdit)
    }
    
    // 'def' attribute on PanelRef at CPLocationPopup.pcf: line 112, column 86
    function def_refreshVariables_24 (def :  pcf.RiskAssessmentPanelSet) : void {
      def.refreshVariables(cpLocation.Location, riskAssessmentBroker)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPLocationPopup.pcf: line 71, column 52
    function def_refreshVariables_9 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(cpLocation, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TextAreaInput (id=PrincipleOps_Input) at CPLocationPopup.pcf: line 96, column 54
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpLocation.PrincipalOpsDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at CPLocationPopup.pcf: line 104, column 55
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpLocation.Location.FireProtectClass = (__VALUE_TO_SET as typekey.FireProtectClass)
    }
    
    // 'initialValue' attribute on Variable at CPLocationPopup.pcf: line 27, column 31
    function initialValue_0 () : AccountLocation {
      return cpLocation.Location.AccountLocation
    }
    
    // 'initialValue' attribute on Variable at CPLocationPopup.pcf: line 43, column 57
    function initialValue_1 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("city","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at CPLocationPopup.pcf: line 47, column 57
    function initialValue_2 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("county","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at CPLocationPopup.pcf: line 51, column 57
    function initialValue_3 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("postalcode","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at CPLocationPopup.pcf: line 58, column 67
    function initialValue_4 () : gw.plugin.policylocation.RiskAssessmentErrorHandler {
      return new gw.riskassessment.SpotlightInteractiveErrorHandler()
    }
    
    // 'initialValue' attribute on Variable at CPLocationPopup.pcf: line 62, column 81
    function initialValue_5 () : gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker {
      if (cpLocation != null) { return new gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker(cpLocation.Location, errorHandler)} else { return null}
    }
    
    // EditButtons at CPLocationPopup.pcf: line 67, column 35
    function label_7 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at CPLocationPopup.pcf: line 67, column 35
    function pickValue_6 () : CPLocation {
      return cpLocation
    }
    
    // 'startEditing' attribute on Popup (id=CPLocationPopup) at CPLocationPopup.pcf: line 14, column 105
    function startEditing_32 () : void {
      initialize()
    }
    
    // 'startInEditMode' attribute on Popup (id=CPLocationPopup) at CPLocationPopup.pcf: line 14, column 105
    function startInEditMode_33 () : java.lang.Boolean {
      return startInEdit
    }
    
    // 'value' attribute on TextAreaInput (id=PrincipleOps_Input) at CPLocationPopup.pcf: line 96, column 54
    function valueRoot_17 () : java.lang.Object {
      return cpLocation
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at CPLocationPopup.pcf: line 104, column 55
    function valueRoot_21 () : java.lang.Object {
      return cpLocation.Location
    }
    
    // 'value' attribute on TextAreaInput (id=PrincipleOps_Input) at CPLocationPopup.pcf: line 96, column 54
    function value_15 () : java.lang.String {
      return cpLocation.PrincipalOpsDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=FireProtectionClass_Input) at CPLocationPopup.pcf: line 104, column 55
    function value_19 () : typekey.FireProtectClass {
      return cpLocation.Location.FireProtectClass
    }
    
    // 'visible' attribute on Link (id=RefreshThumbnailMapLink) at CPLocationPopup.pcf: line 86, column 115
    function visible_12 () : java.lang.Boolean {
      return gw.riskassessment.SpotlightConfigParameters.shouldShowThumbnailMap() and openForEdit
    }
    
    // 'visible' attribute on PanelColumn (id=SpotlightPanelColumn) at CPLocationPopup.pcf: line 110, column 150
    function visible_25 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value and cpLocation.Location.Branch.Policy.Product.Commercial
    }
    
    // 'visible' attribute on DetailViewPanel (id=AccountLocationUpToDateDV) at CPLocationPopup.pcf: line 117, column 91
    function visible_28 () : java.lang.Boolean {
      return cpLocation.CPLine.Branch.Promoted and !cpLocation.Location.isUpToDate()
    }
    
    override property get CurrentLocation () : pcf.CPLocationPopup {
      return super.CurrentLocation as pcf.CPLocationPopup
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
    
    property get cpLine () : CommercialPropertyLine {
      return getVariableValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setVariableValue("cpLine", 0, $arg)
    }
    
    property get cpLocation () : CPLocation {
      return getVariableValue("cpLocation", 0) as CPLocation
    }
    
    property set cpLocation ($arg :  CPLocation) {
      setVariableValue("cpLocation", 0, $arg)
    }
    
    property get errorHandler () : gw.plugin.policylocation.RiskAssessmentErrorHandler {
      return getVariableValue("errorHandler", 0) as gw.plugin.policylocation.RiskAssessmentErrorHandler
    }
    
    property set errorHandler ($arg :  gw.plugin.policylocation.RiskAssessmentErrorHandler) {
      setVariableValue("errorHandler", 0, $arg)
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
    
    property get riskAssessmentBroker () : gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker {
      return getVariableValue("riskAssessmentBroker", 0) as gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker
    }
    
    property set riskAssessmentBroker ($arg :  gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker) {
      setVariableValue("riskAssessmentBroker", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    
          function initialize() {
            if (cpLine != null and cpLocation == null and acctLocation == null) {  // brand new location
              cpLocation = cpLine.addNewLineSpecificLocation() as CPLocation
            } else if (cpLocation != null) {  // existing cp location
              cpLine = cpLocation.CPLine
            } else if (acctLocation != null and cpLine != null) {  // new cp location for given account location
              cpLocation = cpLine.addToLineSpecificLocations(acctLocation) as CPLocation
              cpLocation.Location.TerritoryCodes.each(\tc -> tc.fillWithFirst())
            } else {
              throw new gw.api.util.DisplayableException(DisplayKey.get('Web.Account.Locations.UnableToInitialize'))
            }
    
            riskAssessmentBroker = new LocationRiskAssessmentBroker(cpLocation.Location, errorHandler)
          }
    
    
  }
  
  
}