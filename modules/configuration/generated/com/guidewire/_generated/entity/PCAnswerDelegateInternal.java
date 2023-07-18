package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PCAnswerDelegate.eti;PCAnswerDelegate.eix;PCAnswerDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PCAnswerDelegateInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.question.PCAnswerDelegatePublicMethods {
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
   * Sets the value of the BooleanAnswer field.
   */
  public void setBooleanAnswer(java.lang.Boolean value);
  
  
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
   * Sets the value of the QuestionCode field.
   */
  public void setQuestionCode(java.lang.String value);
  
  
  /**
   * Sets the value of the TextAnswer field.
   */
  public void setTextAnswer(java.lang.String value);
  
  
  
}