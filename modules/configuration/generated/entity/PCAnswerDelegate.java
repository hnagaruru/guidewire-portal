package entity;

/**
 * PCAnswerDelegate
 * 
 *     Text, Logical and Numeric Answers supplied in a specific Question Set.
 *       Question Sets are groupings of questions utilized in the risk qualification process
 *       or to develop supplemental underwriting information. Specific to Policy Center
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PCAnswerDelegate.eti;PCAnswerDelegate.eix;PCAnswerDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface PCAnswerDelegate extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PCAnswerDelegate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PCAnswerDelegate>("entity.PCAnswerDelegate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLEANANSWER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BooleanAnswer", "BooleanAnswer");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICEANSWERCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceAnswerCode", "ChoiceAnswerCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEANSWER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateAnswer", "DateAnswer");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTEGERANSWER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("IntegerAnswer", "IntegerAnswer");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> QUESTIONCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("QuestionCode", "QuestionCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEXTANSWER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("TextAnswer", "TextAnswer");
  
  /**
   * Gets the generic answer value.  Which field gets retrieved depends
   * on the question type.
   * @return the answer value
   */
  public java.lang.Object getAnswerValue();
  
  
  /**
   * 
   * @return gets the question choice for this answer
   */
  public gw.api.productmodel.QuestionChoice getChoiceAnswer();
  
  
  /**
   * Gets the value of the ChoiceAnswerCode field.
   * Choice of the answer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceAnswerCode();
  
  
  /**
   * Gets the value of the DateAnswer field.
   * The answer in date form.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateAnswer();
  
  
  /**
   * Gets the value of the IntegerAnswer field.
   * Numeric component of answer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIntegerAnswer();
  
  
  /**
   * 
   * @return the question for this answer
   */
  public gw.api.productmodel.Question getQuestion();
  
  
  /**
   * Gets the value of the QuestionCode field.
   * Question that this answer answers
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuestionCode();
  
  
  /**
   * Gets the value of the TextAnswer field.
   * Either the answer's text.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTextAnswer();
  
  
  /**
   * Gets the value of the BooleanAnswer field.
   * Yes / no component of answer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanAnswer();
  
  
  /**
   * Sets the generic answer value.  Which field gets set depends
   * on the question type.
   * @param value the answer value to set
   */
  public void setAnswerValue(java.lang.Object value);
  
  
  /**
   * Sets the value of the BooleanAnswer field.
   */
  public void setBooleanAnswer(java.lang.Boolean value);
  
  
  /**
   * 
   * @param choice sets the question choice for this answer to the choice
   */
  public void setChoiceAnswer(gw.api.productmodel.QuestionChoice choice);
  
  
  /**
   * Sets the value of the ChoiceAnswerCode field.
   */
  public void setChoiceAnswerCode(java.lang.String value);
  
  
  /**
   * Sets the value of the DateAnswer field.
   */
  public void setDateAnswer(java.util.Date value);
  
  
  /**
   * Sets the value of the IntegerAnswer field.
   */
  public void setIntegerAnswer(java.lang.Integer value);
  
  
  /**
   * 
   * @param question the question to set as the question for this answer
   */
  public void setQuestion(gw.api.productmodel.Question question);
  
  
  /**
   * Sets the value of the QuestionCode field.
   */
  public void setQuestionCode(java.lang.String value);
  
  
  /**
   * Sets the value of the TextAnswer field.
   */
  public void setTextAnswer(java.lang.String value);
  
  
  
}