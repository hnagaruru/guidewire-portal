package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/DriverMVRInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DriverMVRInfoPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/DriverMVRInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriverMVRInfoPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (mvrOrderArray :  gw.api.motorvehiclerecord.IMVROrder[]) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at DriverMVRInfoPopup.pcf: line 17, column 52
    function initialValue_0 () : gw.api.motorvehiclerecord.IMVRData[] {
      return mvrOrderArray*.MVRData
    }
    
    override property get CurrentLocation () : pcf.DriverMVRInfoPopup {
      return super.CurrentLocation as pcf.DriverMVRInfoPopup
    }
    
    property get allMVRs () : gw.api.motorvehiclerecord.IMVRData[] {
      return getVariableValue("allMVRs", 0) as gw.api.motorvehiclerecord.IMVRData[]
    }
    
    property set allMVRs ($arg :  gw.api.motorvehiclerecord.IMVRData[]) {
      setVariableValue("allMVRs", 0, $arg)
    }
    
    property get mvrOrderArray () : gw.api.motorvehiclerecord.IMVROrder[] {
      return getVariableValue("mvrOrderArray", 0) as gw.api.motorvehiclerecord.IMVROrder[]
    }
    
    property set mvrOrderArray ($arg :  gw.api.motorvehiclerecord.IMVROrder[]) {
      setVariableValue("mvrOrderArray", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/DriverMVRInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends MVRIncidentLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=RecordType_Cell) at DriverMVRInfoPopup.pcf: line 90, column 60
    function value_25 () : typekey.MVRIncidentType {
      return incident.getIncidentType()
    }
    
    // 'value' attribute on DateCell (id=ViolationDate_Cell) at DriverMVRInfoPopup.pcf: line 95, column 60
    function value_27 () : java.util.Date {
      return incident.getViolationDate()
    }
    
    // 'value' attribute on DateCell (id=ConvictionDate_Cell) at DriverMVRInfoPopup.pcf: line 99, column 61
    function value_29 () : java.util.Date {
      return incident.getConvictionDate()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DriverMVRInfoPopup.pcf: line 104, column 58
    function value_31 () : java.lang.String {
      return incident.getDescription()
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at DriverMVRInfoPopup.pcf: line 108, column 55
    function value_33 () : java.lang.String {
      return incident.getLocation()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at DriverMVRInfoPopup.pcf: line 112, column 60
    function value_35 () : java.lang.String {
      return incident.getViolationCode()
    }
    
    // 'value' attribute on TextCell (id=Points_Cell) at DriverMVRInfoPopup.pcf: line 118, column 54
    function value_37 () : java.lang.Integer {
      return incident.getPoints()
    }
    
    property get incident () : gw.api.motorvehiclerecord.IMVRIncident {
      return getIteratedValue(3) as gw.api.motorvehiclerecord.IMVRIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/DriverMVRInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MVRListExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=ReportDate_Cell) at DriverMVRInfoPopup.pcf: line 41, column 48
    function valueRoot_6 () : java.lang.Object {
      return currentMVR
    }
    
    // 'value' attribute on DateCell (id=RequestedDate_Cell) at DriverMVRInfoPopup.pcf: line 49, column 72
    function valueRoot_9 () : java.lang.Object {
      return currentMVR.MVROrderParent
    }
    
    // 'value' attribute on TextCell (id=YearsRequested_Cell) at DriverMVRInfoPopup.pcf: line 55, column 48
    function value_11 () : java.lang.Integer {
      return currentMVR.YearsRequested
    }
    
    // 'value' attribute on DateCell (id=ReportDate_Cell) at DriverMVRInfoPopup.pcf: line 41, column 48
    function value_5 () : java.util.Date {
      return currentMVR.ReportDate
    }
    
    // 'value' attribute on DateCell (id=RequestedDate_Cell) at DriverMVRInfoPopup.pcf: line 49, column 72
    function value_8 () : java.util.Date {
      return currentMVR.MVROrderParent.ReportRequestedDate
    }
    
    property get currentMVR () : gw.api.motorvehiclerecord.IMVRData {
      return getIteratedValue(2) as gw.api.motorvehiclerecord.IMVRData
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/DriverMVRInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MVRIncidentLDVExpressionsImpl extends MVRListExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DriverMVRInfoPopup.pcf: line 77, column 33
    function initialValue_17 () : boolean {
      return lazyUpdater.refresh(selectedMVR, \ sMVR -> sMVR.Incidents)
    }
    
    // 'value' attribute on TypeKeyCell (id=RecordType_Cell) at DriverMVRInfoPopup.pcf: line 90, column 60
    function sortValue_18 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getIncidentType()
    }
    
    // 'value' attribute on DateCell (id=ViolationDate_Cell) at DriverMVRInfoPopup.pcf: line 95, column 60
    function sortValue_19 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getViolationDate()
    }
    
    // 'value' attribute on DateCell (id=ConvictionDate_Cell) at DriverMVRInfoPopup.pcf: line 99, column 61
    function sortValue_20 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getConvictionDate()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DriverMVRInfoPopup.pcf: line 104, column 58
    function sortValue_21 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getDescription()
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at DriverMVRInfoPopup.pcf: line 108, column 55
    function sortValue_22 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getLocation()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at DriverMVRInfoPopup.pcf: line 112, column 60
    function sortValue_23 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getViolationCode()
    }
    
    // 'value' attribute on TextCell (id=Points_Cell) at DriverMVRInfoPopup.pcf: line 118, column 54
    function sortValue_24 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getPoints()
    }
    
    // 'value' attribute on TypeKeyInput (id=IncidentType_Input) at DriverMVRInfoPopup.pcf: line 133, column 62
    function valueRoot_41 () : java.lang.Object {
      return mvrIncident
    }
    
    // 'value' attribute on RowIterator at DriverMVRInfoPopup.pcf: line 84, column 72
    function value_39 () : gw.api.motorvehiclerecord.IMVRIncident[] {
      return lazyUpdater.DependentComponent
    }
    
    // 'value' attribute on TypeKeyInput (id=IncidentType_Input) at DriverMVRInfoPopup.pcf: line 133, column 62
    function value_40 () : typekey.MVRIncidentType {
      return mvrIncident.IncidentType
    }
    
    // 'value' attribute on TextInput (id=IncidentDescription_Input) at DriverMVRInfoPopup.pcf: line 137, column 58
    function value_43 () : java.lang.String {
      return mvrIncident.Description
    }
    
    // 'value' attribute on TextInput (id=IncidentCode_Input) at DriverMVRInfoPopup.pcf: line 141, column 67
    function value_46 () : java.lang.String {
      return mvrIncident.CarrierViolationCode
    }
    
    // 'value' attribute on TextInput (id=IncidentPoints_Input) at DriverMVRInfoPopup.pcf: line 146, column 56
    function value_49 () : java.lang.Integer {
      return mvrIncident.Points
    }
    
    // 'value' attribute on TextInput (id=IncidentLocation_Input) at DriverMVRInfoPopup.pcf: line 150, column 55
    function value_52 () : java.lang.String {
      return mvrIncident.Location
    }
    
    // 'value' attribute on TextInput (id=IncidentState_Input) at DriverMVRInfoPopup.pcf: line 154, column 52
    function value_55 () : java.lang.String {
      return mvrIncident.State
    }
    
    // 'value' attribute on TextInput (id=IncidentStateCode_Input) at DriverMVRInfoPopup.pcf: line 158, column 61
    function value_58 () : java.lang.String {
      return mvrIncident.ViolationCode 
    }
    
    // 'value' attribute on TextInput (id=IncidentCourt_Input) at DriverMVRInfoPopup.pcf: line 162, column 52
    function value_61 () : java.lang.String {
      return mvrIncident.Court
    }
    
    // 'value' attribute on DateInput (id=IncidentViolDate_Input) at DriverMVRInfoPopup.pcf: line 168, column 60
    function value_64 () : java.util.Date {
      return mvrIncident.ViolationDate
    }
    
    // 'value' attribute on DateInput (id=IncidentConvReinDate_Input) at DriverMVRInfoPopup.pcf: line 172, column 61
    function value_67 () : java.util.Date {
      return mvrIncident.ConvictionDate
    }
    
    // 'value' attribute on DateInput (id=IncidentEligibleDate_Input) at DriverMVRInfoPopup.pcf: line 176, column 59
    function value_70 () : java.util.Date {
      return mvrIncident.EligibleDate
    }
    
    // 'value' attribute on TextInput (id=IncidentViolationNumber_Input) at DriverMVRInfoPopup.pcf: line 180, column 58
    function value_73 () : java.lang.String {
      return mvrIncident.OrderNumber
    }
    
    // 'value' attribute on TextInput (id=IncidentDisposition_Input) at DriverMVRInfoPopup.pcf: line 184, column 58
    function value_76 () : java.lang.String {
      return mvrIncident.Disposition
    }
    
    // 'value' attribute on TextInput (id=IncidentVehicleSpeed_Input) at DriverMVRInfoPopup.pcf: line 188, column 52
    function value_79 () : java.lang.String {
      return mvrIncident.Speed
    }
    
    // 'value' attribute on TextInput (id=IncidentSpeedZone_Input) at DriverMVRInfoPopup.pcf: line 192, column 56
    function value_82 () : java.lang.String {
      return mvrIncident.SpeedZone
    }
    
    // 'value' attribute on TextInput (id=IncidentAccidentInvolved_Input) at DriverMVRInfoPopup.pcf: line 196, column 55
    function value_85 () : java.lang.String {
      return mvrIncident.Accident
    }
    
    property get mvrIncident () : gw.api.motorvehiclerecord.IMVRIncident {
      return getCurrentSelection(2) as gw.api.motorvehiclerecord.IMVRIncident
    }
    
    property set mvrIncident ($arg :  gw.api.motorvehiclerecord.IMVRIncident) {
      setCurrentSelection(2, $arg)
    }
    
    property get refresher () : boolean {
      return getVariableValue("refresher", 2) as java.lang.Boolean
    }
    
    property set refresher ($arg :  boolean) {
      setVariableValue("refresher", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/DriverMVRInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MVRListExpressionsImpl extends DriverMVRInfoPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at DriverMVRInfoPopup.pcf: line 64, column 47
    function def_onEnter_15 (def :  pcf.MVRDriverDV) : void {
      def.onEnter(selectedMVR)
    }
    
    // 'def' attribute on PanelRef at DriverMVRInfoPopup.pcf: line 64, column 47
    function def_refreshVariables_16 (def :  pcf.MVRDriverDV) : void {
      def.refreshVariables(selectedMVR)
    }
    
    // 'initialValue' attribute on Variable at DriverMVRInfoPopup.pcf: line 27, column 129
    function initialValue_1 () : gw.webservice.LazyUpdater<gw.api.motorvehiclerecord.IMVRData, gw.api.motorvehiclerecord.IMVRIncident[]> {
      return new gw.webservice.LazyUpdater<gw.api.motorvehiclerecord.IMVRData, gw.api.motorvehiclerecord.IMVRIncident[]>(selectedMVR)
    }
    
    // 'label' attribute on Label (id=MiscellaneousInfo) at DriverMVRInfoPopup.pcf: line 214, column 56
    function label_88 () : java.lang.String {
      return selectedMVR.Miscellaneous
    }
    
    // 'label' attribute on Label (id=AdditionalDriversInfo) at DriverMVRInfoPopup.pcf: line 226, column 60
    function label_89 () : java.lang.String {
      return selectedMVR.AdditionalDrivers
    }
    
    // 'value' attribute on DateCell (id=ReportDate_Cell) at DriverMVRInfoPopup.pcf: line 41, column 48
    function sortValue_2 (currentMVR :  gw.api.motorvehiclerecord.IMVRData) : java.lang.Object {
      return currentMVR.ReportDate
    }
    
    // 'value' attribute on DateCell (id=RequestedDate_Cell) at DriverMVRInfoPopup.pcf: line 49, column 72
    function sortValue_3 (currentMVR :  gw.api.motorvehiclerecord.IMVRData) : java.lang.Object {
      return currentMVR.MVROrderParent.ReportRequestedDate
    }
    
    // 'value' attribute on TextCell (id=YearsRequested_Cell) at DriverMVRInfoPopup.pcf: line 55, column 48
    function sortValue_4 (currentMVR :  gw.api.motorvehiclerecord.IMVRData) : java.lang.Object {
      return currentMVR.YearsRequested
    }
    
    // 'value' attribute on RowIterator (id=MVRRowIterator) at DriverMVRInfoPopup.pcf: line 34, column 62
    function value_14 () : gw.api.motorvehiclerecord.IMVRData[] {
      return allMVRs
    }
    
    property get lazyUpdater () : gw.webservice.LazyUpdater<gw.api.motorvehiclerecord.IMVRData, gw.api.motorvehiclerecord.IMVRIncident[]> {
      return getVariableValue("lazyUpdater", 1) as gw.webservice.LazyUpdater<gw.api.motorvehiclerecord.IMVRData, gw.api.motorvehiclerecord.IMVRIncident[]>
    }
    
    property set lazyUpdater ($arg :  gw.webservice.LazyUpdater<gw.api.motorvehiclerecord.IMVRData, gw.api.motorvehiclerecord.IMVRIncident[]>) {
      setVariableValue("lazyUpdater", 1, $arg)
    }
    
    property get selectedMVR () : gw.api.motorvehiclerecord.IMVRData {
      return getCurrentSelection(1) as gw.api.motorvehiclerecord.IMVRData
    }
    
    property set selectedMVR ($arg :  gw.api.motorvehiclerecord.IMVRData) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}