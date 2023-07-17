package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.default.pcf: line 69, column 98
    function action_31 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.default.pcf: line 79, column 39
    function action_40 () : void {
      PickEmailTemplatePopup.push(new gw.api.email.EmailTemplateSearchCriteria(symbolProvider.names()?.toTypedArray()))
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.default.pcf: line 69, column 98
    function action_dest_32 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.default.pcf: line 79, column 39
    function action_dest_41 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(new gw.api.email.EmailTemplateSearchCriteria(symbolProvider.names()?.toTypedArray()))
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.default.pcf: line 69, column 98
    function conversionExpression_34 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'conversionExpression' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.default.pcf: line 79, column 39
    function conversionExpression_42 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.Filename
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivityDetailDV.default.pcf: line 35, column 39
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at ActivityDetailDV.default.pcf: line 45, column 37
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityDetailDV.default.pcf: line 23, column 35
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=TargetDate_Input) at ActivityDetailDV.default.pcf: line 54, column 38
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.TargetDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EscalationDate_Input) at ActivityDetailDV.default.pcf: line 59, column 42
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.EscalationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.default.pcf: line 69, column 98
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.DocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.default.pcf: line 79, column 39
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.EmailTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ActivityDetailDV.default.pcf: line 29, column 39
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ActivityDetailDV.default.pcf: line 14, column 48
    function initialValue_0 () : gw.document.SimpleSymbolProvider {
      return gw.api.util.SymbolTableUtil.populateSymbolProviderFromBeans(activity)
    }
    
    // 'outputConversion' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.default.pcf: line 79, column 39
    function outputConversion_43 (VALUE :  java.lang.String) : java.lang.String {
      return getEmailDisplayName(VALUE)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityDetailDV.default.pcf: line 23, column 35
    function valueRoot_3 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityDetailDV.default.pcf: line 23, column 35
    function value_1 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ActivityDetailDV.default.pcf: line 40, column 45
    function value_13 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at ActivityDetailDV.default.pcf: line 45, column 37
    function value_16 () : java.lang.Boolean {
      return activity.Mandatory
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at ActivityDetailDV.default.pcf: line 49, column 37
    function value_20 () : java.lang.Boolean {
      return activity.Recurring
    }
    
    // 'value' attribute on DateInput (id=TargetDate_Input) at ActivityDetailDV.default.pcf: line 54, column 38
    function value_23 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateInput (id=EscalationDate_Input) at ActivityDetailDV.default.pcf: line 59, column 42
    function value_27 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.default.pcf: line 69, column 98
    function value_35 () : java.lang.String {
      return activity.DocumentTemplate
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at ActivityDetailDV.default.pcf: line 79, column 39
    function value_44 () : java.lang.String {
      return activity.EmailTemplate
    }
    
    // 'value' attribute on TextInput (id=AssignedTo_Input) at ActivityDetailDV.default.pcf: line 84, column 39
    function value_48 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ActivityDetailDV.default.pcf: line 29, column 39
    function value_5 () : java.lang.String {
      return activity.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivityDetailDV.default.pcf: line 35, column 39
    function value_9 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'visible' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityDetailDV.default.pcf: line 69, column 98
    function visible_33 () : java.lang.Boolean {
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
      return ets.getEmailTemplate(templateFilename).Name
    }
    
    
          
        
    
    
  }
  
  
}