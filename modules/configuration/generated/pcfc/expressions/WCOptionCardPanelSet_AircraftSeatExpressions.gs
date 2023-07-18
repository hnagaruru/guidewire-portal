package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.AircraftSeat.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_AircraftSeatExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.AircraftSeat.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatDesc_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 53, column 57
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcAircraftSeat.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatNumber_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 59, column 35
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcAircraftSeat.AircraftNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatCount_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 66, column 35
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcAircraftSeat.PassengerSeats = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcAircraftSeat.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'valueRange' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function valueRange_7 () : java.lang.Object {
      return (wcLine.Jurisdictions*.State).sortBy( \ s -> s.Code )
    }
    
    // 'value' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function valueRoot_6 () : java.lang.Object {
      return wcAircraftSeat
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatDesc_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 53, column 57
    function value_11 () : java.lang.String {
      return wcAircraftSeat.Description
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatNumber_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 59, column 35
    function value_15 () : java.lang.String {
      return wcAircraftSeat.AircraftNumber
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatCount_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 66, column 35
    function value_19 () : java.lang.Integer {
      return wcAircraftSeat.PassengerSeats
    }
    
    // 'value' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function value_4 () : typekey.Jurisdiction {
      return wcAircraftSeat.State
    }
    
    // 'valueRange' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function verifyValueRangeIsAllowedType_8 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function verifyValueRange_9 () : void {
      var __valueRangeArg = (wcLine.Jurisdictions*.State).sortBy( \ s -> s.Code )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    property get wcAircraftSeat () : entity.WCAircraftSeat {
      return getIteratedValue(1) as entity.WCAircraftSeat
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.AircraftSeat.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=state_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 46, column 35
    function sortValue_0 (wcAircraftSeat :  entity.WCAircraftSeat) : java.lang.Object {
      return wcAircraftSeat.State
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatDesc_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 53, column 57
    function sortValue_1 (wcAircraftSeat :  entity.WCAircraftSeat) : java.lang.Object {
      return wcAircraftSeat.Description
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatNumber_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 59, column 35
    function sortValue_2 (wcAircraftSeat :  entity.WCAircraftSeat) : java.lang.Object {
      return wcAircraftSeat.AircraftNumber
    }
    
    // 'value' attribute on TextCell (id=WCAircraftSeatCount_Cell) at WCOptionCardPanelSet.AircraftSeat.pcf: line 66, column 35
    function sortValue_3 (wcAircraftSeat :  entity.WCAircraftSeat) : java.lang.Object {
      return wcAircraftSeat.PassengerSeats
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCOptionCardPanelSet.AircraftSeat.pcf: line 36, column 53
    function toCreateAndAdd_23 () : entity.WCAircraftSeat {
      return wcLine.createAndAddWCAircraftSeat()
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.AircraftSeat.pcf: line 36, column 53
    function toRemove_24 (wcAircraftSeat :  entity.WCAircraftSeat) : void {
      wcLine.removeFromWCAircraftSeats( wcAircraftSeat )
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.AircraftSeat.pcf: line 36, column 53
    function value_25 () : entity.WCAircraftSeat[] {
      return wcLine.WCAircraftSeats
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}