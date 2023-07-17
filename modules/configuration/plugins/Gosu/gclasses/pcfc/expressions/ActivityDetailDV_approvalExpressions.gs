package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailDV.approval.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailDV_approvalExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailDV.approval.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.approval.pcf: line 70, column 98
    function action_35 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.approval.pcf: line 79, column 39
    function action_43 () : void {
      PickEmailTemplatePopup.push(new gw.api.email.EmailTemplateSearchCriteria(symbolProvider.names()?.toTypedArray()))
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.approval.pcf: line 70, column 98
    function action_dest_36 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.approval.pcf: line 79, column 39
    function action_dest_44 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(new gw.api.email.EmailTemplateSearchCriteria(symbolProvider.names()?.toTypedArray()))
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.approval.pcf: line 70, column 98
    function conversionExpression_38 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'conversionExpression' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.approval.pcf: line 79, column 39
    function conversionExpression_45 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.Filename
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ActivityDetailDV.approval.pcf: line 34, column 39
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivityDetailDV.approval.pcf: line 40, column 39
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ActivityDetailDV.approval.pcf: line 46, column 45
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Status = (__VALUE_TO_SET as typekey.ActivityStatus)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at ActivityDetailDV.approval.pcf: line 51, column 37
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=TargetDate_Input) at ActivityDetailDV.approval.pcf: line 56, column 38
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.TargetDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ActivityDetailDV.approval.pcf: line 22, column 45
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.ApprovalRationale = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EscalationDate_Input) at ActivityDetailDV.approval.pcf: line 61, column 42
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.EscalationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityDetailDV.approval.pcf: line 28, column 35
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=ApprovalRationale_Input) at ActivityDetailDV.approval.pcf: line 22, column 45
    function editable_1 () : java.lang.Boolean {
      return activity.Status != TC_COMPLETE
    }
    
    // 'initialValue' attribute on Variable at ActivityDetailDV.approval.pcf: line 14, column 48
    function initialValue_0 () : gw.document.SimpleSymbolProvider {
      return gw.api.util.SymbolTableUtil.populateSymbolProviderFromBeans(activity)
    }
    
    // 'outputConversion' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.approval.pcf: line 79, column 39
    function outputConversion_46 (VALUE :  java.lang.String) : java.lang.String {
      return getEmailDisplayName(VALUE)
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ActivityDetailDV.approval.pcf: line 22, column 45
    function valueRoot_4 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ActivityDetailDV.approval.pcf: line 34, column 39
    function value_11 () : java.lang.String {
      return activity.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivityDetailDV.approval.pcf: line 40, column 39
    function value_15 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ActivityDetailDV.approval.pcf: line 46, column 45
    function value_19 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ActivityDetailDV.approval.pcf: line 22, column 45
    function value_2 () : java.lang.String {
      return activity.ApprovalRationale
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at ActivityDetailDV.approval.pcf: line 51, column 37
    function value_23 () : java.lang.Boolean {
      return activity.Mandatory
    }
    
    // 'value' attribute on DateInput (id=TargetDate_Input) at ActivityDetailDV.approval.pcf: line 56, column 38
    function value_27 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateInput (id=EscalationDate_Input) at ActivityDetailDV.approval.pcf: line 61, column 42
    function value_31 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.approval.pcf: line 70, column 98
    function value_39 () : java.lang.String {
      return activity.DocumentTemplate
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.approval.pcf: line 79, column 39
    function value_47 () : java.lang.String {
      return activity.EmailTemplate
    }
    
    // 'value' attribute on TextInput (id=AssignedTo_Input) at ActivityDetailDV.approval.pcf: line 84, column 39
    function value_50 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityDetailDV.approval.pcf: line 28, column 35
    function value_7 () : java.lang.String {
      return activity.Subject
    }
    
    // 'visible' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.approval.pcf: line 70, column 98
    function visible_37 () : java.lang.Boolean {
      return not gw.document.DocumentsActionsUIHelper.DocumentProductionIntegrationEnabled
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get symbolProvider () : gw.document.SimpleSymbolProvider {
      return getVariableValue("symbolProvider", 0) as gw.document.SimpleSymbolProvider
    }
    
    property set symbolProvider ($arg :  gw.document.SimpleSymbolProvider) {
      setVariableValue("symbolProvider", 0, $arg)
    }
    
    function getEmailDisplayName(templateFilename : String) : String {
      if (templateFilename == null) {
        return null
      }
      var ets = gw.plugin.Plugins.get(gw.plugin.email.IEmailTemplateSource)
      return ets.getEmailTemplate(templateFilename).getName()
    }
    
    
  }
  
  
}