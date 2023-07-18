package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMSignsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMSignsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMSignsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMSignsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at IMSignsPanelSet.pcf: line 25, column 44
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      imSignPart.Coinsurance = (__VALUE_TO_SET as typekey.Coinsurance)
    }
    
    // 'sortBy' attribute on IteratorSort at IMSignsPanelSet.pcf: line 51, column 34
    function sortBy_4 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.SignNumber
    }
    
    // 'value' attribute on TextCell (id=imSignLimit_Cell) at IMSignsPanelSet.pcf: line 98, column 35
    function sortValue_10 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.IMSignCov.IMSignLimitTerm.Value
    }
    
    // 'value' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function sortValue_11 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.IMSignCov.IMSignDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function sortValue_12 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextCell (id=imSignNum_Cell) at IMSignsPanelSet.pcf: line 59, column 35
    function sortValue_5 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.SignNumber
    }
    
    // 'value' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function sortValue_6 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.IMLocation
    }
    
    // 'value' attribute on TextCell (id=imSignDescription_Cell) at IMSignsPanelSet.pcf: line 75, column 50
    function sortValue_7 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=imSignType_Cell) at IMSignsPanelSet.pcf: line 84, column 35
    function sortValue_8 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.SignType
    }
    
    // 'value' attribute on CheckBoxCell (id=imSignInterior_Cell) at IMSignsPanelSet.pcf: line 89, column 47
    function sortValue_9 (theSign :  entity.IMSign) : java.lang.Object {
      return theSign.Interior
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at IMSignsPanelSet.pcf: line 48, column 45
    function toCreateAndAdd_56 () : entity.IMSign {
      return imSignPart.createAndAddIMSignAndCoverage()
    }
    
    // 'toRemove' attribute on RowIterator at IMSignsPanelSet.pcf: line 48, column 45
    function toRemove_57 (theSign :  entity.IMSign) : void {
      imSignPart.removeIMSignAndCoverage( theSign )
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at IMSignsPanelSet.pcf: line 25, column 44
    function valueRoot_2 () : java.lang.Object {
      return imSignPart
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at IMSignsPanelSet.pcf: line 25, column 44
    function value_0 () : typekey.Coinsurance {
      return imSignPart.Coinsurance
    }
    
    // 'value' attribute on RowIterator at IMSignsPanelSet.pcf: line 48, column 45
    function value_58 () : entity.IMSign[] {
      return imSignPart.IMSigns
    }
    
    // 'visible' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function visible_13 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get imSignPart () : IMSignPart {
      return getRequireValue("imSignPart", 0) as IMSignPart
    }
    
    property set imSignPart ($arg :  IMSignPart) {
      setRequireValue("imSignPart", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMSignsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMSignsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.IMLocation = (__VALUE_TO_SET as entity.IMLocation)
    }
    
    // 'value' attribute on TextCell (id=imSignDescription_Cell) at IMSignsPanelSet.pcf: line 75, column 50
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=imSignType_Cell) at IMSignsPanelSet.pcf: line 84, column 35
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.SignType = (__VALUE_TO_SET as typekey.SignType)
    }
    
    // 'value' attribute on CheckBoxCell (id=imSignInterior_Cell) at IMSignsPanelSet.pcf: line 89, column 47
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.Interior = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=imSignLimit_Cell) at IMSignsPanelSet.pcf: line 98, column 35
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.IMSignCov.IMSignLimitTerm.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.IMSignCov.IMSignDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionIMSignDeductibleType>)
    }
    
    // 'value' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      theSign.PreferredCoverageCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'onChange' attribute on PostOnChange at IMSignsPanelSet.pcf: line 119, column 135
    function onChange_47 () : void {
      gw.web.policy.CoverableCoverageCurrencySynchronizer.synchronizeCurrencies(theSign, jobWizardHelper)
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function valueRange_20 () : java.lang.Object {
      return policyPeriod.IMLine.IMLocations
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function valueRange_43 () : java.lang.Object {
      return theSign.IMSignCov.IMSignDeductibleTerm.Pattern.Options
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function valueRange_51 () : java.lang.Object {
      return gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(theSign)
    }
    
    // 'value' attribute on TextCell (id=imSignNum_Cell) at IMSignsPanelSet.pcf: line 59, column 35
    function valueRoot_15 () : java.lang.Object {
      return theSign
    }
    
    // 'value' attribute on TextCell (id=imSignLimit_Cell) at IMSignsPanelSet.pcf: line 98, column 35
    function valueRoot_38 () : java.lang.Object {
      return theSign.IMSignCov.IMSignLimitTerm
    }
    
    // 'value' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function valueRoot_42 () : java.lang.Object {
      return theSign.IMSignCov.IMSignDeductibleTerm
    }
    
    // 'value' attribute on TextCell (id=imSignNum_Cell) at IMSignsPanelSet.pcf: line 59, column 35
    function value_14 () : java.lang.Integer {
      return theSign.SignNumber
    }
    
    // 'value' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function value_17 () : entity.IMLocation {
      return theSign.IMLocation
    }
    
    // 'value' attribute on TextCell (id=imSignDescription_Cell) at IMSignsPanelSet.pcf: line 75, column 50
    function value_24 () : java.lang.String {
      return theSign.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=imSignType_Cell) at IMSignsPanelSet.pcf: line 84, column 35
    function value_28 () : typekey.SignType {
      return theSign.SignType
    }
    
    // 'value' attribute on CheckBoxCell (id=imSignInterior_Cell) at IMSignsPanelSet.pcf: line 89, column 47
    function value_32 () : java.lang.Boolean {
      return theSign.Interior
    }
    
    // 'value' attribute on TextCell (id=imSignLimit_Cell) at IMSignsPanelSet.pcf: line 98, column 35
    function value_36 () : java.math.BigDecimal {
      return theSign.IMSignCov.IMSignLimitTerm.Value
    }
    
    // 'value' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function value_40 () : gw.api.productmodel.CovTermOpt<productmodel.OptionIMSignDeductibleType> {
      return theSign.IMSignCov.IMSignDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function value_48 () : typekey.Currency {
      return theSign.PreferredCoverageCurrency
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.IMLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.IMLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionIMSignDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function verifyValueRangeIsAllowedType_52 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignLocation_Cell) at IMSignsPanelSet.pcf: line 69, column 52
    function verifyValueRange_22 () : void {
      var __valueRangeArg = policyPeriod.IMLine.IMLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignDeductible_Cell) at IMSignsPanelSet.pcf: line 107, column 35
    function verifyValueRange_45 () : void {
      var __valueRangeArg = theSign.IMSignCov.IMSignDeductibleTerm.Pattern.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function verifyValueRange_53 () : void {
      var __valueRangeArg = gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(theSign)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=imSignCoverageCurrency_Cell) at IMSignsPanelSet.pcf: line 117, column 34
    function visible_54 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get theSign () : entity.IMSign {
      return getIteratedValue(1) as entity.IMSign
    }
    
    
  }
  
  
}