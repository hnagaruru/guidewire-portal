package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.DateField_NoPost.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionModalInput_DateField_NoPostExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.DateField_NoPost.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionModalInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=DateFieldInput_NoPost_Cell) at QuestionModalInput.DateField_NoPost.pcf: line 22, column 63
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      answerContainer.getAnswer(question).DateAnswer = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'required' attribute on DateCell (id=DateFieldInput_NoPost_Cell) at QuestionModalInput.DateField_NoPost.pcf: line 22, column 63
    function required_0 () : java.lang.Boolean {
      return question.Required
    }
    
    // 'value' attribute on DateCell (id=DateFieldInput_NoPost_Cell) at QuestionModalInput.DateField_NoPost.pcf: line 22, column 63
    function valueRoot_3 () : java.lang.Object {
      return answerContainer.getAnswer(question)
    }
    
    // 'value' attribute on DateCell (id=DateFieldInput_NoPost_Cell) at QuestionModalInput.DateField_NoPost.pcf: line 22, column 63
    function value_1 () : java.util.Date {
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