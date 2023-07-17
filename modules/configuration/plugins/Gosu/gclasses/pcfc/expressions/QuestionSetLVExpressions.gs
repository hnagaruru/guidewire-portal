package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuestionSetLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=subQuestionText_Cell) at QuestionSetLV.pcf: line 54, column 26
    function value_42 () : java.lang.String {
      return gw.api.web.HtmlUtil.indent(supplementalText.Text, question.Indent)
    }
    
    property get supplementalText () : gw.api.productmodel.SupplementalText {
      return getIteratedValue(2) as gw.api.productmodel.SupplementalText
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends QuestionSetLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_10 (def :  pcf.QuestionModalInput_BooleanRadio_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_12 (def :  pcf.QuestionModalInput_BooleanSelect) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_14 (def :  pcf.QuestionModalInput_BooleanSelect_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_16 (def :  pcf.QuestionModalInput_ChoiceRadio) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_18 (def :  pcf.QuestionModalInput_ChoiceRadio_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_20 (def :  pcf.QuestionModalInput_ChoiceSelect) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_22 (def :  pcf.QuestionModalInput_ChoiceSelect_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_24 (def :  pcf.QuestionModalInput_DateField) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_26 (def :  pcf.QuestionModalInput_DateField_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_28 (def :  pcf.QuestionModalInput_IntegerField) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_30 (def :  pcf.QuestionModalInput_IntegerField_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_32 (def :  pcf.QuestionModalInput_StringField) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_34 (def :  pcf.QuestionModalInput_StringField_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_36 (def :  pcf.QuestionModalInput_StringTextArea) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_38 (def :  pcf.QuestionModalInput_StringTextArea_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_4 (def :  pcf.QuestionModalInput_BooleanCheckbox) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_6 (def :  pcf.QuestionModalInput_BooleanCheckbox_NoPost) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_onEnter_8 (def :  pcf.QuestionModalInput_BooleanRadio) : void {
      def.onEnter(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_11 (def :  pcf.QuestionModalInput_BooleanRadio_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_13 (def :  pcf.QuestionModalInput_BooleanSelect) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_15 (def :  pcf.QuestionModalInput_BooleanSelect_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_17 (def :  pcf.QuestionModalInput_ChoiceRadio) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_19 (def :  pcf.QuestionModalInput_ChoiceRadio_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_21 (def :  pcf.QuestionModalInput_ChoiceSelect) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_23 (def :  pcf.QuestionModalInput_ChoiceSelect_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_25 (def :  pcf.QuestionModalInput_DateField) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_27 (def :  pcf.QuestionModalInput_DateField_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_29 (def :  pcf.QuestionModalInput_IntegerField) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_31 (def :  pcf.QuestionModalInput_IntegerField_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_33 (def :  pcf.QuestionModalInput_StringField) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_35 (def :  pcf.QuestionModalInput_StringField_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_37 (def :  pcf.QuestionModalInput_StringTextArea) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_39 (def :  pcf.QuestionModalInput_StringTextArea_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_5 (def :  pcf.QuestionModalInput_BooleanCheckbox) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_7 (def :  pcf.QuestionModalInput_BooleanCheckbox_NoPost) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'def' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function def_refreshVariables_9 (def :  pcf.QuestionModalInput_BooleanRadio) : void {
      def.refreshVariables(question, answerContainer, gw.pcf.QuestionSetUIHelper.wrapOnChangeBlock(answerContainer, question, onChangeBlock, CurrentLocation))
    }
    
    // 'mode' attribute on ModalCellRef at QuestionSetLV.pcf: line 39, column 76
    function mode_40 () : java.lang.Object {
      return question.getInputSetMode(answerContainer, onChangeBlock)
    }
    
    // 'sortBy' attribute on IteratorSort at QuestionSetLV.pcf: line 49, column 26
    function sortBy_41 (supplementalText :  gw.api.productmodel.SupplementalText) : java.lang.Object {
      return supplementalText.Priority
    }
    
    // 'value' attribute on TextCell (id=questionText_Cell) at QuestionSetLV.pcf: line 35, column 24
    function value_2 () : java.lang.String {
      return gw.api.web.HtmlUtil.indent(question.Text, question.Indent)
    }
    
    // 'value' attribute on RowIterator at QuestionSetLV.pcf: line 46, column 80
    function value_44 () : java.util.List<gw.api.productmodel.SupplementalText> {
      return question.SupplementalTexts
    }
    
    property get question () : gw.api.productmodel.Question {
      return getIteratedValue(1) as gw.api.productmodel.Question
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/question/QuestionSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuestionSetLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at QuestionSetLV.pcf: line 20, column 46
    function initialValue_0 () : gw.api.productmodel.Question[] {
      return questionSet.getOrderedQuestions().where(\ q -> answerContainer.getAnswer(q) != null and q.isQuestionVisible(answerContainer))
    }
    
    // 'sortBy' attribute on IteratorSort at QuestionSetLV.pcf: line 30, column 24
    function sortBy_1 (question :  gw.api.productmodel.Question) : java.lang.Object {
      return question.Priority
    }
    
    // 'value' attribute on RowIterator at QuestionSetLV.pcf: line 27, column 50
    function value_45 () : gw.api.productmodel.Question[] {
      return questions
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
    
    property get questionSet () : gw.api.productmodel.QuestionSet {
      return getRequireValue("questionSet", 0) as gw.api.productmodel.QuestionSet
    }
    
    property set questionSet ($arg :  gw.api.productmodel.QuestionSet) {
      setRequireValue("questionSet", 0, $arg)
    }
    
    property get questions () : gw.api.productmodel.Question[] {
      return getVariableValue("questions", 0) as gw.api.productmodel.Question[]
    }
    
    property set questions ($arg :  gw.api.productmodel.Question[]) {
      setVariableValue("questions", 0, $arg)
    }
    
    
  }
  
  
}