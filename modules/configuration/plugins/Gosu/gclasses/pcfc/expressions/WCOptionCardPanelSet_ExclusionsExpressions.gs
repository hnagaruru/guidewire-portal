package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.Exclusions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_ExclusionsExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.Exclusions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCExcludedWorkplaceInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AddressLine1_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 52, column 53
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=AddressLine2_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 57, column 53
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.AddressLine2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 62, column 45
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 70, column 55
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TextCell (id=ExcludedItem_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 47, column 53
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.ExcludedItem = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=ExcludedItem_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 47, column 53
    function editable_7 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'filter' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 70, column 55
    function filter_35 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return usStates.contains(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(VALUE))
    }
    
    // 'value' attribute on TextCell (id=ExcludedItem_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 47, column 53
    function valueRoot_10 () : java.lang.Object {
      return exclusion
    }
    
    // 'value' attribute on TextCell (id=AddressLine1_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 52, column 53
    function value_14 () : java.lang.String {
      return exclusion.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=AddressLine2_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 57, column 53
    function value_20 () : java.lang.String {
      return exclusion.AddressLine2
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 62, column 45
    function value_26 () : java.lang.String {
      return exclusion.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 70, column 55
    function value_32 () : typekey.Jurisdiction {
      return exclusion.State
    }
    
    // 'value' attribute on TextCell (id=ExcludedItem_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 47, column 53
    function value_8 () : java.lang.String {
      return exclusion.ExcludedItem
    }
    
    property get exclusion () : entity.WCExcludedWorkplace {
      return getIteratedValue(2) as entity.WCExcludedWorkplace
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.Exclusions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCExcludedWorkplaceInputSetExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator (id=Exclusions) at WCOptionCardPanelSet.Exclusions.pcf: line 40, column 58
    function editable_6 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.Exclusions.pcf: line 21, column 44
    function initialValue_0 () : gw.api.domain.StateSet {
      return gw.api.domain.StateSet.get( gw.api.domain.StateSet.US50 )
    }
    
    // 'value' attribute on TextCell (id=ExcludedItem_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 47, column 53
    function sortValue_1 (exclusion :  entity.WCExcludedWorkplace) : java.lang.Object {
      return exclusion.ExcludedItem
    }
    
    // 'value' attribute on TextCell (id=AddressLine1_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 52, column 53
    function sortValue_2 (exclusion :  entity.WCExcludedWorkplace) : java.lang.Object {
      return exclusion.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=AddressLine2_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 57, column 53
    function sortValue_3 (exclusion :  entity.WCExcludedWorkplace) : java.lang.Object {
      return exclusion.AddressLine2
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 62, column 45
    function sortValue_4 (exclusion :  entity.WCExcludedWorkplace) : java.lang.Object {
      return exclusion.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.Exclusions.pcf: line 70, column 55
    function sortValue_5 (exclusion :  entity.WCExcludedWorkplace) : java.lang.Object {
      return exclusion.State
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=Exclusions) at WCOptionCardPanelSet.Exclusions.pcf: line 40, column 58
    function toCreateAndAdd_38 () : entity.WCExcludedWorkplace {
      return wcLine.createAndAddWCExcludedWorkplace()
    }
    
    // 'toRemove' attribute on RowIterator (id=Exclusions) at WCOptionCardPanelSet.Exclusions.pcf: line 40, column 58
    function toRemove_39 (exclusion :  entity.WCExcludedWorkplace) : void {
      wcLine.removeFromWCExcludedWorkplaces(exclusion)
    }
    
    // 'value' attribute on RowIterator (id=Exclusions) at WCOptionCardPanelSet.Exclusions.pcf: line 40, column 58
    function value_40 () : entity.WCExcludedWorkplace[] {
      return wcLine.WCExcludedWorkplaces
    }
    
    property get usStates () : gw.api.domain.StateSet {
      return getVariableValue("usStates", 1) as gw.api.domain.StateSet
    }
    
    property set usStates ($arg :  gw.api.domain.StateSet) {
      setVariableValue("usStates", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.Exclusions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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