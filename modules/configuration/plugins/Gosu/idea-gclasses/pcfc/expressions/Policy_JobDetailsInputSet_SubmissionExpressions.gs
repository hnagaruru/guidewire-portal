package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_JobDetailsInputSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_JobDetailsInputSet_SubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_JobDetailsInputSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_JobDetailsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_8 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC, referenceDate)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_9 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC, referenceDate)
    }
    
    // 'initialValue' attribute on Variable at Policy_JobDetailsInputSet.Submission.pcf: line 14, column 28
    function initialValue_0 () : Jurisdiction {
      return gw.api.util.JurisdictionMappingUtil.getJurisdiction(job.ResultingBoundPeriod.PolicyAddress.Address)
    }
    
    // 'initialValue' attribute on Variable at Policy_JobDetailsInputSet.Submission.pcf: line 18, column 30
    function initialValue_1 () : java.util.Date {
      return (referenceState != null) ? job.ResultingBoundPeriod.getReferenceDateForCurrentJob(referenceState) : null
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_10 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_11 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_12 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, referenceDate)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 40, column 40
    function valueRoot_19 () : java.lang.Object {
      return job.ResultingBoundPeriod.EffectiveDatedFields
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Premium_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 44, column 60
    function valueRoot_22 () : java.lang.Object {
      return job.ResultingBoundPeriod
    }
    
    // 'value' attribute on TextInput (id=Account_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 24, column 89
    function valueRoot_3 () : java.lang.Object {
      return job.ResultingBoundPeriod.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 28, column 73
    function valueRoot_6 () : java.lang.Object {
      return job.ResultingBoundPeriod.PrimaryNamedInsured
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_13 () : entity.IndustryCode {
      return job.ResultingBoundPeriod.PrimaryNamedInsured.IndustryCode
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 40, column 40
    function value_18 () : entity.ProducerCode {
      return job.ResultingBoundPeriod.EffectiveDatedFields.ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Account_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 24, column 89
    function value_2 () : java.lang.String {
      return job.ResultingBoundPeriod.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Premium_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 44, column 60
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return job.ResultingBoundPeriod.TransactionCostRPT
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at Policy_JobDetailsInputSet.Submission.pcf: line 28, column 73
    function value_5 () : java.lang.String {
      return job.ResultingBoundPeriod.PrimaryNamedInsured.DisplayName
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get referenceDate () : java.util.Date {
      return getVariableValue("referenceDate", 0) as java.util.Date
    }
    
    property set referenceDate ($arg :  java.util.Date) {
      setVariableValue("referenceDate", 0, $arg)
    }
    
    property get referenceState () : Jurisdiction {
      return getVariableValue("referenceState", 0) as Jurisdiction
    }
    
    property set referenceState ($arg :  Jurisdiction) {
      setVariableValue("referenceState", 0, $arg)
    }
    
    
  }
  
  
}