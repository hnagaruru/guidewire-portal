package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/StartCancellation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartCancellationExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/StartCancellation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartCancellationExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=NewCancellation) at StartCancellation.pcf: line 65, column 137
    function action_10 () : void {
      if (job.startJobAndCommit(policy, effectiveDate, refundCalcMethod, CurrentLocation)) {CancellationWizard.go(job, job.LatestPeriod)                         }
    }
    
    // 'action' attribute on ToolbarButton (id=NewAsyncCancellation) at StartCancellation.pcf: line 72, column 131
    function action_14 () : void {
      job.QuoteOnStart = false;if (job.startJobAndCommit(policy, effectiveDate, refundCalcMethod, CurrentLocation)) {CancellationWizard.go(job, job.LatestPeriod)                         }
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at StartCancellation.pcf: line 76, column 62
    function action_16 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterCancel' attribute on Page (id=StartCancellation) at StartCancellation.pcf: line 14, column 116
    function afterCancel_53 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber)
    }
    
    // 'afterCancel' attribute on Page (id=StartCancellation) at StartCancellation.pcf: line 14, column 116
    function afterCancel_dest_54 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber)
    }
    
    // 'available' attribute on ToolbarButton (id=NewAsyncCancellation) at StartCancellation.pcf: line 72, column 131
    function available_12 () : java.lang.Boolean {
      return policy.canStartCancellation(effectiveDate) == null
    }
    
    // 'available' attribute on ToolbarButton (id=NewCancellation) at StartCancellation.pcf: line 65, column 137
    function available_8 () : java.lang.Boolean {
      return policy.canStartCancellation(effectiveDate) == null 
    }
    
    // 'canVisit' attribute on Page (id=StartCancellation) at StartCancellation.pcf: line 14, column 116
    static function canVisit_55 (policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.Cancellation.create
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=NewCancellation) at StartCancellation.pcf: line 65, column 137
    function confirmMessage_11 () : java.lang.String {
      return confirmationMessage()
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at StartCancellation.pcf: line 99, column 52
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      job.Source = (__VALUE_TO_SET as typekey.CancellationSource)
    }
    
    // 'value' attribute on TypeKeyInput (id=Reason_Input) at StartCancellation.pcf: line 110, column 44
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      job.CancelReasonCode = (__VALUE_TO_SET as typekey.ReasonCode)
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonDescription_Input) at StartCancellation.pcf: line 120, column 38
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      job.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      refundCalcMethod = (__VALUE_TO_SET as typekey.CalculationMethod)
    }
    
    // 'value' attribute on DateInput (id=CancelDate_Input) at StartCancellation.pcf: line 140, column 35
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      effectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function editable_37 () : java.lang.Boolean {
      return perm.System.canceloverrefund and job.CancelReasonCode != TC_FLATREWRITE and job.CancelReasonCode != TC_MIDTERMREWRITE and refundMethods.Count != 1
    }
    
    // 'editable' attribute on DateInput (id=CancelDate_Input) at StartCancellation.pcf: line 140, column 35
    function editable_46 () : java.lang.Boolean {
      return job.canEnterInitialEffectiveDate(policyPeriod, effectiveDate)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Source_Input) at StartCancellation.pcf: line 99, column 52
    function filter_25 (VALUE :  typekey.CancellationSource, VALUES :  typekey.CancellationSource[]) : java.lang.Boolean {
      return perm.System.cancelcarriersource or VALUE == typekey.CancellationSource.TC_INSURED
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 23, column 22
    function initialValue_0 () : Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 27, column 28
    function initialValue_1 () : Cancellation {
      return new Cancellation()
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 31, column 30
    function initialValue_2 () : java.util.Date {
      return null
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 36, column 28
    function initialValue_3 () : PolicyPeriod {
      return (effectiveDate != null) ? entity.Policy.finder.findPolicyPeriodByPolicyAndAsOfDate(policy, effectiveDate) : null
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 41, column 23
    function initialValue_4 () : boolean {
      return inForcePeriod != null and inForcePeriod.hasFinalAuditFinished()
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 46, column 23
    function initialValue_5 () : boolean {
      return effectiveDate != null and policy.isOOSChange(effectiveDate)
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 51, column 43
    function initialValue_6 () : typekey.CalculationMethod[] {
      return job.findValidRefundMethods(policyPeriod.PeriodStart)
    }
    
    // 'initialValue' attribute on Variable at StartCancellation.pcf: line 55, column 33
    function initialValue_7 () : CalculationMethod {
      return null
    }
    
    // 'label' attribute on Verbatim (id=ErrorMessage) at StartCancellation.pcf: line 82, column 25
    function label_18 () : java.lang.String {
      return DisplayKey.get("Web.Cancellation.Error.CannotStart", policy.canStartCancellation(effectiveDate))
    }
    
    // 'label' attribute on Verbatim (id=WarningMessage) at StartCancellation.pcf: line 87, column 25
    function label_20 () : java.lang.String {
      return DisplayKey.get("Web.PolicyChange.StartPolicyChange.Warning", getWarningMessage(policyPeriod))
    }
    
    // 'onChange' attribute on PostOnChange at StartCancellation.pcf: line 101, column 102
    function onChange_21 () : void {
      job.CancelReasonCode = null; refundCalcMethod = null; effectiveDate = null
    }
    
    // 'onChange' attribute on PostOnChange at StartCancellation.pcf: line 112, column 214
    function onChange_27 () : void {
      refundCalcMethod = job.calculateRefundCalcMethod(policyPeriod); effectiveDate = job.CancelReasonCode != null ? job.getDefaultEffectiveDate(policyPeriod, refundCalcMethod) : effectiveDate
    }
    
    // 'onChange' attribute on PostOnChange at StartCancellation.pcf: line 131, column 150
    function onChange_36 () : void {
      effectiveDate = job.CancelReasonCode != null ? job.getDefaultEffectiveDate(policyPeriod, refundCalcMethod) : effectiveDate
    }
    
    // 'onChange' attribute on PostOnChange at StartCancellation.pcf: line 142, column 201
    function onChange_45 () : void {
      if (effectiveDate != null) { effectiveDate = gw.api.job.EffectiveDateCalculator.instance().getCancellationEffectiveDate(effectiveDate, policyPeriod, job, refundCalcMethod) }
    }
    
    // 'parent' attribute on Page (id=StartCancellation) at StartCancellation.pcf: line 14, column 116
    static function parent_56 (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'title' attribute on Page (id=StartCancellation) at StartCancellation.pcf: line 14, column 116
    static function title_57 (policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.Cancellation.StartCancellation", policyPeriod.PolicyNumberDisplayString)
    }
    
    // 'validationExpression' attribute on DateInput (id=CancelDate_Input) at StartCancellation.pcf: line 140, column 35
    function validationExpression_47 () : java.lang.Object {
      return job.validateEffectiveDate(policyPeriod, effectiveDate, refundCalcMethod)
    }
    
    // 'valueRange' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function valueRange_40 () : java.lang.Object {
      return refundMethods
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at StartCancellation.pcf: line 99, column 52
    function valueRoot_24 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at StartCancellation.pcf: line 99, column 52
    function value_22 () : typekey.CancellationSource {
      return job.Source
    }
    
    // 'value' attribute on TypeKeyInput (id=Reason_Input) at StartCancellation.pcf: line 110, column 44
    function value_28 () : typekey.ReasonCode {
      return job.CancelReasonCode
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonDescription_Input) at StartCancellation.pcf: line 120, column 38
    function value_32 () : java.lang.String {
      return job.Description
    }
    
    // 'value' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function value_38 () : typekey.CalculationMethod {
      return refundCalcMethod
    }
    
    // 'value' attribute on DateInput (id=CancelDate_Input) at StartCancellation.pcf: line 140, column 35
    function value_48 () : java.util.Date {
      return effectiveDate
    }
    
    // 'valueRange' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function verifyValueRangeIsAllowedType_41 ($$arg :  typekey.CalculationMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CalcMethod_Input) at StartCancellation.pcf: line 129, column 51
    function verifyValueRange_42 () : void {
      var __valueRangeArg = refundMethods
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=NewAsyncCancellation) at StartCancellation.pcf: line 72, column 131
    function visible_13 () : java.lang.Boolean {
      return policyPeriod.ShouldQuoteAsynchronously and gw.api.system.PCConfigParameters.AsynchronousQuotingEnabled.Value
    }
    
    // 'visible' attribute on Verbatim (id=ErrorMessage) at StartCancellation.pcf: line 82, column 25
    function visible_17 () : java.lang.Boolean {
      return effectiveDate != null and policy.canStartCancellation(effectiveDate) != null
    }
    
    // 'visible' attribute on Verbatim (id=WarningMessage) at StartCancellation.pcf: line 87, column 25
    function visible_19 () : java.lang.Boolean {
      return getWarningMessage(policyPeriod) != null
    }
    
    // 'visible' attribute on ToolbarButton (id=NewCancellation) at StartCancellation.pcf: line 65, column 137
    function visible_9 () : java.lang.Boolean {
      return not (policyPeriod.ShouldQuoteAsynchronously and gw.api.system.PCConfigParameters.AsynchronousQuotingEnabled.Value)
    }
    
    override property get CurrentLocation () : pcf.StartCancellation {
      return super.CurrentLocation as pcf.StartCancellation
    }
    
    property get effectiveDate () : java.util.Date {
      return getVariableValue("effectiveDate", 0) as java.util.Date
    }
    
    property set effectiveDate ($arg :  java.util.Date) {
      setVariableValue("effectiveDate", 0, $arg)
    }
    
    property get hasFinalAuditFinished () : boolean {
      return getVariableValue("hasFinalAuditFinished", 0) as java.lang.Boolean
    }
    
    property set hasFinalAuditFinished ($arg :  boolean) {
      setVariableValue("hasFinalAuditFinished", 0, $arg)
    }
    
    property get inForcePeriod () : PolicyPeriod {
      return getVariableValue("inForcePeriod", 0) as PolicyPeriod
    }
    
    property set inForcePeriod ($arg :  PolicyPeriod) {
      setVariableValue("inForcePeriod", 0, $arg)
    }
    
    property get isOOSChange () : boolean {
      return getVariableValue("isOOSChange", 0) as java.lang.Boolean
    }
    
    property set isOOSChange ($arg :  boolean) {
      setVariableValue("isOOSChange", 0, $arg)
    }
    
    property get job () : Cancellation {
      return getVariableValue("job", 0) as Cancellation
    }
    
    property set job ($arg :  Cancellation) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get refundCalcMethod () : CalculationMethod {
      return getVariableValue("refundCalcMethod", 0) as CalculationMethod
    }
    
    property set refundCalcMethod ($arg :  CalculationMethod) {
      setVariableValue("refundCalcMethod", 0, $arg)
    }
    
    property get refundMethods () : typekey.CalculationMethod[] {
      return getVariableValue("refundMethods", 0) as typekey.CalculationMethod[]
    }
    
    property set refundMethods ($arg :  typekey.CalculationMethod[]) {
      setVariableValue("refundMethods", 0, $arg)
    }
    
    function confirmationMessage() : String {
      if(hasFinalAuditFinished){
        return (effectiveDate == inForcePeriod.PeriodStart)
          ? DisplayKey.get("Web.Job.FinalAuditCompletedFlatCancellation")
          : DisplayKey.get("Web.Job.FinalAuditCompletedCancellation")
      }
      return ""
    }
    
    function getWarningMessage(pInForcePeriod : PolicyPeriod) : String {
      if ((pInForcePeriod != null) and (pInForcePeriod.Policy.RewrittenToNewAccountDestination != null)) {
        return DisplayKey.get("Web.Job.ChangeRewriteNewAccountPolicy", pInForcePeriod.Policy.RewrittenToNewAccountDestination.LatestBoundPeriod.PolicyNumber)
      }
      return null
    }
    
    
  }
  
  
}