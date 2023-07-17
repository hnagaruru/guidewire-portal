package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARItemDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMARItemDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARItemDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMARItemDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMARItemDV.pcf: line 20, column 35
    function initialValue_0 () : entity.IMBuilding[] {
      return accountsRecPart.getAvailableBuildings().sortBy(\ imb -> imb.Building.PolicyLocation.LocationNum * 100 + imb.Building.BuildingNum)
    }
    
    // 'sortBy' attribute on IteratorSort at IMARItemDV.pcf: line 43, column 30
    function sortBy_2 (theAR :  entity.IMAccountsReceivable) : java.lang.Object {
      return theAR.AccountsRecNumber
    }
    
    // 'value' attribute on TextCell (id=ARnumcell_Cell) at IMARItemDV.pcf: line 50, column 48
    function sortValue_3 (theAR :  entity.IMAccountsReceivable) : java.lang.Object {
      return theAR.AccountsRecNumber
    }
    
    // 'value' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function sortValue_4 (theAR :  entity.IMAccountsReceivable) : java.lang.Object {
      return theAR.IMBuilding
    }
    
    // 'value' attribute on TypeKeyCell (id=containercell_Cell) at IMARItemDV.pcf: line 70, column 53
    function sortValue_5 (theAR :  entity.IMAccountsReceivable) : java.lang.Object {
      return theAR.ReceptacleType
    }
    
    // 'value' attribute on TextCell (id=ARLlimitCell_Cell) at IMARItemDV.pcf: line 94, column 51
    function sortValue_6 (theAR :  entity.IMAccountsReceivable) : java.lang.Object {
      return theAR.IMAccountReceivableCov.IMAccountsReceivableLimitTerm.Value
    }
    
    // 'value' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function sortValue_7 (theAR :  entity.IMAccountsReceivable) : java.lang.Object {
      return theAR.PreferredCoverageCurrency
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ARreceivablesiterator) at IMARItemDV.pcf: line 40, column 55
    function toCreateAndAdd_45 () : entity.IMAccountsReceivable {
      return accountsRecPart.createAndAddARAndCoverage()
    }
    
    // 'toRemove' attribute on RowIterator (id=ARreceivablesiterator) at IMARItemDV.pcf: line 40, column 55
    function toRemove_46 (theAR :  entity.IMAccountsReceivable) : void {
      accountsRecPart.removeIMAccountsRecAndCoverage( theAR )
    }
    
    // 'value' attribute on RowIterator (id=ARreceivablesiterator) at IMARItemDV.pcf: line 40, column 55
    function value_47 () : entity.IMAccountsReceivable[] {
      return accountsRecPart.IMAccountsReceivables
    }
    
    // 'visible' attribute on Toolbar at IMARItemDV.pcf: line 25, column 33
    function visible_1 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function visible_8 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get accountsRecPart () : IMAccountsRecPart {
      return getRequireValue("accountsRecPart", 0) as IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  IMAccountsRecPart) {
      setRequireValue("accountsRecPart", 0, $arg)
    }
    
    property get availableBuildings () : entity.IMBuilding[] {
      return getVariableValue("availableBuildings", 0) as entity.IMBuilding[]
    }
    
    property set availableBuildings ($arg :  entity.IMBuilding[]) {
      setVariableValue("availableBuildings", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    function getLocationBuildingDisplayName(b : IMBuilding) : String {
      return b.IMLocation.DisplayName + " / " + b.DisplayName
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARItemDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMARItemDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      theAR.IMBuilding = (__VALUE_TO_SET as entity.IMBuilding)
    }
    
    // 'value' attribute on TypeKeyCell (id=containercell_Cell) at IMARItemDV.pcf: line 70, column 53
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      theAR.ReceptacleType = (__VALUE_TO_SET as typekey.ReceptacleType)
    }
    
    // 'value' attribute on CheckBoxCell (id=forwarededCell_Cell) at IMARItemDV.pcf: line 77, column 35
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      theAR.ForwardToHomeOffice = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=duplicatedCell_Cell) at IMARItemDV.pcf: line 86, column 35
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      theAR.PercentDuplicated = (__VALUE_TO_SET as typekey.PercentDuplicated)
    }
    
    // 'value' attribute on TextCell (id=ARLlimitCell_Cell) at IMARItemDV.pcf: line 94, column 51
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      theAR.IMAccountReceivableCov.IMAccountsReceivableLimitTerm.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      theAR.PreferredCoverageCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'onChange' attribute on PostOnChange at IMARItemDV.pcf: line 105, column 129
    function onChange_36 () : void {
      gw.web.policy.CoverableCoverageCurrencySynchronizer.synchronizeCurrencies(theAR, jobWizardHelper)
    }
    
    // 'optionLabel' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function optionLabel_15 (VALUE :  entity.IMBuilding) : java.lang.String {
      return getLocationBuildingDisplayName(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function valueRange_16 () : java.lang.Object {
      return availableBuildings
    }
    
    // 'valueRange' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function valueRange_40 () : java.lang.Object {
      return gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(theAR)
    }
    
    // 'value' attribute on TextCell (id=ARnumcell_Cell) at IMARItemDV.pcf: line 50, column 48
    function valueRoot_10 () : java.lang.Object {
      return theAR
    }
    
    // 'value' attribute on TextCell (id=ARLlimitCell_Cell) at IMARItemDV.pcf: line 94, column 51
    function valueRoot_34 () : java.lang.Object {
      return theAR.IMAccountReceivableCov.IMAccountsReceivableLimitTerm
    }
    
    // 'value' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function value_12 () : entity.IMBuilding {
      return theAR.IMBuilding
    }
    
    // 'value' attribute on TypeKeyCell (id=containercell_Cell) at IMARItemDV.pcf: line 70, column 53
    function value_20 () : typekey.ReceptacleType {
      return theAR.ReceptacleType
    }
    
    // 'value' attribute on CheckBoxCell (id=forwarededCell_Cell) at IMARItemDV.pcf: line 77, column 35
    function value_24 () : java.lang.Boolean {
      return theAR.ForwardToHomeOffice
    }
    
    // 'value' attribute on TypeKeyCell (id=duplicatedCell_Cell) at IMARItemDV.pcf: line 86, column 35
    function value_28 () : typekey.PercentDuplicated {
      return theAR.PercentDuplicated
    }
    
    // 'value' attribute on TextCell (id=ARLlimitCell_Cell) at IMARItemDV.pcf: line 94, column 51
    function value_32 () : java.math.BigDecimal {
      return theAR.IMAccountReceivableCov.IMAccountsReceivableLimitTerm.Value
    }
    
    // 'value' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function value_37 () : typekey.Currency {
      return theAR.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextCell (id=ARnumcell_Cell) at IMARItemDV.pcf: line 50, column 48
    function value_9 () : java.lang.Integer {
      return theAR.AccountsRecNumber
    }
    
    // 'valueRange' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.IMBuilding[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.IMBuilding>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function verifyValueRangeIsAllowedType_41 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=buildingcell_Cell) at IMARItemDV.pcf: line 62, column 48
    function verifyValueRange_18 () : void {
      var __valueRangeArg = availableBuildings
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function verifyValueRange_42 () : void {
      var __valueRangeArg = gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(theAR)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=ARCurrency_Cell) at IMARItemDV.pcf: line 103, column 74
    function visible_43 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get theAR () : entity.IMAccountsReceivable {
      return getIteratedValue(1) as entity.IMAccountsReceivable
    }
    
    
  }
  
  
}