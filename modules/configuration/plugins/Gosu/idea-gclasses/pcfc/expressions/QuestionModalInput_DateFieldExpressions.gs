package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.DateField.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionModalInput_DateFieldExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.DateField.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionModalInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=DateFieldInput_Cell) at QuestionModalInput.DateField.pcf: line 22, column 62
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      answerContainer.getAnswer(question).DateAnswer = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'onChange' attribute on PostOnChange at QuestionModalInput.DateField.pcf: line 24, column 64
    function onChange_0 () : void {
      if (onChangeBlock != null) onChangeBlock()
    }
    
    // 'required' attribute on DateCell (id=DateFieldInput_Cell) at QuestionModalInput.DateField.pcf: line 22, column 62
    function required_1 () : java.lang.Boolean {
      return question.Required
    }
    
    // 'value' attribute on DateCell (id=DateFieldInput_Cell) at QuestionModalInput.DateField.pcf: line 22, column 62
    function valueRoot_4 () : java.lang.Object {
      return answerContainer.getAnswer(question)
    }
    
    // 'value' attribute on DateCell (id=DateFieldInput_Cell) at QuestionModalInput.DateField.pcf: line 22, column 62
    function value_2 () : java.util.Date {
      return answerContainer.getAnswer(question).DateAnswer
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