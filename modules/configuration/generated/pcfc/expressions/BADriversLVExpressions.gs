package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriversLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BADriversLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriversLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BADriversLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=LastName_Cell) at BADriversLV.pcf: line 32, column 36
    function sortValue_0 (driver :  entity.CommercialDriver) : java.lang.Object {
      return driver.LastName
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at BADriversLV.pcf: line 38, column 37
    function sortValue_1 (driver :  entity.CommercialDriver) : java.lang.Object {
      return driver.FirstName
    }
    
    // 'value' attribute on TypeKeyCell (id=YearsExperience_Cell) at BADriversLV.pcf: line 45, column 49
    function sortValue_2 (driver :  entity.CommercialDriver) : java.lang.Object {
      return driver.YearsExperience
    }
    
    // 'value' attribute on TypeKeyCell (id=LicenseState_Cell) at BADriversLV.pcf: line 52, column 38
    function sortValue_3 (driver :  entity.CommercialDriver) : java.lang.Object {
      return driver.LicenseState
    }
    
    // 'value' attribute on DateCell (id=HireDate_Cell) at BADriversLV.pcf: line 58, column 36
    function sortValue_4 (driver :  entity.CommercialDriver) : java.lang.Object {
      return driver.HireDate
    }
    
    // 'toRemove' attribute on RowIterator at BADriversLV.pcf: line 23, column 45
    function toRemove_30 (driver :  entity.CommercialDriver) : void {
      thisBusinessAutoLine.removeFromDrivers(driver)
    }
    
    // 'value' attribute on RowIterator at BADriversLV.pcf: line 23, column 45
    function value_31 () : entity.CommercialDriver[] {
      return thisBusinessAutoLine.Drivers
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get thisBusinessAutoLine () : BusinessAutoLine {
      return getRequireValue("thisBusinessAutoLine", 0) as BusinessAutoLine
    }
    
    property set thisBusinessAutoLine ($arg :  BusinessAutoLine) {
      setRequireValue("thisBusinessAutoLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriversLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BADriversLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=FirstName_Cell) at BADriversLV.pcf: line 38, column 37
    function action_10 () : void {
      BADriverPopup.push(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TypeKeyCell (id=YearsExperience_Cell) at BADriversLV.pcf: line 45, column 49
    function action_15 () : void {
      BADriverPopup.push(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TypeKeyCell (id=LicenseState_Cell) at BADriversLV.pcf: line 52, column 38
    function action_20 () : void {
      BADriverPopup.push(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on DateCell (id=HireDate_Cell) at BADriversLV.pcf: line 58, column 36
    function action_25 () : void {
      BADriverPopup.push(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TextCell (id=LastName_Cell) at BADriversLV.pcf: line 32, column 36
    function action_5 () : void {
      BADriverPopup.push(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TextCell (id=FirstName_Cell) at BADriversLV.pcf: line 38, column 37
    function action_dest_11 () : pcf.api.Destination {
      return pcf.BADriverPopup.createDestination(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TypeKeyCell (id=YearsExperience_Cell) at BADriversLV.pcf: line 45, column 49
    function action_dest_16 () : pcf.api.Destination {
      return pcf.BADriverPopup.createDestination(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TypeKeyCell (id=LicenseState_Cell) at BADriversLV.pcf: line 52, column 38
    function action_dest_21 () : pcf.api.Destination {
      return pcf.BADriverPopup.createDestination(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on DateCell (id=HireDate_Cell) at BADriversLV.pcf: line 58, column 36
    function action_dest_26 () : pcf.api.Destination {
      return pcf.BADriverPopup.createDestination(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'action' attribute on TextCell (id=LastName_Cell) at BADriversLV.pcf: line 32, column 36
    function action_dest_6 () : pcf.api.Destination {
      return pcf.BADriverPopup.createDestination(driver, thisBusinessAutoLine.Branch, openForEdit, false)
    }
    
    // 'value' attribute on TextCell (id=LastName_Cell) at BADriversLV.pcf: line 32, column 36
    function valueRoot_8 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at BADriversLV.pcf: line 38, column 37
    function value_12 () : java.lang.String {
      return driver.FirstName
    }
    
    // 'value' attribute on TypeKeyCell (id=YearsExperience_Cell) at BADriversLV.pcf: line 45, column 49
    function value_17 () : typekey.DriverExperience {
      return driver.YearsExperience
    }
    
    // 'value' attribute on TypeKeyCell (id=LicenseState_Cell) at BADriversLV.pcf: line 52, column 38
    function value_22 () : typekey.State {
      return driver.LicenseState
    }
    
    // 'value' attribute on DateCell (id=HireDate_Cell) at BADriversLV.pcf: line 58, column 36
    function value_27 () : java.util.Date {
      return driver.HireDate
    }
    
    // 'value' attribute on TextCell (id=LastName_Cell) at BADriversLV.pcf: line 32, column 36
    function value_7 () : java.lang.String {
      return driver.LastName
    }
    
    property get driver () : entity.CommercialDriver {
      return getIteratedValue(1) as entity.CommercialDriver
    }
    
    
  }
  
  
}