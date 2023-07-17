package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartTxDetailsPanelSet_ContractorsEquipPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 15, column 58
    function initialValue_0 () : java.util.List<entity.IMTransaction> {
      return policyPeriod.IMTransactions.where(\ trans -> trans.Cost typeis ContrEquipPartCovCost).toList()
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 20, column 107
    function initialValue_1 () : java.util.Map<entity.ContractorsEquipment, java.util.Set<entity.IMTransaction>> {
      return policyPeriod.IMTransactions.where(\ trans -> trans.Cost typeis ContrEquipCovCost).toSet().byFixedContractorsEquipment()
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 25, column 23
    function initialValue_2 () : boolean {
      return contractorsEquipmentPartTxs.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 51, column 32
    function sortBy_3 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return (partTransaction.Cost as ContrEquipPartCovCost).ContrEquipPartCov.Pattern
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 54, column 32
    function sortBy_4 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction.AmountBilling
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 115, column 32
    function sortBy_43 (equipment :  entity.ContractorsEquipment) : java.lang.Object {
      return equipment.ContractorsEquipmentNumber
    }
    
    // 'value' attribute on TextCell (id=PartCovTxProration_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 90, column 33
    function sortValue_10 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(partTransaction.Proration, "#0.0000")
    }
    
    // 'value' attribute on DateCell (id=PartCovEffDate_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 77, column 33
    function sortValue_6 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction.EffDate
    }
    
    // 'value' attribute on DateCell (id=PartCovExpDate_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 83, column 33
    function sortValue_8 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction.ExpDate
    }
    
    // '$$sumValue' attribute on RowIterator (id=partCovIterator) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 99, column 33
    function sumValueRoot_17 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction
    }
    
    // 'value' attribute on RowIterator (id=partCovIterator) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 43, column 50
    function value_41 () : entity.IMTransaction[] {
      return contractorsEquipmentPartTxs.toTypedArray()
    }
    
    // 'value' attribute on PanelIterator at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 112, column 57
    function value_49 () : entity.ContractorsEquipment[] {
      return equipmentToTxsMap.Keys.toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 32, column 61
    function visible_42 () : java.lang.Boolean {
      return contractorsEquipmentPartTxs.HasElements
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 71, column 33
    function visible_5 () : java.lang.Boolean {
      return prorated
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 105, column 56
    function visible_50 () : java.lang.Boolean {
      return equipmentToTxsMap.Keys.HasElements
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 27, column 95
    function visible_51 () : java.lang.Boolean {
      return contractorsEquipmentPartTxs.HasElements or equipmentToTxsMap.Keys.HasElements
    }
    
    property get contractorsEquipmentPartTxs () : java.util.List<entity.IMTransaction> {
      return getVariableValue("contractorsEquipmentPartTxs", 0) as java.util.List<entity.IMTransaction>
    }
    
    property set contractorsEquipmentPartTxs ($arg :  java.util.List<entity.IMTransaction>) {
      setVariableValue("contractorsEquipmentPartTxs", 0, $arg)
    }
    
    property get equipmentToTxsMap () : java.util.Map<entity.ContractorsEquipment, java.util.Set<entity.IMTransaction>> {
      return getVariableValue("equipmentToTxsMap", 0) as java.util.Map<entity.ContractorsEquipment, java.util.Set<entity.IMTransaction>>
    }
    
    property set equipmentToTxsMap ($arg :  java.util.Map<entity.ContractorsEquipment, java.util.Set<entity.IMTransaction>>) {
      setVariableValue("equipmentToTxsMap", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMPartTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 48, column 50
    function initialValue_18 () : entity.ContrEquipPartCov {
      return (partTransaction.Cost as ContrEquipPartCovCost).ContrEquipPartCov
    }
    
    // RowIterator (id=partCovIterator) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 43, column 50
    function initializeVariables_40 () : void {
        partCov = (partTransaction.Cost as ContrEquipPartCovCost).ContrEquipPartCov;

    }
    
    // 'value' attribute on TextCell (id=PartCovDescription_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 62, column 56
    function valueRoot_20 () : java.lang.Object {
      return partCov.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 71, column 33
    function valueRoot_23 () : java.lang.Object {
      return partTransaction.Cost
    }
    
    // 'value' attribute on DateCell (id=PartCovEffDate_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 77, column 33
    function valueRoot_27 () : java.lang.Object {
      return partTransaction
    }
    
    // 'value' attribute on TextCell (id=PartCovDescription_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 62, column 56
    function value_19 () : java.lang.String {
      return partCov.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 71, column 33
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return partTransaction.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=PartCovEffDate_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 77, column 33
    function value_26 () : java.util.Date {
      return partTransaction.EffDate
    }
    
    // 'value' attribute on DateCell (id=PartCovExpDate_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 83, column 33
    function value_30 () : java.util.Date {
      return partTransaction.ExpDate
    }
    
    // 'value' attribute on TextCell (id=PartCovTxProration_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 90, column 33
    function value_34 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(partTransaction.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PartCovAmount_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 99, column 33
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return partTransaction.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 71, column 33
    function visible_24 () : java.lang.Boolean {
      return prorated
    }
    
    property get partCov () : entity.ContrEquipPartCov {
      return getVariableValue("partCov", 1) as entity.ContrEquipPartCov
    }
    
    property set partCov ($arg :  entity.ContrEquipPartCov) {
      setVariableValue("partCov", 1, $arg)
    }
    
    property get partTransaction () : entity.IMTransaction {
      return getIteratedValue(1) as entity.IMTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 121, column 77
    function def_onEnter_46 (def :  pcf.RateTxContractorsEquipmentCoveragesLV) : void {
      def.onEnter(equipment, txs)
    }
    
    // 'def' attribute on PanelRef at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 121, column 77
    function def_refreshVariables_47 (def :  pcf.RateTxContractorsEquipmentCoveragesLV) : void {
      def.refreshVariables(equipment, txs)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 119, column 67
    function initialValue_44 () : java.util.Set<entity.IMTransaction> {
      return equipmentToTxsMap.get(equipment)
    }
    
    // PanelIterator at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 112, column 57
    function initializeVariables_48 () : void {
        txs = equipmentToTxsMap.get(equipment);

    }
    
    // 'label' attribute on Verbatim at IMPartTxDetailsPanelSet.ContractorsEquipPart.pcf: line 123, column 50
    function label_45 () : java.lang.String {
      return equipment.DisplayName
    }
    
    property get equipment () : entity.ContractorsEquipment {
      return getIteratedValue(1) as entity.ContractorsEquipment
    }
    
    property get txs () : java.util.Set<entity.IMTransaction> {
      return getVariableValue("txs", 1) as java.util.Set<entity.IMTransaction>
    }
    
    property set txs ($arg :  java.util.Set<entity.IMTransaction>) {
      setVariableValue("txs", 1, $arg)
    }
    
    
  }
  
  
}