package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.BooleanSelect.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionModalInput_BooleanSelectExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.BooleanSelect.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionModalInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      answerContainer.getAnswer(question).BooleanAnswer = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'onChange' attribute on PostOnChange at QuestionModalInput.BooleanSelect.pcf: line 27, column 64
    function onChange_0 () : void {
      if (onChangeBlock != null) onChangeBlock()
    }
    
    // 'optionLabel' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function optionLabel_5 (VALUE :  java.lang.Boolean) : java.lang.String {
      return question.getTextForBooleanSelect(VALUE)
    }
    
    // 'required' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function required_1 () : java.lang.Boolean {
      return question.Required
    }
    
    // 'valueRange' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function valueRange_6 () : java.lang.Object {
      return {true, false}
    }
    
    // 'value' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function valueRoot_4 () : java.lang.Object {
      return answerContainer.getAnswer(question)
    }
    
    // 'value' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function value_2 () : java.lang.Boolean {
      return answerContainer.getAnswer(question).BooleanAnswer
    }
    
    // 'valueRange' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BooleanSelectInput_Cell) at QuestionModalInput.BooleanSelect.pcf: line 25, column 19
    function verifyValueRange_8 () : void {
      var __valueRangeArg = {true, false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
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