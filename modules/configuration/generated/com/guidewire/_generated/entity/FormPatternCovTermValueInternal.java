package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternCovTermValue.eti;FormPatternCovTermValue.eix;FormPatternCovTermValue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternCovTermValueInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Code field.
   * The code of the covterm value associated with the selected form pattern covterm.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the FormPatternCovTerm field.
   * The form pattern covterm containing this covterm value.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCovTerm getFormPatternCovTerm();
  
  
  public gw.pl.persistence.core.Key getFormPatternCovTermID();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPatternCovTerm field.
   */
  public void setFormPatternCovTerm(entity.FormPatternCovTerm value);
  
  
  public void setFormPatternCovTermID(gw.pl.persistence.core.Key value);
  
  
  
}