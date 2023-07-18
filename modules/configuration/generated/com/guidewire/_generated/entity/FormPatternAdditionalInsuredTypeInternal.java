package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternAdditionalInsuredType.eti;FormPatternAdditionalInsuredType.eix;FormPatternAdditionalInsuredType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternAdditionalInsuredTypeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the AdditionalInsuredType field.
   * The Additional Insured Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AdditionalInsuredType getAdditionalInsuredType();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this Additional Insured Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Sets the value of the AdditionalInsuredType field.
   */
  public void setAdditionalInsuredType(typekey.AdditionalInsuredType value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  
}