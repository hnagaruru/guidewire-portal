package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/MVRIncidentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MVRIncidentLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/MVRIncidentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MVRIncidentLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=ViolationDate_Cell) at MVRIncidentLV.pcf: line 27, column 48
    function value_10 () : java.util.Date {
      return incident.getViolationDate()
    }
    
    // 'value' attribute on DateCell (id=ConvictionDate_Cell) at MVRIncidentLV.pcf: line 31, column 49
    function value_12 () : java.util.Date {
      return incident.getConvictionDate()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at MVRIncidentLV.pcf: line 36, column 46
    function value_14 () : java.lang.String {
      return incident.getDescription()
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at MVRIncidentLV.pcf: line 40, column 43
    function value_16 () : java.lang.String {
      return incident.getLocation()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at MVRIncidentLV.pcf: line 44, column 48
    function value_18 () : java.lang.String {
      return incident.getViolationCode()
    }
    
    // 'value' attribute on TextCell (id=Points_Cell) at MVRIncidentLV.pcf: line 50, column 42
    function value_20 () : java.lang.Integer {
      return incident.getPoints()
    }
    
    // 'value' attribute on TypeKeyCell (id=RecordType_Cell) at MVRIncidentLV.pcf: line 22, column 48
    function value_8 () : typekey.MVRIncidentType {
      return incident.getIncidentType()
    }
    
    property get incident () : gw.api.motorvehiclerecord.IMVRIncident {
      return getIteratedValue(1) as gw.api.motorvehiclerecord.IMVRIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/MVRIncidentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MVRIncidentLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=RecordType_Cell) at MVRIncidentLV.pcf: line 22, column 48
    function sortValue_0 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getIncidentType()
    }
    
    // 'value' attribute on DateCell (id=ViolationDate_Cell) at MVRIncidentLV.pcf: line 27, column 48
    function sortValue_1 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getViolationDate()
    }
    
    // 'value' attribute on DateCell (id=ConvictionDate_Cell) at MVRIncidentLV.pcf: line 31, column 49
    function sortValue_2 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getConvictionDate()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at MVRIncidentLV.pcf: line 36, column 46
    function sortValue_3 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getDescription()
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at MVRIncidentLV.pcf: line 40, column 43
    function sortValue_4 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getLocation()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at MVRIncidentLV.pcf: line 44, column 48
    function sortValue_5 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getViolationCode()
    }
    
    // 'value' attribute on TextCell (id=Points_Cell) at MVRIncidentLV.pcf: line 50, column 42
    function sortValue_6 (incident :  gw.api.motorvehiclerecord.IMVRIncident) : java.lang.Object {
      return incident.getPoints()
    }
    
    // 'value' attribute on RowIterator at MVRIncidentLV.pcf: line 16, column 38
    function value_22 () : gw.api.motorvehiclerecord.IMVRIncident[] {
      return driverMVRArr*.getIncidents()
    }
    
    // 'visible' attribute on RowIterator at MVRIncidentLV.pcf: line 16, column 38
    function visible_7 () : java.lang.Boolean {
      return driverMVRArr != null
    }
    
    property get driverMVRArr () : gw.api.motorvehiclerecord.IMVRData[] {
      return getRequireValue("driverMVRArr", 0) as gw.api.motorvehiclerecord.IMVRData[]
    }
    
    property set driverMVRArr ($arg :  gw.api.motorvehiclerecord.IMVRData[]) {
      setRequireValue("driverMVRArr", 0, $arg)
    }
    
    
  }
  
  
}