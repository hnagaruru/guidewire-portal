package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWInterventionClassificationCode.eti;UWInterventionClassificationCode.eix;UWInterventionClassificationCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWInterventionClassificationCodeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the ClassIndicator field.
   * The Class Indicator for the class code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassIndicator();
  
  
  /**
   * Gets the value of the Code field.
   * The building Class Code to be flagged for intervention
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Sets the value of the ClassIndicator field.
   */
  public void setClassIndicator(java.lang.String value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  
}