package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/divide/DividePolicyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DividePolicyPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/divide/DividePolicyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardIteratorEntryExpressionsImpl extends DividePolicyPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at DividePolicyPanelSet.pcf: line 84, column 38
    function def_onEnter_34 (def :  pcf.CopyPolicyDV_PersonalAutoLine) : void {
      def.onEnter(dividePolicySelection.Copier)
    }
    
    // 'def' attribute on PanelRef at DividePolicyPanelSet.pcf: line 84, column 38
    function def_onEnter_36 (def :  pcf.CopyPolicyDV_default) : void {
      def.onEnter(dividePolicySelection.Copier)
    }
    
    // 'def' attribute on PanelRef at DividePolicyPanelSet.pcf: line 84, column 38
    function def_refreshVariables_35 (def :  pcf.CopyPolicyDV_PersonalAutoLine) : void {
      def.refreshVariables(dividePolicySelection.Copier)
    }
    
    // 'def' attribute on PanelRef at DividePolicyPanelSet.pcf: line 84, column 38
    function def_refreshVariables_37 (def :  pcf.CopyPolicyDV_default) : void {
      def.refreshVariables(dividePolicySelection.Copier)
    }
    
    // 'mode' attribute on PanelRef at DividePolicyPanelSet.pcf: line 84, column 38
    function mode_38 () : java.lang.Object {
      return line.PatternCode
    }
    
    // 'title' attribute on Card (id=LineCard) at DividePolicyPanelSet.pcf: line 81, column 36
    function title_42 () : java.lang.String {
      return line.DisplayName
    }
    
    // 'value' attribute on HiddenInput (id=PolicyLine_Input) at DividePolicyPanelSet.pcf: line 91, column 47
    function valueRoot_40 () : java.lang.Object {
      return line
    }
    
    // 'value' attribute on HiddenInput (id=PolicyLine_Input) at DividePolicyPanelSet.pcf: line 91, column 47
    function value_39 () : java.lang.String {
      return line.PatternCode
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/divide/DividePolicyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DividePolicyPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function action_1 () : void {
      AccountSearchPopup.push(periodToDivide.Policy.Account)
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at DividePolicyPanelSet.pcf: line 38, column 78
    function action_11 () : void {
      AccountFileDoRetrievalForward.go(dividePolicySelection.ProducerSelection.Account.AccountNumber)
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at DividePolicyPanelSet.pcf: line 38, column 78
    function action_dest_12 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(dividePolicySelection.ProducerSelection.Account.AccountNumber)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function action_dest_2 () : pcf.api.Destination {
      return pcf.AccountSearchPopup.createDestination(periodToDivide.Policy.Account)
    }
    
    // 'conversionExpression' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function conversionExpression_4 (PickedValue :  Account) : entity.Account {
      return Account.checkedFindByNumber(PickedValue.AccountNumber, \ a -> perm.Account.newSubmission(a))
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at DividePolicyPanelSet.pcf: line 47, column 42
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      dividePolicySelection.QuoteType = (__VALUE_TO_SET as typekey.QuoteType)
    }
    
    // 'value' attribute on DateInput (id=DefaultPPEffDate_Input) at DividePolicyPanelSet.pcf: line 53, column 77
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      dividePolicySelection.ProducerSelection.DefaultPPEffDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      dividePolicySelection.PrimaryNamedInsuredCandidate = (__VALUE_TO_SET as entity.AccountContact)
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      dividePolicySelection.ProducerSelection.Account = (__VALUE_TO_SET as entity.Account)
    }
    
    // 'inputConversion' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function inputConversion_5 (VALUE :  java.lang.String) : java.lang.Object {
      return Account.checkedFindByNumber(VALUE, \ a -> perm.Account.newSubmission(a))
    }
    
    // 'onChange' attribute on PostOnChange at DividePolicyPanelSet.pcf: line 30, column 47
    function onChange_0 () : void {
      handleAccountChange()
    }
    
    // 'onPick' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function onPick_3 (PickedValue :  Account) : void {
      handleAccountChange()
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function valueRange_29 () : java.lang.Object {
      return pniCandidates()
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at DividePolicyPanelSet.pcf: line 38, column 78
    function valueRoot_14 () : java.lang.Object {
      return dividePolicySelection.ProducerSelection.Account.AccountHolder
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at DividePolicyPanelSet.pcf: line 47, column 42
    function valueRoot_19 () : java.lang.Object {
      return dividePolicySelection
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function valueRoot_8 () : java.lang.Object {
      return dividePolicySelection.ProducerSelection
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at DividePolicyPanelSet.pcf: line 38, column 78
    function value_13 () : entity.AccountContact {
      return dividePolicySelection.ProducerSelection.Account.AccountHolder.AccountContact
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at DividePolicyPanelSet.pcf: line 47, column 42
    function value_17 () : typekey.QuoteType {
      return dividePolicySelection.QuoteType
    }
    
    // 'value' attribute on DateInput (id=DefaultPPEffDate_Input) at DividePolicyPanelSet.pcf: line 53, column 77
    function value_21 () : java.util.Date {
      return dividePolicySelection.ProducerSelection.DefaultPPEffDate
    }
    
    // 'value' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function value_26 () : entity.AccountContact {
      return dividePolicySelection.PrimaryNamedInsuredCandidate
    }
    
    // 'value' attribute on CardIterator (id=Lines) at DividePolicyPanelSet.pcf: line 78, column 41
    function value_43 () : entity.PolicyLine[] {
      return periodToDivide.Lines
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at DividePolicyPanelSet.pcf: line 28, column 38
    function value_6 () : entity.Account {
      return dividePolicySelection.ProducerSelection.Account
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function verifyValueRangeIsAllowedType_30 ($$arg :  entity.AccountContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function verifyValueRangeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult<entity.AccountContact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryNamedInsuredCandidate_Input) at DividePolicyPanelSet.pcf: line 63, column 78
    function verifyValueRange_31 () : void {
      var __valueRangeArg = pniCandidates()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=AccountName_Input) at DividePolicyPanelSet.pcf: line 38, column 78
    function visible_10 () : java.lang.Boolean {
      return dividePolicySelection.ProducerSelection.Account != null
    }
    
    property get dividePolicySelection () : gw.product.DividePolicySelection {
      return getRequireValue("dividePolicySelection", 0) as gw.product.DividePolicySelection
    }
    
    property set dividePolicySelection ($arg :  gw.product.DividePolicySelection) {
      setRequireValue("dividePolicySelection", 0, $arg)
    }
    
    property get periodToDivide () : PolicyPeriod {
      return getRequireValue("periodToDivide", 0) as PolicyPeriod
    }
    
    property set periodToDivide ($arg :  PolicyPeriod) {
      setRequireValue("periodToDivide", 0, $arg)
    }
    
    function pniCandidates() : AccountContact[] {
      var result : java.util.List<AccountContact> = new java.util.ArrayList<AccountContact>()
      if (dividePolicySelection.ProducerSelection.Account != null and periodToDivide.Policy.Product != null){
        result = dividePolicySelection.ProducerSelection.Account.findPolicyNamedInsuredCandidates(periodToDivide.Policy.Product).toList().orderBy(\ ac -> ac.DisplayName)
      }
      return result.toTypedArray()
    }
    
    function handleAccountChange() {
      try {
        dividePolicySelection.handleAccountChange()
      } catch (ise : java.lang.IllegalStateException) {  // might occur because of product unavailability
        throw new gw.api.util.DisplayableException(ise.LocalizedMessage)
      }
    }
    
    
  }
  
  
}