package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartTxDetailsPanelSet_IMAccountsRecPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ARItemLVExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 52, column 65
    function initialValue_5 () : productmodel.IMAccountReceivableCov {
      return arItem.IMAccountReceivableCov
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 56, column 37
    function initialValue_6 () : boolean {
      return txs.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 64, column 38
    function sortBy_7 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theCoverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 67, column 38
    function sortBy_8 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=CovEffDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 88, column 45
    function sortValue_10 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx.EffDate
    }
    
    // 'value' attribute on DateCell (id=CovExpDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 93, column 45
    function sortValue_12 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=CovTxProration_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 98, column 45
    function sortValue_14 (theTx :  entity.IMTransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(theTx.Proration, "#0.0000")
    }
    
    // '$$sumValue' attribute on RowIterator at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 106, column 54
    function sumValueRoot_21 (theTx :  entity.IMTransaction) : java.lang.Object {
      return theTx
    }
    
    // 'value' attribute on RowIterator at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 61, column 56
    function value_43 () : entity.IMTransaction[] {
      return txs.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 83, column 45
    function visible_9 () : java.lang.Boolean {
      return prorated
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 2) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 2, $arg)
    }
    
    property get theCoverage () : productmodel.IMAccountReceivableCov {
      return getVariableValue("theCoverage", 2) as productmodel.IMAccountReceivableCov
    }
    
    property set theCoverage ($arg :  productmodel.IMAccountReceivableCov) {
      setVariableValue("theCoverage", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 15, column 58
    function initialValue_0 () : java.util.List<entity.IMTransaction> {
      return policyPeriod.IMTransactions.where(\ trans -> trans.Cost typeis IMAccountsRecPartCovCost).toList()
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 20, column 107
    function initialValue_1 () : java.util.Map<entity.IMAccountsReceivable, java.util.Set<entity.IMTransaction>> {
      return policyPeriod.IMTransactions.where(\ trans -> trans.Cost typeis IMAccountsRecCovCost).toSet().byFixedARItem()
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 37, column 32
    function sortBy_2 (arItem :  entity.IMAccountsReceivable) : java.lang.Object {
      return arItem.AccountsRecNumber
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 140, column 32
    function sortBy_47 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return (partTransaction.Cost as IMAccountsRecPartCovCost).IMAccountsRecPartCov.Pattern
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 143, column 32
    function sortBy_48 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PartCovEffDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 165, column 33
    function sortValue_49 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction.EffDate
    }
    
    // 'value' attribute on DateCell (id=PartCovExpDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 171, column 33
    function sortValue_50 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction.ExpDate
    }
    
    // 'value' attribute on TextCell (id=PartCovTxProration_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 177, column 33
    function sortValue_51 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(partTransaction.Proration, "#0.0000")
    }
    
    // '$$sumValue' attribute on RowIterator (id=partCovIterator) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 186, column 33
    function sumValueRoot_53 (partTransaction :  entity.IMTransaction) : java.lang.Object {
      return partTransaction
    }
    
    // 'value' attribute on PanelIterator at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 34, column 57
    function value_45 () : entity.IMAccountsReceivable[] {
      return arItemToTxsMap.Keys.toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=partCovIterator) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 127, column 50
    function value_78 () : entity.IMTransaction[] {
      return accountsRecPartTxs.toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 27, column 53
    function visible_46 () : java.lang.Boolean {
      return arItemToTxsMap.Keys.HasElements
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 115, column 52
    function visible_79 () : java.lang.Boolean {
      return accountsRecPartTxs.HasElements
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 22, column 83
    function visible_80 () : java.lang.Boolean {
      return arItemToTxsMap.Keys.HasElements or accountsRecPartTxs.HasElements
    }
    
    property get accountsRecPartTxs () : java.util.List<entity.IMTransaction> {
      return getVariableValue("accountsRecPartTxs", 0) as java.util.List<entity.IMTransaction>
    }
    
    property set accountsRecPartTxs ($arg :  java.util.List<entity.IMTransaction>) {
      setVariableValue("accountsRecPartTxs", 0, $arg)
    }
    
    property get arItemToTxsMap () : java.util.Map<entity.IMAccountsReceivable, java.util.Set<entity.IMTransaction>> {
      return getVariableValue("arItemToTxsMap", 0) as java.util.Map<entity.IMAccountsReceivable, java.util.Set<entity.IMTransaction>>
    }
    
    property set arItemToTxsMap ($arg :  java.util.Map<entity.IMAccountsReceivable, java.util.Set<entity.IMTransaction>>) {
      setVariableValue("arItemToTxsMap", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IMPartTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 132, column 53
    function initialValue_54 () : entity.IMAccountsRecPartCov {
      return (partTransaction.Cost as IMAccountsRecPartCovCost).IMAccountsRecPartCov
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 137, column 33
    function initialValue_55 () : boolean {
      return accountsRecPartTxs.AnyProrated
    }
    
    // RowIterator (id=partCovIterator) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 127, column 50
    function initializeVariables_77 () : void {
        partCov = (partTransaction.Cost as IMAccountsRecPartCovCost).IMAccountsRecPartCov;
  prorated = accountsRecPartTxs.AnyProrated;

    }
    
    // 'value' attribute on TextCell (id=PartCovDescription_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 151, column 56
    function valueRoot_57 () : java.lang.Object {
      return partCov.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 159, column 33
    function valueRoot_61 () : java.lang.Object {
      return partTransaction.Cost
    }
    
    // 'value' attribute on DateCell (id=PartCovEffDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 165, column 33
    function valueRoot_65 () : java.lang.Object {
      return partTransaction
    }
    
    // 'value' attribute on TextCell (id=PartCovDescription_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 151, column 56
    function value_56 () : java.lang.String {
      return partCov.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 159, column 33
    function value_60 () : gw.pl.currency.MonetaryAmount {
      return partTransaction.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=PartCovEffDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 165, column 33
    function value_64 () : java.util.Date {
      return partTransaction.EffDate
    }
    
    // 'value' attribute on DateCell (id=PartCovExpDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 171, column 33
    function value_68 () : java.util.Date {
      return partTransaction.ExpDate
    }
    
    // 'value' attribute on TextCell (id=PartCovTxProration_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 177, column 33
    function value_72 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(partTransaction.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PartCovAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 186, column 33
    function value_74 () : gw.pl.currency.MonetaryAmount {
      return partTransaction.AmountBilling
    }
    
    // 'valueVisible' attribute on MonetaryAmountCell (id=PartCovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 159, column 33
    function visible_59 () : java.lang.Boolean {
      return prorated
    }
    
    property get partCov () : entity.IMAccountsRecPartCov {
      return getVariableValue("partCov", 1) as entity.IMAccountsRecPartCov
    }
    
    property set partCov ($arg :  entity.IMAccountsRecPartCov) {
      setVariableValue("partCov", 1, $arg)
    }
    
    property get partTransaction () : entity.IMTransaction {
      return getIteratedValue(1) as entity.IMTransaction
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 1) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ARItemLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovDescription_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 76, column 38
    function valueRoot_23 () : java.lang.Object {
      return theCoverage.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 83, column 45
    function valueRoot_26 () : java.lang.Object {
      return theTx.Cost
    }
    
    // 'value' attribute on DateCell (id=CovEffDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 88, column 45
    function valueRoot_30 () : java.lang.Object {
      return theTx
    }
    
    // 'value' attribute on TextCell (id=CovDescription_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 76, column 38
    function value_22 () : java.lang.String {
      return theCoverage.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 83, column 45
    function value_25 () : gw.pl.currency.MonetaryAmount {
      return theTx.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=CovEffDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 88, column 45
    function value_29 () : java.util.Date {
      return theTx.EffDate
    }
    
    // 'value' attribute on DateCell (id=CovExpDate_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 93, column 45
    function value_33 () : java.util.Date {
      return theTx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=CovTxProration_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 98, column 45
    function value_37 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(theTx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CovAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 106, column 54
    function value_40 () : gw.pl.currency.MonetaryAmount {
      return theTx.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=CovTermAmount_Cell) at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 83, column 45
    function visible_27 () : java.lang.Boolean {
      return prorated
    }
    
    property get theTx () : entity.IMTransaction {
      return getIteratedValue(3) as entity.IMTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 41, column 67
    function initialValue_3 () : java.util.Set<entity.IMTransaction> {
      return arItemToTxsMap.get(arItem)
    }
    
    // PanelIterator at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 34, column 57
    function initializeVariables_44 () : void {
        txs = arItemToTxsMap.get(arItem);

    }
    
    // 'label' attribute on Verbatim at IMPartTxDetailsPanelSet.IMAccountsRecPart.pcf: line 44, column 47
    function label_4 () : java.lang.String {
      return arItem.DisplayName
    }
    
    property get arItem () : entity.IMAccountsReceivable {
      return getIteratedValue(1) as entity.IMAccountsReceivable
    }
    
    property get txs () : java.util.Set<entity.IMTransaction> {
      return getVariableValue("txs", 1) as java.util.Set<entity.IMTransaction>
    }
    
    property set txs ($arg :  java.util.Set<entity.IMTransaction>) {
      setVariableValue("txs", 1, $arg)
    }
    
    
  }
  
  
}