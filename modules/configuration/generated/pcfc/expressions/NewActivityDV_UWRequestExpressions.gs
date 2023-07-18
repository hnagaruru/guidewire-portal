package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/NewActivityDV.UWRequest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewActivityDV_UWRequestExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/NewActivityDV.UWRequest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewActivityDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at NewActivityDV.UWRequest.pcf: line 70, column 98
    function action_31 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.UWRequest.pcf: line 80, column 39
    function action_40 () : void {
      PickEmailTemplatePopup.push(new gw.api.email.EmailTemplateSearchCriteria(symbolProvider.names()?.toTypedArray()))
    }
    
    // 'action' attribute on MenuItem (id=AssigneePicker) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function action_48 () : void {
      PCAssigneePickerPopup.push( assigneePicker )
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at NewActivityDV.UWRequest.pcf: line 70, column 98
    function action_dest_32 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.UWRequest.pcf: line 80, column 39
    function action_dest_41 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(new gw.api.email.EmailTemplateSearchCriteria(symbolProvider.names()?.toTypedArray()))
    }
    
    // 'action' attribute on MenuItem (id=AssigneePicker) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function action_dest_49 () : pcf.api.Destination {
      return pcf.PCAssigneePickerPopup.createDestination( assigneePicker )
    }
    
    // 'available' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function available_50 () : java.lang.Boolean {
      return assignmentPopup.SelectionType == TC_FROMLIST
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at NewActivityDV.UWRequest.pcf: line 70, column 98
    function conversionExpression_34 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'conversionExpression' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.UWRequest.pcf: line 80, column 39
    function conversionExpression_42 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.Filename
    }
    
    // 'value' attribute on DateInput (id=TargetDate_Input) at NewActivityDV.UWRequest.pcf: line 37, column 38
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.TargetDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EscalationDate_Input) at NewActivityDV.UWRequest.pcf: line 42, column 42
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.EscalationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at NewActivityDV.UWRequest.pcf: line 49, column 39
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NewActivityDV.UWRequest.pcf: line 27, column 35
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at NewActivityDV.UWRequest.pcf: line 54, column 37
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at NewActivityDV.UWRequest.pcf: line 60, column 529
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Recurring = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at NewActivityDV.UWRequest.pcf: line 70, column 98
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.DocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.UWRequest.pcf: line 80, column 39
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.EmailTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      assigneePicker.SelectedAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at NewActivityDV.UWRequest.pcf: line 32, column 39
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      activity.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function filter_54 (VALUE :  gw.api.assignment.Assignee, VALUES :  gw.api.assignment.Assignee[]) : java.lang.Boolean {
      return VALUE as String != "Default Assignment Role"
    }
    
    // 'initialValue' attribute on Variable at NewActivityDV.UWRequest.pcf: line 20, column 48
    function initialValue_0 () : gw.document.SimpleSymbolProvider {
      return gw.api.util.SymbolTableUtil.populateSymbolProviderFromBeans(activity)
    }
    
    // 'outputConversion' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.UWRequest.pcf: line 80, column 39
    function outputConversion_43 (VALUE :  java.lang.String) : java.lang.String {
      return getEmailDisplayName(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function valueRange_55 () : java.lang.Object {
      return assigneePicker.buildSuggestedAssignees(assignmentPopup.SuggestedAssignees)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NewActivityDV.UWRequest.pcf: line 27, column 35
    function valueRoot_3 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function valueRoot_53 () : java.lang.Object {
      return assigneePicker
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NewActivityDV.UWRequest.pcf: line 27, column 35
    function value_1 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on DateInput (id=EscalationDate_Input) at NewActivityDV.UWRequest.pcf: line 42, column 42
    function value_13 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at NewActivityDV.UWRequest.pcf: line 49, column 39
    function value_17 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at NewActivityDV.UWRequest.pcf: line 54, column 37
    function value_21 () : java.lang.Boolean {
      return activity.Mandatory
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at NewActivityDV.UWRequest.pcf: line 60, column 529
    function value_26 () : java.lang.Boolean {
      return activity.Recurring
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at NewActivityDV.UWRequest.pcf: line 70, column 98
    function value_35 () : java.lang.String {
      return activity.DocumentTemplate
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.UWRequest.pcf: line 80, column 39
    function value_44 () : java.lang.String {
      return activity.EmailTemplate
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at NewActivityDV.UWRequest.pcf: line 32, column 39
    function value_5 () : java.lang.String {
      return activity.Description
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function value_51 () : gw.api.assignment.Assignee {
      return assigneePicker.SelectedAssignee
    }
    
    // 'value' attribute on DateInput (id=TargetDate_Input) at NewActivityDV.UWRequest.pcf: line 37, column 38
    function value_9 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function verifyValueRangeIsAllowedType_56 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function verifyValueRangeIsAllowedType_56 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at NewActivityDV.UWRequest.pcf: line 91, column 48
    function verifyValueRange_57 () : void {
      var __valueRangeArg = assigneePicker.buildSuggestedAssignees(assignmentPopup.SuggestedAssignees)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_56(__valueRangeArg)
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Recurring_Input) at NewActivityDV.UWRequest.pcf: line 60, column 529
    function visible_25 () : java.lang.Boolean {
      return activity.ActivityPattern.Code!="approve_submission"                       and activity.ActivityPattern.Code!="approve_general"                       and activity.ActivityPattern.Code!="approve_submission_postbind"                       and activity.ActivityPattern.Code!="approve_policy_change"                       and activity.ActivityPattern.Code!="approve_cancellation"                       and activity.ActivityPattern.Code!="decide_renewal"
    }
    
    // 'visible' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at NewActivityDV.UWRequest.pcf: line 70, column 98
    function visible_33 () : java.lang.Boolean {
      return not gw.document.DocumentsActionsUIHelper.DocumentProductionIntegrationEnabled
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get assigneePicker () : gw.assignment.PCAssigneePicker {
      return getRequireValue("assigneePicker", 0) as gw.assignment.PCAssigneePicker
    }
    
    property set assigneePicker ($arg :  gw.assignment.PCAssigneePicker) {
      setRequireValue("assigneePicker", 0, $arg)
    }
    
    property get assignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("assignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("assignmentPopup", 0, $arg)
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
      return ets.getEmailTemplate(templateFilename).getName();
    }
    
    
  }
  
  
}