package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.BooleanCheckbox.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionModalInput_BooleanCheckboxExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionModalInput.BooleanCheckbox.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionModalInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=BooleanCheckboxInput_Cell) at QuestionModalInput.BooleanCheckbox.pcf: line 21, column 65
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      answerContainer.getAnswer(question).BooleanAnswer = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'onChange' attribute on PostOnChange at QuestionModalInput.BooleanCheckbox.pcf: line 23, column 64
    function onChange_0 () : void {
      if (onChangeBlock != null) onChangeBlock()
    }
    
    // 'required' attribute on CheckBoxCell (id=BooleanCheckboxInput_Cell) at QuestionModalInput.BooleanCheckbox.pcf: line 21, column 65
    function required_1 () : java.lang.Boolean {
      return question.Required
    }
    
    // 'value' attribute on CheckBoxCell (id=BooleanCheckboxInput_Cell) at QuestionModalInput.BooleanCheckbox.pcf: line 21, column 65
    function valueRoot_4 () : java.lang.Object {
      return answerContainer.getAnswer(question)
    }
    
    // 'value' attribute on CheckBoxCell (id=BooleanCheckboxInput_Cell) at QuestionModalInput.BooleanCheckbox.pcf: line 21, column 65
    function value_2 () : java.lang.Boolean {
      return answerContainer.getAnswer(question).BooleanAnswer
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