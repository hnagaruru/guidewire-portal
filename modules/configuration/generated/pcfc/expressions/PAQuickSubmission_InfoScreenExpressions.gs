package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickSubmission_InfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAQuickSubmission_InfoScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickSubmission_InfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAQuickSubmission_InfoScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=DriverDetails1) at PAQuickSubmission_InfoScreen.pcf: line 102, column 34
    function def_onEnter_51 (def :  pcf.PAQuickQuoteDriverPanelSet) : void {
      def.onEnter(period.PersonalAutoLine, period.PersonalAutoLine.PolicyDriver1, accountDriver1, 1, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=DriverDetails2) at PAQuickSubmission_InfoScreen.pcf: line 107, column 34
    function def_onEnter_53 (def :  pcf.PAQuickQuoteDriverPanelSet) : void {
      def.onEnter(period.PersonalAutoLine,  period.PersonalAutoLine.PolicyDriver2, accountDriver2, 2, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=VehicleDetails1) at PAQuickSubmission_InfoScreen.pcf: line 118, column 35
    function def_onEnter_55 (def :  pcf.PAQuickQuoteVehiclePanelSet) : void {
      def.onEnter(period.PersonalAutoLine, period.PersonalAutoLine.Vehicle1, 1, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=VehicleDetails2) at PAQuickSubmission_InfoScreen.pcf: line 123, column 35
    function def_onEnter_57 (def :  pcf.PAQuickQuoteVehiclePanelSet) : void {
      def.onEnter(period.PersonalAutoLine, period.PersonalAutoLine.Vehicle2, 2, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=DriverDetails1) at PAQuickSubmission_InfoScreen.pcf: line 102, column 34
    function def_refreshVariables_52 (def :  pcf.PAQuickQuoteDriverPanelSet) : void {
      def.refreshVariables(period.PersonalAutoLine, period.PersonalAutoLine.PolicyDriver1, accountDriver1, 1, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=DriverDetails2) at PAQuickSubmission_InfoScreen.pcf: line 107, column 34
    function def_refreshVariables_54 (def :  pcf.PAQuickQuoteDriverPanelSet) : void {
      def.refreshVariables(period.PersonalAutoLine,  period.PersonalAutoLine.PolicyDriver2, accountDriver2, 2, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=VehicleDetails1) at PAQuickSubmission_InfoScreen.pcf: line 118, column 35
    function def_refreshVariables_56 (def :  pcf.PAQuickQuoteVehiclePanelSet) : void {
      def.refreshVariables(period.PersonalAutoLine, period.PersonalAutoLine.Vehicle1, 1, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=VehicleDetails2) at PAQuickSubmission_InfoScreen.pcf: line 123, column 35
    function def_refreshVariables_58 (def :  pcf.PAQuickQuoteVehiclePanelSet) : void {
      def.refreshVariables(period.PersonalAutoLine, period.PersonalAutoLine.Vehicle2, 2, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      termType = (__VALUE_TO_SET as typekey.TermType)
    }
    
    // 'value' attribute on TypeKeyInput (id=BaseState_Input) at PAQuickSubmission_InfoScreen.pcf: line 69, column 47
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.BaseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PAQuickSubmission_InfoScreen.pcf: line 78, column 35
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      effectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PAQuickSubmission_InfoScreen.pcf: line 88, column 38
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.PeriodEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function editable_24 () : java.lang.Boolean {
      return period.CanUpdatePeriodDates
    }
    
    // 'editable' attribute on TypeKeyInput (id=BaseState_Input) at PAQuickSubmission_InfoScreen.pcf: line 69, column 47
    function editable_32 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'editable' attribute on DateInput (id=ExpirationDate_Input) at PAQuickSubmission_InfoScreen.pcf: line 88, column 38
    function editable_45 () : java.lang.Boolean {
      return termType == TC_OTHER and period.CanUpdatePeriodDates
    }
    
    // 'initialValue' attribute on Variable at PAQuickSubmission_InfoScreen.pcf: line 23, column 32
    function initialValue_0 () : typekey.TermType {
      return period.TermType
    }
    
    // 'initialValue' attribute on Variable at PAQuickSubmission_InfoScreen.pcf: line 28, column 30
    function initialValue_1 () : java.util.Date {
      return period.PeriodStart
    }
    
    // 'initialValue' attribute on Variable at PAQuickSubmission_InfoScreen.pcf: line 33, column 22
    function initialValue_2 () : Driver {
      return period.PersonalAutoLine.PolicyDriver1 != null ? period.PersonalAutoLine.PolicyDriver1.AccountContactRole.AccountContact.getRole(TC_DRIVER) as Driver : null
    }
    
    // 'initialValue' attribute on Variable at PAQuickSubmission_InfoScreen.pcf: line 38, column 22
    function initialValue_3 () : Driver {
      return period.PersonalAutoLine.PolicyDriver2 != null ? period.PersonalAutoLine.PolicyDriver2.AccountContactRole.AccountContact.getRole(TC_DRIVER) as Driver : null
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function mode_4 () : java.lang.Object {
      return period.Job.Subtype
    }
    
    // 'onChange' attribute on PostOnChange at PAQuickSubmission_InfoScreen.pcf: line 61, column 54
    function onChange_23 () : void {
      period.TermType = termType
    }
    
    // 'onChange' attribute on PostOnChange at PAQuickSubmission_InfoScreen.pcf: line 80, column 64
    function onChange_38 () : void {
      period.setPeriodDates(effectiveDate)
    }
    
    // 'onChange' attribute on PostOnChange at PAQuickSubmission_InfoScreen.pcf: line 90, column 54
    function onChange_44 () : void {
      termType = period.TermType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_21 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_22 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PAQuickSubmission_InfoScreen.pcf: line 43, column 85
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(period, job, jobWizardHelper)
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function valueRange_27 () : java.lang.Object {
      return period.getAvailablePolicyTermsForCurrentOffering()
    }
    
    // 'value' attribute on TypeKeyInput (id=BaseState_Input) at PAQuickSubmission_InfoScreen.pcf: line 69, column 47
    function valueRoot_35 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function value_25 () : typekey.TermType {
      return termType
    }
    
    // 'value' attribute on TypeKeyInput (id=BaseState_Input) at PAQuickSubmission_InfoScreen.pcf: line 69, column 47
    function value_33 () : typekey.Jurisdiction {
      return period.BaseState
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PAQuickSubmission_InfoScreen.pcf: line 78, column 35
    function value_40 () : java.util.Date {
      return effectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PAQuickSubmission_InfoScreen.pcf: line 88, column 38
    function value_46 () : java.util.Date {
      return period.PeriodEnd
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function verifyValueRangeIsAllowedType_28 ($$arg :  typekey.TermType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TermType_Input) at PAQuickSubmission_InfoScreen.pcf: line 59, column 42
    function verifyValueRange_29 () : void {
      var __valueRangeArg = period.getAvailablePolicyTermsForCurrentOffering()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    property get accountDriver1 () : Driver {
      return getVariableValue("accountDriver1", 0) as Driver
    }
    
    property set accountDriver1 ($arg :  Driver) {
      setVariableValue("accountDriver1", 0, $arg)
    }
    
    property get accountDriver2 () : Driver {
      return getVariableValue("accountDriver2", 0) as Driver
    }
    
    property set accountDriver2 ($arg :  Driver) {
      setVariableValue("accountDriver2", 0, $arg)
    }
    
    property get effectiveDate () : java.util.Date {
      return getVariableValue("effectiveDate", 0) as java.util.Date
    }
    
    property set effectiveDate ($arg :  java.util.Date) {
      setVariableValue("effectiveDate", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
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
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get termType () : typekey.TermType {
      return getVariableValue("termType", 0) as typekey.TermType
    }
    
    property set termType ($arg :  typekey.TermType) {
      setVariableValue("termType", 0, $arg)
    }
    
    
  }
  
  
}