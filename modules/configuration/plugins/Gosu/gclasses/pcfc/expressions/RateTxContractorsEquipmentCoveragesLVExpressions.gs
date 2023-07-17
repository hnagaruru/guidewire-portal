package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/RateTxContractorsEquipmentCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTxContractorsEquipmentCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/RateTxContractorsEquipmentCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateTxContractorsEquipmentCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovDescription_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 44, column 24
    function valueRoot_18 () : java.lang.Object {
      return theCoverage.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 51, column 31
    function valueRoot_21 () : java.lang.Object {
      return theTx.Cost
    }
    
    // 'value' attribute on DateCell (id=CovEffDate_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 56, column 31
    function valueRoot_25 () : java.lang.Object {
      return theTx
    }
    
    // 'value' attribute on TextCell (id=CovDescription_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 44, column 24
    function value_17 () : java.lang.String {
      return theCoverage.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 51, column 31
    function value_20 () : gw.pl.currency.MonetaryAmount {
      return theTx.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=CovEffDate_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 56, column 31
    function value_24 () : java.util.Date {
      return theTx.EffDate
    }
    
    // 'value' attribute on DateCell (id=CovExpDate_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 61, column 31
    function value_28 () : java.util.Date {
      return theTx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=CovTxProration_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 66, column 31
    function value_32 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(theTx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CovAmount_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 74, column 40
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return theTx.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 51, column 31
    function visible_22 () : java.lang.Boolean {
      return prorated
    }
    
    property get theTx () : entity.IMTransaction {
      return getIteratedValue(1) as entity.IMTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/RateTxContractorsEquipmentCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTxContractorsEquipmentCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateTxContractorsEquipmentCoveragesLV.pcf: line 18, column 53
    function initialValue_0 () : productmodel.ContractorsEquipSchedCov {
      return equipment.ContractorsEquipSchedCov
    }
    
    // 'initialValue' attribute on Variable at RateTxContractorsEquipmentCoveragesLV.pcf: line 22, column 23
    function initialValue_1 () : boolean {
      return txs.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at RateTxContractorsEquipmentCoveragesLV.pcf: line 32, column 24
    function sortBy_2 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theCoverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RateTxContractorsEquipmentCoveragesLV.pcf: line 35, column 24
    function sortBy_3 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=CovEffDate_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 56, column 31
    function sortValue_5 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx.EffDate
    }
    
    // 'value' attribute on DateCell (id=CovExpDate_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 61, column 31
    function sortValue_7 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=CovTxProration_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 66, column 31
    function sortValue_9 (theTx :  entity.IMTransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(theTx.Proration, "#0.0000")
    }
    
    // '$$sumValue' attribute on RowIterator (id=covIterator) at RateTxContractorsEquipmentCoveragesLV.pcf: line 74, column 40
    function sumValueRoot_16 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx
    }
    
    // 'value' attribute on RowIterator (id=covIterator) at RateTxContractorsEquipmentCoveragesLV.pcf: line 29, column 42
    function value_38 () : entity.IMTransaction[] {
      return txs.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at RateTxContractorsEquipmentCoveragesLV.pcf: line 51, column 31
    function visible_4 () : java.lang.Boolean {
      return prorated
    }
    
    property get equipment () : ContractorsEquipment {
      return getRequireValue("equipment", 0) as ContractorsEquipment
    }
    
    property set equipment ($arg :  ContractorsEquipment) {
      setRequireValue("equipment", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    property get theCoverage () : productmodel.ContractorsEquipSchedCov {
      return getVariableValue("theCoverage", 0) as productmodel.ContractorsEquipSchedCov
    }
    
    property set theCoverage ($arg :  productmodel.ContractorsEquipSchedCov) {
      setVariableValue("theCoverage", 0, $arg)
    }
    
    property get txs () : java.util.Set<IMTransaction> {
      return getRequireValue("txs", 0) as java.util.Set<IMTransaction>
    }
    
    property set txs ($arg :  java.util.Set<IMTransaction>) {
      setRequireValue("txs", 0, $arg)
    }
    
    
  }
  
  
}