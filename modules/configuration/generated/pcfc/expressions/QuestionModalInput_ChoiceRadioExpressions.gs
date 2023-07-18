package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.ChoiceRadio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionModalInput_ChoiceRadioExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.ChoiceRadio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionModalInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      answerContainer.getAnswer(question).ChoiceAnswer = (__VALUE_TO_SET as gw.api.productmodel.QuestionChoice)
    }
    
    // 'onChange' attribute on PostOnChange at QuestionModalInput.ChoiceRadio.pcf: line 26, column 64
    function onChange_0 () : void {
      if (onChangeBlock != null) onChangeBlock()
    }
    
    // 'required' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function required_1 () : java.lang.Boolean {
      return question.Required
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function valueRange_5 () : java.lang.Object {
      return question.Choices
    }
    
    // 'value' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function valueRoot_4 () : java.lang.Object {
      return answerContainer.getAnswer(question)
    }
    
    // 'value' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function value_2 () : gw.api.productmodel.QuestionChoice {
      return answerContainer.getAnswer(question).ChoiceAnswer
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.productmodel.QuestionChoice[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ChoiceRadioInput_Cell) at QuestionModalInput.ChoiceRadio.pcf: line 24, column 19
    function verifyValueRange_7 () : void {
      var __valueRangeArg = question.Choices
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get answerContainer () : AnswerContainer {
      return getRequireValue("answerContainer", 0) as AnswerContainer
    }
    
    property set answerContainer ($arg :  AnswerContainer) {
      setRequireValue("answerContainer", 0, $arg)
    }
    
    property get onChangeBlock () : block() {
      return getRequireValue("onChangeBlock", 0) as block()
    }
    
    property set onChangeBlock ($arg :  block()) {
      setRequireValue("onChangeBlock", 0, $arg)
    }
    
    property get question () : gw.api.productmodel.Question {
      return getRequireValue("question", 0) as gw.api.productmodel.Question
    }
    
    property set question ($arg :  gw.api.productmodel.Question) {
      setRequireValue("question", 0, $arg)
    }
    
    
  }
  
  
}