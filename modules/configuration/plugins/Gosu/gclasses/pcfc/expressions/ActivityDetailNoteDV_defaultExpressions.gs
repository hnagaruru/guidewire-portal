package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailNoteDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailNoteDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailNoteDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailNoteDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextAreaInput (id=Text_Input) at ActivityDetailNoteDV.default.pcf: line 57, column 30
    function available_21 () : java.lang.Boolean {
      return note.Topic != null
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at ActivityDetailNoteDV.default.pcf: line 24, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Topic = (__VALUE_TO_SET as typekey.NoteTopicType)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at ActivityDetailNoteDV.default.pcf: line 49, column 49
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.SecurityType = (__VALUE_TO_SET as typekey.NoteSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at ActivityDetailNoteDV.default.pcf: line 57, column 30
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=NoteSubject_Input) at ActivityDetailNoteDV.default.pcf: line 31, column 33
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Level = (__VALUE_TO_SET as gw.api.domain.linkedobject.LinkedObjectContainer)
    }
    
    // 'filter' attribute on TypeKeyInput (id=SecurityLevel_Input) at ActivityDetailNoteDV.default.pcf: line 49, column 49
    function filter_19 (VALUE :  typekey.NoteSecurityType, VALUES :  typekey.NoteSecurityType[]) : java.lang.Boolean {
      return note.hasCreatePermission(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function optionLabel_11 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return note.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function valueRange_12 () : java.lang.Object {
      return note.generateLevels(activity.Account, activity.Policy, activity.Job, activity.Contingency)
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at ActivityDetailNoteDV.default.pcf: line 24, column 45
    function valueRoot_2 () : java.lang.Object {
      return note
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at ActivityDetailNoteDV.default.pcf: line 24, column 45
    function value_0 () : typekey.NoteTopicType {
      return note.Topic
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at ActivityDetailNoteDV.default.pcf: line 49, column 49
    function value_16 () : typekey.NoteSecurityType {
      return note.SecurityType
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at ActivityDetailNoteDV.default.pcf: line 57, column 30
    function value_22 () : java.lang.String {
      return note.Body
    }
    
    // 'value' attribute on TextInput (id=NoteSubject_Input) at ActivityDetailNoteDV.default.pcf: line 31, column 33
    function value_4 () : java.lang.String {
      return note.Subject
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function value_8 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return note.Level
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailNoteDV.default.pcf: line 41, column 73
    function verifyValueRange_14 () : void {
      var __valueRangeArg = note.generateLevels(activity.Account, activity.Policy, activity.Job, activity.Contingency)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    
  }
  
  
}