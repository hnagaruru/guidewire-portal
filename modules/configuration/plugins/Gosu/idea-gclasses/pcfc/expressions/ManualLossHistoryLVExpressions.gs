package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/losshistory/ManualLossHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ManualLossHistoryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/losshistory/ManualLossHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ManualLossHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ManualLossHistoryLV.pcf: line 47, column 51
    function currency_28 () : typekey.Currency {
      return policyPeriod.PreferredCoverageCurrency
    }
    
    // 'value' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.PolicyLinePattern = (__VALUE_TO_SET as gw.api.productmodel.PolicyLinePattern)
    }
    
    // 'value' attribute on DateCell (id=OccurrenceDate_Cell) at ManualLossHistoryLV.pcf: line 36, column 52
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.OccurrenceDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ManualLossHistoryLV.pcf: line 41, column 49
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ManualLossHistoryLV.pcf: line 47, column 51
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.TotalIncurred = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountPaid_Cell) at ManualLossHistoryLV.pcf: line 53, column 48
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.AmountPaid = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountReserved_Cell) at ManualLossHistoryLV.pcf: line 59, column 48
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.AmountResv = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ManualLossHistoryLV.pcf: line 65, column 48
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      lossHistoryEntry.LossStatus = (__VALUE_TO_SET as typekey.LossEntryStatus)
    }
    
    // 'valueRange' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function valueRange_12 () : java.lang.Object {
      return policyPeriod.Policy.Product.LinePatterns
    }
    
    // 'value' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function valueRoot_11 () : java.lang.Object {
      return lossHistoryEntry
    }
    
    // 'value' attribute on DateCell (id=OccurrenceDate_Cell) at ManualLossHistoryLV.pcf: line 36, column 52
    function value_17 () : java.util.Date {
      return lossHistoryEntry.OccurrenceDate
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ManualLossHistoryLV.pcf: line 41, column 49
    function value_21 () : java.lang.String {
      return lossHistoryEntry.Description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ManualLossHistoryLV.pcf: line 47, column 51
    function value_25 () : gw.pl.currency.MonetaryAmount {
      return lossHistoryEntry.TotalIncurred
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountPaid_Cell) at ManualLossHistoryLV.pcf: line 53, column 48
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return lossHistoryEntry.AmountPaid
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountReserved_Cell) at ManualLossHistoryLV.pcf: line 59, column 48
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return lossHistoryEntry.AmountResv
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ManualLossHistoryLV.pcf: line 65, column 48
    function value_40 () : typekey.LossEntryStatus {
      return lossHistoryEntry.LossStatus
    }
    
    // 'value' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function value_9 () : gw.api.productmodel.PolicyLinePattern {
      return lossHistoryEntry.PolicyLinePattern
    }
    
    // 'valueRange' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.productmodel.PolicyLinePattern[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function verifyValueRange_14 () : void {
      var __valueRangeArg = policyPeriod.Policy.Product.LinePatterns
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function visible_15 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    property get lossHistoryEntry () : entity.LossHistoryEntry {
      return getIteratedValue(1) as entity.LossHistoryEntry
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/losshistory/ManualLossHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ManualLossHistoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoAdd' attribute on RowIterator at ManualLossHistoryLV.pcf: line 22, column 45
    function autoAdd_8 () : java.lang.Boolean {
      return policyPeriod.Policy.PriorLosses.Count == 0
    }
    
    // 'value' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function sortValue_0 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.PolicyLinePattern
    }
    
    // 'value' attribute on DateCell (id=OccurrenceDate_Cell) at ManualLossHistoryLV.pcf: line 36, column 52
    function sortValue_2 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.OccurrenceDate
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ManualLossHistoryLV.pcf: line 41, column 49
    function sortValue_3 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.Description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ManualLossHistoryLV.pcf: line 47, column 51
    function sortValue_4 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.TotalIncurred
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountPaid_Cell) at ManualLossHistoryLV.pcf: line 53, column 48
    function sortValue_5 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.AmountPaid
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountReserved_Cell) at ManualLossHistoryLV.pcf: line 59, column 48
    function sortValue_6 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.AmountResv
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ManualLossHistoryLV.pcf: line 65, column 48
    function sortValue_7 (lossHistoryEntry :  entity.LossHistoryEntry) : java.lang.Object {
      return lossHistoryEntry.LossStatus
    }
    
    // 'toAdd' attribute on RowIterator at ManualLossHistoryLV.pcf: line 22, column 45
    function toAdd_44 (lossHistoryEntry :  entity.LossHistoryEntry) : void {
      policyPeriod.Policy.addToPriorLosses(lossHistoryEntry)
    }
    
    // 'toRemove' attribute on RowIterator at ManualLossHistoryLV.pcf: line 22, column 45
    function toRemove_45 (lossHistoryEntry :  entity.LossHistoryEntry) : void {
      policyPeriod.Policy.removeFromPriorLosses(lossHistoryEntry)
    }
    
    // 'value' attribute on RowIterator at ManualLossHistoryLV.pcf: line 22, column 45
    function value_46 () : entity.LossHistoryEntry[] {
      return policyPeriod.Policy.PriorLosses
    }
    
    // 'visible' attribute on RangeCell (id=PolicyLine_Cell) at ManualLossHistoryLV.pcf: line 31, column 45
    function visible_1 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}