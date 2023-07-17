package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ActivityPatternDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityPatternDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ActivityPatternDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityPatternDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityPatternDetailDV.pcf: line 143, column 39
    function action_80 () : void {
      DocumentTemplateSearchPopup.push(gw.web.admin.ActivityPatternDeltaDVUIHelper.createAvailSymbols(activityPattern))
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at ActivityPatternDetailDV.pcf: line 153, column 39
    function action_87 () : void {
      PickEmailTemplatePopup.push(gw.web.admin.ActivityPatternDeltaDVUIHelper.createEmailTemplateSearchCriteria(activityPattern))
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityPatternDetailDV.pcf: line 143, column 39
    function action_dest_81 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(gw.web.admin.ActivityPatternDeltaDVUIHelper.createAvailSymbols(activityPattern))
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at ActivityPatternDetailDV.pcf: line 153, column 39
    function action_dest_88 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(gw.web.admin.ActivityPatternDeltaDVUIHelper.createEmailTemplateSearchCriteria(activityPattern))
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityPatternDetailDV.pcf: line 143, column 39
    function conversionExpression_82 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'conversionExpression' attribute on PickerInput (id=EmailTemplate_Input) at ActivityPatternDetailDV.pcf: line 153, column 39
    function conversionExpression_89 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.Filename
    }
    
    // 'value' attribute on TextInput (id=ShortSubject_Input) at ActivityPatternDetailDV.pcf: line 15, column 47
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.ShortSubject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EscalationDays_Input) at ActivityPatternDetailDV.pcf: line 32, column 40
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.EscalationDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=EscalationHours_Input) at ActivityPatternDetailDV.pcf: line 38, column 40
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.EscalationHours = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at ActivityPatternDetailDV.pcf: line 44, column 44
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ActivityPatternDetailDV.pcf: line 50, column 39
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at ActivityPatternDetailDV.pcf: line 55, column 44
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Recurring = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityPatternDetailDV.pcf: line 61, column 42
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivityPatternDetailDV.pcf: line 67, column 39
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ActivityPatternDetailDV.pcf: line 74, column 43
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Type = (__VALUE_TO_SET as typekey.ActivityType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PatternLevel_Input) at ActivityPatternDetailDV.pcf: line 81, column 51
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.PatternLevel = (__VALUE_TO_SET as typekey.ActivityPatternLevel)
    }
    
    // 'value' attribute on TextInput (id=TargetDays_Input) at ActivityPatternDetailDV.pcf: line 89, column 40
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.TargetDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AutomatedOnly_Input) at ActivityPatternDetailDV.pcf: line 21, column 48
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.AutomatedOnly = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=TargetHours_Input) at ActivityPatternDetailDV.pcf: line 95, column 40
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.TargetHours = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at ActivityPatternDetailDV.pcf: line 101, column 47
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Category = (__VALUE_TO_SET as typekey.ActivityCategory)
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityClass_Input) at ActivityPatternDetailDV.pcf: line 108, column 44
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.ActivityClass = (__VALUE_TO_SET as typekey.ActivityClass)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationStartPt_Input) at ActivityPatternDetailDV.pcf: line 114, column 45
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.EscalationStartPt = (__VALUE_TO_SET as typekey.StartPointType)
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetStartPoint_Input) at ActivityPatternDetailDV.pcf: line 120, column 45
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.TargetStartPoint = (__VALUE_TO_SET as typekey.StartPointType)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationInclDays_Input) at ActivityPatternDetailDV.pcf: line 126, column 46
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.EscalationInclDays = (__VALUE_TO_SET as typekey.IncludeDaysType)
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetIncludeDays_Input) at ActivityPatternDetailDV.pcf: line 132, column 46
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.TargetIncludeDays = (__VALUE_TO_SET as typekey.IncludeDaysType)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityPatternDetailDV.pcf: line 143, column 39
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.DocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ActivityPatternDetailDV.pcf: line 26, column 46
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at ActivityPatternDetailDV.pcf: line 153, column 39
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      activityPattern.EmailTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'outputConversion' attribute on PickerInput (id=EmailTemplate_Input) at ActivityPatternDetailDV.pcf: line 153, column 39
    function outputConversion_90 (VALUE :  java.lang.String) : java.lang.String {
      return gw.web.admin.ActivityPatternDeltaDVUIHelper.getEmailDisplayName(VALUE)
    }
    
    // 'value' attribute on TextInput (id=ShortSubject_Input) at ActivityPatternDetailDV.pcf: line 15, column 47
    function valueRoot_2 () : java.lang.Object {
      return activityPattern
    }
    
    // 'value' attribute on TextInput (id=ShortSubject_Input) at ActivityPatternDetailDV.pcf: line 15, column 47
    function value_0 () : java.lang.String {
      return activityPattern.ShortSubject
    }
    
    // 'value' attribute on TextInput (id=EscalationDays_Input) at ActivityPatternDetailDV.pcf: line 32, column 40
    function value_12 () : java.lang.Integer {
      return activityPattern.EscalationDays
    }
    
    // 'value' attribute on TextInput (id=EscalationHours_Input) at ActivityPatternDetailDV.pcf: line 38, column 40
    function value_16 () : java.lang.Integer {
      return activityPattern.EscalationHours
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at ActivityPatternDetailDV.pcf: line 44, column 44
    function value_20 () : java.lang.Boolean {
      return activityPattern.Mandatory
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ActivityPatternDetailDV.pcf: line 50, column 39
    function value_24 () : java.lang.String {
      return activityPattern.Code
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at ActivityPatternDetailDV.pcf: line 55, column 44
    function value_28 () : java.lang.Boolean {
      return activityPattern.Recurring
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ActivityPatternDetailDV.pcf: line 61, column 42
    function value_32 () : java.lang.String {
      return activityPattern.Subject
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivityPatternDetailDV.pcf: line 67, column 39
    function value_36 () : typekey.Priority {
      return activityPattern.Priority
    }
    
    // 'value' attribute on BooleanRadioInput (id=AutomatedOnly_Input) at ActivityPatternDetailDV.pcf: line 21, column 48
    function value_4 () : java.lang.Boolean {
      return activityPattern.AutomatedOnly
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ActivityPatternDetailDV.pcf: line 74, column 43
    function value_40 () : typekey.ActivityType {
      return activityPattern.Type
    }
    
    // 'value' attribute on TypeKeyInput (id=PatternLevel_Input) at ActivityPatternDetailDV.pcf: line 81, column 51
    function value_44 () : typekey.ActivityPatternLevel {
      return activityPattern.PatternLevel
    }
    
    // 'value' attribute on TextInput (id=TargetDays_Input) at ActivityPatternDetailDV.pcf: line 89, column 40
    function value_48 () : java.lang.Integer {
      return activityPattern.TargetDays
    }
    
    // 'value' attribute on TextInput (id=TargetHours_Input) at ActivityPatternDetailDV.pcf: line 95, column 40
    function value_52 () : java.lang.Integer {
      return activityPattern.TargetHours
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at ActivityPatternDetailDV.pcf: line 101, column 47
    function value_56 () : typekey.ActivityCategory {
      return activityPattern.Category
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityClass_Input) at ActivityPatternDetailDV.pcf: line 108, column 44
    function value_60 () : typekey.ActivityClass {
      return activityPattern.ActivityClass
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationStartPt_Input) at ActivityPatternDetailDV.pcf: line 114, column 45
    function value_64 () : typekey.StartPointType {
      return activityPattern.EscalationStartPt
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetStartPoint_Input) at ActivityPatternDetailDV.pcf: line 120, column 45
    function value_68 () : typekey.StartPointType {
      return activityPattern.TargetStartPoint
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationInclDays_Input) at ActivityPatternDetailDV.pcf: line 126, column 46
    function value_72 () : typekey.IncludeDaysType {
      return activityPattern.EscalationInclDays
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetIncludeDays_Input) at ActivityPatternDetailDV.pcf: line 132, column 46
    function value_76 () : typekey.IncludeDaysType {
      return activityPattern.TargetIncludeDays
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ActivityPatternDetailDV.pcf: line 26, column 46
    function value_8 () : java.lang.String {
      return activityPattern.Description
    }
    
    // 'value' attribute on DocumentTemplateInput (id=DocumentTemplate_Input) at ActivityPatternDetailDV.pcf: line 143, column 39
    function value_83 () : java.lang.String {
      return activityPattern.DocumentTemplate
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at ActivityPatternDetailDV.pcf: line 153, column 39
    function value_91 () : java.lang.String {
      return activityPattern.EmailTemplate
    }
    
    property get activityPattern () : ActivityPattern {
      return getRequireValue("activityPattern", 0) as ActivityPattern
    }
    
    property set activityPattern ($arg :  ActivityPattern) {
      setRequireValue("activityPattern", 0, $arg)
    }
    
    
  }
  
  
}