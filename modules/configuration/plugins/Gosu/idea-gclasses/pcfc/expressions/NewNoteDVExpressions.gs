package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NewNoteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewNoteDVExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NewNoteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewNoteDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NewNoteDV.pcf: line 17, column 44
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      newNoteHelper.Note.Topic = (__VALUE_TO_SET as typekey.NoteTopicType)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      newNoteHelper.Note.Level = (__VALUE_TO_SET as gw.api.domain.linkedobject.LinkedObjectContainer)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at NewNoteDV.pcf: line 41, column 47
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      newNoteHelper.Note.SecurityType = (__VALUE_TO_SET as typekey.NoteSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at NewNoteDV.pcf: line 48, column 42
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      newNoteHelper.Note.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NewNoteDV.pcf: line 22, column 45
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      newNoteHelper.Note.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function editable_8 () : java.lang.Boolean {
      return newNoteHelper.RelatedToEditable
    }
    
    // 'filter' attribute on TypeKeyInput (id=SecurityLevel_Input) at NewNoteDV.pcf: line 41, column 47
    function filter_23 (VALUE :  typekey.NoteSecurityType, VALUES :  typekey.NoteSecurityType[]) : java.lang.Boolean {
      return newNoteHelper.Note.hasCreatePermission(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function optionLabel_13 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return newNoteHelper.Note.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function valueRange_14 () : java.lang.Object {
      return newNoteHelper.LevelsValueRange
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NewNoteDV.pcf: line 17, column 44
    function valueRoot_2 () : java.lang.Object {
      return newNoteHelper.Note
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NewNoteDV.pcf: line 17, column 44
    function value_0 () : typekey.NoteTopicType {
      return newNoteHelper.Note.Topic
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function value_10 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return newNoteHelper.Note.Level
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at NewNoteDV.pcf: line 41, column 47
    function value_20 () : typekey.NoteSecurityType {
      return newNoteHelper.Note.SecurityType
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at NewNoteDV.pcf: line 48, column 42
    function value_25 () : java.lang.String {
      return newNoteHelper.Note.Body
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NewNoteDV.pcf: line 22, column 45
    function value_4 () : java.lang.String {
      return newNoteHelper.Note.Subject
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function verifyValueRange_16 () : void {
      var __valueRangeArg = newNoteHelper.LevelsValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at NewNoteDV.pcf: line 33, column 107
    function visible_9 () : java.lang.Boolean {
      return (!(newNoteHelper.Job typeis Submission) or (newNoteHelper.Job as Submission).FullMode)
    }
    
    property get newNoteHelper () : gw.note.NewNoteHelper {
      return getRequireValue("newNoteHelper", 0) as gw.note.NewNoteHelper
    }
    
    property set newNoteHelper ($arg :  gw.note.NewNoteHelper) {
      setRequireValue("newNoteHelper", 0, $arg)
    }
    
    
  }
  
  
}