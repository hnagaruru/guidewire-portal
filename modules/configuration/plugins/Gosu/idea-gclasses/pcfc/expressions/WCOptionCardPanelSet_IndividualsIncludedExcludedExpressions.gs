package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_IndividualsIncludedExcludedExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusionPerson.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 67, column 35
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusionPerson.Relationship = (__VALUE_TO_SET as typekey.Relationship)
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 73, column 35
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusionPerson.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=LastName_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 79, column 35
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusionPerson.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Duties_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 85, column 53
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusionPerson.Duties = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 46, column 34
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusionPerson.Inclusion = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'filter' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 67, column 35
    function filter_20 (VALUE :  typekey.Relationship, VALUES :  typekey.Relationship[]) : java.lang.Boolean {
      return inclusionPerson.filterRelationship(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function valueRange_13 () : java.lang.Object {
      return wcLine.Jurisdictions.map(\j -> j.State)
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 46, column 34
    function valueRoot_8 () : java.lang.Object {
      return inclusionPerson
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function value_10 () : typekey.Jurisdiction {
      return inclusionPerson.State
    }
    
    // 'value' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 67, column 35
    function value_17 () : typekey.Relationship {
      return inclusionPerson.Relationship
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 73, column 35
    function value_22 () : java.lang.String {
      return inclusionPerson.FirstName
    }
    
    // 'value' attribute on TextCell (id=LastName_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 79, column 35
    function value_26 () : java.lang.String {
      return inclusionPerson.LastName
    }
    
    // 'value' attribute on TextCell (id=Duties_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 85, column 53
    function value_30 () : java.lang.String {
      return inclusionPerson.Duties
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 46, column 34
    function value_6 () : typekey.Inclusion {
      return inclusionPerson.Inclusion
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function verifyValueRangeIsAllowedType_14 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function verifyValueRange_15 () : void {
      var __valueRangeArg = wcLine.Jurisdictions.map(\j -> j.State)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    property get inclusionPerson () : entity.InclusionPerson {
      return getIteratedValue(1) as entity.InclusionPerson
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 46, column 34
    function sortValue_0 (inclusionPerson :  entity.InclusionPerson) : java.lang.Object {
      return inclusionPerson.Inclusion
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 58, column 35
    function sortValue_1 (inclusionPerson :  entity.InclusionPerson) : java.lang.Object {
      return inclusionPerson.State
    }
    
    // 'value' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 67, column 35
    function sortValue_2 (inclusionPerson :  entity.InclusionPerson) : java.lang.Object {
      return inclusionPerson.Relationship
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 73, column 35
    function sortValue_3 (inclusionPerson :  entity.InclusionPerson) : java.lang.Object {
      return inclusionPerson.FirstName
    }
    
    // 'value' attribute on TextCell (id=LastName_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 79, column 35
    function sortValue_4 (inclusionPerson :  entity.InclusionPerson) : java.lang.Object {
      return inclusionPerson.LastName
    }
    
    // 'value' attribute on TextCell (id=Duties_Cell) at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 85, column 53
    function sortValue_5 (inclusionPerson :  entity.InclusionPerson) : java.lang.Object {
      return inclusionPerson.Duties
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 36, column 54
    function toCreateAndAdd_34 () : entity.InclusionPerson {
      return wcLine.createAndAddInclusionPerson()
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 36, column 54
    function toRemove_35 (inclusionPerson :  entity.InclusionPerson) : void {
      wcLine.removeFromInclusionPersons(inclusionPerson)
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.IndividualsIncludedExcluded.pcf: line 36, column 54
    function value_36 () : entity.InclusionPerson[] {
      return wcLine.InclusionPersons
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