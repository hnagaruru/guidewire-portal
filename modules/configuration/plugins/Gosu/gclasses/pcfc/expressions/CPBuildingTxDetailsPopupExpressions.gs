package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingTxDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBuildingTxDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingTxDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBuildingTxDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (buildingTransactions :  java.util.Set<CPTransaction>, building :  CPBuilding) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at CPBuildingTxDetailsPopup.pcf: line 20, column 95
    function initialValue_0 () : java.util.Map<entity.Coverage, java.util.Set<entity.CPTransaction>> {
      return buildingTransactions.byFixedCoverage()
    }
    
    // 'initialValue' attribute on Variable at CPBuildingTxDetailsPopup.pcf: line 24, column 23
    function initialValue_1 () : boolean {
      return buildingTransactions.AnyProrated
    }
    
    // 'title' attribute on Popup (id=CPBuildingTxDetailsPopup) at CPBuildingTxDetailsPopup.pcf: line 8, column 111
    static function title_40 (building :  CPBuilding, buildingTransactions :  java.util.Set<CPTransaction>) : java.lang.Object {
      return DisplayKey.get("Web.PolicyFile.PolicyLine.CP.TxDetails", building, building.CPLocation)
    }
    
    // 'value' attribute on RowIterator at CPBuildingTxDetailsPopup.pcf: line 57, column 41
    function value_39 () : entity.Coverage[] {
      return buildingTxByCoverage.Keys.toTypedArray()
    }
    
    // 'visible' attribute on TextCell (id=Amount_Cell) at CPBuildingTxDetailsPopup.pcf: line 36, column 33
    function visible_2 () : java.lang.Boolean {
      return prorated
    }
    
    override property get CurrentLocation () : pcf.CPBuildingTxDetailsPopup {
      return super.CurrentLocation as pcf.CPBuildingTxDetailsPopup
    }
    
    property get building () : CPBuilding {
      return getVariableValue("building", 0) as CPBuilding
    }
    
    property set building ($arg :  CPBuilding) {
      setVariableValue("building", 0, $arg)
    }
    
    property get buildingTransactions () : java.util.Set<CPTransaction> {
      return getVariableValue("buildingTransactions", 0) as java.util.Set<CPTransaction>
    }
    
    property set buildingTransactions ($arg :  java.util.Set<CPTransaction>) {
      setVariableValue("buildingTransactions", 0, $arg)
    }
    
    property get buildingTxByCoverage () : java.util.Map<entity.Coverage, java.util.Set<entity.CPTransaction>> {
      return getVariableValue("buildingTxByCoverage", 0) as java.util.Map<entity.Coverage, java.util.Set<entity.CPTransaction>>
    }
    
    property set buildingTxByCoverage ($arg :  java.util.Map<entity.Coverage, java.util.Set<entity.CPTransaction>>) {
      setVariableValue("buildingTxByCoverage", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingTxDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CPBuildingTxDetailsPopup.pcf: line 79, column 44
    function valueRoot_16 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on MonetaryAmountCell (id=txAmount_Cell) at CPBuildingTxDetailsPopup.pcf: line 83, column 37
    function valueRoot_19 () : java.lang.Object {
      return transaction.CPCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CPBuildingTxDetailsPopup.pcf: line 79, column 44
    function value_15 () : entity.CPCost {
      return transaction.CPCost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=txAmount_Cell) at CPBuildingTxDetailsPopup.pcf: line 83, column 37
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return transaction.CPCost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=txEffDate_Cell) at CPBuildingTxDetailsPopup.pcf: line 87, column 37
    function value_22 () : java.util.Date {
      return transaction.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at CPBuildingTxDetailsPopup.pcf: line 91, column 37
    function value_26 () : java.util.Date {
      return transaction.ExpDate
    }
    
    // 'value' attribute on TextCell (id=txProration_Cell) at CPBuildingTxDetailsPopup.pcf: line 96, column 37
    function value_30 () : java.lang.Double {
      return transaction.Proration
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at CPBuildingTxDetailsPopup.pcf: line 100, column 52
    function value_34 () : gw.pl.currency.MonetaryAmount {
      return transaction.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=txAmount_Cell) at CPBuildingTxDetailsPopup.pcf: line 83, column 37
    function visible_20 () : java.lang.Boolean {
      return prorated
    }
    
    property get transaction () : entity.CPTransaction {
      return getIteratedValue(2) as entity.CPTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingTxDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBuildingTxDetailsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CPBuildingTxDetailsPopup.pcf: line 61, column 44
    function initialValue_6 () : entity.CPTransaction[] {
      return buildingTxByCoverage.get(cov).toTypedArray()
    }
    
    // RowIterator at CPBuildingTxDetailsPopup.pcf: line 57, column 41
    function initializeVariables_38 () : void {
        transactions = buildingTxByCoverage.get(cov).toTypedArray();

    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingTxDetailsPopup.pcf: line 71, column 30
    function sortBy_7 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction.CPCost.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingTxDetailsPopup.pcf: line 74, column 30
    function sortBy_8 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction.CPCost.EffDate
    }
    
    // '$$sumValue' attribute on RowIterator (id=txIterator) at CPBuildingTxDetailsPopup.pcf: line 100, column 52
    function sumValueRoot_14 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction
    }
    
    // 'footerSumValue' attribute on RowIterator (id=txIterator) at CPBuildingTxDetailsPopup.pcf: line 100, column 52
    function sumValue_13 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction.AmountBilling
    }
    
    // 'value' attribute on RowIterator (id=txIterator) at CPBuildingTxDetailsPopup.pcf: line 68, column 48
    function value_37 () : entity.CPTransaction[] {
      return transactions
    }
    
    // 'visible' attribute on RowIterator (id=txIterator) at CPBuildingTxDetailsPopup.pcf: line 83, column 37
    function visible_9 () : java.lang.Boolean {
      return prorated
    }
    
    property get cov () : entity.Coverage {
      return getIteratedValue(1) as entity.Coverage
    }
    
    property get transactions () : entity.CPTransaction[] {
      return getVariableValue("transactions", 1) as entity.CPTransaction[]
    }
    
    property set transactions ($arg :  entity.CPTransaction[]) {
      setVariableValue("transactions", 1, $arg)
    }
    
    
  }
  
  
}