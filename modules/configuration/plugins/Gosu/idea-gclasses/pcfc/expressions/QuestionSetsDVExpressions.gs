package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionSetsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends QuestionSetsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at QuestionSetsDV.pcf: line 32, column 31
    function def_onEnter_4 (def :  pcf.QuestionSetLV) : void {
      def.onEnter(questionSet, answerContainer, onChangeBlock)
    }
    
    // 'def' attribute on ListViewInput at QuestionSetsDV.pcf: line 32, column 31
    function def_refreshVariables_5 (def :  pcf.QuestionSetLV) : void {
      def.refreshVariables(questionSet, answerContainer, onChangeBlock)
    }
    
    // 'value' attribute on HiddenInput (id=QuestionSetName_Input) at QuestionSetsDV.pcf: line 26, column 43
    function valueRoot_1 () : java.lang.Object {
      return questionSet
    }
    
    // 'value' attribute on HiddenInput (id=QuestionSetName_Input) at QuestionSetsDV.pcf: line 26, column 43
    function value_0 () : java.lang.String {
      return questionSet.Name
    }
    
    // 'visible' attribute on InputSet at QuestionSetsDV.pcf: line 22, column 76
    function visible_6 () : java.lang.Boolean {
      return answerContainer.hasAnswerForQuestionSet( questionSet )
    }
    
    property get questionSet () : gw.api.productmodel.QuestionSet {
      return getIteratedValue(1) as gw.api.productmodel.QuestionSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionSetsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InputIterator at QuestionSetsDV.pcf: line 20, column 55
    function value_7 () : gw.api.productmodel.QuestionSet[] {
      return questionSets
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
    
    property get questionSets () : gw.api.productmodel.QuestionSet[] {
      return getRequireValue("questionSets", 0) as gw.api.productmodel.QuestionSet[]
    }
    
    property set questionSets ($arg :  gw.api.productmodel.QuestionSet[]) {
      setRequireValue("questionSets", 0, $arg)
    }
    
    
  }
  
  
}