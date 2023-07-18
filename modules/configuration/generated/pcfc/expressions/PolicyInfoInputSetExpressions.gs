package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/PolicyInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyInfoInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/PolicyInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 128, column 67
    function action_65 () : void {
      if (perm.PolicyPeriod.view(rewriteSourcePolicy.LatestBoundPeriod)) {pcf.PolicyFileForward.go(rewriteSourcePolicy.LatestBoundPeriod.PolicyNumber)}
    }
    
    // 'action' attribute on TextInput (id=DividedSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 134, column 66
    function action_70 () : void {
      pcf.PolicyFileForward.go(dividedSourcePolicy.LatestBoundPeriod.PolicyNumber)
    }
    
    // 'pickLocation' attribute on PickerInput (id=AffinityGroup_Input) at PolicyInfoInputSet.pcf: line 146, column 41
    function action_75 () : void {
      AffinityGroupSearchPopup.push(policyPeriod)
    }
    
    // 'action' attribute on TextInput (id=DividedSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 134, column 66
    function action_dest_71 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(dividedSourcePolicy.LatestBoundPeriod.PolicyNumber)
    }
    
    // 'pickLocation' attribute on PickerInput (id=AffinityGroup_Input) at PolicyInfoInputSet.pcf: line 146, column 41
    function action_dest_76 () : pcf.api.Destination {
      return pcf.AffinityGroupSearchPopup.createDestination(policyPeriod)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyInfoInputSet.pcf: line 70, column 29
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      effectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyInfoInputSet.pcf: line 82, column 38
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.PeriodEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=WrittenDate_Input) at PolicyInfoInputSet.pcf: line 92, column 34
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.WrittenDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=RateAsOfDate_Input) at PolicyInfoInputSet.pcf: line 101, column 41
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.RateAsOfDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=BaseState_Input) at PolicyInfoInputSet.pcf: line 112, column 87
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.BaseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at PolicyInfoInputSet.pcf: line 122, column 112
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.Policy.PrimaryLanguage = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on PickerInput (id=AffinityGroup_Input) at PolicyInfoInputSet.pcf: line 146, column 41
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.PolicyTerm.AffinityGroup = (__VALUE_TO_SET as entity.AffinityGroup)
    }
    
    // 'value' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      termType = (__VALUE_TO_SET as typekey.TermType)
    }
    
    // 'editable' attribute on DateInput (id=EffectiveDate_Input) at PolicyInfoInputSet.pcf: line 70, column 29
    function editable_18 () : java.lang.Boolean {
      return !(policyPeriod.Job typeis PolicyChange) and policyPeriod.CanUpdatePeriodDates
    }
    
    // 'editable' attribute on DateInput (id=ExpirationDate_Input) at PolicyInfoInputSet.pcf: line 82, column 38
    function editable_26 () : java.lang.Boolean {
      return gw.pcf.job.PolicyInfoHelper.isExpirationDateEditable(policyPeriod, termType)
    }
    
    // 'editable' attribute on DateInput (id=WrittenDate_Input) at PolicyInfoInputSet.pcf: line 92, column 34
    function editable_34 () : java.lang.Boolean {
      return perm.System.editwrittendate
    }
    
    // 'editable' attribute on DateInput (id=RateAsOfDate_Input) at PolicyInfoInputSet.pcf: line 101, column 41
    function editable_42 () : java.lang.Boolean {
      return perm.System.editrateasofdate and not(policyPeriod.JobProcess typeis gw.job.NewTermProcess)
    }
    
    // 'editable' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function editable_6 () : java.lang.Boolean {
      return policyPeriod.CanUpdatePeriodDates
    }
    
    // 'editable' attribute on InputSet (id=PolicyInfoInputSet) at PolicyInfoInputSet.pcf: line 7, column 29
    function editable_82 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoInputSet.pcf: line 24, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoInputSet.pcf: line 29, column 30
    function initialValue_1 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoInputSet.pcf: line 33, column 32
    function initialValue_2 () : typekey.TermType {
      return policyPeriod.TermType
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoInputSet.pcf: line 37, column 22
    function initialValue_3 () : Policy {
      return policyPeriod.Policy.RewrittenToNewAccountSource
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoInputSet.pcf: line 41, column 22
    function initialValue_4 () : Policy {
      return policyPeriod.Policy.DividedSourcePolicy
    }
    
    // 'inputConversion' attribute on PickerInput (id=AffinityGroup_Input) at PolicyInfoInputSet.pcf: line 146, column 41
    function inputConversion_77 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.web.policy.PolicyInfoUIHelper.performAffinityGroupSearch(VALUE, policyPeriod)
    }
    
    // 'onChange' attribute on PostOnChange at PolicyInfoInputSet.pcf: line 73, column 103
    function onChange_17 () : void {
      gw.pcf.job.PolicyInfoHelper.setPeriodDates(policyPeriod, effectiveDate, termType)
    }
    
    // 'onChange' attribute on PostOnChange at PolicyInfoInputSet.pcf: line 84, column 54
    function onChange_25 () : void {
      termType = policyPeriod.TermType
    }
    
    // 'onChange' attribute on PostOnChange at PolicyInfoInputSet.pcf: line 56, column 54
    function onChange_5 () : void {
      policyPeriod.TermType = termType
    }
    
    // 'required' attribute on DateInput (id=RateAsOfDate_Input) at PolicyInfoInputSet.pcf: line 101, column 41
    function required_44 () : java.lang.Boolean {
      return not(policyPeriod.JobProcess typeis gw.job.NewTermProcess)
    }
    
    // 'required' attribute on TypeKeyInput (id=BaseState_Input) at PolicyInfoInputSet.pcf: line 112, column 87
    function required_52 () : java.lang.Boolean {
      return policyPeriod.Lines.hasMatch(\ line -> line.BaseStateRequired)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at PolicyInfoInputSet.pcf: line 70, column 29
    function validationExpression_19 () : java.lang.Object {
      return gw.policy.PolicyPeriodValidation.validateDateForRewriteNewAccount(policyPeriod) 
    }
    
    // 'validationExpression' attribute on DateInput (id=ExpirationDate_Input) at PolicyInfoInputSet.pcf: line 82, column 38
    function validationExpression_27 () : java.lang.Object {
      return gw.policy.PolicyPeriodValidation.validatePeriodEndDoesNotOverlapRewrittenNewAccountPolicy(policyPeriod) 
    }
    
    // 'validationExpression' attribute on DateInput (id=RateAsOfDate_Input) at PolicyInfoInputSet.pcf: line 101, column 41
    function validationExpression_43 () : java.lang.Object {
      return policyPeriod.RateAsOfDate.beforeOrEqual(java.util.Date.CurrentDate) ? null : DisplayKey.get("Web.Rating.Errors.FutureRateAsOfDate")
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function valueRange_9 () : java.lang.Object {
      return gw.pcf.job.PolicyInfoHelper.getTermTypes(policyPeriod)
    }
    
    // 'value' attribute on TextInput (id=TermNumber_Input) at PolicyInfoInputSet.pcf: line 62, column 38
    function valueRoot_15 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at PolicyInfoInputSet.pcf: line 122, column 112
    function valueRoot_61 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on PickerInput (id=AffinityGroup_Input) at PolicyInfoInputSet.pcf: line 146, column 41
    function valueRoot_80 () : java.lang.Object {
      return policyPeriod.PolicyTerm
    }
    
    // 'value' attribute on TextInput (id=TermNumber_Input) at PolicyInfoInputSet.pcf: line 62, column 38
    function value_14 () : java.lang.Integer {
      return policyPeriod.TermNumber
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyInfoInputSet.pcf: line 70, column 29
    function value_20 () : java.util.Date {
      return effectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyInfoInputSet.pcf: line 82, column 38
    function value_28 () : java.util.Date {
      return policyPeriod.PeriodEnd
    }
    
    // 'value' attribute on DateInput (id=WrittenDate_Input) at PolicyInfoInputSet.pcf: line 92, column 34
    function value_36 () : java.util.Date {
      return policyPeriod.WrittenDate
    }
    
    // 'value' attribute on DateInput (id=RateAsOfDate_Input) at PolicyInfoInputSet.pcf: line 101, column 41
    function value_45 () : java.util.Date {
      return policyPeriod.RateAsOfDate
    }
    
    // 'value' attribute on TypeKeyInput (id=BaseState_Input) at PolicyInfoInputSet.pcf: line 112, column 87
    function value_53 () : typekey.Jurisdiction {
      return policyPeriod.BaseState
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at PolicyInfoInputSet.pcf: line 122, column 112
    function value_59 () : typekey.LanguageType {
      return policyPeriod.Policy.PrimaryLanguage
    }
    
    // 'value' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 128, column 67
    function value_66 () : java.lang.String {
      return DisplayKey.get("Web.PolicyFile.Summary.PolicyNumOnAccount", rewriteSourcePolicy.LatestBoundPeriod.PolicyNumber, rewriteSourcePolicy.Account.AccountNumber)
    }
    
    // 'value' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function value_7 () : typekey.TermType {
      return termType
    }
    
    // 'value' attribute on TextInput (id=DividedSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 134, column 66
    function value_72 () : java.lang.String {
      return DisplayKey.get("Web.PolicyFile.Summary.PolicyNumOnAccount", dividedSourcePolicy.LatestBoundPeriod.PolicyNumberDisplayString, dividedSourcePolicy.Account.AccountNumber)
    }
    
    // 'value' attribute on PickerInput (id=AffinityGroup_Input) at PolicyInfoInputSet.pcf: line 146, column 41
    function value_78 () : entity.AffinityGroup {
      return policyPeriod.PolicyTerm.AffinityGroup
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function verifyValueRangeIsAllowedType_10 ($$arg :  typekey.TermType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PolicyInfoInputSet.pcf: line 54, column 36
    function verifyValueRange_11 () : void {
      var __valueRangeArg = gw.pcf.job.PolicyInfoHelper.getTermTypes(policyPeriod)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    // 'visible' attribute on DateInput (id=WrittenDate_Input) at PolicyInfoInputSet.pcf: line 92, column 34
    function visible_35 () : java.lang.Boolean {
      return showWrittenDate
    }
    
    // 'visible' attribute on TypeKeyInput (id=BaseState_Input) at PolicyInfoInputSet.pcf: line 112, column 87
    function visible_51 () : java.lang.Boolean {
      return gw.web.policy.PolicyInfoUIHelper.getBaseStateVisibility(policyPeriod)
    }
    
    // 'visible' attribute on TypeKeyInput (id=PrimaryLanguage_Input) at PolicyInfoInputSet.pcf: line 122, column 112
    function visible_58 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getAllLanguages().size() > 1 and policyPeriod.Reinstatement == null
    }
    
    // 'visible' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 128, column 67
    function visible_64 () : java.lang.Boolean {
      return rewriteSourcePolicy != null and showRewriteLinks
    }
    
    // 'visible' attribute on TextInput (id=DividedSourcePolicy_Input) at PolicyInfoInputSet.pcf: line 134, column 66
    function visible_69 () : java.lang.Boolean {
      return dividedSourcePolicy != null and showSplitSource
    }
    
    property get dividedSourcePolicy () : Policy {
      return getVariableValue("dividedSourcePolicy", 0) as Policy
    }
    
    property set dividedSourcePolicy ($arg :  Policy) {
      setVariableValue("dividedSourcePolicy", 0, $arg)
    }
    
    property get effectiveDate () : java.util.Date {
      return getVariableValue("effectiveDate", 0) as java.util.Date
    }
    
    property set effectiveDate ($arg :  java.util.Date) {
      setVariableValue("effectiveDate", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rewriteSourcePolicy () : Policy {
      return getVariableValue("rewriteSourcePolicy", 0) as Policy
    }
    
    property set rewriteSourcePolicy ($arg :  Policy) {
      setVariableValue("rewriteSourcePolicy", 0, $arg)
    }
    
    property get showRewriteLinks () : boolean {
      return getRequireValue("showRewriteLinks", 0) as java.lang.Boolean
    }
    
    property set showRewriteLinks ($arg :  boolean) {
      setRequireValue("showRewriteLinks", 0, $arg)
    }
    
    property get showSplitSource () : boolean {
      return getRequireValue("showSplitSource", 0) as java.lang.Boolean
    }
    
    property set showSplitSource ($arg :  boolean) {
      setRequireValue("showSplitSource", 0, $arg)
    }
    
    property get showWrittenDate () : boolean {
      return getRequireValue("showWrittenDate", 0) as java.lang.Boolean
    }
    
    property set showWrittenDate ($arg :  boolean) {
      setRequireValue("showWrittenDate", 0, $arg)
    }
    
    property get termType () : typekey.TermType {
      return getVariableValue("termType", 0) as typekey.TermType
    }
    
    property set termType ($arg :  typekey.TermType) {
      setVariableValue("termType", 0, $arg)
    }
    
    
  }
  
  
}