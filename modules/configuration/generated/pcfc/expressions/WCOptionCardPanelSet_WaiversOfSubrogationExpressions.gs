package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.WaiversOfSubrogation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_WaiversOfSubrogationExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.WaiversOfSubrogation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 105, column 58
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCWaiverOfSubro.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=JobID_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 111, column 35
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCWaiverOfSubro.JobID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCWaiverOfSubro.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCWaiverOfSubro.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TextCell (id=AnnualPayroll_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 143, column 35
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCWaiverOfSubro.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 153, column 35
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCWaiverOfSubro.SpecialCov = (__VALUE_TO_SET as typekey.SpecialCov)
    }
    
    // 'editable' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function editable_43 () : java.lang.Boolean {
      return (wCWaiverOfSubro.Type == TC_SPECIFIC) and                                    (wCWaiverOfSubro.State != null)
    }
    
    // 'editable' attribute on TextCell (id=AnnualPayroll_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 143, column 35
    function editable_53 () : java.lang.Boolean {
      return wCWaiverOfSubro.Type == TC_SPECIFIC
    }
    
    // 'filter' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 153, column 35
    function filter_62 (VALUE :  typekey.SpecialCov, VALUES :  typekey.SpecialCov[]) : java.lang.Boolean {
      return VALUE.hasCategory(typekey.LiabilityAct.TC_WORKERSCOMP)
    }
    
    // 'optionLabel' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function optionLabel_47 (VALUE :  entity.WCClassCode) : java.lang.String {
      return VALUE as java.lang.String
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function valueRange_39 () : java.lang.Object {
      return (wcLine.Jurisdictions*.State).sortBy(\s -> s.Code)
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function valueRange_48 () : java.lang.Object {
      return wcLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(wCWaiverOfSubro.State))
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 105, column 58
    function valueRoot_30 () : java.lang.Object {
      return wCWaiverOfSubro
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 105, column 58
    function value_28 () : java.lang.String {
      return wCWaiverOfSubro.Description
    }
    
    // 'value' attribute on TextCell (id=JobID_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 111, column 35
    function value_32 () : java.lang.String {
      return wCWaiverOfSubro.JobID
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function value_36 () : typekey.Jurisdiction {
      return wCWaiverOfSubro.State
    }
    
    // 'value' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function value_44 () : entity.WCClassCode {
      return wCWaiverOfSubro.ClassCode
    }
    
    // 'value' attribute on TextCell (id=AnnualPayroll_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 143, column 35
    function value_54 () : java.lang.Integer {
      return wCWaiverOfSubro.BasisAmount
    }
    
    // 'value' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 153, column 35
    function value_59 () : typekey.SpecialCov {
      return wCWaiverOfSubro.SpecialCov
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function verifyValueRangeIsAllowedType_40 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function verifyValueRangeIsAllowedType_49 ($$arg :  entity.WCClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function verifyValueRangeIsAllowedType_49 ($$arg :  gw.api.database.IQueryBeanResult<entity.WCClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function verifyValueRangeIsAllowedType_49 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function verifyValueRange_41 () : void {
      var __valueRangeArg = (wcLine.Jurisdictions*.State).sortBy(\s -> s.Code)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function verifyValueRange_50 () : void {
      var __valueRangeArg = wcLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(wCWaiverOfSubro.State))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_49(__valueRangeArg)
    }
    
    property get wCWaiverOfSubro () : entity.WCWaiverOfSubro {
      return getIteratedValue(1) as entity.WCWaiverOfSubro
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.WaiversOfSubrogation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 70, column 35
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCBlanketWaiverOfSubro.SpecialCov = (__VALUE_TO_SET as typekey.SpecialCov)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 48, column 65
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCBlanketWaiverOfSubro.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCBlanketWaiverOfSubro.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 70, column 35
    function filter_17 (VALUE :  typekey.SpecialCov, VALUES :  typekey.SpecialCov[]) : java.lang.Boolean {
      return VALUE.hasCategory(typekey.LiabilityAct.TC_WORKERSCOMP)
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function valueRange_10 () : java.lang.Object {
      return (wcLine.Jurisdictions*.State).sortBy(\s -> s.Code)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 48, column 65
    function valueRoot_5 () : java.lang.Object {
      return wCBlanketWaiverOfSubro
    }
    
    // 'value' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 70, column 35
    function value_14 () : typekey.SpecialCov {
      return wCBlanketWaiverOfSubro.SpecialCov
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 48, column 65
    function value_3 () : java.lang.String {
      return wCBlanketWaiverOfSubro.Description
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function value_7 () : typekey.Jurisdiction {
      return wCBlanketWaiverOfSubro.State
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function verifyValueRangeIsAllowedType_11 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function verifyValueRange_12 () : void {
      var __valueRangeArg = (wcLine.Jurisdictions*.State).sortBy(\s -> s.Code)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    property get wCBlanketWaiverOfSubro () : entity.WCWaiverOfSubro {
      return getIteratedValue(1) as entity.WCWaiverOfSubro
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.WaiversOfSubrogation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 48, column 65
    function sortValue_0 (wCBlanketWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCBlanketWaiverOfSubro.Description
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 58, column 34
    function sortValue_1 (wCBlanketWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCBlanketWaiverOfSubro.State
    }
    
    // 'value' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 70, column 35
    function sortValue_2 (wCBlanketWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCBlanketWaiverOfSubro.SpecialCov
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 105, column 58
    function sortValue_22 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCWaiverOfSubro.Description
    }
    
    // 'value' attribute on TextCell (id=JobID_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 111, column 35
    function sortValue_23 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCWaiverOfSubro.JobID
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 121, column 34
    function sortValue_24 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCWaiverOfSubro.State
    }
    
    // 'value' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 134, column 35
    function sortValue_25 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCWaiverOfSubro.ClassCode
    }
    
    // 'value' attribute on TextCell (id=AnnualPayroll_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 143, column 35
    function sortValue_26 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCWaiverOfSubro.BasisAmount
    }
    
    // 'value' attribute on TypeKeyCell (id=WCLaw_Cell) at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 153, column 35
    function sortValue_27 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : java.lang.Object {
      return wCWaiverOfSubro.SpecialCov
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 40, column 54
    function toCreateAndAdd_19 () : entity.WCWaiverOfSubro {
      return wcLine.createAndAddWCWaiverOfSubro(TC_BLANKET)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 97, column 54
    function toCreateAndAdd_64 () : entity.WCWaiverOfSubro {
      return wcLine.createAndAddWCWaiverOfSubro(typekey.WaiverOfSubrogationType.TC_SPECIFIC)
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 40, column 54
    function toRemove_20 (wCBlanketWaiverOfSubro :  entity.WCWaiverOfSubro) : void {
      wcLine.removeFromWCWaiverOfSubros(wCBlanketWaiverOfSubro)
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 97, column 54
    function toRemove_65 (wCWaiverOfSubro :  entity.WCWaiverOfSubro) : void {
      wcLine.removeFromWCWaiverOfSubros(wCWaiverOfSubro)
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 40, column 54
    function value_21 () : entity.WCWaiverOfSubro[] {
      return wcLine.WCWaiverOfSubros.where(\w -> w.Type == TC_BLANKET)
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.WaiversOfSubrogation.pcf: line 97, column 54
    function value_66 () : entity.WCWaiverOfSubro[] {
      return wcLine.WCWaiverOfSubros.where(\w -> w.Type == typekey.WaiverOfSubrogationType.TC_SPECIFIC)
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